"use client";

/**
 * Footer section with contact info, newsletter signup, and infinite scroll hint.
 * Includes a large "Let's talk" CTA and social links.
 */

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Infinite scroll text animation
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
          xPercent: -50,
          ease: "none",
          duration: 20,
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={sectionRef} id="contact" className="relative pt-32 pb-12 bg-black/30">
      {/* Large CTA */}
      <div className="px-6 md:px-12 mb-24">
        <motion.a
          href="mailto:hello@lusion.co"
          className="group block text-[12vw] md:text-[8vw] font-bold leading-none tracking-tighter text-white hover:text-white/80 transition-colors"
          whileHover={{ x: 20 }}
          transition={{ duration: 0.3 }}
        >
          Let&apos;s Talk
          <span className="inline-block ml-4 transition-transform group-hover:translate-x-2">
            →
          </span>
        </motion.a>
      </div>

      {/* Newsletter */}
      <div className="px-6 md:px-12 mb-24 max-w-xl">
        <p className="text-white/50 text-sm tracking-widest uppercase mb-4">
          Newsletter
        </p>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-transparent border-b border-white/30 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-white transition-colors"
          />
          <button className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Infinite scroll hint */}
      <div className="overflow-hidden py-8 border-t border-white/10">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-[6vw] font-bold tracking-tighter text-white/10 mx-8"
            >
              Scroll to explore more
            </span>
          ))}
        </div>
      </div>

      {/* Footer links */}
      <div className="px-6 md:px-12 pt-12 flex flex-col md:flex-row justify-between gap-8 text-white/50 text-sm">
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">
            Twitter
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Dribbble
          </a>
        </div>
        <p>© 2024 Lusion Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
