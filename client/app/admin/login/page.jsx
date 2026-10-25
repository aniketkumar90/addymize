'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Lock,
  Mail,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowLeft,
} from 'lucide-react';
import Logo from '@/components/Logo';
import { loginAdmin, getCurrentAdminUser } from '@/lib/api';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    // If already logged in, redirect to admin dashboard
    const user = getCurrentAdminUser();
    if (user) {
      router.push('/admin');
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const res = await loginAdmin({ email, password });
      if (res && res.success) {
        setSuccessMsg('Authentication successful! Redirecting to Dashboard...');
        setTimeout(() => {
          router.push('/admin');
        }, 600);
      }
    } catch (err) {
      setError(err.message || 'Login failed. Please verify your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#073e4a] text-slate-100 flex flex-col justify-center items-center px-4 sm:px-6 relative overflow-hidden selection:bg-amber-400 selection:text-black">
      {/* Background ambient orbs */}
      <div className="absolute -top-24 left-1/4 w-[650px] h-[650px] bg-cyan-400/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-[650px] h-[650px] bg-teal-400/20 rounded-full blur-[160px] pointer-events-none" />

      {/* Top back navigation */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-slate-200 transition-all backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Main Site</span>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md relative z-10 my-8"
      >
        {/* Brand Header */}
        <div className="text-center mb-8 flex flex-col items-center">
          <Logo />
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-5 tracking-tight">
            Sign In to Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-teal-100/70 mt-1">
            Access and manage all live web leads & customer inquiries
          </p>
        </div>

        {/* Card Box */}
        <div className="rounded-3xl bg-[#06424f]/80 border border-teal-300/30 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 mb-5 rounded-xl bg-rose-500/15 border border-rose-400/30 text-rose-200 text-xs flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </motion.div>
          )}

          {successMsg && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 mb-5 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-200 text-xs flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{successMsg}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                Admin Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#042f38]/80 border border-teal-300/25 text-white placeholder-teal-200/40 text-sm focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300 transition-all"
                  required
                />
                <Mail className="w-4 h-4 text-teal-300/60 absolute left-3.5 top-3" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-slate-200">
                  Password
                </label>
                <Link
                  href="/admin/forgot-password"
                  className="text-xs text-amber-300 hover:text-amber-200 hover:underline font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#042f38]/80 border border-teal-300/25 text-white placeholder-teal-200/40 text-sm focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300 transition-all"
                  required
                />
                <Lock className="w-4 h-4 text-teal-300/60 absolute left-3.5 top-3" />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Admin Portal</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Restricted Security Notice */}
        <div className="text-center mt-6 text-xs text-teal-100/60 flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-300" />
          <span>Restricted Portal: Master Administrator Access Only</span>
        </div>
      </motion.div>
    </div>
  );
}
