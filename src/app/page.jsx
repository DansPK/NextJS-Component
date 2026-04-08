import React from "react";
import Link from "next/link";
import { ArrowRight, MonitorSmartphone, Palette, ShoppingBag, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-[#f5f5f7] dark:bg-[#000000]">
      <header className="mb-16">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-6">
          Theme Directory
        </h1>
        <p className="text-xl text-[#86868b] dark:text-[#98989d] max-w-2xl mx-auto mb-12 font-medium">
          Choose a design system to explore its custom components and dedicated page template.
        </p>
      </header>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        
        {/* Apple Theme */}
        <Link href="/apple" className="group">
          <div className="flex flex-col items-start p-8 rounded-[32px] bg-white dark:bg-[#1c1c1e] border border-transparent hover:border-[#0071e3] transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none h-full text-left">
            <div className="w-12 h-12 rounded-full bg-[#f5f5f7] dark:bg-black flex items-center justify-center mb-6 text-[#1d1d1f] dark:text-white group-hover:scale-110 transition-transform">
              <MonitorSmartphone size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-2">Apple Minimalist</h2>
            <p className="text-[#86868b] dark:text-[#98989d] flex-grow mb-6 text-[15px]">
              Clean, rounded, diffuse shadows. Includes a massive 15+ component UI kit.
            </p>
            <span className="font-medium text-[#0071e3] flex items-center">
              View Gallery <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>

        {/* Brutalist Portfolio */}
        <Link href="/portfolio" className="group">
          <div className="flex flex-col items-start p-8 rounded-none bg-white border-4 border-black hover:bg-[#FAFF00] hover:shadow-[8px_8px_0_0_#000] transition-all h-full text-left font-brutal">
            <div className="w-12 h-12 bg-[#FF00E5] border-2 border-black flex items-center justify-center mb-6 text-white uppercase font-black">
              PT
            </div>
            <h2 className="text-3xl font-black text-black uppercase mb-2">Neo-Brutalist</h2>
            <p className="text-black font-medium flex-grow mb-6 text-lg font-sans">
              Sharp corners, high contrast, unapologetic typography. Maps to a Portfolio template.
            </p>
            <span className="font-bold text-black uppercase flex items-center">
              View Portfolio <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </span>
          </div>
        </Link>

        {/* Cyberpunk Dashboard */}
        <Link href="/dashboard" className="group">
          <div className="flex flex-col items-start p-8 bg-[#050505] border border-[#333] hover:border-[#00FFFF] hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all h-full text-left font-cyber relative overflow-hidden">
            <div className="w-12 h-12 border border-[#00FFFF] text-[#00FFFF] flex items-center justify-center mb-6 shadow-[0_0_10px_rgba(0,255,255,0.3)]">
              <Terminal size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white uppercase mb-2">Cyberpunk Sci-Fi</h2>
            <p className="text-[#888] flex-grow mb-6 text-sm">
              Neon glows, pure dark mode, data-heavy styling. Maps to a Dashboard template.
            </p>
            <span className="font-bold text-[#FF00FF] uppercase flex items-center text-sm tracking-widest">
              Access Network <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>

        {/* Glassmorphism eCommerce */}
        <Link href="/ecommerce" className="group">
          <div className="flex flex-col items-start p-8 rounded-3xl bg-[linear-gradient(135deg,#f0f0f0,#ffffff)] dark:bg-[linear-gradient(135deg,#111,#000)] border border-gray-200 dark:border-white/10 hover:shadow-2xl transition-all h-full text-left relative overflow-hidden">
             
            {/* Soft decorative blur */}
            <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-purple-400/30 blur-3xl rounded-full"></div>
             
            <div className="w-12 h-12 rounded-full backdrop-blur-md bg-white/20 border border-white/30 flex items-center justify-center mb-6 text-black dark:text-white relative z-10 shadow-sm">
              <ShoppingBag size={20} />
            </div>
            <h2 className="text-2xl font-medium text-black dark:text-white mb-2 relative z-10">Soft Glassmorphism</h2>
            <p className="text-gray-600 dark:text-gray-400 flex-grow mb-6 text-[15px] relative z-10">
              Frosted glass, soft colorful meshes, elegant spacing. Maps to an eCommerce template.
            </p>
            <span className="font-medium text-purple-600 dark:text-purple-400 flex items-center relative z-10">
              Shop Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>

      </div>
    </div>
  );
}
