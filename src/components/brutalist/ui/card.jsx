"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Neo-Brutalist Card Component
 * Sharp edges, thick borders, solid background colors.
 */
export function BrutalCard({ className, children, color = "white", ...props }) {
  const bgColors = {
    white: "bg-white",
    yellow: "bg-[#FAFF00]",
    blue: "bg-[#00E5FF]",
    pink: "bg-[#FF00E5]",
  };

  return (
    <div
      className={cn(
        "border-4 border-black shadow-[8px_8px_0px_#000] p-6 lg:p-10 font-sans text-black overflow-hidden relative",
        bgColors[color],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
