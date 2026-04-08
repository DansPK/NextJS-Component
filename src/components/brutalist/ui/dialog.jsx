"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const BrutalDialog = DialogPrimitive.Root;
const BrutalDialogTrigger = DialogPrimitive.Trigger;
const BrutalDialogPortal = DialogPrimitive.Portal;

const BrutalDialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-[#FF00E5]/50 backdrop-blur-sm", className)}
    {...props}
  />
));
BrutalDialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const BrutalDialogContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <BrutalDialogPortal>
    <BrutalDialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border-8 border-black bg-white p-8 shadow-[16px_16px_0_#000] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4 border-4 border-black bg-white p-2 hover:bg-[#FF3E00] hover:text-white transition-colors outline-none focus:bg-[#FAFF00]">
        <X className="h-6 w-6 stroke-[4]" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </BrutalDialogPortal>
));
BrutalDialogContent.displayName = DialogPrimitive.Content.displayName;

const BrutalDialogHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-2 mb-6", className)} {...props} />
);
BrutalDialogHeader.displayName = "BrutalDialogHeader";

const BrutalDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("font-brutal text-4xl font-black uppercase text-black", className)}
    {...props}
  />
));
BrutalDialogTitle.displayName = DialogPrimitive.Title.displayName;

const BrutalDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-lg font-sans font-medium text-black/70", className)}
    {...props}
  />
));
BrutalDialogDescription.displayName = DialogPrimitive.Description.displayName;

export { BrutalDialog, BrutalDialogPortal, BrutalDialogOverlay, BrutalDialogTrigger, BrutalDialogContent, BrutalDialogHeader, BrutalDialogTitle, BrutalDialogDescription };
