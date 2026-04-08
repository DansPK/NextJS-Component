"use client";
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

const GlassRadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-3", className)} {...props} ref={ref} />;
});
GlassRadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const GlassRadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-5 w-5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white outline-none transition-all focus:border-white/60 focus:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-white/60 data-[state=checked]:bg-white/20 shadow-[0_2px_10px_rgba(0,0,0,0.1)]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_8px_white]" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
GlassRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
export { GlassRadioGroup, GlassRadioGroupItem };
