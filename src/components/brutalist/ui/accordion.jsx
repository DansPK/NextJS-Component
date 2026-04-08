"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const BrutalAccordion = AccordionPrimitive.Root;

const BrutalAccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border-4 border-black mb-4 bg-white shadow-[4px_4px_0_#000] last:mb-0", className)} {...props} />
));
BrutalAccordionItem.displayName = "BrutalAccordionItem";

const BrutalAccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-6 font-brutal text-2xl font-black uppercase transition-all hover:bg-[#FAFF00] [&[data-state=open]>svg]:rotate-45 [&[data-state=open]]:bg-[#FAFF00] outline-none",
        className
      )}
      {...props}
    >
      {children}
      <Plus className="h-8 w-8 shrink-0 transition-transform duration-200 stroke-[4]" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
BrutalAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const BrutalAccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-lg font-sans font-medium border-t-4 border-black transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("p-6 bg-white", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
BrutalAccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { BrutalAccordion, BrutalAccordionItem, BrutalAccordionTrigger, BrutalAccordionContent };
