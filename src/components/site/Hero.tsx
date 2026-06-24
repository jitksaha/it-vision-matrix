import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GridBackground } from "./GridBackground";
import { MagneticButton } from "./primitives";

const stats = [
  { v: "6+", k: "Years experience" },
  { v: "50+", k: "Projects delivered" },
  { v: "20+", k: "Industries served" },
  { v: "AI", k: "& Product leadership" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <GridBackground />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Available for advisory & consulting · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Building businesses through{" "}
            <span className="text-gradient">strategy, products &amp; AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Business Consultant, Head of Product and AI Strategist helping organizations
            accelerate growth through innovation, automation and digital transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#experience">
              View experience
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Sparkles className="mr-1.5 h-4 w-4" />
              Let's work together
            </MagneticButton>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl glass sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.k} className="bg-background/40 p-5">
                <dt className="font-display text-2xl font-semibold tracking-tight">{s.v}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{s.k}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <HeroDashboard />
      </div>
    </section>
  );
}

function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      className="relative"
    >
      <div className="relative rounded-3xl glass-strong p-5 glow-ring">
        {/* dashboard header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            jks · ops console
          </span>
        </div>

        {/* metric tiles */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          <Tile label="Revenue growth" value="+38.2%" trend="up" />
          <Tile label="Velocity" value="2.4×" trend="up" />
          <Tile label="AI automations" value="17 live" trend="flat" />
          <Tile label="Ops efficiency" value="93%" trend="up" />
        </div>

        {/* chart */}
        <div className="mt-4 rounded-2xl border border-white/5 bg-background/40 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted-foreground">Quarterly impact</p>
              <p className="font-display text-xl font-semibold">$4.2M tracked</p>
            </div>
            <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
              ↑ on track
            </span>
          </div>
          <Sparkline />
        </div>

        {/* footer pills */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["Strategy", "Product", "AI", "Operations"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* floating cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-4 top-16 hidden rounded-2xl glass-strong p-3 shadow-xl sm:block"
      >
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Roadmap</p>
        <p className="mt-1 font-display text-sm font-semibold">Q4 — AI agent rollout</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 bottom-10 hidden rounded-2xl glass-strong p-3 shadow-xl sm:block"
      >
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">NPS</p>
        <p className="mt-1 font-display text-sm font-semibold">72 · world-class</p>
      </motion.div>
    </motion.div>
  );
}

function Tile({ label, value, trend }: { label: string; value: string; trend: "up" | "flat" }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-background/40 p-3.5">
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <div className="mt-1 flex items-baseline justify-between">
        <span className="font-display text-lg font-semibold">{value}</span>
        <span
          className={`text-[10px] ${
            trend === "up" ? "text-emerald-300" : "text-muted-foreground"
          }`}
        >
          {trend === "up" ? "▲" : "—"}
        </span>
      </div>
    </div>
  );
}

function Sparkline() {
  const pts = [12, 18, 14, 22, 28, 24, 34, 30, 42, 46, 52, 60];
  const w = 280;
  const h = 64;
  const max = Math.max(...pts);
  const step = w / (pts.length - 1);
  const d = pts
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="mt-3 h-16 w-full">
      <defs>
        <linearGradient id="sp" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.16 220)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="oklch(0.78 0.16 220)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L ${w} ${h} L 0 ${h} Z`} fill="url(#sp)" />
      <motion.path
        d={d}
        fill="none"
        stroke="oklch(0.85 0.14 220)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
      />
    </svg>
  );
}
