import { motion } from "framer-motion";
import { Search, BarChart3, Target, Hammer, TrendingUp, Bot, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  {
    n: "01",
    t: "Discover",
    d: "Get inside the business — context, customers, constraints.",
    icon: Search,
    gradient: "linear-gradient(135deg, #635bff 0%, #8b5cf6 100%)",
    tint: "rgba(99, 91, 255, 0.10)",
  },
  {
    n: "02",
    t: "Analyze",
    d: "Find the real bottleneck, not the loudest one.",
    icon: BarChart3,
    gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    tint: "rgba(59, 130, 246, 0.10)",
  },
  {
    n: "03",
    t: "Strategize",
    d: "Sharp choices, written down, agreed on.",
    icon: Target,
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
    tint: "rgba(236, 72, 153, 0.10)",
  },
  {
    n: "04",
    t: "Build",
    d: "Ship the smallest thing that proves the bet.",
    icon: Hammer,
    gradient: "linear-gradient(135deg, #f97316 0%, #ec4899 100%)",
    tint: "rgba(249, 115, 22, 0.10)",
  },
  {
    n: "05",
    t: "Optimize",
    d: "Measure, learn, double down on what's working.",
    icon: TrendingUp,
    gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    tint: "rgba(16, 185, 129, 0.10)",
  },
  {
    n: "06",
    t: "Automate",
    d: "Hand repeatable work to systems and AI.",
    icon: Bot,
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)",
    tint: "rgba(139, 92, 246, 0.10)",
  },
  {
    n: "07",
    t: "Scale",
    d: "Lift the ceiling — team, product, market.",
    icon: Rocket,
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    tint: "rgba(245, 158, 11, 0.10)",
  },
];

export function StrategicFramework() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Operating framework"
          title="How the work actually gets done."
          accent="actually gets done"
          description="A seven-step loop I use with founders and exec teams — from first conversation to compounding outcomes."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative flex h-64 flex-col justify-between overflow-hidden rounded-3xl glass p-6"
              >
                {/* Soft tint wash */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-60"
                  style={{ background: s.tint }}
                />

                {/* Gradient orb top-right */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-90 transition-transform duration-500 group-hover:scale-125"
                  style={{ background: s.gradient, filter: "blur(0.5px)" }}
                />
                {/* Inner concentric ring */}
                <div
                  className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full border border-white/40"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
                />
                {/* Icon centered on orb */}
                <div className="absolute right-3 top-3 flex h-14 w-14 items-center justify-center rounded-full">
                  <Icon className="h-6 w-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]" strokeWidth={2.25} />
                </div>

                {/* Content */}
                <div className="relative">
                  <span className="font-mono text-xs tracking-widest text-muted-foreground">
                    {s.n}
                  </span>
                </div>
                <div className="relative">
                  <h3 className="text-2xl font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
