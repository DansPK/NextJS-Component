"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function CyberBadge({ className, variant = "primary", children, ...props }) {
  const variants = {
    primary: "border-[#00FFFF] text-[#00FFFF] shadow-[0_0_10px_rgba(0,255,255,0.2)]",
    secondary: "border-[#F3E600] text-[#F3E600] shadow-[0_0_10px_rgba(243,230,0,0.2)]",
    danger: "border-[#FF00FF] text-[#FF00FF] shadow-[0_0_10px_rgba(255,0,255,0.2)]",
  };
  return (
    <span
      className={cn(
        "inline-flex font-cyber uppercase items-center border px-2 py-0.5 text-xs tracking-widest bg-[#050505]",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
