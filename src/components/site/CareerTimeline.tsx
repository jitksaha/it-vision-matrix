import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const SERIF = "'Instrument Serif', ui-serif, Georgia, serif";
const MONO = "'Geist Mono', ui-monospace, SFMono-Regular, monospace";

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
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Career Evolution"
          index="02"
          meta="2019 — 2026"
          title="From shipping code to shaping companies."
          accent="shaping companies"
          description="Eight chapters. One throughline — building things people use and businesses people trust."
        />

        {/* Horizontal track */}
        <div className="relative mt-16">
          {/* Track line with progress */}
          <div className="relative h-px w-full bg-border">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              style={{ originX: 0 }}
              className="absolute inset-0 h-px bg-gradient-to-r from-brand via-brand to-brand/0"
            />
          </div>

          {/* Step grid */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
            {steps.map((s, i) => {
              const top = i % 2 === 0;
              return (
                <motion.div
                  key={s.t}
                  initial={{ opacity: 0, y: top ? -12 : 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group relative flex flex-col ${
                    top ? "lg:-mt-44" : "lg:mt-6"
                  }`}
                >
                  {/* Connector + node */}
                  <div
                    className={`relative hidden lg:flex ${
                      top ? "order-2 mt-3 flex-col items-center" : "order-1 mb-3 flex-col-reverse items-center"
                    }`}
                  >
                    <span className="h-10 w-px bg-border" />
                    <span className="h-3 w-3 rounded-full bg-brand ring-4 ring-background transition-transform duration-200 group-hover:scale-125" />
                  </div>

                  {/* Card */}
                  <div
                    className={`relative rounded-2xl border border-border bg-card p-4 shadow-[0_10px_30px_-20px_rgba(11,18,32,0.18)] transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-brand/40 ${
                      top ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span
                        className="text-2xl italic leading-none text-brand"
                        style={{ fontFamily: SERIF }}
                      >
                        {s.y}
                      </span>
                      <span
                        className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
                        style={{ fontFamily: MONO }}
                      >
                        Ch.{String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-3 text-sm font-semibold leading-snug tracking-tight text-foreground">
                      {s.t}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {s.d}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
