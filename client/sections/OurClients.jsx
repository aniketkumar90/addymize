'use client';

import React from 'react';

// ==========================================
// PARTNER & CLIENT LOGO SVG COMPONENTS
// ==========================================

// 1. Vardhman Projects
function VardhmanLogo() {
  return (
    <div className="flex items-center gap-3">
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 40 40" fill="none">
        <polygon points="20,4 36,13 20,22 4,13" fill="#D4AF37" opacity="0.95" />
        <polygon points="4,13 20,22 20,38 4,29" fill="#AA820A" />
        <polygon points="36,13 20,22 20,38 36,29" fill="#F3E5AB" />
        <line x1="20" y1="4" x2="20" y2="22" stroke="#FFF7CC" strokeWidth="1.2" />
        <line x1="4" y1="13" x2="20" y2="22" stroke="#6D5306" strokeWidth="1.2" />
        <line x1="36" y1="13" x2="20" y2="22" stroke="#99770B" strokeWidth="1.2" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[12px] font-black tracking-wider text-slate-800 leading-tight">
          VARDHMAN
        </span>
        <span className="text-[9px] font-semibold tracking-widest text-[#99732F] leading-tight">
          PROJECTS
        </span>
      </div>
    </div>
  );
}

// 2. SkillzRevo
function SkillzRevoLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shrink-0 shadow-sm">
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 14C6 11.5 8 9.5 10.5 9.5H13.5C16 9.5 18 11.5 18 14C18 16.5 16 18.5 13.5 18.5H9"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M18 10C18 7.5 16 5.5 13.5 5.5H10.5C8 5.5 6 7.5 6 10"
            stroke="#FDBA74"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="9" cy="18.5" r="1.2" fill="white" />
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <div className="text-[14px] font-black leading-none">
          <span className="text-[#0284C7]">Skillz</span>
          <span className="text-[#F97316]">Revo</span>
          <span className="text-[#0284C7]">.</span>
        </div>
        <span className="text-[7.5px] font-medium text-slate-500 tracking-tight mt-0.5">
          Revolutionizing Skills | Talent | Technology
        </span>
      </div>
    </div>
  );
}

// 3. SHELBY Enterprises
function ShelbyLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-8 h-7 shrink-0" viewBox="0 0 36 30" fill="none">
        <path d="M4 6L16 6L12 14L2 14Z" fill="#0F172A" />
        <path d="M18 6L32 6L28 14L14 14Z" fill="#DC2626" />
        <path d="M8 16L22 16L18 24L4 24Z" fill="#0F172A" />
        <path d="M24 16L34 16L30 24L20 24Z" fill="#DC2626" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[14px] font-black italic tracking-tight text-[#DC2626] leading-none">
          SHELBY
        </span>
        <span className="text-[8.5px] font-extrabold tracking-widest text-slate-900 leading-tight mt-0.5">
          ENTERPRISES
        </span>
      </div>
    </div>
  );
}

// 4. SeaBase
function SeaBaseLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="16" stroke="#0284C7" strokeWidth="2" strokeDasharray="3 2" />
        <circle cx="18" cy="18" r="12" fill="#E0F2FE" />
        <path d="M18 8V28M8 18H28M11 11L25 25M11 25L25 11" stroke="#0369A1" strokeWidth="2" strokeLinecap="round" />
        <circle cx="18" cy="18" r="4" fill="#0284C7" />
        <circle cx="18" cy="18" r="1.5" fill="white" />
      </svg>
      <span className="text-[14px] font-extrabold tracking-tight text-[#0369A1]">
        SeaBase
      </span>
    </div>
  );
}

// 5. ZEROHARM Sciences
function ZeroHarmLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36" fill="none">
        <path d="M18 32V14" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="18" cy="8" r="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
        <path d="M15 8C15 6 18 4 18 4C18 4 21 6 21 8C21 10 18 11 18 11C18 11 15 10 15 8Z" fill="#15803D" />
        <path d="M12 18C15 16 21 16 24 18" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 23C14 21 22 21 26 23" stroke="#15803D" strokeWidth="2" strokeLinecap="round" />
        <circle cx="11" cy="17" r="1.5" fill="#15803D" />
        <circle cx="25" cy="17" r="1.5" fill="#15803D" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[12px] font-black tracking-wider text-slate-900 leading-tight">
          ZEROHARM
        </span>
        <span className="text-[8px] font-bold tracking-widest text-slate-500 leading-tight">
          SCIENCES
        </span>
      </div>
    </div>
  );
}

// 6. Moshi Moshi
function MoshiMoshiLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <path d="M6 10L16 18L10 24L4 16Z" fill="#0F172A" />
        <path d="M26 10L16 18L22 24L28 16Z" fill="#0F172A" />
        <circle cx="16" cy="18" r="2.5" fill="#334155" />
      </svg>
      <span className="text-[14px] font-extrabold tracking-tight text-[#0F172A]">
        Moshi Moshi<sup className="text-[8px] font-bold text-slate-500 ml-0.5">®</sup>
      </span>
    </div>
  );
}

// 7. GlobalShala
function GlobalShalaLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="20" r="12" stroke="#1E40AF" strokeWidth="2" fill="#EFF6FF" />
        <ellipse cx="18" cy="20" rx="6" ry="12" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="6" y1="20" x2="30" y2="20" stroke="#3B82F6" strokeWidth="1.5" />
        <polygon points="18,4 28,9 18,14 8,9" fill="#1E3A8A" />
        <line x1="28" y1="9" x2="28" y2="16" stroke="#F59E0B" strokeWidth="1.5" />
        <circle cx="28" cy="16" r="1.5" fill="#F59E0B" />
      </svg>
      <span className="text-[14px] font-black tracking-tight text-[#1E3A8A]">
        GlobalShala
      </span>
    </div>
  );
}

// 8. HDFC Bank
function HdfcBankLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-7 h-7 bg-[#004C8F] rounded p-1 flex items-center justify-center shrink-0">
        <div className="w-full h-full border-2 border-white relative flex items-center justify-center">
          <div className="w-2 h-2 bg-[#ED1C24]" />
        </div>
      </div>
      <div className="flex flex-col text-left">
        <span className="text-[13px] font-black tracking-tight text-[#004C8F] leading-tight">
          HDFC BANK
        </span>
        <span className="text-[7.5px] font-bold tracking-wider text-slate-400">
          PARTNER
        </span>
      </div>
    </div>
  );
}

// 9. ICICI Bank
function IciciBankLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#F37021" />
        <path d="M16 8C13 11 11 14 11 17C11 20 13 23 16 24C19 23 21 20 21 17C21 14 19 11 16 8Z" fill="white" />
        <circle cx="16" cy="17" r="3" fill="#A41D24" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[13px] font-black tracking-tight text-[#A41D24] leading-tight">
          ICICI <span className="text-[#F37021]">Bank</span>
        </span>
        <span className="text-[7.5px] font-bold tracking-wider text-slate-400">
          PARTNER
        </span>
      </div>
    </div>
  );
}

// 10. Axis Bank
function AxisBankLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <polygon points="16,6 27,24 5,24" fill="#97144D" />
        <polygon points="16,14 22,24 10,24" fill="white" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[13px] font-black tracking-wider text-[#97144D] leading-tight">
          AXIS BANK
        </span>
        <span className="text-[7.5px] font-bold tracking-wider text-slate-400">
          PARTNER
        </span>
      </div>
    </div>
  );
}

// 11. State Bank of India
function SbiLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#00A5EC" />
        <circle cx="16" cy="13" r="5" fill="white" />
        <rect x="14.5" y="13" width="3" height="13" fill="white" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[12px] font-black tracking-tight text-[#002F6C] leading-tight">
          State Bank of India
        </span>
        <span className="text-[7.5px] font-bold tracking-wider text-slate-400">
          PARTNER
        </span>
      </div>
    </div>
  );
}

// 12. Kotak Mahindra Bank
function KotakLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#ED1C24" />
        <path d="M10 16C10 13 13 10 16 10C19 10 22 13 22 16C22 19 19 22 16 22" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="16" cy="16" r="2" fill="white" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[13px] font-black tracking-tight text-[#ED1C24] leading-tight">
          kotak
        </span>
        <span className="text-[7.5px] font-bold tracking-wider text-slate-400">
          Mahindra Bank
        </span>
      </div>
    </div>
  );
}

// List of all partners & bank logos
const PARTNER_LOGOS = [
  { id: 'vardhman', Component: VardhmanLogo },
  { id: 'skillzrevo', Component: SkillzRevoLogo },
  { id: 'shelby', Component: ShelbyLogo },
  { id: 'seabase', Component: SeaBaseLogo },
  { id: 'zeroharm', Component: ZeroHarmLogo },
  { id: 'moshimoshi', Component: MoshiMoshiLogo },
  { id: 'globalshala', Component: GlobalShalaLogo },
  { id: 'hdfc', Component: HdfcBankLogo },
  { id: 'icici', Component: IciciBankLogo },
  { id: 'axis', Component: AxisBankLogo },
  { id: 'sbi', Component: SbiLogo },
  { id: 'kotak', Component: KotakLogo },
];

export default function OurClients() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section id="clients" className="relative py-12 sm:py-16 overflow-hidden">
      {/* Anchor for any navigation links pointing to #solutions */}
      <div id="solutions" className="absolute -top-24 pointer-events-none" />

      {/* Luminous centered ambient glow band matching Image 1 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[220px] bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent blur-[110px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[160px] bg-white/10 blur-[90px] pointer-events-none" />

      {/* Heading matching Image 1 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 relative z-10">
        <h3 className="text-xs sm:text-sm font-bold tracking-[0.22em] sm:tracking-[0.28em] text-slate-300 uppercase select-none">
          TRUSTED BY TEAMS &amp; PARTNERED WITH INDIA’S LEADING BANKS
        </h3>
      </div>

      {/* Infinite Auto-Loop Marquee Row - Bounded inside max-w-7xl matching StatsCard and other sections */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative overflow-hidden py-3">
          {/* Left fade shadow */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 sm:w-32 z-20" style={{background: 'linear-gradient(to right, #073e4a 0%, transparent 100%)'}} />
          {/* Right fade shadow */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 sm:w-32 z-20" style={{background: 'linear-gradient(to left, #073e4a 0%, transparent 100%)'}} />

          <div className="flex overflow-hidden">
            <div className="animate-marquee-left flex gap-4 sm:gap-6 py-2 hover:[animation-play-state:paused] active:[animation-play-state:paused]">
              {marqueeLogos.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="w-[200px] sm:w-[240px] h-[72px] sm:h-[82px] shrink-0 px-4 sm:px-5 bg-white rounded-2xl border border-white/70 shadow-sm hover:shadow-md flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] cursor-pointer select-none"
                >
                  <item.Component />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
