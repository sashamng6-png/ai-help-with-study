import type { LucideIcon } from 'lucide-react'

export type Level = 'easy' | 'medium' | 'hard'
export type Difficulty = 1 | 2 | 3
export type SessionLength = 3 | 5

export interface Question {
  level: Difficulty
  text: string
  options: [string, string, string, string]
  answer: 0 | 1 | 2 | 3
  explanation: string
}

export interface Topic {
  id: string
  title: string
  summary: string
  concepts: string[]
  examples: string[]
  questions: Question[]
}

export interface SubjectData {
  id: string
  name: string
  topics: Topic[]
}

export interface Subject extends SubjectData {
  icon: LucideIcon
}

export interface SessionQuestion extends Question {
  key: string
  topicId: string
  topicTitle: string
}

export type TopicChoice = { kind: 'topic'; topicId: string } | { kind: 'mix' }

export interface SessionConfig {
  subjectId: string
  choice: TopicChoice
  level: Level
  questionCount: SessionLength
}

export const LEVEL_LABELS: Record<Level, string> = {
  easy: 'Легкий',
  medium: 'Середній',
  hard: 'Складний',
}
