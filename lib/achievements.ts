import {
  Award,
  Brain,
  Compass,
  Crown,
  Flame,
  Footprints,
  Gem,
  Hourglass,
  Library,
  Medal,
  Music,
  RotateCw,
  Shuffle,
  Target,
  UserRound,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { Level } from '@/lib/types'

export interface SessionResult {
  correct: number
  total: number
  level: Level
  isMix: boolean
  durationSec: number
  totalPoints: number
  sessions: number
  subjectId: string
  subjectsTried: number
  hasProfile: boolean
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: LucideIcon
  check: (r: SessionResult) => boolean
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-step',
    title: 'Перший крок',
    description: 'Заверши своє перше заняття',
    icon: Footprints,
    check: (r) => r.sessions >= 1,
  },
  {
    id: 'perfect',
    title: 'Ідеальний результат',
    description: 'Дай правильні відповіді на всі завдання',
    icon: Award,
    check: (r) => r.total > 0 && r.correct === r.total,
  },
  {
    id: 'topic-master',
    title: 'Майстер теми',
    description: 'Отримай 100% на складному рівні',
    icon: Crown,
    check: (r) => r.level === 'hard' && r.total > 0 && r.correct === r.total,
  },
  {
    id: 'lightning',
    title: 'Блискавка',
    description: 'Пройди заняття менш ніж за хвилину з 2+ правильними',
    icon: Zap,
    check: (r) => r.durationSec < 60 && r.correct >= 2,
  },
  {
    id: 'erudite',
    title: 'Ерудит',
    description: 'Пройди «Навчальний мікс» з 2+ правильними',
    icon: Shuffle,
    check: (r) => r.isMix && r.correct >= 2,
  },
  {
    id: 'hundred',
    title: 'Сотня балів',
    description: 'Набери 100 балів загалом',
    icon: Flame,
    check: (r) => r.totalPoints >= 100,
  },
  {
    id: 'persistent',
    title: 'Наполегливість',
    description: 'Заверши 10 занять',
    icon: Brain,
    check: (r) => r.sessions >= 10,
  },
  {
    id: 'steady',
    title: 'Золота середина',
    description: 'Отримай 100% на середньому рівні',
    icon: Target,
    check: (r) => r.level === 'medium' && r.total > 0 && r.correct === r.total,
  },
  {
    id: 'half-thousand',
    title: 'Пів тисячі',
    description: 'Набери 500 балів загалом',
    icon: Gem,
    check: (r) => r.totalPoints >= 500,
  },
  {
    id: 'marathon',
    title: 'Марафонець',
    description: 'Заверши 25 занять',
    icon: Medal,
    check: (r) => r.sessions >= 25,
  },
  {
    id: 'thinker',
    title: 'Вдумливий учень',
    description: 'Приділи заняттю понад 5 хвилин',
    icon: Hourglass,
    check: (r) => r.durationSec >= 300,
  },
  {
    id: 'meloman',
    title: 'Меломан',
    description: 'Пройди заняття з музики з 2+ правильними',
    icon: Music,
    check: (r) => r.subjectId === 'music' && r.correct >= 2,
  },
  {
    id: 'explorer',
    title: 'Дослідник',
    description: 'Займайся з 5 різних предметів',
    icon: Compass,
    check: (r) => r.subjectsTried >= 5,
  },
  {
    id: 'polymath',
    title: 'Енциклопедист',
    description: 'Займайся з усіх 15 предметів',
    icon: Library,
    check: (r) => r.subjectsTried >= 15,
  },
  {
    id: 'comeback',
    title: 'Друга спроба',
    description: 'Пройди складний рівень після помилки — хоч одна правильна',
    icon: RotateCw,
    check: (r) => r.level === 'hard' && r.correct >= 1 && r.correct < r.total,
  },
  {
    id: 'identity',
    title: 'Своє обличчя',
    description: 'Створи акаунт і налаштуй профіль',
    icon: UserRound,
    check: (r) => r.hasProfile,
  },
]
