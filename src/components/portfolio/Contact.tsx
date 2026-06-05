import { useMemo, useState } from "react";
import {
  Bot,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./Section";
import { SOCIALS } from "./data";

const EMAIL = "hasiranenuka20896@gmail.com";
const PHONE = "+94729902000";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const assistantReply = useMemo(
    () => createAssistantReply(form.subject, form.message, form.name),
    [form.name, form.subject, form.message],
  );

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    form.subject || "Project opportunity for Hasira Nenuka",
  )}&body=${encodeURIComponent(
    `Hi Hasira,\n\nMy name is ${form.name || "[Your name]"}.\n\n${form.message || "I would like to discuss an opportunity with you."}\n\nReply to: ${
      form.email || "[Your email]"
    }\n`,
  )}`;

  const whatsappHref = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
    `Hi Hasira, I saw your portfolio. ${form.subject ? `About: ${form.subject}. ` : ""}${
      form.message || "I would like to discuss an opportunity with you."
    }`,
  )}`;

  return (
    <Section
      id="contact"
      eyebrow="AI Contact Desk"
      title={
        <>
          Hire me through a <span className="gradient-text">smart contact flow</span>
        </>
      }
      subtitle="Open to internships, collaborations, project work and interesting engineering problems."
    >
      <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <form
          onSubmit={onSubmit}
          className="surface premium-border relative overflow-hidden rounded-2xl p-6 space-y-4 md:p-7"
        >
          <div
            aria-hidden
            className="absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)] bg-[length:180%_180%] animate-gradient-pan"
          />
          <div className="relative flex items-start gap-3 rounded-2xl border border-white/10 bg-background/30 p-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <Bot className="size-5" />
            </span>
            <div>
              <p className="font-semibold">Hasira AI contact assistant</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Type your message and the assistant reply updates instantly.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              id="name"
              label="Full Name"
              value={form.name}
              onChange={(value) => updateField("name", value)}
              required
            />
            <Field
              id="email"
              type="email"
              label="Email"
              value={form.email}
              onChange={(value) => updateField("email", value)}
              required
            />
          </div>
          <Field
            id="subject"
            label="Subject"
            value={form.subject}
            onChange={(value) => updateField("subject", value)}
            required
          />
          <div>
            <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background/35 px-4 py-3 text-sm transition focus:border-[var(--brand)] focus:outline-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
          >
            <Sparkles className="size-4" /> {sent ? "AI reply prepared" : "Prepare Smart Reply"}
          </button>
          {sent && (
            <div className="animate-fade-up rounded-2xl border border-[var(--brand)]/30 bg-[var(--brand)]/10 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-[var(--brand)]">
                <CheckCircle2 className="size-4" /> Ready to contact Hasira
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={emailHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
                >
                  <Mail className="size-4" /> Send Email
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/40 px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-[var(--brand)]/50"
                >
                  <MessageSquare className="size-4" /> WhatsApp
                </a>
              </div>
            </div>
          )}
        </form>

        <div className="space-y-4">
          <div className="surface premium-border relative overflow-hidden rounded-2xl p-5">
            <div
              aria-hidden
              className="absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)]"
            />
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <Bot className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">Instant Assistant Reply</p>
                  <p className="text-xs text-muted-foreground">Auto response preview</p>
                </div>
              </div>
              <span className="rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-2.5 py-1 text-[11px] font-semibold text-[var(--brand)]">
                Live
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-background/35 p-4">
              <p className="text-sm leading-6 text-foreground/90">{assistantReply}</p>
            </div>
          </div>
          <ContactItem
            icon={Mail}
            title="Email"
            value={EMAIL}
            href={SOCIALS.email}
          />
          <ContactItem icon={Phone} title="Mobile" value="0729902000" href={`tel:${PHONE}`} />
          <ContactItem
            icon={Github}
            title="GitHub"
            value="github.com/hasira-nenuka"
            href={SOCIALS.github}
          />
          <ContactItem
            icon={Linkedin}
            title="LinkedIn"
            value="linkedin.com/in/hasira"
            href={SOCIALS.linkedin}
          />
          <ContactItem
            icon={MapPin}
            title="Location"
            value="Maharagama, Sri Lanka"
            href="https://www.google.com/maps/search/?api=1&query=Maharagama%2C%20Sri%20Lanka"
          />
        </div>
      </div>
    </Section>
  );
}

function createAssistantReply(subject: string, message: string, name = "") {
  const text = `${subject} ${message}`.toLowerCase();
  const greeting = name.trim() ? `Hi ${name.trim()}, ` : "Hi, ";

  if (!text.trim()) {
    return "Hi, I am Hasira's portfolio assistant. Share your opportunity and I will prepare a clear next step instantly.";
  }

  if (text.includes("intern")) {
    return `${greeting}thanks for the internship opportunity. Hasira is open to software engineering internships and can share his project experience, GitHub work, and availability for an interview.`;
  }

  if (text.includes("freelance") || text.includes("project") || text.includes("website")) {
    return `${greeting}thanks for the project inquiry. Hasira can help with modern web applications, React interfaces, backend APIs, dashboards, and automation-focused work. A short project brief would be the best next step.`;
  }

  if (text.includes("security") || text.includes("testing") || text.includes("automation")) {
    return `${greeting}thanks for reaching out. Hasira is especially interested in secure software, testing, and automation workflows. He can discuss the scope, tools, timeline, and expected outcomes.`;
  }

  return `${greeting}thanks for your message. Hasira will review the opportunity and reply as soon as possible. For a faster response, include the role, timeline, budget or company details.`;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-background/35 px-4 py-3 text-sm transition focus:border-[var(--brand)] focus:outline-none"
        placeholder={label}
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="surface group flex items-center gap-4 rounded-2xl p-5 card-hover hover:-translate-y-0.5 hover:border-[var(--brand)]/40">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] transition group-hover:scale-105">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="break-words font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
