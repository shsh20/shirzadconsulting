import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Calendar, Briefcase } from "lucide-react";

interface Project {
  title: string;
  year: string;
  role: string;
  type: string;
  country: string;
}

const projects: Project[] = [];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, 9);

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
            Referensprojekt
          </p>
          <h2 className="heading-lg text-foreground mb-3">
            Ett urval av projekt
          </h2>
          <p className="body-lg text-muted-foreground">
            Projekt vi har lett eller samordnat genom åren.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="border border-border bg-card p-6 hover:border-navy/30 transition-colors group"
            >
              <h3 className="font-serif text-lg text-foreground mb-3 group-hover:text-navy transition-colors">
                {p.title}
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-steel" />
                  <span>{p.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className="text-steel" />
                  <span>{p.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-steel" />
                  <span>{p.country}</span>
                </div>
              </div>
              <p className="mt-3 text-xs text-steel font-medium uppercase tracking-wide">
                {p.type}
              </p>
            </motion.div>
          ))}
        </div>

        {projects.length > 9 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-medium text-navy hover:text-navy-light transition-colors underline underline-offset-4"
            >
              {showAll ? "Visa färre" : `Visa alla ${projects.length} projekt`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
