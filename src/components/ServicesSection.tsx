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
                className="group flex h-full flex-col bg-card border border-border overflow-hidden hover:shadow-lg hover:border-navy/30 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-project-tint">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center bg-navy text-background shadow-md">
                    <s.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-serif text-lg text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <span className="mt-auto">
                    <span className="inline-flex items-center gap-2 bg-navy text-background px-5 py-2.5 text-sm font-medium transition-opacity group-hover:opacity-90">
                      Läs mer
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
