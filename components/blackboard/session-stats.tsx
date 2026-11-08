import { Check, LayoutGrid, Lock, RotateCcw, X } from 'lucide-react'
import { ACHIEVEMENTS, type SessionResult } from '@/lib/achievements'
import { formatDuration, masteryZone } from '@/lib/engine'
import type { SessionQuestion } from '@/lib/types'
import { cn } from '@/lib/utils'

export interface StatsSummary extends SessionResult {
  pointsEarned: number
  unlocked: string[]
  newlyUnlocked: string[]
}

interface SessionStatsProps {
  summary: StatsSummary
  questions: SessionQuestion[]
  answers: (number | null)[]
  isMix: boolean
  onRetry: () => void
  onExit: () => void
}

const TONE_TEXT = { success: 'text-success', warning: 'text-warning', destructive: 'text-destructive' } as const

export function SessionStats({ summary, questions, answers, isMix, onRetry, onExit }: SessionStatsProps) {
  const accuracy = summary.total ? Math.round((summary.correct / summary.total) * 100) : 0
  const zone = masteryZone(accuracy)

  return (
    <div className="flex flex-col gap-5">
      <section className="rounded-2xl border border-slate bg-graphite p-5 sm:p-7" aria-labelledby="stats-heading">
        <span className="text-xs uppercase tracking-widest text-silver">Заняття завершено</span>
        <h2 id="stats-heading" className="mt-1 font-heading text-xl font-semibold text-chalk sm:text-2xl">
          Твій результат
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-[auto_1fr] md:items-center">
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-7xl font-semibold tabular-nums tracking-tight text-silver-gradient">
              {accuracy}
            </span>
            <span className="font-heading text-2xl text-silver">%</span>
          </div>

          <dl className="grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-slate bg-ink/60 p-3 sm:p-4">
              <dt className="text-xs text-silver">Правильно</dt>
              <dd className="mt-1 font-heading text-lg font-semibold tabular-nums text-chalk">
                {summary.correct}/{summary.total}
              </dd>
            </div>
            <div className="rounded-xl border border-slate bg-ink/60 p-3 sm:p-4">
              <dt className="text-xs text-silver">Бали</dt>
              <dd className="mt-1 font-heading text-lg font-semibold tabular-nums text-chalk">+{summary.pointsEarned}</dd>
            </div>
            <div className="rounded-xl border border-slate bg-ink/60 p-3 sm:p-4">
              <dt className="text-xs text-silver">Час</dt>
              <dd className="mt-1 font-heading text-lg font-semibold tabular-nums text-chalk">
                {formatDuration(summary.durationSec)}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-silver">Рівень засвоєння теми</span>
            <span className={cn('font-medium', TONE_TEXT[zone.tone])}>{zone.label}</span>
          </div>
          <div
            className="relative h-3"
            role="meter"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={accuracy}
            aria-label="Рівень засвоєння"
          >
            <div className="flex h-full overflow-hidden rounded-full">
              <div className="h-full w-[40%] bg-destructive/25" />
              <div className="h-full w-[35%] bg-warning/25" />
              <div className="h-full w-[25%] bg-success/25" />
            </div>
            <div className="absolute inset-y-0 left-0 overflow-hidden rounded-full" style={{ width: `${accuracy}%` }}>
              <div className="flex h-full w-full origin-left animate-in gap-1 slide-in-from-left duration-1000">
                <div
                  className={cn(
                    'h-full w-full rounded-full',
                    zone.tone === 'success' ? 'bg-success' : zone.tone === 'warning' ? 'bg-warning' : 'bg-destructive',
                  )}
                />
              </div>
            </div>
          </div>
          <div className="flex text-[11px] text-silver" aria-hidden="true">
            <span className="w-[40%]">0%</span>
            <span className="w-[35%]">40%</span>
            <span className="flex w-[25%] justify-between">
              <span>75%</span>
              <span>100%</span>
            </span>
          </div>
        </div>

        <ul className="mt-6 flex flex-col gap-2" aria-label="Розбір відповідей">
          {questions.map((q, i) => {
            const ok = answers[i] === q.answer
            return (
              <li key={q.key} className="flex items-start gap-3 rounded-lg bg-ink/50 px-3 py-2.5 text-sm">
                <span
                  className={cn(
                    'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                    ok ? 'bg-success text-ink' : 'bg-destructive text-chalk',
                  )}
                >
                  {ok ? <Check className="size-3" aria-hidden="true" /> : <X className="size-3" aria-hidden="true" />}
                  <span className="sr-only">{ok ? 'Правильно' : 'Помилка'}</span>
                </span>
                <span className="min-w-0 flex-1 leading-relaxed text-chalk">{q.text}</span>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="rounded-2xl border border-slate bg-graphite p-5 sm:p-7" aria-labelledby="badges-heading">
        <div className="flex items-baseline justify-between gap-3">
          <h2 id="badges-heading" className="font-heading text-lg font-semibold text-chalk">
            Досягнення
          </h2>
          <span className="text-xs text-silver">
            {summary.unlocked.length}/{ACHIEVEMENTS.length} відкрито
          </span>
        </div>
        <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {ACHIEVEMENTS.map((a, i) => {
            const unlocked = summary.unlocked.includes(a.id)
            const fresh = summary.newlyUnlocked.includes(a.id)
            const Icon = unlocked ? a.icon : Lock
            return (
              <li
                key={a.id}
                className={cn(
                  'relative flex flex-col gap-3 rounded-xl border p-4',
                  fresh ? 'animate-card-in border-chalk/70 bg-slate' : unlocked ? 'border-slate bg-ink/60' : 'border-dashed border-slate opacity-50',
                )}
                style={fresh ? { animationDelay: `${200 + i * 90}ms` } : undefined}
              >
                {fresh && (
                  <span className="absolute right-3 top-3 rounded-full bg-chalk px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">
                    Нове
                  </span>
                )}
                <span
                  className={cn(
                    'flex size-9 items-center justify-center rounded-lg',
                    unlocked ? 'bg-chalk text-ink' : 'bg-slate text-silver',
                    fresh && 'animate-pop',
                  )}
                >
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-chalk">{a.title}</span>
                  <span className="text-xs leading-relaxed text-silver">{a.description}</span>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onExit}
          className="flex items-center justify-center gap-2 rounded-lg border border-slate px-6 py-3 text-sm font-medium text-chalk hover:bg-slate"
        >
          <LayoutGrid className="size-4" aria-hidden="true" />
          Обрати інший предмет
        </button>
        <button
          type="button"
          onClick={onRetry}
          className="flex items-center justify-center gap-2 rounded-lg bg-chalk px-6 py-3 text-sm font-semibold text-ink hover:bg-chalk/90"
        >
          <RotateCcw className="size-4" aria-hidden="true" />
          {isMix ? 'Новий мікс' : 'Пройти знову'}
        </button>
      </div>
    </div>
  )
}
