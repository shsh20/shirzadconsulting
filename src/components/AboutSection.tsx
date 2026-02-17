import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const competencies = [
  "Projektledning inom bygg och industri",
  "Prefabricerade system (stål, betong, bjälklag)",
  "Tekniska lösningar och projekteringsledning",
  "Tidsplanering, budget, risk och kommunikation",
  "Ledarskap och tvärdisciplinär samordning",
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="om" className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
              Om mig
            </p>
            <h2 className="heading-lg text-foreground mb-6">
              Noorullah Shirzad
            </h2>
            <p className="body-lg text-muted-foreground leading-relaxed">
              Jag är civilingenjör i byggteknik (LTH) med över 10 års erfarenhet
              som projektledare och teknisk samordnare i Sverige, Danmark, Estland
              och Irland. Jag har lett allt från industriella stålstommar till
              prefabricerade betongprojekt, skolor, sjukhus, forskningsanläggningar
              och parkeringshus.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
              Kompetenser
            </p>
            <ul className="space-y-4">
              {competencies.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-2 h-2 rounded-full bg-navy flex-shrink-0" />
                  <span className="text-foreground font-light text-base leading-relaxed">
                    {c}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
