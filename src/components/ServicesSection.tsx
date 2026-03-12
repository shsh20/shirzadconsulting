import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardList,
  HardHat,
  Ruler,
  Box,
  TrendingUp,
  Users,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const services = [
    { icon: ClipboardList, title: t("services.1.title"), desc: t("services.1.desc") },
    { icon: HardHat, title: t("services.2.title"), desc: t("services.2.desc") },
    { icon: Ruler, title: t("services.3.title"), desc: t("services.3.desc") },
    { icon: Box, title: t("services.4.title"), desc: t("services.4.desc") },
    { icon: TrendingUp, title: t("services.5.title"), desc: t("services.5.desc") },
    { icon: Users, title: t("services.6.title"), desc: t("services.6.desc") },
  ];

  return (
    <section className="section-padding bg-slate-light" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            {t("services.label")}
          </p>
          <h2 className="heading-lg text-foreground">
            {t("services.heading")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card p-8 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <s.icon className="w-8 h-8 text-navy mb-5" strokeWidth={1.5} />
              <h3 className="font-serif text-lg text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
