import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { SOCIALS } from "./data";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* decorative blobs */}
      <div aria-hidden className="absolute -top-32 -left-20 size-[420px] rounded-full bg-[var(--brand)]/20 blur-3xl animate-blob" />
      <div aria-hidden className="absolute top-20 -right-20 size-[420px] rounded-full bg-[var(--brand-2)]/20 blur-3xl animate-blob" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 grid md:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-muted-foreground mb-6">
            <Sparkles className="size-3.5 text-[var(--brand)]" />
            Available for internships & collaborations
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
            Hi, I'm <span className="gradient-text">Hasira Nenuka</span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-foreground/90 font-medium">
            Information Technology Undergraduate | Full-Stack Developer
          </p>

          <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
            Passionate about software development, web technologies, cloud computing, and solving real-world
            problems through technology. I enjoy building scalable applications and continuously expanding my
            technical expertise.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground font-medium glow hover:opacity-95 transition"
            >
              View Projects
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass hover:border-[var(--brand)]/50 transition"
            >
              <Download className="size-4" /> Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:bg-accent transition"
            >
              <Mail className="size-4" /> Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <SocialIcon href={SOCIALS.github} label="GitHub"><Github className="size-4" /></SocialIcon>
            <SocialIcon href={SOCIALS.linkedin} label="LinkedIn"><Linkedin className="size-4" /></SocialIcon>
            <SocialIcon href={SOCIALS.email} label="Email"><Mail className="size-4" /></SocialIcon>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative justify-self-center md:justify-self-end"
        >
          <div className="absolute inset-0 -m-6 rounded-[2rem] bg-[image:var(--gradient-brand)] opacity-30 blur-2xl" />
          <div className="relative animate-float">
            <div className="p-[2px] rounded-3xl bg-[image:var(--gradient-brand)] glow">
              <div className="rounded-3xl bg-card overflow-hidden">
                <img
                  src={profileImg}
                  alt="Hasira Nenuka portrait"
                  width={420}
                  height={420}
                  className="size-72 sm:size-80 md:size-[360px] object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-xl px-3 py-2 text-xs">
              <span className="text-[var(--brand)] font-semibold">{"<"}/{">"}</span> Full-Stack Dev
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs">
              🎓 Information Technology
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid place-items-center size-10 rounded-xl glass hover:text-[var(--brand)] hover:border-[var(--brand)]/50 transition"
    >
      {children}
    </a>
  );
}
