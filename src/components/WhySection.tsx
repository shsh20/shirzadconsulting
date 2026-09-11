import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Ruler, ClipboardCheck, Handshake } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const items = [
  { icon: Layers, key: "1" },
  { icon: Ruler, key: "2" },
  { icon: ClipboardCheck, key: "3" },
  { icon: Handshake, key: "4" },
];

const WhySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow grid lg:grid-cols-12 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-4">
            {t("home.why.eyebrow")}
          </p>
          <h2 className="heading-lg text-foreground mb-6">
            {t("home.why.heading")}
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            {t("home.why.lead")}
          </p>
        </motion.div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-border">
          {items.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-background p-8"
            >
              <item.icon
                className="h-6 w-6 text-navy mb-5"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-lg text-foreground mb-3">
                {t(`home.why.${item.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`home.why.${item.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
