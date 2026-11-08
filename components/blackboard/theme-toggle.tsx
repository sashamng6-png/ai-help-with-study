'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export const THEME_STORAGE_KEY = 'blackboard:theme'

type Theme = 'light' | 'dark'

function readTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setTheme(readTheme())
    setMounted(true)
  }, [])

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      // Storage may be unavailable (private mode); the current tab keeps the chosen theme.
    }
  }

  const isDark = theme === 'dark'
  const label = isDark ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      aria-pressed={isDark}
      className="flex size-9 items-center justify-center rounded-lg border border-slate bg-graphite text-silver hover:border-silver/60 hover:text-chalk"
    >
      {mounted && isDark ? (
        <Sun className="size-4.5 animate-fade-in" aria-hidden="true" />
      ) : (
        <Moon className="size-4.5 animate-fade-in" aria-hidden="true" />
      )}
    </button>
  )
}
