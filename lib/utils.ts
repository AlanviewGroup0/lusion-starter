/**
 * Utility functions shared across the project.
 * Includes the cn() helper for conditional Tailwind class merging.
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for clean conditional class strings.
 * Usage: cn("base-class", condition && "conditional-class", "always-class")
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number as a two-digit string (e.g., 5 -> "05", 42 -> "42").
 * Used for the preloader counter and other digit displays.
 */
export function padTwoDigits(num: number): string {
  return num.toString().padStart(2, "0");
}

/**
 * Linear interpolation between two values.
 * Used for smooth animations and cursor following.
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Clamp a value between min and max bounds.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Map a value from one range to another.
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
