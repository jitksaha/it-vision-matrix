import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { y: "2019", t: "Web Developer", d: "Hands-on engineering across the web stack." },
  { y: "2020", t: "Shopify & WordPress Specialist", d: "Commerce & CMS builds for global clients." },
  { y: "2021", t: "Sales & Client Operations", d: "Customer success, retention, revenue ops." },
  { y: "2022", t: "Project Manager", d: "Multi-team delivery, scope, timeline, quality." },
  { y: "2023", t: "Business Management Executive", d: "P&L thinking, operations, growth." },
  { y: "2024", t: "Head of Product", d: "Strategy, roadmaps, product organization." },
  { y: "2025", t: "Business Consultant", d: "Advisory across SaaS, startups, agencies." },
  { y: "2026", t: "AI Strategist", d: "Embedding AI into business, products, ops." },
];

export function CareerTimeline() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Career Evolution"
          index="02"
          meta="2019 — Present"
          title="From shipping code to shaping companies."
          accent="shaping companies"
          description="Eight chapters. One throughline — building things people use and businesses people trust."
        />


        <div className="relative mt-20 grid gap-10 md:grid-cols-2">
          {/* center line */}
          <div className="absolute left-4 top-0 hidden h-full w-px md:left-1/2 md:block">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ originY: 0 }}
              className="h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
            />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`relative ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
              }`}
            >
              <div
                className={`absolute top-6 hidden h-3 w-3 rounded-full bg-foreground shadow-[0_0_0_4px_var(--background),0_0_24px_rgba(59,130,246,0.5)] md:block ${
                  i % 2 === 0 ? "right-[-6px]" : "left-[-6px]"
                }`}
              />
              <div className="rounded-2xl glass p-6">
                <p className="font-mono text-xs tracking-widest text-muted-foreground">{s.y}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
