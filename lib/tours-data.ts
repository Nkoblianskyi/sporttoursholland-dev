export type Tour = {
  id: string
  title: string
  sport: 'voetbal' | 'tennis' | 'wielrennen' | 'formule1' | 'atletiek' | 'ijshockey'
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
    id: 'voetbal-amsterdam',
    title: 'Grote Wedstrijd in Amsterdam',
    sport: 'voetbal',
    country: 'Nederland',
    city: 'Amsterdam',
    dateFrom: '2026-05-15',
    dateTo: '2026-05-17',
    duration: 3,
    image: '/images/tour-1.jpg',
    shortDescription: 'Beleef het bruisende voetbalatmosfeer in het hart van Amsterdam. Een onvergetelijk weekend vol spanning en sportbeleving.',
    description:
      'Drie onvergetelijke dagen in Amsterdam staan voor de deur. Samen met een groep enthousiaste sportliefhebbers rijs je af naar de prachtige Nederlandse hoofdstad voor een topwedstrijd vol spanning. Je verblijft in een sfeervol boutique hotel in het centrum, vlakbij de bruisende sportomgeving. Na de wedstrijd is er volop ruimte voor een rondleiding door de stad, een canal cruise of een bezoek aan de lokale markten. Onze begeleider zorgt voor een soepel programma, zodat jij je volledig kunt focussen op het genieten. Dit arrangement is ideaal voor de echte sportfan die sportbeleving combineert met Amsterdamse sfeer.',
    includes: ['Hotelovernachting (2 nachten)', 'Tribüneplekken (categorie B)', 'Begeleide stadstour', 'Canal cruise', 'Ontbijt inclusief'],
    difficulty: 'makkelijk',
    groupSize: 20,
    highlights: ['Topwedstrijd live meemaken', 'Rondleiding historisch centrum', 'Gezellig diner met de groep'],
    tag: 'Populair',
  },
  {
    id: 'wielrennen-dolomiten',
    title: 'Wielerklassieker in de Dolomieten',
    sport: 'wielrennen',
    country: 'Italië',
    city: 'Bolzano',
    dateFrom: '2026-06-03',
    dateTo: '2026-06-07',
    duration: 5,
    image: '/images/tour-2.jpg',
    shortDescription: 'Volg de professionele wielerklassieker door de adembenemende Dolomieten en fiets zelf de iconische bergpassen.',
    description:
      'De Dolomieten vormen elk jaar opnieuw een decor dat je adem doet stokken. Op deze vijfdaagse sportreis combineer je het bijwonen van een professionele wielerklassieker met zelf fietsen op de legendarische bergwegen. De groep vertrekt per touringcar vanuit Nederland naar Noord-Italië, waar je verblijft in een comfortabel berghotel met uitzicht op de rotsformaties. Overdag begeleid je de koers van meerdere strategische kijkpunten, in de avond geniet je van lokale Tiroler en Italiaanse gerechten. Voor de fietsliefhebbers is er een begeleide ritoptie van 40 km op dag drie. Een reis die sportpassie en bergavontuur perfect combineert.',
    includes: ['Touringcar heen en terug', '4 hotelovernachtingen', 'Dagpas wielerklassieker', 'Begeleide fietsrit (optioneel)', 'Halfpension'],
    difficulty: 'avontuurlijk',
    groupSize: 16,
    highlights: ['Koers live volgen vanuit 3 perspectieven', 'Optionele bergrit met begeleider', 'Authentiek Italiaans diner'],
    tag: 'Aanbevolen',
  },
  {
    id: 'tennis-parijs',
    title: 'Grand Slam Belevenis in Parijs',
    sport: 'tennis',
    country: 'Frankrijk',
    city: 'Parijs',
    dateFrom: '2026-06-19',
    dateTo: '2026-06-22',
    duration: 4,
    image: '/images/tour-3.jpg',
    shortDescription: 'Geniet van het prestigieuze grandslamtoernooi in Parijs, inclusief VIP-tickets en een verblijf in een charmant Parijs hotel.',
    description:
      'Parijs in juni: de stad is in de ban van tennis. Je verblijft vier dagen in een karakteristiek boetiekhotel in het zesde arrondissement, op loopafstand van het tenniscentrum. Jouw pakket bevat dagtickets inclusief toegang tot de kwalificatiewedstrijden en een halve finale. Tussen de wedstrijden door ontdek je Le Marais, maak je een wandeling langs de Seine of bezoek je de boekenmarkten langs de rivier. Onze Nederlandstalige reisbegeleider is altijd in de buurt voor vragen. De reis is inclusief treinreizen Thalys Amsterdam–Parijs. Een arrangement voor de tennisliefhebber die ook de verfijnde kant van Parijs wil ervaren.',
    includes: ['Thalys Amsterdam–Parijs retour', '3 hotelovernachtingen', 'Dagtickets (incl. halve finale)', 'Parijse stadswandeling', 'Welkomstdiner'],
    difficulty: 'makkelijk',
    groupSize: 18,
    highlights: ['Halve finale live bijwonen', 'VIP hospitality lounge toegang', 'Parijse bistro-ervaring'],
  },
  {
    id: 'formule1-monaco',
    title: 'Racespektakel in Monaco',
    sport: 'formule1',
    country: 'Monaco',
    city: 'Monte Carlo',
    dateFrom: '2026-07-10',
    dateTo: '2026-07-13',
    duration: 4,
    image: '/images/tour-4.jpg',
    shortDescription: 'De meest glamoureuze race ter wereld, de smalle straatjes van Monte Carlo, een grandioos schouwspel dat je nooit vergeet.',
    description:
      'Het circuit door de smalle straatjes van Monaco is het meest iconische circuit ter wereld. Dit vierdaags arrangement brengt jou midden in het spektakel. Je verblijft in een modern hotel op loopafstand van het circuit, inclusief toegangstickets voor de kwalificatiedag en de hoofdrace. Op de vrije dag organiseren wij een exclusieve boottocht langs het circuit van de zeezijde, inclusief lunch aan boord. De sfeer in Monaco tijdens een raceweekend is uniek: glamour, snelheid en spanning zijn verweven met de pittoreske straten van het prinsdom. Onze reisleider coördineert alles zodat jij zorgeloos geniet.',
    includes: ['Vluchten Amsterdam–Nice retour', '3 hotelovernachtingen', 'Kwalificatie + race tickets', 'Boottocht langs het circuit', 'Stadsrondleiding Monte Carlo'],
    difficulty: 'makkelijk',
    groupSize: 12,
    highlights: ['Race live op het beroemdste circuit ter wereld', 'Boottocht met zicht op het circuit', 'Monaco glamour sfeer ervaren'],
    tag: 'Exclusief',
  },
  {
    id: 'atletiek-berlijn',
    title: 'Europese Atletiekkampioenschappen in Berlijn',
    sport: 'atletiek',
    country: 'Duitsland',
    city: 'Berlijn',
    dateFrom: '2026-08-14',
    dateTo: '2026-08-17',
    duration: 4,
    image: '/images/tour-5.jpg',
    shortDescription: 'Wees erbij tijdens de Europese atletiekkampioenschappen in Berlijn en geniet van wereld-topatleten in één van Europa\'s mooiste steden.',
    description:
      'Berlijn verwelkomt de Europese atletiekelite voor de kampioenschappen. Vier dagen lang geniet jij van sprintfinals, hoogspringen, verspringen en meer disciplines – live vanuit de tribune. Naast het sportprogramma is er ruimte voor sightseeing: de Brandenburger Tor, East Side Gallery en Checkpoint Charlie. Je reist per comfortabele touringcar vanuit Nederland. Het hotel ligt centraal in Mitte, ideaal bereikbaar voor zowel het sportcomplex als de highlights van Berlijn. Elke avond sluit de groep af met een gezamenlijk diner in de bruisende Berlijnse restaurantscene. Een reis die sportprestaties combineert met cultuur.',
    includes: ['Touringcar retour', '3 hotelovernachtingen', 'Meerdaagse atletiektribüne tickets', 'Begeleide Berlijn tour', 'Halfpension'],
    difficulty: 'makkelijk',
    groupSize: 22,
    highlights: ['Finalewedstrijden atletiek', 'Historisch Berlijn verkennen', 'Gezellig groepsdiner elke avond'],
  },
  {
    id: 'ijshockey-stockholm',
    title: 'IJshockeyspektakel in Stockholm',
    sport: 'ijshockey',
    country: 'Zweden',
    city: 'Stockholm',
    dateFrom: '2026-09-25',
    dateTo: '2026-09-28',
    duration: 4,
    image: '/images/tour-6.jpg',
    shortDescription: 'Ervaar de intense sfeer van topijshockey in Stockholm, inclusief twee wedstrijden en een Scandinavisch stedentrip.',
    description:
      'Scandinavisch ijshockey heeft een heel eigen energie: de fans zijn fanatiek, de snelheid duizelingwekkend en de sfeer elektrisch. Op deze vierdaagse reis bezoek je twee topwedstrijden in de moderne ijsarena van Stockholm. Tussendoor ontdek je de Zweedse hoofdstad: van het middeleeuwse Gamla Stan tot het moderne Södermalm. Je verblijft in een trendy design hotel in het centrum. De vlucht gaat direct vanuit Amsterdam. Een begeleider van SportToursHolland is van begin tot eind bij de groep. Perfect voor wintersportliefhebbers die ook een unieke stad willen ontdekken, ook al is het pas herfst.',
    includes: ['Vluchten Amsterdam–Stockholm retour', '3 hotelovernachtingen', 'Tickets 2 ijshockeywedstrijden', 'Gamla Stan rondleiding', 'Ontbijt inclusief'],
    difficulty: 'gemiddeld',
    groupSize: 15,
    highlights: ['Twee live ijshockeywedstrijden', 'Stockholm bij nacht', 'Authentiek Zweeds diner'],
    tag: 'Nieuw',
  },
]

export const sportLabels: Record<Tour['sport'], string> = {
  voetbal: 'Voetbal',
  tennis: 'Tennis',
  wielrennen: 'Wielrennen',
  formule1: 'Formule 1',
  atletiek: 'Atletiek',
  ijshockey: 'IJshockey',
}
