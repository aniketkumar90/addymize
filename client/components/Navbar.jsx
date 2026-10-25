'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sparkles, ArrowRight, PhoneCall } from 'lucide-react';
import Logo from './Logo';
import Button from './Button';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar({ onBookDemoClick, onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdown, setSolutionsDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 ${
          scrolled ? 'pt-2.5' : 'pt-4'
        }`}
      >
        <div className="max-w-7xl mx-auto w-full">
          <nav
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 border ${
              scrolled
                ? 'bg-white/95 backdrop-blur-xl border-slate-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.18)]'
                : 'bg-white/95 backdrop-blur-md border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
            }`}
          >
            {/* Left: Brand Logo */}
            <Logo />

            {/* Desktop Navigation Links (Elements in Black/Dark Slate) */}
            <div className="hidden md:flex items-center gap-1.5 lg:gap-3 text-sm font-semibold text-slate-900">
              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsDropdown(true)}
                onMouseLeave={() => setSolutionsDropdown(false)}
              >
                <a
                  href="#solutions"
                  className="flex items-center gap-1 px-3 py-1.5 rounded-full text-slate-900 hover:text-black hover:bg-slate-100/90 transition-all"
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      solutionsDropdown ? 'rotate-180 text-amber-600' : 'text-slate-700'
                    }`}
                  />
                </a>

                {/* Submenu */}
                <AnimatePresence>
                  {solutionsDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-72 p-2 rounded-2xl bg-white border border-slate-200 backdrop-blur-2xl shadow-2xl z-50"
                    >
                      <a
                        href="#solutions"
                        onClick={() => setSolutionsDropdown(false)}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-slate-100 transition-all group"
                      >
                        <span className="text-xs font-bold text-slate-900 group-hover:text-black flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                          CRM — Customer Management
                        </span>
                        <span className="text-[11px] text-slate-600 mt-0.5">Pipelines, leads & customer dashboards</span>
                      </a>
                      <a
                        href="#solutions"
                        onClick={() => setSolutionsDropdown(false)}
                        className="flex flex-col p-2.5 rounded-xl hover:bg-slate-100 transition-all group"
                      >
                        <span className="text-xs font-bold text-slate-900 group-hover:text-black flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                          HRMS — Human Resource Management
                        </span>
                        <span className="text-[11px] text-slate-600 mt-0.5">Payroll, attendance & employee management</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Standard Links */}
              <a
                href="#features"
                className="px-3 py-1.5 rounded-full text-slate-900 hover:text-black hover:bg-slate-100/90 transition-all"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="px-3 py-1.5 rounded-full text-slate-900 hover:text-black hover:bg-slate-100/90 transition-all"
              >
                Pricing
              </a>
              <a
                href="#case-studies"
                className="px-3 py-1.5 rounded-full text-slate-900 hover:text-black hover:bg-slate-100/90 transition-all"
              >
                Case Studies
              </a>
              <a
                href="#blog"
                className="px-3 py-1.5 rounded-full text-slate-900 hover:text-black hover:bg-slate-100/90 transition-all"
              >
                Blog
              </a>
            </div>

            {/* Right Action: Book A Demo */}
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={onBookDemoClick}
                className="font-bold tracking-wide shadow-[0_4px_16px_rgba(245,158,11,0.35)]"
              >
                Book A Demo
              </Button>
            </div>

            {/* Mobile & Tablet Hamburger Button (< 768px) */}
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={onBookDemoClick}
                className="text-[11px] px-3 py-1 font-bold"
              >
                Demo
              </Button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-900 hover:text-black bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-amber-600" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop for closing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-20 z-50 p-5 rounded-3xl bg-white/98 border border-slate-200 backdrop-blur-2xl shadow-2xl flex flex-col gap-4 md:hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-1.5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-2.5 rounded-xl text-base font-semibold text-slate-900 hover:text-black hover:bg-slate-100 active:bg-slate-200 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2.5">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookDemoClick();
                  }}
                  className="w-full font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                >
                  Book A Demo
                </Button>
                <Button
                  variant="glass"
                  size="md"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full text-xs"
                >
                  Contact Solutions Team
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
