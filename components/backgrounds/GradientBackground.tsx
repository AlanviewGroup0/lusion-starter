"use client";

import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  variant?: "aurora" | "mesh" | "radial" | "linear";
  className?: string;
  overlay?: boolean;
  overlayOpacity?: number;
}

const variants = {
  aurora: "bg-gradient-to-br from-violet-900/30 via-purple-900/20 to-blue-900/30",
  mesh: "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-900/20 via-slate-900/40 to-cyan-900/20",
  radial: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/40 via-black to-black",
  linear: "bg-gradient-to-b from-zinc-900/50 via-black to-black",
};

export function GradientBackground({
  variant = "mesh",
  className,
  overlay = true,
  overlayOpacity = 0.6,
}: GradientBackgroundProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 -z-10 animate-pulse-slow",
        variants[variant],
        className
      )}
    >
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
    </div>
  );
}
