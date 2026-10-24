'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Play, ShieldCheck, CheckCircle } from 'lucide-react';
import Button from '@/components/Button';
import HeroMedia from '@/components/HeroMedia';

export default function Hero({ onGetStarted, onExploreSolutions }) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft Ambient Hero Highlights */}
      <div className="absolute top-12 left-1/4 w-[600px] h-[450px] bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-8 right-12 w-[650px] h-[550px] bg-gradient-to-l from-cyan-500/15 via-purple-500/15 to-transparent blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-center lg:text-left"
          >

            {/* Main Headline from Reference with selective gradient words */}
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-black tracking-tight text-white leading-[1.08]">
              Revolutionize{' '}
              <span className="text-gradient-cyan">Your</span>
              <br />
              <span className="text-gradient-gold">Digital</span>{' '}
              <span className="text-gradient-purple">Presence</span>
            </h1>

            {/* Supporting Text from Reference */}
            <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              End-to-End Web Solutions for Modern Businesses — From CRM to Cloud Identity
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary: Get Start Preview matching reference button */}
              <Button
                variant="primary"
                size="lg"
                onClick={onGetStarted}
                className="w-full sm:w-auto font-bold tracking-wide shadow-[0_0_35px_rgba(245,158,11,0.5)]"
                icon={ArrowRight}
                iconPosition="right"
              >
                Get Start Preview
              </Button>

              {/* Secondary subtle action */}
              <Button
                variant="glass"
                size="lg"
                onClick={onExploreSolutions}
                className="w-full sm:w-auto text-slate-200"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Trust Metrics Pill Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Zero Config Deploy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Enterprise SLA</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Media & Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 w-full flex justify-center"
          >
            <HeroMedia />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
