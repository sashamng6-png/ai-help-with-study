'use client'

import { Bot, Sparkles } from 'lucide-react'
import useSWR from 'swr'
import { adaptExplanation } from '@/lib/engine'
import { requestExplanation } from '@/lib/openrouter'
import { settingsStore, usePersistent } from '@/lib/storage'
import { LEVEL_LABELS, type Level, type SessionQuestion, type Subject, type Topic } from '@/lib/types'

interface MentorExplanationProps {
  question: SessionQuestion
  chosen: number
  subject: Subject
  topic: Topic | undefined
  level: Level
  aiEnabled: boolean
  apiKey: string
  onAIError: (err: unknown) => void
}

export function MentorExplanation({
  question,
  chosen,
  subject,
  topic,
  level,
  aiEnabled,
  apiKey,
  onAIError,
}: MentorExplanationProps) {
  const local = adaptExplanation(question, topic, level)
  const { model } = usePersistent(settingsStore)

  const { data, error, isLoading } = useSWR(
    aiEnabled ? ['mentor', model, question.key, chosen, level, question.options.join('|')] : null,
    () => requestExplanation({ apiKey, model, subjectName: subject.name, level, question, chosenIndex: chosen }),
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
      onError: onAIError,
    },
  )

  const fromAI = aiEnabled && Boolean(data) && !error
  const text = fromAI ? data! : local

  return (
    <section
      aria-label="AI-наставник пояснює"
      aria-busy={aiEnabled && isLoading}
      className="rounded-xl border border-slate bg-ink/70 p-4 sm:p-5"
    >
      <header className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span className="flex size-8 items-center justify-center rounded-lg bg-slate text-chalk">
            <Bot className="size-4" aria-hidden="true" />
          </span>
          <h3 className="text-sm font-semibold text-chalk">AI-наставник пояснює</h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-slate px-2.5 py-1 text-[11px] text-silver">
          {fromAI && <Sparkles className="size-3" aria-hidden="true" />}
          {fromAI ? 'Динамічне пояснення' : 'Локальна база'} · {LEVEL_LABELS[level]}
        </span>
      </header>

      {aiEnabled && isLoading ? (
        <div className="mt-4 flex flex-col gap-2" aria-hidden="true">
          <div className="h-3 w-11/12 animate-pulse rounded bg-slate" />
          <div className="h-3 w-full animate-pulse rounded bg-slate [animation-delay:150ms]" />
          <div className="h-3 w-3/4 animate-pulse rounded bg-slate [animation-delay:300ms]" />
          <span className="mt-1 text-xs text-silver">Наставник формулює пояснення…</span>
        </div>
      ) : (
        <p className="mt-4 animate-fade-in whitespace-pre-line text-pretty text-sm leading-relaxed text-chalk/90">{text}</p>
      )}
    </section>
  )
}
