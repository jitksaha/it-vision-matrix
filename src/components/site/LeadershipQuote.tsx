import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function LeadershipQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.2, 1, 1, 0.3]);

  return (
    <section ref={ref} className="relative py-40">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.7 0.18 250 / 0.18), transparent 60%)",
        }}
      />
      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-5xl px-6 text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Leadership philosophy
        </p>
        <blockquote className="mt-8 font-display text-3xl font-medium leading-[1.35] tracking-tight sm:text-5xl lg:text-6xl">
          Technology alone doesn't scale businesses.{" "}
          <span className="rounded-sm bg-[#d0d1ff] px-1.5 box-decoration-clone">Execution does.</span>{" "}
          The best companies are built where{" "}
          <span className="rounded-sm bg-[#d0d1ff] px-1.5 box-decoration-clone">strategy, operations, products and technology</span>{" "}
          work together.
        </blockquote>
        <p className="mt-10 text-sm tracking-wide text-muted-foreground">— Jit Kumar Saha</p>
      </motion.div>
    </section>
  );
}
