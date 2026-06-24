import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const topics = [
  { t: "AI & Business", d: "Where AI actually changes the unit economics." },
  { t: "Product Strategy", d: "Picking the right bets, then sequencing them." },
  { t: "Startup Growth", d: "0→1 mechanics that don't break at 10." },
  { t: "Digital Transformation", d: "Past the buzzword — what it really takes." },
  { t: "Leadership", d: "How operating cadence beats heroics." },
  { t: "Business Systems", d: "Designing the company so the company runs itself." },
  { t: "Operations Excellence", d: "Quality at speed, on purpose." },
  { t: "Modern SaaS", d: "Building software companies in the age of AI." },
];

export function ThoughtLeadership() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Thought leadership"
          title="Ideas I keep coming back to."
          description="Recurring themes from talks, advisory rooms and 1:1s with founders and operators."
        />

        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((t, i) => (
            <motion.div
              key={t.t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="rounded-2xl glass p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Note {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{t.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
