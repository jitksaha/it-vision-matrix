import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

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
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            <GitBranch className="h-3.5 w-3.5" />
            Career Evolution
          </span>
          <h2 className="mt-5 text-3xl font-black leading-[1.35] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[44px]">
            From shipping code to shaping companies.{" "}
            <span className="rounded-sm bg-[#d0d1ff] px-1.5 box-decoration-clone">
              Eight chapters, 2019 — 2026.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            One throughline — building things people use and businesses people trust.
          </p>
        </div>


        {/* Rail */}
        <div className="relative mt-14">
          {/* Year ruler */}
          <div className="hidden lg:grid grid-cols-8 px-2">
            {steps.map((s) => (
              <div key={s.y} className="flex flex-col items-center">
                <span
                  className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground"
                  style={{ fontFamily: MONO }}
                >
                  {s.y}
                </span>
              </div>
            ))}
          </div>

          {/* Track with nodes */}
          <div className="relative mt-3 hidden lg:block">
            <div className="relative h-px w-full bg-border">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.6, ease: "easeOut" }}
                style={{ originX: 0 }}
                className="absolute inset-0 h-px bg-gradient-to-r from-brand via-brand/70 to-brand/0"
              />
            </div>
            <div className="absolute inset-0 grid grid-cols-8">
              {steps.map((s, i) => (
                <div key={s.t} className="flex justify-center">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.3, delay: 0.1 + i * 0.08 }}
                    className="-mt-[5px] h-[11px] w-[11px] rounded-full bg-brand ring-4 ring-background"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.article
                key={s.t}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group relative flex flex-col rounded-xl border border-border/60 bg-card/60 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand/50 hover:bg-card hover:shadow-[0_20px_40px_-24px_rgba(79,70,229,0.35)]"
              >
                <div className="flex items-baseline justify-between">
                  <span
                    className="text-3xl italic leading-none text-brand"
                    style={{ fontFamily: SERIF }}
                  >
                    {s.y}
                  </span>
                  <span
                    className="text-[9px] uppercase tracking-[0.22em] text-muted-foreground/70"
                    style={{ fontFamily: MONO }}
                  >
                    Ch.{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 h-px w-8 bg-brand/40 transition-all duration-300 group-hover:w-full group-hover:bg-brand/60" />
                <h3 className="mt-3 text-[13px] font-semibold leading-snug tracking-tight text-foreground">
                  {s.t}
                </h3>
                <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted-foreground">
                  {s.d}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
