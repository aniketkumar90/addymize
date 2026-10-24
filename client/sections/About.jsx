'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { ABOUT_METRICS } from '@/lib/constants';

export default function About({ onBookDemoClick }) {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Large Typography + Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Technology Built Around Your <span className="text-gradient-gold">Growth</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We bridge the gap between heavy enterprise legacy software and cutting-edge digital experiences. From bespoke React & Next.js architectures to hardened CRM telemetry and biometric digital identity, every layer is built to convert, endure, and outshine.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                'Composable micro-frontends with instant page loads',
                'Native Cloudinary media optimization & real-time CDNs',
                'Enterprise-grade MongoDB data schemas with zero data lock-in',
                'Dedicated 1-on-1 solutions architect for every deployment',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={onBookDemoClick}
                icon={ArrowRight}
                iconPosition="right"
              >
                Schedule Architecture Review
              </Button>
            </div>
          </motion.div>

          {/* Right Column: 4 Animated Metrics Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {ABOUT_METRICS.map((metric, idx) => (
              <GlassCard
                key={metric.label}
                glow={idx === 0 ? 'gold' : idx === 3 ? 'cyan' : 'none'}
                className="p-5 sm:p-6 flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-amber-400 group-hover:scale-150 transition-all" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-amber-300 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-1">{metric.label}</div>
                  <div className="text-xs text-slate-400 mt-1 leading-snug">{metric.desc}</div>
                </div>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
