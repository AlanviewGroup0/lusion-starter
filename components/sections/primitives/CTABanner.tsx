"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, easeCinematic } from "@/lib/animations";

interface CTABannerProps {
  headline: string;
  subtext?: string;
  cta: { label: string; href: string };
  className?: string;
}

export function CTABanner({ headline, subtext, cta, className }: CTABannerProps) {
  return (
    <section className={cn("px-6 py-24 md:px-12", className)}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-4xl text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-light tracking-tight text-white md:text-5xl"
        >
          {headline}
        </motion.h2>
        {subtext && (
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-zinc-400"
          >
            {subtext}
          </motion.p>
        )}
        <motion.div variants={fadeUp} className="mt-10">
          <a
            href={cta.href}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition-transform hover:scale-[1.02]"
            style={{ transitionTimingFunction: `cubic-bezier(${easeCinematic.join(",")})` }}
          >
            {cta.label}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
