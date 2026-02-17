import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Globe } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Utbildning & certifieringar
          </p>
          <h2 className="heading-lg text-foreground">Kunskap & bakgrund</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <GraduationCap className="w-7 h-7 text-navy mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-lg text-foreground mb-3">Utbildning</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Civilingenjör, LTH – Infrastruktur & byggteknik
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BookOpen className="w-7 h-7 text-navy mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-lg text-foreground mb-3">Kurser & certifieringar</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              RFEM, Tekla, Stål, Prefab, Hållbarhet, Ledarskap, Projektledning
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Globe className="w-7 h-7 text-navy mb-4" strokeWidth={1.5} />
            <h3 className="font-serif text-lg text-foreground mb-3">Språk</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Svenska, Engelska, Danska, Norska, Pashto, Dari, Farsi
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
