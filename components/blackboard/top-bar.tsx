import { Settings, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'

interface TopBarProps {
  points: number
  aiEnabled: boolean
  onOpenSettings: () => void
}

export function TopBar({ points, aiEnabled, onOpenSettings }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate/70 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-end gap-3 px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <span
            className={cn(
              'hidden items-center gap-2 rounded-full border px-3 py-1.5 text-xs md:flex',
              aiEnabled ? 'border-success/30 text-success' : 'border-slate text-silver',
            )}
          >
            <span
              className={cn('size-1.5 rounded-full', aiEnabled ? 'animate-pulse-soft bg-success' : 'bg-silver/60')}
              aria-hidden="true"
            />
            {aiEnabled ? 'AI-наставник підключено' : 'Автономний режим'}
          </span>

          <div
            className="flex items-center gap-2 rounded-full border border-slate bg-graphite py-1.5 pl-2.5 pr-3.5"
            aria-live="polite"
          >
            <Star className="size-4 fill-chalk text-chalk" aria-hidden="true" />
            <span key={points} className="inline-block animate-pop font-heading text-sm font-semibold tabular-nums">
              {points}
            </span>
            <span className="text-xs text-silver">балів</span>
          </div>

          <ThemeToggle />

          <button
            type="button"
            onClick={onOpenSettings}
            className="flex size-9 items-center justify-center rounded-lg border border-slate bg-graphite text-silver hover:border-silver/60 hover:text-chalk"
            aria-label="Налаштування OpenRouter"
          >
            <Settings className="size-4.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
