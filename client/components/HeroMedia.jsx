'use client';

import React from 'react';
import { Star, Layers, ShoppingBag } from 'lucide-react';
import DashboardMockup from './DashboardMockup';
import FloatingCard from './FloatingCard';

export default function HeroMedia() {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Live Interactive UI Tag */}
      <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1324]/80 border border-white/10 backdrop-blur-xl mb-4 text-xs font-semibold text-amber-300 shadow-lg select-none">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Live Interactive UI</span>
      </div>

      {/* Main Container */}
      <div className="relative w-full max-w-[700px]">
        {/* Floating Badge 1: Top Right - ★ Interactive Preview */}
        <FloatingCard
          className="-top-4 right-0 sm:-top-5 sm:-right-4 scale-90 sm:scale-100"
          delay={0}
          duration={5}
          yOffset={12}
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#11172A]/90 border border-amber-400/30 text-xs font-semibold text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Interactive Preview</span>
          </div>
        </FloatingCard>

        {/* Floating Badge 2: Floating isometric cube/layer */}
        <FloatingCard
          className="bottom-2 left-0 sm:bottom-4 sm:-left-6 scale-90 sm:scale-100"
          delay={0.6}
          duration={6}
          yOffset={10}
        >
          <div className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-2xl bg-[#0F162B]/90 border border-cyan-400/30 shadow-[0_0_25px_rgba(56,189,248,0.25)]">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 border border-cyan-400/30">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="text-[10px] sm:text-[11px] leading-tight">
              <div className="font-bold text-white">99% Speed</div>
              <div className="text-slate-400 text-[9px] sm:text-[10px]">Cloud Scale</div>
            </div>
          </div>
        </FloatingCard>

        {/* Floating Badge 3: User Avatar badge */}
        <FloatingCard
          className="-top-3 left-2 sm:left-12 scale-90 sm:scale-100"
          delay={1.2}
          duration={5.5}
          yOffset={8}
        >
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#0D1326]/90 border border-white/15 text-[11px]">
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-[9px] font-bold text-black">
              TL
            </div>
            <span className="text-slate-200 font-medium">Tracko Team</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </FloatingCard>

        {/* Floating Badge 4: Bottom Right Cart / Commerce badge */}
        <FloatingCard
          className="bottom-10 right-0 sm:bottom-12 sm:-right-6 scale-90 sm:scale-100"
          delay={0.9}
          duration={6.2}
          yOffset={11}
        >
          <div className="flex items-center gap-2 px-3 py-2 rounded-2xl bg-[#12162E]/90 border border-purple-500/30 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
            <div className="w-7 h-7 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-300 border border-purple-400/30">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <div className="text-[11px] leading-tight">
              <div className="font-bold text-white">Instant Checkout</div>
              <div className="text-purple-300 text-[10px]">+67% Conv</div>
            </div>
          </div>
        </FloatingCard>

        {/* Display Active Dashboard Mockup */}
        <DashboardMockup />
      </div>
    </div>
  );
}
