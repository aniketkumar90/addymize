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
            Simple, Per-Employee Pricing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-sm sm:text-base mt-3"
          >
            Pay only for active employees. Transparent CRM & HRMS pricing with 20% off on annual billing.
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
            const isPopular = plan.isPopular;
            const isAnnual = billingCycle === 'annual';
            const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const originalMonthly = plan.monthlyPrice;

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
                    isPopular
                      ? 'bg-[#11172A]/95 border-2 border-amber-400 shadow-[0_0_50px_rgba(245,158,11,0.3)] hover:shadow-[0_0_65px_rgba(245,158,11,0.45)]'
                      : 'bg-[#0B1020]/75 border border-white/10 hover:border-white/20 shadow-xl'
                  }`}
                >
                  {/* Top Badge for Popular Growth card */}
                  {isPopular && (
                    <div className="absolute top-4 right-6">
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-black shadow-[0_0_15px_rgba(245,158,11,0.5)] flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 fill-current" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <div>
                    {/* Header */}
                    <div className="mb-5">
                      <h3
                        className={`text-2xl font-black ${
                          isPopular ? 'text-amber-300' : 'text-white'
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">{plan.subtitle}</p>
                    </div>

                    {/* Price Block */}
                    <div className="my-5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span
                          className={`text-4xl lg:text-5xl font-extrabold tracking-tight ${
                            isPopular
                              ? 'text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                              : 'text-white'
                          }`}
                        >
                          ₹{currentPrice}
                        </span>
                        <span className="text-xs text-slate-300 font-medium">/employee/mo</span>

                        {isAnnual && (
                          <div className="ml-auto flex items-center gap-1.5">
                            <span className="text-xs text-slate-500 line-through">
                              ₹{originalMonthly}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              20% OFF
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Annual Calculation Breakdown */}
                      <div className="text-[11px] text-slate-400 mt-3 pt-2.5 border-t border-white/[0.08] space-y-1">
                        {isAnnual ? (
                          <>
                            <p className="text-amber-300/90 font-medium flex items-center justify-between">
                              <span>Annual Billing:</span>
                              <span className="font-bold text-white">₹{plan.annualTotal.toLocaleString('en-IN')}/employee/yr</span>
                            </p>
                            <p className="text-emerald-400/90 text-[10px]">
                              🎉 You save ₹{(plan.originalAnnualTotal - plan.annualTotal).toLocaleString('en-IN')} per employee per year
                            </p>
                          </>
                        ) : (
                          <p className="text-slate-400 flex items-center justify-between">
                            <span>Monthly Billing:</span>
                            <span className="text-amber-400 text-[10px] font-semibold">Switch to Annual & Save 20%</span>
                          </p>
                        )}
                        <p className="text-slate-500 text-[11px] pt-1">{plan.description}</p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-white/[0.08] my-5" />

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              isPopular
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
                    variant={isPopular ? 'primary' : 'glass'}
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
