'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HERO_STATS } from '@/lib/constants';

export default function StatsCard() {
  return (
    <div className="w-full max-w-7xl mx-auto my-14 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {HERO_STATS.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="w-full"
          >
            <div className="radar-card-outer group">
              {/* Moving perimeter dot with staggered animation */}
              <div
                className="radar-card-dot"
                style={{ animationDelay: `${idx * 1.5}s` }}
              />

              <div className="radar-card-inner !items-center !text-center">
                {/* Glowing light ray */}
                <div className="radar-card-ray" />

                {/* Main large metric text */}
                <div
                  className="radar-card-text transition-transform duration-300 group-hover:scale-105"
                  data-value={stat.value}
                >
                  {stat.value}
                </div>

                {/* Primary Metric Label */}
                <div className="text-sm sm:text-base font-bold text-slate-100 mt-2 z-10 tracking-wide transition-colors duration-300 group-hover:text-amber-300">
                  {stat.label}
                </div>

                {/* Metric Subtitle */}
                <div className="text-[11px] text-slate-400 mt-0.5 z-10 font-medium transition-colors duration-300 group-hover:text-amber-200/80">
                  {stat.subtext}
                </div>

                {/* Precision crosshair blueprint lines */}
                <div className="radar-card-line radar-card-topl" />
                <div className="radar-card-line radar-card-leftl" />
                <div className="radar-card-line radar-card-bottoml" />
                <div className="radar-card-line radar-card-rightl" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
