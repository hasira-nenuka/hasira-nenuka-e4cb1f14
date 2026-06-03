import { Github, Linkedin, Mail, Code2 } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "./data";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center size-9 rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground">
              <Code2 className="size-5" />
            </span>
            <span className="gradient-text">Hasira Nenuka</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Aspiring software engineer building thoughtful, scalable applications.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.slice(0, 6).map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Connect</h4>
          <div className="flex items-center gap-3">
            <a href={SOCIALS.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="grid place-items-center size-10 rounded-xl glass hover:text-[var(--brand)] transition">
              <Github className="size-4" />
            </a>
            <a href={SOCIALS.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="grid place-items-center size-10 rounded-xl glass hover:text-[var(--brand)] transition">
              <Linkedin className="size-4" />
            </a>
            <a href={SOCIALS.email} aria-label="Email" className="grid place-items-center size-10 rounded-xl glass hover:text-[var(--brand)] transition">
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hasira Nenuka. All rights reserved.</p>
          <p>Designed and Developed by <span className="gradient-text font-semibold">Hasira Nenuka</span></p>
        </div>
      </div>
    </footer>
  );
}
