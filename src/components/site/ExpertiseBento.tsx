import { motion } from "framer-motion";
import {
  BrainCircuit,
  Briefcase,
  Workflow,
  LineChart,
  Layers,
  Rocket,
  Settings2,
  Code2,
  Building2,
  TrendingUp,
  Gauge,
  Sparkles,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { icon: Briefcase, t: "Business Consulting", d: "Strategy, diagnosis, execution roadmaps.", span: "sm:col-span-2 md:col-span-2 md:row-span-2", feature: true },
  { icon: Layers, t: "Product Leadership", d: "Vision, discovery, delivery.", span: "" },
  { icon: BrainCircuit, t: "AI Strategy", d: "From experiments to production.", span: "" },
  { icon: Building2, t: "Executive Management", d: "Operating cadence & teams.", span: "sm:col-span-2 md:col-span-2" },
  { icon: Workflow, t: "Digital Transformation", d: "Modernize the way work happens.", span: "sm:col-span-2 md:col-span-2" },
  { icon: TrendingUp, t: "Business Development", d: "Pipeline, partnerships, growth.", span: "" },
  { icon: Settings2, t: "Operations", d: "Process design that scales.", span: "" },
  { icon: Code2, t: "Software Engineering", d: "From product mind, with shipping hands.", span: "" },
  { icon: Rocket, t: "Startup Growth", d: "0→1 and 1→10 mechanics.", span: "" },
  { icon: LineChart, t: "Revenue Strategy", d: "Pricing, retention, expansion.", span: "sm:col-span-2 md:col-span-2" },
  { icon: Gauge, t: "Business Intelligence", d: "Decisions grounded in data.", span: "sm:col-span-2 md:col-span-2" },
  { icon: Sparkles, t: "Process Optimization", d: "Automate the obvious, focus on the rest.", span: "sm:col-span-2 md:col-span-2" },
];

export function ExpertiseBento() {
  return (
    <section id="expertise" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Expertise"
          index="03"
          title="A modern operator's toolkit."
          accent="toolkit"
          description="Twelve disciplines that compound — strategy, product, AI, and the operations that turn ideas into outcomes."
        />

        <div className="mt-16 grid auto-rows-[minmax(150px,1fr)] grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-4">
          {cards.map(({ icon: Icon, t, d, span, feature }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
              className={`group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition-all hover:bg-secondary ${span}`}
            >
              {/* soft AI orb */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-90"
                style={{ background: "var(--gradient-brand)" }}
              />
              {/* faint circuit grid */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />

              <span className="pointer-events-none absolute right-5 top-5 font-mono text-[10px] tracking-widest text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background/70 backdrop-blur">
                <Icon className="h-4.5 w-4.5 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>

              <div className="relative mt-auto pt-6">
                <h3 className={`font-semibold tracking-tight ${feature ? "text-2xl" : "text-lg"}`}>{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

