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
  title: 'SportToursHolland – Sportreis door Nederland & Europa',
  description:
    'Beleef de spanning van live topsport. SportToursHolland organiseert exclusieve sportreizen door Nederland en heel Europa. Voetbal, tennis, F1, wielrennen en meer.',
  keywords: ['sportreis', 'sporttouren', 'Nederland', 'Europa', 'voetbalreis', 'tennisreis'],
  metadataBase: new URL('https://sporttoursholland.com'),
  openGraph: {
    title: 'SportToursHolland – Sportreis door Nederland & Europa',
    description: 'Exclusieve sportreizen door Nederland en Europa.',
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
