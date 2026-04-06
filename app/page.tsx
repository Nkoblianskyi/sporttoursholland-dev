import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TourCard } from '@/components/tour-card'
import { CookieBanner } from '@/components/cookie-banner'
import { FaqItem } from '@/components/faq-item'
import { tours } from '@/lib/tours-data'
import {
  ChevronRight,
  Backpack,
  Shield,
  Clock,
  Star,
  HelpCircle,
} from 'lucide-react'

const tips = [
  {
    icon: Backpack,
    title: 'Pak slim in voor een actieve reis',
    body: 'Lichte functionele kleding, goede schoenen en een compacte dagtas zijn essentieel. Minder bagage betekent meer vrijheid onderweg.',
  },
  {
    icon: Shield,
    title: 'Sluit een reisverzekering af',
    body: 'Een goede reisverzekering dekt medische kosten, annulering én uitrusting. Onmisbaar bij elke actieve sportreis in Europa.',
  },
  {
    icon: Clock,
    title: 'Train vooraf op je eigen niveau',
    body: 'Of je nu een bergwandeling of een marathon plant — een paar weken voorbereiding maakt het verschil tussen genieten en doorploeteren.',
  },
  {
    icon: Star,
    title: 'Vertrouw op je begeleider',
    body: 'Onze gidsen kennen het gebied als hun broekzak. Luister naar hun adviezen over tempo, weersomstandigheden en lokale gebruiken.',
  },
]

const faqs = [
  {
    q: 'Wat is inbegrepen in de reisarrangement?',
    a: 'Elk arrangement omvat vervoer, overnachtingen en maaltijden zoals vermeld, plus begeleiding door een ervaren gids. Kijk bij elke reis onder "Inbegrepen" voor het exacte pakket.',
  },
  {
    q: 'Kan ik individueel boeken of alleen in groep?',
    a: 'Beide opties zijn mogelijk. Onze reizen zijn samengesteld voor groepen van 10–25 personen, maar individuele reizigers zijn van harte welkom. U reist dan mee in een bestaande groep.',
  },
  {
    q: 'Heb ik sportervaring nodig voor de avontuurlijke tours?',
    a: 'Dat hangt af van de tour. Sommige reizen zijn geschikt voor beginners met een basis conditie, andere vereisen meer ervaring. Bij elke reis staat duidelijk het moeilijkheidsniveau vermeld.',
  },
  {
    q: 'Wat is het annuleringsbeleid?',
    a: 'Tot 60 dagen voor vertrek ontvangt u 100% restitutie. Tussen 30 en 60 dagen voor vertrek 50%. Binnen 30 dagen voor vertrek zijn annuleringskosten van toepassing. Wij adviseren altijd een annuleringsverzekering.',
  },
  {
    q: 'In welke talen wordt de reis begeleid?',
    a: 'Onze reisbegeleiders spreken vloeiend Nederlands. Bij internationale groepen schakelen we ook Engelse begeleiding in.',
  },
]

export default function HomePage() {
  const featuredTours = tours.slice(0, 3)

  return (
    <>
      <Navbar />

      <main>
        {/* ─── HERO ─── */}
        <section
          className="relative bg-primary overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.jpg"
              alt=""
              fill
              className="object-cover opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-primary/60" />
          </div>

          {/* Ruled lines overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 31px, white 31px, white 32px)',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto px-4 py-16 text-center">
            {/* Sticker badge */}
            <div className="inline-block mb-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-sans border-2 border-foreground/20 shadow-[2px_2px_0_rgba(0,0,0,0.3)] scrap-rotate-neg">
              Nederland &amp; heel Europa
            </div>

            <h1
              id="hero-heading"
              className="font-serif font-bold text-4xl sm:text-5xl text-white leading-tight text-balance mb-4"
              style={{ textShadow: '2px 2px 0 rgba(0,0,0,0.3)' }}
            >
              Sport beleven.<br />
              <span className="text-sticker-yellow">Wereld ontdekken.</span>
            </h1>

            <p className="text-white/85 text-base leading-relaxed mb-8 max-w-md mx-auto font-sans">
              Avontuurlijke auteurstours door Nederland en Europa. Mountainbike, motorreizen, bergwandelingen, marathons en meer — wij verzorgen elk detail.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/tours"
                className="px-6 py-3 bg-accent text-accent-foreground font-sans text-sm border-2 border-white/30 shadow-[3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0_rgba(0,0,0,0.3)] transition-all inline-flex items-center justify-center gap-2"
              >
                Ontdek alle reizen <ChevronRight size={16} />
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 bg-white/15 text-white font-sans text-sm border-2 border-white/40 hover:bg-white/25 transition-all inline-flex items-center justify-center gap-2"
              >
                Over ons
              </Link>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex justify-center gap-6 sm:gap-10">
              {[
                { val: '6+', label: 'Sporten' },
                { val: '12+', label: 'Landen' },
                { val: '500+', label: 'Tevreden reizigers' },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="font-serif font-bold text-2xl text-sticker-yellow">{val}</div>
                  <div className="text-white/70 text-xs font-sans">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Torn bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-6 bg-background"
            style={{
              clipPath:
                'polygon(0 100%, 2% 0, 5% 80%, 8% 20%, 12% 90%, 15% 10%, 19% 70%, 22% 30%, 26% 85%, 29% 15%, 33% 60%, 36% 40%, 40% 80%, 43% 20%, 47% 90%, 50% 10%, 54% 70%, 57% 30%, 61% 95%, 64% 5%, 68% 65%, 71% 35%, 75% 90%, 78% 10%, 82% 60%, 85% 40%, 89% 85%, 92% 15%, 96% 70%, 98% 30%, 100% 100%)',
            }}
          />
        </section>

        {/* ─── ABOUT PREVIEW ─── */}
        <section className="max-w-5xl mx-auto px-4 py-16" aria-labelledby="about-heading">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative scrap-rotate-2 self-start">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-tape border border-kraft-dark/40 opacity-75 rounded-sm z-10" />
              <div className="photo-frame overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/about-bg.jpg"
                  alt="Enthousiaste sportfans onderweg met SportToursHolland"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Caption sticker */}
              <div className="absolute -bottom-4 -right-3 sticky-note px-3 py-2 max-w-[140px] scrap-rotate-1 z-10">
                <p className="text-xs font-sans text-foreground/80">Al meer dan 500 reizigers gingen je voor!</p>
              </div>
            </div>

            <div>
              <span className="inline-block px-2 py-0.5 bg-sticker-green text-foreground text-xs font-sans border border-foreground/15 mb-3">
                Over ons
              </span>
              <h2
                id="about-heading"
                className="font-serif font-bold text-2xl sm:text-3xl text-foreground leading-tight text-balance mb-4"
              >
                Passie voor sport &amp; reizen in één pakket
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                SportToursHolland is opgericht door een stel fanatieke sportliefhebbers die zelf weten hoe het voelt om avontuurlijk op reis te gaan. We combineren jarenlange reiservaring met echte sportpassie om de perfecte auteurstour samen te stellen.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Van een mountainbike-avontuur door de Ardennen tot een kayaktocht door de Noorse fjorden — wij regelen elk detail zodat jij je volledig kunt focussen op de beleving.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-sans border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none transition-all"
              >
                Lees meer over ons <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── TOUR CATALOG PREVIEW ─── */}
        <section className="bg-kraft py-16 relative" aria-labelledby="tours-heading">
          <div
            className="absolute top-0 left-0 right-0 h-6 bg-background"
            style={{
              clipPath:
                'polygon(0 0, 2% 100%, 5% 20%, 8% 80%, 12% 10%, 15% 90%, 19% 30%, 22% 70%, 26% 15%, 29% 85%, 33% 40%, 36% 60%, 40% 20%, 43% 80%, 47% 10%, 50% 90%, 54% 30%, 57% 70%, 61% 5%, 64% 95%, 68% 35%, 71% 65%, 75% 10%, 78% 90%, 82% 40%, 85% 60%, 89% 15%, 92% 85%, 96% 30%, 98% 70%, 100% 0)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-6 bg-background"
            style={{
              clipPath:
                'polygon(0 100%, 2% 0, 5% 80%, 8% 20%, 12% 90%, 15% 10%, 19% 70%, 22% 30%, 26% 85%, 29% 15%, 33% 60%, 36% 40%, 40% 80%, 43% 20%, 47% 90%, 50% 10%, 54% 70%, 57% 30%, 61% 95%, 64% 5%, 68% 65%, 71% 35%, 75% 90%, 78% 10%, 82% 60%, 85% 40%, 89% 85%, 92% 15%, 96% 70%, 98% 30%, 100% 100%)',
            }}
          />

          <div className="max-w-5xl mx-auto px-4">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="inline-block px-2 py-0.5 bg-accent text-accent-foreground text-xs font-sans border border-foreground/15 mb-2">
                  Reizen 2026
                </span>
                <h2
                  id="tours-heading"
                  className="font-serif font-bold text-2xl sm:text-3xl text-foreground text-balance"
                >
                  Uitgelichte sportreizen
                </h2>
              </div>
              <Link
                href="/tours"
                className="text-sm text-primary underline underline-offset-2 hover:text-accent transition-colors hidden sm:block"
              >
                Alle reizen →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {featuredTours.map((tour, i) => (
                <TourCard key={tour.id} tour={tour} index={i} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-sm font-sans border-2 border-foreground/20 shadow-[3px_3px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none transition-all"
              >
                Bekijk alle {tours.length} reizen <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── TIPS & INFO ─── */}
        <section className="max-w-5xl mx-auto px-4 py-16" aria-labelledby="tips-heading">
          <div className="text-center mb-10">
            <span className="inline-block px-2 py-0.5 bg-sticker-yellow text-foreground text-xs font-sans border border-foreground/15 mb-3">
              Handige tips
            </span>
            <h2
              id="tips-heading"
              className="font-serif font-bold text-2xl sm:text-3xl text-foreground text-balance"
            >
              Zo haal je het meeste uit je sportreis
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tips.map((tip, i) => {
              const Icon = tip.icon
              const rots = ['scrap-rotate-1', '', 'scrap-rotate-2', 'scrap-rotate-neg']
              return (
                <div
                  key={tip.title}
                  className={`bg-card border-2 border-foreground/15 p-5 shadow-[3px_3px_0_var(--kraft-dark)] ${rots[i]}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h3 className="font-serif font-bold text-foreground">{tip.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/tips"
              className="inline-flex items-center gap-2 text-primary text-sm underline underline-offset-2 hover:text-accent transition-colors font-sans"
            >
              Lees alle reisgids tips →
            </Link>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="bg-secondary py-16 relative" aria-labelledby="faq-heading">
          <div
            className="absolute top-0 left-0 right-0 h-5 bg-background"
            style={{
              clipPath:
                'polygon(0 0, 2% 100%, 5% 20%, 8% 80%, 12% 10%, 15% 90%, 19% 30%, 22% 70%, 26% 15%, 29% 85%, 33% 40%, 36% 60%, 40% 20%, 43% 80%, 47% 10%, 50% 90%, 54% 30%, 57% 70%, 61% 5%, 64% 95%, 68% 35%, 71% 65%, 75% 10%, 78% 90%, 82% 40%, 85% 60%, 89% 15%, 92% 85%, 96% 30%, 98% 70%, 100% 0)',
            }}
          />

          <div className="max-w-2xl mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-8">
              <HelpCircle size={22} className="text-primary" />
              <h2
                id="faq-heading"
                className="font-serif font-bold text-2xl sm:text-3xl text-foreground text-balance text-center"
              >
                Veelgestelde vragen
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA STRIP ─── */}
        <section className="max-w-5xl mx-auto px-4 py-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-tape border border-kraft-dark/40 opacity-75 rounded-sm z-10" />
            <div className="bg-primary border-2 border-foreground/20 shadow-[4px_4px_0_var(--ink)] px-8 py-10 scrap-rotate-1">
              <h2 className="font-serif font-bold text-2xl text-primary-foreground text-balance mb-3">
                Klaar voor het avontuur?
              </h2>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 max-w-sm mx-auto font-sans">
                Blader door ons volledige reizenaanbod en vind de sportreis die perfect bij jou past.
              </p>
              <Link
                href="/tours"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground text-sm font-sans border-2 border-white/30 shadow-[2px_2px_0_rgba(0,0,0,0.3)] hover:shadow-[1px_1px_0_rgba(0,0,0,0.3)] transition-all"
              >
                Bekijk alle reizen <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  )
}
