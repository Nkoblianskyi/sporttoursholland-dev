import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import {
  Backpack,
  Shield,
  Sun,
  Camera,
  Utensils,
  CreditCard,
  Languages,
  HeartPulse,
  Wifi,
  MapPin,
  AlertTriangle,
  Check,
} from 'lucide-react'

const tips = [
  {
    icon: Backpack,
    title: 'Pak slim in',
    body: 'Breng alleen wat je echt nodig hebt. Een lichte rugzak met een regenjas, extra sokken, een waterflacon en een portabele oplader is al genoeg voor de meeste sportevenementen. Voorkom grote koffers bij dagtochten.',
    tag: 'Voorbereiding',
    color: 'bg-sticker-yellow',
  },
  {
    icon: Shield,
    title: 'Reisverzekering is een must',
    body: 'Zonder reisverzekering loop je grote risico\'s. Zorg dat je polis medische kosten, annulering, bagageverlies én reisaansprakelijkheid dekt. Vraag bij twijfel advies aan onze reisspecialisten.',
    tag: 'Verzekering',
    color: 'bg-sticker-green',
  },
  {
    icon: Sun,
    title: 'Check het weer vooraf',
    body: 'Europa kent sterk wisselend weer. Controleer de weersvoorspelling 48 uur voor vertrek en neem passende kleding mee. Bij outdoor evenementen is een poncho of lichte jas altijd handig.',
    tag: 'Klimaat',
    color: 'bg-primary/20',
  },
  {
    icon: Camera,
    title: 'Fotobeleid per evenement',
    body: 'Elk sportevenement heeft eigen regels voor fotografie. Professionele camera\'s met verwisselbare lenzen zijn bij veel evenementen verboden. Controleer de regels op de officiële website of vraag het onze begeleider.',
    tag: 'Regels',
    color: 'bg-accent/20',
  },
  {
    icon: Utensils,
    title: 'Eet lokaal',
    body: 'De lokale keuken is een verrijking van iedere reis. Vermijd toeristische restaurants rondom evenementenlocaties — ze zijn vaak duurder. Vraag onze reisbegeleider voor eerlijke tips over authentieke eetgelegenheden.',
    tag: 'Eten & drinken',
    color: 'bg-sticker-yellow',
  },
  {
    icon: CreditCard,
    title: 'Betaalgewoontes per land',
    body: 'In Nederland en de meeste West-Europese landen kunt u overal pinnen. In Italië, Spanje en Oost-Europa is contant geld soms handig. Neem altijd een kleine reserve cash mee en meld uw reis bij uw bank.',
    tag: 'Geld',
    color: 'bg-sticker-green',
  },
  {
    icon: Languages,
    title: 'Basiswoorden in de lokale taal',
    body: 'Hallo, bedankt, pardon en alstublieft in de lokale taal openen deuren. Download Google Translate met offline pakket voor het betreffende land. Locals waarderen iedere moeite die u doet.',
    tag: 'Communicatie',
    color: 'bg-primary/20',
  },
  {
    icon: HeartPulse,
    title: 'Gezondheid & medicijnen',
    body: 'Neem voldoende persoonlijke medicijnen mee voor de gehele reisduur plus drie extra dagen. Bewaar ze in uw handbagage. Draag een kaartje met uw medische informatie bij u als u een bijzondere aandoening heeft.',
    tag: 'Gezondheid',
    color: 'bg-accent/20',
  },
  {
    icon: Wifi,
    title: 'Connectivity onderweg',
    body: 'Binnen de EU heeft u bij de meeste providers roaming zonder meerkosten. Buiten de EU (Zwitserland, UK, Monaco) kan data duur zijn. Overweeg een lokale prepaid simkaart of internationale bundel.',
    tag: 'Technologie',
    color: 'bg-sticker-yellow',
  },
  {
    icon: MapPin,
    title: 'Ken uw locatie',
    body: 'Download offline kaarten van uw bestemming via Google Maps of Maps.me voor vertrek. Sla het adres van uw hotel en het evenemententerrein op in uw telefoon. Ken het dichtstbijzijnde ziekenhuis en de lokale noodhulp.',
    tag: 'Navigatie',
    color: 'bg-sticker-green',
  },
  {
    icon: AlertTriangle,
    title: 'Veiligheid op evenementen',
    body: 'Grote menigten trekken zakkenrollers aan. Draag uw portemonnee aan de voorkant of gebruik een binnenzak. Spreek een vaste ontmoetingsplek af met uw reisgezelschap en sla de contactgegevens van uw reisbegeleider op.',
    tag: 'Veiligheid',
    color: 'bg-accent/20',
  },
  {
    icon: Check,
    title: 'Aankomst & tribuneprotocol',
    body: 'Kom minstens 90 minuten voor aanvang aan bij grote evenementen. De ingangen zijn bezet en veiligheidscontroles kosten tijd. Draag geen verboden items (drankflessen, vlaggen groter dan A4 enz.) tenzij anders vermeld.',
    tag: 'Praktisch',
    color: 'bg-primary/20',
  },
]

const tagColors: Record<string, string> = {
  Voorbereiding: 'bg-sticker-yellow text-foreground',
  Verzekering: 'bg-sticker-green text-foreground',
  Klimaat: 'bg-primary/20 text-primary',
  Regels: 'bg-accent/20 text-foreground',
  'Eten & drinken': 'bg-sticker-yellow text-foreground',
  Geld: 'bg-sticker-green text-foreground',
  Communicatie: 'bg-primary/20 text-primary',
  Gezondheid: 'bg-accent/20 text-foreground',
  Technologie: 'bg-sticker-yellow text-foreground',
  Navigatie: 'bg-sticker-green text-foreground',
  Veiligheid: 'bg-accent/20 text-foreground',
  Praktisch: 'bg-primary/20 text-primary',
}

const rotations = [
  'scrap-rotate-1',
  '',
  'scrap-rotate-2',
  'scrap-rotate-neg',
  'scrap-rotate-1',
  '',
  'scrap-rotate-2',
  'scrap-rotate-neg',
  '',
  'scrap-rotate-1',
  'scrap-rotate-neg',
  'scrap-rotate-2',
]

export const metadata = {
  title: 'Reisgids & Sportreis Tips – SportToursHolland',
  description:
    'Praktische reisgids voor sportreizigers. Alles wat u moet weten over inpakken, verzekeringen, veiligheid, eten en communicatie op uw sportreis.',
}

export default function TipsPage() {
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
            <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-sans border-2 border-white/20 shadow-[2px_2px_0_rgba(0,0,0,0.2)] scrap-rotate-neg mb-4">
              Handige reisinformatie
            </div>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white text-balance">
              Reisgids voor sportreizigers
            </h1>
            <p className="text-white/75 text-sm mt-3 max-w-md mx-auto font-sans">
              Alles wat u moet weten voor een zorgeloze en onvergetelijke sportreis door Nederland en Europa.
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

        {/* Tips intro */}
        <section className="max-w-5xl mx-auto px-4 pt-12 pb-4">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <div>
              <span className="inline-block px-2 py-0.5 bg-sticker-yellow text-foreground text-xs font-sans border border-foreground/15 mb-3">
                Van onze experts
              </span>
              <h2 className="font-serif font-bold text-2xl text-foreground mb-4 text-balance">
                Slim reizen begint met goede voorbereiding
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Na honderden sportreizen door heel Europa hebben onze begeleiders een schat aan praktische kennis opgebouwd. Deze reisgids bundelt de beste tips zodat u volledig voorbereid op pad gaat.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Van het juiste inpakken tot veiligheid in grote menigten — elke tip is gebaseerd op echte ervaringen van onze reizigers.
              </p>
            </div>
            <div className="relative scrap-rotate-1 self-start">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-tape border border-kraft-dark/40 opacity-75 rounded-sm z-10" />
              <div className="photo-frame overflow-hidden aspect-[4/3] relative">
                <Image
                  src="/images/tips-bg.jpg"
                  alt="Reisgids en sporttickets op een houten tafel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tips grid */}
        <section className="bg-kraft py-12 relative" aria-labelledby="tips-grid-heading">
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
            <h2
              id="tips-grid-heading"
              className="font-serif font-bold text-xl text-foreground mb-8 text-center"
            >
              12 essentiële reisgids tips
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map((tip, i) => {
                const Icon = tip.icon
                return (
                  <div
                    key={tip.title}
                    className={`bg-card border-2 border-foreground/15 p-5 shadow-[3px_3px_0_var(--kraft-dark)] ${rotations[i]}`}
                  >
                    {/* Tape strip */}
                    <div className="relative mb-4">
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-10 h-4 bg-tape border border-kraft-dark/40 opacity-75 rounded-sm" />
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={17} className="text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="font-serif font-bold text-foreground text-sm leading-tight">
                            {tip.title}
                          </h3>
                          <span className={`text-xs px-1.5 py-0.5 font-sans border border-foreground/10 ${tagColors[tip.tag] ?? ''}`}>
                            {tip.tag}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">{tip.body}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-4 py-16 text-center">
          <div className="sticky-note inline-block px-8 py-6 scrap-rotate-neg max-w-sm mx-auto">
            <h2 className="font-serif font-bold text-foreground mb-2">
              Klaar voor uw sportreis?
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4 font-sans">
              Bekijk ons aanbod en laat onze experts de rest regelen.
            </p>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-sans border-2 border-foreground/20 shadow-[2px_2px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none transition-all"
            >
              Bekijk alle reizen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
