"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, easeCinematic } from "@/lib/animations";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
}

interface PricingSectionProps {
  label?: string;
  headline: string;
  tiers: PricingTier[];
  className?: string;
}

export function PricingSection({
  label,
  headline,
  tiers,
  className,
}: PricingSectionProps) {
  return (
    <section className={cn("px-6 py-24 md:px-12", className)}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-6xl"
      >
        {label && (
          <motion.p
            variants={fadeUp}
            className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-zinc-500"
          >
            {label}
          </motion.p>
        )}
        <motion.h2
          variants={fadeUp}
          className="mb-16 text-center text-3xl font-light tracking-tight text-white md:text-5xl"
        >
          {headline}
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3, ease: easeCinematic } }}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8 backdrop-blur-sm",
                tier.highlighted
                  ? "border-white/30 bg-white/10"
                  : "border-white/10 bg-white/5"
              )}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-medium text-black">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-medium text-white">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-light text-white">{tier.price}</span>
                {tier.period && (
                  <span className="text-zinc-500">/{tier.period}</span>
                )}
              </div>
              <p className="mt-2 text-sm text-zinc-400">{tier.description}</p>
              <ul className="mt-8 flex-1 space-y-4">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-zinc-300">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.cta.href}
                className={cn(
                  "mt-8 inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium transition-transform hover:scale-[1.02]",
                  tier.highlighted
                    ? "bg-white text-black"
                    : "border border-white/20 text-white hover:bg-white/10"
                )}
                style={{ transitionTimingFunction: `cubic-bezier(${easeCinematic.join(",")})` }}
              >
                {tier.cta.label}
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
