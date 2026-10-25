'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    label: 'Connect on LinkedIn',
    url: '#',
    color: '#0A66C2',
    hoverBg: 'hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 hover:text-[#38a6ff]',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    id: 'twitter',
    name: 'X (Twitter)',
    label: 'Follow on X',
    url: '#',
    color: '#1DA1F2',
    hoverBg: 'hover:bg-white/15 hover:border-white/40 hover:text-white',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    label: 'Follow on Instagram',
    url: '#',
    color: '#E1306C',
    hoverBg: 'hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-300',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: 'facebook',
    name: 'Facebook',
    label: 'Trackolab on Facebook',
    url: '#',
    color: '#1877F2',
    hoverBg: 'hover:bg-[#1877F2]/20 hover:border-[#1877F2]/50 hover:text-[#5295f7]',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
      </svg>
    ),
  },
  {
    id: 'youtube',
    name: 'YouTube',
    label: 'Watch on YouTube',
    url: '#',
    color: '#FF0000',
    hoverBg: 'hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub',
    label: 'GitHub Code',
    url: '#',
    color: '#ffffff',
    hoverBg: 'hover:bg-white/15 hover:border-white/40 hover:text-amber-300',
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

export default function StickySocialBar() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      aria-label="Social Media Links"
      className="hidden xl:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 select-none"
    >
      {/* Transparent Glassmorphic Vertical Dock */}
      <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-all duration-300">
        {/* Subtle decorative dot */}
        <div className="w-1 h-1 rounded-full bg-teal-400/40 mb-0.5" />

        {SOCIAL_LINKS.map((item) => {
          const isHovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Flyout Tooltip to the Right */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, x: -6, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -4, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="hidden sm:flex absolute left-full ml-3 items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#053742]/95 backdrop-blur-md border border-teal-300/30 text-[11px] font-semibold text-slate-100 shadow-xl whitespace-nowrap pointer-events-none"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.label}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Social Icon Button */}
              <motion.a
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={item.label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-slate-300/70 border border-transparent transition-all duration-200 cursor-pointer ${item.hoverBg}`}
              >
                {item.icon}
              </motion.a>
            </div>
          );
        })}

        {/* Subtle bottom decorative dot */}
        <div className="w-1 h-1 rounded-full bg-amber-400/40 mt-0.5" />
      </div>
    </motion.aside>
  );
}
