import { Zap, Workflow, ShieldCheck, GitBranch } from "lucide-react";

type Tool = {
  name: string;
  slug?: string; // simple-icons slug, rendered as a mask so a missing/broken file never shows alt text
  bg: string; // tile background (gradient or solid)
  initial?: string; // text glyph when no official simpleicons slug exists
};

const tools: Tool[] = [
  { name: "ChatGPT", slug: "openai", bg: "linear-gradient(135deg,#10A37F,#0d8a6a)" },
  { name: "Claude", slug: "anthropic", bg: "linear-gradient(135deg,#D97757,#c25f3f)" },
  { name: "Gemini", slug: "googlegemini", bg: "linear-gradient(135deg,#4285F4,#8E75B2)" },
  { name: "Perplexity", slug: "perplexity", bg: "linear-gradient(135deg,#1FB8CD,#0f8a99)" },
  { name: "DeepSeek", slug: "deepseek", bg: "linear-gradient(135deg,#4D6BFE,#3753d6)" },
  { name: "Llama", slug: "meta", bg: "linear-gradient(135deg,#0467DF,#0353b3)" },
  { name: "Qwen", slug: "alibabacloud", bg: "linear-gradient(135deg,#FF6A00,#e25500)" },
  { name: "Mistral", slug: "mistralai", bg: "linear-gradient(135deg,#FA520F,#FFD800)" },
  { name: "Codex", bg: "linear-gradient(135deg,#1f2937,#0b1220)", initial: "{ }" },
  { name: "Claude Code", slug: "anthropic", bg: "linear-gradient(135deg,#1a1a1a,#000000)" },
  { name: "MCP", bg: "linear-gradient(135deg,#7c6dff,#635bff)", initial: "MCP" },
  { name: "VS Code", slug: "visualstudiocode", bg: "linear-gradient(135deg,#007ACC,#0a4d80)" },
  { name: "Antigravity", bg: "linear-gradient(135deg,#111827,#000000)", initial: "Ag" },
];

const features = [
  { label: "Frontier model fluency", Icon: Zap },
  { label: "Agentic workflows", Icon: Workflow },
  { label: "Safety & evals", Icon: ShieldCheck },
  { label: "MCP & tool calling", Icon: GitBranch },
];

function Tile({ tool }: { tool: Tool }) {
  return (
    // Outer wrapper is NOT scaled — keeps the tooltip anchored above the tile
    <div className="group relative flex flex-shrink-0 flex-col items-center">
      <span className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-medium text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        {tool.name}
      </span>
      <div
        className="flex h-12 w-12 items-center justify-center rounded-[12px] shadow-[0_6px_14px_-6px_rgba(11,18,32,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-black/5 transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-2 group-hover:scale-[1.35] sm:h-[52px] sm:w-[52px]"
        style={{ background: tool.bg }}
      >
        {tool.slug && !tool.initial ? (
          <span
            aria-label={tool.name}
            role="img"
            className="block h-6 w-6 sm:h-7 sm:w-7"
            style={{
              backgroundColor: "#ffffff",
              WebkitMaskImage: `url(https://cdn.simpleicons.org/${tool.slug})`,
              maskImage: `url(https://cdn.simpleicons.org/${tool.slug})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        ) : (
          <span className="text-[11px] font-black tracking-tight text-white sm:text-xs">
            {tool.initial ?? tool.name.slice(0, 2)}
          </span>
        )}
      </div>
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
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

          {/* Mac-dock style single-row tray — fits without scroll */}
          <div className="mt-10 overflow-visible rounded-2xl bg-gradient-to-b from-white/60 to-[#eef1f7] px-3 py-8 ring-1 ring-black/5 backdrop-blur sm:px-4">
            <div className="flex items-end justify-center gap-1.5 pt-6 sm:gap-2">
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
