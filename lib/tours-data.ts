export type Tour = {
  id: string
  title: string
  sport: 'fietsen' | 'motorreis' | 'hardlopen' | 'wandelen' | 'wielrennen' | 'watersport'
  country: string
  city: string
  dateFrom: string
  dateTo: string
  duration: number
  image: string
  shortDescription: string
  description: string
  includes: string[]
  difficulty: 'makkelijk' | 'gemiddeld' | 'avontuurlijk'
  groupSize: number
  highlights: string[]
  tag?: string
}

export const tours: Tour[] = [
  {
    id: 'mountainbike-ardennen',
    title: 'Mountainbike Avontuur door de Ardennen',
    sport: 'fietsen',
    country: 'België',
    city: 'La Roche-en-Ardenne',
    dateFrom: '2026-05-08',
    dateTo: '2026-05-11',
    duration: 4,
    image: '/images/tour-1.jpg',
    shortDescription:
      'Vier dagen singletrack en bospaden door de ruige Ardennen. Pure natuur, technische trails en gezelligheid rond het kampvuur.',
    description:
      'De Ardennen zijn een paradijs voor mountainbikers: dikke bosgrond, wortelsporen, rotsige afdalen en uitzichten die je adem stokken. Op deze vierdaagse auteurstour rijd je elke dag een andere route, begeleid door onze lokale gids die de verborgen paden als geen ander kent. We overnachten in een sfeervol vakantiehuis in de buurt van La Roche-en-Ardenne, waar elke avond een gezamenlijk diner klaarstaat. Niveaus lopen uiteen van technisch gemiddeld tot pittig — wie wil, kan kiezen voor de rustigere bosroute. De tocht is puur: geen massamarketing, geen sponsors, gewoon jij en je fiets in de natuur. Eigen fiets meenemen of huur ter plekke via onze partner.',
    includes: [
      'Touringcar retour vanuit Nederland',
      '3 overnachtingen vakantiehuis',
      'Dagelijks ontbijt en diner',
      'Professionele lokale gids',
      'Routekaarten & GPS-tracks',
    ],
    difficulty: 'avontuurlijk',
    groupSize: 14,
    highlights: [
      '4 unieke singletrack-routes in de Ardennen',
      'Lokale gids met dieptekennis van het gebied',
      'Gezellig groepsdiner na elke rit',
    ],
    tag: 'Populair',
  },
  {
    id: 'motorreis-alpen',
    title: 'Motoravontuur door de Alpen',
    sport: 'motorreis',
    country: 'Zwitserland',
    city: 'Interlaken',
    dateFrom: '2026-06-12',
    dateTo: '2026-06-18',
    duration: 7,
    image: '/images/tour-2.jpg',
    shortDescription:
      'Zeven dagen rijden over de mooiste bergpassen van de Alpen. Van de Grimselpass tot de Furkapass — een route die je bij houdt.',
    description:
      'Dit is de motorreis die je al jaren wil rijden. Zeven dagen lang rijd je in een kleine groep over de meest spectaculaire bergpassen van de Zwitserse en Italiaanse Alpen. Elke dag start je vanuit een ander dorp, met een zorgvuldig samengestelde route die zowel de beroemde als de verborgen passen aandoet. De groep bestaat uit maximaal 10 motorrijders, begeleid door een ervaren reisgids op de motor. We verblijven in kleine, authentieke berghotels. De route gaat over de Grimselpass, Furkapass, Gotthard, en langs het Comomeer. Een ervaring die je motorsport op een nieuwe manier laat beleven — vrij, puur en onvergetelijk.',
    includes: [
      'Begeleide groepsreis met ervaren reisgids',
      '6 overnachtingen berghotels',
      'Dagelijks ontbijt',
      'Routeboek & dagelijkse briefing',
      'Hulpservice bij pech onderweg',
    ],
    difficulty: 'gemiddeld',
    groupSize: 10,
    highlights: [
      'Rijden over 8 spectaculaire bergpassen',
      'Kleine groep — maximaal 10 motorrijders',
      'Authentieke berghotels met lokale keuken',
    ],
    tag: 'Aanbevolen',
  },
  {
    id: 'marathon-amsterdam',
    title: 'Jouw Eerste Marathon door Amsterdam',
    sport: 'hardlopen',
    country: 'Nederland',
    city: 'Amsterdam',
    dateFrom: '2026-07-05',
    dateTo: '2026-07-06',
    duration: 2,
    image: '/images/tour-3.jpg',
    shortDescription:
      'Loop jouw eerste of snelste marathon door de grachten en parken van Amsterdam, met trainingscoach en alles geregeld.',
    description:
      'Een marathon door Amsterdam is één van de mooiste hardloopreizen die je kunt maken. Historische grachten, brede lanen, het Vondelpark — het parcours is een belevenis op zich. Dit arrangement is ideaal voor wie zijn of haar eerste marathon wil lopen, maar ook voor ervaren lopers die een nieuw persoonlijk record willen neerzetten. Inclusief is een voorbereidingsdag met onze hardloopcoach, waarbij je de ideale strategie en voeding voor jouw niveau bespreekt. Na de finish is er een groepsborrel met medailles en herinneringen voor het leven. Hotel in het centrum, alles op loopafstand.',
    includes: [
      '1 overnachting centraal hotel Amsterdam',
      'Deelname marathon (inschrijving inbegrepen)',
      'Voorbereidingssessie met coach',
      'Finishpakket & herinneringsmedaille',
      'Groepsborrel na de finish',
    ],
    difficulty: 'avontuurlijk',
    groupSize: 25,
    highlights: [
      'Marathoncoaching op jouw niveau',
      'Prachtig parcours langs Amsterdamse grachten',
      'Onvergetelijke groepsfinish',
    ],
  },
  {
    id: 'bergwandelen-dolomieten',
    title: 'Bergwandelen in de Dolomieten',
    sport: 'wandelen',
    country: 'Italië',
    city: 'Cortina dAmpezzo',
    dateFrom: '2026-07-25',
    dateTo: '2026-08-01',
    duration: 8,
    image: '/images/tour-4.jpg',
    shortDescription:
      'Acht dagen trekken door de Dolomieten, langs rifugi, over bergkammen en door eindeloos mooie valleien. Geen massa, wel magie.',
    description:
      'De Dolomieten zijn door UNESCO aangewezen als werelderfgoed, en als je er eenmaal doorheen loopt begrijp je waarom. Op deze achtdaagse wandeltour volg je zorgvuldig geselecteerde routes door de meest spectaculaire valleien en langs de meest dramatische rotswanden van Noordoost-Italië. Elke nacht verblijf je in een authentieke rifugio of een klein berghotel. De dagelijkse routes variëren van 12 tot 22 kilometer, met hoogteverschillen tot 900 meter. Je hoeft niet te dragen — bagagetransport van rifugio naar rifugio is inbegrepen. Onze begeleider vertelt onderweg over geologie, flora en fauna. Avonden zijn eenvoudig en heerlijk: pasta, polenta en lokale wijn.',
    includes: [
      'Vluchten Amsterdam–Venetië retour',
      '7 overnachtingen rifugio/berghotel',
      'Halfpension (ontbijt + diner)',
      'Bagagetransport rifugio tot rifugio',
      'Engelstalig/Nederlandstalig gids',
    ],
    difficulty: 'avontuurlijk',
    groupSize: 12,
    highlights: [
      'Wandelen langs UNESCO-werelderfgoed rotsformaties',
      'Bagagetransport — jij draagt alleen een dagtas',
      'Authentieke rifugio-ervaring met lokale keuken',
    ],
    tag: 'Exclusief',
  },
  {
    id: 'fietsvakantie-toscane',
    title: 'Fietsvakantie door het Hart van Toscane',
    sport: 'wielrennen',
    country: 'Italië',
    city: 'Siena',
    dateFrom: '2026-09-05',
    dateTo: '2026-09-11',
    duration: 7,
    image: '/images/tour-5.jpg',
    shortDescription:
      'Zeven dagen fietsen over de strade bianche, heuvels en cypressenlanen van Toscane. Wijn, olijfolie en onvergetelijke uitzichten.',
    description:
      'Toscane en de fiets zijn een combinatie die al generaties lang werkt. Op deze zesdaagse fietstour vertrek je elke ochtend vanuit een ander middeleeuws stadje en fiets je door een landschap dat recht uit een schilderij lijkt te komen. De strade bianche — de onverharde witte wegen — geven een geheel eigen gevoel aan elke afdaling. Routes zijn geschikt voor racefietsen én gravel bikes, dagafstanden liggen tussen 60 en 95 kilometer. Na elke rit wacht een welverdiend bezoek aan een lokale boerderij, proeverij of thermebaad. We verblijven in drie agriturismo-hotels met ieder hun eigen karakter. Bagagevervoer en een supportbus zijn aanwezig.',
    includes: [
      'Vluchten Amsterdam–Pisa retour',
      '6 overnachtingen agriturismo',
      'Halfpension + wijnproeverij',
      'Supportbus & mechanische hulp',
      'Bagagetransport tussen accommodaties',
    ],
    difficulty: 'gemiddeld',
    groupSize: 16,
    highlights: [
      'Rijden over de beroemde strade bianche',
      'Verblijf in authentieke Toscaanse agriturismo-hotels',
      'Dagelijkse wijn- en olieproeverijen',
    ],
    tag: 'Nieuw',
  },
  {
    id: 'kayak-fjorden-noorwegen',
    title: 'Kayaktocht door de Noorse Fjorden',
    sport: 'watersport',
    country: 'Noorwegen',
    city: 'Flåm',
    dateFrom: '2026-08-15',
    dateTo: '2026-08-22',
    duration: 8,
    image: '/images/tour-6.jpg',
    shortDescription:
      'Paddle door indrukwekkende fjorden, slaap wild aan de waterkant en beleef de absolute stilte van de Noorse natuur.',
    description:
      'Er bestaat geen betere manier om de Noorse fjorden te ervaren dan vanuit een kajak. Op waterniveau zie je de 1000 meter hoge klifwanden in een heel ander perspectief. Op deze achtdaagse auteurstour peddel je elke dag 15 tot 25 kilometer, omgeven door een van de meest indrukwekkende landschappen op aarde. Je overnacht afwisselend in kleine guesthouses langs de fjordkust en op gecertificeerde wilde kampeerplaatsen — inclusief kampvuur en koken met lokale ingrediënten. De groep bestaat uit maximaal 10 deelnemers. Ervaring met kajak is geen vereiste — je krijgt op dag één een volledige introductietraining. Alle uitrusting is inbegrepen.',
    includes: [
      'Vluchten Amsterdam–Bergen retour',
      '7 overnachtingen (guesthouses & kamperen)',
      'Alle maaltijden tijdens de tocht',
      'Kajak, peddel & veiligheidsuitrusting',
      'Gecertificeerde kajakgids',
    ],
    difficulty: 'avontuurlijk',
    groupSize: 10,
    highlights: [
      'Paddelen door UNESCO-fjordlandschap',
      'Wilde kampeerervaring aan het water',
      'Kleine groep — maximaal 10 deelnemers',
    ],
  },
]

export const sportLabels: Record<Tour['sport'], string> = {
  fietsen: 'Mountainbike',
  motorreis: 'Motorreis',
  hardlopen: 'Hardlopen',
  wandelen: 'Bergwandelen',
  wielrennen: 'Wielrennen',
  watersport: 'Watersport',
}

