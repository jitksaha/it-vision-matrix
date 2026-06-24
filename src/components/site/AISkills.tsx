import { useState } from "react";
import { Zap, Workflow, ShieldCheck, GitBranch } from "lucide-react";

type Tool = {
  name: string;
  slug?: string; // simple-icons slug
  bg: string; // tile background (gradient or solid)
  iconColor?: "white" | "black"; // simpleicon color
  initial?: string; // fallback letter glyph
};

// Brand-accurate tiles. Logos from simpleicons.org (official brand marks),
// recolored white/black for contrast against the brand background.
const tools: Tool[] = [
  { name: "ChatGPT", slug: "openai", bg: "linear-gradient(135deg,#10A37F,#0d8a6a)", iconColor: "white" },
  { name: "Claude", slug: "anthropic", bg: "linear-gradient(135deg,#D97757,#c25f3f)", iconColor: "white" },
  { name: "Gemini", slug: "googlegemini", bg: "linear-gradient(135deg,#4285F4,#8E75B2)", iconColor: "white" },
  { name: "Perplexity", slug: "perplexity", bg: "linear-gradient(135deg,#1FB8CD,#0f8a99)", iconColor: "white" },
  { name: "DeepSeek", slug: "deepseek", bg: "linear-gradient(135deg,#4D6BFE,#3753d6)", iconColor: "white" },
  { name: "Llama", slug: "meta", bg: "linear-gradient(135deg,#0467DF,#0353b3)", iconColor: "white" },
  { name: "Qwen", slug: "alibabacloud", bg: "linear-gradient(135deg,#FF6A00,#e25500)", iconColor: "white" },
  { name: "Mistral", slug: "mistralai", bg: "linear-gradient(135deg,#FA520F,#FFD800)", iconColor: "white" },
  { name: "Codex", slug: "openai", bg: "linear-gradient(135deg,#1f2937,#0b1220)", iconColor: "white", initial: "{ }" },
  { name: "Claude Code", slug: "anthropic", bg: "linear-gradient(135deg,#1a1a1a,#000000)", iconColor: "white" },
  { name: "MCP", bg: "linear-gradient(135deg,#6366F1,#4338ca)", iconColor: "white", initial: "MCP" },
  { name: "VS Code Agentic", slug: "visualstudiocode", bg: "linear-gradient(135deg,#007ACC,#0a4d80)", iconColor: "white" },
  { name: "Antigravity", bg: "linear-gradient(135deg,#111827,#000000)", iconColor: "white", initial: "Ag" },
];

const features = [
  { label: "Frontier model fluency", Icon: Zap },
  { label: "Agentic workflows", Icon: Workflow },
  { label: "Safety & evals", Icon: ShieldCheck },
  { label: "MCP & tool calling", Icon: GitBranch },
];

function Tile({ tool }: { tool: Tool }) {
  const [failed, setFailed] = useState(false);
  const showImg = tool.slug && !failed && !tool.initial;
  const iconHex = tool.iconColor === "black" ? "0b1220" : "ffffff";

  return (
    <div className="group relative flex flex-shrink-0 flex-col items-center">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-[14px] shadow-[0_6px_14px_-6px_rgba(11,18,32,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-black/5 transition-all duration-200 ease-out will-change-transform group-hover:-translate-y-2 group-hover:scale-[1.35] group-hover:shadow-[0_18px_30px_-10px_rgba(11,18,32,0.45)] sm:h-16 sm:w-16"
        style={{ background: tool.bg }}
      >
        {showImg ? (
          <img
            src={`https://cdn.simpleicons.org/${tool.slug}/${iconHex}`}
            alt={tool.name}
            className="h-7 w-7 sm:h-8 sm:w-8"
            onError={() => setFailed(true)}
            loading="lazy"
          />
        ) : (
          <span className="text-sm font-black tracking-tight text-white sm:text-base">
            {tool.initial ?? tool.name.slice(0, 2)}
          </span>
        )}
      </div>
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-medium text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        {tool.name}
      </span>
    </div>
  );
}

export function AISkills() {
  return (
    <section className="relative w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-white to-[#f5f7fb] p-8 shadow-[0_30px_80px_-40px_rgba(11,18,32,0.18)] sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3b82f6]/10 px-3 py-1 text-xs font-semibold text-[#2563eb]">
                <GitBranch className="h-3.5 w-3.5" />
                Connect
              </span>
              <h2 className="mt-5 text-3xl font-black leading-[1.05] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[44px]">
                AI-native by default.{" "}
                <span className="text-muted-foreground">
                  13+ models, agents and protocols I deploy in production.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                From frontier chat models to agentic coding tools and the Model
                Context Protocol — I pick the right brain for the job and wire
                it into real business workflows, not demos.
              </p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {features.map(({ label, Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-medium text-foreground sm:text-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Mac-dock style single-row tray */}
          <div className="mt-10 rounded-2xl bg-gradient-to-b from-white/60 to-[#eef1f7] px-4 py-8 ring-1 ring-black/5 backdrop-blur">
            <div className="flex items-end justify-center gap-2 overflow-x-auto pb-3 pt-6 sm:gap-3">
              {tools.map((t) => (
                <Tile key={t.name} tool={t} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
