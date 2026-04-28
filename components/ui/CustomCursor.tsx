"use client";

/**
 * Custom cursor component.
 * Replaces the default cursor with a smooth, lagging circle that
 * scales on interactive elements.
 */

import { useEffect, useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth spring for cursor following
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    document.body.classList.add("custom-cursor-active");
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener("mousemove", handleMouseMove);

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, textarea"
    );

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 60 : 20,
            height: isHovering ? 60 : 20,
            backgroundColor: isHovering ? "transparent" : "#ffffff",
            border: isHovering ? "2px solid #ffffff" : "none",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-full -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </>
  );
}
