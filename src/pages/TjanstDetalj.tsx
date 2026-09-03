import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getService, getServices } from "@/data/services";
import { categories } from "@/data/categories";

const TjanstDetalj = () => {
  const { slug } = useParams();
  const service = getService(slug, "sv");
  const services = getServices("sv");

  if (!service) return <Navigate to="/tjanster" replace />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const Icon = service.icon;
  const category = categories.find((c) =>
    c.serviceSlugs.includes(service.slug)
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="border-b border-border bg-background">
          <nav
            aria-label="Brödsmulor"
            className="container-narrow px-6 md:px-12 lg:px-24 py-4"
          >
            <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Hem
                </Link>
              </li>
              <ChevronRight size={14} className="opacity-60" />
              <li>
                <Link
                  to="/tjanster"
                  className="hover:text-foreground transition-colors"
                >
                  Tjänster
                </Link>
              </li>
              {category && (
                <>
                  <ChevronRight size={14} className="opacity-60" />
                  <li>
                    <Link
                      to={`/tjanster/omrade/${category.slug}`}
                      className="hover:text-foreground transition-colors"
                    >
                      {category.title}
                    </Link>
                  </li>
                </>
              )}
              <ChevronRight size={14} className="opacity-60" />
              <li className="text-foreground" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>
        </div>

        {/* Hero */}
        <section className="section-padding bg-slate-light">
          <div className="container-narrow grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex h-14 w-14 items-center justify-center bg-navy text-background mb-6">
                <Icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h1 className="heading-xl text-foreground mb-6">
                {service.title}
              </h1>
              <p className="body-lg text-muted-foreground">{service.intro}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 h-full w-full bg-project-tint border border-navy/20" />
              <img
                src={service.image}
                alt={service.title}
                width={1024}
                height={768}
                className="relative w-full aspect-[4/3] object-cover shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-narrow grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
              {service.sections.map((sec, i) => (
                <motion.div
                  key={sec.heading}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <h2 className="font-serif text-2xl text-foreground mb-5">
                    {sec.heading}
                  </h2>
                  <ul className="space-y-3">
                    {sec.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
                        <span className="text-muted-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-project-tint border border-border p-8 lg:sticky lg:top-28">
                <h2 className="font-serif text-xl text-foreground mb-5">
                  Värdet för dig
                </h2>
                <ul className="space-y-4 mb-8">
                  {service.outcomes.map((o) => (
                    <li key={o} className="flex gap-3 text-sm">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-navy"
                        strokeWidth={2}
                      />
                      <span className="text-muted-foreground leading-relaxed">
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-navy text-background px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Kontakta oss
                  <ArrowRight size={16} />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        {/* Other services */}
        <section className="section-padding bg-slate-light">
          <div className="container-narrow">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className="heading-md text-foreground">Andra tjänster</h2>
              <Link
                to="/tjanster"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy"
              >
                <ArrowLeft size={16} />
                Tillbaka till alla tjänster
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {others.map((s) => (
                <Link
                  key={s.slug}
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
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TjanstDetalj;
