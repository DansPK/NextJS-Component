"use client";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const BrutalSlider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-6 w-full grow overflow-hidden border-4 border-black bg-white">
      <SliderPrimitive.Range className="absolute h-full bg-[#FF00E5] border-r-4 border-black" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-10 w-6 border-4 border-black bg-[#FAFF00] shadow-[2px_2px_0_#000] transition-transform hover:scale-110 focus:outline-none disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
BrutalSlider.displayName = SliderPrimitive.Root.displayName;
export { BrutalSlider };
