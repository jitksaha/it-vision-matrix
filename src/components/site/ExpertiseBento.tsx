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

type ArtProps = { className?: string };

/* Minimal vector art motifs — brand-tinted, purely decorative */
function Art({ variant, className }: ArtProps & { variant: string }) {
  const stroke = "var(--brand)";
  const common = {
    className: `pointer-events-none absolute ${className ?? ""}`,
    fill: "none" as const,
    stroke,
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (variant) {
    case "rings":
      return (
        <svg viewBox="0 0 200 200" {...common}>
          {[30, 55, 80, 95].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} opacity={0.35} />
          ))}
          <circle cx="100" cy="100" r="8" fill={stroke} stroke="none" opacity={0.5} />
        </svg>
      );
    case "wave":
      return (
        <svg viewBox="0 0 200 120" {...common}>
          {[0, 12, 24, 36, 48].map((o) => (
            <path key={o} d={`M0 ${70 + o - 24} C 40 ${30 + o - 24}, 70 ${110 + o - 24}, 110 ${65 + o - 24} S 170 ${25 + o - 24}, 200 ${60 + o - 24}`} opacity={0.3} />
          ))}
        </svg>
      );
    case "bars":
      return (
        <svg viewBox="0 0 200 120" {...common}>
          {[10, 40, 70, 100, 130, 160].map((x, i) => (
            <rect key={x} x={x} y={110 - (i % 3) * 26 - 24} width="18" height={(i % 3) * 26 + 24} rx="6" opacity={0.35} />
          ))}
        </svg>
      );
    case "nodes":
      return (
        <svg viewBox="0 0 200 160" {...common}>
          <path d="M40 120 L100 60 L160 120 M100 60 L100 20 M40 120 L160 120" opacity={0.35} />
          {[[40, 120], [100, 60], [160, 120], [100, 20]].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="var(--background)" opacity={0.9} />
          ))}
        </svg>
      );
    case "grid":
      return (
        <svg viewBox="0 0 200 160" {...common}>
          {[0, 1, 2, 3].map((r) =>
            [0, 1, 2, 3].map((c) => (
              <rect key={`${r}-${c}`} x={20 + c * 42} y={10 + r * 38} width="30" height="26" rx="8" opacity={0.18 + ((r + c) % 3) * 0.12} />
            )),
          )}
        </svg>
      );
    case "arcs":
      return (
        <svg viewBox="0 0 200 200" {...common}>
          {[40, 65, 90, 115].map((r) => (
            <path key={r} d={`M ${200 - r} 200 A ${r} ${r} 0 0 0 200 ${200 - r}`} opacity={0.35} />
          ))}
        </svg>
      );
    case "orbit":
      return (
        <svg viewBox="0 0 200 200" {...common}>
          <ellipse cx="100" cy="100" rx="90" ry="34" opacity={0.35} />
          <ellipse cx="100" cy="100" rx="90" ry="34" opacity={0.35} transform="rotate(60 100 100)" />
          <ellipse cx="100" cy="100" rx="90" ry="34" opacity={0.35} transform="rotate(120 100 100)" />
          <circle cx="100" cy="100" r="12" fill={stroke} stroke="none" opacity={0.4} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 200 160" {...common}>
          <path d="M20 130 C 60 40, 140 40, 180 130" opacity={0.35} />
          <path d="M20 130 L180 130" opacity={0.25} />
          {[50, 100, 150].map((x, i) => (
            <circle key={x} cx={x} cy={i === 1 ? 62 : 86} r="6" opacity={0.5} />
          ))}
        </svg>
      );
  }
}

const cards = [
  { icon: Briefcase, t: "Business Consulting", d: "Strategy, diagnosis, execution roadmaps.", span: "sm:col-span-2 md:col-span-2 md:row-span-2", feature: true, art: "orbit" },
  { icon: Layers, t: "Product Leadership", d: "Vision, discovery, delivery.", span: "", art: "grid" },
  { icon: BrainCircuit, t: "AI Strategy", d: "From experiments to production.", span: "", art: "nodes" },
  { icon: Building2, t: "Executive Management", d: "Operating cadence & teams.", span: "sm:col-span-2 md:col-span-2", art: "rings" },
  { icon: Workflow, t: "Digital Transformation", d: "Modernize the way work happens.", span: "sm:col-span-2 md:col-span-2", art: "arcs" },
  { icon: TrendingUp, t: "Business Development", d: "Pipeline, partnerships, growth.", span: "", art: "curve" },
  { icon: Settings2, t: "Operations", d: "Process design that scales.", span: "", art: "rings" },
  { icon: Code2, t: "Software Engineering", d: "From product mind, with shipping hands.", span: "", art: "grid" },
  { icon: Rocket, t: "Startup Growth", d: "0→1 and 1→10 mechanics.", span: "", art: "curve" },
  { icon: LineChart, t: "Revenue Strategy", d: "Pricing, retention, expansion.", span: "sm:col-span-2 md:col-span-2", art: "bars" },
  { icon: Gauge, t: "Business Intelligence", d: "Decisions grounded in data.", span: "sm:col-span-2 md:col-span-2", art: "wave" },
  { icon: Sparkles, t: "Process Optimization", d: "Automate the obvious, focus on the rest.", span: "sm:col-span-2 md:col-span-2", art: "orbit" },
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
          {cards.map(({ icon: Icon, t, d, span, feature, art }, i) => (
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

              {/* vector motif */}
              <Art
                variant={art}
                className={`right-0 top-1/2 -translate-y-1/2 translate-x-[12%] opacity-70 transition-all duration-500 group-hover:translate-x-[6%] group-hover:opacity-100 ${
                  feature ? "h-64 w-64" : "h-40 w-40"
                }`}
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

