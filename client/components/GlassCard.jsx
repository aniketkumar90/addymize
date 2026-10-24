'use client';

import React from 'react';

export default function GlassCard({
  children,
  className = '',
  glow = 'none', // 'gold' | 'cyan' | 'purple' | 'none'
  hoverEffect = true,
  ...props
}) {
  const glowMap = {
    gold: 'hover:shadow-[0_0_40px_-8px_rgba(245,158,11,0.3)] hover:border-amber-500/40',
    cyan: 'hover:shadow-[0_0_40px_-8px_rgba(56,189,248,0.3)] hover:border-cyan-400/40',
    purple: 'hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.3)] hover:border-purple-500/40',
    none: 'hover:shadow-2xl hover:border-white/20',
  };

  return (
    <div
      className={`relative rounded-3xl bg-[#06424f]/60 backdrop-blur-xl border border-teal-300/20 transition-all duration-300 ${
        hoverEffect ? 'hover:-translate-y-1' : ''
      } ${glowMap[glow] || glowMap.none} ${className}`}
      {...props}
    >
      {/* Subtle top glare highlight */}
      <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      {children}
    </div>
  );
}
