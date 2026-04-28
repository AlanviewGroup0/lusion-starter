/**
 * Dynamic theme hook that reads and updates CSS custom properties.
 * Project cards set data-color-bg and data-color-text; hovering updates
 * the global --color-bg and --color-text variables for an immersive transition.
 */

import { useEffect, useState, useCallback } from "react";

export interface ThemeColors {
  background: string;
  foreground: string;
  accent: string;
}

export function useTheme() {
  const [colors, setColors] = useState<ThemeColors>({
    background: "#0a0a0a",
    foreground: "#ffffff",
    accent: "#ff3e00",
  });

  /**
   * Update global CSS variables and React state simultaneously.
   * This ensures both inline styles and Tailwind classes pick up the change.
   */
  const updateTheme = useCallback((newColors: Partial<ThemeColors>) => {
    const root = document.documentElement;

    if (newColors.background) {
      root.style.setProperty("--color-bg", newColors.background);
    }
    if (newColors.foreground) {
      root.style.setProperty("--color-text", newColors.foreground);
    }
    if (newColors.accent) {
      root.style.setProperty("--color-accent", newColors.accent);
    }

    setColors((prev) => ({ ...prev, ...newColors }));
  }, []);

  /**
   * Reset theme back to default dark palette.
   */
  const resetTheme = useCallback(() => {
    updateTheme({
      background: "#0a0a0a",
      foreground: "#ffffff",
      accent: "#ff3e00",
    });
  }, [updateTheme]);

  // Initialize CSS variables on mount
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-bg", colors.background);
    root.style.setProperty("--color-text", colors.foreground);
    root.style.setProperty("--color-accent", colors.accent);
  }, []);

  return { colors, updateTheme, resetTheme };
}
