"use client";

/**
 * Minimal header with logo, menu toggle, and CTA.
 * Fixed position with backdrop blur. Logo is clickable to scroll to top.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuOverlay from "./MenuOverlay";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-6 md:px-12">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              closeMenu();
            }}
            className="text-xl font-bold tracking-tighter text-white"
          >
            LUSION
          </a>

          {/* Right side: Menu toggle + CTA */}
          <div className="flex items-center gap-6">
            {/* Menu button */}
            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-[2px] bg-white origin-center"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
                className="block w-6 h-[2px] bg-white origin-center"
              />
            </button>

            {/* CTA - hidden on mobile */}
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 rounded-full text-sm text-white hover:bg-white hover:text-black transition-colors duration-300"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={closeMenu} />}
      </AnimatePresence>
    </>
  );
}
