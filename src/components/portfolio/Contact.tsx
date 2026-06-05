import { useState } from "react";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import { SOCIALS } from "./data";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's <span className="gradient-text">build something</span></>}
      subtitle="Open to internships, collaborations and interesting engineering problems."
    >
      <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6">
        <form onSubmit={onSubmit} className="glass rounded-2xl p-6 space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Field id="name" label="Full Name" required />
            <Field id="email" type="email" label="Email" required />
          </div>
          <Field id="subject" label="Subject" required />
          <div>
            <label htmlFor="message" className="text-xs font-medium text-muted-foreground">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              className="mt-1.5 w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand)] transition"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground font-medium glow hover:opacity-95 transition"
          >
            <Send className="size-4" /> {sent ? "Message sent" : "Send Message"}
          </button>
        </form>

        <div className="space-y-4">
          <ContactItem icon={Mail} title="Email" value="hasiranenuka20896@gmail.com" href={SOCIALS.email} />
          <ContactItem icon={Phone} title="Mobile" value="0729902000" href="tel:+94729902000" />
          <ContactItem icon={Github} title="GitHub" value="github.com/hasira" href={SOCIALS.github} />
          <ContactItem icon={Linkedin} title="LinkedIn" value="linkedin.com/in/hasira" href={SOCIALS.linkedin} />
          <ContactItem icon={MapPin} title="Location" value="74/8, Katuwawala Road, Maharagama" />
        </div>
      </div>
    </Section>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl bg-secondary/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--brand)] transition"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon, title, value, href,
}: { icon: any; title: string; value: string; href?: string }) {
  const inner = (
    <div className="glass rounded-2xl p-5 flex items-center gap-4 card-hover hover:-translate-y-0.5 hover:border-[var(--brand)]/40">
      <span className="grid place-items-center size-11 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
        <Icon className="size-5" />
      </span>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}
