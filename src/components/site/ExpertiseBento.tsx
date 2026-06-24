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
  { icon: Briefcase, t: "Business Consulting", d: "Strategy, diagnosis, execution roadmaps.", span: "md:col-span-2 md:row-span-2" },
  { icon: Layers, t: "Product Leadership", d: "Vision, discovery, delivery.", span: "" },
  { icon: BrainCircuit, t: "AI Strategy", d: "From experiments to production.", span: "md:col-span-2" },
  { icon: Building2, t: "Executive Management", d: "Operating cadence & teams.", span: "" },
  { icon: TrendingUp, t: "Business Development", d: "Pipeline, partnerships, growth.", span: "" },
  { icon: Workflow, t: "Digital Transformation", d: "Modernize the way work happens.", span: "md:col-span-2" },
  { icon: Settings2, t: "Operations", d: "Process design that scales.", span: "" },
  { icon: Code2, t: "Software Engineering", d: "From product mind, with shipping hands.", span: "" },
  { icon: Rocket, t: "Startup Growth", d: "0→1 and 1→10 mechanics.", span: "" },
  { icon: LineChart, t: "Revenue Strategy", d: "Pricing, retention, expansion.", span: "" },
  { icon: Gauge, t: "Business Intelligence", d: "Decisions grounded in data.", span: "" },
  { icon: Sparkles, t: "Process Optimization", d: "Automate the obvious, focus on the rest.", span: "" },
];

export function ExpertiseBento() {
  return (
    <section id="expertise" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Expertise"
          title="A modern operator's toolkit."
          description="Twelve disciplines that compound — strategy, product, AI, and the operations that turn ideas into outcomes."
        />

        <div className="mt-16 grid auto-rows-[160px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {cards.map(({ icon: Icon, t, d, span }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
              className={`group relative overflow-hidden rounded-3xl glass p-6 transition-all hover:bg-white/[0.06] ${span}`}
            >
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--gradient-brand)" }}
              />
              <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
