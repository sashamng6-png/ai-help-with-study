import { CircleAlert, WifiOff, X } from 'lucide-react'

export interface AppError {
  title: string
  message: string
  offlineAction: boolean
}

interface ErrorToastProps {
  error: AppError
  onDismiss: () => void
  onGoOffline: () => void
}

export function ErrorToast({ error, onDismiss, onGoOffline }: ErrorToastProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center p-4 sm:justify-end sm:p-6">
      <div
        role="alert"
        className="pointer-events-auto w-full max-w-sm animate-in fade-in slide-in-from-bottom-4 rounded-xl border border-destructive/30 bg-graphite p-4 shadow-2xl shadow-ink duration-300"
      >
        <div className="flex items-start gap-3">
          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
            <CircleAlert className="size-4" aria-hidden="true" />
          </span>
          <div className="flex min-w-0 flex-1 flex-col gap-1">
            <p className="text-sm font-semibold text-chalk">{error.title}</p>
            <p className="text-sm leading-relaxed text-silver">{error.message}</p>
          </div>
          <button
            type="button"
            onClick={onDismiss}
            className="-m-1 rounded-md p-1 text-silver hover:bg-slate hover:text-chalk"
            aria-label="Закрити повідомлення"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        {error.offlineAction ? (
          <button
            type="button"
            onClick={onGoOffline}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-chalk px-4 py-2.5 text-sm font-medium text-ink hover:bg-chalk/90"
          >
            <WifiOff className="size-4" aria-hidden="true" />
            Перейти до автономного навчання
          </button>
        ) : (
          <button
            type="button"
            onClick={onDismiss}
            className="mt-4 w-full rounded-lg border border-slate px-4 py-2.5 text-sm font-medium text-chalk hover:bg-slate"
          >
            Зрозуміло
          </button>
        )}
      </div>
    </div>
  )
}
