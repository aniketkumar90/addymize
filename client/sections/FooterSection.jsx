'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Sparkles } from 'lucide-react';
import Logo from '@/components/Logo';

export default function FooterSection() {
  return (
    <footer className="relative border-t border-teal-300/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-[#053742]/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12">
          {/* Brand Info */}
          <div className="col-span-2 space-y-4">
            <Logo size="large" />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mt-2">
              Next-generation full-stack digital solutions and intelligent telemetry engineering. Empowering ambitious businesses from modular development to enterprise cloud identity.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-400/40 transition-all"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/40 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-pink-400/40 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-400/40 transition-all"
                aria-label="GitHub"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 1: Solutions */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#solutions" className="hover:text-amber-300 transition-colors">
                  Modular Web Apps
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-300 transition-colors">
                  CRM Dashboards
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-300 transition-colors">
                  Digital Identity
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-amber-300 transition-colors">
                  Cloud Telemetry
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#features" className="hover:text-cyan-300 transition-colors">
                  AI Analytics
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-300 transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#preview" className="hover:text-cyan-300 transition-colors">
                  Live Preview
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-cyan-300 transition-colors">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-purple-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-purple-300 transition-colors">
                  Engineering Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-300 transition-colors">
                  Contact Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <Link
                  href="/admin/login"
                  className="text-amber-300 hover:text-amber-200 transition-colors font-bold inline-flex items-center gap-1.5 pt-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  <span>Admin Console</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching reference layout */}
        <div className="pt-8 border-t border-teal-300/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 Addymize Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#solutions" className="hover:text-slate-200 transition-colors">Solutions</a>
            <a href="#features" className="hover:text-slate-200 transition-colors">Features</a>
            <a href="#case-studies" className="hover:text-slate-200 transition-colors">Case Studies</a>
            <a href="#blog" className="hover:text-slate-200 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-slate-200 transition-colors">Contact</a>
            <Link href="/admin/login" className="text-amber-300 hover:text-amber-200 font-semibold transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
