"use client";

import {
  StrokeDrawAnimation,
  BoxFlipAnimation,
  FoldLinesAnimation,
  BounceDotsAnimation,
} from "@/components/yui-animations";

export default function YuiAnimationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-6">
          yui540 / css-animations
        </p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          Pure CSS Motion
        </h1>
        <p className="text-lg text-white/50 max-w-xl mx-auto">
          Four micro-animations adapted from yui540's CSS animation collection.
          No JS. No libraries. Just keyframes, transforms, and timing.
        </p>
      </section>

      {/* Animations Grid */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stroke Draw */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#ff3366]">01</span>
              <h3 className="text-xl font-bold">SVG Stroke Draw</h3>
            </div>
            <p className="text-sm text-white/50 mb-6">
              stroke-dasharray animates from 0 to full length. Stroke-width scales up. Then clears.
            </p>
            <StrokeDrawAnimation />
          </div>

          {/* Box Flip */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#ff3366]">02</span>
              <h3 className="text-xl font-bold">Box Flip</h3>
            </div>
            <p className="text-sm text-white/50 mb-6">
              Multi-layer physics: pull rope → sway → flip rect with overshoot easing.
            </p>
            <BoxFlipAnimation />
          </div>

          {/* Fold Lines */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#ff3366]">03</span>
              <h3 className="text-xl font-bold">Folding Lines</h3>
            </div>
            <p className="text-sm text-white/50 mb-6">
              Sequential rotation with transform-origin changes. Three sides fold into a box.
            </p>
            <FoldLinesAnimation />
          </div>

          {/* Bounce Dots */}
          <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#ff3366]">04</span>
              <h3 className="text-xl font-bold">Bouncing Dots</h3>
            </div>
            <p className="text-sm text-white/50 mb-6">
              Staggered scale + jump with CSS custom properties for per-dot timing and trajectory.
            </p>
            <BounceDotsAnimation />
          </div>
        </div>
      </section>

      {/* Source */}
      <section className="px-6 pb-32 text-center">
        <p className="text-sm text-white/30">
          Source:{" "}
          <a
            href="https://github.com/yui540/css-animations/tree/main/2026-04-29"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white underline underline-offset-4"
          >
            yui540/css-animations
          </a>
        </p>
      </section>
    </main>
  );
}
