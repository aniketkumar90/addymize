'use client';

import React from 'react';

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Full-bleed luminous oceanic teal backdrop - ZERO black shadow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 20%, #0e5f70 0%, #0a4c5a 35%, #073e4a 70%, #063640 100%)',
        }}
      />

      {/* 2. Top-center radiant cyan-teal light */}
      <div
        className="absolute -top-16 left-1/4 w-[850px] h-[650px] rounded-full blur-[140px] opacity-65"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.45) 0%, rgba(14, 165, 233, 0.3) 45%, transparent 70%)',
        }}
      />

      {/* 3. Golden shimmer matching perfume bottle cap & gold typography */}
      <div
        className="absolute top-12 right-12 w-[650px] h-[550px] rounded-full blur-[150px] opacity-40"
        style={{
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(20, 184, 166, 0.2) 40%, transparent 70%)',
        }}
      />

      {/* 4. Mid-page vibrant teal reflection */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full blur-[160px] opacity-55"
        style={{
          background: 'radial-gradient(circle, rgba(13, 148, 136, 0.4) 0%, rgba(8, 145, 178, 0.25) 50%, transparent 75%)',
        }}
      />

      {/* 5. Lower section turquoise aura */}
      <div
        className="absolute bottom-20 right-1/4 w-[750px] h-[600px] rounded-full blur-[160px] opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(14, 116, 144, 0.25) 50%, transparent 70%)',
        }}
      />

      {/* 6. Bottom-left soft turquoise glow */}
      <div
        className="absolute -bottom-10 left-10 w-[650px] h-[550px] rounded-full blur-[150px] opacity-45"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.35) 0%, transparent 65%)',
        }}
      />
    </div>
  );
}
