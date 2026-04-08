"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const BrutalCheckbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-6 w-6 shrink-0 border-4 border-black bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FF00E5] disabled:cursor-not-allowed disabled:opacity-50 transition-all data-[state=checked]:bg-[#00E5FF] data-[state=checked]:shadow-[2px_2px_0px_#000]",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-black")}>
      <Check className="h-4 w-4 stroke-[4]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
BrutalCheckbox.displayName = CheckboxPrimitive.Root.displayName;
export { BrutalCheckbox };
