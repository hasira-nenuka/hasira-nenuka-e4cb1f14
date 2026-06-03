import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Code2 } from "lucide-react";
import { NAV_LINKS } from "./data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? "glass rounded-2xl shadow-card" : ""
        }`}
      >
        <nav className="flex items-center justify-between h-14">
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center size-9 rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground">
              <Code2 className="size-5" />
            </span>
            <span className="gradient-text">Hasira</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setLight((v) => !v)}
              className="grid place-items-center size-9 rounded-lg border border-border hover:bg-accent transition-colors"
            >
              {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </button>
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Hire me
            </a>
            <button
              aria-label="Menu"
              className="lg:hidden grid place-items-center size-9 rounded-lg border border-border"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <ul className="lg:hidden pb-4 pt-2 flex flex-col gap-1 animate-fade-up">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
