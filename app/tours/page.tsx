'use client'

import { useState, useMemo } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { TourCard } from '@/components/tour-card'
import { tours, sportLabels, type Tour } from '@/lib/tours-data'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const sports = ['alle', 'voetbal', 'tennis', 'wielrennen', 'formule1', 'atletiek', 'ijshockey'] as const
type SportFilter = (typeof sports)[number]

const countries = ['alle', ...Array.from(new Set(tours.map((t) => t.country)))]

export default function ToursPage() {
  const [query, setQuery] = useState('')
  const [sport, setSport] = useState<SportFilter>('alle')
  const [country, setCountry] = useState('alle')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    return tours.filter((t) => {
      const matchQuery =
        !query ||
        t.title.toLowerCase().includes(query.toLowerCase()) ||
        t.city.toLowerCase().includes(query.toLowerCase()) ||
        t.country.toLowerCase().includes(query.toLowerCase())

      const matchSport = sport === 'alle' || t.sport === sport
      const matchCountry = country === 'alle' || t.country === country

      return matchQuery && matchSport && matchCountry
    })
  }, [query, sport, country])

  const hasFilters = query || sport !== 'alle' || country !== 'alle'

  const clearFilters = () => {
    setQuery('')
    setSport('alle')
    setCountry('alle')
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Page header */}
        <section className="bg-primary relative overflow-hidden py-12">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 31px, white 31px, white 32px)',
            }}
          />
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-sans border-2 border-white/20 shadow-[2px_2px_0_rgba(0,0,0,0.2)] scrap-rotate-neg mb-4">
              Onze reizen 2026
            </div>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white text-balance">
              Alle sportreizen
            </h1>
            <p className="text-white/75 text-sm mt-3 max-w-md mx-auto font-sans">
              Filter op jouw favoriete sport, bestemming of budget en vind de perfecte sportreis.
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

        <section className="max-w-5xl mx-auto px-4 py-10">
          {/* Search + filter toggle */}
          <div className="flex gap-3 mb-4">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Zoek op stad, land of sport..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-card border-2 border-border text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary shadow-[2px_2px_0_var(--kraft-dark)]"
                aria-label="Zoek reizen"
              />
            </div>
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className={cn(
                'flex items-center gap-2 px-4 py-2.5 text-sm font-sans border-2 border-border shadow-[2px_2px_0_var(--kraft-dark)] transition-colors',
                filtersOpen ? 'bg-primary text-primary-foreground border-primary' : 'bg-card text-foreground',
              )}
              aria-expanded={filtersOpen}
              aria-label="Filters tonen"
            >
              <SlidersHorizontal size={15} />
              <span className="hidden sm:inline">Filters</span>
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 px-3 py-2.5 text-xs font-sans text-muted-foreground border-2 border-border bg-card hover:text-foreground transition-colors shadow-[2px_2px_0_var(--kraft-dark)]"
                aria-label="Filters wissen"
              >
                <X size={13} /> Wis filters
              </button>
            )}
          </div>

          {/* Filter panels */}
          {filtersOpen && (
            <div className="bg-card border-2 border-border shadow-[3px_3px_0_var(--kraft-dark)] p-4 mb-6 grid sm:grid-cols-2 gap-4">
              {/* Sport filter */}
              <div>
                <label className="block text-xs font-sans font-bold text-muted-foreground mb-2 uppercase tracking-wider">
                  Sport
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {sports.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSport(s)}
                      className={cn(
                        'px-2.5 py-1 text-xs font-sans border transition-colors',
                        sport === s
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background text-foreground border-border hover:border-primary',
                      )}
                    >
                      {s === 'alle' ? 'Alle' : sportLabels[s as Tour['sport']]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Country filter */}
              <div>
                <label className="block text-xs font-sans font-bold text-muted-foreground mb-2 uppercase tracking-wider">
                  Land
                </label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-3 py-2 bg-background border-2 border-border text-sm font-sans text-foreground focus:outline-none focus:border-primary"
                  aria-label="Filtereren op land"
                >
                  {countries.map((c) => (
                    <option key={c} value={c}>
                      {c === 'alle' ? 'Alle landen' : c}
                    </option>
                  ))}
                </select>
              </div>
          )}

          {/* Sport pills row */}
          <div className="flex gap-2 overflow-x-auto pb-1 mb-6 scrollbar-none">
            {sports.map((s) => (
              <button
                key={s}
                onClick={() => setSport(s)}
                className={cn(
                  'whitespace-nowrap px-3 py-1.5 text-xs font-sans border-2 transition-colors shrink-0',
                  sport === s
                    ? 'bg-primary text-primary-foreground border-primary shadow-[2px_2px_0_var(--ink)]'
                    : 'bg-card text-foreground border-border hover:border-primary',
                )}
              >
                {s === 'alle' ? 'Alle reizen' : sportLabels[s as Tour['sport']]}
              </button>
            ))}
          </div>

          {/* Result count */}
          <p className="text-xs text-muted-foreground mb-5 font-sans">
            {filtered.length} {filtered.length === 1 ? 'reis' : 'reizen'} gevonden
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((tour, i) => (
                <TourCard key={tour.id} tour={tour} index={i} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="sticky-note inline-block px-8 py-6 scrap-rotate-2">
                <p className="font-serif font-bold text-foreground mb-2">Geen reizen gevonden</p>
                <p className="text-sm text-muted-foreground font-sans">Pas je filters aan om meer resultaten te zien.</p>
              </div>
              <div className="mt-6">
                <button
                  onClick={clearFilters}
                  className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-sans border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)] hover:shadow-none transition-all"
                >
                  Alle reizen tonen
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
