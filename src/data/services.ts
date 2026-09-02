import {
  Network,
  Building2,
  DraftingCompass,
  Boxes,
  Container,
  Cog,
  Code2,
  type LucideIcon,
} from "lucide-react";
import type { Lang } from "@/i18n/translations";

export type ServiceSection = {
  heading: string;
  items: string[];
};

export type ServiceContent = {
  title: string;
  desc: string;
  intro: string;
  sections: ServiceSection[];
  outcomes: string[];
};

export type Service = ServiceContent & {
  slug: string;
  icon: LucideIcon;
  image: string;
};

type ServiceEntry = {
  slug: string;
  icon: LucideIcon;
  image: string;
  sv: ServiceContent;
  en: ServiceContent;
};

export const serviceEntries: ServiceEntry[] = [
  {
    slug: "projektledning",
    icon: Network,
    image: "/tjanster/projektledning.jpg",
    sv: {
      title: "Projektledning",
      desc: "Ledning av bygg- och industriprojekt från start till leverans.",
      intro:
        "Vi förstärker kundens organisation med kompetens inom projektledning och projektsamordning. Genom strukturerad planering, uppföljning och koordinering bidrar vi till att projektet genomförs effektivt och enligt uppsatta mål.",
      sections: [
        {
          heading: "Vad vi gör",
          items: [
            "Rådgivning i tidiga skeden",
            "Mötesstruktur, rapportering och beslutsunderlag",
            "Samordning mellan beställare, konsulter och entreprenörer",
          ],
        },
        {
          heading: "Arbetssätt",
          items: [
            "Tydliga mål, roller och ansvarsfördelning från dag ett",
            "Löpande uppföljning av tid, kostnad och kvalitet",
            "Proaktiv riskhantering istället för reaktiv problemlösning",
          ],
        },
      ],
      outcomes: [
        "Projekt som håller tidplan och budget",
        "Färre överraskningar sent i projektet",
        "En tydlig kontaktpunkt genom hela leveransen",
      ],
    },
    en: {
      title: "Project management",
      desc: "Leading construction and industrial projects from start to delivery.",
      intro:
        "We strengthen our clients' organisations with expertise in project management and project coordination. Through structured planning, follow-up and coordination we help ensure that the project is delivered efficiently and in line with its objectives.",
      sections: [
        {
          heading: "What we do",
          items: [
            "Advisory support in early project stages",
            "Meeting structure, reporting and decision material",
            "Coordination between clients, consultants and contractors",
          ],
        },
        {
          heading: "How we work",
          items: [
            "Clear goals, roles and responsibilities from day one",
            "Continuous follow-up on time, cost and quality",
            "Proactive risk management instead of reactive problem solving",
          ],
        },
      ],
      outcomes: [
        "Projects that keep to schedule and budget",
        "Fewer surprises late in the project",
        "One clear point of contact throughout the delivery",
      ],
    },
  },
  {
    slug: "byggkonsultation",
    icon: Building2,
    image: "/tjanster/byggkonsultation.jpg",
    sv: {
      title: "Byggkonsultation",
      desc: "Rådgivning och kvalitetssäkring genom hela byggprocessen.",
      intro:
        "Oberoende rådgivning av materialval och hållbara lösningar. Vi granskar, kvalitetssäkrar och föreslår lösningar som är byggbara, kostnadseffektiva och tekniskt hållbara.",
      sections: [
        {
          heading: "Vad vi gör",
          items: [
            "Teknisk granskning av handlingar och lösningsförslag",
            "Kvalitetssäkring inför produktion",
            "Kompetenta lösningar när avvikande uppkommer",
          ],
        },
      ],
      outcomes: [
        "Tydliga underlag inför produktion",
        "Lätta och hållbara lösningar",
        "Kvalitet och dokumentation",
      ],
    },
    en: {
      title: "Construction consultancy",
      desc: "Advisory and quality assurance throughout the construction process.",
      intro:
        "Independent advice on material choices and durable solutions. We review, quality assure and propose solutions that are buildable, cost-effective and technically sound.",
      sections: [
        {
          heading: "What we do",
          items: [
            "Technical review of documents and proposed solutions",
            "Quality assurance ahead of production",
            "Competent solutions when deviations occur",
          ],
        },
      ],
      outcomes: [
        "Clear documentation ahead of production",
        "Efficient and durable solutions",
        "Quality and documentation",
      ],
    },
  },
  {
    slug: "projekteringsledning",
    icon: DraftingCompass,
    image: "/tjanster/projekteringsledning.jpg",
    sv: {
      title: "Projekteringsledning & teknisk koordinering",
      desc: "Samordning av projekteringsprocesser och tekniska lösningar.",
      intro:
        "Vi leder projekteringen och håller ihop de tekniska disciplinerna så att handlingarna blir kompletta, samordnade och möjliga att bygga efter.",
      sections: [
        {
          heading: "Vad vi gör",
          items: [
            "Ledning av projekteringsgrupp och tidplan för handlingar",
            "Gränssnittshantering mellan discipliner",
            "Kollisionskontroll och granskningsrundor",
            "Kravställning mot konsulter och leverantörer",
          ],
        },
      ],
      outcomes: [
        "Samordnade handlingar utan luckor",
        "Snabbare beslutsvägar i projekteringen",
        "Minskad risk för ändringar i produktion",
      ],
    },
    en: {
      title: "Design management & technical coordination",
      desc: "Coordination of design processes and technical solutions.",
      intro:
        "We lead the design phase and hold the technical disciplines together so that the documentation is complete, coordinated and possible to build from.",
      sections: [
        {
          heading: "What we do",
          items: [
            "Leading the design team and the schedule for deliverables",
            "Managing interfaces between disciplines",
            "Clash control and review rounds",
            "Setting requirements towards consultants and suppliers",
          ],
        },
      ],
      outcomes: [
        "Coordinated documentation without gaps",
        "Faster decision paths during design",
        "Reduced risk of changes during production",
      ],
    },
  },
  {
    slug: "stal-prefab-3d",
    icon: Boxes,
    image: "/tjanster/stal-prefab.jpg",
    sv: {
      title: "Stålstommar, prefab-betong & 3D-modellering",
      desc: "Specialistkompetens inom prefabricerade konstruktionssystem.",
      intro:
        "Specialistkompetens inom stål- och betongstommar, från konceptval och dimensionering till tillverkningsunderlag och montagehandlingar – med 3D-modellen som gemensam grund.",
      sections: [
        {
          heading: "Vad vi gör",
          items: [
            "Stomval, dimensionering och stabiliserande system",
            "Prefab-betong & stål",
            "3D-modellering och tillverkningshandlingar",
            "Montagehandlingar och anvisningar",
          ],
        },
      ],
      outcomes: [
        "Effektiva stomlösningar med rätt kostnadsbild",
        "Färre kollisioner och fel i montaget",
        "Tydliga underlag för fabrik och montör",
      ],
    },
    en: {
      title: "Steel frames, precast concrete & 3D modelling",
      desc: "Specialist expertise in prefabricated structural systems.",
      intro:
        "Specialist expertise in steel and concrete frames, from concept selection and dimensioning to fabrication and erection drawings – with the 3D model as the common foundation.",
      sections: [
        {
          heading: "What we do",
          items: [
            "Frame selection, dimensioning and bracing systems",
            "Precast concrete & steel",
            "3D modelling and fabrication drawings",
            "Erection drawings and instructions",
          ],
        },
      ],
      outcomes: [
        "Efficient frame solutions with the right cost profile",
        "Fewer clashes and errors during erection",
        "Clear documentation for factory and erection crew",
      ],
    },
  },
  {
    slug: "supply-chain-inkop",
    icon: Container,
    image: "/tjanster/supply-chain.jpg",
    sv: {
      title: "Supply Chain & Inköp",
      desc: "Strategiskt och operativt inköp, leverantörsstyrning, materialplanering och logistik.",
      intro:
        "Vi tillhandahåller kunskap inom inköps- och försörjningskedjan i projekt – från förfrågan och utvärdering till order, leveransuppföljning och dokumentation. Erfarenhet från rollen som Project Supply Chain Manager med inköpsansvar i projektmiljö.",
      sections: [
        {
          heading: "Inköpsprocessen",
          items: [
            "RFQ – framtagning av förfrågningsunderlag och kravspecifikation",
            "Anbudsutvärdering och Bid Review Meetings (BRM)",
            "Förhandling, avtal och kommersiella villkor",
            "PO placement och orderläggning",
            "Leveransuppföljning, avvikelsehantering och dokumentation",
          ],
        },
        {
          heading: "Leverantörsstyrning",
          items: [
            "Leverantörsutvärdering och kvalificering",
            "Uppföljning av prestation, kvalitet och leveransprecision",
            "Utveckling av långsiktiga leverantörsrelationer",
          ],
        },
        {
          heading: "Strategiskt & operativt inköp",
          items: [
            "Kategoristrategier och sourcingplaner",
            "Kostnadsanalys, besparingar och totalkostnadsperspektiv",
            "Operativt inköp och löpande orderhantering",
          ],
        },
        {
          heading: "Materialplanering & logistik",
          items: [
            "Materialplanering mot projektets tidplan",
            "Lager-, flödes- och leveranssekvensplanering",
            "Transport, incoterms och logistikupplägg",
          ],
        },
      ],
      outcomes: [
        "Full spårbarhet från förfrågan till leverans",
        "Lägre inköpskostnad och lägre leveransrisk",
        "Material på plats när produktionen behöver det",
      ],
    },
    en: {
      title: "Supply Chain & Procurement",
      desc: "Strategic and operational procurement, supplier management, material planning and logistics.",
      intro:
        "We bring supply chain and procurement expertise into projects – from enquiry and evaluation to purchase orders, delivery follow-up and documentation. Built on experience as Project Supply Chain Manager with procurement responsibility in project environments.",
      sections: [
        {
          heading: "The procurement process",
          items: [
            "RFQ – preparing enquiry documents and requirement specifications",
            "Bid evaluation and Bid Review Meetings (BRM)",
            "Negotiation, contracts and commercial terms",
            "PO placement and order handling",
            "Delivery follow-up, deviation handling and documentation",
          ],
        },
        {
          heading: "Supplier management",
          items: [
            "Supplier evaluation and qualification",
            "Follow-up on performance, quality and delivery precision",
            "Building long-term supplier relationships",
          ],
        },
        {
          heading: "Strategic & operational procurement",
          items: [
            "Category strategies and sourcing plans",
            "Cost analysis, savings and total cost of ownership",
            "Operational procurement and day-to-day order handling",
          ],
        },
        {
          heading: "Material planning & logistics",
          items: [
            "Material planning against the project schedule",
            "Stock, flow and delivery sequence planning",
            "Transport, incoterms and logistics setup",
          ],
        },
      ],
      outcomes: [
        "Full traceability from enquiry to delivery",
        "Lower purchasing cost and lower delivery risk",
        "Materials on site when production needs them",
      ],
    },
  },
  {
    slug: "engineering",
    icon: Cog,
    image: "/tjanster/engineering.jpg",
    sv: {
      title: "Engineering",
      desc: "Kravhantering, teknisk koordinering, testning och dokumentation genom projektets alla faser.",
      intro:
        "Vi binder ihop teknik, kvalitet och leverans. Vi säkerställer att kraven är tydliga, att lösningarna verifieras och att allt är dokumenterat och godkänt vid överlämning.",
      sections: [
        {
          heading: "Testning & verifiering",
          items: [
            "ITP – Inspection and Test Plans, framtagning och uppföljning",
            "FAT – Factory Acceptance Test, planering och genomförande",
            "SAT – Site Acceptance Test och driftsättningsstöd",
            "Avvikelsehantering, punktlistor och slutgodkännande",
          ],
        },
        {
          heading: "Kravhantering",
          items: [
            "Nedbrytning av kundkrav till tekniska specifikationer",
            "Spårbarhet mellan krav, lösning och verifiering",
            "Granskning av leverantörers tekniska underlag",
          ],
        },
        {
          heading: "Teknisk koordinering",
          items: [
            "Gränssnitt mellan discipliner, leverantörer och montage",
            "Tekniska beslutsunderlag och lösningsförslag",
            "Stöd till projektledning i tekniska frågor",
          ],
        },
        {
          heading: "Dokumentation",
          items: [
            "Teknisk dokumentation och as-built-underlag",
            "Test- och kvalitetsprotokoll",
            "Överlämningspaket till drift och förvaltning",
          ],
        },
      ],
      outcomes: [
        "Verifierade lösningar som möter ställda krav",
        "Godkända tester utan sena överraskningar",
        "Komplett dokumentation vid överlämning",
      ],
    },
    en: {
      title: "Engineering",
      desc: "Requirements management, technical coordination, testing and documentation through every project phase.",
      intro:
        "We connect technology, quality and delivery. We make sure requirements are clear, that solutions are verified and that everything is documented and approved at handover.",
      sections: [
        {
          heading: "Testing & verification",
          items: [
            "ITP – Inspection and Test Plans, preparation and follow-up",
            "FAT – Factory Acceptance Test, planning and execution",
            "SAT – Site Acceptance Test and commissioning support",
            "Deviation handling, punch lists and final approval",
          ],
        },
        {
          heading: "Requirements management",
          items: [
            "Breaking down client requirements into technical specifications",
            "Traceability between requirement, solution and verification",
            "Review of suppliers' technical documentation",
          ],
        },
        {
          heading: "Technical coordination",
          items: [
            "Interfaces between disciplines, suppliers and installation",
            "Technical decision material and solution proposals",
            "Support to project management in technical matters",
          ],
        },
        {
          heading: "Documentation",
          items: [
            "Technical documentation and as-built records",
            "Test and quality protocols",
            "Handover packages for operations and maintenance",
          ],
        },
      ],
      outcomes: [
        "Verified solutions that meet the stated requirements",
        "Approved tests without late surprises",
        "Complete documentation at handover",
      ],
    },
  },
  {
    slug: "it-digitalisering",
    icon: Code2,
    image: "/tjanster/it-digitalisering.jpg",
    sv: {
      title: "IT & Digitalisering",
      desc: "Systemutveckling, integrationer och digitala lösningar som effektiviserar verksamheten.",
      intro:
        "Vi utvecklar och moderniserar digitala lösningar – från webbsystem och affärssystem till integrationer och molnbaserad drift. Fokus på lösningar som förenklar arbetsflöden och skapar mätbart värde.",
      sections: [
        {
          heading: "Backend",
          items: [
            ".NET och C#",
            "API-utveckling (REST och integrationer)",
            "Databaser och datamodellering",
          ],
        },
        {
          heading: "Frontend",
          items: [
            "React och Angular",
            "JavaScript och TypeScript",
            "Responsiva och tillgängliga gränssnitt",
          ],
        },
        {
          heading: "Fullstack & system",
          items: [
            "Webbsystem och interna verktyg",
            "Affärssystem och verksamhetsnära applikationer",
            "Integrationer mellan system och datakällor",
          ],
        },
        {
          heading: "Moln & drift",
          items: [
            "Molnlösningar och driftsättning",
            "Automatisering av flöden och rapportering",
            "Förvaltning och vidareutveckling",
          ],
        },
      ],
      outcomes: [
        "Digitala lösningar byggda för verksamhetens behov",
        "Färre manuella steg och mindre dubbelarbete",
        "System som går att förvalta och bygga vidare på",
      ],
    },
    en: {
      title: "IT & Digitalisation",
      desc: "System development, integrations and digital solutions that make operations more efficient.",
      intro:
        "We develop and modernise digital solutions – from web systems and business systems to integrations and cloud-based operations. The focus is on solutions that simplify workflows and create measurable value.",
      sections: [
        {
          heading: "Backend",
          items: [
            ".NET and C#",
            "API development (REST and integrations)",
            "Databases and data modelling",
          ],
        },
        {
          heading: "Frontend",
          items: [
            "React and Angular",
            "JavaScript and TypeScript",
            "Responsive and accessible interfaces",
          ],
        },
        {
          heading: "Fullstack & systems",
          items: [
            "Web systems and internal tools",
            "Business systems and operational applications",
            "Integrations between systems and data sources",
          ],
        },
        {
          heading: "Cloud & operations",
          items: [
            "Cloud solutions and deployment",
            "Automation of workflows and reporting",
            "Maintenance and continuous development",
          ],
        },
      ],
      outcomes: [
        "Digital solutions built for the needs of the business",
        "Fewer manual steps and less duplicated work",
        "Systems that can be maintained and extended",
      ],
    },
  },
];

export const getServices = (lang: Lang): Service[] =>
  serviceEntries.map(({ slug, icon, image, sv, en }) => ({
    slug,
    icon,
    image,
    ...(lang === "en" ? en : sv),
  }));

export const getService = (slug: string | undefined, lang: Lang) =>
  getServices(lang).find((s) => s.slug === slug);
