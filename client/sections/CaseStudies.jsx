'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Layers, ShoppingBag, ShieldCheck, Sparkles } from 'lucide-react';
import GlassCard from '@/components/GlassCard';
import Button from '@/components/Button';
import { CASE_STUDIES_DATA } from '@/lib/constants';

export default function CaseStudies({ onSelectCase }) {
  return (
    <section id="case-studies" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Glow orb */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

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
            Real-World High-Scale Deployments
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3"
          >
            How top tier brands harness Addymize architectures to break transaction records and automate critical digital operations.
          </motion.p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CASE_STUDIES_DATA.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex"
            >
              <GlassCard
                glow={idx === 0 ? 'gold' : idx === 1 ? 'cyan' : 'purple'}
                className="p-6 flex flex-col justify-between w-full group overflow-hidden border-white/10"
              >
                <div>
                  {/* Category and Metric Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                        idx === 0
                          ? 'bg-amber-500/15 text-amber-300 border-amber-400/30'
                          : idx === 1
                          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30'
                          : 'bg-purple-500/15 text-purple-300 border-purple-400/30'
                      }`}
                    >
                      {item.metric}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Interactive UI Mockup Visual per card */}
                  <div className="rounded-2xl bg-[#080D1A] border border-white/10 p-3.5 mb-6 shadow-inner relative overflow-hidden">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2">
                      <span className="font-mono text-slate-300">{item.badge}</span>
                      <span className="text-emerald-400 font-semibold">Verified Case</span>
                    </div>

                    {/* Mini visual elements */}
                    <div className="h-16 w-full rounded-xl bg-gradient-to-r from-white/[0.02] to-white/[0.05] border border-white/5 flex items-center justify-center p-2">
                      {idx === 0 && (
                        <div className="flex items-center gap-2 text-amber-300">
                          <Layers className="w-5 h-5" />
                          <div className="text-left text-[11px]">
                            <div className="font-bold text-white">42% Higher Volume</div>
                            <div className="text-slate-400 text-[9px]">$120M Monthly Cap</div>
                          </div>
                        </div>
                      )}
                      {idx === 1 && (
                        <div className="flex items-center gap-2 text-cyan-300">
                          <ShoppingBag className="w-5 h-5" />
                          <div className="text-left text-[11px]">
                            <div className="font-bold text-white">67% Cart Velocity</div>
                            <div className="text-slate-400 text-[9px]">0.4s Fast Checkout</div>
                          </div>
                        </div>
                      )}
                      {idx === 2 && (
                        <div className="flex items-center gap-2 text-purple-300">
                          <ShieldCheck className="w-5 h-5" />
                          <div className="text-left text-[11px]">
                            <div className="font-bold text-white">-31% Ticket Processing</div>
                            <div className="text-slate-400 text-[9px]">Automated AI Routing</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] text-slate-400 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <Button
                    variant="glass"
                    size="sm"
                    className="w-full text-xs font-semibold group/btn"
                    onClick={() => onSelectCase && onSelectCase(item)}
                    icon={ArrowUpRight}
                    iconPosition="right"
                  >
                    View Case Study
                  </Button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
