"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const GlassInput = forwardRef(({ className, error, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full font-sans text-white">
      <input
        className={cn(
          "w-full px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 outline-none transition-all placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 focus:shadow-[0_4px_25px_rgba(255,255,255,0.1)]",
          error && "border-red-400 bg-red-500/10 focus:border-red-400",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && <span className="text-red-400 text-sm ml-2 mt-1 drop-shadow-sm">{error}</span>}
    </div>
  );
});
GlassInput.displayName = "GlassInput";
