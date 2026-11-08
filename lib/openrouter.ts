import { LEVEL_LABELS, type Level, type SessionQuestion } from '@/lib/types'

export interface AIModel {
  id: string
  name: string
  provider: string
}

export const AI_MODELS: AIModel[] = [
  { id: 'nvidia/nemotron-3.5-super-vl:free', name: 'Nemotron 3.5 Super VL', provider: 'NVIDIA' },
  { id: 'dots-studio/dots-3-note-preview:free', name: 'Dots3-Note Preview', provider: 'Dots Studio' },
  { id: 'nvidia/nemotron-3.5-lightning:free', name: 'Nemotron 3.5 Lightning', provider: 'NVIDIA' },
  { id: 'nvidia/nemotron-3.5-content-safety:free', name: 'Nemotron 3.5 Content Safety', provider: 'NVIDIA' },
  { id: 'google/gemini-2.0-flash-exp', name: 'Gemini 2.0 Flash Exp', provider: 'Google' },
]

export const OPENROUTER_MODEL = AI_MODELS[0].id

export function getModelName(id: string) {
  const model = AI_MODELS.find((m) => m.id === id)
  return model ? `${model.provider}: ${model.name}` : id
}

const API_BASE = 'https://openrouter.ai/api/v1'

export type OpenRouterErrorKind = 'auth' | 'network' | 'request'

export class OpenRouterError extends Error {
  kind: OpenRouterErrorKind
  constructor(kind: OpenRouterErrorKind, message: string) {
    super(message)
    this.kind = kind
  }
}

async function safeFetch(input: string, init: RequestInit) {
  try {
    return await fetch(input, init)
  } catch {
    throw new OpenRouterError('network', 'Не вдалося з’єднатися з OpenRouter. Перевір інтернет-підключення.')
  }
}

function errorFromStatus(status: number): OpenRouterError {
  if (status === 401 || status === 403) {
    return new OpenRouterError('auth', 'API-ключ OpenRouter некоректний або відкликаний.')
  }
  if (status === 402) {
    return new OpenRouterError('request', 'На рахунку OpenRouter недостатньо кредитів для запиту.')
  }
  if (status === 429) {
    return new OpenRouterError('request', 'Забагато запитів до OpenRouter. Спробуй трохи пізніше.')
  }
  return new OpenRouterError('request', `OpenRouter повернув помилку (код ${status}).`)
}

export async function verifyApiKey(apiKey: string) {
  const response = await safeFetch(`${API_BASE}/auth/key`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  })
  if (!response.ok) throw errorFromStatus(response.status)
  return true
}

function chatHeaders(apiKey: string) {
  return {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
    'HTTP-Referer': typeof window !== 'undefined' ? window.location.origin : '',
    'X-Title': 'Blackboard AI',
  }
}

async function readErrorMessage(response: Response) {
  try {
    const data = await response.json()
    const message: unknown = data?.error?.message
    return typeof message === 'string' ? message : null
  } catch {
    return null
  }
}

export async function testModel(apiKey: string, model: string) {
  const started = performance.now()
  const response = await safeFetch(`${API_BASE}/chat/completions`, {
    method: 'POST',
    headers: chatHeaders(apiKey),
    body: JSON.stringify({
      model,
      max_tokens: 20,
      messages: [{ role: 'user', content: 'Відповідай одним словом: Привіт' }],
    }),
  })

  if (!response.ok) {
    if (response.status === 404 || response.status === 400) {
      const detail = await readErrorMessage(response)
      throw new OpenRouterError('request', `Модель недоступна${detail ? `: ${detail}` : '.'}`)
    }
    throw errorFromStatus(response.status)
  }

  const data = await response.json()
  if (data?.error) {
    throw new OpenRouterError('request', `Модель повернула помилку: ${data.error.message ?? 'невідома помилка'}`)
  }
  const content: unknown = data?.choices?.[0]?.message?.content
  if (typeof content !== 'string' || !content.trim()) {
    throw new OpenRouterError('request', 'Модель відповіла порожнім повідомленням.')
  }
  return { reply: content.trim(), ms: Math.round(performance.now() - started) }
}

interface ExplanationRequest {
  apiKey: string
  model: string
  subjectName: string
  level: Level
  question: SessionQuestion
  chosenIndex: number
}

export async function requestExplanation({ apiKey, model, subjectName, level, question, chosenIndex }: ExplanationRequest) {
  const letters = ['A', 'B', 'C', 'D']
  const optionsText = question.options.map((o, i) => `${letters[i]}) ${o}`).join('\n')
  const isCorrect = chosenIndex === question.answer

  const response = await safeFetch(`${API_BASE}/chat/completions`, {
    method: 'POST',
    headers: chatHeaders(apiKey),
    body: JSON.stringify({
      model,
      temperature: 0.4,
      max_tokens: 450,
      messages: [
        {
          role: 'system',
          content:
            'Ти — доброзичливий AI-наставник для школярів. Відповідай українською мовою, коротко (3–5 речень), без markdown-заголовків. Пояснюй, чому правильна відповідь правильна, і за потреби — чому обраний учнем варіант хибний.',
        },
        {
          role: 'user',
          content: `Предмет: ${subjectName}\nТема: ${question.topicTitle}\nРівень складності: ${LEVEL_LABELS[level]}\n\nЗавдання: ${question.text}\n${optionsText}\n\nПравильна відповідь: ${letters[question.answer]}\nУчень обрав: ${letters[chosenIndex]} (${isCorrect ? 'правильно' : 'помилково'})\n\nПоясни розв’язок відповідно до рівня складності: для легкого — дуже просто, з побутовим прикладом; для складного — глибше, із зв’язком із теорією.`,
        },
      ],
    }),
  })

  if (!response.ok) throw errorFromStatus(response.status)

  const data = await response.json()
  const content: unknown = data?.choices?.[0]?.message?.content
  if (typeof content !== 'string' || !content.trim()) {
    throw new OpenRouterError('request', 'AI-наставник повернув порожню відповідь.')
  }
  return content.trim()
}
