"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer, easeCinematic } from "@/lib/animations";

interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  label?: string;
  headline: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function FeaturesGrid({
  label,
  headline,
  features,
  columns = 3,
  className,
}: FeaturesGridProps) {
  const colClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

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
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-zinc-500"
          >
            {label}
          </motion.p>
        )}
        <motion.h2
          variants={fadeUp}
          className="mb-16 text-3xl font-light tracking-tight text-white md:text-5xl"
        >
          {headline}
        </motion.h2>
        <div className={cn("grid gap-8", colClass[columns])}>
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.3, ease: easeCinematic } }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              {feature.icon && (
                <div className="mb-6 text-zinc-400 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              )}
              <h3 className="mb-3 text-lg font-medium text-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
