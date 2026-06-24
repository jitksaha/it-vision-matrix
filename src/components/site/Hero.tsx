import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Briefcase, BrainCircuit, Layers, Rocket, LineChart, Building2 } from "lucide-react";
import { MagneticButton } from "./primitives";

const stats = [
  { v: "6+", k: "Years experience" },
  { v: "50+", k: "Projects delivered" },
  { v: "20+", k: "Industries served" },
  { v: "AI", k: "Product leadership" },
];

const floatingTags = [
  { label: "Business Consulting", icon: Briefcase, chip: "chip-blue", x: "6%", y: "22%", d: 0 },
  { label: "AI Strategy", icon: BrainCircuit, chip: "chip-violet", x: "84%", y: "18%", d: 0.15 },
  { label: "Product Leadership", icon: Layers, chip: "chip-emerald", x: "3%", y: "62%", d: 0.3 },
  { label: "Startup Growth", icon: Rocket, chip: "chip-orange", x: "86%", y: "58%", d: 0.45 },
  { label: "Revenue Strategy", icon: LineChart, chip: "chip-pink", x: "12%", y: "84%", d: 0.6 },
  { label: "Executive Mgmt", icon: Building2, chip: "chip-blue", x: "78%", y: "82%", d: 0.75 },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 grid-bg-dense radial-fade opacity-90" />
      {/* Soft color bloom */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1100px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(circle at 70% 60%, rgba(139,92,246,0.18), transparent 60%)",
        }}
      />

      {/* Floating topic chips (desktop) */}
      {floatingTags.map((t) => (
        <motion.div
          key={t.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + t.d }}
          style={{ left: t.x, top: t.y }}
          className="pointer-events-none absolute hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5 + t.d * 2, repeat: Infinity, ease: "easeInOut" }}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow-sm ${t.chip}`}
          >
            <t.icon className="h-3.5 w-3.5" />
            {t.label}
          </motion.div>
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs text-muted-foreground shadow-sm"
        >
          <span className="relative grid h-1.5 w-1.5 place-items-center">
            <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          Available for advisory &amp; consulting · 2026
        </motion.div>

        {/* Headline — UI Bakery oversized bold */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-6 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-[88px]"
        >
          Building businesses
          <br className="hidden sm:block" /> through{" "}
          <span className="text-gradient">strategy, products &amp; AI.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          Business Consultant, Head of Product and AI Strategist helping organizations
          accelerate growth through innovation, automation and digital transformation.
        </motion.p>

        {/* Prompt-style CTA card (UI Bakery vibe) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.28 }}
          className="relative mx-auto mt-10 max-w-2xl rounded-3xl border border-border bg-card p-2 shadow-[0_30px_60px_-30px_rgba(11,18,32,0.25)]"
        >
          <div className="flex items-center gap-2 rounded-2xl bg-background px-4 py-4 text-left">
            <div className="flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Let&apos;s build
              </p>
              <p className="mt-0.5 text-base font-medium text-foreground/80">
                a product, an AI strategy, a growth engine…
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Category chips like UI Bakery's Internal Tools / Admin panels row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="chip-blue inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
            <Briefcase className="h-3.5 w-3.5" /> Consulting
          </span>
          <span className="chip-emerald inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
            <Layers className="h-3.5 w-3.5" /> Product
          </span>
          <span className="chip-violet inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
            <BrainCircuit className="h-3.5 w-3.5" /> AI Strategy
          </span>
          <span className="chip-orange inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium">
            <Rocket className="h-3.5 w-3.5" /> Startup growth
          </span>
        </motion.div>

        {/* Secondary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href="#experience">
            View experience <ArrowUpRight className="ml-1.5 h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#expertise" variant="ghost">
            <Sparkles className="mr-1.5 h-4 w-4" />
            Explore expertise
          </MagneticButton>
        </motion.div>

        {/* Stat grid — bento, hairline divided */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm sm:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.k}
              className={`p-6 ${i !== 0 ? "border-t sm:border-t-0 sm:border-l border-border" : ""} ${
                i === 1 ? "border-t sm:border-t-0" : ""
              }`}
            >
              <dt className="font-display text-3xl font-bold tracking-tight">{s.v}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.k}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
