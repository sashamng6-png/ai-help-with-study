'use client'

import { useSyncExternalStore } from 'react'

type Updater<T> = T | ((prev: T) => T)

export interface PersistentStore<T> {
  get: () => T
  getServer: () => T
  set: (next: Updater<T>) => void
  subscribe: (listener: () => void) => () => void
}

function createPersistentStore<T>(key: string, initial: T): PersistentStore<T> {
  let value = initial
  let loaded = false
  const listeners = new Set<() => void>()

  const load = () => {
    if (loaded || typeof window === 'undefined') return
    loaded = true
    try {
      const raw = window.localStorage.getItem(key)
      if (raw !== null) {
        const parsed = JSON.parse(raw)
        value = typeof initial === 'object' && initial !== null ? { ...initial, ...parsed } : parsed
      }
    } catch {
      value = initial
    }
  }

  return {
    get: () => {
      load()
      return value
    },
    getServer: () => initial,
    set: (next) => {
      load()
      value = typeof next === 'function' ? (next as (prev: T) => T)(value) : next
      try {
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch {
        // Storage may be unavailable (private mode); keep the in-memory value.
      }
      listeners.forEach((listener) => listener())
    },
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}

export function usePersistent<T>(store: PersistentStore<T>) {
  return useSyncExternalStore(store.subscribe, store.get, store.getServer)
}

export type KeyStatus = 'unknown' | 'valid' | 'invalid'

export interface Settings {
  apiKey: string
  status: KeyStatus
  model: string
}

export interface Progress {
  unlocked: string[]
  sessions: number
  subjects: string[]
}

export const pointsStore = createPersistentStore<number>('blackboard:points', 0)
export const settingsStore = createPersistentStore<Settings>('blackboard:settings', {
  apiKey: '',
  status: 'unknown',
  model: 'nvidia/nemotron-3.5-super-vl:free',
})
export const progressStore = createPersistentStore<Progress>('blackboard:progress', {
  unlocked: [],
  sessions: 0,
  subjects: [],
})
