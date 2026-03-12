import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Upload, Briefcase, Users, TrendingUp, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

const Karriar = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const values = [
    { icon: Briefcase, title: t("karriar.value.1.title"), desc: t("karriar.value.1.desc") },
    { icon: Users, title: t("karriar.value.2.title"), desc: t("karriar.value.2.desc") },
    { icon: TrendingUp, title: t("karriar.value.3.title"), desc: t("karriar.value.3.desc") },
  ];

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [cv, setCv] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [dragOver, setDragOver] = useState(false);

  const handleFile = (file: File | null) => {
    if (!file) return;
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (allowed.includes(file.type) || file.name.match(/\.(pdf|doc|docx)$/i)) {
      setCv(file);
    } else {
      alert("Endast PDF eller Word-filer (.pdf, .doc, .docx) är tillåtna.");
    }
  };

  const uploadCvToUploadcare = async (file: File): Promise<string> => {
    const ucData = new FormData();
    ucData.append("UPLOADCARE_PUB_KEY", "6de4e138bb369eb3c78d");
    ucData.append("UPLOADCARE_STORE", "1");
    ucData.append("file", file);
    const res = await fetch("https://upload.uploadcare.com/base/", { method: "POST", body: ucData });
    if (!res.ok) throw new Error("CV-uppladdning misslyckades");
    const json = await res.json();
    return `https://ucarecdn.com/${json.file}/`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      let cvUrl = "";
      if (cv) cvUrl = await uploadCvToUploadcare(cv);
      const res = await fetch("https://formspree.io/f/maqpjwey", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          ...(form.phone && { phone: form.phone }),
          message: form.message || "Intresseanmälan – se bifogat CV.",
          ...(cvUrl && { cv_länk: cvUrl }),
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
        setCv(null);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 bg-card">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
              {t("karriar.label")}
            </p>
            <h1 className="heading-lg text-foreground mb-6">
              {t("karriar.heading")}
            </h1>
            <p className="text-body text-muted-foreground leading-relaxed">
              {t("karriar.intro")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="space-y-3"
              >
                <v.icon size={22} strokeWidth={1.5} className="text-foreground" />
                <h3 className="font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding bg-primary" ref={ref}>
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-medium tracking-widest uppercase text-primary-foreground/60 mb-4">
                {t("karriar.form.label")}
              </p>
              <h2 className="heading-lg text-primary-foreground mb-6">
                {t("karriar.form.heading")}
              </h2>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-8">
                {t("karriar.form.desc")}
              </p>
              <ul className="space-y-3">
                {[t("karriar.form.bullet.1"), t("karriar.form.bullet.2"), t("karriar.form.bullet.3")].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-primary-foreground/80">
                    <CheckCircle size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-primary-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 text-center py-16">
                  <CheckCircle size={48} strokeWidth={1} className="text-primary-foreground/80" />
                  <div>
                    <p className="text-lg font-semibold text-primary-foreground mb-2">{t("karriar.success.heading")}</p>
                    <p className="text-sm text-primary-foreground/70">{t("karriar.success.desc")}</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wide mb-2 block">{t("karriar.field.name")}</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                      placeholder={t("karriar.placeholder.name")} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wide mb-2 block">{t("karriar.field.email")}</label>
                    <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                      placeholder={t("karriar.placeholder.email")} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wide mb-2 block">{t("karriar.field.phone")}</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                      placeholder={t("karriar.placeholder.phone")} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wide mb-2 block">{t("karriar.field.message")}</label>
                    <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/50 transition-colors resize-none"
                      placeholder={t("karriar.placeholder.message")} />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wide mb-2 block">{t("karriar.field.cv")}</label>
                    <label
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files[0]); }}
                      className={`flex flex-col items-center justify-center gap-2 w-full border-2 border-dashed px-4 py-6 cursor-pointer transition-colors ${
                        dragOver ? "border-primary-foreground/60 bg-primary-foreground/10"
                          : cv ? "border-primary-foreground/40 bg-primary-foreground/10"
                          : "border-primary-foreground/20 hover:border-primary-foreground/40"
                      }`}
                    >
                      <input type="file" accept=".pdf,.doc,.docx" className="sr-only" onChange={(e) => handleFile(e.target.files?.[0] ?? null)} />
                      <Upload size={20} strokeWidth={1.5} className="text-primary-foreground/50" />
                      {cv ? (
                        <span className="text-sm text-primary-foreground/80 font-medium">{cv.name}</span>
                      ) : (
                        <span className="text-sm text-primary-foreground/50">{t("karriar.upload")}</span>
                      )}
                    </label>
                  </div>
                  <button type="submit" disabled={status === "sending"}
                    className="w-full bg-primary-foreground text-primary py-4 text-sm font-semibold tracking-wide hover:bg-primary-foreground/90 transition-colors disabled:opacity-50">
                    {status === "sending" ? t("karriar.sending") : t("karriar.submit")}
                  </button>
                  {status === "error" && (
                    <p className="text-sm text-red-300 text-center">{t("karriar.error")}</p>
                  )}
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Karriar;
