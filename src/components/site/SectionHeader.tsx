import { motion } from "framer-motion";
import type { ReactNode } from "react";

const SERIF = "'Instrument Serif', ui-serif, Georgia, serif";
const MONO = "'Geist Mono', ui-monospace, SFMono-Regular, monospace";

export function SectionHeader({
  eyebrow,
  title,
  accent,
  description,
  align = "left",
  index,
  meta,
}: {
  eyebrow: string;
  /** Title text. Use {accent} to mark which substring renders as serif-italic accent. */
  title: string;
  /** Substring of `title` to render as serif italic + brand color. Case-sensitive. */
  accent?: string;
  description?: ReactNode;
  align?: "left" | "center";
  /** Optional 2-digit index, e.g. "02". */
  index?: string;
  /** Optional secondary meta string shown next to the eyebrow (e.g. "2019 — Present"). */
  meta?: string;
}) {
  const isCenter = align === "center";
  const titleNodes = renderTitle(title, accent);

  return (
    <div
      className={
        isCenter
          ? "relative mx-auto max-w-4xl text-center"
          : "relative max-w-4xl"
      }
    >
      {/* Faint oversized index watermark */}
      {index && !isCenter && (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-10 right-0 hidden select-none text-[180px] font-black leading-none text-foreground/[0.04] md:block"
        >
          {index}
        </span>
      )}

      {/* Eyebrow row */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
      >
        {index && (
          <span
            className="text-xs font-bold tracking-tighter text-brand"
            style={{ fontFamily: MONO }}
          >
            {index}
          </span>
        )}
        <span className="h-[1px] w-10 bg-brand/40" />
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand"
          style={{ fontFamily: MONO }}
        >
          {eyebrow}
        </span>
        {meta && (
          <>
            <span className="text-muted-foreground/40">/</span>
            <span
              className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
              style={{ fontFamily: MONO }}
            >
              {meta}
            </span>
          </>
        )}
      </motion.div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-5 text-4xl font-black leading-[0.98] tracking-[-0.04em] text-foreground sm:text-5xl lg:text-[64px]"
      >
        {titleNodes}
      </motion.h2>

      {/* Description with subtle left rule */}
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`mt-6 ${isCenter ? "mx-auto max-w-2xl" : "max-w-2xl border-l-2 border-brand/15 pl-5"}`}
        >
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </motion.div>
      )}
    </div>
  );
}

function renderTitle(title: string, accent?: string): ReactNode {
  if (!accent) return title;
  const idx = title.indexOf(accent);
  if (idx === -1) return title;
  const before = title.slice(0, idx);
  const after = title.slice(idx + accent.length);
  return (
    <>
      {before}
      <span className="relative inline-block">
        <span
          className="italic font-normal text-brand"
          style={{ fontFamily: SERIF }}
        >
          {accent}
        </span>
        <svg
          aria-hidden
          viewBox="0 0 100 8"
          preserveAspectRatio="none"
          className="absolute -bottom-1 left-0 h-2 w-full text-brand/30"
        >
          <path
            d="M0 5 Q 25 0, 50 5 T 100 5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </span>
      {after}
    </>
  );
}
