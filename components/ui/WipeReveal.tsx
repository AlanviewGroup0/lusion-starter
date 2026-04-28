"use client";

/**
 * Cinematic wipe reveal using clip-path.
 * Inspired by Really Sick Animations — yui540 style.
 *
 * Usage: Wrap any content. On mount, it reveals with a diagonal wipe.
 * Supports: "diagonal", "arrow", "circle", "horizontal"
 */

import { useRef, useEffect, useState } from "react";

type WipeType = "diagonal" | "arrow" | "circle" | "horizontal" | "vertical";

interface WipeRevealProps {
  children: React.ReactNode;
  type?: WipeType;
  delay?: number;
  duration?: number;
  className?: string;
  bgColor?: string;
  overlayColor?: string;
}

export default function WipeReveal({
  children,
  type = "diagonal",
  delay = 0,
  duration = 1,
  className = "",
  bgColor = "var(--color-bg, #0a0a0a)",
  overlayColor = "var(--color-accent, #ff3e00)",
}: WipeRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const clipPaths: Record<WipeType, { from: string; to: string }> = {
    diagonal: {
      from: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      to: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    arrow: {
      from: "polygon(0 0, 0 0, 50% 50%, 50% 50%)",
      to: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
    },
    circle: {
      from: "circle(0% at 50% 50%)",
      to: "circle(150% at 50% 50%)",
    },
    horizontal: {
      from: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      to: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
    vertical: {
      from: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      to: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    },
  };

  const paths = clipPaths[type];

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ background: bgColor }}
    >
      {/* Content — revealed by clip-path */}
      <div
        className="relative z-10"
        style={{
          clipPath: isRevealed ? paths.to : paths.from,
          transition: `clip-path ${duration}s cubic-bezier(0.87, 0.05, 0.02, 0.97)`,
        }}
      >
        {children}
      </div>

      {/* Overlay layer — slides away to reveal content */}
      <div
        className="absolute inset-0 z-20"
        style={{
          background: overlayColor,
          transform: isRevealed ? "translateX(101%)" : "translateX(0)",
          transition: `transform ${duration}s cubic-bezier(0.87, 0.05, 0.02, 0.97)`,
          transitionDelay: `${delay + 0.15}s`,
        }}
      />

      {/* Second overlay layer — staggered */}
      <div
        className="absolute inset-0 z-30"
        style={{
          background: "#ffffff",
          transform: isRevealed ? "translateX(101%)" : "translateX(0)",
          transition: `transform ${duration}s cubic-bezier(0.87, 0.05, 0.02, 0.97)`,
          transitionDelay: `${delay}s`,
        }}
      />
    </div>
  );
}
