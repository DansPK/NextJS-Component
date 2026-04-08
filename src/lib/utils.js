import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to conditionally join and merge Tailwind CSS classes safely.
 * Solves conflicts between overlapping Tailwind classes (e.g. padding, colors).
 * 
 * @param {...(string|undefined|null|false)} inputs - Class names, conditionals, or arrays to merge.
 * @returns {string} The safely merged string of Tailwind classes.
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
