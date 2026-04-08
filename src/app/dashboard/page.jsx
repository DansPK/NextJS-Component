import React from "react";
import { Activity, Cpu, ShieldAlert, Terminal, Users, Wifi } from "lucide-react";
import { CyberButton } from "@/components/cyberpunk/ui/button";
import { CyberCard } from "@/components/cyberpunk/ui/card";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#090909] text-[#e0e0e0] font-cyber selection:bg-[#00FFFF] selection:text-black">
      {/* Top Navbar */}
      <nav className="border-b border-[#333] bg-[#050505] p-4 sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Terminal className="text-[#00FFFF]" />
          <span className="text-[#00FFFF] font-bold tracking-widest text-xl">SYS.DASHBOARD_V9</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <span className="text-[#F3E600] flex items-center gap-2">
            <Wifi size={16} /> NETWORK: STABLE
          </span>
          <CyberButton variant="solid-yellow" className="!py-1.5 !px-4 !text-xs">
            LOGOUT SYS
          </CyberButton>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-[#333] min-h-[calc(100vh-65px)] bg-[#050505]/50 p-6 hidden md:block">
          <div className="text-xs text-[#666] mb-4 tracking-widest uppercase">Navigation Links</div>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center gap-3 text-[#00FFFF] hover:text-white transition-colors">
                <Activity size={18} /> <span>OVERVIEW</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-[#e0e0e0] hover:text-[#00FFFF] transition-colors">
                <Users size={18} /> <span>OPERATIVES</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-[#e0e0e0] hover:text-[#00FFFF] transition-colors">
                <Cpu size={18} /> <span>HARDWARE</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 text-[#FF00FF] hover:text-white transition-colors mt-8">
                <ShieldAlert size={18} /> <span>BREACH LOGS</span>
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold uppercase text-white mb-2">System Diagnostics</h1>
            <p className="text-[#888] text-sm">MONITORING SECTOR 7G MAINFRAME ACTIVITY</p>
          </header>

          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <CyberCard glow="blue" className="text-[#00FFFF]">
              <div className="text-xs text-[#00FFFF]/60 mb-2">CPU USAGE</div>
              <div className="text-4xl font-bold flex items-baseline gap-2">
                87<span className="text-lg">%</span>
              </div>
              <div className="mt-4 h-1 bg-[#222]">
                <div className="h-full bg-[#00FFFF] w-[87%] shadow-[0_0_10px_#00FFFF]"></div>
              </div>
            </CyberCard>
            
            <CyberCard glow="pink" className="text-[#FF00FF]">
              <div className="text-xs text-[#FF00FF]/60 mb-2">NETWORK LOAD</div>
              <div className="text-4xl font-bold flex items-baseline gap-2">
                1.4<span className="text-lg">TB/s</span>
              </div>
              <div className="mt-4 h-1 bg-[#222]">
                <div className="h-full bg-[#FF00FF] w-[45%] shadow-[0_0_10px_#FF00FF]"></div>
              </div>
            </CyberCard>
            
            <CyberCard glow="none">
              <div className="text-xs text-[#888] mb-2">SEC BREACH ATTEMPTS</div>
              <div className="text-4xl font-bold text-[#F3E600]">
                0,004
              </div>
              <div className="mt-4 text-xs text-[#F3E600]/80">
                STATUS: CONTAINED
              </div>
            </CyberCard>
          </div>

          {/* Large Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-2">
              <CyberCard glow="blue" className="h-full min-h-[300px]">
                <h3 className="text-lg text-white mb-6 border-b border-[#333] pb-2">LIVE FEED // TRAFFIC</h3>
                {/* Fake Graph */}
                <div className="h-48 flex items-end gap-2 px-4 opacity-70">
                  <div className="w-full bg-[#00FFFF] h-[20%]"></div>
                  <div className="w-full bg-[#00FFFF] h-[40%]"></div>
                  <div className="w-full bg-[#00FFFF] h-[30%]"></div>
                  <div className="w-full bg-[#00FFFF] h-[70%]"></div>
                  <div className="w-full bg-[#00FFFF] h-[50%]"></div>
                  <div className="w-full bg-[#00FFFF] h-[80%]"></div>
                  <div className="w-full bg-[#00FFFF] h-[40%] text-black text-xs text-center pt-1 font-bold">MAX</div>
                  <div className="w-full bg-[#00FFFF] h-[60%]"></div>
                  <div className="w-full bg-[#00FFFF] h-[30%]"></div>
                </div>
              </CyberCard>
            </div>
            
            <div>
              <CyberCard glow="pink" className="h-full">
                <h3 className="text-lg text-white mb-6 border-b border-[#333] pb-2">ACTIVE ALERTS</h3>
                <ul className="space-y-4 text-sm mt-4">
                  <li className="flex justify-between items-start border-l-2 border-[#FF00FF] pl-3">
                    <div>
                      <div className="text-[#FF00FF] font-bold">UNAUTHORIZED ACCESS</div>
                      <div className="text-[#888] text-xs">IP: 192.168.0.XXX</div>
                    </div>
                    <span className="text-[#666] text-xs">2 MINS</span>
                  </li>
                  <li className="flex justify-between items-start border-l-2 border-[#F3E600] pl-3">
                    <div>
                      <div className="text-[#F3E600] font-bold">THERMAL SPIKE</div>
                      <div className="text-[#888] text-xs">SERVER CORE_04</div>
                    </div>
                    <span className="text-[#666] text-xs">15 MINS</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <CyberButton variant="neon-pink" className="w-full text-xs py-2 scale-90">
                    RESOLVE ALL
                  </CyberButton>
                </div>
              </CyberCard>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
