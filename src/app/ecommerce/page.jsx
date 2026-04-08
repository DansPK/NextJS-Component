import React from "react";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { GlassButton } from "@/components/glassmorphism/ui/button";
import { GlassProductCard } from "@/components/glassmorphism/ui/product-card";

export default function Ecommerce() {
  return (
    <div className="min-h-screen relative font-sans overflow-hidden bg-[#0A0A14] text-white">
      
      {/* Ambient Animated Mesh Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#40128B]/60 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#DD58D6]/40 rounded-full blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-[#00E5FF]/30 rounded-full blur-[130px] mix-blend-screen"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Glass Header */}
        <header className="sticky top-0 z-50 px-6 py-4 mx-4 mt-4 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight ml-2 hidden sm:block">AURA.</span>
          </div>
          
          <nav className="hidden md:flex gap-8 font-medium text-sm text-white/80">
            <a href="#" className="hover:text-white transition-colors">Collections</a>
            <a href="#" className="hover:text-white transition-colors">Men</a>
            <a href="#" className="hover:text-white transition-colors">Women</a>
            <a href="#" className="hover:text-white transition-colors">Accessories</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <GlassButton variant="secondary" className="!px-3 !py-3 rounded-full">
              <Search className="w-4 h-4" />
            </GlassButton>
            <GlassButton variant="primary" className="!px-3 !py-3 rounded-full flex gap-2 items-center">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-bold bg-white text-black px-1.5 py-0.5 rounded-full">3</span>
            </GlassButton>
          </div>
        </header>

        <main className="flex-1 max-w-7xl mx-auto px-6 py-20 w-full">
          
          {/* Hero Row */}
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h1 className="text-6xl md:text-8xl font-medium tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Future of Wear.
            </h1>
            <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
              Discover the new Autumn Collection. Meticulously crafted with premium materials and immaterial aesthetics.
            </p>
            <div className="flex gap-4 justify-center">
              <GlassButton variant="primary" className="!px-8 !py-4 text-lg">Shop Now</GlassButton>
              <GlassButton variant="darkGlass" className="!px-8 !py-4 text-lg border-white/20">View Lookbook</GlassButton>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <GlassProductCard 
              title="Aura Chronos" 
              price="$299.00"
            >
              <GlassButton variant="primary" className="!px-4 !py-2 text-sm !rounded-xl">Add</GlassButton>
            </GlassProductCard>
            
            <GlassProductCard 
              title="Prism Jacket" 
              price="$549.00"
              className="lg:-translate-y-8"
            >
              <GlassButton variant="primary" className="!px-4 !py-2 text-sm !rounded-xl">Add</GlassButton>
            </GlassProductCard>

            <GlassProductCard 
              title="Void Sneakers" 
              price="$180.00"
            >
              <GlassButton variant="primary" className="!px-4 !py-2 text-sm !rounded-xl">Add</GlassButton>
            </GlassProductCard>

            <GlassProductCard 
              title="Nebula Shades" 
              price="$120.00"
              className="lg:-translate-y-8"
            >
              <GlassButton variant="primary" className="!px-4 !py-2 text-sm !rounded-xl">Add</GlassButton>
            </GlassProductCard>

          </div>

        </main>
      </div>
    </div>
  );
}
