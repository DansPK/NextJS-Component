"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Cyberpunk Button
 * Neon glows, sci-fi clipping geometry, monospace font.
 */
export function CyberButton({
  className,
  variant = "neon-blue",
  children,
  ...props
}) {
  const baseStyles = "relative font-cyber uppercase font-bold tracking-widest px-8 py-3 text-sm transition-all duration-300 overflow-hidden group focus:outline-none";

  const variants = {
    "neon-blue": "bg-transparent border border-[#00FFFF] text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,255,0.8)]",
    "neon-pink": "bg-transparent border border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF] hover:text-black shadow-[0_0_10px_rgba(255,0,255,0.3)] hover:shadow-[0_0_20px_rgba(255,0,255,0.8)]",
    "solid-yellow": "bg-[#F3E600] text-black border border-[#F3E600] hover:bg-[#FFF200] hover:shadow-[0_0_15px_rgba(243,230,0,0.8)]",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        className
      )}
      {...props}
    >
      {/* Glitch overlay line */}
      <span className="absolute inset-0 w-0 bg-white/20 transition-all duration-300 ease-out group-hover:w-full opacity-0 group-hover:opacity-100"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
