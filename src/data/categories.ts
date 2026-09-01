import {
  HardHat,
  Factory,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";
import { services, type Service } from "./services";

export type ServiceCategory = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  intro: string;
  image: string;
  serviceSlugs: string[];
};

export const categories: ServiceCategory[] = [
  {
    slug: "bygg-projektledning",
    icon: HardHat,
    title: "Bygg & Projektledning",
    desc: "Projektledning, byggkonsultation, projekteringsledning och specialistkompetens inom stål- och prefabkonstruktioner.",
    intro:
      "Vi tar ansvar för bygg- och industriprojekt hela vägen – från tidiga skeden och projektering till produktion och färdig leverans. Med erfarenhet av både beställar- och entreprenadsidan skapar vi struktur, tydliga beslut och kvalitet i varje led.",
    image: "/tjanster/projektledning.jpg",
    serviceSlugs: [
      "projektledning",
      "byggkonsultation",
      "projekteringsledning",
      "stal-prefab-3d",
    ],
  },
  {
    slug: "supply-chain-engineering",
    icon: Factory,
    title: "Supply Chain & Engineering",
    desc: "Inköp, leverantörsstyrning, materialplanering och teknisk koordinering med testning och dokumentation.",
    intro:
      "Vi binder ihop det kommersiella och det tekniska i projekt. Från RFQ och förhandling till order, leveransuppföljning och kravhantering – och vidare till testning, verifiering och komplett dokumentation vid överlämning.",
    image: "/tjanster/supply-chain.jpg",
    serviceSlugs: ["supply-chain-inkop", "engineering"],
  },
  {
    slug: "it-digitalisering",
    icon: MonitorSmartphone,
    title: "IT & Digitalisering",
    desc: "Systemutveckling, integrationer och molnlösningar som effektiviserar verksamheten.",
    intro:
      "Vi utvecklar och moderniserar digitala lösningar – från webbsystem och affärssystem till integrationer och molnbaserad drift. Alltid med fokus på enklare arbetsflöden och mätbart värde för verksamheten.",
    image: "/tjanster/it-digitalisering.jpg",
    serviceSlugs: ["it-digitalisering"],
  },
];

export const getCategory = (slug?: string) =>
  categories.find((c) => c.slug === slug);

export const getCategoryServices = (category: ServiceCategory): Service[] =>
  category.serviceSlugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));
