import { ArrowRight, Lightbulb } from 'lucide-react'
import type { Topic } from '@/lib/types'

interface StudyMaterialProps {
  topics: Topic[]
  isMix: boolean
  onContinue: () => void
}

export function StudyMaterial({ topics, isMix, onContinue }: StudyMaterialProps) {
  return (
    <div className="flex flex-col gap-5">
      {isMix && (
        <p className="text-sm leading-relaxed text-silver">
          У міксі зібрано завдання з {topics.length} тем. Швидко пробіжися конспектами — вони знадобляться.
        </p>
      )}

      {topics.map((topic, i) => (
        <article
          key={topic.id}
          className="animate-card-in rounded-2xl border border-slate bg-graphite p-5 sm:p-7"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <span className="text-xs uppercase tracking-widest text-silver">Конспект</span>
          <h2 className="mt-1 text-balance font-heading text-xl font-semibold text-chalk sm:text-2xl">{topic.title}</h2>
          <p className="mt-4 max-w-3xl text-pretty leading-relaxed text-chalk/90">{topic.summary}</p>

          <div className="mt-6 grid gap-6 md:grid-cols-[3fr_2fr]">
            <section aria-label="Ключові поняття" className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-silver">Ключові поняття</h3>
              <ul className="flex flex-col gap-2">
                {topic.concepts.map((c) => (
                  <li key={c} className="flex gap-3 rounded-lg border border-slate bg-ink/60 px-4 py-3 text-sm leading-relaxed text-chalk">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-silver" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-label="Приклади" className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-silver">Приклади</h3>
              <ul className="flex flex-col gap-2">
                {topic.examples.map((e) => (
                  <li key={e} className="flex gap-3 rounded-lg bg-slate/60 px-4 py-3 text-sm leading-relaxed text-chalk">
                    <Lightbulb className="mt-0.5 size-4 shrink-0 text-silver" aria-hidden="true" />
                    <span className="font-mono text-[13px]">{e}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </article>
      ))}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onContinue}
          className="group flex w-full items-center justify-center gap-2 rounded-lg bg-chalk px-6 py-3 text-sm font-semibold text-ink hover:bg-chalk/90 sm:w-auto"
        >
          Перейти до завдань
          <ArrowRight className="size-4 group-hover:translate-x-0.5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
