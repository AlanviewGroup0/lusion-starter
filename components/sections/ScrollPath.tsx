"use client";

import { useRef, useEffect } from "react";

export default function ScrollPath() {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;

    const length = path.getTotalLength();

    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const updatePath = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;

      let progress = scrollY / totalHeight;
      progress = Math.max(0, Math.min(1, progress));

      const offset = length * (1 - progress);
      path.style.strokeDashoffset = `${offset}`;
    };

    window.addEventListener("scroll", updatePath, { passive: true });
    window.addEventListener("resize", updatePath);
    updatePath();

    return () => {
      window.removeEventListener("scroll", updatePath);
      window.removeEventListener("resize", updatePath);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="absolute top-0 left-0 w-full pointer-events-none"
      style={{ height: "500vh", zIndex: -1 }}
      viewBox="0 0 100 500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Big dramatic loops — like a roller coaster track */}
      <path
        ref={pathRef}
        d="M20,0
           C60,0 100,30 90,70
           C80,110 40,130 10,100
           C-10,70 20,160 55,190
           C90,220 110,280 85,330
           C60,380 15,410 15,380
           C15,350 40,440 75,470
           C110,500 130,560 100,610
           C70,660 20,690 20,660"
        fill="none"
        stroke="var(--color-accent, #ff3e00)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.5"
      />
    </svg>
  );
}
