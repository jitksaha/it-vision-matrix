import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { TiltCard } from "./primitives";

const industries = [
  "Technology", "SaaS", "Fintech", "E-Commerce", "Digital Agencies",
  "Professional Services", "Consulting", "Startups", "SMEs", "Enterprise",
];

export function Industries() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Industries"
          title="Built across the modern economy."
          description="Pattern recognition across ten verticals — and the discipline to know when patterns don't apply."
        />

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              style={{ perspective: 1000 }}
            >
              <TiltCard className="aspect-square">
                <div className="flex h-full w-full flex-col justify-between rounded-2xl glass p-4 transition-colors hover:bg-white/[0.06]">
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base font-semibold tracking-tight">{ind}</span>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
