"use client";

/**
 * Home page composing all sections.
 * Hero -> Reel -> ProjectGrid -> Philosophy -> Footer
 * Includes scroll-driven SVG path that draws as you scroll.
 */

import { useLenis } from "@/hooks/useLenis";
import Hero from "@/components/sections/Hero";
import Reel from "@/components/sections/Reel";
import ProjectGrid from "@/components/sections/ProjectGrid";
import Philosophy from "@/components/sections/Philosophy";
import Footer from "@/components/sections/Footer";
import ScrollPath from "@/components/sections/ScrollPath";

export default function Home() {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <>
      {/* Scroll-driven SVG path — draws as you scroll */}
      <ScrollPath />
      
      <Hero />
      <Reel />
      <ProjectGrid />
      <Philosophy />
      <Footer />
    </>
  );
}
