'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Cloud,
  ShieldCheck,
  LayoutDashboard,
  Activity,
  Cpu,
  Share2,
  Lock,
  Users,
  Star,
  CreditCard,
} from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import { FEATURES_DATA } from '@/lib/constants';

const iconMap = {
  Sparkles,
  Cloud,
  ShieldCheck,
  LayoutDashboard,
  Activity,
  Cpu,
  Share2,
  Lock,
  Users,
  Star,
  CreditCard,
};

export default function Features() {
  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white"
          >
            Everything Your CRM &amp; HRMS Needs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3"
          >
            Precision-engineered features for managing your customers, workforce, payroll, and analytics — all in one platform.
          </motion.p>
        </div>

        {/* 8-Grid Features with Spatial Radar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feature, idx) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="w-full h-full"
              >
                <div className="radar-card-outer group h-full">
                  {/* Orbiting animated light dot with staggered timing */}
                  <div
                    className="radar-card-dot"
                    style={{ animationDelay: `${idx * 0.75}s` }}
                  />

                  <div className="radar-card-inner">
                    {/* Glowing diagonal ray beam */}
                    <div className="radar-card-ray" />

                    {/* Technical radar blueprint crosshair lines */}
                    <div className="radar-card-line radar-card-topl" />
                    <div className="radar-card-line radar-card-leftl" />
                    <div className="radar-card-line radar-card-bottoml" />
                    <div className="radar-card-line radar-card-rightl" />

                    {/* Icon container with subtle neon border */}
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-300 group-hover:text-amber-200 group-hover:border-amber-400/50 group-hover:scale-105 transition-all duration-300 mb-4 shadow-md relative z-10">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors relative z-10">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-300/80 leading-relaxed relative z-10">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
