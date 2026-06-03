import { Section } from "./Section";
import { SKILLS } from "./data";
import { motion } from "framer-motion";
import { Cpu, Database, Server, Wrench, BookOpen } from "lucide-react";

const ICONS = [Cpu, Server, Database, Wrench, BookOpen];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title={<>Tools I use to <span className="gradient-text">build things</span></>}
      subtitle="A growing toolkit across the full stack — from interfaces to infrastructure."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILLS.map((g, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="glass rounded-2xl p-6 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center size-10 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-semibold text-lg">{g.group}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs rounded-full border border-border bg-secondary/50 text-foreground/85 hover:border-[var(--brand)]/50 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
