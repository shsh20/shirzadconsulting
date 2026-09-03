import {
  HardHat,
  Factory,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";
import { getServices, type Service } from "./services";
import type { Lang } from "@/i18n/translations";

type CategoryContent = {
  title: string;
  desc: string;
  intro: string;
};

export type ServiceCategory = CategoryContent & {
  slug: string;
  icon: LucideIcon;
  image: string;
  serviceSlugs: string[];
};

type CategoryEntry = {
  slug: string;
  icon: LucideIcon;
  image: string;
  serviceSlugs: string[];
  sv: CategoryContent;
  en: CategoryContent;
};

const categoryEntries: CategoryEntry[] = [
  {
    slug: "bygg-projektledning",
    icon: HardHat,
    image: "/tjanster/projektledning.jpg",
    serviceSlugs: [
      "projektledning",
      "byggkonsultation",
      "projekteringsledning",
      "stal-prefab-3d",
    ],
    sv: {
      title: "Bygg & Projektledning",
      desc: "Projektledning, byggkonsultation, projekteringsledning och specialistkompetens inom stål- och prefabkonstruktioner.",
      intro:
        "Vi tar ansvar för bygg- och industriprojekt hela vägen – från tidiga skeden och projektering till produktion och färdig leverans. Med erfarenhet av både beställar- och entreprenadsidan skapar vi struktur, tydliga beslut och kvalitet i varje led.",
    },
    en: {
      title: "Construction & Project Management",
      desc: "Project management, construction consultancy, design management and specialist expertise in steel and precast structures.",
      intro:
        "We take responsibility for construction and industrial projects all the way – from early stages and design to production and final delivery. With experience from both the client and contractor side, we create structure, clear decisions and quality at every stage.",
    },
  },
  {
    slug: "supply-chain-engineering",
    icon: Factory,
    image: "/tjanster/supply-chain.jpg",
    serviceSlugs: ["supply-chain-inkop", "engineering"],
    sv: {
      title: "Supply Chain & Engineering",
      desc: "Inköp, leverantörsstyrning, materialplanering och teknisk koordinering med testning och dokumentation.",
      intro:
        "Vi binder ihop det kommersiella och det tekniska i projekt. Från RFQ och förhandling till order, leveransuppföljning och kravhantering – och vidare till testning, verifiering och komplett dokumentation vid överlämning.",
    },
    en: {
      title: "Supply Chain & Engineering",
      desc: "Procurement, supplier management, material planning and technical coordination with testing and documentation.",
      intro:
        "We connect the commercial and the technical sides of projects. From RFQ and negotiation to orders, delivery follow-up and requirements management – and onwards to testing, verification and complete documentation at handover.",
    },
  },
  {
    slug: "it-digitalisering",
    icon: MonitorSmartphone,
    image: "/tjanster/it-digitalisering.jpg",
    serviceSlugs: ["it-digitalisering"],
    sv: {
      title: "IT & Digitalisering",
      desc: "Systemutveckling, integrationer och molnlösningar som effektiviserar verksamheten.",
      intro:
        "Vi utvecklar och moderniserar digitala lösningar – från webbsystem och affärssystem till integrationer och molnbaserad drift. Alltid med fokus på enklare arbetsflöden och mätbart värde för verksamheten.",
    },
    en: {
      title: "IT & Digitalisation",
      desc: "System development, integrations and cloud solutions that make operations more efficient.",
      intro:
        "We develop and modernise digital solutions – from web systems and business systems to integrations and cloud-based operations. Always with a focus on simpler workflows and measurable value for the business.",
    },
  },
];

export const getCategories = (lang: Lang): ServiceCategory[] =>
  categoryEntries.map(({ sv, en, ...rest }) => ({
    ...rest,
    ...(lang === "en" ? en : sv),
  }));

export const getCategory = (slug: string | undefined, lang: Lang = "sv") =>
  getCategories(lang).find((c) => c.slug === slug);

export const getCategoryServices = (
  category: ServiceCategory,
  lang: Lang = "sv"
): Service[] => {
  const services = getServices(lang);
  return category.serviceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
};
