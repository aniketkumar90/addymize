'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ShieldCheck } from 'lucide-react';
import Button from '@/components/Button';

export default function CTA({ onStartProject, onBookDemo }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Intense Ambient Glow Orbs behind the CTA container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[350px] bg-gradient-to-r from-amber-500/25 via-cyan-500/20 to-purple-600/25 blur-[120px] pointer-events-none rounded-full animate-pulse-glow" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] bg-gradient-to-b from-[#0F162B]/90 to-[#090D1A]/95 border border-white/20 p-8 sm:p-14 text-center backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
        >
          {/* Top Sheen Line */}
          <div className="absolute inset-x-20 top-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />


          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Transform Your <span className="text-gradient-gold">Business</span>?
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-lg max-w-xl mx-auto mt-4 mb-8 leading-relaxed">
            Get started with our powerful CRM &amp; HRMS platform. Manage your customers, sales pipelines, employees, payroll, and analytics — all in one place.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={onStartProject}
              className="w-full sm:w-auto font-bold tracking-wide"
              icon={ArrowRight}
              iconPosition="right"
            >
              Start a Project
            </Button>
            <Button
              variant="glass"
              size="lg"
              onClick={onBookDemo}
              className="w-full sm:w-auto font-semibold"
            >
              Book a Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-white/[0.08] text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> SOC2 Compliant
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> Sub-Second SLA
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" /> 100% Production Ready
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
