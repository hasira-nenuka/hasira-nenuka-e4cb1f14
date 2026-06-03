import { useState } from "react";
import { Section } from "./Section";
import { PROJECTS, PROJECT_FILTERS, ProjectCategory } from "./data";
import { Github, ExternalLink, Folder } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const filtered = PROJECTS.filter(
    (p) => filter === "All" || p.category.includes(filter as ProjectCategory)
  );

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={<>Selected <span className="gradient-text">work</span></>}
      subtitle="A snapshot of projects I've built across coursework and personal exploration."
    >
      <div className="flex flex-wrap gap-2 mb-8">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 text-sm rounded-full border transition-all ${
              filter === f
                ? "bg-[image:var(--gradient-brand)] text-primary-foreground border-transparent"
                : "border-border text-muted-foreground hover:text-foreground hover:border-[var(--brand)]/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group glass rounded-2xl overflow-hidden card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40 flex flex-col"
            >
              <div className={`relative h-40 bg-gradient-to-br ${p.gradient}`}>
                <div className="absolute inset-0 grid place-items-center">
                  <Folder className="size-12 text-foreground/40 group-hover:scale-110 transition-transform" />
                </div>
                <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                  {p.category.map((c) => (
                    <span key={c} className="text-[10px] px-2 py-0.5 rounded-full glass">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-5 flex flex-col grow">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground grow">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-secondary text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  {p.github && (
                    <a href={p.github} className="inline-flex items-center gap-1.5 text-sm hover:text-[var(--brand)] transition">
                      <Github className="size-4" /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a href={p.demo} className="inline-flex items-center gap-1.5 text-sm hover:text-[var(--brand)] transition">
                      <ExternalLink className="size-4" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
