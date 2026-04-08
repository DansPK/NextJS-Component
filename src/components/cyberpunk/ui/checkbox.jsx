"use client";
import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const CyberCheckbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-5 w-5 shrink-0 border border-[#333] bg-[#050505] focus-visible:outline-none focus-visible:border-[#00FFFF] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[#00FFFF] data-[state=checked]:shadow-[0_0_10px_#00FFFF] transition-all",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className={cn("flex items-center justify-center text-[#00FFFF]")}>
      <Check className="h-4 w-4 stroke-[3]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
CyberCheckbox.displayName = CheckboxPrimitive.Root.displayName;
export { CyberCheckbox };
