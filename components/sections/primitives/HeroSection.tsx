"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, easeCinematic } from "@/lib/animations";

interface HeroSectionProps {
  label?: string;
  headline: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visual?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

export function HeroSection({
  label,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  visual,
  className,
  align = "center",
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-screen flex-col justify-center px-6 py-24 md:px-12",
        align === "center" && "items-center text-center",
        align === "left" && "items-start text-left",
        className
      )}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className={cn(
          "max-w-4xl",
          align === "center" && "mx-auto"
        )}
      >
        {label && (
          <motion.p
            variants={fadeUp}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500"
          >
            {label}
          </motion.p>
        )}
        <motion.h1
          variants={fadeUp}
          className="text-4xl font-light leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          {headline}
        </motion.h1>
        {subheadline && (
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl"
          >
            {subheadline}
          </motion.p>
        )}
        <motion.div
          variants={fadeUp}
          className={cn(
            "mt-10 flex gap-4",
            align === "center" && "justify-center"
          )}
        >
          {primaryCta && (
            <a
              href={primaryCta.href}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
              style={{ transitionTimingFunction: `cubic-bezier(${easeCinematic.join(",")})` }}
            >
              {primaryCta.label}
            </a>
          )}
          {secondaryCta && (
            <a
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              {secondaryCta.label}
            </a>
          )}
        </motion.div>
      </motion.div>
      {visual && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: easeCinematic }}
          className="mt-16 w-full"
        >
          {visual}
        </motion.div>
      )}
    </section>
  );
}
