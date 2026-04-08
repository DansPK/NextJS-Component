"use client";
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

const GlassTabs = TabsPrimitive.Root;

const GlassTabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("inline-flex h-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-1 backdrop-blur-md", className)}
    {...props}
  />
));
GlassTabsList.displayName = TabsPrimitive.List.displayName;

const GlassTabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl px-6 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white/60 hover:text-white data-[state=active]:bg-white/20 data-[state=active]:text-white data-[state=active]:shadow-sm data-[state=active]:border data-[state=active]:border-white/20",
      className
    )}
    {...props}
  />
));
GlassTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const GlassTabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-4 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 text-white shadow-[0_8px_32px_rgba(0,0,0,0.1)] focus-visible:outline-none",
      className
    )}
    {...props}
  />
));
GlassTabsContent.displayName = TabsPrimitive.Content.displayName;
export { GlassTabs, GlassTabsList, GlassTabsTrigger, GlassTabsContent };
