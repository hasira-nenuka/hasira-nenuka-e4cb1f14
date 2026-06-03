import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-20 md:py-28 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          {eyebrow && (
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[var(--brand)] mb-3">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
