"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterSectionProps {
  brand?: string;
  tagline?: string;
  columns?: FooterColumn[];
  newsletter?: {
    headline: string;
    placeholder: string;
    button: string;
  };
  socials?: { icon: React.ReactNode; href: string }[];
  copyright?: string;
  className?: string;
}

export function FooterSection({
  brand = "Brand",
  tagline,
  columns = [],
  newsletter,
  socials,
  copyright,
  className,
}: FooterSectionProps) {
  return (
    <footer className={cn("border-t border-white/10 px-6 py-16 md:px-12", className)}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <motion.div variants={fadeUp} className="lg:col-span-1">
            <p className="text-lg font-medium text-white">{brand}</p>
            {tagline && <p className="mt-2 text-sm text-zinc-500">{tagline}</p>}
            {socials && (
              <div className="mt-6 flex gap-4">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="text-zinc-500 transition-colors hover:text-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </motion.div>
          {columns.map((col, i) => (
            <motion.div key={i} variants={fadeUp}>
              <p className="text-sm font-medium uppercase tracking-wider text-zinc-500">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {newsletter && (
          <motion.div variants={fadeUp} className="mt-12 border-t border-white/10 pt-8">
            <p className="text-sm font-medium text-white">{newsletter.headline}</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-500 outline-none focus:border-white/30"
              />
              <button
                type="submit"
                className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black"
              >
                {newsletter.button}
              </button>
            </form>
          </motion.div>
        )}
        {copyright && (
          <motion.p variants={fadeUp} className="mt-12 text-xs text-zinc-600">
            {copyright}
          </motion.p>
        )}
      </motion.div>
    </footer>
  );
}
