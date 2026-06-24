import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Sparkles, Home, Users, Pencil, Briefcase } from "lucide-react";

// Scattered floating words — left = technology, right = business
const techWords = [
  { t: "GraphQL", x: 8, y: 8, r: -8, s: 22 },
  { t: "MySQL", x: 14, y: 22, r: 4, s: 26 },
  { t: "PostgreSQL", x: 4, y: 36, r: -6, s: 20 },
  { t: "MCP", x: 16, y: 50, r: 6, s: 28 },
  { t: "OpenAPI", x: 6, y: 64, r: -4, s: 22 },
  { t: "LangChain", x: 12, y: 78, r: 8, s: 20 },
  { t: "Next.js", x: 2, y: 92, r: -10, s: 18 },
];

const bizWords = [
  { t: "HTTP API", x: 8, y: 8, r: 8, s: 22 },
  { t: "Oracle", x: 4, y: 22, r: -4, s: 26 },
  { t: "Snowflake", x: 14, y: 36, r: 6, s: 22 },
  { t: "OpenAI", x: 2, y: 50, r: -8, s: 24 },
  { t: "MariaDB", x: 12, y: 64, r: 4, s: 20 },
  { t: "Strategy", x: 6, y: 78, r: -6, s: 22 },
  { t: "Revenue", x: 16, y: 92, r: 8, s: 18 },
];

// Lightweight knowledge base for the "ask me anything" engine
const knowledge: { tags: string[]; answer: string }[] = [
  {
    tags: ["ai", "ml", "llm", "gpt", "openai", "prompt", "agent", "rag", "automation"],
    answer:
      "I lead AI strategy end-to-end — from prompt engineering and LLM integration to AI agents, RAG knowledge systems and production automation woven into real products and operations.",
  },
  {
    tags: ["product", "head of product", "roadmap", "pm", "discovery", "spec"],
    answer:
      "As Head of Product, I run discovery → strategy → roadmap → delivery. I've shipped 50+ products across 20+ industries, balancing user research, business goals and engineering velocity.",
  },
  {
    tags: ["business", "consult", "strategy", "growth", "revenue", "gtm", "operations", "scale"],
    answer:
      "I work with founders and exec teams as a Business Consultant — sharpening strategy, fixing operations, designing growth engines and turning AI + product bets into measurable revenue.",
  },
  {
    tags: ["experience", "background", "company", "companies", "career", "history", "work"],
    answer:
      "6+ years across roles like Head of Product at Dynime Inc, leadership at Pixel Digi Solution and consulting engagements spanning startups, SaaS, fintech, healthcare and e-commerce.",
  },
  {
    tags: ["startup", "founder", "0 to 1", "mvp", "pmf", "seed"],
    answer:
      "I help founders go from 0→1 and 1→10 — validating the bet, shipping the smallest thing that proves it, then building the team, product and motion to scale.",
  },
  {
    tags: ["contact", "hire", "work with", "consult", "advisory", "book", "schedule", "email"],
    answer:
      "I'm available for advisory and consulting in 2026. Jump to the contact section or email hello@jitkumar.com to start a conversation.",
  },
  {
    tags: ["industry", "industries", "domain", "sector"],
    answer:
      "20+ industries served — SaaS, fintech, e-commerce, healthcare, edtech, logistics, real estate, media and AI-native startups.",
  },
];

function answerFor(q: string): string {
  const query = q.toLowerCase();
  let best = { score: 0, answer: "" };
  for (const k of knowledge) {
    const score = k.tags.reduce((s, t) => (query.includes(t) ? s + t.length : s), 0);
    if (score > best.score) best = { score, answer: k.answer };
  }
  if (best.score > 0) return best.answer;
  return "I focus on business strategy, product leadership and AI — ask about my experience, the industries I've worked in, how I run product, or how I deploy AI in real operations.";
}

const suggestions: { label: string; icon: typeof Home; style: string }[] = [
  { label: "AI Strategy", icon: Home, style: "chip-blue" },
  { label: "Product Leadership", icon: Users, style: "chip-emerald" },
  { label: "Business Consulting", icon: Pencil, style: "chip-orange" },
  { label: "Startup Growth", icon: Briefcase, style: "chip-violet" },
];

export function Hero() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);
  const reply = useMemo(() => (submitted ? answerFor(submitted) : ""), [submitted]);

  function submit(q?: string) {
    const value = (q ?? query).trim();
    if (!value) return;
    setQuery(value);
    setSubmitted(value);
  }

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-28">
      {/* Soft top wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(59,130,246,0.05), transparent 60%)",
        }}
      />

      {/* Scattered floating words */}
      <ScatterWords words={techWords} side="left" />
      <ScatterWords words={bizWords} side="right" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Eyebrow pill */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-2 text-[13px] text-foreground/80 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
            Jit Kumar Saha · Business · Product · AI
          </motion.div>
        </div>

        {/* Oversized centered headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mx-auto mt-10 max-w-5xl text-center text-5xl font-black leading-[1.02] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[92px]"
        >
          Building businesses
          <br /> that are baked to scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mx-auto mt-7 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Business Consultant, Head of Product and AI Strategist helping teams
          ship reliable products, real AI and growth engines — without the
          bottlenecks or fragile prototypes.
        </motion.p>

        {/* Ask-me-anything prompt card — tall textarea style */}
        <motion.form
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="relative mx-auto mt-12 max-w-3xl rounded-3xl border border-border bg-card shadow-[0_40px_80px_-40px_rgba(11,18,32,0.25)]"
        >
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            placeholder="Ask me anything about strategy, product or AI…"
            rows={4}
            className="block w-full resize-none rounded-3xl bg-transparent px-6 pt-6 pb-20 text-lg text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-2xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Ask Jit
            <ArrowUp className="h-4 w-4" />
          </button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-4 mb-4 rounded-2xl border border-border bg-background p-4 text-left"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" /> Answer
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground sm:text-base">
                {reply}
              </p>
            </motion.div>
          )}
        </motion.form>

        {/* Suggestion chips with icons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-2.5"
        >
          {suggestions.map(({ label, icon: Icon, style }) => (
            <button
              key={label}
              type="button"
              onClick={() => submit(label)}
              className={`${style} inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ScatterWords({
  words,
  side,
}: {
  words: { t: string; x: number; y: number; r: number; s: number }[];
  side: "left" | "right";
}) {
  return (
    <div
      className={`pointer-events-none absolute top-24 hidden h-[80%] w-[22%] md:block ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
      {words.map((w, i) => (
        <motion.span
          key={w.t}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: i * 0.08 },
            y: { duration: 6 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.2 },
          }}
          className="absolute font-display font-semibold tracking-tight text-foreground/15 whitespace-nowrap"
          style={{
            left: side === "left" ? `${w.x}%` : undefined,
            right: side === "right" ? `${w.x}%` : undefined,
            top: `${w.y}%`,
            transform: `rotate(${w.r}deg)`,
            fontSize: `${w.s}px`,
          }}
        >
          {w.t}
        </motion.span>
      ))}
    </div>
  );
}
