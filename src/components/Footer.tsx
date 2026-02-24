import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground py-10 px-6 md:px-12 lg:px-24">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col items-center md:items-start gap-1">
        <span className="font-serif text-sm text-background/80">
          © 2025 Shirzad Consulting Group
        </span>
        <span className="text-xs text-background/40">
          Lund / Malmö
        </span>
      </div>
      <div className="flex items-center gap-6">
        <Link to="/tjanster" className="text-xs text-background/50 hover:text-background/80 transition-colors">Tjänster</Link>
        <Link to="/referensprojekt" className="text-xs text-background/50 hover:text-background/80 transition-colors">Referensprojekt</Link>
        <Link to="/om-bolaget" className="text-xs text-background/50 hover:text-background/80 transition-colors">Om bolaget</Link>
        <Link to="/kontakt" className="text-xs text-background/50 hover:text-background/80 transition-colors">Kontakt</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
