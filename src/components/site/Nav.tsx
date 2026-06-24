import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#expertise", label: "Expertise" },
  { href: "#impact", label: "Impact" },
  { href: "#ai", label: "AI" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2 transition-all ${
          scrolled ? "glass-strong" : "border-transparent bg-background/60 backdrop-blur"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-foreground text-background font-display text-sm font-bold">
            J
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">
            Jit Kumar Saha
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-opacity hover:opacity-90 md:inline-flex"
        >
          Let's talk →
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-full glass md:hidden"
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-4 bg-foreground" />
            <span className="block h-0.5 w-4 bg-foreground" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute left-4 right-4 top-20 rounded-2xl glass-strong p-4 md:hidden"
          >
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-sm text-foreground hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
