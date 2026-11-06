/**
 * SchilderTERMAAT / Schildersbedrijf A.F. ter Maat — Halle
 * Feiten uit de eigen pagina's van het bedrijf. Niets aangevuld met aannames.
 * data-demo slug voor Sleads analytics tracker.
 */
export type WorkPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

const photos = {
  gevelAanbouw: {
    src: "/img/projecten/2017-02-14-13.17.32.jpg",
    width: 2656,
    height: 1494,
    alt: "Witte woning met geschilderde gevel, witte kozijnen en een glazen aanbouw.",
    caption: "Buitenwerk: geschilderde gevel, witte kozijnen en een glazen aanbouw.",
  },
  zijgevel: {
    src: "/img/projecten/2017-02-14-13.17.50.jpg",
    width: 2656,
    height: 1494,
    alt: "Witte zijgevel met kozijnen, een donkere plint en een voordeur.",
    caption: "Zijgevel met witte kozijnen, donkere plint en voordeur.",
  },
  terrasGlas: {
    src: "/img/projecten/2017-02-14-13.18.22.jpg",
    width: 1494,
    height: 2656,
    alt: "Kozijnen en glas van een aanbouw, gezien vanaf een terras.",
    caption: "Kozijnen en glas van de aanbouw, vanaf het terras.",
  },
  binnendeur: {
    src: "/img/projecten/2017-02-09-14.22.57.jpg",
    width: 1494,
    height: 2656,
    alt: "Lichte binnendeur in een geschilderd kozijn.",
    caption: "Binnendeur en kozijn in lichte verf.",
  },
  venster: {
    src: "/img/projecten/2017-02-09-14.23.13.jpg",
    width: 2656,
    height: 1494,
    alt: "Binnenruimte met geschilderde wanden, een plafond en een wit vensterkozijn.",
    caption: "Geschilderde wanden, plafond en binnenkozijn.",
  },
  deurGlas: {
    src: "/img/projecten/2017-02-09-14.24.00.jpg",
    width: 1494,
    height: 2656,
    alt: "Lichte binnendeur met een strook figuurglas in het bovenlicht.",
    caption: "Binnendeur met een strook figuurglas.",
  },
  deurTegel: {
    src: "/img/projecten/2017-02-09-14.24.25-2.jpg",
    width: 1494,
    height: 2656,
    alt: "Geschilderde binnendeur met glas, op een kier naar een betegelde ruimte.",
    caption: "Geschilderde binnendeur met glas.",
  },
  trap: {
    src: "/img/projecten/2017-02-09-14.25.14.jpg",
    width: 1494,
    height: 2656,
    alt: "Trap met geschilderde wanden, een houten leuning en een plafond.",
    caption: "Trap met geschilderde wanden en leuning.",
  },
} as const satisfies Record<string, WorkPhoto>;

export const content = {
  slug: "termaat-demo",

  company: {
    name: "SchilderTERMAAT",
    legalName: "Schildersbedrijf A.F. ter Maat",
    tagline: "Schilderwerk op maat",
    description:
      "Schildersbedrijf A.F. ter Maat in Halle (Achterhoek) bestaat sinds 1961. Wij staan voor kwalitatief goed schilderwerk, op basis van duidelijke afspraken, een overzichtelijke offerte en ruime ervaring in het schildersvak.",
    logo: "/logo.png",
    city: "Halle",
    region: "Achterhoek",
  },

  colors: {
    primary: "#102E52",
    primaryForeground: "#FAFAF6",
    accent: "#F8D629",
    background: "#FAFAF6",
    foreground: "#102E52",
    muted: "#E5E9EC",
  },

  seo: {
    title: "SchilderTERMAAT | Schildersbedrijf A.F. ter Maat in Halle",
    description:
      "Schilderwerk, wandafwerking en beglazing in Halle en de Achterhoek. Sinds 1961. Vrijblijvende offerte: 0314-631420.",
    lang: "nl",
  },

  phones: [{ kind: "Telefoon", label: "0314-631420", href: "tel:+31314631420" }],
  fax: "0314-631126",
  email: "info@schildertermaat.nl",
  address: {
    street: "Dorpsstraat 73",
    postal: "7025 AB",
    city: "Halle",
    lines: ["Dorpsstraat 73", "7025 AB Halle"],
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Dorpsstraat+73%2C+7025+AB+Halle",
  kvk: "09029026",
  kvkLine: "KvK Arnhem 09029026",
  since: "1961",

  onderhoudNl: {
    href: "https://www.onderhoudnl.nl",
    image: "/img/onderhoud-nl.png",
    width: 99,
    height: 107,
    alt: "OnderhoudNL Garantie",
    text: "Schildersbedrijf ter Maat vermeldt aansluiting bij OnderhoudNL.",
  },

  systexx: {
    href: "http://www.systexx.com/nl/",
    name: "Systexx",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Schilderwerk", href: "/schilderwerk" },
    { label: "Wandafwerking", href: "/wandafwerking" },
    { label: "Beglazing", href: "/beglazing" },
    { label: "Referenties", href: "/referenties" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  photos,

  quoteServices: [
    "Schilderwerk",
    "Wandafwerking",
    "Beglazing",
    "Schilderwerk, wandafwerking en beglazing",
  ],

  home: {
    hero: {
      title: "Goed voor uw huis. Tot in het kozijn.",
      lede: "Schildersbedrijf A.F. ter Maat in Halle schildert binnen en buiten, repareert houtrot met epoxy en geeft na de offerte graag een kleuradvies. Wandafwerking en beglazing vraagt u bij hetzelfde bedrijf aan.",
      context: "Halle, Achterhoek. Vooral voor particulieren.",
      photo: photos.gevelAanbouw,
    },
    credibility:
      "Sinds 1961 in Halle. Duidelijke afspraken, een overzichtelijke offerte en ruime ervaring in het schildersvak.",
    services: {
      title: "Welk werk heeft uw huis nodig?",
      intro:
        "Drie werkzaamheden, één schildersbedrijf in Halle. U herkent hier het werk en leest daarna wat daarbij hoort.",
      items: [
        {
          title: "Schilderwerk",
          href: "/schilderwerk",
          text: "Kozijnen, deuren, gevelwerk en ander hout- en ijzerwerk, binnen en buiten. Het werk verfraait de woning en beschermt de kwetsbare delen. Houtrot repareren wij met epoxy, in de gevallen waarin dat past.",
          link: "Naar schilderwerk",
        },
        {
          title: "Wandafwerking",
          href: "/wandafwerking",
          text: "Wanden afwerken met hoogwaardige, goed reinigbare muurverf. Of met behang, vinylbehang, vliesbehang of glasvezelbehang. Voor glasweefsel werken wij veel met Systexx van Vitrulan.",
          link: "Naar wandafwerking",
        },
        {
          title: "Beglazing",
          href: "/beglazing",
          text: "Traditionele en hoog-rendements isolerende beglazing, enkel glas, figuurglas, glaswanden, schuifpuien en voorzetramen. Bij glasschade is er geen 24-uursservice.",
          link: "Naar beglazing",
        },
      ],
    },
    exterior: {
      title: "Buitenwerk aan de woning",
      text: "Buitenwerk van een complete opknapbeurt: muren, kozijnen, deuren. Op deze foto een witte zijgevel, witte kozijnen, een donkere plint en de voordeur.",
      photo: photos.zijgevel,
      link: "Alle foto's bekijken",
    },
    wood: {
      title: "Bescherming verder dan de kleur",
      paragraphs: [
        "Goed schilderwerk verfraait de woning of het kantoor. Minstens zo belangrijk is de bescherming van kwetsbaar hout- en ijzerwerk, en daarmee het voorkomen van waardevermindering.",
        "Houtrot-reparatie: houtwerk hoeft in veel gevallen niet vervangen te worden. Reparatie met epoxy-materialen geeft vaak een uitstekend resultaat. Wij hebben daarmee veel ervaring. Reparatie is niet in elke situatie de juiste keuze.",
        "Wij maken uitsluitend gebruik van de beste materialen, zodat u zeker kunt zijn van een langdurig fraai resultaat. Na het offertetraject geven wij graag een kleuradvies.",
      ],
    },
    interior: {
      title: "De afwerking binnen",
      text: "De wanden van uw woning of kantoor kunnen op verschillende manieren afgewerkt worden: met zeer goed reinigbare hoogwaardige muurverven, of met nieuw behang.",
      options: [
        "Behang",
        "Vinylbehang",
        "Vliesbehang",
        "Glasvezelbehang, daarna afgewerkt met een muurverf",
      ],
      note: "Wij maken veel gebruik van Systexx, een hoogwaardig glasweefsel van Vitrulan.",
      photo: photos.venster,
      link: "Wandafwerking in detail",
    },
    glazing: {
      title: "Glas, praktisch gekozen",
      paragraphs: [
        "Wij plaatsen op een veilige en professionele manier diverse soorten glas. Daarnaast leveren wij traditionele en hoog-rendements isolerende beglazing, enkel glas, figuurglas, glaswanden, schuifpuien en voorzetramen.",
        "De hoge energieprijzen en uw wooncomfort maken de montage van dubbel glas voor uw hele huis interessant. Isolatie voorkomt koude trek bij de ramen en is geluidwerend. Dubbel glas heeft daarnaast een inbraakwerend aspect. Wij plaatsen het glas volgens NEN-norm en KOMO.",
      ],
      notice:
        "Glasschade? Wij hanteren geen 24-uursservice, maar garanderen wel een spoedig herstel.",
      photo: photos.terrasGlas,
      link: "Meer over beglazing",
    },
    begin: {
      title: "Zo begint u",
      intro:
        "U belt of mailt voor een vrijblijvende offerte. Wij bespreken het werk en stellen een overzichtelijke offerte op.",
      steps: [
        {
          title: "Contact",
          text: "Bel 0314-631420 of mail info@schildertermaat.nl. Zeg welk werk het betreft.",
        },
        {
          title: "Het werk bespreken",
          text: "Wij bespreken met u wat er gedaan moet worden: schilderwerk, wanden, glas, of een combinatie.",
        },
        {
          title: "De offerte",
          text: "U ontvangt een vrijblijvende, overzichtelijke offerte. Duidelijke afspraken horen daarbij.",
        },
        {
          title: "Kleuradvies daarna",
          text: "Na het offertetraject geven wij graag een kleuradvies.",
        },
      ],
    },
    about: {
      title: "Sinds 1961 in Halle",
      paragraphs: [
        "Schildersbedrijf A.F. ter Maat in Halle (Achterhoek) bestaat sinds 1961 en is in de jaren uitgegroeid tot een goed en betrouwbaar schildersbedrijf.",
        "Uw schilderwerk krijgt de aandacht die het verdient. Wij dragen zorg voor maatwerk, continuïteit en kwaliteit.",
        "Wij zorgen ook voor de veiligheid in en om de woning wanneer wij bij u werken. U kunt tijdens de werkzaamheden met een gerust gevoel uw gang gaan. De overlast beperken wij tot een minimum.",
        "Schildersbedrijf A.F. ter Maat werkt met name voor particulieren in de regio Achterhoek.",
      ],
      photo: photos.gevelAanbouw,
      link: "Over het bedrijf",
    },
    faq: {
      title: "Praktische vragen",
      items: [
        {
          question: "Hoe vraag ik een offerte aan?",
          answer:
            "Bel 0314-631420 of mail info@schildertermaat.nl. Wij maken graag een vrijblijvende offerte voor u op.",
        },
        {
          question: "Wanneer bespreken we kleuren?",
          answer: "Na het offertetraject geven wij graag een kleuradvies.",
        },
        {
          question: "Is er een 24-uursservice bij glasschade?",
          answer:
            "Nee. Wij hanteren geen 24-uursservice. Wij garanderen wel een spoedig herstel.",
        },
        {
          question: "Waar werkt u?",
          answer:
            "Wij werken met name voor particulieren in de regio Achterhoek. Het bedrijf staat in Halle, Dorpsstraat 73.",
        },
      ] satisfies FaqItem[],
    },
    contact: {
      title: "Contact en route",
      text: "Voor een vrijblijvende offerte belt of mailt u. Het adres in Halle staat hieronder. Een kaart opent bij een externe dienst.",
    },
  },

  schilderwerk: {
    title: "Schilderwerk",
    seo: "Schilderwerk binnen en buiten in Halle en de Achterhoek. Houtrot-reparatie met epoxy en kleuradvies na de offerte. Bel 0314-631420.",
    hero: "Goed schilderwerk beschermt uw huis en bepaalt hoe het eruitziet. Kozijnen, deuren en ander hout- en ijzerwerk krijgen de aandacht die ze nodig hebben.",
    photo: photos.zijgevel,
    blocks: [
      {
        title: "Binnen en buiten",
        text: "Wij schilderen binnen en buiten, aan woning of kantoor. Buiten gaat het om de bescherming van het hout- en ijzerwerk. Binnen om deuren, kozijnen, wanden en het overige schilderwerk in huis.",
      },
      {
        title: "Hout en ijzer beschermen",
        text: "Het verfraaien van uw woning of kantoor is een reden voor schilderwerk. Minstens zo belangrijk is de bescherming, en dus het voorkomen van waardevermindering, van kwetsbare onderdelen zoals het hout- en ijzerwerk.",
      },
      {
        title: "Houtrot repareren met epoxy",
        text: "Houtwerk hoeft in veel gevallen niet vervangen te worden. Houtrot-reparatie geeft vaak een uitstekend resultaat en is veel goedkoper. Wij hebben veel ervaring in het repareren van houtrot met epoxy-materialen. Of reparatie past, hangt af van de staat van het hout. Wij beloven niet dat reparatie altijd geschikt is.",
      },
      {
        title: "Kleuradvies na de offerte",
        text: "Na het offertetraject geven wij graag een kleuradvies.",
      },
    ],
    materials:
      "Wij maken uitsluitend gebruik van de beste materialen, zodat u zeker kunt zijn van een langdurig fraai resultaat.",
    care: {
      title: "Werken in een bewoond huis",
      paragraphs: [
        "Wij zorgen voor de veiligheid in en om de woning wanneer wij bij u werken. U kunt tijdens de werkzaamheden met een gerust gevoel uw gang gaan. De overlast beperken wij tot een minimum.",
        "Veiligheid staat bij ons hoog in het vaandel. De verantwoording voor veilig werken ligt voor een deel bij de opdrachtgever. Wij hebben daarom onze eigen moderne klimmaterialen, zoals een zelfrijdende hoogwerker en steigers. Deze voldoen aan de vastgestelde veiligheidsnorm van vandaag.",
      ],
    },
    btw: "Op schilderwerk, binnen en buiten, aan woningen ouder dan 2 jaar van particuliere opdrachtgevers, mogen wij 9% btw berekenen.",
    photos: [photos.gevelAanbouw, photos.venster, photos.binnendeur, photos.deurGlas, photos.deurTegel, photos.trap],
    faq: [
      {
        question: "Kunt u houtrot herstellen?",
        answer:
          "Ja. Wij repareren houtrot met epoxy-materialen en hebben daarmee veel ervaring. In veel gevallen hoeft het houtwerk niet vervangen te worden. Reparatie is niet in elke situatie geschikt.",
      },
      {
        question: "Wanneer bespreken we kleuren?",
        answer: "Na het offertetraject geven wij graag een kleuradvies.",
      },
      {
        question: "Werkt u ook binnen?",
        answer:
          "Ja. Schilderwerk doen wij binnen en buiten, aan woning of kantoor. Wij werken met name voor particulieren in de Achterhoek.",
      },
      {
        question: "Hoe vraag ik een offerte aan?",
        answer:
          "Bel 0314-631420 of mail info@schildertermaat.nl. Wij maken graag een vrijblijvende offerte. Het formulier op deze pagina opent uw e-mailprogramma. Er wordt niets automatisch verzonden.",
      },
    ] satisfies FaqItem[],
  },

  wandafwerking: {
    title: "Wandafwerking",
    seo: "Wandafwerking in Halle: reinigbare muurverf, behang, vinylbehang, vliesbehang, glasvezelbehang en Systexx van Vitrulan.",
    hero: "De wanden van uw woning of kantoor kunnen op verschillende manieren afgewerkt worden. Hieronder staan de mogelijkheden die wij uitvoeren.",
    photo: photos.venster,
    lead: "Afwerken met zeer goed reinigbare hoogwaardige muurverven, of de wanden voorzien van nieuw behang.",
    options: [
      { title: "Muurverf", text: "Zeer goed reinigbare hoogwaardige muurverven." },
      { title: "Behang", text: "De wanden voorzien van nieuw behang." },
      { title: "Vinylbehang", text: "Een afwerking met vinylbehang." },
      { title: "Vliesbehang", text: "De wanden voorzien van vliesbehang." },
      {
        title: "Glasvezelbehang",
        text: "Glasvezelbehang, en daarna afwerken met een muurverf.",
      },
    ],
    systexx:
      "Wij maken veel gebruik van Systexx, een hoogwaardig glasweefsel van Vitrulan.",
    together:
      "De wand hoort bij het schilderwerk van deuren en kozijnen. Beglazing vraagt u bij hetzelfde bedrijf aan. Na het offertetraject geven wij graag een kleuradvies.",
    photos: [photos.venster, photos.trap],
    close: "Wilt u meer informatie? Bel 0314-631420 of mail info@schildertermaat.nl voor een vrijblijvende offerte.",
    faq: [
      {
        question: "Welke wandafwerking voert u uit?",
        answer:
          "Zeer goed reinigbare hoogwaardige muurverven, behang, vinylbehang, vliesbehang en glasvezelbehang. Glasvezelbehang werken wij daarna af met een muurverf. Voor glasweefsel maken wij veel gebruik van Systexx van Vitrulan.",
      },
      {
        question: "Werkt u in woning en kantoor?",
        answer: "Ja. De wanden van uw woning of kantoor kunnen op deze manieren afgewerkt worden.",
      },
      {
        question: "Hoe vraag ik meer informatie?",
        answer:
          "Bel 0314-631420 of mail info@schildertermaat.nl. Wij maken graag een vrijblijvende offerte. Het formulier opent uw e-mailprogramma. Er wordt niets automatisch verzonden.",
      },
    ] satisfies FaqItem[],
  },

  beglazing: {
    title: "Beglazing",
    seo: "Beglazing in Halle: isolerend glas, enkel glas, figuurglas, glaswanden, schuifpuien en voorzetramen. Geen 24-uursservice.",
    hero: "Glas hoort bij het kozijn. Wij plaatsen het veilig en professioneel, van enkel glas tot hoog-rendements isolerende beglazing.",
    photo: photos.terrasGlas,
    paragraphs: [
      "Wij plaatsen op een veilige en professionele manier diverse soorten glas. Daarnaast leveren wij traditionele en hoog-rendements isolerende beglazing, enkel glas, figuurglas, glaswanden, schuifpuien en voorzetramen.",
      "De hoge energieprijzen en uw wooncomfort maken de montage van dubbel glas voor uw hele huis interessant. Wij plaatsen het glas volgens NEN-norm en KOMO. Isolatie voorkomt koude trek bij de ramen en is geluidwerend. Daarnaast heeft dubbel glas een inbraakwerend aspect.",
    ],
    notice:
      "Glasschade? Wij hanteren geen 24-uursservice, maar garanderen wel een spoedig herstel.",
    advice: "Bel voor een vrijblijvend advies: 0314-631420. Per e-mail kan dat ook, via info@schildertermaat.nl.",
    types: [
      "Traditionele beglazing",
      "Hoog-rendements isolerende beglazing",
      "Enkel glas",
      "Figuurglas",
      "Glaswanden",
      "Schuifpuien",
      "Voorzetramen",
    ],
    comfort: [
      "De hoge energieprijzen en uw wooncomfort maken de montage van dubbel glas voor uw hele huis interessant.",
      "Isolatie voorkomt koude trek bij de ramen en is geluidwerend.",
      "Dubbel glas heeft daarnaast een inbraakwerend aspect.",
      "Wij plaatsen het glas volgens NEN-norm en KOMO.",
    ],
    photos: [photos.gevelAanbouw, photos.terrasGlas, photos.deurGlas],
    faq: [
      {
        question: "Welk glas plaatst u?",
        answer:
          "Traditionele en hoog-rendements isolerende beglazing, enkel glas, figuurglas, glaswanden, schuifpuien en voorzetramen. Wij plaatsen het glas veilig en professioneel.",
      },
      {
        question: "Is er een 24-uursservice bij glasschade?",
        answer: "Nee. Wij hanteren geen 24-uursservice. Wij garanderen wel een spoedig herstel.",
      },
      {
        question: "Hoe vraag ik een vrijblijvend advies?",
        answer: "Bel 0314-631420 of mail info@schildertermaat.nl. Het formulier opent uw e-mailprogramma. Er wordt niets automatisch verzonden.",
      },
    ] satisfies FaqItem[],
  },

  referenties: {
    title: "Referenties",
    seo: "Foto's van buitenwerk en particulier binnenschilderwerk van Schildersbedrijf A.F. ter Maat in Halle.",
    hero: "Buitenwerk van een complete opknapbeurt — muren, kozijnen, deuren — en particulier binnenschilderwerk. De foto's tonen het werk zelf.",
    photo: photos.gevelAanbouw,
    groups: [
      {
        title: "Buitenwerk",
        intro: "Enkele foto's van een complete opknapbeurt. Muren, kozijnen, deuren.",
        photos: [photos.gevelAanbouw, photos.zijgevel, photos.terrasGlas],
      },
      {
        title: "Particulier binnenschilderwerk",
        intro: "Deuren, kozijnen, wanden en een trap, zoals op de foto's te zien is.",
        photos: [photos.venster, photos.binnendeur, photos.deurGlas, photos.deurTegel, photos.trap],
      },
    ],
  },

  overOns: {
    title: "Over ons",
    seo: "Schildersbedrijf A.F. ter Maat in Halle bestaat sinds 1961 en werkt met name voor particulieren in de Achterhoek.",
    hero: "Een schildersbedrijf in Halle, sinds 1961. Het werk is vooral voor particulieren in de Achterhoek: schilderwerk, wandafwerking en beglazing.",
    photo: photos.zijgevel,
    paragraphs: [
      "Schildersbedrijf A.F. ter Maat in Halle (Achterhoek) bestaat sinds 1961 en is in de jaren uitgegroeid tot een goed en betrouwbaar schildersbedrijf. Wij staan voor kwalitatief goed schilderwerk, op basis van duidelijke afspraken, een overzichtelijke offerte en ruime ervaring in het schildersvak.",
      "Uw schilderwerk krijgt de aandacht die het verdient en wij dragen zorg voor maatwerk, continuïteit en kwaliteit.",
      "Wij zorgen niet alleen voor goed schilderwerk, maar ook voor de veiligheid in en om de woning wanneer wij onze werkzaamheden bij u uitvoeren. Op deze manier kunt u tijdens onze werkzaamheden met een gerust gevoel uw gang gaan en zullen wij de overlast tot een minimum beperken.",
      "Schildersbedrijf A.F. ter Maat werkt met name voor particulieren in de regio Achterhoek.",
    ],
    place: "Het bedrijf staat aan de Dorpsstraat 73 in Halle. Van daaruit werken wij met name voor particulieren in de regio Achterhoek.",
    safety:
      "Tijdens het werk zorgen wij voor de veiligheid in en om de woning. U kunt uw gang gaan. De overlast beperken wij tot een minimum. Voor het buitenschilderwerk hebben wij eigen klimmaterialen: een zelfrijdende hoogwerker en steigers, die voldoen aan de vastgestelde veiligheidsnorm van vandaag. De verantwoording voor veilig werken ligt voor een deel bij de opdrachtgever.",
  },

  contactPage: {
    title: "Contact",
    seo: "Schildersbedrijf A.F. ter Maat, Dorpsstraat 73, 7025 AB Halle. Bel 0314-631420 of mail info@schildertermaat.nl.",
    hero: "Voor een vrijblijvende offerte belt of mailt u. Wij bespreken het werk en sturen een overzichtelijke offerte.",
    composerTitle: "Offerte per e-mail opstellen",
    composerText:
      "Vul de gegevens in. De knop opent uw e-mailprogramma met een bericht aan info@schildertermaat.nl. Er wordt niets automatisch verzonden. U verstuurt de e-mail zelf.",
    mention: [
      { title: "Het werk", text: "Schilderwerk, wandafwerking, beglazing, of een combinatie daarvan." },
      { title: "Postcode en plaats", text: "De postcode en de plaats van het werk." },
      { title: "Een omschrijving", text: "Wat er gedaan moet worden: kozijnen, deuren, wanden, glas of houtrot." },
      { title: "Hoe wij u bereiken", text: "Uw naam, en een telefoonnummer of e-mailadres." },
    ],
    photo: photos.gevelAanbouw,
  },
};

export type Content = typeof content;
