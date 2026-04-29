'use client';

import { useEffect, useRef } from 'react';

/**
 * SVG Stroke Draw Animation
 * From: yui540/css-animations (tips-1)
 * Technique: stroke-dasharray + stroke-dashoffset for draw/clear effect
 */
export function StrokeDrawAnimation() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Restart animation on mount
    const polyline = svgRef.current?.querySelector('polyline');
    if (polyline) {
      polyline.style.animation = 'none';
      polyline.offsetHeight; // trigger reflow
      polyline.style.animation = '';
    }
  }, []);

  return (
    <div className="relative w-full max-w-[320px] aspect-square bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden mx-auto mt-16">
      <svg
        ref={svgRef}
        className="block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%]"
        viewBox="0 0 48.87 48.78"
      >
        <style>{`
          .stroke-draw {
            --stroke-length: 231px;
            --stroke-width: 11px;
            fill: none;
            stroke: #ff3366;
            stroke-linecap: round;
            stroke-linejoin: round;
            animation: draw-line 1.2s ease-in-out 0s both, clear-line 1.2s ease-in-out 1.3s forwards;
          }
          @keyframes draw-line {
            from { opacity: 0; }
            10%, to { opacity: 1; }
            from {
              stroke-dasharray: 0 var(--stroke-length);
              stroke-width: calc(var(--stroke-width) * 0.45);
            }
            to {
              stroke-dasharray: var(--stroke-length) var(--stroke-length);
              stroke-width: var(--stroke-width);
            }
          }
          @keyframes clear-line {
            from, 90% { opacity: 1; }
            to { opacity: 0; }
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: calc(var(--stroke-length) * -1); }
          }
        `}</style>
        <polyline
          className="stroke-draw"
          points="6.01 15.13 24.92 5.5 5.5 29.59 42.73 10.02 7.42 41.24 43.37 23.89 22.39 43.28 42.99 37.97"
        />
      </svg>
    </div>
  );
}
