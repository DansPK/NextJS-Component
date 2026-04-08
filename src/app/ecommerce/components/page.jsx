import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { GlassButton } from "@/components/glassmorphism/ui/button";
import { GlassProductCard } from "@/components/glassmorphism/ui/product-card";
import { GlassInput } from "@/components/glassmorphism/ui/input";
import { GlassBadge } from "@/components/glassmorphism/ui/badge";
import { GlassCheckbox } from "@/components/glassmorphism/ui/checkbox";
import { GlassRadioGroup, GlassRadioGroupItem } from "@/components/glassmorphism/ui/radio-group";
import { GlassSelect, GlassSelectContent, GlassSelectItem, GlassSelectTrigger, GlassSelectValue } from "@/components/glassmorphism/ui/select";
import { GlassSlider } from "@/components/glassmorphism/ui/slider";
import { GlassProgress } from "@/components/glassmorphism/ui/progress";
import { GlassTabs, GlassTabsContent, GlassTabsList, GlassTabsTrigger } from "@/components/glassmorphism/ui/tabs";
import { GlassAccordion, GlassAccordionContent, GlassAccordionItem, GlassAccordionTrigger } from "@/components/glassmorphism/ui/accordion";
import { GlassDialog, GlassDialogContent, GlassDialogDescription, GlassDialogHeader, GlassDialogTitle, GlassDialogTrigger } from "@/components/glassmorphism/ui/dialog";

export default function GlassGallery() {
  return (
    <div className="min-h-screen relative font-sans overflow-hidden bg-[#0A0A14] text-white selection:bg-white/20 pb-32">
      
      {/* Ambient Animated Mesh Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#40128B]/60 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#DD58D6]/40 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#00E5FF]/30 rounded-full blur-[130px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        <nav className="sticky top-0 z-50 px-6 py-4 mx-4 mt-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">AURA_UI</span>
          </div>
          <Link href="/">
            <GlassButton variant="secondary" className="!py-2 !px-4 text-sm flex items-center gap-2">
              <ArrowLeft size={16} /> Retreat
            </GlassButton>
          </Link>
        </nav>

        <main className="max-w-4xl mx-auto px-6 py-20 w-full space-y-16">
          <header className="mb-24">
            <h1 className="text-5xl md:text-6xl font-medium tracking-tighter mb-4">
              Translucent Components.
            </h1>
            <p className="text-xl text-white/60 font-light">
              Meticulously crafted frosted glass elements. Beautiful, soft, and premium.
            </p>
          </header>

          <div className="space-y-8">
            <h2 className="text-2xl font-medium">Inputs & Tags</h2>
            <div className="p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl space-y-8">
              <div className="flex gap-4">
                <GlassBadge variant="primary">New Arrival</GlassBadge>
                <GlassBadge variant="secondary">Sold Out</GlassBadge>
                <GlassBadge variant="glow">Premium</GlassBadge>
              </div>
              
              <div className="max-w-sm space-y-4">
                <GlassInput placeholder="Subscribe to newsletter" />
                <GlassInput placeholder="Email Address" error="Please enter a valid email" />
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-medium">Controls</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <GlassCheckbox id="termsGlass" />
                  <label htmlFor="termsGlass" className="text-sm font-medium">Accept terms and conditions</label>
                </div>

                <GlassRadioGroup defaultValue="size-m" className="flex gap-6">
                  <div className="flex items-center gap-3">
                    <GlassRadioGroupItem value="size-s" id="s" />
                    <label htmlFor="s" className="text-sm">Small</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <GlassRadioGroupItem value="size-m" id="m" />
                    <label htmlFor="m" className="text-sm">Medium</label>
                  </div>
                </GlassRadioGroup>

                <GlassSelect>
                  <GlassSelectTrigger>
                    <GlassSelectValue placeholder="Select Category" />
                  </GlassSelectTrigger>
                  <GlassSelectContent>
                    <GlassSelectItem value="tops">Tops & Jackets</GlassSelectItem>
                    <GlassSelectItem value="bottoms">Trousers</GlassSelectItem>
                    <GlassSelectItem value="shoes">Footwear</GlassSelectItem>
                  </GlassSelectContent>
                </GlassSelect>
              </div>

              <div className="space-y-12">
                <div>
                  <div className="mb-4 text-sm font-medium">Brightness</div>
                  <GlassSlider defaultValue={[75]} max={100} step={1} />
                </div>
                <div>
                  <div className="mb-4 text-sm font-medium">Uploading Asset...</div>
                  <GlassProgress value={65} />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-medium">Layout</h2>
            
            <GlassTabs defaultValue="details">
              <GlassTabsList>
                <GlassTabsTrigger value="details">Details</GlassTabsTrigger>
                <GlassTabsTrigger value="reviews">Reviews (24)</GlassTabsTrigger>
              </GlassTabsList>
              <GlassTabsContent value="details">
                Hand-crafted with 100% sustainable materials. Wash cold, dry flat.
              </GlassTabsContent>
              <GlassTabsContent value="reviews">
                "Absolutely love the material, it reflects the light beautifully." - Verified Buyer
              </GlassTabsContent>
            </GlassTabs>

            <GlassAccordion type="single" collapsible>
              <GlassAccordionItem value="item-1">
                <GlassAccordionTrigger>Shipping & Returns</GlassAccordionTrigger>
                <GlassAccordionContent>
                  Free shipping on orders over $200. Returns accepted within 30 days of purchase.
                </GlassAccordionContent>
              </GlassAccordionItem>
              <GlassAccordionItem value="item-2">
                <GlassAccordionTrigger>Care Instructions</GlassAccordionTrigger>
                <GlassAccordionContent>
                  Dry clean only. Do not iron directly on print.
                </GlassAccordionContent>
              </GlassAccordionItem>
            </GlassAccordion>

            <div className="p-12 mt-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 flex justify-center text-center">
              <GlassDialog>
                <GlassDialogTrigger asChild>
                  <GlassButton variant="glow" className="!px-8 !py-4 text-lg">Quick View</GlassButton>
                </GlassDialogTrigger>
                <GlassDialogContent>
                  <GlassDialogHeader>
                    <GlassDialogTitle>Aura Chronos</GlassDialogTitle>
                    <GlassDialogDescription>
                      Experience the next generation of wearable aesthetics.
                    </GlassDialogDescription>
                  </GlassDialogHeader>
                  <div className="mt-8">
                    <GlassButton variant="primary" className="w-full !rounded-xl !py-3">Add to Cart - $299</GlassButton>
                  </div>
                </GlassDialogContent>
              </GlassDialog>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
