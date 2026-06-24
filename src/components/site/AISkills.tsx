import { useState } from "react";
import { ArrowRight, Zap, Workflow, ShieldCheck, GitBranch } from "lucide-react";

type Tool = {
  name: string;
  slug?: string; // simple-icons slug
  hex?: string; // brand color hex (no #)
  initial?: string; // fallback letter
  bg?: string; // fallback bg color
};

const tools: Tool[] = [
  { name: "ChatGPT", slug: "openai", hex: "10A37F" },
  { name: "Claude", slug: "anthropic", hex: "D97757" },
  { name: "Gemini", slug: "googlegemini", hex: "8E75B2" },
  { name: "Perplexity", slug: "perplexity", hex: "1FB8CD" },
  { name: "DeepSeek", slug: "deepseek", hex: "4D6BFE" },
  { name: "Llama", slug: "meta", hex: "0467DF" },
  { name: "Qwen", slug: "alibabacloud", hex: "FF6A00" },
  { name: "Mistral", slug: "mistralai", hex: "FA520F" },
  { name: "Codex", initial: "Cx", bg: "#0b1220" },
  { name: "Claude Code", slug: "anthropic", hex: "0b1220" },
  { name: "MCP", initial: "Mc", bg: "#6366F1" },
  { name: "VS Code Agentic", slug: "visualstudiocode", hex: "007ACC" },
  { name: "Antigravity", initial: "Ag", bg: "#111827" },
];

const features = [
  { label: "Frontier model fluency", Icon: Zap },
  { label: "Agentic workflows", Icon: Workflow },
  { label: "Safety & evals", Icon: ShieldCheck },
  { label: "MCP & tool calling", Icon: GitBranch },
];

function Tile({ tool }: { tool: Tool }) {
  const [failed, setFailed] = useState(false);
  const showImg = tool.slug && !failed;

  return (
    <div className="group relative flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card shadow-sm transition-transform group-hover:-translate-y-1">
        {showImg ? (
          <img
            src={`https://cdn.simpleicons.org/${tool.slug}/${tool.hex ?? "0b1220"}`}
            alt={tool.name}
            className="h-8 w-8"
            onError={() => setFailed(true)}
            loading="lazy"
          />
        ) : (
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
            style={{ backgroundColor: tool.bg ?? "#0b1220" }}
          >
            {tool.initial ?? tool.name.slice(0, 2)}
          </span>
        )}
      </div>
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
        {tool.name}
      </span>
    </div>
  );
}

export function AISkills() {
  return (
    <section className="relative w-full bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[0_30px_80px_-40px_rgba(11,18,32,0.18)] sm:p-12">
          {/* Top: headline + feature pills */}
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
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground sm:text-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-muted-foreground" />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom: logo tray */}
          <div className="mt-10 rounded-2xl bg-secondary/60 px-6 py-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex flex-1 flex-wrap items-center gap-x-4 gap-y-6">
                {tools.map((t) => (
                  <Tile key={t.name} tool={t} />
                ))}
              </div>
              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                See full AI stack
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
