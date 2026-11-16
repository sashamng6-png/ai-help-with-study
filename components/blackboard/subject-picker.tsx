'use client'

import { ArrowRight, BookOpen, Lightbulb, Shuffle } from 'lucide-react'
import { useRef, useState } from 'react'
import { SUBJECTS, getSubject } from '@/lib/data'
import { SESSION_LENGTHS } from '@/lib/engine'
import { LEVEL_LABELS, type Level, type SessionConfig, type SessionLength, type TopicChoice } from '@/lib/types'
import { cn } from '@/lib/utils'

interface SubjectPickerProps {
  initialSubjectId?: string
  onStart: (config: SessionConfig) => void
}

const LEVELS: Level[] = ['easy', 'medium', 'hard']

export function SubjectPicker({ initialSubjectId, onStart }: SubjectPickerProps) {
  const [subjectId, setSubjectId] = useState<string | null>(initialSubjectId ?? null)
  const [choice, setChoice] = useState<TopicChoice | null>(null)
  const [level, setLevel] = useState<Level>('medium')
  const [count, setCount] = useState<SessionLength>(3)
  const panelRef = useRef<HTMLElement>(null)

  const subject = getSubject(subjectId)
  const ready = Boolean(subject && choice)

  const selectSubject = (id: string) => {
    if (id !== subjectId) setChoice(null)
    setSubjectId(id)
    requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }))
  }

  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col items-center gap-6 pt-4 text-center sm:pt-8">
        <div className="relative flex size-28 items-center justify-center rounded-full bg-[conic-gradient(from_140deg,var(--slate),var(--silver),var(--slate),var(--graphite),var(--slate))] p-px sm:size-32">
          <div className="flex size-full items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_25%,var(--ink),var(--graphite)_70%)]">
            <BookOpen className="size-11 text-chalk sm:size-12" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <span className="absolute -right-1 top-2 flex size-10 animate-pulse-soft items-center justify-center rounded-full border border-slate bg-graphite text-chalk">
            <Lightbulb className="size-5" aria-hidden="true" />
          </span>
        </div>

        <div className="flex max-w-2xl flex-col gap-4">
          <h1 className="text-balance font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            <span className="text-silver-gradient">Знання без меж.</span>
            <br />
            <span className="text-chalk">Навчайся у власному темпі</span>
          </h1>
          <p className="text-pretty text-base leading-relaxed text-silver sm:text-lg">
            Обери предмет, розберися зі складними темами та перевір себе за допомогою AI
          </p>
        </div>
      </section>

      <section aria-labelledby="subjects-heading" className="flex flex-col gap-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="subjects-heading" className="font-heading text-sm font-medium uppercase tracking-widest text-silver">
            Предмети
          </h2>
          <span className="text-xs text-silver">{SUBJECTS.length} предметів</span>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {SUBJECTS.map((s, i) => {
            const Icon = s.icon
            const active = s.id === subjectId
            return (
              <li key={s.id} className="animate-card-in" style={{ animationDelay: `${i * 35}ms` }}>
                <button
                  type="button"
                  onClick={() => selectSubject(s.id)}
                  aria-pressed={active}
                  className={cn(
                    'group flex h-full w-full flex-col items-start gap-4 rounded-xl border p-4 text-left hover:-translate-y-1',
                    active
                      ? 'border-silver/70 bg-slate shadow-[0_12px_40px_-16px_rgba(161,161,170,0.55)]'
                      : 'border-slate bg-graphite hover:border-silver/40 hover:shadow-[0_12px_40px_-18px_rgba(161,161,170,0.45)]',
                  )}
                >
                  <span
                    className={cn(
                      'flex size-10 items-center justify-center rounded-lg border',
                      active
                        ? 'border-chalk bg-chalk text-ink'
                        : 'border-slate bg-ink text-silver group-hover:text-chalk',
                    )}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-chalk">{s.name}</span>
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      {subject && (
        <section
          ref={panelRef}
          key={subject.id}
          aria-labelledby="setup-heading"
          className="scroll-mt-24 animate-card-in rounded-2xl border border-slate bg-graphite p-5 sm:p-7"
        >
          <div className="flex flex-col gap-1">
            <span className="text-xs uppercase tracking-widest text-silver">Налаштування заняття</span>
            <h2 id="setup-heading" className="font-heading text-xl font-semibold text-chalk sm:text-2xl">
              {subject.name}
            </h2>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_auto]">
            <fieldset className="flex flex-col gap-3">
              <legend className="mb-3 text-sm font-medium text-chalk">Обери тему</legend>
              <div className="flex flex-wrap gap-2">
                {subject.topics.map((t) => {
                  const active = choice?.kind === 'topic' && choice.topicId === t.id
                  return (
                    <button
                      key={t.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setChoice({ kind: 'topic', topicId: t.id })}
                      className={cn(
                        'rounded-lg border px-4 py-2.5 text-sm',
                        active
                          ? 'border-chalk bg-chalk font-medium text-ink'
                          : 'border-slate bg-ink text-chalk hover:border-silver/50',
                      )}
                    >
                      {t.title}
                    </button>
                  )
                })}
                <button
                  type="button"
                  aria-pressed={choice?.kind === 'mix'}
                  onClick={() => setChoice({ kind: 'mix' })}
                  className={cn(
                    'flex items-center gap-2 rounded-lg border border-dashed px-4 py-2.5 text-sm',
                    choice?.kind === 'mix'
                      ? 'border-chalk bg-chalk font-medium text-ink'
                      : 'border-silver/40 bg-ink text-chalk hover:border-silver',
                  )}
                >
                  <Shuffle className="size-4" aria-hidden="true" />
                  Навчальний мікс
                </button>
              </div>
              <p className="text-xs leading-relaxed text-silver">
                {choice?.kind === 'mix'
                  ? `Мікс автоматично добере ${count === 3 ? 'три завдання' : 'п’ять завдань'} з різних тем предмета.`
                  : `Спершу — стислий конспект теми, далі — ${count === 3 ? 'три практичні завдання' : 'п’ять практичних завдань'}.`}
              </p>
            </fieldset>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span id="level-label" className="text-sm font-medium text-chalk">
                  Рівень складності
                </span>
                <div
                  role="radiogroup"
                  aria-labelledby="level-label"
                  className="grid grid-cols-3 gap-1 rounded-lg border border-slate bg-ink p-1"
                >
                  {LEVELS.map((l) => (
                    <button
                      key={l}
                      type="button"
                      role="radio"
                      aria-checked={level === l}
                      onClick={() => setLevel(l)}
                      className={cn(
                        'rounded-md px-4 py-2 text-sm',
                        level === l ? 'bg-slate font-medium text-chalk' : 'text-silver hover:text-chalk',
                      )}
                    >
                      {LEVEL_LABELS[l]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span id="count-label" className="text-sm font-medium text-chalk">
                  Кількість завдань
                </span>
                <div
                  role="radiogroup"
                  aria-labelledby="count-label"
                  className="grid grid-cols-2 gap-1 rounded-lg border border-slate bg-ink p-1"
                >
                  {SESSION_LENGTHS.map((value) => (
                    <button
                      key={value}
                      type="button"
                      role="radio"
                      aria-checked={count === value}
                      onClick={() => setCount(value)}
                      className={cn(
                        'rounded-md px-4 py-2 text-sm tabular-nums',
                        count === value ? 'bg-slate font-medium text-chalk' : 'text-silver hover:text-chalk',
                      )}
                    >
                      {value === 3 ? '3 завдання' : `${value} завдань`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col-reverse items-stretch gap-3 border-t border-slate pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-silver">
              {ready ? 'Усе готово — можна починати.' : 'Обери тему або мікс, щоб активувати кнопку.'}
            </p>
            <button
              type="button"
              disabled={!ready}
              onClick={() => subject && choice && onStart({ subjectId: subject.id, choice, level, questionCount: count })}
              className="group flex items-center justify-center gap-2 rounded-lg bg-chalk px-6 py-3 text-sm font-semibold text-ink hover:bg-chalk/90 disabled:cursor-not-allowed disabled:bg-slate disabled:text-silver"
            >
              Розпочати навчання
              <ArrowRight className="size-4 group-enabled:group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          </div>
        </section>
      )}
    </div>
  )
}
