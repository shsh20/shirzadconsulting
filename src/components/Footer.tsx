import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground py-10 px-6 md:px-12 lg:px-24">
      <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="font-serif text-sm text-background/80">
            {t("footer.copyright")}
          </span>
          <span className="text-xs text-background/40">
            {t("footer.location")}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <Link to="/tjanster" className="text-xs text-background/50 hover:text-background/80 transition-colors">{t("nav.tjanster")}</Link>
          <Link to="/referensprojekt" className="text-xs text-background/50 hover:text-background/80 transition-colors">{t("nav.referensprojekt")}</Link>
          <Link to="/om-bolaget" className="text-xs text-background/50 hover:text-background/80 transition-colors">{t("nav.om-bolaget")}</Link>
          <Link to="/karriar" className="text-xs text-background/50 hover:text-background/80 transition-colors">{t("nav.karriar")}</Link>
          <Link to="/kontakt" className="text-xs text-background/50 hover:text-background/80 transition-colors">{t("nav.kontakt")}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
