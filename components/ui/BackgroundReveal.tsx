"use client";

/**
 * Black overlay that covers the 3D background until the last sections.
 * Hard-cut reveal: "parallel plane" snaps away instantly at scroll point.
 * No gradual fade — a sudden peel-back to reveal the universe underneath.
 */

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BackgroundReveal() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const ctx = gsap.context(() => {
      // Hard-cut reveal: overlay snaps off instantly
      // "Oh, this is a hard layer" — parallel plane peel
      ScrollTrigger.create({
        trigger: "#about",
        start: "top 60%",
        onEnter: () => {
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.15, // quick snap, not a gradual fade
            ease: "power1.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to(overlay, {
            opacity: 1,
            duration: 0.15,
            ease: "power1.inOut",
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        background: "#000000", // Solid black for contrast
        zIndex: -5, // Between Scene (-10) and content
      }}
    />
  );
}
