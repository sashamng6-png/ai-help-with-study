'use client'

import { ArrowRight, Check, Flag, X } from 'lucide-react'
import { POINTS_PER_CORRECT } from '@/lib/engine'
import type { Level, SessionQuestion, Subject, Topic } from '@/lib/types'
import { cn } from '@/lib/utils'
import { MentorExplanation } from './mentor-explanation'

const LETTERS = ['A', 'B', 'C', 'D']

interface QuizCardProps {
  question: SessionQuestion
  number: number
  total: number
  chosen: number | null
  subject: Subject
  topic: Topic | undefined
  level: Level
  aiEnabled: boolean
  apiKey: string
  onChoose: (index: number) => void
  onNext: () => void
  onAIError: (err: unknown) => void
}

export function QuizCard({
  question,
  number,
  total,
  chosen,
  subject,
  topic,
  level,
  aiEnabled,
  apiKey,
  onChoose,
  onNext,
  onAIError,
}: QuizCardProps) {
  const answered = chosen !== null
  const isCorrect = answered && chosen === question.answer
  const isLast = number === total

  return (
    <article className="flex flex-col gap-5 rounded-2xl border border-slate bg-graphite p-5 sm:p-7">
      <div className="flex flex-wrap items-center gap-2 text-xs text-silver">
        <span className="rounded-md bg-slate px-2 py-1 font-medium text-chalk">Завдання {number}</span>
        <span>{question.topicTitle}</span>
      </div>

      <h2 className="text-pretty font-heading text-lg font-medium leading-snug text-chalk sm:text-xl">{question.text}</h2>

      <div role="group" aria-label="Варіанти відповіді" className="grid gap-2.5 sm:grid-cols-2">
        {question.options.map((option, i) => {
          const correctOption = i === question.answer
          const chosenOption = i === chosen
          return (
            <button
              key={option}
              type="button"
              disabled={answered}
              onClick={() => onChoose(i)}
              className={cn(
                'group flex items-center gap-3 rounded-xl border p-3.5 text-left text-sm leading-relaxed disabled:cursor-default',
                !answered && 'border-slate bg-ink hover:-translate-y-0.5 hover:border-silver/60 hover:bg-slate/40',
                answered && correctOption && 'border-success/60 bg-success/10 text-chalk',
                answered && chosenOption && !correctOption && 'animate-shake border-destructive/60 bg-destructive/10 text-chalk',
                answered && !correctOption && !chosenOption && 'border-slate bg-ink opacity-45',
              )}
            >
              <span
                className={cn(
                  'flex size-8 shrink-0 items-center justify-center rounded-lg border font-heading text-xs font-semibold',
                  !answered && 'border-slate bg-graphite text-silver group-hover:border-silver/60 group-hover:text-chalk',
                  answered && correctOption && 'border-success bg-success text-ink',
                  answered && chosenOption && !correctOption && 'border-destructive bg-destructive text-chalk',
                  answered && !correctOption && !chosenOption && 'border-slate text-silver',
                )}
              >
                {answered && correctOption ? (
                  <Check className="size-4" aria-hidden="true" />
                ) : answered && chosenOption ? (
                  <X className="size-4" aria-hidden="true" />
                ) : (
                  LETTERS[i]
                )}
              </span>
              <span className="text-chalk">{option}</span>
            </button>
          )
        })}
      </div>

      <p className="sr-only" aria-live="assertive">
        {answered ? (isCorrect ? `Правильно! Плюс ${POINTS_PER_CORRECT} балів.` : 'Неправильно.') : ''}
      </p>

      <div className="reveal" data-open={answered}>
        <div>
          {answered && (
            <div className="flex flex-col gap-4 pt-1">
              <div
                className={cn(
                  'flex items-center gap-2 text-sm font-medium',
                  isCorrect ? 'text-success' : 'text-destructive',
                )}
              >
                {isCorrect ? (
                  <>
                    <Check className="size-4" aria-hidden="true" />
                    Правильно! +{POINTS_PER_CORRECT} балів
                  </>
                ) : (
                  <>
                    <X className="size-4" aria-hidden="true" />
                    Не зовсім. Розберімо разом
                  </>
                )}
              </div>

              <MentorExplanation
                question={question}
                chosen={chosen}
                subject={subject}
                topic={topic}
                level={level}
                aiEnabled={aiEnabled}
                apiKey={apiKey}
                onAIError={onAIError}
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onNext}
                  autoFocus
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-chalk px-6 py-3 text-sm font-semibold text-ink hover:bg-chalk/90 sm:w-auto"
                >
                  {isLast ? (
                    <>
                      Завершити заняття
                      <Flag className="size-4" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      Наступне завдання
                      <ArrowRight className="size-4 group-hover:translate-x-0.5" aria-hidden="true" />
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
