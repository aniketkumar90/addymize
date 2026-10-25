'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneCall, MessageCircle, X, ChevronUp, Sparkles } from 'lucide-react';

export default function FloatingContactButtons({
  phoneNumber = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+918789414340',
  whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918789414340',
  whatsappMessage = 'Hello Addymize team, I would like to inquire about your CRM & HRMS solutions.',
}) {
  const [hoveredButton, setHoveredButton] = useState(null); // 'whatsapp' | 'call' | null

  // Clean numbers for links
  const cleanPhone = phoneNumber.replace(/[^0-9+]/g, '');
  const cleanWa = whatsappNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/${cleanWa}?text=${encodedMsg}`;
  const callUrl = `tel:${cleanPhone}`;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 sm:gap-3 select-none">
      {/* 1. WHATSAPP BUTTON */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setHoveredButton('whatsapp')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {/* Tooltip on Desktop */}
        <AnimatePresence>
          {hoveredButton === 'whatsapp' && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="hidden sm:flex absolute right-16 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#06333d]/95 backdrop-blur-md border border-emerald-400/40 text-emerald-100 text-xs font-semibold shadow-xl whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Chat on WhatsApp</span>
              <span className="text-[10px] text-emerald-300/70 font-mono">Instant Reply</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Floating Circle */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Addymize on WhatsApp"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-green-400 text-white flex items-center justify-center shadow-[0_8px_25px_rgba(16,185,129,0.45)] border border-emerald-300/30 group cursor-pointer transition-shadow hover:shadow-[0_12px_32px_rgba(16,185,129,0.65)]"
        >
          {/* Subtle pulse wave */}
          <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-20 animate-ping pointer-events-none" />

          {/* Official WhatsApp SVG Icon */}
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 fill-current drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </motion.a>
      </div>

      {/* 2. CALL BUTTON */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setHoveredButton('call')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        {/* Tooltip on Desktop */}
        <AnimatePresence>
          {hoveredButton === 'call' && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="hidden sm:flex absolute right-16 items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#06333d]/95 backdrop-blur-md border border-amber-400/40 text-amber-100 text-xs font-semibold shadow-xl whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Direct Call</span>
              <span className="text-[10px] text-amber-300/80 font-mono">{phoneNumber}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call Floating Circle */}
        <motion.a
          href={callUrl}
          aria-label={`Call Addymize at ${phoneNumber}`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-slate-950 flex items-center justify-center shadow-[0_8px_25px_rgba(245,158,11,0.45)] border border-amber-200/50 group cursor-pointer transition-shadow hover:shadow-[0_12px_32px_rgba(245,158,11,0.65)]"
        >
          <Phone className="w-5 h-5 sm:w-6.5 sm:h-6.5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
        </motion.a>
      </div>
    </div>
  );
}
