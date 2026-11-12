import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Shield, Users, HardHat, Boxes, Truck, Cog, Code2, Check } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { useLanguage } from "@/i18n/LanguageContext";

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.5 } };

const OmBolaget = () => {
  const { t, lang } = useLanguage();
  const sv = lang === "sv";
  const icons = [HardHat, Boxes, Truck, Cog, Code2];
  const strengths = [1, 2, 3, 4, 5].map((n) => t(`about.strength${n}`));
  const radarData = [1, 2, 3, 4, 5].map((n, i) => ({ subject: t(`about.radar${n}`), value: [95, 90, 88, 92, 86][i] }));
  const values = [
    { icon: Target, title: t("about.value1.title"), desc: t("about.value1.desc") },
    { icon: Shield, title: t("about.value2.title"), desc: t("about.value2.desc") },
    { icon: Users, title: t("about.value3.title"), desc: t("about.value3.desc") },
  ];
  const facts = sv
    ? [["2025", "Grundat"], ["3", "Tjänsteområden"], ["7", "Specialisttjänster"], ["Lund / Malmö", "Bas i Skåne"]]
    : [["2025", "Founded"], ["3", "Service areas"], ["7", "Specialist services"], ["Lund / Malmö", "Based in Skåne"]];
  const approach = sv
    ? ["Tydlig struktur från start", "Spårbar dokumentation", "Ett ansvar – hela kedjan"]
    : ["Clear structure from day one", "Traceable documentation", "One owner – the full chain"];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="relative overflow-hidden bg-navy text-background">
          <img src="/tjanster/projektledning.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="relative container-narrow px-6 md:px-12 lg:px-24 py-20 md:py-28">
            <motion.div {...fade} className="max-w-3xl">
              <p className="text-sm font-medium tracking-widest uppercase text-background/70 mb-4">{t("about.eyebrow")}</p>
              <h1 className="heading-xl mb-6">Shirzad Consulting Group</h1>
              <p className="body-lg text-background/85">{t("about.p1")}</p>
            </motion.div>
          </div>
        </section>

        {/* Facts */}
        <section className="border-b border-border bg-card">
          <div className="container-narrow px-6 md:px-12 lg:px-24 grid grid-cols-2 md:grid-cols-4">
            {facts.map(([v, l]) => (
              <div key={l} className="py-8 px-4 border-border [&:not(:last-child)]:md:border-r">
                <div className="font-serif text-2xl md:text-3xl text-navy">{v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-background">
          <div className="container-narrow grid md:grid-cols-2 gap-14 items-center">
            <motion.div {...fade} className="space-y-5 text-muted-foreground leading-relaxed">
              <h2 className="heading-lg text-foreground">{sv ? "Helhet från idé till leverans" : "End-to-end, from idea to delivery"}</h2>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <ul className="pt-2 space-y-3">
                {approach.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-foreground">
                    <span className="flex h-6 w-6 items-center justify-center bg-navy text-background"><Check size={14} /></span>{a}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...fade} className="relative">
              <div className="absolute -top-4 -left-4 h-full w-full bg-project-tint" />
              <img src="/tjanster/stal-prefab.jpg" alt="" loading="lazy" className="relative w-full aspect-[4/3] object-cover shadow-lg" />
            </motion.div>
          </div>
        </section>

        {/* Competencies */}
        <section className="section-padding bg-slate-light">
          <div className="container-narrow">
            <motion.div {...fade} className="mb-12 max-w-2xl">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">{t("about.coreHeading")}</p>
              <h2 className="heading-lg text-foreground">{sv ? "Kompetens som täcker hela projektet" : "Expertise across the entire project"}</h2>
            </motion.div>
            <div className="grid lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
                {strengths.map((s, i) => {
                  const Icon = icons[i];
                  return (
                    <motion.div key={s} {...fade} transition={{ duration: 0.4, delay: i * 0.06 }}
                      className="flex gap-4 bg-card border border-border p-5 hover:border-navy/40 hover:shadow-md transition-all">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-navy text-background"><Icon size={18} strokeWidth={1.5} /></span>
                      <span className="text-sm text-foreground leading-relaxed">{s}</span>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div {...fade} className="lg:col-span-2 bg-card border border-border p-4 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="55%" data={radarData}>
                    <PolarGrid stroke="hsl(var(--border))" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
                    <Radar name={t("about.radarName")} dataKey="value" stroke="hsl(var(--navy))" fill="hsl(var(--navy))" fillOpacity={0.18} strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background">
          <div className="container-narrow">
            <motion.div {...fade} className="mb-12">
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">{t("about.valuesEyebrow")}</p>
              <h2 className="heading-lg text-foreground">{t("about.valuesHeading")}</h2>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <motion.div key={v.title} {...fade} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="group border border-border border-t-4 border-t-navy bg-card p-8 hover:shadow-lg transition-shadow">
                  <v.icon className="w-8 h-8 text-navy mb-5 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg text-foreground mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-project-tint px-6 md:px-12 lg:px-24 py-16">
          <div className="container-narrow flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h2 className="heading-lg text-foreground max-w-xl">{sv ? "Vill du veta hur vi kan stötta ditt projekt?" : "Want to know how we can support your project?"}</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/tjanster" className="inline-flex items-center gap-2 border border-navy text-navy px-6 py-3 text-sm font-medium hover:bg-navy hover:text-background transition-colors">{t("nav.services")}</Link>
              <Link to="/kontakt" className="group inline-flex items-center gap-2 bg-navy text-background px-6 py-3 text-sm font-medium hover:opacity-90">
                {t("nav.contact")} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OmBolaget;
