"use client";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const GlassProgress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-3 w-full overflow-hidden rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-inner", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-gradient-to-r from-purple-400/80 to-blue-400/80 transition-all drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
GlassProgress.displayName = ProgressPrimitive.Root.displayName;
export { GlassProgress };
