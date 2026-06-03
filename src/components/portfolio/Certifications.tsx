import { Section } from "./Section";
import { CERTIFICATIONS } from "./data";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

export function Certifications() {
  return (
    <Section
      id="certs"
      eyebrow="Achievements & Certifications"
      title={<>Milestones along the <span className="gradient-text">way</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="glass rounded-2xl p-6 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40"
          >
            <span className="grid place-items-center size-10 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground mb-4">
              <Award className="size-5" />
            </span>
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{c.org}</p>
            <p className="text-xs text-[var(--brand)] mt-3 font-medium">{c.year}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
