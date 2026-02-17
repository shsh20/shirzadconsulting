import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Target, Shield, Users } from "lucide-react";

const strengths = [
  "Projektledning inom bygg och industri",
  "Prefabricerade system (stål, betong, bjälklag)",
  "Tekniska lösningar och projekteringsledning",
  "Tidsplanering, budget, risk och kommunikation",
  "Ledarskap och tvärdisciplinär samordning",
];

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "Varje projekt styrs med tydliga mål, strukturerade processer och kontroll genom hela kedjan.",
  },
  {
    icon: Shield,
    title: "Pålitlighet",
    desc: "Vi levererar det vi lovar – i tid, inom budget och med hög kvalitet.",
  },
  {
    icon: Users,
    title: "Samverkan",
    desc: "Vi tror på tvärdisciplinärt samarbete och öppen kommunikation mellan alla projektparter.",
  },
];

const OmBolaget = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

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
                  Om bolaget
                </p>
                <h1 className="heading-lg text-foreground mb-6">
                  Shirzad Consulting Group
                </h1>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="body-lg">
                    Shirzad Consulting Group grundades 2025 med en tydlig ambition: att erbjuda
                    högkvalitativ projektledning och byggkonsultation till bygg- och industrisektorn
                    i Skandinavien.
                  </p>
                  <p>
                    Bolaget bygger på över ett decenniums erfarenhet av att leda och samordna komplexa
                    projekt – från industriella stålstommar och prefabricerade betongkonstruktioner
                    till sjukhus, forskningsanläggningar och parkeringshus i Sverige, Danmark, Estland
                    och Irland.
                  </p>
                  <p>
                    Vi kombinerar djup teknisk kompetens med strukturerat projektledarskap för att
                    säkerställa att varje projekt levereras med precision, i tid och inom budget.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-6">
                  Kärnkompetenser
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
              </motion.div>
            </div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4">
                Våra värderingar
              </p>
              <h2 className="heading-lg text-foreground mb-12">
                Det vi står för
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {values.map((v, i) => (
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
