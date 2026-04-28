"use client";

/**
 * Project grid section with dynamic theming.
 * Each card has data-color-bg and data-color-text attributes.
 * Hovering a card updates the global CSS variables for an immersive transition.
 */

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROJECTS = [
  {
    id: "1",
    title: "Neon Horizons",
    category: "Web Experience",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2340&auto=format&fit=crop",
    href: "#",
    colorBg: "#0f172a",
    colorText: "#38bdf8",
  },
  {
    id: "2",
    title: "Flux Studio",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2340&auto=format&fit=crop",
    href: "#",
    colorBg: "#2a0f1e",
    colorText: "#f472b6",
  },
  {
    id: "3",
    title: "Prism Labs",
    category: "3D Experience",
    image: "https://images.unsplash.com/photo-1634017839464-5c339bbe3c43?q=80&w=2340&auto=format&fit=crop",
    href: "#",
    colorBg: "#1a1a2e",
    colorText: "#e94560",
  },
  {
    id: "4",
    title: "Aether Design",
    category: "Motion Design",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2340&auto=format&fit=crop",
    href: "#",
    colorBg: "#0d1b2a",
    colorText: "#00b4d8",
  },
];

export default function ProjectGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll("[data-project-card]");
      if (!cards) return;

      gsap.from(cards, {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: {
          each: 0.15,
          from: "start",
        },
        ease: "cubic-bezier(0.87, 0.05, 0.02, 0.97)", // Cinematic
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (colorBg: string, colorText: string) => {
    document.documentElement.style.setProperty("--color-bg", colorBg);
    document.documentElement.style.setProperty("--color-text", colorText);
  };

  const handleMouseLeave = () => {
    document.documentElement.style.setProperty("--color-bg", "#0a0a0a");
    document.documentElement.style.setProperty("--color-text", "#ffffff");
  };

  return (
    <section ref={sectionRef} id="work" className="py-32 px-6 md:px-12">
      {/* Section label */}
      <div className="mb-16 flex items-center gap-4 text-white/50">
        <span className="text-sm tracking-widest uppercase">Selected Work</span>
        <div className="flex-1 h-[1px] bg-white/20" />
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.href}
            data-project-card
            data-color-bg={project.colorBg}
            data-color-text={project.colorText}
            onMouseEnter={() => handleMouseEnter(project.colorBg, project.colorText)}
            onMouseLeave={handleMouseLeave}
            className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
          >
            {/* Image */}
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="text-sm tracking-widest uppercase text-white/60">
                {project.category}
              </span>
              <h3 className="mt-2 text-3xl md:text-4xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            {/* Arrow */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
