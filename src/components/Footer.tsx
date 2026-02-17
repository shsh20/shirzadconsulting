const Footer = () => (
  <footer className="bg-foreground py-8 px-6 md:px-12 lg:px-24">
    <div className="container-narrow flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-serif text-sm text-background/60">
        © {new Date().getFullYear()} Shirzad Consulting
      </span>
      <span className="text-xs text-background/40">
        Projektledning · Byggkonsultation · Teknisk samordning
      </span>
    </div>
  </footer>
);

export default Footer;
