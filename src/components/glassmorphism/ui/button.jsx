"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Glassmorphic Button
 * Frosted glass look with soft hover glow.
 */
export function GlassButton({
  className,
  variant = "primary",
  children,
  ...props
}) {
  const baseStyles = "relative px-6 py-2.5 rounded-2xl font-medium tracking-wide transition-all backdrop-blur-md border outline-none";

  const variants = {
    primary: "bg-white/20 border-white/30 text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-white/30 hover:border-white/50 hover:shadow-[0_4px_25px_rgba(255,255,255,0.2)]",
    secondary: "bg-black/20 border-white/10 text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:bg-black/40 hover:border-white/20",
    darkGlass: "bg-[#111111]/40 border-[rgba(255,255,255,0.05)] text-white shadow-[0_4px_15px_rgba(0,0,0,0.5)] hover:bg-[#111111]/60 hover:border-[rgba(255,255,255,0.1)]",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
