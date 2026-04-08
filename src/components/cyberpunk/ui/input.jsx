"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const CyberInput = forwardRef(({ className, error, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full font-cyber text-[#00FFFF]">
      <input
        className={cn(
          "w-full px-4 py-3 bg-[#050505] border border-[#333] text-[#00FFFF] outline-none transition-all placeholder:text-[#333] focus:border-[#00FFFF] focus:shadow-[0_0_15px_rgba(0,255,255,0.3)]",
          error && "border-[#FF00FF] text-[#FF00FF] focus:border-[#FF00FF] focus:shadow-[0_0_15px_rgba(255,0,255,0.3)]",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && <span className="text-[#FF00FF] text-xs uppercase tracking-widest mt-1">ERR: {error}</span>}
    </div>
  );
});
CyberInput.displayName = "CyberInput";
