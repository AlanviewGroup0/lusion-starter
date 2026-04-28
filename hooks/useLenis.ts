/**
 * Lenis smooth scroll hook.
 * Initializes and returns a Lenis instance, auto-refreshing on resize.
 * Integrates with GSAP ScrollTrigger via Lenis' requestAnimationFrame loop.
 */

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis for buttery smooth scroll
    const lenis = new Lenis({
      duration: 1.2, // Slightly longer duration = smoother feel
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Add lenis class to html for CSS hooks
    document.documentElement.classList.add("lenis");

    return () => {
      lenis.destroy();
      document.documentElement.classList.remove("lenis");
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
