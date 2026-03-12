import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Byggarbetsplats med stålkonstruktion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <div className="relative z-10 section-padding container-narrow w-full pt-32">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl text-primary-foreground mb-6"
          >
            Shirzad Consulting Group
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-lg text-primary-foreground/75 mb-10 max-w-2xl"
          >
            Projektledning och byggkonsultation med erfarenhet och precision.
            Vi leder och strukturerar bygg- och industriprojekt från idé till färdig leverans.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <Link
              to="/kontakt"
              className="inline-block bg-primary-foreground text-primary px-8 py-4 text-sm font-semibold tracking-wide hover:bg-primary-foreground/90 transition-colors"
            >
              Kontakta oss
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
