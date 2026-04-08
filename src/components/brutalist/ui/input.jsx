"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export const BrutalInput = forwardRef(({ className, error, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 w-full font-sans font-medium text-black">
      <input
        className={cn(
          "w-full px-4 py-3 bg-white border-4 border-black text-lg outline-none transition-all placeholder:text-black/50 focus:bg-[#FAFF00] focus:shadow-[4px_4px_0px_#000]",
          error && "bg-[#FF00E5] placeholder:text-black focus:bg-[#FF00E5]",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && <span className="font-brutal font-bold uppercase text-[#FF00E5] text-sm mt-1">{error}</span>}
    </div>
  );
});
BrutalInput.displayName = "BrutalInput";
