"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Neo-Brutalist Button Component
 * Features thick black borders, hard offset shadows, and sharp corners.
 */
export function BrutalButton({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}) {
  const baseStyles = "font-brutal font-bold uppercase tracking-wide border-4 border-black transition-all active:translate-y-1 active:translate-x-1 active:shadow-none outline-none focus-visible:ring-4 focus-visible:ring-black/20";
  
  const variants = {
    primary: "bg-[#FF3E00] text-black hover:bg-[#FF5500] shadow-[4px_4px_0px_#000]",
    secondary: "bg-[#00E5FF] text-black hover:bg-[#33EFFF] shadow-[4px_4px_0px_#000]",
    ghost: "bg-white text-black hover:bg-gray-100 shadow-[4px_4px_0px_#000]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
