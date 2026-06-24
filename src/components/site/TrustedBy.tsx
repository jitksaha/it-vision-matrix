import { ArrowUpRight } from "lucide-react";

type Client = {
  name: string;
  slug?: string; // simpleicons slug if a verified official mark exists
  initials?: string; // monogram fallback
  bg: string; // tile background gradient
  tag: string; // category
};

// Verified: only Upwork, Fiverr, Freelancer, and Bluesky have official
// simpleicons marks. The rest render as branded monogram tiles so we never
// ship a wrong/placeholder logo.
const clients: Client[] = [
  { name: "Upwork", slug: "upwork", bg: "linear-gradient(135deg,#14a800,#108a00)", tag: "Freelance Platform" },
  { name: "Fiverr", slug: "fiverr", bg: "linear-gradient(135deg,#1dbf73,#149a5b)", tag: "Freelance Platform" },
  { name: "Freelancer", slug: "freelancer", bg: "linear-gradient(135deg,#29b2fe,#0072c6)", tag: "Freelance Platform" },
  { name: "Bluesky", slug: "bluesky", bg: "linear-gradient(135deg,#0a7aff,#0057d4)", tag: "Social Platform" },
  { name: "Webleez", initials: "Wz", bg: "linear-gradient(135deg,#635bff,#4f46e5)", tag: "Web Agency" },
  { name: "Vision Ads 360", initials: "V360", bg: "linear-gradient(135deg,#ff6a00,#ee0979)", tag: "Performance Marketing" },
  { name: "Pixel Digi Solution", initials: "PD", bg: "linear-gradient(135deg,#0ea5e9,#1e3a8a)", tag: "Digital Agency" },
  { name: "Dynime", initials: "Dy", bg: "linear-gradient(135deg,#0f172a,#334155)", tag: "Product Studio" },
  { name: "DMLC", initials: "DM", bg: "linear-gradient(135deg,#b91c1c,#7f1d1d)", tag: "Education" },
];

function LogoTile({ client }: { client: Client }) {
  return (
    <div className="group flex flex-col items-center gap-3">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-[0_10px_24px_-12px_rgba(11,18,32,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-black/5 transition-transform duration-200 ease-out group-hover:-translate-y-1 group-hover:scale-[1.06] sm:h-[68px] sm:w-[68px]"
        style={{ background: client.bg }}
      >
        {client.slug ? (
          <span
            aria-label={client.name}
            role="img"
            className="block h-8 w-8 sm:h-9 sm:w-9"
            style={{
              backgroundColor: "#ffffff",
              WebkitMaskImage: `url("https://cdn.simpleicons.org/${client.slug}")`,
              maskImage: `url("https://cdn.simpleicons.org/${client.slug}")`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
              WebkitMaskSize: "contain",
              maskSize: "contain",
            }}
          />
        ) : (
          <span className="text-base font-black tracking-tight text-white sm:text-lg">
            {client.initials}
          </span>
        )}
      </div>
      <div className="text-center">
        <div className="text-sm font-semibold text-foreground">{client.name}</div>
        <div className="text-[11px] text-muted-foreground">{client.tag}</div>
      </div>
    </div>
  );
}

export function TrustedBy() {
  const loop = [...clients.map((c) => c.name), ...clients.map((c) => c.name)];

  return (
    <section className="relative w-full overflow-hidden bg-background py-20">
      {/* Marquee */}
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, #000 12%, #000 88%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-16 px-8">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-4xl italic tracking-tight text-foreground/40 transition-colors hover:text-foreground/70 sm:text-5xl"
              style={{ fontFamily: "'Instrument Serif', ui-serif, Georgia, serif" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Logo grid */}
      <div className="mx-auto mt-14 max-w-6xl px-6">
        <div className="rounded-3xl border border-border bg-gradient-to-b from-white to-[#f5f7fb] p-8 shadow-[0_30px_80px_-40px_rgba(11,18,32,0.18)] sm:p-10">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9">
            {clients.map((c) => (
              <LogoTile key={c.name} client={c} />
            ))}
          </div>
        </div>
      </div>

      {/* Trust pill — wider */}
      <div className="mt-10 flex w-full justify-center px-6">
        <div className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-[0_20px_50px_-30px_rgba(11,18,32,0.2)]">
          <p className="text-sm text-muted-foreground sm:text-base">
            I have worked with{" "}
            <span className="font-bold text-foreground">9+ brands</span> across
            freelance platforms, agencies & SaaS
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-xl bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90 sm:text-sm"
          >
            Work with me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
