import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "sv" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  sv: {
    // Navbar
    "nav.tjanster": "Tjänster",
    "nav.referensprojekt": "Referensprojekt",
    "nav.om-bolaget": "Om bolaget",
    "nav.karriar": "Karriär",
    "nav.kontakt": "Kontakt",

    // Footer
    "footer.location": "Lund / Malmö",
    "footer.copyright": "© 2025 Shirzad Consulting Group",

    // Hero
    "hero.title": "Shirzad Consulting Group",
    "hero.subtitle": "Projektledning och byggkonsultation med erfarenhet och precision. Vi leder och strukturerar bygg- och industriprojekt från idé till färdig leverans.",
    "hero.cta": "Kontakta oss",

    // Services
    "services.label": "Tjänster",
    "services.heading": "Vad vi erbjuder",
    "services.1.title": "Projektledning",
    "services.1.desc": "Ledning av bygg- och industriprojekt från start till leverans.",
    "services.2.title": "Byggkonsultation",
    "services.2.desc": "Rådgivning och kvalitetssäkring genom hela byggprocessen.",
    "services.3.title": "Projekteringsledning & teknisk koordinering",
    "services.3.desc": "Samordning av projekteringsprocesser och tekniska lösningar.",
    "services.4.title": "Stålstommar, prefab-betong & 3D-modellering",
    "services.4.desc": "Specialistkompetens inom prefabricerade konstruktionssystem.",
    "services.5.title": "Kostnadsstyrning, tidplan & riskhantering",
    "services.5.desc": "Proaktiv styrning av budget, tid och projektrisker.",
    "services.6.title": "Stöd till beställare & entreprenörer",
    "services.6.desc": "Oberoende rådgivning och samordning mellan alla parter.",

    // Projects
    "projects.label": "Referensprojekt",
    "projects.heading": "Ett urval av projekt",
    "projects.subheading": "Projekt vi har lett eller samordnat genom åren.",
    "projects.show-all": "Visa alla {n} projekt",
    "projects.show-less": "Visa färre",

    // Contact
    "contact.label": "Kontakt",
    "contact.heading": "Låt oss prata om ditt projekt",
    "contact.phone": "+46 765 407 729",
    "contact.linkedin": "LinkedIn",
    "contact.location": "Lund / Malmö",
    "contact.field.name": "Namn",
    "contact.field.email": "E-post",
    "contact.field.message": "Meddelande",
    "contact.placeholder.name": "Ditt namn",
    "contact.placeholder.email": "din@epost.se",
    "contact.placeholder.message": "Berätta om ditt projekt...",
    "contact.submit": "Skicka meddelande",
    "contact.sending": "Skickar...",
    "contact.success": "Tack! Ditt meddelande har skickats.",
    "contact.error": "Något gick fel. Försök igen.",

    // Om bolaget
    "about.label": "Om bolaget",
    "about.heading": "Shirzad Consulting Group",
    "about.p1": "Shirzad Consulting Group grundades 2025 med en tydlig ambition: att erbjuda högkvalitativ projektledning och byggkonsultation till bygg- och industrisektorn i Skandinavien.",
    "about.p2": "Bolaget bygger på över ett decenniums erfarenhet av att leda och samordna komplexa projekt – från bostad, industri, sjukhus, forskningsanläggningar och parkeringshus med stålstommar och prefabricerade betongkonstruktioner!",
    "about.p3": "Vi kombinerar djup teknisk kompetens med strukturerat projektledarskap för att säkerställa att varje projekt levereras med precision, i tid och inom budget.",
    "about.strengths.label": "Kärnkompetenser",
    "about.strength.1": "Projektledning inom bygg och industri",
    "about.strength.2": "Prefabricerade system (stål, betong, bjälklag)",
    "about.strength.3": "Tekniska lösningar och projekteringsledning",
    "about.strength.4": "Tidsplanering, budget, risk och kommunikation",
    "about.strength.5": "Ledarskap och tvärdisciplinär samordning",
    "about.values.label": "Våra värderingar",
    "about.values.heading": "Det vi står för",
    "about.value.1.title": "Precision",
    "about.value.1.desc": "Varje projekt styrs med tydliga mål, strukturerade processer och kontroll genom hela kedjan.",
    "about.value.2.title": "Pålitlighet",
    "about.value.2.desc": "Vi levererar det vi lovar – i tid, inom budget och med hög kvalitet.",
    "about.value.3.title": "Samverkan",
    "about.value.3.desc": "Vi tror på tvärdisciplinärt samarbete och öppen kommunikation mellan alla projektparter.",

    // Karriär
    "karriar.label": "Karriär",
    "karriar.heading": "Bli en del av oss",
    "karriar.intro": "Vi söker alltid efter engagerade och kompetenta ingenjörer och konsulter som vill bidra till meningsfulla projekt. Skicka in din intresseanmälan — vi hör av oss när rätt möjlighet uppstår.",
    "karriar.value.1.title": "Expertis i världsklass",
    "karriar.value.1.desc": "Vi arbetar med komplexa projekt inom energi, infrastruktur och teknisk konsultation.",
    "karriar.value.2.title": "Sammanhållna team",
    "karriar.value.2.desc": "Hos oss är du aldrig ensam. Vi värdesätter samarbete och kollegial tillväxt.",
    "karriar.value.3.title": "Karriärutveckling",
    "karriar.value.3.desc": "Vi investerar i dina kompetenser och ger dig möjlighet att växa med oss.",
    "karriar.form.label": "Intresseanmälan",
    "karriar.form.heading": "Skicka in din ansökan",
    "karriar.form.desc": "Vi tar emot spontanansökningar löpande. Berätta kort om dig själv och bifoga ditt CV — vi återkommer när vi har ett uppdrag som matchar din profil.",
    "karriar.form.bullet.1": "Inga öppna tjänster? Skicka ändå in!",
    "karriar.form.bullet.2": "Vi svarar inom 5 arbetsdagar",
    "karriar.form.bullet.3": "Din ansökan behandlas konfidentiellt",
    "karriar.field.name": "Namn *",
    "karriar.field.email": "E-post *",
    "karriar.field.phone": "Telefon",
    "karriar.field.message": "Kort om dig",
    "karriar.field.cv": "CV (PDF eller Word)",
    "karriar.placeholder.name": "Ditt namn",
    "karriar.placeholder.email": "din@epost.se",
    "karriar.placeholder.phone": "+46 7XX XXX XXX",
    "karriar.placeholder.message": "Berätta kort om din bakgrund och vad du söker...",
    "karriar.upload": "Dra och släpp eller klicka för att välja fil",
    "karriar.submit": "Skicka intresseanmälan",
    "karriar.sending": "Skickar...",
    "karriar.success.heading": "Tack för din ansökan!",
    "karriar.success.desc": "Vi har mottagit din intresseanmälan och återkommer så snart vi kan.",
    "karriar.error": "Något gick fel. Försök igen.",

    // 404
    "notfound.title": "404",
    "notfound.desc": "Sidan hittades inte",
    "notfound.back": "Tillbaka till startsidan",
  },
  en: {
    // Navbar
    "nav.tjanster": "Services",
    "nav.referensprojekt": "Reference Projects",
    "nav.om-bolaget": "About Us",
    "nav.karriar": "Careers",
    "nav.kontakt": "Contact",

    // Footer
    "footer.location": "Lund / Malmö",
    "footer.copyright": "© 2025 Shirzad Consulting Group",

    // Hero
    "hero.title": "Shirzad Consulting Group",
    "hero.subtitle": "Project management and construction consulting with experience and precision. We lead and structure construction and industrial projects from concept to final delivery.",
    "hero.cta": "Contact us",

    // Services
    "services.label": "Services",
    "services.heading": "What we offer",
    "services.1.title": "Project Management",
    "services.1.desc": "Management of construction and industrial projects from start to delivery.",
    "services.2.title": "Construction Consulting",
    "services.2.desc": "Advisory and quality assurance throughout the construction process.",
    "services.3.title": "Design Management & Technical Coordination",
    "services.3.desc": "Coordination of design processes and technical solutions.",
    "services.4.title": "Steel Frames, Precast Concrete & 3D Modelling",
    "services.4.desc": "Specialist expertise in prefabricated structural systems.",
    "services.5.title": "Cost Control, Scheduling & Risk Management",
    "services.5.desc": "Proactive management of budget, schedule, and project risks.",
    "services.6.title": "Support for Clients & Contractors",
    "services.6.desc": "Independent advisory and coordination between all parties.",

    // Projects
    "projects.label": "Reference Projects",
    "projects.heading": "A selection of projects",
    "projects.subheading": "Projects we have led or coordinated over the years.",
    "projects.show-all": "Show all {n} projects",
    "projects.show-less": "Show fewer",

    // Contact
    "contact.label": "Contact",
    "contact.heading": "Let's talk about your project",
    "contact.phone": "+46 765 407 729",
    "contact.linkedin": "LinkedIn",
    "contact.location": "Lund / Malmö",
    "contact.field.name": "Name",
    "contact.field.email": "Email",
    "contact.field.message": "Message",
    "contact.placeholder.name": "Your name",
    "contact.placeholder.email": "your@email.com",
    "contact.placeholder.message": "Tell us about your project...",
    "contact.submit": "Send message",
    "contact.sending": "Sending...",
    "contact.success": "Thank you! Your message has been sent.",
    "contact.error": "Something went wrong. Please try again.",

    // Om bolaget
    "about.label": "About Us",
    "about.heading": "Shirzad Consulting Group",
    "about.p1": "Shirzad Consulting Group was founded in 2025 with a clear ambition: to offer high-quality project management and construction consulting to the construction and industrial sector in Scandinavia.",
    "about.p2": "The company is built on more than a decade of experience leading and coordinating complex projects – spanning residential, industrial, hospital, research facilities and parking structures with steel frames and precast concrete constructions.",
    "about.p3": "We combine deep technical expertise with structured project leadership to ensure that every project is delivered with precision, on time and within budget.",
    "about.strengths.label": "Core Competencies",
    "about.strength.1": "Project management in construction and industry",
    "about.strength.2": "Prefabricated systems (steel, concrete, floor slabs)",
    "about.strength.3": "Technical solutions and design management",
    "about.strength.4": "Scheduling, budget, risk and communication",
    "about.strength.5": "Leadership and cross-disciplinary coordination",
    "about.values.label": "Our values",
    "about.values.heading": "What we stand for",
    "about.value.1.title": "Precision",
    "about.value.1.desc": "Every project is driven by clear objectives, structured processes and control throughout the entire chain.",
    "about.value.2.title": "Reliability",
    "about.value.2.desc": "We deliver what we promise – on time, within budget and with high quality.",
    "about.value.3.title": "Collaboration",
    "about.value.3.desc": "We believe in cross-disciplinary teamwork and open communication between all project parties.",

    // Karriär
    "karriar.label": "Careers",
    "karriar.heading": "Join our team",
    "karriar.intro": "We are always looking for dedicated and skilled engineers and consultants who want to contribute to meaningful projects. Submit your application — we'll be in touch when the right opportunity arises.",
    "karriar.value.1.title": "World-class expertise",
    "karriar.value.1.desc": "We work on complex projects in energy, infrastructure and technical consulting.",
    "karriar.value.2.title": "Cohesive teams",
    "karriar.value.2.desc": "You're never alone with us. We value collaboration and peer growth.",
    "karriar.value.3.title": "Career development",
    "karriar.value.3.desc": "We invest in your skills and give you the opportunity to grow with us.",
    "karriar.form.label": "Expression of interest",
    "karriar.form.heading": "Submit your application",
    "karriar.form.desc": "We accept spontaneous applications on an ongoing basis. Tell us a bit about yourself and attach your CV — we'll get back to you when we have an assignment matching your profile.",
    "karriar.form.bullet.1": "No open positions? Apply anyway!",
    "karriar.form.bullet.2": "We respond within 5 business days",
    "karriar.form.bullet.3": "Your application is treated confidentially",
    "karriar.field.name": "Name *",
    "karriar.field.email": "Email *",
    "karriar.field.phone": "Phone",
    "karriar.field.message": "About you",
    "karriar.field.cv": "CV (PDF or Word)",
    "karriar.placeholder.name": "Your name",
    "karriar.placeholder.email": "your@email.com",
    "karriar.placeholder.phone": "+46 7XX XXX XXX",
    "karriar.placeholder.message": "Tell us briefly about your background and what you're looking for...",
    "karriar.upload": "Drag and drop or click to select a file",
    "karriar.submit": "Submit application",
    "karriar.sending": "Sending...",
    "karriar.success.heading": "Thank you for your application!",
    "karriar.success.desc": "We have received your expression of interest and will get back to you as soon as we can.",
    "karriar.error": "Something went wrong. Please try again.",

    // 404
    "notfound.title": "404",
    "notfound.desc": "Page not found",
    "notfound.back": "Return to home",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("sv");

  const t = (key: string): string => {
    return translations[lang][key] ?? translations["sv"][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
