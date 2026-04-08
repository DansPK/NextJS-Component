"use client";

import React, { useState } from "react";
import { Mail, Lock, Apple, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

/**
 * Apple-style minimalist Login Form Template.
 * @param {Object} props
 * @param {function} [props.onSubmit] - Callback when form is submitted
 */
export function LoginForm({ onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (onSubmit) {
      await onSubmit();
    } else {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network
    }
    setIsLoading(false);
  };

  return (
    <Card className="max-w-[400px] mx-auto p-10 flex flex-col items-center">
      <div className="mb-8 flex flex-col items-center text-center">
        <div className="h-12 w-12 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center mb-6 shadow-md">
          <Apple className="w-6 h-6" />
        </div>
        <h1 className="text-[24px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-2">
          Sign in
        </h1>
        <p className="text-[15px] text-[#86868b] dark:text-[#98989d]">
          Use your Account to securely log in.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <Input 
          type="email" 
          placeholder="Email or User Name" 
          leftIcon={<Mail className="w-5 h-5" />} 
          required
        />
        
        <Input 
          type="password" 
          placeholder="Password" 
          leftIcon={<Lock className="w-5 h-5" />} 
          required
        />
        
        <div className="flex items-center justify-between text-[13px] pt-1 pb-4">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded border-[#d2d2d7] text-black focus:ring-black dark:border-[#424245] dark:bg-[#1d1d1f] dark:checked:bg-white accent-black dark:accent-white transition-colors" 
            />
            <span className="text-[#86868b] group-hover:text-[#1d1d1f] dark:group-hover:text-white transition-colors">Remember me</span>
          </label>
          <a href="#" className="text-[#0066cc] dark:text-[#2997ff] hover:underline">
            Forgot password?
          </a>
        </div>

        <Button type="submit" fullWidth isLoading={isLoading}>
          Sign In
          {!isLoading && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
      </form>

      <div className="mt-8 text-center text-[14px]">
        <span className="text-[#86868b]">Don't have an account? </span>
        <a href="#" className="text-[#0066cc] dark:text-[#2997ff] hover:underline font-medium">
          Create yours now.
        </a>
      </div>
    </Card>
  );
}
