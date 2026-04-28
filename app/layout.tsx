import type { Metadata } from "next";
import "./globals.css";

import Scene from "@/components/canvas/Scene";
import Preloader from "@/components/preloader/Preloader";
import Header from "@/components/navigation/Header";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackgroundReveal from "@/components/ui/BackgroundReveal";

export const metadata: Metadata = {
  title: "Lusion Starter — Immersive Web Experiences",
  description:
    "A Next.js starter template inspired by lusion.co. Three.js backgrounds, GSAP scroll animations, Lenis smooth scroll, and dynamic theming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]">
        {/* Preloader */}
        <Preloader />

        {/* Three.js background scene */}
        <Scene />

        {/* White overlay — hides 3D until last sections */}
        <BackgroundReveal />

        {/* Global UI overlays */}
        <Header />
        <CustomCursor />
        <ScrollProgress />

        {/* Page content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
