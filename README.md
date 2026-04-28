# Web Animated Starter

A production-ready starter template for building animated websites with Next.js, Three.js, GSAP, and Lenis. Inspired by award-winning web experiences (lusion.co, motionsites.ai, etc.).

**Studio Demo:** https://web-animated-starter.vercel.app  
**Showcase (Primitives):** https://web-animated-starter.vercel.app/showcase

## Features

### Core Stack
- **Next.js 15** — App Router, React 19, TypeScript
- **Three.js / React Three Fiber** — 3D backgrounds, particle fields, wireframe meshes
- **GSAP + ScrollTrigger** — Scroll-driven animations, pin, scrub
- **Lenis** — Buttery smooth scroll with inertia
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Component-level micro-interactions

### Animation Patterns (from Really Sick Animations)
- **Cinematic easing** — `cubic-bezier(0.87, 0.05, 0.02, 0.97)` for snappy motion
- **Parameterized CSS variables** — Reusable, tweakable animations
- **Layered pseudo-elements** — Depth through staggered ::before/::after
- **Clip-path wipes** — Diagonal and shaped reveals
- **Orchestrated sequences** — Chained enter/exit animations
- **Staggered grid reveals** — Items fade up with calculated delays

### Section Primitives (from MotionSites pattern analysis)
Build any landing page by composing these pre-built sections:

| Primitive | Use For |
|-----------|---------|
| `HeroSection` | Headline + sub + CTAs + optional visual |
| `FeaturesGrid` | 2-4 column feature cards with icons |
| `TestimonialsSection` | Quote cards with avatar + name + role |
| `PricingSection` | 3-tier pricing with highlight badge |
| `CTABanner` | Full-width call-to-action |
| `FooterSection` | Newsletter + link columns + socials |

### Background System
Swap backgrounds without touching layout code:

| Background | Effect |
|-----------|--------|
| `VideoBackground` | Looping MP4/WebM with overlay |
| `GradientBackground` | CSS animated gradients (aurora, mesh, radial) |
| `MeshBackground` | R3F particle field (200 points, slow rotation) |
| `Scene` (existing) | Full 3D wireframe + particle universe |

### Animation Presets
Import from `lib/animations.ts`:

```tsx
import { fadeUp, scaleIn, staggerContainer, easeCinematic } from "@/lib/animations";
```

| Preset | Effect |
|--------|--------|
| `fadeUp` | Opacity 0→1 + translateY 40→0 |
| `fadeIn` | Opacity only |
| `scaleIn` | Opacity + scale 0.95→1 |
| `slideInLeft` | Opacity + translateX -30→0 |
| `slideInRight` | Opacity + translateX 30→0 |
| `staggerContainer` | Parent wrapper for staggered children |
| `staggerFast` | 0.05s stagger |
| `staggerSlow` | 0.15s stagger |
| `hoverLift` | scale 1.02 + translateY -4 |
| `hoverScale` | scale 1.05 |

### Scroll Effects
- **Scroll-driven SVG path** — Line draws itself as you scroll (loop-de-loop style)
- **Hard-cut background reveal** — "Parallel plane" snap to 3D universe
- **Text slide hover** — Duplicate text slides up on menu items
- **Custom cursor** — Follows mouse with smooth lerp
- **Scroll progress bar** — Top-edge indicator

### Sections (Studio Demo)
| Section | Pattern |
|---------|---------|
| Preloader | Rolling digit counter (slot-machine effect) |
| Hero | Staggered word reveal + parallax |
| Reel | Hover-to-play video showcase |
| Project Grid | Scroll-triggered cards + dynamic theming |
| Philosophy | Large typography with scroll-driven color shift |
| Footer | Marquee + newsletter CTA |

## Quick Start

```bash
# Clone
git clone https://github.com/AlanviewGroup0/web-animated-starter.git
cd web-animated-starter

# Install
npm install

# Dev
npm run dev

# Build
npm run build
```

## Using Section Primitives (Fastest Way to Build)

Import pre-built sections and compose a page in minutes:

```tsx
import { HeroSection, FeaturesGrid, CTABanner } from "@/components/sections/primitives";
import { MeshBackground } from "@/components/backgrounds";

export default function Page() {
  return (
    <>
      <MeshBackground overlayOpacity={0.7} />
      <HeroSection
        headline="Your headline here"
        subheadline="Your subheadline"
        primaryCta={{ label: "Get Started", href: "#" }}
      />
      <FeaturesGrid
        headline="Features"
        features={[{ title: "Fast", description: "..." }]}
      />
      <CTABanner
        headline="Ready?"
        cta={{ label: "Book Now", href: "#" }}
      />
    </>
  );
}
```

## Using Animation Presets

```tsx
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

<motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
  <motion.div variants={fadeUp}>Item 1</motion.div>
  <motion.div variants={fadeUp}>Item 2</motion.div>
</motion.div>
```

## Prompt Template

Use `prompts/site-template.md` as a fill-in-the-blanks template. Complete it and send to OpenCode (or v0/Bolt/Claude) to generate a full site.

## Customization

### 1. Change the scroll path
Edit `components/sections/ScrollPath.tsx` — update the SVG `d` attribute with your own path from Figma/Illustrator.

### 2. Change colors
Edit CSS variables in `app/globals.css`:
```css
:root {
  --color-bg: #0a0a0a;
  --color-text: #ffffff;
  --color-accent: #ff3e00;
}
```

### 3. Add sections
Drop new section components in `components/sections/` and import them in `app/page.tsx`.

### 4. Scroll-triggered reveals
Use GSAP ScrollTrigger on any element:
```tsx
gsap.from(element, {
  y: 100,
  opacity: 0,
  scrollTrigger: {
    trigger: element,
    start: "top 80%",
  }
});
```

### 5. Cinematic easing (from Really Sick Animations)
```css
.cinematic {
  transition: all 0.8s cubic-bezier(0.87, 0.05, 0.02, 0.97);
}
```

## File Structure

```
app/
  layout.tsx              # Root layout (Scene, Header, Cursor)
  page.tsx                # Studio demo — composes all original sections
  showcase/page.tsx       # Primitives demo — Hero/Features/Pricing/CTA/Footer
  globals.css             # CSS vars, Lenis styles, scrollbar, design system
components/
  backgrounds/
    VideoBackground.tsx     # Looping video with overlay
    GradientBackground.tsx  # CSS animated gradients
    MeshBackground.tsx      # R3F particle field
    index.ts                # Barrel export
  sections/
    primitives/
      HeroSection.tsx       # Headline + sub + CTAs
      FeaturesGrid.tsx      # Icon cards grid
      TestimonialsSection.tsx # Quote cards
      PricingSection.tsx    # 3-tier pricing
      CTABanner.tsx         # Full-width CTA
      FooterSection.tsx     # Newsletter + links
      index.ts              # Barrel export
    Hero.tsx                # Original studio hero
    Reel.tsx                # Video showcase
    ProjectGrid.tsx         # Dynamic themed cards
    Philosophy.tsx          # Big typography
    ScrollPath.tsx          # SVG scroll-driven line
    Footer.tsx              # Original studio footer
  navigation/
    Header.tsx              # Fixed header
    MenuOverlay.tsx         # Full-screen nav
  preloader/
    Preloader.tsx           # Rolling digit counter
  ui/
    CustomCursor.tsx        # Smooth cursor
    ScrollProgress.tsx      # Top progress bar
    BackgroundReveal.tsx     # Hard-cut overlay
    WipeReveal.tsx           # Clip-path wipe component
hooks/
  useLenis.ts             # Lenis init
lib/
  animations.ts           # Framer Motion presets
prompts/
  site-template.md        # Fill-in-blanks prompt for OpenCode
```

## Deploy

```bash
# Vercel
npx vercel --prod

# Or connect GitHub → Vercel for auto-deploys
```

## Credits

- Inspired by [lusion.co](https://lusion.co) and [yui540.com](https://yui540.com)
- Cinematic easing from [Really Sick Animations](https://github.com/AlanviewGroup0/really-sick-animations)

## License

MIT — Use it, fork it, make it yours.
