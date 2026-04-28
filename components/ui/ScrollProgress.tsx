"use client";

/**
 * Scroll progress bar.
 * Fixed at the top of the viewport, width maps to scroll progress (0% → 100%).
 */

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Smooth the progress value for a buttery bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{
        scaleX,
        backgroundColor: "var(--color-accent)",
      }}
    />
  );
}
