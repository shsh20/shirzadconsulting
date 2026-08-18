import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Project {
  title: string;
  location: string;
  discipline: string;
  description: string;
  image: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    title: "Norslunda",
    location: "Norslunda",
    discipline: "Betongkonstruktion",
    description:
      "Projektering av socklar och betongbjälklag för kontor och industrilokal. Uppdraget omfattade dimensionering av grundkonstruktion samt bjälklag anpassade efter verksamhetens laster.",
    image: "/projekt/norslunda.jpg",
    imageAlt:
      "3D-modell av kontors- och industribyggnad i Norslunda med mörk fasad",
  },
  {
    title: "Granngården",
    location: "Granngården",
    discipline: "Stålkonstruktion",
    description:
      "Projektering av stålstomme till affärslokal. Uppdraget omfattade dimensionering av pelare, balkar och stabiliserande system för lokalens stomme.",
    image: "/projekt/granngarden.jpg",
    imageAlt: "3D-modell av stålstomme med pelare, balkar och fackverk",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Referensprojekt
          </p>
          <h1 className="heading-lg text-foreground mb-3">
            Ett urval av våra projekt
          </h1>
          <p className="body-lg text-muted-foreground">
            Vi projekterar bärande konstruktioner i stål och betong – från
            grundläggning till färdig stomme. Här är några uppdrag vi har
            ansvarat för.
          </p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
            >
              <div
                className={`overflow-hidden border border-border bg-muted ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-xs font-medium tracking-widest uppercase text-steel mb-3">
                  {p.discipline}
                </p>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  {p.title}
                </h2>
                <div className="w-12 h-px bg-navy/40 mb-5" />
                <p className="text-muted-foreground leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
