import type { Difficulty, Question, Topic } from '@/lib/types'

export function q(
  level: Difficulty,
  text: string,
  options: [string, string, string, string],
  answer: 0 | 1 | 2 | 3,
  explanation: string,
): Question {
  return { level, text, options, answer, explanation }
}

export function topic(
  id: string,
  title: string,
  summary: string,
  concepts: string[],
  examples: string[],
  questions: Question[],
): Topic {
  return { id, title, summary, concepts, examples, questions }
}
