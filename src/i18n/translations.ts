export type Lang = "sv" | "en";

type Dict = Record<string, string>;

const sv: Dict = {
  // Nav
  "nav.services": "Tjänster",
  "nav.projects": "Referensprojekt",
  "nav.about": "Om bolaget",
  "nav.career": "Karriär",
  "nav.contact": "Kontakt",
  "nav.toggleMenu": "Växla meny",
  "nav.language": "Språk",

  // Hero
  "hero.imageAlt": "Byggarbetsplats med stålkonstruktion",
  "hero.lead":
    "Projektledning och byggkonsultation med erfarenhet och precision. Vi leder och strukturerar bygg- och industriprojekt från idé till färdig leverans.",
  "hero.cta": "Kontakta oss",

  // Footer
  "footer.rights": "© 2025 Shirzad Consulting Group",

  // Services overview
  "services.eyebrow": "Tjänster",
  "services.heading": "Vad vi erbjuder",
  "services.lead":
    "Vi kombinerar teknisk specialistkompetens med projektledning, inköp och digitalisering – och tar ansvar hela vägen från tidiga skeden till färdig leverans.",
  "services.readMore": "Läs mer",

  // Breadcrumbs
  "breadcrumb.label": "Brödsmulor",
  "breadcrumb.home": "Hem",
  "breadcrumb.services": "Tjänster",

  // Category page
  "category.servicesHeading": "Tjänster inom området",
  "category.servicesLead": "Utforska våra specialisttjänster inom",
  "category.back": "Tillbaka till alla tjänsteområden",

  // Service detail
  "service.valueHeading": "Värdet för dig",
  "service.contactCta": "Kontakta oss",
  "service.otherHeading": "Andra tjänster",
  "service.backToAll": "Tillbaka till alla tjänster",

  // Projects
  "projects.eyebrow": "Referensprojekt",
  "projects.heading": "Ett urval av våra projekt",
  "projects.lead":
    "Vi projekterar bärande konstruktioner i stål och betong – från grundläggning till färdig stomme. Här är några uppdrag vi har ansvarat för.",
  "projects.norslunda.discipline": "Betongkonstruktion",
  "projects.norslunda.description":
    "Projektering av socklar och betongbjälklag för kontor och industrilokal. Uppdraget omfattade dimensionering av grundkonstruktion samt bjälklag anpassade efter verksamhetens laster.",
  "projects.norslunda.alt":
    "3D-modell av kontors- och industribyggnad i Norslunda med mörk fasad",
  "projects.granngarden.discipline": "Stålkonstruktion",
  "projects.granngarden.description":
    "Projektering av stålstomme till affärslokal. Uppdraget omfattade dimensionering av pelare, balkar och stabiliserande system för lokalens stomme.",
  "projects.granngarden.alt":
    "3D-modell av stålstomme med pelare, balkar och fackverk",

  // About
  "about.eyebrow": "Om bolaget",
  "about.p1":
    "Shirzad Consulting Group grundades 2025 med en tydlig ambition: att erbjuda högkvalitativ projektledning och byggkonsultation till bygg- och industrisektorn i Skandinavien.",
  "about.p2":
    "Bolaget bygger på över ett decenniums erfarenhet av att leda och samordna komplexa projekt – från bostad, industri, sjukhus, forskningsanläggningar och parkeringshus med stålstommar och prefabricerade betongkonstruktioner!",
  "about.p3":
    "Vi kombinerar djup teknisk kompetens med strukturerat projektledarskap för att säkerställa att varje projekt levereras med precision, i tid och inom budget.",
  "about.coreHeading": "Kärnkompetenser",
  "about.strength1": "Projektledning inom bygg och industri",
  "about.strength2": "Prefabricerade system (stål & betong)",
  "about.strength3": "Tekniska lösningar och projekteringsledning",
  "about.strength4": "Tidsplanering, budget, risk och kommunikation",
  "about.strength5": "Ledarskap och tvärdisciplinär samordning",
  "about.radar1": "Projektledning",
  "about.radar2": "Prefab-system",
  "about.radar3": "Tekniska lösningar",
  "about.radar4": "Tidsplanering",
  "about.radar5": "Ledarskap",
  "about.radarName": "Kompetens",
  "about.valuesEyebrow": "Våra värderingar",
  "about.valuesHeading": "Det vi står för",
  "about.value1.title": "Precision",
  "about.value1.desc":
    "Varje projekt styrs med tydliga mål, strukturerade processer och kontroll genom hela kedjan.",
  "about.value2.title": "Pålitlighet",
  "about.value2.desc":
    "Vi levererar det vi lovar – i tid, inom budget och med hög kvalitet.",
  "about.value3.title": "Samverkan",
  "about.value3.desc":
    "Vi tror på tvärdisciplinärt samarbete och öppen kommunikation mellan alla projektparter.",

  // Contact
  "contact.eyebrow": "Kontakt",
  "contact.heading": "Låt oss prata om ditt projekt",
  "contact.mapTitle": "Karta Lund",
  "contact.name": "Namn",
  "contact.namePlaceholder": "Ditt namn",
  "contact.email": "E-post",
  "contact.emailPlaceholder": "din@epost.se",
  "contact.message": "Meddelande",
  "contact.messagePlaceholder": "Berätta om ditt projekt...",
  "contact.sending": "Skickar...",
  "contact.send": "Skicka meddelande",
  "contact.sent": "Tack! Ditt meddelande har skickats.",
  "contact.error": "Något gick fel. Försök igen.",

  // Career
  "career.eyebrow": "Karriär",
  "career.heading": "Bli en del av oss",
  "career.lead":
    "Vi söker alltid efter engagerade och kompetenta ingenjörer och konsulter som vill bidra till meningsfulla projekt. Skicka in din intresseanmälan — vi hör av oss när rätt möjlighet uppstår.",
  "career.value1.title": "Expertis i världsklass",
  "career.value1.desc":
    "Vi arbetar med komplexa projekt inom energi, infrastruktur och teknisk konsultation.",
  "career.value2.title": "Sammanhållna team",
  "career.value2.desc":
    "Hos oss är du aldrig ensam. Vi värdesätter samarbete och kollegial tillväxt.",
  "career.value3.title": "Karriärutveckling",
  "career.value3.desc":
    "Vi investerar i dina kompetenser och ger dig möjlighet att växa med oss.",
  "career.formEyebrow": "Intresseanmälan",
  "career.formHeading": "Skicka in din ansökan",
  "career.formLead":
    "Vi tar emot spontanansökningar löpande. Berätta kort om dig själv och bifoga ditt CV — vi återkommer när vi har ett uppdrag som matchar din profil.",
  "career.bullet1": "Inga öppna tjänster? Skicka ändå in!",
  "career.bullet2": "Vi svarar inom 5 arbetsdagar",
  "career.thanksTitle": "Tack för din ansökan!",
  "career.thanksDesc":
    "Vi har mottagit din intresseanmälan och återkommer så snart vi kan.",
  "career.name": "Namn *",
  "career.namePlaceholder": "Ditt namn",
  "career.email": "E-post *",
  "career.emailPlaceholder": "din@epost.se",
  "career.phone": "Telefon",
  "career.about": "Kort om dig",
  "career.aboutPlaceholder":
    "Berätta kort om din bakgrund och vad du söker...",
  "career.cv": "CV (PDF eller Word)",
  "career.cvDrop": "Dra och släpp eller klicka för att välja fil",
  "career.fileError":
    "Endast PDF eller Word-filer (.pdf, .doc, .docx) är tillåtna.",
  "career.sending": "Skickar...",
  "career.submit": "Skicka intresseanmälan",
  "career.error": "Något gick fel. Försök igen.",
  "career.defaultMessage": "Intresseanmälan – se bifogat CV.",

  // 404
  "notfound.text": "Oj! Sidan kunde inte hittas.",
  "notfound.back": "Tillbaka till startsidan",
};

const en: Dict = {
  "nav.services": "Services",
  "nav.projects": "Reference projects",
  "nav.about": "About us",
  "nav.career": "Careers",
  "nav.contact": "Contact",
  "nav.toggleMenu": "Toggle menu",
  "nav.language": "Language",

  "hero.imageAlt": "Construction site with steel structure",
  "hero.lead":
    "Project management and construction consultancy built on experience and precision. We lead and structure construction and industrial projects from idea to completed delivery.",
  "hero.cta": "Contact us",

  "footer.rights": "© 2025 Shirzad Consulting Group",

  "services.eyebrow": "Services",
  "services.heading": "What we offer",
  "services.lead":
    "We combine deep technical expertise with project management, procurement and digitalisation – taking responsibility all the way from early stages to final delivery.",
  "services.readMore": "Read more",

  "breadcrumb.label": "Breadcrumbs",
  "breadcrumb.home": "Home",
  "breadcrumb.services": "Services",

  "category.servicesHeading": "Services in this area",
  "category.servicesLead": "Explore our specialist services within",
  "category.back": "Back to all service areas",

  "service.valueHeading": "The value for you",
  "service.contactCta": "Contact us",
  "service.otherHeading": "Other services",
  "service.backToAll": "Back to all services",

  "projects.eyebrow": "Reference projects",
  "projects.heading": "A selection of our projects",
  "projects.lead":
    "We design load-bearing structures in steel and concrete – from foundations to completed frame. Here are some of the assignments we have been responsible for.",
  "projects.norslunda.discipline": "Concrete structure",
  "projects.norslunda.description":
    "Structural design of foundations and concrete slabs for office and industrial premises. The assignment covered dimensioning of the foundation structure as well as slabs adapted to the operational loads.",
  "projects.norslunda.alt":
    "3D model of office and industrial building in Norslunda with dark façade",
  "projects.granngarden.discipline": "Steel structure",
  "projects.granngarden.description":
    "Structural design of the steel frame for a retail building. The assignment covered dimensioning of columns, beams and bracing systems for the building frame.",
  "projects.granngarden.alt":
    "3D model of a steel frame with columns, beams and trusses",

  "about.eyebrow": "About us",
  "about.p1":
    "Shirzad Consulting Group was founded in 2025 with a clear ambition: to provide high-quality project management and construction consultancy to the construction and industrial sector in Scandinavia.",
  "about.p2":
    "The company builds on more than a decade of experience leading and coordinating complex projects – from housing, industry, hospitals and research facilities to car parks with steel frames and precast concrete structures.",
  "about.p3":
    "We combine deep technical expertise with structured project leadership to ensure that every project is delivered with precision, on time and on budget.",
  "about.coreHeading": "Core competencies",
  "about.strength1": "Project management in construction and industry",
  "about.strength2": "Prefabricated systems (steel & concrete)",
  "about.strength3": "Technical solutions and design management",
  "about.strength4": "Scheduling, budget, risk and communication",
  "about.strength5": "Leadership and cross-disciplinary coordination",
  "about.radar1": "Project management",
  "about.radar2": "Prefab systems",
  "about.radar3": "Technical solutions",
  "about.radar4": "Scheduling",
  "about.radar5": "Leadership",
  "about.radarName": "Competence",
  "about.valuesEyebrow": "Our values",
  "about.valuesHeading": "What we stand for",
  "about.value1.title": "Precision",
  "about.value1.desc":
    "Every project is run with clear goals, structured processes and control throughout the entire chain.",
  "about.value2.title": "Reliability",
  "about.value2.desc":
    "We deliver what we promise – on time, on budget and with high quality.",
  "about.value3.title": "Collaboration",
  "about.value3.desc":
    "We believe in cross-disciplinary teamwork and open communication between all project parties.",

  "contact.eyebrow": "Contact",
  "contact.heading": "Let's talk about your project",
  "contact.mapTitle": "Map of Lund",
  "contact.name": "Name",
  "contact.namePlaceholder": "Your name",
  "contact.email": "Email",
  "contact.emailPlaceholder": "you@email.com",
  "contact.message": "Message",
  "contact.messagePlaceholder": "Tell us about your project...",
  "contact.sending": "Sending...",
  "contact.send": "Send message",
  "contact.sent": "Thank you! Your message has been sent.",
  "contact.error": "Something went wrong. Please try again.",

  "career.eyebrow": "Careers",
  "career.heading": "Become part of our team",
  "career.lead":
    "We are always looking for committed and skilled engineers and consultants who want to contribute to meaningful projects. Send us your open application — we will get in touch when the right opportunity comes up.",
  "career.value1.title": "World-class expertise",
  "career.value1.desc":
    "We work with complex projects within energy, infrastructure and technical consultancy.",
  "career.value2.title": "Close-knit teams",
  "career.value2.desc":
    "You are never alone with us. We value collaboration and growing together.",
  "career.value3.title": "Career development",
  "career.value3.desc":
    "We invest in your skills and give you the opportunity to grow with us.",
  "career.formEyebrow": "Open application",
  "career.formHeading": "Send us your application",
  "career.formLead":
    "We welcome open applications on an ongoing basis. Tell us briefly about yourself and attach your CV — we will get back to you when we have an assignment that matches your profile.",
  "career.bullet1": "No open positions? Apply anyway!",
  "career.bullet2": "We reply within 5 working days",
  "career.thanksTitle": "Thank you for your application!",
  "career.thanksDesc":
    "We have received your application and will get back to you as soon as we can.",
  "career.name": "Name *",
  "career.namePlaceholder": "Your name",
  "career.email": "Email *",
  "career.emailPlaceholder": "you@email.com",
  "career.phone": "Phone",
  "career.about": "A few words about you",
  "career.aboutPlaceholder":
    "Tell us briefly about your background and what you are looking for...",
  "career.cv": "CV (PDF or Word)",
  "career.cvDrop": "Drag and drop or click to select a file",
  "career.fileError": "Only PDF or Word files (.pdf, .doc, .docx) are allowed.",
  "career.sending": "Sending...",
  "career.submit": "Send application",
  "career.error": "Something went wrong. Please try again.",
  "career.defaultMessage": "Open application – see attached CV.",

  "notfound.text": "Oops! Page not found.",
  "notfound.back": "Return to home",
};

export const translations: Record<Lang, Dict> = { sv, en };
