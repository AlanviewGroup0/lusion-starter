# Site Build Prompt Template

Fill in the blanks and send to OpenCode (or v0/Bolt/Claude) to generate a complete site.

---

## Business
- **Name**: ___________
- **Type**: ___________ (SaaS / Agency / Portfolio / E-commerce / Personal)
- **Audience**: ___________
- **One-liner**: ___________

## Design
- **Primary Color**: #___________
- **Accent Color**: #___________
- **Background**: Dark / Light
- **Style**: Minimal / Bold / Corporate / Playful / Luxury
- **Font**: Inter / Geist / Satoshi / Other

## Sections
Check which sections to include:

- [ ] Hero (headline + sub + CTA)
- [ ] Social Proof (logos, stats)
- [ ] Features (3-4 cards)
- [ ] How It Works (3-step process)
- [ ] Testimonials (quotes)
- [ ] Pricing (3 tiers)
- [ ] FAQ (accordion)
- [ ] Blog/Content (cards)
- [ ] Contact (form)
- [ ] Footer (links + newsletter)

## Animations
- [ ] Scroll reveals (every section)
- [ ] Parallax hero
- [ ] Video background
- [ ] 3D particle background
- [ ] Hover micro-interactions
- [ ] Page transitions

## Content
Paste actual copy for each section, or describe the tone:

**Hero Headline**: ___________
**Hero Sub**: ___________
**CTA Primary**: ___________
**CTA Secondary**: ___________

## Tech Stack
- Next.js 15 + TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- GSAP + ScrollTrigger

---

## Example (Filled)

**Business**: Raza / Brazaxers  
**Type**: Video Editor Portfolio  
**Audience**: Content creators, YouTubers, influencers  
**One-liner**: "Professional video editing that makes your content impossible to scroll past"

**Design**:
- Primary: #ff3e00
- Accent: #00d4ff
- Background: Dark
- Style: Bold / Cinematic
- Font: Inter

**Sections**: Hero, Social Proof, Services (Features), Reel/Portfolio, Testimonials, Pricing, Contact, Footer

**Animations**: Scroll reveals, Video background, Hover interactions

**Hero**: "Your content deserves better edits" / "Professional video editing for creators who want to stand out" / "Book a Call" / "View Reel"

---

## OpenCode Instructions

When building with OpenCode, include:

1. **Design system first** — colors, typography, spacing
2. **Sections as components** — import from `@/components/sections/primitives`
3. **Cinematic easing** — `cubic-bezier(0.87, 0.05, 0.02, 0.97)`
4. **Scroll reveals** — every section below fold
5. **Dark mode default** — unless specified otherwise
6. **shadcn/ui components** — Button, Card, Input, Badge
7. **Configurable backgrounds** — video, canvas, gradient, solid
8. **Loading states** — Skeleton components
9. **Responsive** — mobile-first
10. **Metadata** — title, description, OG tags
