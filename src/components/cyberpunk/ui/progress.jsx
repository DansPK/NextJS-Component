"use client";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const CyberProgress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden bg-[#111] border border-[#333] shadow-inner", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-[#FF00FF] transition-all shadow-[0_0_15px_#FF00FF]"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSIyIiBoZWlnaHQ9IjQiIGZpbGw9InJnYmEoMCwwLDAsMC41KSIvPjwvc3ZnPg==')] pointer-events-none"></div>
  </ProgressPrimitive.Root>
));
CyberProgress.displayName = ProgressPrimitive.Root.displayName;
export { CyberProgress };
