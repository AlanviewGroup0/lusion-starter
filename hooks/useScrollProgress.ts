/**
 * Scroll progress tracking hook.
 * Returns normalized scroll progress (0 to 1) for the entire page
 * and individual section tracking utilities.
 */

import { useEffect, useState, useCallback, useRef } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);

  const handleScroll = useCallback(() => {
    // Cancel any pending animation frame to avoid over-updating
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(clamp(scrollProgress, 0, 1));
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return progress;
}

/** Clamp helper (avoids importing from utils to keep hook self-contained) */
function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
