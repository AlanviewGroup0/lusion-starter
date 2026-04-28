"use client";

import { useLenis } from "@/hooks/useLenis";
import { MeshBackground } from "@/components/backgrounds";
import {
  HeroSection,
  FeaturesGrid,
  TestimonialsSection,
  PricingSection,
  CTABanner,
  FooterSection,
} from "@/components/sections/primitives";

const features = [
  {
    title: "Lightning Fast",
    description: "Optimized for performance with instant load times and smooth 60fps animations.",
  },
  {
    title: "Fully Responsive",
    description: "Looks stunning on every device, from mobile phones to ultra-wide monitors.",
  },
  {
    title: "Dark by Default",
    description: "Premium dark aesthetic that makes your content pop and reduces eye strain.",
  },
  {
    title: "Scroll Reveals",
    description: "Cinematic entrance animations triggered by scroll position using GSAP ScrollTrigger.",
  },
  {
    title: "Video Backgrounds",
    description: "Seamless looping video backgrounds with automatic overlay for text readability.",
  },
  {
    title: "3D Ready",
    description: "React Three Fiber integration with particle systems and shader support.",
  },
];

const testimonials = [
  {
    quote: "This starter saved us weeks of setup time. The animations are buttery smooth.",
    name: "Sarah Chen",
    role: "Founder",
    company: "Nexus Labs",
  },
  {
    quote: "Best Next.js template I've used. The scroll effects are incredible.",
    name: "Marcus Johnson",
    role: "Lead Developer",
    company: "Vercel",
  },
  {
    quote: "Shipped our landing page in 2 days instead of 2 weeks.",
    name: "Elena Rodriguez",
    role: "Designer",
    company: "Studio Nine",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$0",
    description: "Open source and free forever.",
    features: ["Next.js 15", "Tailwind CSS v4", "Framer Motion", "GSAP ScrollTrigger", "Community support"],
    cta: { label: "Get Started", href: "https://github.com/AlanviewGroup0/web-animated-starter" },
  },
  {
    name: "Pro",
    price: "$49",
    period: "mo",
    description: "For professional projects.",
    features: ["Everything in Starter", "Priority support", "Custom components", "Background library", "Prompt templates"],
    cta: { label: "Coming Soon", href: "#" },
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$199",
    period: "mo",
    description: "For teams and agencies.",
    features: ["Everything in Pro", "White-label license", "Team collaboration", "Advanced shaders", "Dedicated support"],
    cta: { label: "Contact Us", href: "#" },
  },
];

export default function Showcase() {
  useLenis();

  return (
    <>
      <MeshBackground overlayOpacity={0.8} />
      
      <HeroSection
        label="Web Animated Starter"
        headline="Build stunning animated sites in hours, not weeks"
        subheadline="A production-ready Next.js template with 3D backgrounds, scroll-driven animations, and reusable section primitives."
        primaryCta={{ label: "Get Started", href: "https://github.com/AlanviewGroup0/web-animated-starter" }}
        secondaryCta={{ label: "View Demo", href: "/" }}
      />

      <FeaturesGrid
        label="Features"
        headline="Everything you need to ship fast"
        features={features}
      />

      <TestimonialsSection
        label="Testimonials"
        headline="Loved by developers"
        testimonials={testimonials}
      />

      <PricingSection
        label="Pricing"
        headline="Simple, transparent pricing"
        tiers={pricing}
      />

      <CTABanner
        headline="Ready to build something amazing?"
        subtext="Clone the repo and start building today."
        cta={{ label: "Clone on GitHub", href: "https://github.com/AlanviewGroup0/web-animated-starter" }}
      />

      <FooterSection
        brand="Web Animated Starter"
        tagline="Ship fast. Ship well."
        columns={[
          {
            title: "Product",
            links: [
              { label: "Features", href: "#" },
              { label: "Showcase", href: "#" },
              { label: "Pricing", href: "#" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Documentation", href: "#" },
              { label: "Components", href: "#" },
              { label: "Backgrounds", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "GitHub", href: "https://github.com/AlanviewGroup0/web-animated-starter" },
              { label: "Twitter", href: "#" },
              { label: "Discord", href: "#" },
            ],
          },
        ]}
        copyright="© 2026 Web Animated Starter. Open source under MIT license."
      />
    </>
  );
}
