"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * Apple-style minimalist button component.
 * Features subtle interaction animations and highly readable, sleek aesthetics.
 * 
 * @param {Object} props - Component props
 * @param {'primary' | 'secondary' | 'ghost' | 'destructive'} [props.variant='primary'] - Visual style
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Button size
 * @param {boolean} [props.isLoading=false] - Whether the button is in a loading state
 * @param {boolean} [props.fullWidth=false] - Whether to span the full width of the container
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Optional additional CSS classes
 */
export function Button({
  className,
  variant = "primary",
  size = "md",
  isLoading = false,
  fullWidth = false,
  children,
  ...props
}) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-[14px]";
  
  const variants = {
    primary: "bg-[#000000] text-white hover:bg-[#1d1d1f] dark:bg-white dark:text-black dark:hover:bg-[#f5f5f7] focus-visible:ring-black dark:focus-visible:ring-white",
    secondary: "bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#e8e8ed] dark:bg-[#1d1d1f] dark:text-[#f5f5f7] dark:hover:bg-[#2d2d2f] focus-visible:ring-gray-400",
    ghost: "bg-transparent text-[#1d1d1f] hover:bg-[#f5f5f7] dark:text-[#f5f5f7] dark:hover:bg-[#1d1d1f] focus-visible:ring-gray-400",
    destructive: "bg-[#fff0f0] text-[#ff3b30] hover:bg-[#ffe5e5] dark:bg-[#ff3b30]/10 dark:text-[#ff453a] dark:hover:bg-[#ff3b30]/20 focus-visible:ring-[#ff3b30]",
  };

  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-[44px] px-6 text-[15px]", // Apple standard tap target size
    lg: "h-[50px] px-8 text-base",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-[2px] border-current border-t-transparent" />
      )}
      {children}
    </motion.button>
  );
}
