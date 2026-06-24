import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const skills = [
  "AI Strategy",
  "Generative AI",
  "Prompt Engineering",
  "Business Automation",
  "AI Agents",
  "Workflow Optimization",
  "Decision Intelligence",
  "LLM Integration",
  "AI Product Development",
  "Knowledge Systems",
  "Digital Transformation",
];

export function AIExpertise() {
  return (
    <section id="ai" className="relative overflow-hidden py-32">
      <NeuralBackground />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader
          eyebrow="AI expertise"
          title="From prompts to production AI."
          description="Not demos. Real AI woven into products, operations and decision making."
        />

        <div className="mt-16 flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="rounded-full border border-border bg-secondary px-4 py-2 text-sm text-foreground backdrop-blur-md transition-colors hover:border-foreground/20 hover:bg-secondary"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

function NeuralBackground() {
  const nodes = [
    [10, 20], [25, 60], [40, 30], [55, 70], [70, 25], [85, 55],
    [15, 80], [50, 15], [75, 80], [90, 35], [30, 45], [60, 50],
  ];
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="nb-fade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="nb-mask">
          <rect width="100" height="100" fill="url(#nb-fade)" />
        </mask>
      </defs>
      <g mask="url(#nb-mask)" stroke="oklch(0.78 0.16 220)" strokeWidth="0.08" fill="none">
        {nodes.flatMap((a, i) =>
          nodes.slice(i + 1).map((b, j) => {
            const dx = a[0] - b[0];
            const dy = a[1] - b[1];
            const d = Math.hypot(dx, dy);
            if (d > 35) return null;
            return (
              <motion.line
                key={`${i}-${j}`}
                x1={a[0]}
                y1={a[1]}
                x2={b[0]}
                y2={b[1]}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: (i + j) * 0.04 }}
              />
            );
          }),
        )}
      </g>
      <g mask="url(#nb-mask)">
        {nodes.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="0.6"
            fill="white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          />
        ))}
      </g>
    </svg>
  );
}
