'use client'

import { useEffect, useState } from 'react'
import { ACHIEVEMENTS } from '@/lib/achievements'
import { POINTS_PER_CORRECT, buildSession } from '@/lib/engine'
import { pointsStore, progressStore, type Progress } from '@/lib/storage'
import type { SessionConfig, Subject } from '@/lib/types'
import { QuizCard } from './quiz-card'
import { SessionHeader } from './session-header'
import { SessionStats, type StatsSummary } from './session-stats'
import { StudyMaterial } from './study-material'

interface LearningViewProps {
  subject: Subject
  config: SessionConfig
  recentKeys: string[]
  skipMaterial: boolean
  aiEnabled: boolean
  apiKey: string
  onAIError: (err: unknown) => void
  onRetry: (recentKeys: string[]) => void
  onExit: () => void
  hasProfile: boolean
  onProgressSaved?: (progress: Progress) => void
}

type Phase = 'material' | 'quiz' | 'stats'

function useElapsedSeconds(startedAt: number, stoppedAt: number | null) {
  const [now, setNow] = useState(startedAt)
  useEffect(() => {
    if (stoppedAt !== null) return
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [stoppedAt])
  return Math.max(0, Math.floor(((stoppedAt ?? now) - startedAt) / 1000))
}

export function LearningView({
  subject,
  config,
  recentKeys,
  skipMaterial,
  aiEnabled,
  apiKey,
  onAIError,
  onRetry,
  onExit,
  hasProfile,
  onProgressSaved,
}: LearningViewProps) {
  const [questions] = useState(() =>
    buildSession(subject, config.choice, config.level, recentKeys, config.questionCount),
  )
  const [phase, setPhase] = useState<Phase>(skipMaterial ? 'quiz' : 'material')
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const [startedAt] = useState(() => Date.now())
  const [finishedAt, setFinishedAt] = useState<number | null>(null)
  const [summary, setSummary] = useState<StatsSummary | null>(null)

  const elapsed = useElapsedSeconds(startedAt, finishedAt)

  const sessionTopics =
    config.choice.kind === 'topic'
      ? subject.topics.filter((t) => config.choice.kind === 'topic' && t.id === config.choice.topicId)
      : subject.topics.filter((t) => questions.some((q) => q.topicId === t.id))

  const title = config.choice.kind === 'mix' ? 'Навчальний мікс' : (sessionTopics[0]?.title ?? '')
  const current = questions[index]

  const choose = (optionIndex: number) => {
    if (answers[index] !== null) return
    setAnswers((prev) => prev.map((a, i) => (i === index ? optionIndex : a)))
    if (optionIndex === current.answer) pointsStore.set((p) => p + POINTS_PER_CORRECT)
  }

  const finish = () => {
    const end = Date.now()
    const correct = questions.filter((q, i) => answers[i] === q.answer).length
    const durationSec = Math.floor((end - startedAt) / 1000)
    const progress = progressStore.get()
    const sessions = progress.sessions + 1
    const subjects = progress.subjects.includes(subject.id) ? progress.subjects : [...progress.subjects, subject.id]
    const result = {
      correct,
      total: questions.length,
      level: config.level,
      isMix: config.choice.kind === 'mix',
      durationSec,
      totalPoints: pointsStore.get(),
      sessions,
      subjectId: subject.id,
      subjectsTried: subjects.length,
      hasProfile,
    }
    const newlyUnlocked = ACHIEVEMENTS.filter((a) => !progress.unlocked.includes(a.id) && a.check(result)).map(
      (a) => a.id,
    )
    const unlocked = [...progress.unlocked, ...newlyUnlocked]
    progressStore.set({ sessions, unlocked, subjects })
    onProgressSaved?.({ sessions, unlocked, subjects })

    setFinishedAt(end)
    setSummary({ ...result, pointsEarned: correct * POINTS_PER_CORRECT, unlocked, newlyUnlocked })
    setPhase('stats')
  }

  const next = () => {
    if (index < questions.length - 1) setIndex(index + 1)
    else finish()
  }

  return (
    <div className="flex flex-col gap-6">
      <SessionHeader
        subject={subject}
        title={title}
        level={config.level}
        total={questions.length}
        current={phase === 'quiz' ? index : phase === 'stats' ? questions.length : -1}
        answers={answers}
        questions={questions}
        elapsed={elapsed}
        onExit={onExit}
      />

      <div key={phase === 'quiz' ? `quiz-${index}` : phase} className="animate-card-in">
        {phase === 'material' && (
          <StudyMaterial topics={sessionTopics} isMix={config.choice.kind === 'mix'} onContinue={() => setPhase('quiz')} />
        )}

        {phase === 'quiz' && current && (
          <QuizCard
            question={current}
            number={index + 1}
            total={questions.length}
            chosen={answers[index]}
            subject={subject}
            topic={subject.topics.find((t) => t.id === current.topicId)}
            level={config.level}
            aiEnabled={aiEnabled}
            apiKey={apiKey}
            onChoose={choose}
            onNext={next}
            onAIError={onAIError}
          />
        )}

        {phase === 'stats' && summary && (
          <SessionStats
            summary={summary}
            questions={questions}
            answers={answers}
            isMix={config.choice.kind === 'mix'}
            onRetry={() => onRetry(questions.map((q) => q.key))}
            onExit={onExit}
          />
        )}
      </div>
    </div>
  )
}
