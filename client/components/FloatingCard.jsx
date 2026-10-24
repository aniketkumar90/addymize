'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function FloatingCard({
  children,
  className = '',
  delay = 0,
  duration = 5,
  yOffset = 10,
}) {
  return (
    <motion.div
      animate={{
        y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
        rotate: [-0.5, 0.5, -0.5],
      }}
      transition={{
        duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
      }}
      className={`absolute z-20 pointer-events-none select-none ${className}`}
    >
      <div className="pointer-events-auto shadow-2xl backdrop-blur-xl border border-white/15 rounded-2xl bg-[#0F1528]/85 text-white">
        {children}
      </div>
    </motion.div>
  );
}
