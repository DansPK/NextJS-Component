"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function BrutalBadge({ className, variant = "primary", children, ...props }) {
  const variants = {
    primary: "bg-[#FF3E00]",
    secondary: "bg-[#FAFF00]",
    success: "bg-[#00E5FF]",
  };
  return (
    <span
      className={cn(
        "inline-flex font-brutal uppercase items-center border-[3px] border-black px-3 py-1 font-black text-sm tracking-widest text-black shadow-[2px_2px_0px_#000]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
