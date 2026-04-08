import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { BrutalButton } from "@/components/brutalist/ui/button";
import { BrutalCard } from "@/components/brutalist/ui/card";
import { BrutalInput } from "@/components/brutalist/ui/input";
import { BrutalBadge } from "@/components/brutalist/ui/badge";
import { BrutalCheckbox } from "@/components/brutalist/ui/checkbox";
import { BrutalRadioGroup, BrutalRadioGroupItem } from "@/components/brutalist/ui/radio-group";
import { BrutalSelect, BrutalSelectContent, BrutalSelectItem, BrutalSelectTrigger, BrutalSelectValue } from "@/components/brutalist/ui/select";
import { BrutalSlider } from "@/components/brutalist/ui/slider";
import { BrutalProgress } from "@/components/brutalist/ui/progress";
import { BrutalTabs, BrutalTabsContent, BrutalTabsList, BrutalTabsTrigger } from "@/components/brutalist/ui/tabs";
import { BrutalAccordion, BrutalAccordionContent, BrutalAccordionItem, BrutalAccordionTrigger } from "@/components/brutalist/ui/accordion";
import { BrutalDialog, BrutalDialogContent, BrutalDialogDescription, BrutalDialogHeader, BrutalDialogTitle, BrutalDialogTrigger } from "@/components/brutalist/ui/dialog";

export default function BrutalGallery() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black font-sans pb-32">
      <nav className="border-b-4 border-black bg-white p-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-brutal font-bold text-3xl tracking-tighter uppercase">
            Brut<span className="text-[#FF00E5]">//</span>UI
          </div>
          <Link href="/">
            <BrutalButton variant="ghost" size="sm">
              <ArrowLeft className="mr-2" /> Back
            </BrutalButton>
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 mt-20 space-y-24">
        <header>
          <h1 className="font-brutal text-6xl md:text-8xl font-black uppercase leading-none mb-6">Component Gallery.</h1>
          <p className="text-2xl font-medium border-l-4 border-black pl-6">
            10 brand new Neo-Brutalist components. Unapologetic typography, heavy shadows, wild colors.
          </p>
        </header>

        {/* Badges & Inputs */}
        <BrutalCard color="white">
          <h2 className="font-brutal text-4xl font-black uppercase mb-8">Forms & Tags</h2>
          <div className="space-y-8">
            <div className="flex gap-4 flex-wrap">
              <BrutalBadge variant="primary">Primary</BrutalBadge>
              <BrutalBadge variant="secondary">Secondary</BrutalBadge>
              <BrutalBadge variant="success">Success</BrutalBadge>
            </div>
            <BrutalInput placeholder="ENTER YOUR EMAIL..." />
            <BrutalInput placeholder="ERROR STATE..." error="INVALID EMAIL FORMAT" />
          </div>
        </BrutalCard>

        {/* Toggles & Selection */}
        <BrutalCard color="yellow">
          <h2 className="font-brutal text-4xl font-black uppercase mb-8">Selection</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <BrutalCheckbox id="terms" />
              <label htmlFor="terms" className="font-bold text-xl uppercase font-brutal tracking-widest">Agree to terms</label>
            </div>

            <BrutalRadioGroup defaultValue="1" className="flex gap-6">
              <div className="flex items-center gap-3">
                <BrutalRadioGroupItem value="1" id="r1" />
                <label htmlFor="r1" className="font-bold uppercase font-brutal">Option 1</label>
              </div>
              <div className="flex items-center gap-3">
                <BrutalRadioGroupItem value="2" id="r2" />
                <label htmlFor="r2" className="font-bold uppercase font-brutal">Option 2</label>
              </div>
            </BrutalRadioGroup>

            <BrutalSelect>
              <BrutalSelectTrigger>
                <BrutalSelectValue placeholder="PICK A FLAVOR" />
              </BrutalSelectTrigger>
              <BrutalSelectContent>
                <BrutalSelectItem value="a">CHERRY BOMB</BrutalSelectItem>
                <BrutalSelectItem value="b">LIME CRUSH</BrutalSelectItem>
                <BrutalSelectItem value="c">DARK CHOCOLATE</BrutalSelectItem>
              </BrutalSelectContent>
            </BrutalSelect>
          </div>
        </BrutalCard>

        {/* Range & Progress */}
        <BrutalCard color="white">
          <h2 className="font-brutal text-4xl font-black uppercase mb-8">Metrics</h2>
          <div className="space-y-12 pt-4">
            <BrutalSlider defaultValue={[50]} max={100} step={1} />
            <BrutalProgress value={66} />
          </div>
        </BrutalCard>

        {/* Layout */}
        <div className="space-y-12">
          <h2 className="font-brutal text-4xl font-black uppercase">Layout & Overlays</h2>
          
          <BrutalTabs defaultValue="t1">
            <BrutalTabsList>
              <BrutalTabsTrigger value="t1">FEATURES</BrutalTabsTrigger>
              <BrutalTabsTrigger value="t2">SPECS</BrutalTabsTrigger>
            </BrutalTabsList>
            <BrutalTabsContent value="t1">Features go here in bold text.</BrutalTabsContent>
            <BrutalTabsContent value="t2">Technical specs go here in bold text.</BrutalTabsContent>
          </BrutalTabs>

          <BrutalAccordion type="single" collapsible>
            <BrutalAccordionItem value="1">
              <BrutalAccordionTrigger>WHAT IS NEO-BRUTALISM?</BrutalAccordionTrigger>
              <BrutalAccordionContent>It's a reaction against soft, corporate minimalism. It demands attention.</BrutalAccordionContent>
            </BrutalAccordionItem>
            <BrutalAccordionItem value="2">
              <BrutalAccordionTrigger>IS IT ACCESSIBLE?</BrutalAccordionTrigger>
              <BrutalAccordionContent>Yes! High contrast borders and large typography actually improve legibility.</BrutalAccordionContent>
            </BrutalAccordionItem>
          </BrutalAccordion>

          <BrutalCard color="pink" className="flex flex-col items-center justify-center p-12">
            <BrutalDialog>
              <BrutalDialogTrigger asChild>
                <BrutalButton variant="primary">LAUNCH MODAL</BrutalButton>
              </BrutalDialogTrigger>
              <BrutalDialogContent>
                <BrutalDialogHeader>
                  <BrutalDialogTitle>SELF DESTRUCT SEQUENCE</BrutalDialogTitle>
                  <BrutalDialogDescription>Are you absolutely sure you want to do this?</BrutalDialogDescription>
                </BrutalDialogHeader>
                <div className="mt-8 flex gap-4">
                  <BrutalButton variant="ghost" className="flex-1">CANCEL</BrutalButton>
                  <BrutalButton variant="primary" className="flex-1">CONFIRM</BrutalButton>
                </div>
              </BrutalDialogContent>
            </BrutalDialog>
          </BrutalCard>
        </div>
      </main>
    </div>
  );
}
