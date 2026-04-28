"use client";

/**
 * Hero section with large headline and scroll indicator.
 * Text reveals with a staggered word animation on load.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal: fade up + slight scale
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          y: 80,
          opacity: 0,
          scale: 0.98,
          duration: 1.4,
          ease: "power3.out",
          delay: 0.2,
        });
      }

      // Scroll indicator fade in after headline
      if (scrollIndicatorRef.current) {
        gsap.from(scrollIndicatorRef.current, {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 1.2,
          ease: "power2.out",
        });
      }

      // Parallax on scroll: headline moves up faster than scroll
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      <h1
        ref={headlineRef}
        className="text-[10vw] md:text-[7vw] font-bold leading-[0.95] tracking-tighter text-center text-white max-w-6xl"
      >
        We craft
        <br />
        <span style={{ color: "var(--color-accent)" }}>immersive</span>
        <br />
        digital experiences
      </h1>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/60"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
}
