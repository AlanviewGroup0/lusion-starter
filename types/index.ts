/**
 * Shared TypeScript types for the lusion-starter project.
 * Centralizing types ensures consistency across components and hooks.
 */

/** Represents a project item displayed in the ProjectGrid section */
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
  /** Hex color used for the background when hovering */
  colorBg: string;
  /** Hex color used for the text when hovering */
  colorText: string;
}

/** Represents a navigation link used in the header/menu */
export interface NavLink {
  label: string;
  href: string;
}

/** Represents a reel / video showcase item */
export interface ReelItem {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
}

/** Represents a philosophy statement line (scroll-driven) */
export interface PhilosophyLine {
  text: string;
  highlight?: boolean;
}

/** Theme colors derived from CSS custom properties */
export interface ThemeColors {
  background: string;
  foreground: string;
  accent: string;
}

/** Preloader animation states */
export type PreloaderState = 'loading' | 'complete';
