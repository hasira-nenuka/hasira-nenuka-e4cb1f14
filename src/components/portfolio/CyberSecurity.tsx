import { Section } from "./Section";
import { SECURITY_INTERESTS } from "./data";
import { Shield, Lock, Terminal, Globe, Network } from "lucide-react";
import { motion } from "framer-motion";

const ICONS = [Network, Shield, Lock, Terminal, Globe];

export function CyberSecurity() {
  return (
    <Section
      id="security"
      eyebrow="Exploring Cyber Security"
      title={<>Building software that's <span className="gradient-text">secure by design</span></>}
      subtitle="A growing area of interest alongside my core software engineering studies."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SECURITY_INTERESTS.map((s, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative glass rounded-2xl p-6 overflow-hidden card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40"
            >
              <div className="absolute -right-8 -top-8 size-32 rounded-full bg-[var(--brand-2)]/15 blur-2xl" />
              <span className="relative grid place-items-center size-10 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground mb-4">
                <Icon className="size-5" />
              </span>
              <h3 className="relative font-semibold">{s.title}</h3>
              <p className="relative text-sm text-muted-foreground mt-1">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
