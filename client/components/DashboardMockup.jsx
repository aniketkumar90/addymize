'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Activity,
  Layers,
  Search,
  Bell,
  SlidersHorizontal,
  ChevronRight,
  Shield,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
} from 'lucide-react';

export default function DashboardMockup({ isPreviewMode = false }) {
  const [activeTab, setActiveTab] = useState('weekly');
  const [hoveredBar, setHoveredBar] = useState(null);

  const statsData = {
    daily: { revenue: '$1,240', target: '$48', impressions: '38k', conv: '62%', ret: '68%' },
    weekly: { revenue: '$4,365', target: '$149', impressions: '124k', conv: '65%', ret: '72%' },
    monthly: { revenue: '$18,920', target: '$640', impressions: '512k', conv: '71%', ret: '79%' },
  };

  const current = statsData[activeTab];

  const barHeights = [45, 65, 35, 85, 95, 70, 55, 90];

  return (
    <div className="relative w-full max-w-[700px] mx-auto select-none">
      {/* Outer ambient glow frames */}
      <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-r from-amber-500/25 via-cyan-500/20 to-purple-600/30 blur-xl opacity-80 animate-pulse-glow" />
      <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-br from-amber-400/40 via-cyan-400/30 to-purple-500/30 opacity-70" />

      {/* Main Dashboard Container */}
      <div className="relative rounded-[24px] bg-[#0A0E1A]/95 border border-white/15 p-3.5 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-slate-100 overflow-hidden">
        {/* Smooth Glass Sheen */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

        {/* Top Bar / Navigation */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08] relative z-10">
          <div className="flex items-center gap-2">
            {/* Window dots */}
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
            </div>

            {/* Mini Brand Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-semibold text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              Addymize Console
            </div>
          </div>

          {/* Center search input */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-slate-400 w-44">
            <Search className="w-3 h-3 text-slate-500" />
            <span className="text-[11px] text-slate-500 truncate">Search telemetry...</span>
          </div>

          {/* Right profile / active state */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-[11px] text-cyan-300 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Live
            </div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-purple-500 p-[1px]">
              <div className="w-full h-full rounded-full bg-[#0A0E1A] flex items-center justify-center text-[10px] font-bold text-amber-300">
                AR
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Body Grid */}
        <div className="grid grid-cols-12 gap-3 relative z-10">
          {/* Mini Left Sidebar */}
          <div className="col-span-2 hidden sm:flex flex-col gap-2 p-1.5 rounded-xl bg-white/[0.02] border border-white/[0.05]">
            <button
              onClick={() => setActiveTab('daily')}
              className={`p-2 rounded-lg flex flex-col items-center justify-center gap-1 transition-all ${
                activeTab === 'daily'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span className="text-[9px] font-medium">24H</span>
            </button>
            <button
              onClick={() => setActiveTab('weekly')}
              className={`p-2 rounded-lg flex flex-col items-center justify-center gap-1 transition-all ${
                activeTab === 'weekly'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              <span className="text-[9px] font-medium">7D</span>
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`p-2 rounded-lg flex flex-col items-center justify-center gap-1 transition-all ${
                activeTab === 'monthly'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="text-[9px] font-medium">30D</span>
            </button>
          </div>

          {/* Main Dashboard Content Area */}
          <div className="col-span-12 sm:col-span-10 flex flex-col gap-3">
            {/* Top KPI Cards Row */}
            <div className="grid grid-cols-3 gap-2">
              {/* Stat 1: Revenue */}
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/30 transition-all">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span className="truncate">Revenue</span>
                  <span className="text-emerald-400 text-[9px] font-semibold">+14%</span>
                </div>
                <div className="text-sm sm:text-base font-extrabold text-white mt-1">
                  {current.revenue}
                </div>
              </div>

              {/* Stat 2: Target */}
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-cyan-400/30 transition-all">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span className="truncate">Target</span>
                  <span className="text-cyan-400 text-[9px] font-semibold">+8.4%</span>
                </div>
                <div className="text-sm sm:text-base font-extrabold text-cyan-200 mt-1">
                  {current.target}
                </div>
              </div>

              {/* Stat 3: Reach */}
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-purple-400/30 transition-all">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span className="truncate">Impressions</span>
                  <span className="text-purple-400 text-[9px] font-semibold">Active</span>
                </div>
                <div className="text-sm sm:text-base font-extrabold text-purple-200 mt-1">
                  {current.impressions}
                </div>
              </div>
            </div>

            {/* Middle Row: Donut Gauges & Glowing Spline Chart */}
            <div className="grid grid-cols-12 gap-2.5">
              {/* Circular Gauges */}
              <div className="col-span-5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-around">
                {/* Gauge 1: Cyan (65%) */}
                <div className="flex flex-col items-center">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#1E293B"
                        strokeWidth="3.5"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="3.5"
                        strokeDasharray="65, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-[10px] font-bold text-cyan-300">
                      {current.conv}
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1">Conversion</span>
                </div>

                {/* Gauge 2: Gold (72%) */}
                <div className="flex flex-col items-center">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#1E293B"
                        strokeWidth="3.5"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#F59E0B"
                        strokeWidth="3.5"
                        strokeDasharray="72, 100"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-[10px] font-bold text-amber-300">
                      {current.ret}
                    </span>
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1">Retention</span>
                </div>
              </div>

              {/* Glowing Line Spline Chart: "Light Flow" */}
              <div className="col-span-7 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span className="font-semibold text-slate-300">Light Flow</span>
                  <span className="text-amber-400 text-[9px] flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5" /> Optimal
                  </span>
                </div>
                <div className="w-full h-12 mt-1 relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
                    <defs>
                      <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#A855F7" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="50%" stopColor="#A855F7" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 32 Q 20 5, 40 22 T 80 10 T 100 18 L 100 40 L 0 40 Z"
                      fill="url(#area-gradient)"
                    />
                    <path
                      d="M0 32 Q 20 5, 40 22 T 80 10 T 100 18"
                      fill="none"
                      stroke="url(#line-gradient)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Glowing pulse nodes */}
                    <circle cx="40" cy="22" r="3" fill="#38BDF8" className="animate-ping" />
                    <circle cx="40" cy="22" r="2" fill="#FFFFFF" />
                    <circle cx="80" cy="10" r="2.5" fill="#F59E0B" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Bottom Row: Bar Chart & Radial Arc Meter */}
            <div className="grid grid-cols-12 gap-2.5">
              {/* Bar Chart: "Revenue Decisions" */}
              <div className="col-span-7 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center justify-between text-[10px] text-slate-300 font-semibold mb-2">
                  <span>Revenue Decisions</span>
                  <span className="text-[9px] text-slate-500 font-normal">7 Days</span>
                </div>
                <div className="flex items-end justify-between h-14 gap-1 px-1">
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredBar(i)}
                      onMouseLeave={() => setHoveredBar(null)}
                      className="flex-1 flex flex-col items-center justify-end h-full group cursor-pointer"
                    >
                      <div
                        style={{ height: `${h}%` }}
                        className={`w-full rounded-t-sm transition-all duration-300 ${
                          i % 2 === 0
                            ? 'bg-gradient-to-t from-cyan-600 to-cyan-400 group-hover:from-cyan-500 group-hover:to-cyan-300'
                            : 'bg-gradient-to-t from-amber-600 to-amber-400 group-hover:from-amber-500 group-hover:to-amber-300'
                        } ${hoveredBar === i ? 'scale-110 shadow-lg' : ''}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Radial Arc Speedometer: "Recent Performance" */}
              <div className="col-span-5 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center justify-between">
                <span className="text-[10px] font-semibold text-slate-300">
                  Recent Performance
                </span>
                {/* Arc Meter */}
                <div className="relative w-24 h-12 flex items-end justify-center overflow-hidden">
                  <svg className="w-24 h-24" viewBox="0 0 100 100">
                    <defs>
                      <linearGradient id="arc-rainbow" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="50%" stopColor="#A855F7" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                    {/* Background Arc */}
                    <path
                      d="M 15 85 A 40 40 0 0 1 85 85"
                      fill="none"
                      stroke="#1E293B"
                      strokeWidth="8"
                      strokeLinecap="round"
                    />
                    {/* Active Rainbow Arc */}
                    <path
                      d="M 15 85 A 40 40 0 0 1 85 85"
                      fill="none"
                      stroke="url(#arc-rainbow)"
                      strokeWidth="8"
                      strokeDasharray="180"
                      strokeDashoffset="35"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute bottom-0 text-xs font-black text-amber-300">
                    99%
                  </span>
                </div>
                <span className="text-[9px] text-emerald-400 font-medium">Enterprise Speed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
