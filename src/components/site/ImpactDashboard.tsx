import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { SectionHeader } from "./SectionHeader";

const metrics = [
  { n: 6, suffix: "+", label: "Years of experience", sub: "Web → product → AI" },
  { n: 50, suffix: "+", label: "Projects delivered", sub: "Across startups & enterprise" },
  { n: 20, suffix: "+", label: "Industries served", sub: "From SaaS to fintech" },
  { n: 100, suffix: "+", label: "Business consultations", sub: "Strategy + execution" },
  { n: 17, suffix: "", label: "AI transformation projects", sub: "Shipped, not slideware" },
  { n: 12, suffix: "", label: "Teams led", sub: "Product, engineering, ops" },
];

export function ImpactDashboard() {
  return (
    <section id="impact" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Impact"
          title="A track record measured in outcomes."
          description="Numbers from six years of building, shipping and advising — not vanity metrics, real movement."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl glass-strong sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="relative bg-background/40 p-8"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="mt-3 font-display text-5xl font-semibold tracking-tight">
                <Counter to={m.n} suffix={m.suffix} />
              </div>
              <p className="mt-3 text-sm font-medium">{m.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
