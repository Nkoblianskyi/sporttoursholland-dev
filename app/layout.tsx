import type { Metadata, Viewport } from 'next'
import { Patrick_Hand, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sans',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
})

export const metadata: Metadata = {
  title: 'SportToursHolland – Auteurstours door Nederland & Europa',
  description:
    'Kleinschalige auteurstours door Nederland en Europa. Denk aan mountainbike-avonturen, motortochten, bergwandelingen, fietstours en kajaktochten — met persoonlijke begeleiding.',
  keywords: ['auteurstour', 'auteurstours', 'actieve reizen', 'Nederland', 'Europa', 'kleinschalige reizen', 'fietstour', 'bergwandelen', 'motortocht', 'kajaktocht'],
  metadataBase: new URL('https://sporttoursholland.com'),
  openGraph: {
    title: 'SportToursHolland – Auteurstours door Nederland & Europa',
    description: 'Kleinschalige auteurstours door Nederland en Europa.',
    url: 'https://sporttoursholland.com',
    siteName: 'SportToursHolland',
    locale: 'nl_NL',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d6a4f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className={`${patrickHand.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
