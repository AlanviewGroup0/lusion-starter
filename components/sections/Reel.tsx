"use client";

/**
 * Reel / Video showcase section.
 * Displays a large video thumbnail that auto-plays on hover with a scale effect.
 */

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Reel() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (videoContainerRef.current) {
        gsap.from(videoContainerRef.current, {
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reel"
      className="relative py-32 px-6 md:px-12"
    >
      {/* Section label */}
      <div className="mb-12 flex items-center gap-4 text-white/50">
        <span className="text-sm tracking-widest uppercase">Selected Reel</span>
        <div className="flex-1 h-[1px] bg-white/20" />
      </div>

      {/* Video container */}
      <div
        ref={videoContainerRef}
        className="relative aspect-video w-full max-w-7xl mx-auto overflow-hidden rounded-lg cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Thumbnail / Video placeholder */}
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
            alt="Reel thumbnail"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: isHovered ? 1.2 : 1 }}
            transition={{ duration: 0.4 }}
            className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm"
          >
            <svg
              className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </motion.div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-6 right-6 px-3 py-1 rounded-full bg-black/50 text-white text-sm backdrop-blur-sm">
          02:34
        </div>
      </div>

      {/* Reel info */}
      <div className="mt-8 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">2024 Showreel</h2>
          <p className="mt-2 text-white/50 max-w-xl">
            A curated selection of our most ambitious projects, blending 3D,
            motion, and interactive storytelling.
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
        >
          Watch Full Reel
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
