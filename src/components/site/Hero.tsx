import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Sparkles,
  Home,
  Users,
  Pencil,
  Briefcase,
  Database,
  Boxes,
  Cpu,
  Cloud,
  Network,
  Code2,
  Workflow,
  LineChart,
  Brain,
  Rocket,
  Target,
  Layers,
  Plug,
  ServerCog,
} from "lucide-react";

type Skill = { t: string; c: string; Icon: typeof Home };

const techSkills: Skill[] = [
  { t: "AI", c: "#10a37f", Icon: Brain },
  { t: "SaaS", c: "#3b82f6", Icon: Cloud },
  { t: "Cloud", c: "#0ea5e9", Icon: Cloud },
  { t: "Data", c: "#6366f1", Icon: Database },
  { t: "Apps", c: "#8b5cf6", Icon: Boxes },
  { t: "APIs", c: "#e10098", Icon: Network },
  { t: "CRM", c: "#f97316", Icon: Users },
  { t: "ERP", c: "#ef4444", Icon: ServerCog },
  { t: "DevOps", c: "#22c55e", Icon: Workflow },
  { t: "React", c: "#61dafb", Icon: Code2 },
  { t: "Next.js", c: "#0b1220", Icon: Code2 },
  { t: "Node.js", c: "#339933", Icon: Cpu },
  { t: "UX", c: "#a855f7", Icon: Pencil },
  { t: "SEO", c: "#eab308", Icon: LineChart },
  { t: "Security", c: "#dc2626", Icon: Plug },
  { t: "Automation", c: "#0891b2", Icon: Workflow },
  { t: "Analytics", c: "#16a34a", Icon: LineChart },
  { t: "Platforms", c: "#7c3aed", Icon: Layers },
  { t: "Products", c: "#f59e0b", Icon: Boxes },
  { t: "Systems", c: "#0f766e", Icon: ServerCog },
  { t: "Innovation", c: "#ec4899", Icon: Rocket },
  { t: "No Code", c: "#14b8a6", Icon: Layers },
  { t: "Low Code", c: "#0284c7", Icon: Layers },
  { t: "Vibe Code", c: "#d946ef", Icon: Sparkles },
  { t: "Lovable", c: "#ff4d8d", Icon: Sparkles },
  { t: "Supabase", c: "#3ecf8e", Icon: Database },
  { t: "Replit", c: "#f26207", Icon: Code2 },
  { t: "Laravel", c: "#ff2d20", Icon: Code2 },
];

const bizSkills: Skill[] = [
  { t: "AI Strategy", c: "#3b82f6", Icon: Brain },
  { t: "Product Leadership", c: "#10b981", Icon: Boxes },
  { t: "Growth Engines", c: "#8b5cf6", Icon: Rocket },
  { t: "GTM Strategy", c: "#f97316", Icon: Target },
  { t: "Operations", c: "#0ea5e9", Icon: Cpu },
  { t: "Roadmapping", c: "#ef4444", Icon: Layers },
  { t: "Revenue Ops", c: "#22c55e", Icon: LineChart },
  { t: "0 → 1 Build", c: "#a855f7", Icon: Rocket },
  { t: "Advisory", c: "#06b6d4", Icon: Workflow },
  { t: "Scale Ops", c: "#eab308", Icon: ServerCog },
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

      <SkillColumn skills={techSkills} side="left" />
      <SkillColumn skills={bizSkills} side="right" />


      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center">
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

function SkillColumn({
  skills,
  side,
}: {
  skills: Skill[];
  side: "left" | "right";
}) {
  const ITEM_H = 44; // px per row
  const VISIBLE = 9; // visible rows (taller column)
  const COL_H = ITEM_H * VISIBLE;
  const CENTER = Math.floor(VISIBLE / 2); // slot index of highlight

  // Triple the list and start from the middle copy so the visible window is
  // fully populated on first paint AND we can snap forward/back invisibly.
  const N = skills.length;
  const loop = [...skills, ...skills, ...skills];

  const [step, setStep] = useState(N); // start in the middle copy
  const [snap, setSnap] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setSnap(false);
      setStep((s) => s + 1);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`pointer-events-none absolute top-1/2 z-0 hidden -translate-y-1/2 md:block ${
        side === "left" ? "left-4 lg:left-10" : "right-4 lg:right-10"
      }`}
      style={{ height: COL_H, width: 220 }}
    >



      {/* fade mask top/bottom */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 28%, #000 72%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 28%, #000 72%, transparent 100%)",
        }}
      >
        <motion.ul
          initial={false}
          animate={{ y: CENTER * ITEM_H - step * ITEM_H }}
          transition={snap ? { duration: 0 } : { duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
          onAnimationComplete={() => {
            // Once we've drifted into the third copy, snap back by N silently.
            if (step >= 2 * N) {
              setSnap(true);
              setStep((s) => s - N);
            }
          }}
          className="absolute inset-x-0 top-0 m-0 list-none p-0"
        >
          {loop.map((s, i) => {
            const isActive = i === step;
            const { Icon } = s;
            // Gentle parenthesis curve — items farther from the highlighted
            // row sit closer to page center; the active row sits at the edge.
            const dist = Math.abs(i - step);
            const curveX =
              dist >= 1 && dist <= CENTER
                ? (side === "left" ? 1 : -1) * (dist * dist * 4 + 2)
                : 0;
            return (
              <li
                key={`${s.t}-${i}`}
                style={{ height: ITEM_H, transform: `translateX(${curveX}px)`, transition: "transform 600ms cubic-bezier(0.2,0.8,0.2,1)" }}
                className={`flex items-center ${
                  side === "left" ? "justify-start pl-3" : "justify-end pr-3"
                }`}
              >
                {isActive ? (
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-medium ${
                      side === "left" ? "flex-row" : "flex-row-reverse"
                    }`}
                    style={{
                      backgroundColor: `${s.c}14`,
                      color: s.c,
                      boxShadow: `inset 0 0 0 1px ${s.c}33`,
                    }}
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: s.c }} />
                    <span className="whitespace-nowrap">{s.t}</span>
                  </span>
                ) : (
                  <span
                    className="whitespace-nowrap text-[11px] font-medium tracking-tight"
                    style={{ color: "rgba(11,18,32,0.32)" }}
                  >
                    {s.t}
                  </span>
                )}
              </li>
            );
          })}
        </motion.ul>
      </div>


      {/* chevron pointer toward the search card (aligned with highlight row) */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 select-none font-mono text-xs text-muted-foreground/30 ${
          side === "left" ? "left-full ml-2" : "right-full mr-2"
        }`}
      >
        {side === "left" ? "›››››" : "‹‹‹‹‹"}
      </div>
    </div>
  );
}

