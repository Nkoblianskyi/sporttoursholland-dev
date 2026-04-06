'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Cookie, X } from 'lucide-react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('sth-cookies')
    if (!accepted) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('sth-cookies', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('sth-cookies', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:max-w-sm"
      role="dialog"
      aria-label="Cookie toestemming"
      aria-live="polite"
    >
      {/* Scrapbook-style card */}
      <div className="bg-sticker-yellow border-2 border-foreground/20 shadow-[4px_4px_0_var(--ink)] p-4 rounded-sm relative scrap-rotate-1">
        {/* Tape strip */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-tape border border-kraft-dark/40 opacity-80 rounded-sm" />

        <button
          onClick={decline}
          className="absolute top-2 right-2 text-foreground/50 hover:text-foreground transition-colors"
          aria-label="Cookie banner sluiten"
        >
          <X size={16} />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-serif font-bold text-sm text-foreground">Wij gebruiken cookies</h3>
        </div>

        <p className="text-xs text-foreground/80 leading-relaxed mb-4">
          We plaatsen cookies om uw ervaring te verbeteren en websiteverkeer te analyseren.{' '}
          <Link href="/cookies" className="underline text-primary hover:text-primary/80">
            Meer info
          </Link>
        </p>

        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-sans rounded-sm border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none transition-all"
          >
            Accepteren
          </button>
          <button
            onClick={decline}
            className="flex-1 px-3 py-1.5 bg-card text-foreground text-xs font-sans rounded-sm border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none transition-all"
          >
            Weigeren
          </button>
        </div>
      </div>
    </div>
  )
}
