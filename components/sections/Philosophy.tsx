"use client";

/**
 * Philosophy section with scroll-driven text reveal.
 * Large typography that reveals progressively as the user scrolls.
 */

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const LINES = [
  "We believe in",
  "the power of",
  "",
  "{ imagination }",
  "",
  "to transform",
  "brands",
  "",
  "and move",
  "people.",
];

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      linesRef.current.forEach((line, i) => {
        if (!line) return;

        // Each line fades in + slides up when it enters viewport
        gsap.from(line, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          },
        });

        // Highlighted lines get a color shift on scroll
        if (line.dataset.highlight) {
          gsap.to(line, {
            color: "var(--color-accent)",
            scrollTrigger: {
              trigger: line,
              start: "top 60%",
              end: "top 30%",
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-40 md:py-60 px-6 md:px-12 bg-black/20"
    >
      <div className="max-w-6xl mx-auto">
        {LINES.map((line, i) => (
          <div
            key={i}
            ref={(el) => { linesRef.current[i] = el; }}
            data-highlight={line.includes("{") || undefined}
            className={`text-[8vw] md:text-[5vw] font-bold leading-[1.1] tracking-tighter text-white transition-colors duration-300 ${
              line.includes("{") ? "font-mono" : ""
            }`}
          >
            {line.replace(/[{}]/g, "") || "\u00A0"}
          </div>
        ))}
      </div>
    </section>
  );
}
