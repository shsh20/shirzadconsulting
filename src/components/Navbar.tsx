import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const navItems = [
  { key: "nav.services", href: "/tjanster" },
  { key: "nav.projects", href: "/referensprojekt" },
  { key: "nav.about", href: "/om-bolaget" },
  { key: "nav.career", href: "/karriar" },
  { key: "nav.contact", href: "/kontakt" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langToggle = (
    <div className="flex items-center gap-1.5" aria-label={t("nav.language")}>
      <Globe size={15} strokeWidth={1.5} className="text-muted-foreground" />
      <button
        onClick={() => setLang("sv")}
        aria-pressed={lang === "sv"}
        className={`text-xs font-semibold tracking-wide transition-colors ${
          lang === "sv"
            ? "text-foreground"
            : "text-muted-foreground/60 hover:text-foreground"
        }`}
      >
        SV
      </button>
      <span className="text-muted-foreground/40 text-xs">|</span>
      <button
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`text-xs font-semibold tracking-wide transition-colors ${
          lang === "en"
            ? "text-foreground"
            : "text-muted-foreground/60 hover:text-foreground"
        }`}
      >
        EN
      </button>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <Link to="/" className="font-serif text-xl tracking-tight text-foreground md:mr-10 lg:mr-16">
          Shirzad Consulting Group
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === l.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(l.key)}
            </Link>
          ))}
          <div className="border-l border-border pl-6">{langToggle}</div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label={t("nav.toggleMenu")}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-6 pt-2">
          {navItems.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium transition-colors ${
                location.pathname === l.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(l.key)}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-border">{langToggle}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
