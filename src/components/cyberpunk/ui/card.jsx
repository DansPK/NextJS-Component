"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Cyberpunk Card
 * Dark background, neon borders, tech-grid details.
 */
export function CyberCard({ className, children, glow = "none", ...props }) {
  const glows = {
    none: "border-[#333]",
    blue: "border-[#00FFFF] shadow-[0_0_15px_rgba(0,255,255,0.15)]",
    pink: "border-[#FF00FF] shadow-[0_0_15px_rgba(255,0,255,0.15)]",
  };

  return (
    <div
      className={cn(
        "relative bg-[#050505] bg-opacity-90 border font-cyber p-6",
        glows[glow],
        className
      )}
      {...props}
    >
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-2 h-2 bg-current opacity-50"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-current opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-current opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-current opacity-50"></div>
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}
