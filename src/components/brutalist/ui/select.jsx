"use client";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const BrutalSelect = SelectPrimitive.Root;
const BrutalSelectGroup = SelectPrimitive.Group;
const BrutalSelectValue = SelectPrimitive.Value;

const BrutalSelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-12 w-full items-center justify-between border-4 border-black bg-white px-4 py-2 font-bold font-sans text-black shadow-[4px_4px_0_#000] focus:outline-none focus:bg-[#00E5FF] disabled:cursor-not-allowed disabled:opacity-50 transition-colors uppercase tracking-wider",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-5 w-5 stroke-[4]" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
BrutalSelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const BrutalSelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden border-4 border-black bg-white text-black shadow-[8px_8px_0_#000]",
        position === "popper" && "data-[side=bottom]:translate-y-2 data-[side=top]:-translate-y-2",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
BrutalSelectContent.displayName = SelectPrimitive.Content.displayName;

const BrutalSelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center py-3 pl-8 pr-2 uppercase font-bold font-sans outline-none focus:bg-[#FAFF00] border-b-2 border-black last:border-b-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 stroke-[4]" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
BrutalSelectItem.displayName = SelectPrimitive.Item.displayName;
export { BrutalSelect, BrutalSelectGroup, BrutalSelectValue, BrutalSelectTrigger, BrutalSelectContent, BrutalSelectItem };
