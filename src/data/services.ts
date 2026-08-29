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

export type ServiceSection = {
  heading: string;
  items: string[];
};

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  intro: string;
  image: string;
  sections: ServiceSection[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "projektledning",
    icon: Network,
    title: "Projektledning",
    desc: "Ledning av bygg- och industriprojekt från start till leverans.",
    intro:
      "Vi tar ett helhetsansvar för projektets genomförande – från tidiga skeden och upphandling till produktion, driftsättning och överlämning. Fokus ligger på tydlig styrning, förutsägbara leveranser och trygga beslutsunderlag för beställaren.",
    image: "/tjanster/projektledning.jpg",
    sections: [
      {
        heading: "Vad vi gör",
        items: [
          "Projektstyrning i tidiga skeden, produktion och slutskede",
          "Upphandling och avtalsuppföljning",
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
  {
    slug: "byggkonsultation",
    icon: Building2,
    title: "Byggkonsultation",
    desc: "Rådgivning och kvalitetssäkring genom hela byggprocessen.",
    intro:
      "Oberoende rådgivning som stärker beslutsunderlaget i varje skede. Vi granskar, kvalitetssäkrar och föreslår lösningar som är byggbara, kostnadseffektiva och tekniskt hållbara.",
    image: "/tjanster/byggkonsultation.jpg",
    sections: [
      {
        heading: "Vad vi gör",
        items: [
          "Teknisk granskning av handlingar och lösningsförslag",
          "Byggbarhetsanalys och second opinion",
          "Kvalitetssäkring under produktion",
          "Stöd vid besiktning, avvikelser och slutdokumentation",
        ],
      },
    ],
    outcomes: [
      "Färre fel och ändringar i produktion",
      "Bättre underlag inför investeringsbeslut",
      "Kvalitet som går att verifiera",
    ],
  },
  {
    slug: "projekteringsledning",
    icon: DraftingCompass,
    title: "Projekteringsledning & teknisk koordinering",
    desc: "Samordning av projekteringsprocesser och tekniska lösningar.",
    intro:
      "Vi leder projekteringen och håller ihop de tekniska disciplinerna så att handlingarna blir kompletta, samordnade och möjliga att bygga efter.",
    image: "/tjanster/projekteringsledning.jpg",
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
  {
    slug: "stal-prefab-3d",
    icon: Boxes,
    title: "Stålstommar, prefab-betong & 3D-modellering",
    desc: "Specialistkompetens inom prefabricerade konstruktionssystem.",
    intro:
      "Specialistkompetens inom stål- och betongstommar, från konceptval och dimensionering till tillverkningsunderlag och montageplanering – med 3D-modellen som gemensam grund.",
    image: "/tjanster/stal-prefab.jpg",
    sections: [
      {
        heading: "Vad vi gör",
        items: [
          "Stomval, dimensionering och stabiliserande system",
          "Prefab-betong: socklar, bjälklag, element och infästningar",
          "3D-modellering och underlag för tillverkning",
          "Montageplanering och leveranssekvenser",
        ],
      },
    ],
    outcomes: [
      "Effektiva stomlösningar med rätt kostnadsbild",
      "Färre kollisioner och fel i montaget",
      "Tydliga underlag för fabrik och montör",
    ],
  },
  {
    slug: "supply-chain-inkop",
    icon: Container,
    title: "Supply Chain & Inköp",
    desc: "Strategiskt och operativt inköp, leverantörsstyrning, materialplanering och logistik.",
    intro:
      "Vi tar ansvar för hela inköps- och försörjningskedjan i projekt – från förfrågan och utvärdering till order, leveransuppföljning och dokumentation. Erfarenhet från rollen som Project Supply Chain Manager med fullt inköpsansvar i projektmiljö.",
    image: "/tjanster/supply-chain.jpg",
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
  {
    slug: "engineering",
    icon: Cog,
    title: "Engineering",
    desc: "Kravhantering, teknisk koordinering, testning och dokumentation genom projektets alla faser.",
    intro:
      "Vi binder ihop teknik, kvalitet och leverans. Vi säkerställer att kraven är tydliga, att lösningarna verifieras och att allt är dokumenterat och godkänt vid överlämning.",
    image: "/tjanster/engineering.jpg",
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
  {
    slug: "it-digitalisering",
    icon: Code2,
    title: "IT & Digitalisering",
    desc: "Systemutveckling, integrationer och digitala lösningar som effektiviserar verksamheten.",
    intro:
      "Vi utvecklar och moderniserar digitala lösningar – från webbsystem och affärssystem till integrationer och molnbaserad drift. Fokus på lösningar som förenklar arbetsflöden och skapar mätbart värde.",
    image: "/tjanster/it-digitalisering.jpg",
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
];

export const getService = (slug?: string) =>
  services.find((s) => s.slug === slug);
