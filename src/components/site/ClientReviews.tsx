import { motion } from "framer-motion";
import { MessageSquareQuote, ArrowRight } from "lucide-react";

type Note = {
  q: string;
  author?: string;
  date?: string;
  tone: "white" | "blue" | "dark" | "green" | "orange";
  rotate: number;
  /** vertical position within its column, in % */
  top: string;
  width?: string;
};

const leftNotes: Note[] = [
  {
    q: "Jit reshaped our product org in 6 weeks — clearer bets, faster shipping, real accountability.",
    author: "CEO, SaaS scale-up",
    tone: "white",
    rotate: -4,
    top: "2%",
  },
  {
    q: "He doesn't just advise — he builds the agentic workflow with you, end to end.",
    author: "Founder, AI startup",
    date: "May 02, 2026",
    tone: "blue",
    rotate: -2,
    top: "32%",
  },
  {
    q: "Migrated us from Retool to a clean, scalable internal tool — workflows finally make sense.",
    author: "Head of Ops",
    tone: "white",
    rotate: 3,
    top: "60%",
  },
  {
    q: "0→1 launch in 5 weeks. Strategy, product, GTM — one operator, no theatre.",
    author: "Founder, B2B SaaS",
    tone: "green",
    rotate: -5,
    top: "84%",
  },
];

const rightNotes: Note[] = [
  {
    q: "Connect Stripe, automate billing, ship a customer portal — done in one sprint with Jit.",
    date: "Jun 12, 2026",
    tone: "orange",
    rotate: 5,
    top: "4%",
  },
  {
    q: "Created a Sales CRM with lead tracking, deal stages and a real KPI dashboard in days.",
    date: "Apr 24, 2026",
    tone: "dark",
    rotate: 3,
    top: "28%",
  },
  {
    q: "Frontier-model fluency, but with a business head on. Rare combo.",
    author: "VP Product, fintech",
    tone: "white",
    rotate: -3,
    top: "58%",
  },
  {
    q: "Built our internal operations dashboard with real-time charts and drill-downs.",
    date: "Mar 18, 2026",
    tone: "blue",
    rotate: 4,
    top: "82%",
  },
];

const toneStyles: Record<Note["tone"], string> = {
  white: "bg-white text-foreground border border-border shadow-[0_18px_40px_-22px_rgba(11,18,32,0.22)]",
  blue: "bg-[#2563eb] text-white shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)]",
  dark: "bg-[#1f2937] text-white shadow-[0_18px_40px_-18px_rgba(15,23,42,0.55)]",
  green: "bg-[#16a34a] text-white shadow-[0_18px_40px_-18px_rgba(22,163,74,0.45)]",
  orange: "bg-[#ea580c] text-white shadow-[0_18px_40px_-18px_rgba(234,88,12,0.45)]",
};

function NoteCard({ n, i, align }: { n: Note; i: number; align: "left" | "right" }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: n.rotate }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.55, delay: 0.05 + i * 0.06, ease: "easeOut" }}
      style={{ top: n.top }}
      className={`absolute w-[15rem] xl:w-[17rem] ${
        align === "left" ? "left-0" : "right-0"
      }`}
    >
      {n.date && (
        <figcaption className="mb-1.5 text-right font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
          {n.date}
        </figcaption>
      )}
      <div className={`rounded-lg px-4 py-3 text-[13px] leading-snug ${toneStyles[n.tone]}`}>
        <p>{n.q}</p>
        {n.author && (
          <p
            className={`mt-2 text-[11px] font-medium ${
              n.tone === "white" ? "text-muted-foreground" : "text-white/75"
            }`}
          >
            — {n.author}
          </p>
        )}
      </div>
    </motion.figure>
  );
}

export function ClientReviews() {
  return (
    <section id="reviews" className="relative overflow-hidden py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[16rem_1fr_16rem] xl:grid-cols-[18rem_1fr_18rem] lg:gap-8">
          {/* Left column (desktop) */}
          <div className="relative hidden h-[760px] lg:block">
            {leftNotes.map((n, i) => (
              <NoteCard key={i} n={n} i={i} align="left" />
            ))}
          </div>

          {/* Centered content */}
          <div className="relative flex flex-col items-center justify-center text-center lg:py-16">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand"
            >
              <MessageSquareQuote className="h-3.5 w-3.5" />
              Reviews
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-5 text-3xl font-black leading-[1.35] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[44px]"
            >
              What clients say after we ship.{" "}
              <span className="rounded-sm bg-[#d0d1ff] px-1.5 box-decoration-clone">
                Real outcomes from real teams — not pull quotes.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              Founders, operators and product leaders I've worked with — on AI bets,
              product launches, GTM motions and the messy middle in between.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Read more stories
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>

          {/* Right column (desktop) */}
          <div className="relative hidden h-[760px] lg:block">
            {rightNotes.map((n, i) => (
              <NoteCard key={i} n={n} i={i} align="right" />
            ))}
          </div>
        </div>

        {/* Mobile / tablet fallback — simple grid of notes below CTA */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {[...leftNotes, ...rightNotes].slice(0, 6).map((n, i) => (
            <div key={i} className={`rounded-lg px-4 py-3 text-[13px] leading-snug ${toneStyles[n.tone]}`}>
              {n.date && (
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
                  {n.date}
                </p>
              )}
              <p>{n.q}</p>
              {n.author && (
                <p className={`mt-2 text-[11px] font-medium ${
                  n.tone === "white" ? "text-muted-foreground" : "text-white/75"
                }`}>
                  — {n.author}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
