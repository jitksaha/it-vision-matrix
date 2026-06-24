import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Sparkles, Search } from "lucide-react";

// Scrolling word columns — left = technology, right = business
const techWords = [
  "GraphQL", "MySQL", "PostgreSQL", "MCP", "OpenAPI",
  "Next.js", "React", "TypeScript", "Node.js", "Python",
  "LangChain", "OpenAI", "Anthropic", "Vector DB", "RAG",
  "Supabase", "Firebase", "Docker", "Kubernetes", "AWS",
  "n8n", "Zapier", "Make", "Webhooks", "REST APIs",
];

const bizWords = [
  "HTTP API", "Oracle", "Snowflake", "MariaDB", "OpenAI",
  "Strategy", "Product", "Growth", "GTM", "Revenue",
  "Operations", "Consulting", "Leadership", "Roadmap", "OKRs",
  "Fundraising", "B2B SaaS", "Enterprise", "Startups", "Scale-ups",
  "Analytics", "Retention", "Pricing", "Partnerships", "M&A",
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

const suggestions = [
  "AI Strategy",
  "Product Leadership",
  "Business Consulting",
  "Startup Growth",
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
      {/* Subtle radial fade */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.06), transparent 60%)",
        }}
      />

      {/* Scrolling side columns */}
      <ScrollColumn words={techWords} side="left" />
      <ScrollColumn words={bizWords} side="right" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Eyebrow pill */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground shadow-sm"
          >
            <span className="relative grid h-1.5 w-1.5 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Jit Kumar Saha · Business · Product · AI
          </motion.div>
        </div>

        {/* Oversized centered headline — UI Bakery style */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mx-auto mt-8 max-w-5xl text-center text-5xl font-black leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[88px]"
        >
          Building businesses
          <br className="hidden sm:block" /> that are baked to scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Business Consultant, Head of Product and AI Strategist helping teams
          ship reliable products, real AI and growth engines — without the
          bottlenecks or fragile prototypes.
        </motion.p>

        {/* Ask-me-anything prompt card */}
        <motion.form
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="relative mx-auto mt-12 max-w-3xl rounded-3xl border border-border bg-card p-4 shadow-[0_30px_60px_-30px_rgba(11,18,32,0.22)]"
        >
          <div className="flex items-start gap-3 px-3 pt-3">
            <Search className="mt-1 h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask me anything — AI strategy, product leadership, growth…"
              className="flex-1 bg-transparent text-base text-foreground placeholder:text-muted-foreground/80 focus:outline-none sm:text-lg"
            />
          </div>

          <div className="mt-4 flex items-center justify-between px-3 pb-1">
            <p className="hidden text-xs text-muted-foreground sm:block">
              Powered by Jit's knowledge graph
            </p>
            <button
              type="submit"
              className="ml-auto inline-flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Ask Jit
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-2xl border border-border bg-background p-4 text-left"
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

        {/* Suggestion chips */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-2"
        >
          {suggestions.map((s, i) => {
            const styles = ["chip-blue", "chip-emerald", "chip-violet", "chip-orange"];
            return (
              <button
                key={s}
                type="button"
                onClick={() => submit(s)}
                className={`${styles[i % styles.length]} inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium transition-transform hover:-translate-y-0.5`}
              >
                {s}
              </button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ScrollColumn({ words, side }: { words: string[]; side: "left" | "right" }) {
  const doubled = [...words, ...words];
  return (
    <div
      className={`pointer-events-none absolute top-0 hidden h-full w-40 md:block ${
        side === "left" ? "left-0" : "right-0"
      }`}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
      }}
    >
      <motion.div
        animate={{ y: side === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        className="flex flex-col gap-6 py-8 text-center"
      >
        {doubled.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="font-mono text-sm tracking-tight text-muted-foreground/60"
          >
            {w}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
