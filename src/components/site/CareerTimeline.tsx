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
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="Career Evolution"
          index="02"
          meta="2019 — Present"
          title="From shipping code to shaping companies."
          accent="shaping companies"
          description="Eight chapters. One throughline — building things people use and businesses people trust."
        />

        {/* Editorial left-rail timeline */}
        <div className="relative mt-12">
          {/* Rail */}
          <div
            aria-hidden
            className="absolute left-[88px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/0 via-brand/30 to-brand/0 sm:left-[112px]"
          />

          <ol className="space-y-4">
            {steps.map((s, i) => (
              <motion.li
                key={s.t}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group relative grid grid-cols-[72px_1fr] items-center gap-6 sm:grid-cols-[96px_1fr] sm:gap-8"
              >
                {/* Year column — serif italic, brand */}
                <div
                  className="text-right text-2xl italic leading-none text-brand sm:text-3xl"
                  style={{ fontFamily: SERIF }}
                >
                  {s.y}
                </div>

                {/* Node + card */}
                <div className="relative">
                  {/* Node */}
                  <span
                    aria-hidden
                    className="absolute -left-[26px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand ring-4 ring-background transition-transform duration-200 group-hover:scale-125 sm:-left-[34px]"
                  />
                  <div className="flex flex-col gap-1 rounded-xl border border-transparent px-4 py-3 transition-all duration-200 group-hover:border-border group-hover:bg-card group-hover:shadow-[0_10px_30px_-20px_rgba(11,18,32,0.25)] sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
                      {s.t}
                    </h3>
                    <p
                      className="text-xs text-muted-foreground sm:text-sm"
                      style={{ fontFamily: MONO }}
                    >
                      {s.d}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
