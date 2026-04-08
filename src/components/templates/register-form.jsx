"use client";

import React, { useState } from "react";
import { Mail, Lock, User, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

/**
 * Apple-style minimalist Register Form Template.
 * @param {Object} props
 * @param {function} [props.onSubmit] - Callback when form is submitted
 */
export function RegisterForm({ onSubmit }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (onSubmit) {
      await onSubmit();
    } else {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network request
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
          Create Account
        </h1>
        <p className="text-[15px] text-[#86868b] dark:text-[#98989d]">
          One account for everything.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <div className="flex gap-4">
          <Input 
            type="text" 
            placeholder="First Name" 
            required
            className="w-1/2"
          />
          <Input 
            type="text" 
            placeholder="Last Name" 
            required
            className="w-1/2"
          />
        </div>

        <Input 
          type="email" 
          placeholder="name@example.com" 
          leftIcon={<Mail className="w-5 h-5" />} 
          required
        />
        
        <Input 
          type="password" 
          placeholder="Create Password" 
          leftIcon={<Lock className="w-5 h-5" />} 
          required
        />

        <div className="pt-2">
          <Button type="submit" fullWidth isLoading={isLoading}>
            Continue
          </Button>
        </div>
      </form>

      <div className="mt-8 text-center flex flex-col gap-3 w-full">
        <div className="relative flex items-center justify-center w-full">
          <div className="border-t border-[#d2d2d7] dark:border-[#424245] absolute w-full top-1/2 -translate-y-1/2"></div>
          <span className="bg-white dark:bg-[#1c1c1e] px-3 z-10 text-[12px] text-[#86868b] uppercase tracking-wider font-medium">Or</span>
        </div>
        
        <Button variant="secondary" fullWidth>
          <Apple className="w-5 h-5 mr-2" />
          Sign up with Apple
        </Button>
      </div>

      <div className="mt-8 text-center text-[14px]">
        <span className="text-[#86868b]">Already have an account? </span>
        <a href="#" className="text-[#0066cc] dark:text-[#2997ff] hover:underline font-medium">
          Sign In.
        </a>
      </div>
    </Card>
  );
}
