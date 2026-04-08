"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const CyberDialog = DialogPrimitive.Root;
const CyberDialogTrigger = DialogPrimitive.Trigger;
const CyberDialogPortal = DialogPrimitive.Portal;

const CyberDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-[#050505]/80 backdrop-blur-sm", className)}
    {...props}
  />
));
CyberDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const CyberDialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <CyberDialogPortal>
    <CyberDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border border-[#00FFFF] bg-[#0A0A0A] p-6 shadow-[0_0_30px_rgba(0,255,255,0.2)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 font-cyber",
        className
      )}
      {...props}
    >
      <div className="absolute top-0 left-0 w-2 h-2 bg-[#00FFFF]"></div>
      <div className="absolute top-0 right-0 w-2 h-2 bg-[#00FFFF]"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#00FFFF]"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#00FFFF]"></div>
      
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 border border-[#333] bg-[#050505] p-1 text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-colors outline-none focus:border-[#00FFFF]">
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </CyberDialogPortal>
));
CyberDialogContent.displayName = DialogPrimitive.Content.displayName;

const CyberDialogHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-2 mb-6 border-b border-[#333] pb-4", className)} {...props} />
);
CyberDialogHeader.displayName = "CyberDialogHeader";

const CyberDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-xl font-bold uppercase tracking-widest text-white decoration-[#00FFFF] underline decoration-2 underline-offset-4", className)}
    {...props}
  />
));
CyberDialogTitle.displayName = DialogPrimitive.Title.displayName;

const CyberDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-[#888]", className)}
    {...props}
  />
));
CyberDialogDescription.displayName = DialogPrimitive.Description.displayName;

export { CyberDialog, CyberDialogPortal, CyberDialogOverlay, CyberDialogTrigger, CyberDialogContent, CyberDialogHeader, CyberDialogTitle, CyberDialogDescription };
