import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Mail, Briefcase } from "lucide-react";
import { BrutalButton } from "@/components/brutalist/ui/button";
import { BrutalCard } from "@/components/brutalist/ui/card";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black selection:bg-black selection:text-white font-sans pb-32">
      {/* Navigation */}
      <nav className="border-b-4 border-black bg-white p-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="font-brutal font-bold text-3xl tracking-tighter uppercase">
            Dev<span className="text-[#FF3E00]">//</span>Port
          </div>
          <div className="flex gap-4">
            <Link href="/">
              <BrutalButton variant="ghost" size="sm">Home</BrutalButton>
            </Link>
            <BrutalButton variant="secondary" size="sm">Contact</BrutalButton>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 mt-20">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-8">
            <h1 className="font-brutal text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
              Build <br />
              <span className="text-[#FF00E5]">Bold</span> <br />
              Things.
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-lg border-l-4 border-black pl-6">
              I'm a Frontend Developer who hates boring websites. I build digital experiences with severe attitude.
            </p>
            <div className="flex gap-6">
              <BrutalButton variant="primary">Hire Me <ArrowRight className="inline ml-2" /></BrutalButton>
            </div>
          </div>
          
          <div className="relative">
            <BrutalCard color="yellow" className="rotate-3 z-10 relative">
              <div className="aspect-square bg-white border-4 border-black overflow-hidden flex items-center justify-center">
                <span className="font-brutal text-9xl font-black">;)</span>
              </div>
            </BrutalCard>
            <div className="absolute inset-0 bg-[#00E5FF] border-4 border-black transform -rotate-6 shadow-[8px_8px_0px_#000]"></div>
          </div>
        </div>

        {/* Projects Section */}
        <section className="mb-32">
          <h2 className="font-brutal text-5xl md:text-7xl font-black uppercase mb-12 flex items-center gap-6">
            Projects
            <span className="h-4 flex-1 bg-black block mt-2"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <BrutalCard color="white" className="flex flex-col">
              <div className="h-48 border-4 border-black bg-[#FF3E00] mb-6 flex items-center justify-center">
                <span className="font-brutal text-4xl text-black font-black uppercase">E-Commerce</span>
              </div>
              <h3 className="font-brutal text-2xl font-bold uppercase mb-2">Vibrant Store</h3>
              <p className="font-medium mb-8">A shop with bold typography and extreme contrast.</p>
              <div className="mt-auto">
                <BrutalButton variant="ghost" size="sm" className="w-full">View Case Study</BrutalButton>
              </div>
            </BrutalCard>

            <BrutalCard color="blue" className="flex flex-col translate-y-0 lg:translate-y-12">
              <div className="h-48 border-4 border-black bg-white mb-6 flex items-center justify-center">
                <span className="font-brutal text-4xl text-black font-black uppercase">App</span>
              </div>
              <h3 className="font-brutal text-2xl font-bold uppercase mb-2">Crypto Dash</h3>
              <p className="font-medium mb-8">A ruthless approach to financial metrics rendering.</p>
              <div className="mt-auto">
                <BrutalButton variant="primary" size="sm" className="w-full">View App</BrutalButton>
              </div>
            </BrutalCard>

            <BrutalCard color="pink" className="flex flex-col">
              <div className="h-48 border-4 border-black bg-[#FAFF00] mb-6 flex items-center justify-center">
                <span className="font-brutal text-4xl text-black font-black uppercase">API</span>
              </div>
              <h3 className="font-brutal text-2xl font-bold uppercase mb-2">Weather Brut</h3>
              <p className="font-medium mb-8">It tells you the weather loudly.</p>
              <div className="mt-auto">
                <BrutalButton variant="ghost" size="sm" className="w-full">View Docs</BrutalButton>
              </div>
            </BrutalCard>

          </div>
        </section>

        {/* Footer/Contact */}
        <section>
          <BrutalCard color="yellow" className="text-center py-20 flex flex-col items-center">
            <h2 className="font-brutal text-5xl md:text-7xl font-black uppercase mb-6">Let's Talk!</h2>
            <p className="text-2xl font-bold mb-12">No boring inquiries allowed.</p>
            <div className="flex gap-6">
              <a href="#" className="p-4 border-4 border-black bg-white hover:bg-[#FF00E5] hover:text-white transition-colors shadow-[4px_4px_0px_#000]">
                <Terminal size={32} />
              </a>
              <a href="#" className="p-4 border-4 border-black bg-white hover:bg-[#00E5FF] transition-colors shadow-[4px_4px_0px_#000]">
                <Mail size={32} />
              </a>
              <a href="#" className="p-4 border-4 border-black bg-white hover:bg-[#FF3E00] hover:text-white transition-colors shadow-[4px_4px_0px_#000]">
                <Briefcase size={32} />
              </a>
            </div>
          </BrutalCard>
        </section>

      </main>
    </div>
  );
}
