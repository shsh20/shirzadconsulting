import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  { period: "2023 – nu", role: "Projektledare", company: "K‑System / PEAB" },
  { period: "2018 – 2023", role: "Projektledare", company: "Sweco" },
  { period: "2015 – 2018", role: "Structural Engineer & PM", company: "Scandinavian WeldTech (DK)" },
  { period: "2012 – 2015", role: "Team Manager", company: "FV Garden" },
  { period: "2011 – 2015", role: "Team Manager & tolk", company: "Lunds Kommun" },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="erfarenhet" className="section-padding bg-slate-light" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Karriär
          </p>
          <h2 className="heading-lg text-foreground">Erfarenhet</h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((e, i) => (
            <motion.div
              key={e.period}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-8 py-8 border-b border-border last:border-b-0"
            >
              <span className="text-sm font-medium text-steel w-32 flex-shrink-0 pt-1">
                {e.period}
              </span>
              <div>
                <h3 className="font-serif text-xl text-foreground">{e.role}</h3>
                <p className="text-muted-foreground mt-1">{e.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
