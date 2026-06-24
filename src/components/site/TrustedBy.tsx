import { ArrowUpRight } from "lucide-react";

const companies = [
  "Upwork",
  "Fiverr",
  "Freelancer",
  "Webleez",
  "Bluesky",
  "Vision Ads 360",
  "Pixel Digi Solution",
  "Dynime",
  "DMLC",
];

export function TrustedBy() {
  const loop = [...companies, ...companies];

  return (
    <section className="relative w-full overflow-hidden bg-background py-16">
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
        <div className="flex w-max animate-marquee items-center gap-12 px-8">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap text-2xl italic tracking-tight text-foreground/40 transition-colors hover:text-foreground/70 sm:text-3xl"
              style={{ fontFamily: "'Instrument Serif', ui-serif, Georgia, serif" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Trust pill */}
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
