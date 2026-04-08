"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const CyberAccordion = AccordionPrimitive.Root;

const CyberAccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border border-[#333] mb-2 bg-[#0A0A0A]", className)} {...props} />
));
CyberAccordionItem.displayName = "CyberAccordionItem";

const CyberAccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-4 font-cyber text-sm uppercase tracking-widest text-[#00FFFF] transition-all hover:bg-[#00FFFF]/10 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:border-b [&[data-state=open]]:border-[#333] outline-none",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
CyberAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const CyberAccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm font-cyber text-[#BBB] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("p-4 bg-[#050505]", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
CyberAccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { CyberAccordion, CyberAccordionItem, CyberAccordionTrigger, CyberAccordionContent };
