import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { TourCard } from '@/components/tour-card'
import { tours, activityLabels } from '@/lib/tours-data'
import {
  MapPin,
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  Star,
  ChevronLeft,
} from 'lucide-react'

type Params = { id: string }

export async function generateStaticParams() {
  return tours.map((t) => ({ id: t.id }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { id } = await params
  const tour = tours.find((t) => t.id === id)
  if (!tour) return {}
  return {
    title: `${tour.title} – SportToursHolland`,
    description: tour.shortDescription,
  }
}

export default async function TourDetailPage({ params }: { params: Promise<Params> }) {
  const { id } = await params
  const tour = tours.find((t) => t.id === id)
  if (!tour) notFound()

  const related = tours.filter((t) => t.id !== tour.id).slice(0, 3)

  const difficultyLabel: Record<string, string> = {
    makkelijk: 'Makkelijk',
    gemiddeld: 'Gemiddeld',
    avontuurlijk: 'Avontuurlijk',
  }

  const difficultyColor: Record<string, string> = {
    makkelijk: 'bg-sticker-green text-foreground',
    gemiddeld: 'bg-sticker-yellow text-foreground',
    avontuurlijk: 'bg-accent/20 text-accent-foreground',
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero image */}
        <section className="relative h-64 sm:h-80 bg-primary overflow-hidden">
          <Image
            src={tour.image}
            alt={tour.title}
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/80" />

          <div
            className="absolute bottom-0 left-0 right-0 h-6 bg-background"
            style={{
              clipPath:
                'polygon(0 100%, 2% 0, 5% 80%, 8% 20%, 12% 90%, 15% 10%, 19% 70%, 22% 30%, 26% 85%, 29% 15%, 33% 60%, 36% 40%, 40% 80%, 43% 20%, 47% 90%, 50% 10%, 54% 70%, 57% 30%, 61% 95%, 64% 5%, 68% 65%, 71% 35%, 75% 90%, 78% 10%, 82% 60%, 85% 40%, 89% 85%, 92% 15%, 96% 70%, 98% 30%, 100% 100%)',
            }}
          />

          {/* Back link */}
          <div className="absolute top-4 left-4 z-10">
            <Link
              href="/tours"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black/30 text-white text-xs font-sans border border-white/20 hover:bg-black/50 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft size={14} /> Alle reizen
            </Link>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main content */}
            <article className="lg:col-span-2">
              {/* Activity + tag */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2.5 py-0.5 bg-primary/15 text-primary text-xs font-sans border border-primary/30">
                  {activityLabels[tour.activity]}
                </span>
                {tour.tag && (
                  <span className="px-2.5 py-0.5 bg-accent text-accent-foreground text-xs font-sans border border-foreground/15">
                    {tour.tag}
                  </span>
                )}
                <span className={`px-2.5 py-0.5 text-xs font-sans border border-foreground/10 ${difficultyColor[tour.difficulty]}`}>
                  {difficultyLabel[tour.difficulty]}
                </span>
              </div>

              <h1 className="font-serif font-bold text-2xl sm:text-3xl text-foreground text-balance mb-2">
                {tour.title}
              </h1>

              {/* Meta row */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-primary" />
                  {tour.city}, {tour.country}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary" />
                  {new Date(tour.dateFrom).toLocaleDateString('nl-NL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                  {' – '}
                  {new Date(tour.dateTo).toLocaleDateString('nl-NL', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} className="text-primary" />
                  {tour.duration} {tour.duration === 1 ? 'dag' : 'dagen'}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users size={14} className="text-primary" />
                  Max {tour.groupSize} personen
                </span>
              </div>

              {/* Description */}
              <div className="bg-card border-2 border-foreground/10 p-5 shadow-[3px_3px_0_var(--kraft-dark)] mb-6 relative">
                <div className="absolute -top-3 left-8 w-12 h-5 bg-tape border border-kraft-dark/40 opacity-75 rounded-sm" />
                <h2 className="font-serif font-bold text-base text-foreground mb-3">
                  Over deze reis
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tour.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h2 className="font-serif font-bold text-base text-foreground mb-3 flex items-center gap-2">
                  <Star size={16} className="text-accent" />
                  Hoogtepunten
                </h2>
                <ul className="space-y-2">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Includes */}
              <div className="bg-sticker-green/30 border-2 border-primary/20 p-5 shadow-[2px_2px_0_var(--kraft-dark)]">
                <h2 className="font-serif font-bold text-base text-foreground mb-3">
                  Dit is inbegrepen
                </h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {tour.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Sidebar booking card */}
            <aside className="lg:col-span-1">
              <div className="sticky top-20 bg-card border-2 border-foreground/20 shadow-[4px_4px_0_var(--ink)] p-5 scrap-rotate-1">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-tape border border-kraft-dark/40 opacity-75 rounded-sm z-10" />

                <h2 className="font-serif font-bold text-lg text-foreground mb-4">
                  Reis details
                </h2>

                <div className="space-y-2 text-sm mb-5">
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground font-sans">Vertrekdatum</span>
                    <span className="font-sans text-foreground">
                      {new Date(tour.dateFrom).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground font-sans">Einddatum</span>
                    <span className="font-sans text-foreground">
                      {new Date(tour.dateTo).toLocaleDateString('nl-NL', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground font-sans">Duur</span>
                    <span className="font-sans text-foreground">{tour.duration} dagen</span>
                  </div>
                  <div className="flex justify-between border-b border-border/50 pb-2">
                    <span className="text-muted-foreground font-sans">Groepsgrootte</span>
                    <span className="font-sans text-foreground">Max {tour.groupSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground font-sans">Niveau</span>
                    <span className="font-sans text-foreground capitalize">{tour.difficulty}</span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 bg-accent text-accent-foreground text-sm font-sans border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none transition-all mb-3"
                >
                  Vraag informatie aan
                </Link>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 bg-primary text-primary-foreground text-sm font-sans border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none transition-all"
                >
                  Vraag een offerte aan
                </Link>
              </div>
            </aside>
          </div>

          {/* Related tours */}
          <section className="mt-16" aria-labelledby="related-heading">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-border" />
              <h2 id="related-heading" className="font-serif font-bold text-lg text-foreground whitespace-nowrap">
                Andere reizen die je misschien leuk vindt
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((t, i) => (
                <TourCard key={t.id} tour={t} index={i} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
