import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    type: "degree",
    title: "Bachelor of Business Administration (BBA)",
    org: "Northern University Bangladesh",
  },
  { type: "cert", title: "Google AI Essentials", org: "Google" },
  { type: "cert", title: "AI Fluency", org: "Anthropic / Claude" },
  { type: "cert", title: "Claude Code in Action", org: "Anthropic" },
  { type: "cert", title: "Digital Marketing Specialist", org: "Industry certification" },
];

export function Education() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          eyebrow="Education & learning"
          title="Always a student of the craft."
          description="Formal foundations plus a steady drumbeat of new disciplines — because the field keeps moving."
        />

        <div className="mt-16 space-y-3">
          {items.map((it, i) => {
            const Icon = it.type === "degree" ? GraduationCap : Award;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl glass p-5 sm:gap-6"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-base font-semibold tracking-tight">{it.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{it.org}</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {it.type === "degree" ? "Degree" : "Certified"}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
