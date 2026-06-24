import { Brain, ShieldCheck, Sparkles, Timer, Database, Workflow, Rocket, Target } from "lucide-react";

const cards = [
  { Icon: Database, text: "45+ data sources & APIs wired into product, ops and growth workflows." },
  { Icon: ShieldCheck, text: "Enterprise-grade governance, SOC2-ready posture and AI safety guardrails." },
  { Icon: Sparkles, text: "AI Development Agents that turn raw ideas into shippable apps by chatting." },
  { Icon: Timer, text: "Days, not quarters — from 0→1 strategy to a live, revenue-ready product." },
  { Icon: Brain, text: "RAG, agents and LLM pipelines deployed inside real business operations." },
  { Icon: Workflow, text: "Automations that replace ops headcount and unlock 10x team leverage." },
  { Icon: Rocket, text: "Growth engines tuned for activation, retention and durable revenue." },
  { Icon: Target, text: "GTM strategy, positioning and pricing that compounds across launches." },
];

export function OnePlatform() {
  const loop = [...cards, ...cards];

  return (
    <section className="relative w-full overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-black leading-[1.05] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[64px]">
          1 operator
          <br />
          for all your business bets
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Jit becomes the central force behind your business, product and AI — across teams, stages and use cases.
        </p>
      </div>

      <div
        className="mt-14 relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee-slow gap-5 px-6">
          {loop.map(({ Icon, text }, i) => (
            <article
              key={i}
              className="flex h-44 w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-border bg-card p-5 shadow-[0_20px_50px_-30px_rgba(11,18,32,0.18)] transition-transform hover:-translate-y-1"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-foreground/70">
                <Icon className="h-4 w-4" />
              </div>
              <p className="text-[15px] leading-snug text-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
