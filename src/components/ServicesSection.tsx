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

const services = [
  { icon: ClipboardList, title: "Projektledning", desc: "Ledning av bygg- och industriprojekt från start till leverans." },
  { icon: HardHat, title: "Byggkonsultation", desc: "Rådgivning och kvalitetssäkring genom hela byggprocessen." },
  { icon: Ruler, title: "Projekteringsledning & teknisk koordinering", desc: "Samordning av projekteringsprocesser och tekniska lösningar." },
  { icon: Box, title: "Stålstommar, prefab-betong & 3D-modellering", desc: "Specialistkompetens inom prefabricerade konstruktionssystem." },
  { icon: TrendingUp, title: "Kostnadsstyrning, tidplan & riskhantering", desc: "Proaktiv styrning av budget, tid och projektrisker." },
  { icon: Users, title: "Stöd till beställare & entreprenörer", desc: "Oberoende rådgivning och samordning mellan alla parter." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
            Tjänster
          </p>
          <h2 className="heading-lg text-foreground">
            Vad vi erbjuder
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
