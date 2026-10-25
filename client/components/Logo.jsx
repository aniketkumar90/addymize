'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ size = 'default', showSubtitle = true, className = '', stacked = false }) {
  const isLarge = size === 'large';

  return (
    <Link
      href="/"
      aria-label="Trackolab Home"
      className={`inline-flex items-center group transition-transform duration-300 hover:scale-[1.03] ${className}`}
    >
      <Image
        src="/images/trackolab-logo.png"
        alt="Trackolab"
        width={isLarge ? 200 : 160}
        height={isLarge ? 50 : 40}
        priority
        className={`${isLarge ? 'h-9 sm:h-10 md:h-11' : 'h-7 sm:h-8 md:h-9'} w-auto object-contain`}
      />
    </Link>
  );
}
