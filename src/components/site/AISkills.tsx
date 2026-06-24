import { Zap, Workflow, ShieldCheck, GitBranch } from "lucide-react";

type Tool = {
  name: string;
  slug?: string; // simple-icons slug, rendered as a mask so a missing/broken file never shows alt text
  bg: string; // tile background (gradient or solid)
  initial?: string; // text glyph when no official simpleicons slug exists
};

const tools: Tool[] = [
  { name: "ChatGPT", slug: "openai", bg: "linear-gradient(135deg,#10A37F,#0d8a6a)" },
  { name: "Claude", slug: "claude", bg: "linear-gradient(135deg,#D97757,#c25f3f)" },
  { name: "Gemini", slug: "googlegemini", bg: "linear-gradient(135deg,#4285F4,#8E75B2)" },
  { name: "Perplexity", slug: "perplexity", bg: "linear-gradient(135deg,#1FB8CD,#0f8a99)" },
  { name: "DeepSeek", slug: "deepseek", bg: "linear-gradient(135deg,#4D6BFE,#3753d6)" },
  { name: "Llama", slug: "meta", bg: "linear-gradient(135deg,#0467DF,#0353b3)" },
  { name: "Qwen", slug: "alibabacloud", bg: "linear-gradient(135deg,#FF6A00,#e25500)" },
  { name: "Mistral", slug: "mistralai", bg: "linear-gradient(135deg,#FA520F,#FFD800)" },
  { name: "Codex", bg: "linear-gradient(135deg,#1f2937,#0b1220)", initial: "{ }" },
  { name: "Claude Code", slug: "claude", bg: "linear-gradient(135deg,#1a1a1a,#000000)" },
  { name: "MCP", slug: "modelcontextprotocol", bg: "linear-gradient(135deg,#7c6dff,#635bff)" },
  { name: "VS Code", slug: "visualstudiocode", bg: "linear-gradient(135deg,#007ACC,#0a4d80)" },
  { name: "Antigravity", bg: "linear-gradient(135deg,#4285F4,#0F9D58)" },
];


const features = [
  { label: "Frontier model fluency", Icon: Zap },
  { label: "Agentic workflows", Icon: Workflow },
  { label: "Safety & evals", Icon: ShieldCheck },
  { label: "MCP & tool calling", Icon: GitBranch },
];

// Inline SVGs for marks where the simpleicons CDN slug is unreliable as a CSS mask
// (e.g. ChatGPT — older `openai` slug intermittently fails cross-origin mask loads).
const inlineSvg: Record<string, string> = {
  ChatGPT:
    "M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.142-.08 4.774-2.757a.795.795 0 0 0 .392-.681v-6.737l2.018 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.488 4.491zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.778 2.757a.777.777 0 0 0 .78 0l5.835-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.808 3.355-2.018 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z",
  // Anthropic Claude — official sunburst mark
  Claude:
    "M4.709 15.955l4.72-2.647.079-.23-.079-.128H9.2l-.79-.048-2.697-.073-2.34-.097-2.265-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.054-.158-.133-.097-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.146-.103.018-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.486-1.215.62-1.64-.389-3.829-.91-1.312-.328h-.182v.11l1.093 1.07 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.087-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z",
  // Visual Studio Code — official angled ribbon
  "VS Code":
    "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",
  // Model Context Protocol — official mark
  MCP: "M15.688 2.343a4.679 4.679 0 0 0-6.617 0l-7.07 7.07a.722.722 0 0 0 1.02 1.02l7.071-7.07a3.234 3.234 0 1 1 4.575 4.572L7.857 14.745a1.788 1.788 0 0 1-2.528-2.528l6.819-6.82a.342.342 0 0 1 .484.484l-6.819 6.82a1.106 1.106 0 0 0 1.56 1.56l6.811-6.81a1.787 1.787 0 1 0-2.527-2.528l-6.811 6.81a3.232 3.232 0 1 0 4.572 4.575l6.811-6.81a4.681 4.681 0 1 0-6.618-6.62l-7.07 7.07a.722.722 0 0 0 1.02 1.02l7.071-7.07a3.234 3.234 0 0 1 4.575 4.572l-6.81 6.81a.722.722 0 0 0 1.02 1.02l6.81-6.81a4.679 4.679 0 0 0 0-6.618z",
  // Antigravity (Google) — stylized triangular "A" mark approximation
  Antigravity:
    "M12 2L2 21h20L12 2zm0 4.5L19 19H5l7-12.5zM12 10l-3 6h6l-3-6z",
};


function Tile({ tool }: { tool: Tool }) {
  const svgPath = inlineSvg[tool.name];
  return (
    // Reserve hover space with margin so the scaled tile never overlaps neighbors
    <div className="group relative flex flex-shrink-0 flex-col items-center">
      <span className="pointer-events-none absolute -top-8 left-1/2 z-30 max-w-[140px] -translate-x-1/2 truncate whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[11px] font-medium text-background opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100">
        {tool.name}
      </span>
      <div
        className="flex h-12 w-12 origin-bottom items-center justify-center rounded-[12px] shadow-[0_6px_14px_-6px_rgba(11,18,32,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-black/5 transition-transform duration-200 ease-out will-change-transform group-hover:-translate-y-1.5 group-hover:scale-[1.18] sm:h-[52px] sm:w-[52px]"
        style={{ background: tool.bg }}
      >
        {svgPath ? (
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 sm:h-7 sm:w-7"
            fill="#ffffff"
            aria-label={tool.name}
            role="img"
          >
            <path d={svgPath} />
          </svg>
        ) : tool.slug && !tool.initial ? (
          <span
            aria-label={tool.name}
            role="img"
            className="block h-6 w-6 sm:h-7 sm:w-7"
            style={{
              backgroundColor: "#ffffff",
              WebkitMaskImage: `url("https://cdn.simpleicons.org/${tool.slug}")`,
              maskImage: `url("https://cdn.simpleicons.org/${tool.slug}")`,
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
    <section className="relative w-full py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-white to-[#f5f7fb] p-8 shadow-[0_30px_80px_-40px_rgba(11,18,32,0.18)] sm:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
                <GitBranch className="h-3.5 w-3.5" />
                Connect
              </span>
              <h2 className="mt-5 text-3xl font-black leading-[1.35] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[44px]">
                AI-native by default.{" "}
                <span className="rounded-sm bg-[#d0d1ff] px-1.5 box-decoration-clone">
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
            <div className="flex items-end justify-center gap-3 pt-8 sm:gap-4">
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
