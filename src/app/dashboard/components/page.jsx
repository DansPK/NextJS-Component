import React from "react";
import Link from "next/link";
import { ArrowLeft, Terminal } from "lucide-react";

import { CyberButton } from "@/components/cyberpunk/ui/button";
import { CyberCard } from "@/components/cyberpunk/ui/card";
import { CyberInput } from "@/components/cyberpunk/ui/input";
import { CyberBadge } from "@/components/cyberpunk/ui/badge";
import { CyberCheckbox } from "@/components/cyberpunk/ui/checkbox";
import { CyberRadioGroup, CyberRadioGroupItem } from "@/components/cyberpunk/ui/radio-group";
import { CyberSelect, CyberSelectContent, CyberSelectItem, CyberSelectTrigger, CyberSelectValue } from "@/components/cyberpunk/ui/select";
import { CyberSlider } from "@/components/cyberpunk/ui/slider";
import { CyberProgress } from "@/components/cyberpunk/ui/progress";
import { CyberTabs, CyberTabsContent, CyberTabsList, CyberTabsTrigger } from "@/components/cyberpunk/ui/tabs";
import { CyberAccordion, CyberAccordionContent, CyberAccordionItem, CyberAccordionTrigger } from "@/components/cyberpunk/ui/accordion";
import { CyberDialog, CyberDialogContent, CyberDialogDescription, CyberDialogHeader, CyberDialogTitle, CyberDialogTrigger } from "@/components/cyberpunk/ui/dialog";

export default function CyberpunkGallery() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-cyber selection:bg-[#00FFFF] selection:text-black pb-32">
      <nav className="border-b border-[#333] bg-[#0A0A0A] p-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-bold text-xl tracking-widest text-[#00FFFF] flex items-center gap-2">
            <Terminal /> SYS<span className="text-[#FF00FF]">.UI</span>
          </div>
          <Link href="/">
            <CyberButton variant="neon-blue" className="!py-2 !text-xs !px-4">
              &lt; RETURN_ROOT
            </CyberButton>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 mt-20 space-y-16">
        <header className="border-l-4 border-[#00FFFF] pl-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-widest text-white mb-2 shadow-[0_0_10px_#00FFFF] shadow-transparent">
            COMPONENT LIBRARY_V1.0
          </h1>
          <p className="text-sm text-[#888]">
            STATUS: ACTIVE // 10 NEW PROTOCOLS LOADED
          </p>
        </header>

        {/* Inputs & Status */}
        <CyberCard glow="blue">
          <h2 className="text-xl font-bold uppercase text-white mb-8 border-b border-[#333] pb-2">DATA ENTRY & STATUS</h2>
          <div className="space-y-6">
            <div className="flex gap-4 mb-8">
              <CyberBadge variant="primary">SECURE</CyberBadge>
              <CyberBadge variant="secondary">WARNING</CyberBadge>
              <CyberBadge variant="danger">BREACH</CyberBadge>
            </div>
            
            <CyberInput placeholder="ENTER ACCESS KEY..." />
            <CyberInput placeholder="CONNECTION REFUSED..." error="ACCESS_DENIED_0x00FF" />
          </div>
        </CyberCard>

        {/* Binary Operators */}
        <CyberCard glow="pink">
          <h2 className="text-xl font-bold uppercase text-white mb-8 border-b border-[#333] pb-2">BOOLEAN PROTOCOLS</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <CyberCheckbox id="override" />
              <label htmlFor="override" className="text-sm uppercase tracking-widest">Enable Manual Override</label>
            </div>

            <CyberRadioGroup defaultValue="core1" className="flex gap-8">
              <div className="flex items-center gap-3">
                <CyberRadioGroupItem value="core1" id="c1" />
                <label htmlFor="c1" className="text-sm uppercase">CPU CORE 1</label>
              </div>
              <div className="flex items-center gap-3">
                <CyberRadioGroupItem value="core2" id="c2" />
                <label htmlFor="c2" className="text-sm uppercase">CPU CORE 2</label>
              </div>
            </CyberRadioGroup>

            <CyberSelect>
              <CyberSelectTrigger>
                <CyberSelectValue placeholder="SELECT TARGET SECTOR" />
              </CyberSelectTrigger>
              <CyberSelectContent>
                <CyberSelectItem value="alpha">SECTOR ALPHA</CyberSelectItem>
                <CyberSelectItem value="beta">SECTOR BETA</CyberSelectItem>
                <CyberSelectItem value="gamma">SECTOR GAMMA [RESTRICTED]</CyberSelectItem>
              </CyberSelectContent>
            </CyberSelect>
          </div>
        </CyberCard>

        {/* Metrics UI */}
        <CyberCard glow="none">
          <h2 className="text-xl font-bold uppercase text-white mb-8 border-b border-[#333] pb-2">TELEMETRY</h2>
          <div className="space-y-12">
            <div>
              <div className="flex justify-between text-xs text-[#00FFFF] mb-2">
                <span>POWER_OUTPUT</span>
                <span>80%</span>
              </div>
              <CyberSlider defaultValue={[80]} max={100} step={1} />
            </div>
            
            <div>
              <div className="flex justify-between text-xs text-[#FF00FF] mb-2">
                <span>BUFFER_STATUS</span>
                <span>45GB/100GB</span>
              </div>
              <CyberProgress value={45} />
            </div>
          </div>
        </CyberCard>

        {/* Structural Logic */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold uppercase text-white border-l-4 border-[#F3E600] pl-4">STRUCTURAL LOGIC</h2>
          
          <CyberTabs defaultValue="sys">
            <CyberTabsList>
              <CyberTabsTrigger value="sys">SYS.INFO</CyberTabsTrigger>
              <CyberTabsTrigger value="net">NETWORK</CyberTabsTrigger>
            </CyberTabsList>
            <CyberTabsContent value="sys">System operational parameters normal. Memory integrity verified.</CyberTabsContent>
            <CyberTabsContent value="net">Network traffic spike detected on port 8080.</CyberTabsContent>
          </CyberTabs>

          <CyberAccordion type="single" collapsible>
            <CyberAccordionItem value="1">
              <CyberAccordionTrigger>ACCESS LOGS</CyberAccordionTrigger>
              <CyberAccordionContent>
                <div className="text-[#00FFFF]">08:44 - USER AUTHENTICATED</div>
                <div className="text-[#FF00FF]">09:12 - UNAUTHORIZED PING DETECTED</div>
              </CyberAccordionContent>
            </CyberAccordionItem>
            <CyberAccordionItem value="2">
              <CyberAccordionTrigger>HARDWARE DIAGNOSTICS</CyberAccordionTrigger>
              <CyberAccordionContent>All cooling units operating at 80% efficiency.</CyberAccordionContent>
            </CyberAccordionItem>
          </CyberAccordion>

          <CyberCard glow="none" className="p-12 flex justify-center border-dashed border-[#888]">
            <CyberDialog>
              <CyberDialogTrigger asChild>
                <CyberButton variant="neon-pink">INIT_BREACH_PROTOCOL</CyberButton>
              </CyberDialogTrigger>
              <CyberDialogContent>
                <CyberDialogHeader>
                  <CyberDialogTitle>CRITICAL WARNING</CyberDialogTitle>
                  <CyberDialogDescription>
                    Executing this protocol will sever all external network connections. Are you sure you wish to proceed?
                  </CyberDialogDescription>
                </CyberDialogHeader>
                <div className="mt-6 flex justify-end gap-4">
                  <CyberButton variant="solid-yellow" className="!py-2 !px-4 !text-xs">ABORT</CyberButton>
                  <CyberButton variant="neon-pink" className="!py-2 !px-4 !text-xs">INITIATE</CyberButton>
                </div>
              </CyberDialogContent>
            </CyberDialog>
          </CyberCard>
        </div>
      </main>
    </div>
  );
}
