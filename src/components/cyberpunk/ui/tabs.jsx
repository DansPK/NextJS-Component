"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const CyberTabs = TabsPrimitive.Root;

const CyberTabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("flex border-b border-[#333] gap-2", className)}
    {...props}
  />
));
CyberTabsList.displayName = TabsPrimitive.List.displayName;

const CyberTabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center px-6 py-2 font-cyber text-sm tracking-widest text-[#888] transition-all border border-transparent border-b-0 hover:text-[#00FFFF] data-[state=active]:border-[#00FFFF] data-[state=active]:bg-[#00FFFF]/10 data-[state=active]:text-[#00FFFF] data-[state=active]:shadow-[0_0_15px_rgba(0,255,255,0.1)] outline-none uppercase",
      className
    )}
    {...props}
  />
));
CyberTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const CyberTabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("p-6 border border-t-0 border-[#333] bg-[#050505] font-cyber text-sm text-[#e0e0e0]", className)}
    {...props}
  />
));
CyberTabsContent.displayName = TabsPrimitive.Content.displayName;
export { CyberTabs, CyberTabsList, CyberTabsTrigger, CyberTabsContent };
