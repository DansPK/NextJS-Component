"use client";

import React from "react";
import { User, Bell, Shield, Moon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

/**
 * Apple-style minimalist Profile settings template.
 */
export function ProfileCard() {
  return (
    <Card className="max-w-[480px] mx-auto p-0 overflow-hidden">
      {/* Header Profile Section */}
      <div className="p-8 text-center flex flex-col items-center bg-[#f5f5f7] dark:bg-[#1c1c1e] border-b border-[#d2d2d7] dark:border-[#2c2c2e]">
        <div className="w-24 h-24 bg-white dark:bg-[#2c2c2e] rounded-full flex items-center justify-center mb-4 shadow-sm border border-[#d2d2d7] dark:border-[#424245]">
          <User className="w-10 h-10 text-[#86868b] dark:text-[#98989d]" />
        </div>
        <h2 className="text-[24px] font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
          Jane Doe
        </h2>
        <p className="text-[15px] text-[#86868b] dark:text-[#98989d] mb-3">
          jane.doe@example.com
        </p>
        <Badge variant="success">Pro Member</Badge>
      </div>

      {/* Settings Options List */}
      <div className="flex flex-col">
        <SettingRow 
          icon={<Bell className="w-5 h-5 text-white" />}
          iconBg="bg-[#ff3b30]"
          title="Notifications"
          description="Manage email and push alerts"
          action={<Switch defaultChecked />}
        />
        <SettingRow 
          icon={<Moon className="w-5 h-5 text-white" />}
          iconBg="bg-[#5856d6]"
          title="Dark Mode"
          description="Automatic appearance toggle"
          action={<Switch defaultChecked={false} />}
        />
        <SettingRow 
          icon={<Shield className="w-5 h-5 text-white" />}
          iconBg="bg-[#34c759]"
          title="Two-Factor Auth"
          description="Secure your account"
          action={<Switch defaultChecked />}
          isLast
        />
      </div>
    </Card>
  );
}

function SettingRow({ icon, iconBg, title, description, action, isLast }) {
  return (
    <div className={`flex items-center justify-between px-8 py-5 ${!isLast ? 'border-b border-[#d2d2d7] dark:border-[#2c2c2e]' : ''}`}>
      <div className="flex items-center gap-4">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconBg}`}>
          {icon}
        </div>
        <div>
          <h4 className="text-[15px] font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{title}</h4>
          <p className="text-[13px] text-[#86868b] dark:text-[#98989d] mt-0.5">{description}</p>
        </div>
      </div>
      <div>
        {action}
      </div>
    </div>
  );
}
