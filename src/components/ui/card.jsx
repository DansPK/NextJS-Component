"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * Apple-style minimalist card container.
 * Uses soft, diffuse shadows and gently rounded corners typical of iOS/macOS UI.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className] - Additional classes
 * @param {boolean} [props.hoverable=false] - Whether the card lifts slightly on hover
 */
export function Card({ className, children, hoverable = false, ...props }) {
  const Component = hoverable ? motion.div : "div";
  const motionProps = hoverable 
    ? { 
        whileHover: { y: -4, scale: 1.005 }, 
        transition: { type: "spring", stiffness: 300, damping: 20 } 
      } 
    : {};

  return (
    <Component
      className={cn(
        "rounded-[22px] border border-transparent bg-white w-full p-8",
        "shadow-[0_8px_30px_rgb(0,0,0,0.04)]", // Soft Apple-like diffuse shadow
        "dark:bg-[#1c1c1e] dark:border-[#2c2c2e] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]",
        className
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}
