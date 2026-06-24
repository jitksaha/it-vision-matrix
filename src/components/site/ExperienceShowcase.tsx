import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Role = {
  role: string;
  company: string;
  period: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  impact: string;
};

const roles: Role[] = [
  {
    role: "Head of Product",
    company: "Dynime Inc.",
    period: "Present",
    summary: "Leading product strategy, roadmap, and execution across a multi-team organization.",
    responsibilities: [
      "Set product vision and quarterly roadmap",
      "Lead product, design and engineering cadence",
      "Own discovery, prioritization and delivery",
      "Embed AI capabilities into the product surface",
    ],
    achievements: [
      "Restructured discovery → delivery into a single operating system",
      "Shipped AI-assisted workflows used daily by core users",
      "Aligned GTM, success and engineering on a unified roadmap",
    ],
    impact: "Faster shipping, sharper bets, and a product team that compounds.",
  },
  {
    role: "Business Management Executive",
    company: "Pixel Digi Solution Inc.",
    period: "2023 — 2024",
    summary: "P&L responsibility across operations, delivery and growth.",
    responsibilities: [
      "Operations, delivery and revenue accountability",
      "Hiring, performance and team development",
      "Client strategy and account expansion",
    ],
    achievements: [
      "Improved on-time delivery and account retention",
      "Standardized operating processes across functions",
    ],
    impact: "Predictable delivery and healthier accounts.",
  },
  {
    role: "Project Manager",
    company: "Webleez Limited",
    period: "2022 — 2023",
    summary: "Multi-team delivery across web, commerce and product engagements.",
    responsibilities: [
      "Scope, timeline, quality and stakeholder comms",
      "Cross-functional coordination",
      "Risk and dependency management",
    ],
    achievements: [
      "Delivered concurrent projects across industries",
      "Introduced clearer reporting and delivery rituals",
    ],
    impact: "Clearer trade-offs, fewer surprises, happier clients.",
  },
  {
    role: "Sales & Support Specialist",
    company: "Bluesky Communication Ltd.",
    period: "2021 — 2022",
    summary: "Customer-facing role spanning sales and post-sale success.",
    responsibilities: [
      "Customer acquisition and onboarding",
      "Account management and renewals",
      "Front-line problem solving",
    ],
    achievements: [
      "Built customer relationships that turned into long-term accounts",
    ],
    impact: "Foundation for thinking in customer outcomes, not features.",
  },
  {
    role: "WordPress & Shopify Developer",
    company: "Vision Ads 360",
    period: "2020 — 2021",
    summary: "Commerce and CMS builds for brands and agencies.",
    responsibilities: [
      "Theme & store builds",
      "Integrations, performance, conversion",
      "Client communication & QA",
    ],
    achievements: [
      "Delivered stores and sites for diverse client portfolios",
    ],
    impact: "A practitioner's view of how online businesses actually run.",
  },
  {
    role: "Freelance Developer",
    company: "Upwork",
    period: "2019 — 2020",
    summary: "Independent client work across the web stack.",
    responsibilities: [
      "Direct client discovery and scoping",
      "End-to-end build and ship",
    ],
    achievements: [
      "Maintained top-rated standing with global clients",
    ],
    impact: "Learned to sell, scope, build and deliver — solo.",
  },
];

export function ExperienceShowcase() {
  const [open, setOpen] = useState<Role | null>(null);

  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Real roles. Real outcomes."
          description="Six chapters of operating experience — each one click-through to the details."
        />

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {roles.map((r, i) => (
            <motion.button
              key={r.role}
              type="button"
              onClick={() => setOpen(r)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-3xl glass p-6 text-left transition-all hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {r.period}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{r.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.company}</p>
                </div>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full glass transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 backdrop-blur-md"
            onClick={() => setOpen(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl glass-strong p-8"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {open.period}
              </p>
              <h3 className="mt-2 text-3xl font-semibold tracking-tight">{open.role}</h3>
              <p className="mt-1 text-muted-foreground">{open.company}</p>
              <p className="mt-6 text-sm leading-relaxed">{open.summary}</p>

              <Block title="Responsibilities" items={open.responsibilities} />
              <Block title="Achievements" items={open.achievements} />

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Business impact
                </p>
                <p className="mt-2 text-sm leading-relaxed">{open.impact}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-6">
      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex gap-3 text-sm text-foreground">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/60" />
            <span className="text-muted-foreground">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
