import { Brain, Compass, Sparkles, Rocket, LineChart, Workflow, Users, Layers } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const cards = [
  { Icon: Compass, text: "Business strategy & diagnosis — clear bets, sharper priorities, fewer wrong turns." },
  { Icon: Layers, text: "Product leadership end-to-end — vision, discovery, roadmap, delivery." },
  { Icon: Brain, text: "AI strategy that ships — from use-case mapping to production rollouts." },
  { Icon: Sparkles, text: "Agentic workflows & MCP — turning manual ops into self-driving systems." },
  { Icon: Workflow, text: "Operations redesign — replacing repetitive headcount with leverage." },
  { Icon: Rocket, text: "0→1 launches in weeks — from raw idea to a live, revenue-ready product." },
  { Icon: LineChart, text: "Growth & GTM — positioning, pricing and motions that actually compound." },
  { Icon: Users, text: "Fractional Head of Product / AI — embedded with your team, not a deck." },
];

export function OnePlatform() {
  const loop = [...cards, ...cards];

  return (
    <section className="relative w-full overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          align="center"
          eyebrow="What I Do"
          index="01"
          title="One operator. Every part of your bet."
          accent="Every part"
          description={
            <>
              I plug in as your business, product and AI partner — diagnosing the
              real problem, designing the system, and shipping it with your team.
            </>
          }
        />
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
