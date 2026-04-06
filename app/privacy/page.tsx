import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata = {
  title: 'Privacybeleid – SportToursHolland',
  description: 'Lees hoe SportToursHolland omgaat met uw persoonsgegevens conform de AVG.',
}

const sections = [
  {
    title: '1. Wie zijn wij?',
    content: `SportToursHolland is een handelsnaam van K.C. NTOMATA LIMITED, geregistreerd te Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus. Wij zijn verantwoordelijk voor de verwerking van uw persoonsgegevens zoals omschreven in dit privacybeleid. Voor vragen kunt u contact opnemen via info@sporttoursholland.com.`,
  },
  {
    title: '2. Welke gegevens verzamelen wij?',
    content: `Wij kunnen de volgende persoonsgegevens van u verwerken:\n\n• Naam en contactgegevens (e-mailadres, telefoonnummer)\n• Reisgegevens en voorkeuren die u met ons deelt\n• Betalingsinformatie (via beveiligde derde partijen)\n• Technische gegevens (IP-adres, browsertype) via cookies\n• Correspondentie die u met ons voert`,
  },
  {
    title: '3. Waarom verwerken wij uw gegevens?',
    content: `Wij verwerken uw persoonsgegevens voor de volgende doeleinden:\n\n• Het uitvoeren van de reisovereenkomst en bijbehorende dienstverlening\n• Het beantwoorden van uw vragen en verzoeken\n• Het verzenden van relevante informatie over uw reis\n• Het verbeteren van onze website en diensten (geanonimiseerd)\n• Het nakomen van wettelijke verplichtingen`,
  },
  {
    title: '4. Grondslag voor verwerking',
    content: `Wij verwerken uw persoonsgegevens op basis van:\n\n• Uitvoering van een overeenkomst: noodzakelijk voor de reisboeking\n• Gerechtvaardigd belang: voor websiteanalyse en serviceverbetering\n• Toestemming: voor nieuwsbrieven en marketingcommunicatie (u kunt zich altijd afmelden)\n• Wettelijke verplichting: voor belasting- en administratieve doeleinden`,
  },
  {
    title: '5. Hoe lang bewaren wij uw gegevens?',
    content: `Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor ze zijn verzameld:\n\n• Klantgegevens en reisovereenkomsten: 7 jaar (wettelijke bewaarplicht)\n• Websiteanalysegegevens: maximaal 26 maanden\n• Sollicitatiegegevens: 4 weken na afronding van de procedure\n• Contactformulierberichten zonder boeking: maximaal 1 jaar`,
  },
  {
    title: '6. Delen wij uw gegevens?',
    content: `Wij delen uw persoonsgegevens uitsluitend met derden wanneer dit noodzakelijk is:\n\n• Reispartners en leveranciers die onderdeel uitmaken van uw boeking (hotels, vervoerders, evenementenorganisatoren)\n• Betaaldienstverleners voor de verwerking van betalingen\n• IT-dienstverleners die onze website en systemen ondersteunen\n• Overheidsinstanties wanneer de wet dit vereist\n\nWij sluiten verwerkersovereenkomsten af met alle partijen die namens ons persoonsgegevens verwerken. Wij verkopen uw gegevens nooit aan derden.`,
  },
  {
    title: '7. Uw rechten',
    content: `Als betrokkene heeft u de volgende rechten:\n\n• Recht op inzage: u mag vragen welke gegevens wij van u hebben\n• Recht op rectificatie: u kunt onjuiste gegevens laten corrigeren\n• Recht op wissing: u kunt verzoeken uw gegevens te verwijderen\n• Recht op beperking: u kunt de verwerking tijdelijk laten beperken\n• Recht op overdraagbaarheid: u kunt uw gegevens in leesbaar formaat opvragen\n• Recht van bezwaar: u kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd belang\n\nU kunt uw rechten uitoefenen door contact op te nemen via info@sporttoursholland.com. Wij reageren binnen 30 dagen.`,
  },
  {
    title: '8. Beveiliging',
    content: `Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te beschermen tegen verlies, misbruik of onbevoegde toegang. Onze website maakt gebruik van HTTPS-encryptie. Medewerkers hebben alleen toegang tot gegevens die zij nodig hebben voor hun werkzaamheden.`,
  },
  {
    title: '9. Cookies',
    content: `Onze website maakt gebruik van cookies. Raadpleeg ons Cookiebeleid voor uitgebreide informatie over welke cookies wij plaatsen, waarvoor en hoe u deze kunt beheren of verwijderen.`,
  },
  {
    title: '10. Klachten',
    content: `Als u niet tevreden bent over de manier waarop wij met uw persoonsgegevens omgaan, kunt u een klacht indienen bij de Autoriteit Persoonsgegevens (Nederland) via www.autoriteitpersoonsgegevens.nl, of bij de bevoegde toezichthoudende autoriteit in Cyprus (Office of the Commissioner for Personal Data Protection).`,
  },
  {
    title: '11. Wijzigingen',
    content: `Wij kunnen dit privacybeleid van tijd tot tijd aanpassen. De meest actuele versie is altijd te vinden op onze website. De datum van de laatste wijziging staat onderaan deze pagina vermeld.`,
  },
]

export default function PrivacyPage() {
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
              Juridisch
            </div>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-white text-balance">
              Privacybeleid
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
          {/* Intro note */}
          <div className="sticky-note p-5 mb-10 scrap-rotate-1 max-w-md mx-auto text-center">
            <p className="text-sm font-sans text-foreground/80 leading-relaxed">
              SportToursHolland hecht grote waarde aan de bescherming van uw persoonsgegevens. In dit beleid leggen wij uit hoe wij daarmee omgaan, conform de Algemene Verordening Gegevensbescherming (AVG / GDPR).
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((sec, i) => {
              const rots = ['', 'scrap-rotate-1', '', 'scrap-rotate-neg', '', 'scrap-rotate-1', '', 'scrap-rotate-neg', '', 'scrap-rotate-1', '']
              return (
                <div
                  key={sec.title}
                  className={`bg-card border-2 border-foreground/10 p-5 shadow-[3px_3px_0_var(--kraft-dark)] relative ${rots[i % rots.length]}`}
                >
                  {i % 3 === 0 && (
                    <div className="absolute -top-3 left-8 w-12 h-5 bg-tape border border-kraft-dark/40 opacity-70 rounded-sm" />
                  )}
                  <h2 className="font-serif font-bold text-base text-foreground mb-3">
                    {sec.title}
                  </h2>
                  <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line font-sans">
                    {sec.content}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 text-center">
            <a
              href="mailto:info@sporttoursholland.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-sans border-2 border-foreground/20 shadow-[3px_3px_0_var(--ink)] hover:shadow-[1px_1px_0_var(--ink)] transition-all"
            >
              Vragen? Stuur ons een e-mail
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
