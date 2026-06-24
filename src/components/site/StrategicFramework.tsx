import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { n: "01", t: "Discover", d: "Get inside the business — context, customers, constraints." },
  { n: "02", t: "Analyze", d: "Find the real bottleneck, not the loudest one." },
  { n: "03", t: "Strategize", d: "Sharp choices, written down, agreed on." },
  { n: "04", t: "Build", d: "Ship the smallest thing that proves the bet." },
  { n: "05", t: "Optimize", d: "Measure, learn, double down on what's working." },
  { n: "06", t: "Automate", d: "Hand repeatable work to systems and AI." },
  { n: "07", t: "Scale", d: "Lift the ceiling — team, product, market." },
];

export function StrategicFramework() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Operating framework"
          title="How the work actually gets done."
          description="A seven-step loop I use with founders and exec teams — from first conversation to compounding outcomes."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl glass p-6"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-xs tracking-widest text-muted-foreground">
                  {s.n}
                </span>
                <span className="h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              <div
                className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                style={{ background: "var(--gradient-brand)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
