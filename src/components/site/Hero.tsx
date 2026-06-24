import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Sparkles, Home, Users, Pencil, Briefcase } from "lucide-react";

// Words on a deep arc with a small colored brand dot — left arc bulges right, right arc bulges left.
const techArc = [
  { t: "GraphQL", y: 4, x: 58, r: -28, c: "#e10098" },
  { t: "MySQL", y: 20, x: 36, r: -18, c: "#00758f" },
  { t: "PostgreSQL", y: 38, x: 20, r: -6, c: "#336791" },
  { t: "MCP", y: 56, x: 20, r: 6, c: "#000000" },
  { t: "OpenAPI", y: 74, x: 36, r: 18, c: "#6ba539" },
  { t: "LangChain", y: 92, x: 58, r: 28, c: "#1c3c3c" },
];

const bizArc = [
  { t: "HTTP API", y: 4, x: 58, r: 28, c: "#0ea5e9" },
  { t: "Oracle", y: 20, x: 36, r: 18, c: "#f80000" },
  { t: "Snowflake", y: 38, x: 20, r: 6, c: "#29b5e8" },
  { t: "OpenAI", y: 56, x: 20, r: -6, c: "#10a37f" },
  { t: "MariaDB", y: 74, x: 36, r: -18, c: "#003545" },
  { t: "Strategy", y: 92, x: 58, r: -28, c: "#8b5cf6" },
];

const knowledge: { tags: string[]; answer: string }[] = [
  { tags: ["ai", "ml", "llm", "gpt", "openai", "prompt", "agent", "rag", "automation"], answer: "I lead AI strategy end-to-end — from prompt engineering and LLM integration to AI agents, RAG knowledge systems and production automation woven into real products and operations." },
  { tags: ["product", "head of product", "roadmap", "pm", "discovery", "spec"], answer: "As Head of Product, I run discovery → strategy → roadmap → delivery. I've shipped 50+ products across 20+ industries, balancing user research, business goals and engineering velocity." },
  { tags: ["business", "consult", "strategy", "growth", "revenue", "gtm", "operations", "scale"], answer: "I work with founders and exec teams as a Business Consultant — sharpening strategy, fixing operations, designing growth engines and turning AI + product bets into measurable revenue." },
  { tags: ["experience", "background", "company", "companies", "career", "history", "work"], answer: "6+ years across roles like Head of Product at Dynime Inc, leadership at Pixel Digi Solution and consulting engagements spanning startups, SaaS, fintech, healthcare and e-commerce." },
  { tags: ["startup", "founder", "0 to 1", "mvp", "pmf", "seed"], answer: "I help founders go from 0→1 and 1→10 — validating the bet, shipping the smallest thing that proves it, then building the team, product and motion to scale." },
  { tags: ["contact", "hire", "work with", "consult", "advisory", "book", "schedule", "email"], answer: "I'm available for advisory and consulting in 2026. Email hello@jitkumar.com to start a conversation." },
  { tags: ["industry", "industries", "domain", "sector"], answer: "20+ industries served — SaaS, fintech, e-commerce, healthcare, edtech, logistics, real estate, media and AI-native startups." },
];

function answerFor(q: string): string {
  const query = q.toLowerCase();
  let best = { score: 0, answer: "" };
  for (const k of knowledge) {
    const score = k.tags.reduce((s, t) => (query.includes(t) ? s + t.length : s), 0);
    if (score > best.score) best = { score, answer: k.answer };
  }
  if (best.score > 0) return best.answer;
  return "I focus on business strategy, product leadership and AI — ask about my experience, the industries I've worked in, or how I deploy AI in real operations.";
}

const suggestions = [
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
    const v = (q ?? query).trim();
    if (!v) return;
    setQuery(v);
    setSubmitted(v);
  }

  return (
    <section
      id="top"
      className="relative flex max-h-screen min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Soft top wash */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 35%, rgba(59,130,246,0.05), transparent 60%)",
        }}
      />

      <ArcWords words={techArc} side="left" />
      <ArcWords words={bizArc} side="right" />

      {/* Horizontal chevron connector — runs across the hero through the search card */}
      <div className="pointer-events-none absolute inset-x-0 top-[58%] hidden select-none md:flex justify-between px-6 text-muted-foreground/30">
        <div className="flex items-center gap-2 font-mono text-xs">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={`l-${i}`}>›</span>
          ))}
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={`r-${i}`}>›</span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-foreground/70 shadow-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
          Jit Kumar Saha · Business · Product · AI
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mt-6 max-w-4xl text-center text-4xl font-black leading-[1.04] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[60px]"
        >
          Building businesses
          <br /> that are baked to scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          Business Consultant, Head of Product and AI Strategist helping teams
          ship reliable products, real AI and growth engines.
        </motion.p>

        {/* Prompt card */}
        <motion.form
          initial={{ opacity: 0, y: 14, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="relative mt-6 w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-30px_rgba(11,18,32,0.22)]"
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
            rows={2}
            className="block w-full resize-none bg-transparent px-5 pt-5 pb-16 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Ask Jit
            <ArrowUp className="h-3.5 w-3.5" />
          </button>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-3 mb-3 rounded-xl border border-border bg-background p-3 text-left"
            >
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                <Sparkles className="h-3 w-3" /> Answer
              </div>
              <p className="mt-1 text-sm leading-relaxed text-foreground">{reply}</p>
            </motion.div>
          )}
        </motion.form>

        {/* Chips */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
        >
          {suggestions.map(({ label, icon: Icon, style }) => (
            <button
              key={label}
              type="button"
              onClick={() => submit(label)}
              className={`${style} inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-transform hover:-translate-y-0.5`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Section bottom border — single color, faded edges */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, transparent 15%, rgba(11,18,32,0.18) 50%, transparent 85%, transparent 100%)",
        }}
      />
    </section>
  );
}

function ArcWords({
  words,
  side,
}: {
  words: { t: string; x: number; y: number; r: number; c: string }[];
  side: "left" | "right";
}) {
  return (
    <div
      className={`pointer-events-none absolute top-20 hidden h-[calc(100%-5rem)] w-[28%] md:block ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
      {words.map((w, i) => (
        <motion.span
          key={w.t}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.8, delay: i * 0.08 },
            y: { duration: 6 + (i % 3), repeat: Infinity, ease: "easeInOut", delay: i * 0.25 },
          }}
          className="absolute flex items-center gap-1.5 font-display text-[11px] font-medium tracking-tight whitespace-nowrap"
          style={{
            left: side === "left" ? `${w.x}%` : undefined,
            right: side === "right" ? `${w.x}%` : undefined,
            top: `${w.y}%`,
            transform: `rotate(${w.r}deg)`,
            color: "rgba(11, 18, 32, 0.38)",
          }}
        >
          {side === "left" ? (
            <>
              <span>{w.t}</span>
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: w.c, opacity: 0.55 }}
              />
            </>
          ) : (
            <>
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: w.c, opacity: 0.55 }}
              />
              <span>{w.t}</span>
            </>
          )}
        </motion.span>
      ))}
    </div>
  );
}
