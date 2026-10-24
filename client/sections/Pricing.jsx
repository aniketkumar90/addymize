'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Shield, ArrowRight } from 'lucide-react';
import Button from '@/components/Button';
import { PRICING_DATA } from '@/lib/constants';

export default function Pricing({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'

  return (
    <section id="pricing" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Golden glow behind enterprise card */}
      <div className="absolute right-1/4 bottom-1/3 w-80 h-80 bg-amber-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white"
          >
            Flexible Plans for Every Scale
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3"
          >
            Choose the tier that matches your roadmap. Upgrade or customize at any time.
          </motion.p>

          {/* Monthly / Annual Toggle Switch from Reference */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-[#0E1428] border border-white/15 backdrop-blur-xl shadow-lg">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-white/15 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-300 ${
                billingCycle === 'annual'
                  ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-900/60 text-amber-200">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-4">
          {PRICING_DATA.map((plan, index) => {
            const isEnterprise = plan.id === 'enterprise';
            const price =
              plan.id === 'starter'
                ? '—'
                : billingCycle === 'annual'
                ? `$${plan.annualPrice}`
                : `$${plan.monthlyPrice}`;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex"
              >
                {/* Visual container matching reference design */}
                <div
                  className={`w-full rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative overflow-hidden backdrop-blur-2xl ${
                    isEnterprise
                      ? 'bg-[#11172A]/90 border-2 border-amber-400/80 shadow-[0_0_50px_rgba(245,158,11,0.25)] hover:shadow-[0_0_65px_rgba(245,158,11,0.4)]'
                      : 'bg-[#0B1020]/70 border border-white/10 hover:border-white/20 shadow-xl'
                  }`}
                >
                  {/* Top Badge for Enterprise card from reference */}
                  {isEnterprise && (
                    <div className="absolute top-4 right-6">
                      <div className="px-3.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center gap-1">
                        <Zap className="w-3 h-3 fill-current" />
                        <span>Annual</span>
                      </div>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-6">
                      <h3
                        className={`text-2xl font-black ${
                          isEnterprise ? 'text-amber-300' : 'text-white'
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">{plan.subtitle}</p>
                    </div>

                    {/* Price Block */}
                    <div className="my-6">
                      <div className="flex items-baseline gap-1">
                        <span
                          className={`text-4xl lg:text-5xl font-extrabold tracking-tight ${
                            isEnterprise
                              ? 'text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                              : 'text-white'
                          }`}
                        >
                          {price}
                        </span>
                        {plan.id !== 'starter' && (
                          <span className="text-xs text-slate-400">/month</span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-2 space-y-0.5">
                        <p>{billingCycle === 'annual' ? plan.annualNote : plan.periodNote}</p>
                        <p className="text-slate-500">{plan.description}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-white/[0.08] my-6" />

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isEnterprise
                                ? 'bg-amber-400/20 text-amber-300'
                                : 'bg-white/10 text-slate-300'
                            }`}
                          >
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={isEnterprise ? 'primary' : 'glass'}
                    size="md"
                    className="w-full font-bold tracking-wide"
                    onClick={() => onSelectPlan && onSelectPlan(plan)}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
