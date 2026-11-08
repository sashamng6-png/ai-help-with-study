'use client'

import { useCallback, useState } from 'react'
import { getSubject } from '@/lib/data'
import { OpenRouterError } from '@/lib/openrouter'
import { pointsStore, settingsStore, usePersistent } from '@/lib/storage'
import type { SessionConfig } from '@/lib/types'
import { ErrorToast, type AppError } from './error-toast'
import { LearningView } from './learning-view'
import { SettingsModal } from './settings-modal'
import { SubjectPicker } from './subject-picker'
import { TopBar } from './top-bar'

interface Run {
  id: number
  recentKeys: string[]
  skipMaterial: boolean
}

export function BlackboardApp() {
  const settings = usePersistent(settingsStore)
  const points = usePersistent(pointsStore)

  const [config, setConfig] = useState<SessionConfig | null>(null)
  const [run, setRun] = useState<Run>({ id: 0, recentKeys: [], skipMaterial: false })
  const [error, setError] = useState<AppError | null>(null)
  const [offline, setOffline] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const aiEnabled = Boolean(settings.apiKey) && settings.status === 'valid' && !offline
  const subject = getSubject(config?.subjectId)

  const reportError = useCallback((err: unknown) => {
    if (err instanceof OpenRouterError) {
      const titles = {
        auth: 'Некоректний API-ключ',
        network: 'Немає підключення до OpenRouter',
        request: 'Помилка запиту до AI-наставника',
      } as const
      if (err.kind === 'auth') settingsStore.set((s) => ({ ...s, status: 'invalid' }))
      setError({ title: titles[err.kind], message: err.message, offlineAction: true })
      return
    }
    setError({
      title: 'Щось пішло не так',
      message: 'Не вдалося отримати динамічне пояснення. Локальна база матеріалів доступна завжди.',
      offlineAction: true,
    })
  }, [])

  const goOffline = () => {
    setOffline(true)
    setError(null)
    setSettingsOpen(false)
  }

  const startSession = (next: SessionConfig) => {
    const nextSubject = getSubject(next.subjectId)
    const { choice } = next
    const topicValid = choice.kind === 'mix' || nextSubject?.topics.some((t) => t.id === choice.topicId)
    if (!nextSubject || !topicValid) {
      setError({
        title: 'Некоректний вибір теми',
        message: 'Обери предмет і тему (або «Навчальний мікс»), щоб розпочати заняття.',
        offlineAction: false,
      })
      return
    }
    setConfig(next)
    setRun((r) => ({ id: r.id + 1, recentKeys: [], skipMaterial: false }))
  }

  const retry = (recentKeys: string[]) => {
    setRun((r) => ({ id: r.id + 1, recentKeys, skipMaterial: true }))
  }

  const exitToPicker = () => setConfig(null)

  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar
        points={points}
        aiEnabled={aiEnabled}
        onOpenSettings={() => setSettingsOpen(true)}
      />

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-6 sm:px-6 lg:pt-10">
        {config && subject ? (
          <div key={`learning-${run.id}`} className="animate-card-in">
            <LearningView
              subject={subject}
              config={config}
              recentKeys={run.recentKeys}
              skipMaterial={run.skipMaterial}
              aiEnabled={aiEnabled}
              apiKey={settings.apiKey}
              onAIError={reportError}
              onRetry={retry}
              onExit={exitToPicker}
              hasProfile={false}
            />
          </div>
        ) : (
          <div key="empty" className="animate-card-in">
            <SubjectPicker initialSubjectId={config?.subjectId} onStart={startSession} />
          </div>
        )}
      </main>

      {settingsOpen && (
        <SettingsModal
          settings={settings}
          aiEnabled={aiEnabled}
          offline={offline}
          onClose={() => setSettingsOpen(false)}
          onConnected={() => setOffline(false)}
          onGoOffline={() => setOffline(true)}
          onError={reportError}
        />
      )}

      {error && (
        <ErrorToast
          error={error}
          onDismiss={() => setError(null)}
          onGoOffline={goOffline}
        />
      )}
    </div>
  )
}
