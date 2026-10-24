'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  ArrowRight,
  ShieldCheck,
  ArrowLeft,
  Lock,
} from 'lucide-react';
import Logo from '@/components/Logo';

export default function AdminSignupPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#073e4a] text-slate-100 flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden selection:bg-amber-400 selection:text-black">
      {/* Background ambient orbs */}
      <div className="absolute -top-24 left-1/4 w-[650px] h-[650px] bg-cyan-400/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[650px] h-[650px] bg-teal-400/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Top back navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/admin/login"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-slate-200 transition-all backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Login</span>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md relative z-10 my-8"
      >
        {/* Brand Header */}
        <div className="text-center mb-6 flex flex-col items-center">
          <Logo />
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-5 tracking-tight">
            Account Creation Disabled
          </h1>
          <p className="text-xs sm:text-sm text-teal-100/70 mt-1">
            Access is restricted to the pre-configured Master Administrator account.
          </p>
        </div>

        {/* Card Box */}
        <div className="rounded-3xl bg-[#06424f]/80 border border-teal-300/30 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl text-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/30 mx-auto flex items-center justify-center mb-5 text-amber-300">
            <ShieldAlert className="w-7 h-7" />
          </div>

          <h2 className="text-base font-bold text-white mb-2">
            Single Master Admin Enforced
          </h2>
          <p className="text-xs text-teal-100/75 leading-relaxed mb-6">
            For security compliance, public and secondary admin registrations are disabled. The database is strictly bound to the verified master administrator credentials:
          </p>

          <div className="p-3.5 rounded-2xl bg-[#042f38]/90 border border-teal-300/20 text-left mb-6 space-y-1.5 text-xs font-mono">
            <div className="flex items-center justify-between text-teal-200">
              <span className="text-teal-400/80 font-sans">Admin Email:</span>
              <span className="font-bold text-white">admin@gmail.com</span>
            </div>
            <div className="flex items-center justify-between text-teal-200">
              <span className="text-teal-400/80 font-sans">Password:</span>
              <span className="font-bold text-amber-300">admin@123</span>
            </div>
          </div>

          <Link
            href="/admin/login"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all"
          >
            <span>Proceed to Admin Sign In</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6 text-xs text-teal-100/60 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
          <span>Addymize Enterprise Protection Active</span>
        </div>
      </motion.div>
    </div>
  );
}
