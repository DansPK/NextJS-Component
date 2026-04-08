import React from "react";
import { cn } from "@/lib/utils";

/**
 * Apple-style minimalist Badge component.
 * @param {Object} props
 * @param {'default' | 'secondary' | 'success' | 'destructive'} [props.variant='default']
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export function Badge({ className, variant = "default", children, ...props }) {
  const variants = {
    default: "bg-[#1d1d1f] text-white dark:bg-white dark:text-[#1d1d1f]",
    secondary: "bg-[#f5f5f7] text-[#1d1d1f] dark:bg-[#2c2c2e] dark:text-[#f5f5f7]",
    success: "bg-[#e5f5ea] text-[#34c759] dark:bg-[#34c759]/10 dark:text-[#32d74b]",
    destructive: "bg-[#fff0f0] text-[#ff3b30] dark:bg-[#ff3b30]/10 dark:text-[#ff453a]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
