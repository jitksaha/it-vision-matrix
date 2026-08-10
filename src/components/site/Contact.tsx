import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { MagneticButton } from "./primitives";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 100%, oklch(0.7 0.18 250 / 0.25), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          Let's build
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-4 font-display text-5xl font-semibold leading-[1.35] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Let's build the future,{" "}
          <span className="rounded-sm bg-[#d0d1ff] px-1.5 box-decoration-clone">together.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          Whether you're scaling a startup, transforming operations, building products
          or implementing AI — let's create measurable business impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <MagneticButton href="https://wa.me/8801700000000" >
            <MessageCircle className="mr-2 h-4 w-4" />
            Connect on WhatsApp
          </MagneticButton>
          <MagneticButton href="https://www.linkedin.com/in/jitksha" variant="ghost">
            <Linkedin className="mr-2 h-4 w-4" />
            Connect on LinkedIn
          </MagneticButton>
          <MagneticButton href="mailto:mail.jitsaha@gmail.com" variant="ghost">
            <Mail className="mr-2 h-4 w-4" />
            Email me
          </MagneticButton>
        </motion.div>
      </div>

      <footer className="relative mx-auto mt-32 max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Jit Kumar Saha. Built with care.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Strategy · Product · AI
          </p>
        </div>
      </footer>
    </section>
  );
}
