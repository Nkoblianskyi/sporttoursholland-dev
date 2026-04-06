'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { MapPin, Mail, Phone, Globe, Send, X, Check } from 'lucide-react'

const subjects = [
  'Informatie over een specifieke reis',
  'Groepsboeking (10+ personen)',
  'Maatwerkreis samenstellen',
  'Annulering of wijziging',
  'Algemene vraag',
  'Andere',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    tour: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate send
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="bg-primary relative overflow-hidden py-12">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 31px, white 31px, white 32px)',
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-sans border-2 border-white/20 shadow-[2px_2px_0_rgba(0,0,0,0.2)] scrap-rotate-1 mb-4">
              Neem contact op
            </div>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white text-balance">
              Wij helpen u graag
            </h1>
            <p className="text-white/75 text-sm mt-3 max-w-md mx-auto font-sans">
              Vraag naar een reis, stel uw maatwerkreis samen of stel ons gewoon een vraag. We reageren binnen 24 uur.
            </p>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-6 bg-background"
            style={{
              clipPath:
                'polygon(0 100%, 2% 0, 5% 80%, 8% 20%, 12% 90%, 15% 10%, 19% 70%, 22% 30%, 26% 85%, 29% 15%, 33% 60%, 36% 40%, 40% 80%, 43% 20%, 47% 90%, 50% 10%, 54% 70%, 57% 30%, 61% 95%, 64% 5%, 68% 65%, 71% 35%, 75% 90%, 78% 10%, 82% 60%, 85% 40%, 89% 85%, 92% 15%, 96% 70%, 98% 30%, 100% 100%)',
            }}
          />
        </section>

        <section className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-5 gap-10">

            {/* Contact info */}
            <aside className="lg:col-span-2">
              <div className="sticky top-20">
                {/* Company card */}
                <div className="bg-kraft border-2 border-foreground/20 shadow-[4px_4px_0_var(--ink)] p-5 relative mb-6 scrap-rotate-1">
                  <div className="absolute -top-4 left-8 w-16 h-6 bg-tape border border-kraft-dark/40 opacity-75 rounded-sm z-10" />
                  <h2 className="font-serif font-bold text-base text-foreground mb-4">
                    SportToursHolland
                  </h2>
                  <p className="text-xs text-muted-foreground font-sans mb-4 leading-relaxed">
                    Uw specialist in sportreizen door Nederland en Europa. Wij staan voor u klaar van maandag t/m vrijdag, 09:00–17:30 uur.
                  </p>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                      <address className="not-italic text-xs leading-relaxed">
                        <strong className="text-foreground">K.C. NTOMATA LIMITED</strong><br />
                        Stylianou Lena,<br />
                        24 Christiana Court, Flat/Office 202,<br />
                        Strovolos, 2019 Nicosia, Cyprus
                      </address>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Mail size={14} className="text-primary shrink-0" />
                      <a
                        href="mailto:info@sporttoursholland.com"
                        className="text-xs hover:text-primary transition-colors"
                      >
                        info@sporttoursholland.com
                      </a>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Globe size={14} className="text-primary shrink-0" />
                      <span className="text-xs">sporttoursholland.com</span>
                    </li>
                  </ul>
                </div>

                {/* Office hours sticky note */}
                <div className="sticky-note p-4 scrap-rotate-neg">
                  <h3 className="font-serif font-bold text-sm text-foreground mb-2">
                    Openingstijden
                  </h3>
                  <dl className="text-xs space-y-1 text-foreground/80 font-sans">
                    <div className="flex justify-between">
                      <dt>Ma – Vr</dt>
                      <dd className="font-bold">09:00 – 17:30</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Zaterdag</dt>
                      <dd>10:00 – 14:00</dd>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <dt>Zondag</dt>
                      <dd>Gesloten</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </aside>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-card border-2 border-foreground/15 shadow-[4px_4px_0_var(--kraft-dark)] p-6 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-tape border border-kraft-dark/40 opacity-75 rounded-sm z-10" />

                <h2 className="font-serif font-bold text-lg text-foreground mb-1">
                  Stuur ons een bericht
                </h2>
                <p className="text-xs text-muted-foreground font-sans mb-6">
                  Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Name + email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-sans font-bold text-muted-foreground mb-1.5 uppercase tracking-wide"
                      >
                        Naam <span className="text-accent">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Uw volledige naam"
                        className="w-full px-3 py-2.5 bg-background border-2 border-border text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors shadow-[1px_1px_0_var(--kraft-dark)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-sans font-bold text-muted-foreground mb-1.5 uppercase tracking-wide"
                      >
                        E-mailadres <span className="text-accent">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="uw@email.nl"
                        className="w-full px-3 py-2.5 bg-background border-2 border-border text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors shadow-[1px_1px_0_var(--kraft-dark)]"
                      />
                    </div>
                  </div>

                  {/* Phone + subject */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-sans font-bold text-muted-foreground mb-1.5 uppercase tracking-wide"
                      >
                        Telefoonnummer
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+31 6 ..."
                        className="w-full px-3 py-2.5 bg-background border-2 border-border text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors shadow-[1px_1px_0_var(--kraft-dark)]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-sans font-bold text-muted-foreground mb-1.5 uppercase tracking-wide"
                      >
                        Onderwerp <span className="text-accent">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-3 py-2.5 bg-background border-2 border-border text-sm font-sans text-foreground focus:outline-none focus:border-primary transition-colors shadow-[1px_1px_0_var(--kraft-dark)]"
                      >
                        <option value="">Kies een onderwerp</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Tour of interest */}
                  <div>
                    <label
                      htmlFor="tour"
                      className="block text-xs font-sans font-bold text-muted-foreground mb-1.5 uppercase tracking-wide"
                    >
                      Reis (optioneel)
                    </label>
                    <input
                      id="tour"
                      name="tour"
                      type="text"
                      value={form.tour}
                      onChange={handleChange}
                      placeholder="Bijv. Wielerklassieker in de Dolomieten"
                      className="w-full px-3 py-2.5 bg-background border-2 border-border text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors shadow-[1px_1px_0_var(--kraft-dark)]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-sans font-bold text-muted-foreground mb-1.5 uppercase tracking-wide"
                    >
                      Uw bericht <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Beschrijf uw vraag of wens zo uitgebreid mogelijk..."
                      className="w-full px-3 py-2.5 bg-background border-2 border-border text-sm font-sans text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors shadow-[1px_1px_0_var(--kraft-dark)] resize-none"
                    />
                  </div>

                  {/* Privacy note */}
                  <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                    Door dit formulier te verzenden gaat u akkoord met ons{' '}
                    <a href="/privacy" className="text-primary hover:underline">
                      privacybeleid
                    </a>
                    .
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-sans border-2 border-foreground/20 shadow-[3px_3px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-accent-foreground/40 border-t-accent-foreground rounded-full animate-spin" />
                        Verzenden...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Bericht versturen
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />

      {/* Success popup */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/40 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-heading"
        >
          <div className="relative bg-card border-4 border-foreground/20 shadow-[6px_6px_0_var(--ink)] p-8 max-w-sm w-full text-center scrap-rotate-1">
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-7 bg-tape border border-kraft-dark/40 opacity-80 rounded-sm" />

            <button
              onClick={() => setSubmitted(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Sluiten"
            >
              <X size={18} />
            </button>

            <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mx-auto mb-4">
              <Check size={28} className="text-primary" />
            </div>

            <h2
              id="success-heading"
              className="font-serif font-bold text-xl text-foreground mb-2"
            >
              Bericht ontvangen!
            </h2>
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
              Bedankt voor uw bericht, <strong className="text-foreground">{form.name}</strong>! We nemen binnen 24 uur contact met u op via {form.email}.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-sans border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none transition-all"
            >
              Sluiten
            </button>

            {/* Decorative sticky note */}
            <div className="absolute -bottom-3 -right-3 sticky-note px-2 py-1 scrap-rotate-neg text-xs font-sans text-foreground/70">
              Tot snel!
            </div>
          </div>
        </div>
      )}
    </>
  )
}
