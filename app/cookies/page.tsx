import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata = {
  title: 'Cookiebeleid – SportToursHolland',
  description: 'Lees alles over het gebruik van cookies op de website van SportToursHolland.',
}

const cookieTypes = [
  {
    name: 'Noodzakelijke cookies',
    tag: 'Altijd actief',
    tagColor: 'bg-sticker-green text-foreground',
    description:
      'Deze cookies zijn essentieel voor het functioneren van de website. Zonder deze cookies werken bepaalde onderdelen van de site niet naar behoren. Ze worden gebruikt voor het opslaan van uw cookievoorkeuren, sessiebeveiliging en het navigeren door de website.',
    examples: ['sth-cookies (cookievoorkeur, 1 jaar)', 'sessie-ID (sessieduur)'],
    canDisable: false,
  },
  {
    name: 'Analytische cookies',
    tag: 'Optioneel',
    tagColor: 'bg-sticker-yellow text-foreground',
    description:
      'Analytische cookies helpen ons begrijpen hoe bezoekers onze website gebruiken. De verzamelde gegevens zijn geanonimiseerd en worden gebruikt om de gebruikerservaring en content te verbeteren. Wij gebruiken geen persoonsidentificerende analytische data.',
    examples: ['_ga (Google Analytics, 2 jaar)', '_gid (Google Analytics, 24 uur)'],
    canDisable: true,
  },
  {
    name: 'Functionele cookies',
    tag: 'Optioneel',
    tagColor: 'bg-primary/20 text-primary',
    description:
      'Functionele cookies onthouden uw voorkeuren om uw ervaring op onze website te personaliseren. Denk aan taalinstellingen of recent bekeken reizen. Het uitschakelen van deze cookies betekent dat sommige functies niet werken zoals u gewend bent.',
    examples: ['recent-reizen (sessieduur)', 'taal-voorkeur (1 jaar)'],
    canDisable: true,
  },
  {
    name: 'Marketing cookies',
    tag: 'Optioneel',
    tagColor: 'bg-accent/20 text-foreground',
    description:
      'Marketing cookies worden gebruikt om u relevante advertenties te tonen op andere websites. Wij plaatsen zelf geen marketingcookies van derden zonder uw toestemming. Als u toestemming geeft, kunnen advertentieplatformen cookies plaatsen om onze campagnes te meten.',
    examples: ['Geen zonder uw toestemming'],
    canDisable: true,
  },
]

const faqCookies = [
  {
    q: 'Hoe kan ik cookies weigeren of verwijderen?',
    a: 'U kunt cookies weigeren via de cookiebanner die verschijnt bij uw eerste bezoek. Om bestaande cookies te verwijderen, kunt u dit doen via de instellingen van uw browser. In de meeste browsers gaat u naar Instellingen > Privacy & Beveiliging > Cookies. Let op: het verwijderen van cookies kan invloed hebben op de werking van onze website.',
  },
  {
    q: 'Worden mijn cookie-instellingen onthouden?',
    a: 'Ja, uw voorkeur wordt opgeslagen in een cookie (sth-cookies) voor de duur van 1 jaar. Na dit jaar vragen wij opnieuw om uw toestemming. Als u uw cookies verwijdert of een andere browser gebruikt, zult u opnieuw gevraagd worden.',
  },
  {
    q: 'Deelt SportToursHolland cookiegegevens met derden?',
    a: 'Alleen geanonimiseerde analytische gegevens worden gedeeld met onze analyticsdienstverlener. Wij verkopen cookiedata nooit. Raadpleeg ons privacybeleid voor de volledige lijst van verwerkers.',
  },
  {
    q: 'Wat is het verschil tussen first-party en third-party cookies?',
    a: 'First-party cookies worden geplaatst door onze eigen website (sporttoursholland.com). Third-party cookies worden geplaatst door externe diensten zoals analysediensten. Wij proberen het gebruik van third-party cookies te minimaliseren.',
  },
]

export default function CookiesPage() {
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
              Juridisch
            </div>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white text-balance">
              Cookiebeleid
            </h1>
            <p className="text-white/70 text-xs mt-2 font-sans">
              Laatste wijziging: 2026
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

        <section className="max-w-3xl mx-auto px-4 py-12">
          {/* Intro */}
          <div className="bg-card border-2 border-foreground/10 p-5 shadow-[3px_3px_0_var(--kraft-dark)] mb-8 relative">
            <div className="absolute -top-3 left-8 w-14 h-5 bg-tape border border-kraft-dark/40 opacity-70 rounded-sm" />
            <h2 className="font-serif font-bold text-base text-foreground mb-2">
              Wat zijn cookies?
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt. Ze helpen de website goed te functioneren, onthouden uw voorkeuren en geven ons inzicht in het gebruik van onze site. Op deze pagina leggen wij uit welke cookies wij gebruiken en waarom.
            </p>
          </div>

          {/* Cookie types */}
          <h2 className="font-serif font-bold text-xl text-foreground mb-6 text-center">
            Soorten cookies die wij gebruiken
          </h2>

          <div className="space-y-5 mb-12">
            {cookieTypes.map((ct, i) => {
              const rots = ['', 'scrap-rotate-1', 'scrap-rotate-neg', 'scrap-rotate-2']
              return (
                <div
                  key={ct.name}
                  className={`bg-card border-2 border-foreground/10 p-5 shadow-[3px_3px_0_var(--kraft-dark)] ${rots[i]}`}
                >
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <h3 className="font-serif font-bold text-foreground">{ct.name}</h3>
                    <span className={`text-xs px-2 py-0.5 font-sans border border-foreground/10 ${ct.tagColor}`}>
                      {ct.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3 font-sans">
                    {ct.description}
                  </p>
                  <div className="bg-background/60 border border-border rounded-sm px-3 py-2">
                    <p className="text-xs font-sans font-bold text-muted-foreground mb-1 uppercase tracking-wide">
                      Voorbeelden
                    </p>
                    <ul className="text-xs text-muted-foreground space-y-0.5 font-mono">
                      {ct.examples.map((ex) => (
                        <li key={ex}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>

          {/* FAQ */}
          <h2 className="font-serif font-bold text-xl text-foreground mb-5">
            Veelgestelde vragen over cookies
          </h2>
          <div className="space-y-3 mb-10">
            {faqCookies.map((faq, i) => {
              const rots = ['scrap-rotate-1', '', 'scrap-rotate-neg', 'scrap-rotate-2']
              return (
                <div
                  key={faq.q}
                  className={`bg-card border-2 border-foreground/10 p-5 shadow-[2px_2px_0_var(--kraft-dark)] ${rots[i]}`}
                >
                  <h3 className="font-serif font-bold text-sm text-foreground mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-sans">{faq.a}</p>
                </div>
              )
            })}
          </div>

          {/* Contact */}
          <div className="sticky-note p-5 text-center scrap-rotate-neg">
            <p className="text-sm font-sans text-foreground/80 leading-relaxed mb-3">
              Heeft u vragen over ons cookiebeleid of wilt u uw toestemming intrekken?
            </p>
            <a
              href="mailto:info@sporttoursholland.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-xs font-sans border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] transition-all"
            >
              Neem contact op
            </a>
            <p className="text-xs text-muted-foreground mt-3 font-sans">
              Zie ook ons{' '}
              <Link href="/privacy" className="text-primary hover:underline">
                privacybeleid
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
