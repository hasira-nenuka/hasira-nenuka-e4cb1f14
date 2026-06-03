import { Section } from "./Section";
import { STATS } from "./data";
import { GraduationCap, Code2, Layers, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const POINTS = [
  { icon: GraduationCap, text: "Software Engineering undergraduate." },
  { icon: Code2, text: "Interested in Full-Stack Development." },
  { icon: Layers, text: "Passionate about learning modern technologies." },
  { icon: ShieldCheck, text: "Strong problem-solving mindset." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={<>Engineering ideas into <span className="gradient-text">real products</span></>}
      subtitle="I'm a Software Engineering undergraduate focused on building reliable, scalable and elegant software. My interests span Software Architecture, Databases, Cloud Computing and Cyber Security."
    >
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <ul className="space-y-4">
          {POINTS.map((p, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-start gap-3 glass rounded-xl p-4"
            >
              <span className="grid place-items-center size-9 rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground shrink-0">
                <p.icon className="size-4" />
              </span>
              <span className="text-sm md:text-base text-foreground/90">{p.text}</span>
            </motion.li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center card-hover hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
