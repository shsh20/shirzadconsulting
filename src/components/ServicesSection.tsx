import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";

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
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Tjänster
          </p>
          <h2 className="heading-lg text-foreground mb-6">Vad vi erbjuder</h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Vi kombinerar teknisk specialistkompetens med projektledning, inköp
            och digitalisering – och tar ansvar hela vägen från tidiga skeden
            till färdig leverans.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to={`/tjanster/${s.slug}`}
                className="group flex h-full flex-col bg-card p-8 border border-border hover:shadow-lg hover:border-navy/30 transition-all duration-300"
              >
                <s.icon className="w-8 h-8 text-navy mb-5" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {s.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-navy">
                  Läs mer
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
