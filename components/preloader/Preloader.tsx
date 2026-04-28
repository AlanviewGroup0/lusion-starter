"use client";

/**
 * Preloader with rolling digit counter (00 → 100).
 * Mimics a slot-machine / rolling odometer effect for the loading percentage.
 * Once complete, fades out and unmounts to reveal the page.
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function Preloader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const digitRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Simulate loading progress
  useEffect(() => {
    let current = 0;
    // Randomized increments feel more organic than linear
    const interval = setInterval(() => {
      const increment = Math.floor(Math.random() * 3) + 1;
      current = Math.min(current + increment, 100);
      setCount(current);
      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsComplete(true), 400);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  // Animate digit rolls whenever count changes
  useEffect(() => {
    const tens = Math.floor(count / 10);
    const ones = count % 10;

    digitRefs.current.forEach((el, idx) => {
      if (!el) return;
      const target = idx === 0 ? tens : ones;
      gsap.to(el, {
        y: -target * 10 + "%",
        duration: 0.4,
        ease: "power2.out",
      });
    });
  }, [count]);

  // Completion sequence: fade out and unmount
  useEffect(() => {
    if (!isComplete) return;
    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onComplete?.();
      },
    });

    tl.to(containerRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });
  }, [isComplete, onComplete]);

  const tens = Math.floor(count / 10);
  const ones = count % 10;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: "var(--color-bg)" }}
          initial={{ opacity: 1 }}
        >
          {/* Rolling digit counter */}
          <div className="flex items-center gap-1 text-[15vw] font-bold leading-none tracking-tighter text-white">
            {/* Tens digit */}
            <div className="h-[15vw] overflow-hidden relative">
              <div
                ref={(el) => { digitRefs.current[0] = el; }}
                className="flex flex-col"
              >
                {Array.from({ length: 11 }, (_, i) => (
                  <span key={i} className="h-[15vw] flex items-center justify-center">
                    {i === 10 ? 0 : i}
                  </span>
                ))}
              </div>
            </div>

            {/* Ones digit */}
            <div className="h-[15vw] overflow-hidden relative">
              <div
                ref={(el) => { digitRefs.current[1] = el; }}
                className="flex flex-col"
              >
                {Array.from({ length: 11 }, (_, i) => (
                  <span key={i} className="h-[15vw] flex items-center justify-center">
                    {i === 10 ? 0 : i}
                  </span>
                ))}
              </div>
            </div>

            {/* Percent symbol */}
            <span className="text-[8vw] self-start mt-[2vw]">%</span>
          </div>

          {/* Optional loading hint */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-sm tracking-widest uppercase opacity-50">
            Loading Experience
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
