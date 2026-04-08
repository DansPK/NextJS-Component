"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function GlassBadge({ className, variant = "primary", children, ...props }) {
  const variants = {
    primary: "bg-white/20 border border-white/30 text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]",
    secondary: "bg-black/20 border border-white/10 text-white/90",
    glow: "bg-purple-500/30 border border-purple-400/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]",
  };
  return (
    <span
      className={cn(
        "inline-flex font-sans backdrop-blur-md rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
