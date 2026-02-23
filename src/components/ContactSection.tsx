import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@shirzadconsulting.se?subject=Kontakt från ${form.name}&body=${form.message}%0A%0AFrån: ${form.name} (${form.email})`;
  };

  return (
    <section className="section-padding bg-primary" ref={ref}>
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary-foreground/60 mb-4">
              Kontakt
            </p>
            <h2 className="heading-lg text-primary-foreground mb-8">
              Låt oss prata om ditt projekt
            </h2>

            <div className="space-y-5">
              <a href="tel:+46765407729" className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone size={18} strokeWidth={1.5} />
                <span>+46 765 407 729</span>
              </a>
              <a href="mailto:info@shirzadconsulting.se" className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail size={18} strokeWidth={1.5} />
                <span>info@shirzadconsulting.se</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Linkedin size={18} strokeWidth={1.5} />
                <span>LinkedIn</span>
              </a>
              <div className="flex items-center gap-4 text-primary-foreground/80">
                <MapPin size={18} strokeWidth={1.5} />
                <span>Lund / Malmö</span>
              </div>
            </div>

            {/* Interactive map pinning Anslagsvägen 9, 226 47 Lund */}
            <div className="mt-8 rounded overflow-hidden border border-primary-foreground/10">
              <iframe
                title="Karta Lund"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2248.5!2d13.1912!3d55.7127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653931bb4a78b29%3A0x0!2sAnslags%C3%A4gen+9%2C+226+47+Lund!5e0!3m2!1ssv!2sse!4v1"
                width="100%"
                height="220"
                style={{ border: 0, filter: "grayscale(0.6) contrast(1.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wide mb-2 block">
                  Namn
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                  placeholder="Ditt namn"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wide mb-2 block">
                  E-post
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/50 transition-colors"
                  placeholder="din@epost.se"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-primary-foreground/60 uppercase tracking-wide mb-2 block">
                  Meddelande
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/50 transition-colors resize-none"
                  placeholder="Berätta om ditt projekt..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-foreground text-primary py-4 text-sm font-semibold tracking-wide hover:bg-primary-foreground/90 transition-colors"
              >
                Skicka meddelande
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
