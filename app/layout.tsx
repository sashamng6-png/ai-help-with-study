import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Unbounded } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-inter' })
const unbounded = Unbounded({ subsets: ['latin', 'cyrillic'], variable: '--font-unbounded' })

export const metadata: Metadata = {
  title: 'Blackboard AI — Знання без меж',
  description:
    'Навчайся у власному темпі: 14 шкільних предметів, практичні завдання трьох рівнів складності та AI-наставник, що пояснює кожну відповідь.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/ai-help-with-study/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/ai-help-with-study/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      { url: '/ai-help-with-study/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/ai-help-with-study/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="uk"
      suppressHydrationWarning
      className={`bg-background ${inter.variable} ${unbounded.variable}`}
    >
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{if(localStorage.getItem('blackboard:theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})()`}
        </Script>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
