'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Mail,
  Lock,
  KeyRound,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Loader2,
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react';
import Logo from '@/components/Logo';
import { forgotPasswordAdmin, resetPasswordAdmin } from '@/lib/api';

export default function AdminForgotPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Request Code, 2: Reset Password, 3: Completed
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [successInfo, setSuccessInfo] = useState('');

  // Step 1: Request Code
  const handleRequestCode = async (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide your admin email address.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const res = await forgotPasswordAdmin({ email });
      if (res && res.success) {
        setSuccessInfo(res.message);
        if (res.resetCode) {
          setCode(res.resetCode); // Pre-fill generated code for seamless demo testing
        }
        setStep(2);
      }
    } catch (err) {
      setError(err.message || 'Failed to request reset code. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Reset with Code & New Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!code || !newPassword) {
      setError('Please provide the reset code and your new password.');
      return;
    }

    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      setLoading(true);
      setError('');
      const res = await resetPasswordAdmin({ email, code, newPassword });
      if (res && res.success) {
        setStep(3);
      }
    } catch (err) {
      setError(err.message || 'Invalid code or failed to reset password.');
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
            Reset Password
          </h1>
          <p className="text-xs sm:text-sm text-teal-100/70 mt-1">
            {step === 1 && 'Enter your registered email to receive a reset verification code'}
            {step === 2 && 'Enter the verification code and set your new password'}
            {step === 3 && 'Your password has been successfully updated!'}
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

          {step === 1 && (
            <form onSubmit={handleRequestCode} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  Registered Admin Email
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

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Generating Code...</span>
                  </>
                ) : (
                  <>
                    <span>Send Verification Code</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              {successInfo && (
                <div className="p-3 mb-2 rounded-xl bg-teal-500/20 border border-teal-300/30 text-teal-200 text-xs">
                  {successInfo}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  6-Digit Verification Code
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="e.g. 123456"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#042f38]/80 border border-teal-300/25 text-white tracking-widest font-mono text-sm focus:outline-none focus:border-teal-300 focus:ring-1 focus:ring-teal-300 transition-all"
                    required
                  />
                  <KeyRound className="w-4 h-4 text-teal-300/60 absolute left-3.5 top-3" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1.5">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="At least 6 characters"
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
                    <span>Updating Password...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm New Password</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white">Password Updated!</h3>
              <p className="text-xs text-teal-100/70">
                You can now log in to the admin console with your updated password.
              </p>
              <Link
                href="/admin/login"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-md"
              >
                <span>Proceed to Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>

        {/* Footer Link to Login */}
        <div className="text-center mt-6 text-xs text-slate-300">
          Remembered your password?{' '}
          <Link
            href="/admin/login"
            className="text-amber-300 hover:text-amber-200 font-bold hover:underline transition-colors"
          >
            Return to Login
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
