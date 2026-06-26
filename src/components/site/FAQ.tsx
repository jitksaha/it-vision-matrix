import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type FAQ = { q: string; a: string };

const categories: { key: string; label: string; items: FAQ[] }[] = [
  {
    key: "leadership",
    label: "Business Leadership",
    items: [
      {
        q: "What's your approach to scaling a product organization?",
        a: "Start with operating cadence, not headcount. I define the weekly rhythm — planning, review, retro — and the small set of metrics each layer owns. Hiring follows the cadence, not the other way around. The org chart is an output, not a strategy.",
      },
      {
        q: "How do you align product, engineering and business teams?",
        a: "One quarterly bet sheet, three lines per bet: the customer problem, the metric that moves, the constraint we accept. Every team reads the same page. Disagreements become explicit trade-offs instead of background noise.",
      },
      {
        q: "When should a founder hire a Head of Product?",
        a: "When the founder has stopped being the sharpest user of their own product, or when discovery, delivery and go-to-market start contradicting each other in public. Before that, a strong PM and a clear roadmap will do.",
      },
    ],
  },
  {
    key: "ai",
    label: "AI Transformation",
    items: [
      {
        q: "Where does AI actually change unit economics?",
        a: "In the cost of a unit of judgment — support triage, content ops, sales research, code review. The win isn't 'AI features'; it's quietly removing 30–60% of the cost-to-serve in workflows the customer never sees.",
      },
      {
        q: "How do you start an AI transformation without wasting budget?",
        a: "Pick one workflow with a clean baseline metric and a single owner. Ship a thin agent into it in 2–3 weeks. Measure against the baseline. Only then write the strategy doc — the deck after the first win is worth ten before it.",
      },
      {
        q: "Build vs buy for AI tooling?",
        a: "Buy the model, the eval harness and the boring infra. Build the prompts, the data plumbing and the workflow glue. Anything proprietary about your business should live in the layer you own, not inside a vendor's product roadmap.",
      },
    ],
  },
  {
    key: "consulting",
    label: "Working Together",
    items: [
      {
        q: "What does an engagement typically look like?",
        a: "A 2-week diagnostic, a written 30/60/90 plan, then a 3–6 month operating partnership where I sit inside the team — not next to it. Fractional Head of Product, AI strategy, or both, depending on what's actually broken.",
      },
      {
        q: "Which industries do you work across?",
        a: "SaaS, e-commerce, fintech, edtech, healthtech, logistics, media and services businesses going through a digital reset. The patterns rhyme more than founders expect; the specifics are where the work is.",
      },
    ],
  },
];

export function FAQ() {
  const [active, setActive] = useState(categories[0].key);
  const [open, setOpen] = useState<string | null>(`${categories[0].key}-0`);
  const current = categories.find((c) => c.key === active)!;

  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title="Questions founders actually ask."
          accent="founders actually ask."
          description="A short read on how I think about leadership, AI and the work itself."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[280px_1fr]">
          {/* Tabs */}
          <div
            role="tablist"
            aria-orientation="vertical"
            className="flex flex-row gap-2 overflow-x-auto lg:flex-col lg:overflow-visible"
          >
            {categories.map((c, i) => {
              const isActive = c.key === active;
              return (
                <button
                  key={c.key}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActive(c.key);
                    setOpen(`${c.key}-0`);
                  }}
                  className={`group relative flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                    isActive
                      ? "border-foreground/10 bg-foreground text-background shadow-[0_10px_30px_-15px_rgba(0,0,0,0.4)]"
                      : "border-foreground/8 bg-white/40 text-foreground hover:bg-white"
                  }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    0{i + 1}
                  </span>
                  <span className="text-sm font-semibold tracking-tight">
                    {c.label}
                  </span>
                  <span
                    className={`ml-auto font-mono text-[10px] ${
                      isActive ? "text-background/60" : "text-muted-foreground"
                    }`}
                  >
                    {c.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {current.items.map((item, i) => {
                const id = `${current.key}-${i}`;
                const isOpen = open === id;
                return (
                  <div
                    key={id}
                    className={`overflow-hidden rounded-2xl border transition-colors ${
                      isOpen
                        ? "border-foreground/15 bg-white"
                        : "border-foreground/8 bg-white/50 hover:bg-white"
                    }`}
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : id)}
                      className="flex w-full items-start gap-4 px-5 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="mt-0.5 font-mono text-[10px] text-muted-foreground">
                        Q{String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-base font-semibold tracking-tight">
                        {item.q}
                      </span>
                      <Plus
                        className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <p className="px-5 pb-5 pl-[3.25rem] text-sm leading-relaxed text-muted-foreground">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
