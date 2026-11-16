import {
  Atom,
  BookA,
  Brain,
  Calculator,
  Cpu,
  FlaskConical,
  Gavel,
  Globe,
  Landmark,
  Languages,
  Leaf,
  Library,
  Music,
  PenLine,
  Scale,
  ScrollText,
  Telescope,
  Trees,
  TrendingUp,
  BookOpen,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Question, Subject, SubjectData, Topic } from '@/lib/types'
import { astronomy, chemistry, math, physics } from './exact-sciences'
import { biology, geography, informatics } from './natural-sciences'
import { civics, ukrHistory, worldHistory } from './social-sciences'
import { law } from './law'
import { economics } from './economics'
import { ecology } from './ecology'
import { psychology } from './psychology'
import { german } from './german'
import { english, foreignLiterature, ukrLanguage, ukrLiterature } from './languages'
import { music } from './music'
import { exactExtras, exactNewTopics } from './extra-exact'
import { naturalExtras, naturalNewTopics } from './extra-natural'
import { socialExtras, socialNewTopics } from './extra-social'
import { languageExtras, languageNewTopics } from './extra-languages'
import { baseTopicExtras } from './extra-questions'

const EXTRA_QUESTIONS: Record<string, Question[]> = {
  ...exactExtras,
  ...naturalExtras,
  ...socialExtras,
  ...languageExtras,
  ...baseTopicExtras,
}

const NEW_TOPICS: Record<string, Topic[]> = {
  ...exactNewTopics,
  ...naturalNewTopics,
  ...socialNewTopics,
  ...languageNewTopics,
}

function build(data: SubjectData, icon: LucideIcon): Subject {
  const topics = [...data.topics, ...(NEW_TOPICS[data.id] ?? [])].map((t) => ({
    ...t,
    questions: [...t.questions, ...(EXTRA_QUESTIONS[`${data.id}:${t.id}`] ?? [])],
  }))
  return { ...data, topics, icon }
}

export const SUBJECTS: Subject[] = [
  build(math, Calculator),
  build(ukrHistory, Landmark),
  build(ukrLanguage, PenLine),
  build(ukrLiterature, BookOpen),
  build(english, Languages),
  build(german, BookA),
  build(physics, Atom),
  build(chemistry, FlaskConical),
  build(biology, Leaf),
  build(ecology, Trees),
  build(geography, Globe),
  build(informatics, Cpu),
  build(worldHistory, ScrollText),
  build(civics, Scale),
  build(law, Gavel),
  build(psychology, Brain),
  build(economics, TrendingUp),
  build(foreignLiterature, Library),
  build(astronomy, Telescope),
  build(music, Music),
]

export function getSubject(id: string | null | undefined) {
  return SUBJECTS.find((s) => s.id === id)
}
