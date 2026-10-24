'use client';

import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/50 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold',
  };

  const variants = {
    primary:
      'bg-gradient-to-r from-[#FDE68A] via-[#F59E0B] to-[#D97706] text-[#0A0D18] font-bold shadow-[0_4px_25px_-5px_rgba(245,158,11,0.45)] hover:shadow-[0_8px_30px_-5px_rgba(245,158,11,0.6)] hover:brightness-105 active:scale-[0.98]',
    glass:
      'bg-white/[0.05] hover:bg-white/[0.12] text-slate-100 border border-white/[0.12] hover:border-white/[0.25] backdrop-blur-md active:scale-[0.98]',
    outline:
      'bg-transparent hover:bg-amber-400/[0.08] text-amber-300 border border-amber-400/30 hover:border-amber-400/60 active:scale-[0.98]',
    cyan:
      'bg-gradient-to-r from-sky-400 to-cyan-500 text-slate-950 font-bold shadow-[0_4px_20px_-5px_rgba(56,189,248,0.45)] hover:shadow-[0_8px_25px_-5px_rgba(56,189,248,0.6)] active:scale-[0.98]',
    subtle:
      'bg-white/[0.02] hover:bg-white/[0.06] text-slate-300 hover:text-white border border-transparent hover:border-white/10',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
        variants[variant] || variants.primary
      } ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </button>
  );
}
