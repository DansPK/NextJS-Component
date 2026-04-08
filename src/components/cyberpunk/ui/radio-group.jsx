"use client";
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

const CyberRadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-3", className)} {...props} ref={ref} />;
});
CyberRadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const CyberRadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-5 w-5 rounded-full border border-[#333] bg-[#050505] text-[#00FFFF] outline-none transition-all focus:border-[#00FFFF] focus:shadow-[0_0_10px_rgba(0,255,255,0.4)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-[#00FFFF] data-[state=checked]:shadow-[0_0_10px_rgba(0,255,255,0.4)]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2.5 w-2.5 rounded-full bg-current shadow-[0_0_5px_current]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
CyberRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
export { CyberRadioGroup, CyberRadioGroupItem };
