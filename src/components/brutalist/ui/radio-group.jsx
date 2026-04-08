"use client";
import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "@/lib/utils";

const BrutalRadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return <RadioGroupPrimitive.Root className={cn("grid gap-3", className)} {...props} ref={ref} />;
});
BrutalRadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const BrutalRadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "aspect-square h-6 w-6 rounded-none border-4 border-black bg-white text-black outline-none transition-all focus:bg-[#FAFF00] focus:shadow-[2px_2px_0_#000] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[#FF3E00] data-[state=checked]:shadow-[2px_2px_0_#000]",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div className="h-2 w-2 bg-black" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
BrutalRadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
export { BrutalRadioGroup, BrutalRadioGroupItem };
