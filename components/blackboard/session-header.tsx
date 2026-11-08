import { ArrowLeft, Timer } from 'lucide-react'
import { formatDuration } from '@/lib/engine'
import { LEVEL_LABELS, type Level, type SessionQuestion, type Subject } from '@/lib/types'
import { cn } from '@/lib/utils'

interface SessionHeaderProps {
  subject: Subject
  title: string
  level: Level
  total: number
  current: number
  answers: (number | null)[]
  questions: SessionQuestion[]
  elapsed: number
  onExit: () => void
}

export function SessionHeader({ subject, title, level, total, current, answers, questions, elapsed, onExit }: SessionHeaderProps) {
  const Icon = subject.icon
  const stepLabel = current < 0 ? 'Конспект' : current >= total ? 'Завершено' : `${current + 1}/${total}`

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-slate bg-graphite p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-chalk text-ink">
            <Icon className="size-5" aria-hidden="true" />
          </span>
          <div className="flex min-w-0 flex-col">
            <span className="text-xs text-silver">
              {subject.name} · {LEVEL_LABELS[level]}
            </span>
            <span className="truncate font-heading text-base font-semibold text-chalk sm:text-lg">{title}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="flex items-center gap-1.5 rounded-lg border border-slate bg-ink px-3 py-2 font-mono text-sm tabular-nums text-chalk"
            aria-label={`Тривалість заняття ${formatDuration(elapsed)}`}
          >
            <Timer className="size-4 text-silver" aria-hidden="true" />
            {formatDuration(elapsed)}
          </span>
          <button
            type="button"
            onClick={onExit}
            className="flex items-center gap-1.5 rounded-lg border border-slate px-3 py-2 text-sm text-silver hover:bg-slate hover:text-chalk"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Інший предмет</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <ol className="flex flex-1 gap-1.5" aria-label="Прогрес заняття">
          {Array.from({ length: total }).map((_, i) => {
            const answer = answers[i]
            const answered = answer !== null
            const correct = answered && answer === questions[i]?.answer
            return (
              <li
                key={i}
                aria-current={i === current ? 'step' : undefined}
                className={cn(
                  'h-1.5 flex-1 rounded-full transition-colors duration-500',
                  answered ? (correct ? 'bg-success' : 'bg-destructive') : i === current ? 'bg-chalk' : 'bg-slate',
                )}
              >
                <span className="sr-only">
                  Завдання {i + 1}: {answered ? (correct ? 'правильно' : 'помилка') : 'не виконано'}
                </span>
              </li>
            )
          })}
        </ol>
        <span className="min-w-20 text-right font-heading text-sm font-semibold tabular-nums text-chalk">{stepLabel}</span>
      </div>
    </div>
  )
}
