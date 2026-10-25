'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Building2,
  Star,
  CreditCard,
  Target,
  PieChart,
  Settings,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

export default function DashboardPreview({ onExploreClick }) {
  // 7 Modules matching reference layout and real screenshots
  const menuItems = [
    {
      id: 'hiring',
      label: 'Hiring & onboarding',
      icon: Search,
      route: 'ayztechnologies.com/onboarding',
      title: 'Hiring & Team Overview',
      subtitle: 'Assigned team members, designations, shifts & onboarding records',
      image: '/images/features/hiring-onboarding.png',
    },
    {
      id: 'core-hr',
      label: 'Core HR',
      icon: Building2,
      route: 'ayztechnologies.com/employees',
      title: 'Core HR Management',
      subtitle: 'Centralized employee database, department hierarchies & verified profiles',
      image: '/images/features/core-hr.png',
    },
    {
      id: 'talent',
      label: 'Talent management',
      icon: Star,
      route: 'ayztechnologies.com/leave-management',
      title: 'Talent & Leave Overview',
      subtitle: 'Employee leave balances, performance passbooks & manager allocations',
      image: '/images/features/talent-management.png',
    },
    {
      id: 'payroll',
      label: 'Payroll and expense',
      icon: CreditCard,
      route: 'ayztechnologies.com/payroll',
      title: 'Payroll and Expense Processing',
      subtitle: 'Monthly salary slips, deduction funds, gross earnings & statutory deductions',
      image: '/images/features/payroll-expense.png',
    },
    {
      id: 'engagement',
      label: 'Employee engagement',
      icon: Target,
      route: 'ayztechnologies.com/approvals',
      title: 'Employee Approvals & Requests',
      subtitle: 'Leave approvals, attendance corrections, overtime & access requests',
      image: '/images/features/employee-engagement.png',
    },
    {
      id: 'analytics',
      label: 'HR analytics',
      icon: PieChart,
      route: 'ayztechnologies.com/admin/dashboard',
      title: 'HR Analytics & Executive Dashboard',
      subtitle: 'Check-in metrics, attendance calendar activity & monthly summary stats',
      image: '/images/features/hr-analytics.png',
    },
    {
      id: 'automation',
      label: 'HR automation & custom services',
      icon: Settings,
      route: 'ayztechnologies.com/roles',
      title: 'HR Automation & Role Permissions',
      subtitle: 'Granular 51-point role permissions, department isolation & hierarchy control',
      image: '/images/features/hr-automation.png',
    },
  ];

  // Default to HR analytics like the reference image
  const [activeTab, setActiveTab] = useState('analytics');

  const currentItem = menuItems.find((item) => item.id === activeTab) || menuItems[5];

  return (
    <section id="preview" className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-amber-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight"
          >
            Our HRMS Platform — Live Preview
          </motion.h2>

        </div>

        {/* Mobile & Tablet Interactive Module Pills (< lg) */}
        <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-3 mb-2 -mx-1 px-1 no-scrollbar select-none">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={`mobile-${item.id}`}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold shrink-0 flex items-center gap-2 transition-all ${isActive
                    ? 'bg-amber-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                    : 'bg-[#06424f]/80 text-slate-300 hover:text-white border border-teal-300/20'
                  }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* 2-Column Section with Fixed Stable Heights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* LEFT: Clean Vertical Tab Menu Card (Desktop >= lg) */}
          <div
            className="hidden lg:flex lg:col-span-4 flex-col justify-between h-[600px] rounded-3xl bg-[#06424f]/70 border border-teal-300/25 backdrop-blur-2xl shadow-xl p-3 overflow-hidden"
          >
            <div className="flex flex-col h-full justify-between">
              {menuItems.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                const isLast = idx === menuItems.length - 1;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`relative w-full text-left px-5 py-3.5 flex items-center gap-3.5 transition-colors duration-150 group rounded-xl ${!isLast ? 'border-b border-teal-300/15' : ''
                      } ${isActive
                        ? 'bg-teal-400/20 shadow-sm'
                        : 'hover:bg-white/[0.06]'
                      }`}
                  >
                    {/* Icon */}
                    <div
                      className={`transition-colors shrink-0 ${isActive
                          ? 'text-teal-200'
                          : 'text-teal-100/70 group-hover:text-white'
                        }`}
                    >
                      <Icon className="w-[18px] h-[18px]" />
                    </div>

                    {/* Label */}
                    <span
                      className={`text-[15px] transition-colors flex-1 truncate ${isActive
                          ? 'text-teal-100 font-bold'
                          : 'text-slate-200 font-medium group-hover:text-white'
                        }`}
                    >
                      {item.label}
                    </span>

                    {/* Active Bottom Highlight Bar */}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-teal-300 rounded-full shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: High-End Live Showcase with Teal Glass Frame */}
          <div
            className="col-span-1 lg:col-span-8 flex flex-col h-[340px] sm:h-[460px] lg:h-[600px] rounded-2xl sm:rounded-3xl bg-[#06424f]/70 border border-teal-300/25 backdrop-blur-2xl p-2.5 sm:p-4 shadow-xl overflow-hidden"
          >
            {/* Image Preview Box - Frosted Teal Translucent Box */}
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl border border-teal-300/20 bg-[#053742]/60 overflow-hidden shadow-inner group">
              {/* Subtle ambient light glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-amber-500/5 pointer-events-none" />

              {/* Absolute Smooth Crossfade */}
              <AnimatePresence mode="sync" initial={false}>
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: 'easeInOut' }}
                  className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 z-10"
                >
                  <img
                    src={currentItem.image}
                    alt={currentItem.title}
                    className="w-full h-full object-contain rounded-xl shadow-xl select-none"
                    loading="eager"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Floating Quick Action Overlay */}
              <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={currentItem.image}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/85 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-white/20 shadow-xl"
                >
                  <span>Open Full Screen</span>
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
