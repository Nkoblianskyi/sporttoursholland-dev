import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { MapPin, Mail, Phone, Globe, Heart, Award, Users, ThumbsUp } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Passie voor sport',
    body: 'Wij zijn zelf sportfans en begrijpen wat het betekent om een topprestatie live mee te maken. Die passie zetten we in elke reis.',
  },
  {
    icon: Award,
    title: 'Kwaliteit boven alles',
    body: 'Van de beste tribüneplekken tot zorgvuldig geselecteerde hotels. Wij stellen geen genoegen met minder dan het beste voor onze reizigers.',
  },
  {
    icon: Users,
    title: 'Persoonlijke begeleiding',
    body: 'Een Nederlandstalige reisbegeleider is altijd aanwezig om uw sportreis tot een onvergetelijke ervaring te maken.',
  },
  {
    icon: ThumbsUp,
    title: 'Betrouwbaar & transparant',
    body: 'Geen verborgen kosten. Alles wat in uw pakket zit, staat duidelijk vermeld. Wij hechten aan eerlijke communicatie.',
  },
]

export default function AboutPage() {
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
              Wie zijn wij?
            </div>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white text-balance">
              Over SportToursHolland
            </h1>
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-6 bg-background"
            style={{
              clipPath:
                'polygon(0 100%, 2% 0, 5% 80%, 8% 20%, 12% 90%, 15% 10%, 19% 70%, 22% 30%, 26% 85%, 29% 15%, 33% 60%, 36% 40%, 40% 80%, 43% 20%, 47% 90%, 50% 10%, 54% 70%, 57% 30%, 61% 95%, 64% 5%, 68% 65%, 71% 35%, 75% 90%, 78% 10%, 82% 60%, 85% 40%, 89% 85%, 92% 15%, 96% 70%, 98% 30%, 100% 100%)',
            }}
          />
        </section>

        <section className="max-w-5xl mx-auto px-4 py-14">
          {/* Story */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="font-serif font-bold text-2xl text-foreground mb-4 text-balance">
                Sport beleef je het beste live
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                SportToursHolland werd opgericht vanuit een simpele overtuiging: de spanning van een live sportevenement is onvervangbaar. Televisieschermen en streamingdiensten zijn prachtig, maar niets overtreft het gevoel van tienduizenden supporters die tegelijk juichen, de geur van het gras op het veld, of het gebrul van motoren die rakelings voorbijschieten.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Wij zijn een reisspecialist met expertise in het organiseren van groepsreizen naar grote sportevenementen in Nederland en door heel Europa. Ons team bestaat uit doorgewinterde reizigers én echte sportliefhebbers die precies weten welke plekken het beste uitzicht bieden, welke hotels het dichtstbij liggen en hoe je een evenement optimaal beleeft.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We werken nauw samen met lokale partners om de beste ervaringen te bieden – van het regelen van tickets tot het organiseren van een exclusieve backstage rondleiding. Uw sportreis is bij ons in goede handen.
              </p>
            </div>
            <div className="relative scrap-rotate-2 self-start">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-tape border border-kraft-dark/40 opacity-75 rounded-sm z-10" />
              <div className="photo-frame overflow-hidden aspect-[4/3] relative">
                <Image
                  src="/images/about-bg.jpg"
                  alt="Het team van SportToursHolland onderweg op sportreis"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-2 sticky-note px-3 py-2 max-w-[130px] scrap-rotate-neg z-10">
                <p className="text-xs font-sans text-foreground/80">Opgericht met sportpassie in Nederland</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="font-serif font-bold text-xl text-foreground mb-6 text-center">
              Onze waarden
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => {
                const Icon = v.icon
                const rots = ['scrap-rotate-1', '', 'scrap-rotate-2', 'scrap-rotate-neg']
                return (
                  <div
                    key={v.title}
                    className={`bg-card border-2 border-foreground/15 p-5 shadow-[3px_3px_0_var(--kraft-dark)] ${rots[i]}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <h3 className="font-serif font-bold text-foreground">{v.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Company info */}
          <div className="bg-kraft border-2 border-foreground/15 p-6 shadow-[4px_4px_0_var(--ink)] relative">
            <div className="absolute -top-4 left-8 w-16 h-6 bg-tape border border-kraft-dark/40 opacity-75 rounded-sm z-10" />
            <h2 className="font-serif font-bold text-lg text-foreground mb-4">
              Bedrijfsgegevens
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-sans font-bold text-foreground mb-1">K.C. NTOMATA LIMITED</p>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                  <address className="not-italic">
                    Stylianou Lena,<br />
                    24 Christiana Court, Flat/Office 202,<br />
                    Strovolos, 2019 Nicosia,<br />
                    Cyprus
                  </address>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail size={14} className="text-primary shrink-0" />
                  <a href="mailto:info@sporttoursholland.com" className="hover:text-primary transition-colors">
                    info@sporttoursholland.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone size={14} className="text-primary shrink-0" />
                  <a href="tel:+31201234567" className="hover:text-primary transition-colors">
                    +31 20 123 4567
                  </a>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe size={14} className="text-primary shrink-0" />
                  <span>sporttoursholland.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-primary-foreground text-sm font-sans border-2 border-foreground/20 shadow-[3px_3px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] active:shadow-none transition-all"
            >
              Bekijk onze reizen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
