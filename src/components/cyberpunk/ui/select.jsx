"use client";
import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CyberSelect = SelectPrimitive.Root;
const CyberSelectGroup = SelectPrimitive.Group;
const CyberSelectValue = SelectPrimitive.Value;

const CyberSelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between border border-[#333] bg-[#050505] px-3 py-2 text-sm font-cyber uppercase text-[#00FFFF] focus:outline-none focus:border-[#00FFFF] focus:shadow-[0_0_10px_rgba(0,255,255,0.2)] disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-70" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
CyberSelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const CyberSelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 min-w-[8rem] overflow-hidden border border-[#00FFFF] bg-[#050505] text-[#00FFFF] shadow-[0_0_15px_rgba(0,255,255,0.15)] font-cyber",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
CyberSelectContent.displayName = SelectPrimitive.Content.displayName;

const CyberSelectItem = React.forwardRef(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center py-2 pl-8 pr-2 uppercase font-cyber text-sm outline-none hover:bg-[#00FFFF]/10 focus:bg-[#00FFFF]/20 border-b border-[#222] last:border-b-0 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4 stroke-[3]" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
CyberSelectItem.displayName = SelectPrimitive.Item.displayName;
export { CyberSelect, CyberSelectGroup, CyberSelectValue, CyberSelectTrigger, CyberSelectContent, CyberSelectItem };
