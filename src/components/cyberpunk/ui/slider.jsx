"use client";
import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const CyberSlider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden bg-[#222]">
      <SliderPrimitive.Range className="absolute h-full bg-[#00FFFF] shadow-[0_0_10px_#00FFFF]" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-6 w-3 bg-[#00FFFF] border border-white shadow-[0_0_15px_#00FFFF] transition-transform hover:scale-110 focus:outline-none focus:scale-125 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
CyberSlider.displayName = SliderPrimitive.Root.displayName;
export { CyberSlider };
