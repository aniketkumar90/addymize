'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ size = 'default', showSubtitle = true, className = '', stacked = false }) {
  const isLarge = size === 'large';

  if (stacked) {
    return (
      <Link
        href="/"
        className={`inline-flex flex-col items-center group transition-transform duration-300 hover:scale-[1.02] ${className}`}
      >
        <div className="relative w-20 h-20 rounded-2xl overflow-hidden mb-2 shadow-[0_0_30px_rgba(245,158,11,0.25)] border border-white/10 group-hover:border-amber-400/40 transition-all">
          <Image
            src="/images/logo.png"
            alt="Addymize Official Logo"
            width={80}
            height={80}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xl font-black tracking-[0.18em] uppercase text-gradient-gold">
            ADDYMIZE
          </span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-5 h-[1px] bg-gradient-to-r from-transparent to-amber-400/80" />
            <span className="text-[9px] tracking-[0.25em] text-amber-300 font-semibold uppercase">
              Web Solutions
            </span>
            <span className="w-5 h-[1px] bg-gradient-to-l from-transparent to-amber-400/80" />
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      {/* 3D Glowing Ribbon 'A' Mark from the Reference Image */}
      <div className="relative flex items-center justify-center shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/40 via-cyan-400/30 to-purple-600/30 blur-md rounded-xl group-hover:blur-lg transition-all duration-300" />
        
        {/* Crisp Logo Image Element */}
        <div
          className={`relative rounded-xl overflow-hidden border border-white/15 bg-black/60 shadow-lg group-hover:border-amber-400/40 transition-all ${
            isLarge ? 'w-11 h-11' : 'w-9 h-9'
          }`}
        >
          <Image
            src="/images/logo.png"
            alt="Addymize Logo"
            width={isLarge ? 44 : 36}
            height={isLarge ? 44 : 36}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Typography: ADDYMIZE + WEB SOLUTIONS Subtitle */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-black tracking-[0.16em] uppercase text-gradient-gold leading-none ${
            isLarge ? 'text-2xl' : 'text-lg sm:text-xl'
          }`}
        >
          Addymize
        </span>

        {showSubtitle && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-3.5 h-[1px] bg-gradient-to-r from-transparent to-amber-400/70" />
            <span className="text-[8px] sm:text-[9px] tracking-[0.22em] text-amber-200/90 font-bold uppercase leading-none">
              Web Solutions
            </span>
            <span className="w-3.5 h-[1px] bg-gradient-to-l from-transparent to-amber-400/70" />
          </div>
        )}
      </div>
    </Link>
  );
}
