'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const links = [
  { href: '/tours', label: 'Reizen' },
  { href: '/tips', label: 'Reisgids' },
  { href: '/about', label: 'Over ons' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="SportToursHolland – terug naar homepagina"
        >
          <Image src="/favicon.ico" alt="Sport Tours Holland" width={32} height={32} />
          <span className="font-serif font-bold text-foreground leading-none whitespace-nowrap">
            <span className="text-xl tracking-tight">Sport</span>
            <span className="text-xl tracking-tight text-primary">Tours</span>
            <span className="text-xl tracking-tight text-accent">Holland</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Hoofdnavigatie">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-sans text-foreground/80 hover:text-primary transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-primary hover:after:w-full after:transition-all"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/tours"
            className="ml-2 px-4 py-1.5 rounded-sm bg-accent text-accent-foreground text-sm font-sans hover:opacity-90 transition-opacity border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none"
          >
            Bekijk tours
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded text-foreground"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden bg-background border-t border-border px-4 pb-4 pt-2 flex flex-col gap-3"
          aria-label="Mobiele navigatie"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-sans text-foreground py-1 border-b border-border/50 last:border-0"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/tours"
            className="mt-2 px-4 py-2 text-center rounded-sm bg-accent text-accent-foreground text-sm font-sans border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)]"
            onClick={() => setOpen(false)}
          >
            Bekijk tours
          </Link>
        </nav>
      )}
    </header>
  )
}
