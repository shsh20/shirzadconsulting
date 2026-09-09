import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground py-10 px-6 md:px-12 lg:px-24">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-serif text-sm text-background/80">
            {t("footer.rights")}
          </span>
          <span className="text-xs text-background/40">
            Lund / Malmö
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/tjanster" className="text-xs text-background/50 hover:text-background/80 transition-colors">{t("nav.services")}</Link>
          <Link to="/referensprojekt" className="text-xs text-background/50 hover:text-background/80 transition-colors">{t("nav.projects")}</Link>
          <Link to="/om-bolaget" className="text-xs text-background/50 hover:text-background/80 transition-colors">{t("nav.about")}</Link>
          <Link to="/karriar" className="text-xs text-background/50 hover:text-background/80 transition-colors">{t("nav.career")}</Link>
          <Link to="/kontakt" className="text-xs text-background/50 hover:text-background/80 transition-colors">{t("nav.contact")}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
