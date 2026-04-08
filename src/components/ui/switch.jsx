"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

/**
 * Apple iOS style Switch (Toggle) component.
 * @param {Object} props
 * @param {boolean} [props.checked=false]
 * @param {function} [props.onCheckedChange]
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.className]
 */
export function Switch({ checked: controlledChecked, onCheckedChange, disabled = false, className }) {
  const [internalChecked, setInternalChecked] = useState(false);
  
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const toggle = () => {
    if (disabled) return;
    if (!isControlled) {
      setInternalChecked(!checked);
    }
    onCheckedChange?.(!checked);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={toggle}
      className={cn(
        "relative inline-flex h-[32px] w-[52px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        checked ? "bg-[#34c759] focus-visible:ring-[#34c759]" : "bg-[#e5e5ea] dark:bg-[#39393d] focus-visible:ring-gray-400",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
    >
      <motion.span
        layout
        initial={false}
        animate={{
          x: checked ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
        className={cn(
          "pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-sm ring-0 transition duration-200 ease-in-out"
        )}
      />
    </button>
  );
}
