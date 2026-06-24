
# Jit Kumar Saha — Personal Brand Website

A premium, dark-themed, motion-rich single-page experience positioning Jit as a business leader, product executive, and AI strategist. Built on the project's existing stack (TanStack Start + React 19 + Tailwind v4), not Next.js — the brief's "Next.js 15" is a framework note I'll honor in spirit (SSR, SEO, performance) using the actual stack.

## Stack & approach

- TanStack Start (already configured) — SSR, file-based routing, strong SEO.
- Tailwind v4 with design tokens in `src/styles.css` (dark luxury palette).
- Framer Motion for scroll storytelling, magnetic buttons, card tilt, reveals.
- Inter + Geist via `<link>` in `__root.tsx` head (per Tailwind v4 rules — no remote `@import`).
- All sections live on the home route (`/`) as a long-scroll narrative, matching the "digital headquarters" intent. Each section is its own component for maintainability.

## Design system (defined in `src/styles.css`)

- Background: near-black (`oklch(0.14 0.01 260)`) with subtle radial gradients.
- Surfaces: glass cards via `bg-white/[0.03] backdrop-blur-xl border-white/10`.
- Accent: cool electric (cyan/violet gradient) for glows + CTA gradients.
- Text: high-contrast white headings, muted slate body.
- Typography: Geist Display (headlines, tight tracking), Inter (body).
- Radius scale, elevation shadows, gradient tokens, glow tokens — all semantic.

## Section breakdown (single route `/`)

1. **Hero** — animated grid background, floating glass panels, headline "Building Businesses Through Strategy, Products & AI", 4 stat chips, 2 CTAs, right-side animated mini-dashboard (revenue sparkline, product strategy tiles, AI automation pulse, ops metrics).
2. **Career Evolution** — vertical interactive timeline (Web Dev → Shopify/WP → Sales/Ops → PM → Business Mgmt Exec → Head of Product → Business Consultant → AI Strategist), scroll-triggered path draw.
3. **Expertise Bento** — asymmetric 12-card bento grid with hover expand & gradient borders.
4. **Impact Dashboard** — SaaS-style metric tiles with animated counters (6+ yrs, 50+ projects, 20+ industries, etc.).
5. **Leadership Story** — large-type cinematic quote with scroll-pinned reveal.
6. **Experience Showcase** — 6 role cards opening dialogs (role, responsibilities, achievements, business impact). Uses existing shadcn `Dialog`.
7. **AI Expertise** — neural-network animated SVG background, 11 capability nodes.
8. **Strategic Framework** — 7-step animated flow (Discover → Scale) with connecting paths.
9. **Industries** — 10 interactive tilt cards.
10. **Education & Learning** — timeline (BBA + 4 certifications) framed as continuous growth.
11. **Thought Leadership** — 8 insight topic cards.
12. **Contact** — large gradient CTA block with 3 buttons (Schedule, LinkedIn, Email).

Shared: sticky glass nav (anchors to sections), animated cursor accent, page-reveal intro, smooth in-page scroll.

## Interactions

Framer Motion for: scroll-linked reveals, counter animations, timeline path draw, magnetic buttons, card tilt on pointer, parallax on hero blobs, dialog transitions. Reduced-motion respected.

## SEO & metadata

Route `head()`: title "Jit Kumar Saha — Business Consultant, Head of Product, AI Strategist", meta description, OG title/description, Twitter card. Single H1 in hero. Semantic landmarks. Update `__root.tsx` title/description defaults.

## Out of scope (this pass)

- No backend, CMS, form submission, or AI gateway — Contact CTAs are mailto/LinkedIn/scheduling link placeholders.
- No real photos (no portrait uploaded). Hero right side is an abstract animated dashboard composition, not a person photo. If you want a photo, share one and I'll wire it in.
- No blog content — Thought Leadership is presented as topic tiles, not articles.

## Files

- `src/styles.css` — extend tokens (dark palette, gradients, glows, fonts).
- `src/routes/__root.tsx` — add Geist/Inter `<link>` tags, default dark class on `<html>`, updated meta.
- `src/routes/index.tsx` — composes all sections.
- `src/components/site/` — `Nav.tsx`, `Hero.tsx`, `CareerTimeline.tsx`, `ExpertiseBento.tsx`, `ImpactDashboard.tsx`, `LeadershipQuote.tsx`, `ExperienceShowcase.tsx`, `AIExpertise.tsx`, `StrategicFramework.tsx`, `Industries.tsx`, `Education.tsx`, `ThoughtLeadership.tsx`, `Contact.tsx`, plus small primitives (`MagneticButton`, `TiltCard`, `Counter`, `GridBackground`).
- Install: `framer-motion`.

## Quality bar

Targeting Awwwards-tier polish: restrained motion, strong typographic hierarchy, generous spacing, no AI-slop sections (no "Trusted by", no generic 3-up feature row with Lucide icons unless intentional), no duplicate CTAs.
