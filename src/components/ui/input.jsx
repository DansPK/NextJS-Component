"use client";

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Apple-style minimalist input component.
 * Features ultra-subtle borders, refined padding, and fluid error animations.
 * 
 * @type {React.ForwardRefExoticComponent<React.InputHTMLAttributes<HTMLInputElement> & { leftIcon?: React.ReactNode, rightIcon?: React.ReactNode, error?: string } & React.RefAttributes<HTMLInputElement>>}
 */
export const Input = forwardRef(({ 
  className, 
  type = "text", 
  leftIcon, 
  rightIcon,
  error, 
  ...props 
}, ref) => {
  return (
    <div className="relative w-full flex flex-col gap-2">
      <div className="relative flex items-center">
        {leftIcon && (
          <div className="absolute left-4 text-[#86868b] pointer-events-none flex items-center justify-center">
            {leftIcon}
          </div>
        )}
        
        <input
          type={type}
          className={cn(
            "flex h-[50px] w-full rounded-[14px] border border-[#d2d2d7] bg-white px-4 text-[15px] font-normal text-[#1d1d1f] shadow-sm transition-all",
            "dark:border-[#424245] dark:bg-[#1d1d1f] dark:text-[#f5f5f7]",
            "placeholder:text-[#86868b] dark:placeholder:text-[#98989d]",
            "focus-visible:outline-none focus-visible:border-[#0071e3] focus-visible:ring-[4px] focus-visible:ring-[#0071e3]/10",
            "dark:focus-visible:border-[#2997ff] dark:focus-visible:ring-[#2997ff]/20",
            "disabled:cursor-not-allowed disabled:bg-[#f5f5f7] dark:disabled:bg-[#000000] disabled:opacity-60",
            leftIcon && "pl-[44px]",
            rightIcon && "pr-[44px]",
            error && "border-[#ff3b30] focus-visible:border-[#ff3b30] focus-visible:ring-[#ff3b30]/10 dark:border-[#ff453a] dark:focus-visible:border-[#ff453a] dark:focus-visible:ring-[#ff453a]/20",
            className
          )}
          ref={ref}
          {...props}
        />

        {rightIcon && (
          <div className="absolute right-4 text-[#86868b] pointer-events-none flex items-center justify-center">
            {rightIcon}
          </div>
        )}
      </div>
      
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -4, height: 0 }}
            className="text-[13px] text-[#ff3b30] dark:text-[#ff453a] px-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
});

Input.displayName = "Input";
