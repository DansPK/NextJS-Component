"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const GlassDialog = DialogPrimitive.Root;
const GlassDialogTrigger = DialogPrimitive.Trigger;
const GlassDialogPortal = DialogPrimitive.Portal;

const GlassDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-[#0A0A14]/40 backdrop-blur-xl", className)}
    {...props}
  />
));
GlassDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const GlassDialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <GlassDialogPortal>
    <GlassDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border border-white/20 bg-white/10 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-2xl rounded-3xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    >
      {/* Soft gradient blur inside dialog */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 blur-[50px] pointer-events-none rounded-full"></div>
      
      <div className="relative z-10">{children}</div>
      
      <DialogPrimitive.Close className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white/70 hover:bg-white/20 hover:text-white border border-white/10 transition-colors outline-none focus:ring-2 focus:ring-white/50 z-10">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </GlassDialogPortal>
));
GlassDialogContent.displayName = DialogPrimitive.Content.displayName;

const GlassDialogHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-3 mb-8", className)} {...props} />
);
GlassDialogHeader.displayName = "GlassDialogHeader";

const GlassDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-2xl font-bold text-white", className)}
    {...props}
  />
));
GlassDialogTitle.displayName = DialogPrimitive.Title.displayName;

const GlassDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-white/70", className)}
    {...props}
  />
));
GlassDialogDescription.displayName = DialogPrimitive.Description.displayName;

export { GlassDialog, GlassDialogPortal, GlassDialogOverlay, GlassDialogTrigger, GlassDialogContent, GlassDialogHeader, GlassDialogTitle, GlassDialogDescription };
