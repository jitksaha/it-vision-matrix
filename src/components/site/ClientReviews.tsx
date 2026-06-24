import { motion } from "framer-motion";
import { MessageSquareQuote, ArrowRight } from "lucide-react";

type Note = {
  q: string;
  author?: string;
  date?: string;
  tone: "white" | "blue" | "dark" | "green" | "orange";
  /** position: top%, left% (or right%) */
  top: string;
  left?: string;
  right?: string;
  rotate: number;
  width: string;
  hideOn?: "sm" | "md";
};

const notes: Note[] = [
  {
    q: "Jit reshaped our product org in 6 weeks — clearer bets, faster shipping, real accountability.",
    author: "CEO, SaaS scale-up",
    tone: "white",
    top: "6%",
    left: "2%",
    rotate: -4,
    width: "18rem",
  },
  {
    q: "Connect Stripe, automate billing, ship a customer portal — done in one sprint with Jit.",
    date: "Jun 12, 2026",
    tone: "orange",
    top: "4%",
    right: "3%",
    rotate: 5,
    width: "17rem",
    hideOn: "md",
  },
  {
    q: "He doesn't just advise — he builds the agentic workflow with you, end to end.",
    author: "Founder, AI startup",
    date: "May 02, 2026",
    tone: "blue",
    top: "32%",
    left: "1%",
    rotate: -2,
    width: "16rem",
    hideOn: "sm",
  },

  {
    q: "Created a Sales CRM with lead tracking, deal stages and a real KPI dashboard in days.",
    date: "Apr 24, 2026",
    tone: "dark",
    top: "20%",
    right: "1%",
    rotate: 3,
    width: "19rem",
  },
  {
    q: "Migrated us from Retool to a clean, scalable internal tool — workflows finally make sense.",
    author: "Head of Ops",
    tone: "white",
    top: "44%",
    left: "1%",
    rotate: -3,
    width: "17rem",
  },
  {
    q: "HubSpot, Stripe, the data warehouse — Jit wired it all together and our revenue ops just works.",
    tone: "green",
    top: "62%",
    left: "3%",
    rotate: 4,
    width: "16rem",
    hideOn: "md",
  },
  {
    q: "Frontier-model fluency, but with a business head on. Rare combo.",
    author: "VP Product, fintech",
    tone: "white",
    top: "58%",
    right: "4%",
    rotate: -5,
    width: "16rem",
  },
  {
    q: "Built our internal operations dashboard with real-time charts and drill-downs.",
    date: "Mar 18, 2026",
    tone: "white",
    top: "78%",
    right: "12%",
    rotate: 2,
    width: "17rem",
    hideOn: "sm",
  },
  {
    q: "0→1 launch in 5 weeks. Strategy, product, GTM — one operator, no theatre.",
    author: "Founder, B2B SaaS",
    tone: "blue",
    top: "82%",
    left: "22%",
    rotate: -6,
    width: "18rem",
    hideOn: "sm",
  },
];

const toneStyles: Record<Note["tone"], string> = {
  white: "bg-white text-foreground border border-border shadow-[0_18px_40px_-22px_rgba(11,18,32,0.22)]",
  blue: "bg-[#2563eb] text-white shadow-[0_18px_40px_-18px_rgba(37,99,235,0.55)]",
  dark: "bg-[#1f2937] text-white shadow-[0_18px_40px_-18px_rgba(15,23,42,0.55)]",
  green: "bg-[#16a34a] text-white shadow-[0_18px_40px_-18px_rgba(22,163,74,0.45)]",
  orange: "bg-[#ea580c] text-white shadow-[0_18px_40px_-18px_rgba(234,88,12,0.45)]",
};

const hideClass: Record<NonNullable<Note["hideOn"]>, string> = {
  sm: "hidden md:block",
  md: "hidden lg:block",
};

export function ClientReviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-secondary/30 py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Scattered notes layer */}
        <div className="pointer-events-none absolute inset-0 hidden sm:block">
          {notes.map((n, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: n.rotate }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.05, ease: "easeOut" }}
              style={{
                top: n.top,
                left: n.left,
                right: n.right,
                width: n.width,
              }}
              className={`absolute ${n.hideOn ? hideClass[n.hideOn] : ""}`}
            >
              {n.date && (
                <figcaption className="mb-1.5 text-right font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground/70">
                  {n.date}
                </figcaption>
              )}
              <div className={`rounded-lg px-4 py-3 text-[13px] leading-snug ${toneStyles[n.tone]}`}>
                <p>{n.q}</p>
                {n.author && (
                  <p className={`mt-2 text-[11px] font-medium ${
                    n.tone === "white" ? "text-muted-foreground" : "text-white/75"
                  }`}>
                    — {n.author}
                  </p>
                )}
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Centered content */}
        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-2xl flex-col items-center justify-center text-center sm:min-h-[720px]">
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
            className="mt-5 text-3xl font-black leading-[1.05] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[44px]"
          >
            What clients say after we ship.{" "}
            <span className="text-muted-foreground">
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
      </div>
    </section>
  );
}
