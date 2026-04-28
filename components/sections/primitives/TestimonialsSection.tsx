"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}

interface TestimonialsSectionProps {
  label?: string;
  headline: string;
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialsSection({
  label,
  headline,
  testimonials,
  className,
}: TestimonialsSectionProps) {
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <p className="mb-8 text-lg leading-relaxed text-zinc-300">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                {t.avatar ? (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-medium text-white">
                    {t.name[0]}
                  </div>
                )}
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
