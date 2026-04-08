"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * Glassmorphism Product Card
 * Highly blurred, premium look, perfect for colorful backgrounds.
 */
export function GlassProductCard({ 
  className, 
  title,
  price,
  imageSrc,
  children, 
  ...props 
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col p-4 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-black/20 border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)]",
        className
      )}
      {...props}
    >
      {/* Glossy top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
      
      <div className="aspect-square w-full rounded-2xl bg-white/5 mb-4 overflow-hidden flex items-center justify-center p-8">
        {/* Placeholder for Product Image */}
        {imageSrc ? (
          <img src={imageSrc} alt={title} className="object-cover w-full h-full drop-shadow-2xl" />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-400 to-pink-300 blur-xl opacity-60 mix-blend-screen"></div>
        )}
      </div>

      <div className="flex justify-between items-end px-2 pb-2 mt-auto">
        <div>
          <h3 className="text-lg font-semibold text-white drop-shadow-sm">{title}</h3>
          <p className="text-white/70 font-medium">{price}</p>
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
