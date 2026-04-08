"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Apple-style minimalist Textarea.
 * @type {React.ForwardRefExoticComponent<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string } & React.RefAttributes<HTMLTextAreaElement>>}
 */
export const Textarea = forwardRef(({ className, error, ...props }, ref) => {
  return (
    <div className="relative w-full flex flex-col gap-2">
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-[14px] border border-[#d2d2d7] bg-white px-4 py-3 text-[15px] font-normal text-[#1d1d1f] shadow-sm transition-all resize-y",
          "dark:border-[#424245] dark:bg-[#1d1d1f] dark:text-[#f5f5f7]",
          "placeholder:text-[#86868b] dark:placeholder:text-[#98989d]",
          "focus-visible:outline-none focus-visible:border-[#0071e3] focus-visible:ring-[4px] focus-visible:ring-[#0071e3]/10",
          "dark:focus-visible:border-[#2997ff] dark:focus-visible:ring-[#2997ff]/20",
          "disabled:cursor-not-allowed disabled:bg-[#f5f5f7] dark:disabled:bg-[#000000] disabled:opacity-60",
          error && "border-[#ff3b30] focus-visible:border-[#ff3b30] focus-visible:ring-[#ff3b30]/10 dark:border-[#ff453a] dark:focus-visible:border-[#ff453a] dark:focus-visible:ring-[#ff453a]/20",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-[13px] text-[#ff3b30] dark:text-[#ff453a] px-1">
          {error}
        </p>
      )}
    </div>
  );
});

Textarea.displayName = "Textarea";
