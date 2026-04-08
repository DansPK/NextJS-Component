"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const GlassAccordion = AccordionPrimitive.Root;

const GlassAccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("border border-white/20 mb-3 bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden", className)} {...props} />
));
GlassAccordionItem.displayName = "GlassAccordionItem";

const GlassAccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between p-5 font-semibold text-white transition-all hover:bg-white/10 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:bg-white/10 outline-none",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200 text-white/70" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
GlassAccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const GlassAccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm text-white/80 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("p-5 pt-0 bg-transparent", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
GlassAccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { GlassAccordion, GlassAccordionItem, GlassAccordionTrigger, GlassAccordionContent };
