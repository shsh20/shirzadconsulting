import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { value: t("hero.stat1Value"), label: t("hero.stat1Label") },
    { value: t("hero.stat2Value"), label: t("hero.stat2Label") },
    { value: t("hero.stat3Value"), label: t("hero.stat3Label") },
  ];

  return (
    <section className="relative overflow-hidden bg-background pt-28 md:pt-32">
      {/* subtle grid accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at 20% 0%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 20% 0%, black 0%, transparent 70%)",
        }}
      />

      <div className="relative container-narrow px-6 md:px-12 lg:px-24 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6"
            >
              {t("hero.eyebrow")}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="heading-xl text-foreground mb-6"
            >
              {t("hero.title")}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mb-10"
            >
              {t("hero.lead")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                to="/kontakt"
                className="group inline-flex items-center gap-2 bg-navy text-background px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
              >
                {t("hero.cta")}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/tjanster"
                className="inline-flex items-center gap-2 border border-navy/25 text-foreground px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              <div
                aria-hidden
                className="absolute -left-4 -top-4 hidden h-24 w-24 border-l-2 border-t-2 border-navy/30 lg:block"
              />
              <div className="relative overflow-hidden shadow-xl">
                <img
                  src={heroBg}
                  alt={t("hero.imageAlt")}
                  className="h-[300px] w-full object-cover md:h-[420px]"
                />
                <div className="absolute inset-0 bg-navy/15" />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b-2 border-r-2 border-navy/30 lg:block"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 border-t border-border pt-8 gap-8"
        >
          {stats.map((s) => (
            <div key={s.label} className="sm:px-2">
              <p className="font-serif text-2xl md:text-3xl text-foreground">
                {s.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
