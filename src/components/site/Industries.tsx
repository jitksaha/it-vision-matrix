import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { TiltCard } from "./primitives";

const industries = [
  {
    name: "Technology",
    tag: "Platforms & infra",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "SaaS",
    tag: "Product-led growth",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Fintech",
    tag: "Payments & capital",
    image: "https://images.unsplash.com/photo-1620266757065-5814239881fd?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "E-Commerce",
    tag: "DTC & marketplaces",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Digital Agencies",
    tag: "Creative ops",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Professional Services",
    tag: "Knowledge work",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Consulting",
    tag: "Advisory & strategy",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Startups",
    tag: "0→1 builders",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "SMEs",
    tag: "Growing operators",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?auto=format&fit=crop&w=800&q=70",
  },
  {
    name: "Enterprise",
    tag: "Scale & governance",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=70",
  },
];

export function Industries() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Industries"
          title="Built across the modern economy."
          accent="modern economy"
          description="Pattern recognition across ten verticals — and the discipline to know when patterns don't apply."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              style={{ perspective: 1000 }}
            >
              <TiltCard className="aspect-square">
                <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-hairline shadow-card">
                  {/* Background image */}
                  <img
                    src={ind.image}
                    alt={ind.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                  {/* Hover accent wash */}
                  <div
                    className="absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-60"
                    style={{ background: "var(--gradient-brand)" }}
                  />

                  {/* Content */}
                  <div className="relative flex h-full w-full flex-col justify-between p-4 text-white">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] tracking-widest text-white/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="rounded-full border border-white/30 bg-white/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-white/80 backdrop-blur-md">
                        Sector
                      </span>
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                        {ind.tag}
                      </span>
                      <span className="mt-1 block text-lg font-semibold leading-tight tracking-tight">
                        {ind.name}
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
