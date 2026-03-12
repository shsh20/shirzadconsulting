import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t("nav.tjanster"), href: "/tjanster" },
    { label: t("nav.referensprojekt"), href: "/referensprojekt" },
    { label: t("nav.om-bolaget"), href: "/om-bolaget" },
    { label: t("nav.karriar"), href: "/karriar" },
    { label: t("nav.kontakt"), href: "/kontakt" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-narrow flex items-center justify-between px-6 md:px-12 lg:px-24 py-5">
        <Link to="/" className="font-serif text-xl tracking-tight text-foreground">
          Shirzad Consulting Group
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === l.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 ml-2 border border-border rounded-sm overflow-hidden text-xs font-medium">
            <button
              onClick={() => setLang("sv")}
              className={`px-2.5 py-1.5 transition-colors ${
                lang === "sv"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Svenska
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1.5 transition-colors ${
                lang === "en"
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              English
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card border-b border-border px-6 pb-6 pt-2">
          {navLinks.map((l) => (
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
              {l.label}
            </Link>
          ))}
          {/* Language switcher mobile */}
          <div className="flex items-center gap-3 pt-4 border-t border-border mt-2">
            <button
              onClick={() => { setLang("sv"); setOpen(false); }}
              className={`text-sm font-medium transition-colors ${lang === "sv" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Svenska
            </button>
            <span className="text-border text-xs">|</span>
            <button
              onClick={() => { setLang("en"); setOpen(false); }}
              className={`text-sm font-medium transition-colors ${lang === "en" ? "text-foreground" : "text-muted-foreground"}`}
            >
              English
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
