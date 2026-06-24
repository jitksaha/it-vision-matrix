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
  title: string;
  /** Substring of `title` to render as serif italic + brand color. */
  accent?: string;
  description?: ReactNode;
  align?: "left" | "center";
  /** Optional 2-digit index, shown inline next to the eyebrow. */
  index?: string;
  meta?: string;
}) {
  const isCenter = align === "center";
  const titleNodes = renderTitle(title, accent);

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {/* Compact eyebrow row */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`flex items-center gap-2 ${isCenter ? "justify-center" : ""}`}
      >
        {index && (
          <span
            className="text-[10px] font-bold tracking-tight text-brand"
            style={{ fontFamily: MONO }}
          >
            {index}
          </span>
        )}
        <span className="h-px w-6 bg-brand/40" />
        <span
          className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand"
          style={{ fontFamily: MONO }}
        >
          {eyebrow}
        </span>
        {meta && (
          <>
            <span className="text-muted-foreground/40">/</span>
            <span
              className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
              style={{ fontFamily: MONO }}
            >
              {meta}
            </span>
          </>
        )}
      </motion.div>

      {/* Compact headline */}
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="mt-5 text-3xl font-black leading-[1.35] tracking-[-0.035em] text-foreground sm:text-4xl lg:text-[44px]"
      >
        {titleNodes}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

function renderTitle(title: string, accent?: string): ReactNode {
  if (!accent) return title;
  const idx = title.indexOf(accent);
  if (idx === -1) return title;
  return (
    <>
      {title.slice(0, idx)}
      <span className="rounded-sm bg-[#d0d1ff] px-1.5 box-decoration-clone">
        {accent}
      </span>
      {title.slice(idx + accent.length)}
    </>
  );
}
