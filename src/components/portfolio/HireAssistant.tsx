import { useMemo, useState } from "react";
import {
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  Send,
  Sparkles,
} from "lucide-react";
import { Section } from "./Section";

const EMAIL = "hasiranenuka20896@gmail.com";
const PHONE = "+94729902000";

const HIRE_OPTIONS = [
  "Internship",
  "Freelance project",
  "Full-stack web app",
  "Testing or automation",
  "Security-aware development",
];

export function HireAssistant() {
  const [selected, setSelected] = useState(HIRE_OPTIONS[0]);
  const [details, setDetails] = useState("");
  const [ready, setReady] = useState(false);

  const assistantReply = useMemo(
    () => buildHireReply(selected, details),
    [selected, details],
  );

  const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Hiring opportunity: ${selected}`,
  )}&body=${encodeURIComponent(
    `Hi Hasira,\n\nI found your portfolio and would like to contact you about: ${selected}.\n\nDetails:\n${
      details || "[Add opportunity details here]"
    }\n\nPlease reply with your availability.\n`,
  )}`;

  const whatsappHref = `https://wa.me/${PHONE.replace("+", "")}?text=${encodeURIComponent(
    `Hi Hasira, I found your portfolio. I want to contact you about ${selected}. ${
      details || "Can we discuss your availability?"
    }`,
  )}`;

  return (
    <Section
      id="hire"
      eyebrow="Hire Me"
      title={
        <>
          A special <span className="gradient-text">AI hiring desk</span> for opportunities
        </>
      }
      subtitle="A focused place for recruiters, clients and collaborators to start a clear conversation with me."
    >
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="surface premium-border relative overflow-hidden rounded-2xl p-6">
          <div
            aria-hidden
            className="absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)] bg-[length:180%_180%] animate-gradient-pan"
          />
          <div className="mb-5 flex items-start gap-3">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <Bot className="size-6" />
            </span>
            <div>
              <h3 className="text-xl font-semibold">Hire Assistant</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Choose the opportunity type and this assistant prepares the best contact message.
              </p>
            </div>
          </div>

          <div className="grid gap-2">
            {HIRE_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setSelected(option);
                  setReady(false);
                }}
                className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left text-sm font-semibold transition ${
                  selected === option
                    ? "border-transparent bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]"
                    : "border-border bg-background/35 text-foreground/85 hover:border-[var(--brand)]/50"
                }`}
              >
                <span>{option}</span>
                {selected === option && <CheckCircle2 className="size-4" />}
              </button>
            ))}
          </div>
        </div>

        <div className="surface relative overflow-hidden rounded-2xl p-6 md:p-7">
          <div className="grid gap-4 sm:grid-cols-3">
            <HireMetric icon={BriefcaseBusiness} label="Best for" value={selected} />
            <HireMetric icon={Clock} label="Reply target" value="24 hours" />
            <HireMetric icon={Sparkles} label="Status" value="Available" />
          </div>

          <label htmlFor="hire-details" className="mt-6 block text-xs font-medium text-muted-foreground">
            Opportunity details
          </label>
          <textarea
            id="hire-details"
            rows={5}
            value={details}
            onChange={(event) => {
              setDetails(event.target.value);
              setReady(false);
            }}
            className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background/35 px-4 py-3 text-sm transition focus:border-[var(--brand)] focus:outline-none"
            placeholder="Role, project idea, timeline, budget, company, or interview details..."
          />

          <div className="mt-4 rounded-2xl border border-white/10 bg-background/35 p-4">
            <p className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Bot className="size-4 text-[var(--brand)]" /> AI prepared reply
            </p>
            <p className="text-sm leading-6 text-muted-foreground">{assistantReply}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setReady(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
            >
              <Send className="size-4" /> Prepare Hire Message
            </button>
            <a
              href={emailHref}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/35 px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-[var(--brand)]/50"
            >
              <Mail className="size-4" /> Email me
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-[var(--brand-2)]/50"
            >
              <MessageSquare className="size-4" /> WhatsApp
            </a>
          </div>

          {ready && (
            <p className="mt-4 animate-fade-up rounded-xl border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-4 py-3 text-sm font-medium text-[var(--brand)]">
              Hire message ready. Use Email me or WhatsApp to contact Hasira directly.
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}

function HireMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof BriefcaseBusiness;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-background/30 p-4">
      <Icon className="size-4 text-[var(--brand)]" />
      <p className="mt-3 text-[11px] uppercase tracking-widest text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}

function buildHireReply(type: string, details: string) {
  const base =
    details.trim() ||
    "Add a few details and I will shape this into a clean message for Hasira.";

  if (type.includes("Internship")) {
    return `Thanks for considering Hasira for an internship. He can discuss software engineering, full-stack development, testing, and project work. Context: ${base}`;
  }

  if (type.includes("Freelance") || type.includes("web app")) {
    return `Thanks for the project opportunity. Hasira can help turn the idea into a responsive interface, API flow, and maintainable implementation. Context: ${base}`;
  }

  if (type.includes("Testing") || type.includes("Security")) {
    return `Thanks for the technical opportunity. Hasira is interested in automation, secure software habits, validation, and practical testing workflows. Context: ${base}`;
  }

  return `Thanks for reaching out. Hasira can review the opportunity and reply with availability, next steps, and any questions. Context: ${base}`;
}
