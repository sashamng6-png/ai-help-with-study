import type { Level, Question, SessionLength, SessionQuestion, Subject, Topic, TopicChoice } from '@/lib/types'

export const QUESTIONS_PER_SESSION = 3
export const SESSION_LENGTHS: SessionLength[] = [3, 5]
export const POINTS_PER_CORRECT = 10

const TARGET_DIFFICULTY: Record<Level, number> = { easy: 1, medium: 2, hard: 3 }

function shuffle<T>(items: T[]): T[] {
  const copy = [...items]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

function shuffleOptions(question: Question): Question {
  const order = shuffle([0, 1, 2, 3])
  const options = order.map((i) => question.options[i]) as Question['options']
  const answer = order.indexOf(question.answer) as Question['answer']
  return { ...question, options, answer }
}

function toSessionQuestions(topic: Topic, subjectId: string): SessionQuestion[] {
  return topic.questions.map((question, index) => ({
    ...question,
    key: `${subjectId}:${topic.id}:${index}`,
    topicId: topic.id,
    topicTitle: topic.title,
  }))
}

function rankForLevel(pool: SessionQuestion[], level: Level, recentKeys: Set<string>) {
  const target = TARGET_DIFFICULTY[level]
  return pool
    .map((question) => ({
      question,
      score:
        Math.abs(question.level - target) * 10 +
        (recentKeys.has(question.key) ? 2.5 : 0) +
        Math.random() * 0.9,
    }))
    .sort((a, b) => a.score - b.score)
    .map((entry) => entry.question)
}

export function buildSession(
  subject: Subject,
  choice: TopicChoice,
  level: Level,
  recentKeys: string[] = [],
  count: SessionLength = QUESTIONS_PER_SESSION,
): SessionQuestion[] {
  const recent = new Set(recentKeys)
  const target = TARGET_DIFFICULTY[level]

  if (choice.kind === 'topic') {
    const topic = subject.topics.find((t) => t.id === choice.topicId)
    if (!topic) return []

    const picked = rankForLevel(toSessionQuestions(topic, subject.id), level, recent).slice(0, count)

    // Якщо в темі не вистачає завдань — додаємо решту з інших тем предмета.
    if (picked.length < count) {
      const used = new Set(picked.map((question) => question.key))
      const rest = subject.topics
        .filter((t) => t.id !== topic.id)
        .flatMap((t) => toSessionQuestions(t, subject.id))
      const extra = rankForLevel(rest, level, recent).filter((question) => !used.has(question.key))
      picked.push(...extra.slice(0, count - picked.length))
    }

    const ordered = target === 3 ? picked.sort((a, b) => a.level - b.level) : picked
    return ordered.map((question) => ({ ...question, ...shuffleOptions(question) }))
  }

  // Мікс: спершу по одному завданню з різних тем, далі — решта, щоб набрати потрібну кількість.
  const pool = rankForLevel(
    subject.topics.flatMap((topic) => toSessionQuestions(topic, subject.id)),
    level,
    recent,
  )
  const picked: SessionQuestion[] = []
  const seenTopics = new Set<string>()
  for (const question of pool) {
    if (picked.length >= count) break
    if (seenTopics.has(question.topicId)) continue
    seenTopics.add(question.topicId)
    picked.push(question)
  }
  for (const question of pool) {
    if (picked.length >= count) break
    if (!picked.includes(question)) picked.push(question)
  }

  return picked.map((question) => ({ ...question, ...shuffleOptions(question) }))
}

export function adaptExplanation(question: SessionQuestion, topic: Topic | undefined, level: Level) {
  const correct = question.options[question.answer]
  const base = `Правильна відповідь — «${correct}». ${question.explanation}`

  if (level === 'easy') {
    const hint = topic?.concepts[0]
    return hint ? `${base}\n\nЗапам’ятай головне: ${hint}.` : base
  }

  if (level === 'hard' && topic) {
    const extra = topic.concepts.slice(1, 3).join('; ')
    return `${base}\n\nПоглиблено: ${extra}. Спробуй пояснити, чому інші варіанти не підходять — це найкраща перевірка розуміння.`
  }

  return base
}

export function masteryZone(accuracy: number) {
  if (accuracy >= 75) return { label: 'Тему засвоєно', tone: 'success' as const }
  if (accuracy >= 40) return { label: 'Потрібно повторити', tone: 'warning' as const }
  return { label: 'Варто вивчити ще раз', tone: 'destructive' as const }
}

export function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
