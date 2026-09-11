import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CtaBand = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="bg-navy" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="container-narrow px-6 md:px-12 lg:px-24 py-16 md:py-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div className="max-w-xl">
          <h2 className="heading-md text-background mb-4">
            {t("home.cta.heading")}
          </h2>
          <p className="text-sm md:text-base text-background/70 leading-relaxed">
            {t("home.cta.lead")}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/kontakt"
            className="group inline-flex items-center gap-2 bg-background text-foreground px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
          >
            {t("home.cta.button")}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
          <Link
            to="/om-bolaget"
            className="inline-flex items-center gap-2 border border-background/30 text-background px-7 py-3.5 text-sm font-medium transition-colors hover:bg-background/10"
          >
            {t("home.cta.secondary")}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaBand;
