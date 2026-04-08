"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const GlassCheckbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-5 w-5 shrink-0 rounded-[6px] border border-white/30 bg-white/10 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white/30 data-[state=checked]:border-white/50 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.1)]",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-white drop-shadow-md")}>
      <Check className="h-3.5 w-3.5 stroke-[3]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
GlassCheckbox.displayName = CheckboxPrimitive.Root.displayName;
export { GlassCheckbox };
