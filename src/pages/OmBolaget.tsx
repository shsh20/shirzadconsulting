import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Target, Shield, Users } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import { useLanguage } from "@/i18n/LanguageContext";

const OmBolaget = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const strengths = [
    t("about.strength1"),
    t("about.strength2"),
    t("about.strength3"),
    t("about.strength4"),
    t("about.strength5"),
  ];

  const radarData = [
    { subject: t("about.radar1"), value: 95 },
    { subject: t("about.radar2"), value: 90 },
    { subject: t("about.radar3"), value: 88 },
    { subject: t("about.radar4"), value: 92 },
    { subject: t("about.radar5"), value: 94 },
  ];

  const values = [
    {
      icon: Target,
      title: t("about.value1.title"),
      desc: t("about.value1.desc"),
    },
    {
      icon: Shield,
      title: t("about.value2.title"),
      desc: t("about.value2.desc"),
    },
    {
      icon: Users,
      title: t("about.value3.title"),
      desc: t("about.value3.desc"),
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <section className="section-padding bg-background" ref={ref}>
          <div className="container-narrow">
            {/* Intro */}
            <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                  {t("about.eyebrow")}
                </p>
                <h1 className="heading-lg text-foreground mb-6">
                  Shirzad Consulting Group
                </h1>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="body-lg">{t("about.p1")}</p>
                  <p>{t("about.p2")}</p>
                  <p>{t("about.p3")}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  {t("about.coreHeading")}
                </p>
                <ul className="space-y-4">
                  {strengths.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-navy flex-shrink-0" />
                      <span className="text-foreground font-light text-base leading-relaxed">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 w-full h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis
                        dataKey="subject"
                        tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }}
                      />
                      <Radar
                        name={t("about.radarName")}
                        dataKey="value"
                        stroke="hsl(var(--navy, var(--primary)))"
                        fill="hsl(var(--navy, var(--primary)))"
                        fillOpacity={0.15}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                {t("about.valuesEyebrow")}
              </p>
              <h2 className="heading-lg text-foreground mb-12">
                {t("about.valuesHeading")}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((v) => (
                  <div key={v.title} className="border border-border bg-card p-8">
                    <v.icon className="w-8 h-8 text-navy mb-5" strokeWidth={1.5} />
                    <h3 className="font-serif text-lg text-foreground mb-3">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default OmBolaget;
