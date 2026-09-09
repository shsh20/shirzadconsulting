import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Project {
  title: string;
  location: string;
  discipline: string;
  description: string;
  image: string;
  imageAlt: string;
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "Norslunda",
      location: "Norslunda",
      discipline: t("projects.norslunda.discipline"),
      description: t("projects.norslunda.description"),
      image: "/projekt/norslunda.JPG",
      imageAlt: t("projects.norslunda.alt"),
    },
    {
      title: "Granngården",
      location: "Granngården",
      discipline: t("projects.granngarden.discipline"),
      description: t("projects.granngarden.description"),
      image: "/projekt/granngarden.jpg",
      imageAlt: t("projects.granngarden.alt"),
    },
  ];

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
            {t("projects.eyebrow")}
          </p>
          <h1 className="heading-lg text-foreground mb-3">
            {t("projects.heading")}
          </h1>
          <p className="body-lg text-muted-foreground">
            {t("projects.lead")}
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center p-6 md:p-10 border ${
                i % 2 === 1
                  ? "bg-project-tint border-navy/10"
                  : "bg-card border-border"
              }`}
            >
              <div
                className={`flex items-center justify-center bg-background border border-border p-4 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="w-full h-auto max-h-[320px] object-contain"
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
