'use client'

import { ChevronDown } from 'lucide-react'

type Props = {
  question: string
  answer: string
}

export function FaqItem({ question, answer }: Props) {
  return (
    <details className="group bg-card border-2 border-foreground/10 shadow-[2px_2px_0_var(--kraft-dark)]">
      <summary className="flex items-center justify-between px-4 py-3 cursor-pointer list-none">
        <span className="font-sans text-sm font-bold text-foreground pr-4">{question}</span>
        <ChevronDown
          size={16}
          className="shrink-0 text-primary transition-transform group-open:rotate-180"
        />
      </summary>
      <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
        {answer}
      </div>
    </details>
  )
}
