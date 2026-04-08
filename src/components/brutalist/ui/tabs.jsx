"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const BrutalTabs = TabsPrimitive.Root;

const BrutalTabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("flex border-b-4 border-black", className)}
    {...props}
  />
));
BrutalTabsList.displayName = TabsPrimitive.List.displayName;

const BrutalTabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center border-4 border-transparent border-b-0 px-8 py-3 font-brutal text-lg font-black uppercase transition-all data-[state=active]:border-black data-[state=active]:bg-[#FF3E00] data-[state=active]:text-black text-black/50 hover:text-black",
      className
    )}
    {...props}
  />
));
BrutalTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const BrutalTabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("p-6 border-4 border-t-0 border-black bg-white font-sans font-medium text-black", className)}
    {...props}
  />
));
BrutalTabsContent.displayName = TabsPrimitive.Content.displayName;
export { BrutalTabs, BrutalTabsList, BrutalTabsTrigger, BrutalTabsContent };
