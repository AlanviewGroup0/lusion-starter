"use client";

/**
 * Full-screen menu overlay with animated links.
 * Uses the "text slide" hover effect: each link shows a duplicate text
 * that slides up on hover for a playful transition.
 */

import { useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Reel", href: "#reel" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function MenuOverlay({ onClose }: { onClose: () => void }) {
  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-40 flex items-center justify-center"
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <nav className="flex flex-col items-center gap-4 md:gap-6">
        {NAV_LINKS.map((link, i) => (
          <motion.div
            key={link.label}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onClose();
                // Smooth scroll to section after menu closes
                setTimeout(() => {
                  const el = document.querySelector(link.href);
                  el?.scrollIntoView({ behavior: "smooth" });
                }, 400);
              }}
              className="group relative block overflow-hidden text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter text-white"
            >
              {/* Original text */}
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                {link.label}
              </span>
              {/* Clone text (slides up from below) */}
              <span
                className="absolute top-full left-0 block transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                style={{ color: "var(--color-accent)" }}
              >
                {link.label}
              </span>
            </a>
          </motion.div>
        ))}
      </nav>

      {/* Footer info inside menu */}
      <div className="absolute bottom-12 left-6 md:left-12 text-sm text-white/50">
        <p>hello@lusion.co</p>
        <p className="mt-1">London / Tokyo</p>
      </div>
    </motion.div>
  );
}
