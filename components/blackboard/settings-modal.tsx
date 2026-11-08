'use client'

import { Check, CircleAlert, Cpu, Eye, EyeOff, KeyRound, LoaderCircle, ShieldCheck, X, Zap } from 'lucide-react'
import { useId, useState } from 'react'
import { AI_MODELS, getModelName, OpenRouterError, testModel, verifyApiKey } from '@/lib/openrouter'
import { settingsStore, type KeyStatus, type Settings } from '@/lib/storage'
import { cn } from '@/lib/utils'

type ModelTest = { state: 'loading' } | { state: 'ok' | 'error'; message: string }

interface SettingsModalProps {
  settings: Settings
  aiEnabled: boolean
  offline: boolean
  onClose: () => void
  onConnected: () => void
  onGoOffline: () => void
  onError: (err: unknown) => void
}

export function SettingsModal({ settings, aiEnabled, offline, onClose, onConnected, onGoOffline, onError }: SettingsModalProps) {
  const titleId = useId()
  const inputId = useId()
  const [draft, setDraft] = useState(settings.apiKey)
  const [visible, setVisible] = useState(false)
  const [checking, setChecking] = useState(false)
  const [status, setStatus] = useState<KeyStatus>(settings.status)
  const [note, setNote] = useState<string | null>(null)
  const [model, setModel] = useState(settings.model)
  const [modelTests, setModelTests] = useState<Record<string, ModelTest>>({})

  const trimmed = draft.trim()

  const runModelTest = async (modelId: string) => {
    if (!trimmed) {
      setModelTests((prev) => ({ ...prev, [modelId]: { state: 'error', message: 'Спершу введи API-ключ.' } }))
      return
    }
    setModelTests((prev) => ({ ...prev, [modelId]: { state: 'loading' } }))
    try {
      const { ms } = await testModel(trimmed, modelId)
      setModelTests((prev) => ({ ...prev, [modelId]: { state: 'ok', message: `Працює · ${ms} мс` } }))
    } catch (err) {
      if (err instanceof OpenRouterError && err.kind === 'auth') setStatus('invalid')
      setModelTests((prev) => ({
        ...prev,
        [modelId]: { state: 'error', message: err instanceof Error ? err.message : 'Не вдалося перевірити модель.' },
      }))
    }
  }

  const verify = async (): Promise<KeyStatus> => {
    if (!trimmed) {
      setNote('Введи API-ключ, щоб перевірити підключення.')
      return 'unknown'
    }
    setChecking(true)
    setNote(null)
    try {
      await verifyApiKey(trimmed)
      setStatus('valid')
      setNote('Ключ дійсний. AI-наставник готовий до роботи.')
      return 'valid'
    } catch (err) {
      const next: KeyStatus = err instanceof OpenRouterError && err.kind === 'auth' ? 'invalid' : 'unknown'
      setStatus(next)
      setNote(err instanceof Error ? err.message : 'Не вдалося перевірити ключ.')
      onError(err)
      return next
    } finally {
      setChecking(false)
    }
  }

  const save = async () => {
    if (!trimmed) {
      settingsStore.set({ apiKey: '', status: 'unknown', model })
      onClose()
      return
    }
    const finalStatus = trimmed === settings.apiKey && status !== 'unknown' ? status : await verify()
    settingsStore.set({ apiKey: trimmed, status: finalStatus, model })
    if (finalStatus === 'valid') {
      onConnected()
      onClose()
    }
  }

  const connected = aiEnabled && trimmed === settings.apiKey

  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-ink/80 p-4 backdrop-blur-sm animate-in fade-in duration-200 sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose()
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[90dvh] w-full max-w-md overflow-y-auto animate-in slide-in-from-bottom-4 zoom-in-95 rounded-2xl border border-slate bg-graphite p-6 shadow-2xl duration-300"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 id={titleId} className="font-heading text-lg font-semibold text-chalk">
              Налаштування AI
            </h2>
            <p className="text-sm leading-relaxed text-silver">
              Підключи OpenRouter для динамічних пояснень. Без ключа все працює з локальної бази.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-silver hover:bg-slate hover:text-chalk"
            aria-label="Закрити налаштування"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
        </div>

        <div
          className={cn(
            'mt-5 flex items-center gap-3 rounded-xl border px-4 py-3',
            connected ? 'border-success/30 bg-success/5' : 'border-slate bg-ink/40',
          )}
          aria-live="polite"
        >
          <span
            className={cn('size-2.5 shrink-0 rounded-full', connected ? 'animate-pulse-soft bg-success text-success' : 'bg-silver/50')}
            aria-hidden="true"
          />
          <div className="flex min-w-0 flex-col">
            <span className={cn('text-sm font-medium', connected ? 'text-success' : 'text-chalk')}>
              {connected ? 'AI-наставник підключено' : 'Автономний режим'}
            </span>
            <span className="truncate text-xs text-silver">
              {connected
                ? `Модель: ${getModelName(settings.model)}`
                : offline && settings.status === 'valid'
                  ? 'AI вимкнено вручну — пояснення з локальної бази'
                  : 'Пояснення беруться з локальної бази'}
            </span>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <label htmlFor={inputId} className="text-sm font-medium text-chalk">
            API-ключ OpenRouter
          </label>
          <div className="flex items-center gap-2 rounded-lg border border-slate bg-ink px-3 focus-within:border-silver/70">
            <KeyRound className="size-4 shrink-0 text-silver" aria-hidden="true" />
            <input
              id={inputId}
              type={visible ? 'text' : 'password'}
              value={draft}
              onChange={(e) => {
                setDraft(e.target.value)
                setStatus('unknown')
                setNote(null)
              }}
              placeholder="sk-or-v1-..."
              autoComplete="off"
              spellCheck={false}
              autoFocus
              className="h-11 min-w-0 flex-1 bg-transparent font-mono text-sm text-chalk placeholder:text-silver/50 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setVisible((v) => !v)}
              className="rounded p-1 text-silver hover:text-chalk"
              aria-label={visible ? 'Приховати ключ' : 'Показати ключ'}
            >
              {visible ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
            </button>
          </div>
          {note && (
            <p
              className={cn(
                'text-xs leading-relaxed',
                status === 'valid' ? 'text-success' : status === 'invalid' ? 'text-destructive' : 'text-silver',
              )}
            >
              {note}
            </p>
          )}
          <p className="text-xs leading-relaxed text-silver">
            Ключ зберігається лише у твоєму браузері (localStorage) і надсилається напряму до OpenRouter.
          </p>
        </div>

        <fieldset className="mt-5 flex flex-col gap-2">
          <legend className="mb-2 flex items-center gap-2 text-sm font-medium text-chalk">
            <Cpu className="size-4 text-silver" aria-hidden="true" />
            Модель штучного інтелекту
          </legend>
          <div className="flex flex-col gap-2">
            {AI_MODELS.map((m) => {
              const selected = model === m.id
              const test = modelTests[m.id]
              return (
                <div
                  key={m.id}
                  className={cn(
                    'flex flex-col gap-1.5 rounded-lg border px-3 py-2.5 transition-colors',
                    selected ? 'border-silver/70 bg-slate/60' : 'border-slate bg-ink/40 hover:border-silver/40',
                  )}
                >
                  <div className="flex items-center gap-3">
                    <label className="flex min-w-0 flex-1 cursor-pointer items-center gap-3">
                      <input
                        type="radio"
                        name="ai-model"
                        value={m.id}
                        checked={selected}
                        onChange={() => setModel(m.id)}
                        className="peer sr-only"
                      />
                      <span
                        className={cn(
                          'flex size-4 shrink-0 items-center justify-center rounded-full border peer-focus-visible:ring-2 peer-focus-visible:ring-silver',
                          selected ? 'border-chalk bg-chalk' : 'border-silver/60',
                        )}
                        aria-hidden="true"
                      >
                        {selected && <span className="size-1.5 rounded-full bg-ink" />}
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="truncate text-sm text-chalk">
                          <span className="text-silver">{m.provider}:</span> {m.name}
                        </span>
                        <span className="truncate font-mono text-[11px] text-silver/70">{m.id}</span>
                      </span>
                    </label>
                    <button
                      type="button"
                      onClick={() => runModelTest(m.id)}
                      disabled={test?.state === 'loading'}
                      className="flex shrink-0 items-center gap-1.5 rounded-md border border-slate px-2.5 py-1.5 text-xs font-medium text-chalk hover:bg-slate disabled:opacity-60"
                      aria-label={`Перевірити модель ${m.name}`}
                    >
                      {test?.state === 'loading' ? (
                        <LoaderCircle className="size-3.5 animate-spin" aria-hidden="true" />
                      ) : (
                        <Zap className="size-3.5" aria-hidden="true" />
                      )}
                      Тест
                    </button>
                  </div>
                  {test && test.state !== 'loading' && (
                    <p
                      className={cn(
                        'flex items-start gap-1.5 pl-7 text-xs leading-relaxed',
                        test.state === 'ok' ? 'text-success' : 'text-destructive',
                      )}
                      aria-live="polite"
                    >
                      {test.state === 'ok' ? (
                        <Check className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                      ) : (
                        <CircleAlert className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                      )}
                      <span className="break-words">{test.message}</span>
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </fieldset>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={verify}
            disabled={checking}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate px-4 py-2.5 text-sm font-medium text-chalk hover:bg-slate disabled:opacity-60"
          >
            {checking ? (
              <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
            ) : (
              <ShieldCheck className="size-4" aria-hidden="true" />
            )}
            Перевірити ключ
          </button>
          <button
            type="button"
            onClick={save}
            disabled={checking}
            className="flex-1 rounded-lg bg-chalk px-4 py-2.5 text-sm font-medium text-ink hover:bg-chalk/90 disabled:opacity-60"
          >
            Зберегти
          </button>
        </div>

        {connected && (
          <button
            type="button"
            onClick={() => {
              onGoOffline()
              onClose()
            }}
            className="mt-3 w-full text-center text-xs text-silver underline-offset-4 hover:text-chalk hover:underline"
          >
            Перейти до автономного навчання
          </button>
        )}
      </div>
    </div>
  )
}
