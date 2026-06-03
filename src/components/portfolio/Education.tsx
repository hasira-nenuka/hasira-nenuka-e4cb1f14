import { Section } from "./Section";
import { EDUCATION } from "./data";
import { GraduationCap, Calendar, Award, BookMarked } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={<>Academic <span className="gradient-text">journey</span></>}
      subtitle="My formal training in computing and information technology."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand)] via-[var(--brand-2)] to-transparent" />
        <div className="space-y-10">
          <TimelineItem side="left">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="grid place-items-center size-10 rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <GraduationCap className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">{EDUCATION.degree}</h3>
                  <p className="text-xs text-muted-foreground">{EDUCATION.university}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <Info icon={Award} label="Current GPA" value={EDUCATION.gpa} />
                <Info icon={Calendar} label="Graduation" value={EDUCATION.graduation} />
              </div>
              <div className="mt-5">
                <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  <BookMarked className="size-3.5" /> Relevant Modules
                </p>
                <div className="flex flex-wrap gap-2">
                  {EDUCATION.modules.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 text-xs rounded-full border border-border bg-secondary/50"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </TimelineItem>
        </div>
      </div>
    </Section>
  );
}

function TimelineItem({ children, side }: { children: React.ReactNode; side: "left" | "right" }) {
  return (
    <div className="relative md:grid md:grid-cols-2 md:gap-10 items-start">
      <div className={`hidden md:block ${side === "left" ? "" : "md:col-start-2"}`}>{children}</div>
      <div className="md:hidden pl-12">{children}</div>
      <span className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 size-3 rounded-full bg-[var(--brand)] ring-4 ring-background" />
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border p-3">
      <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
        <Icon className="size-3" /> {label}
      </p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
