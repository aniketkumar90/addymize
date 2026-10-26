'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroVideoPreloader({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Lock body scrolling while intro video is playing
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Start video playback with volume on (auto on)
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser autoplay policy blocks unmuted autoplay without prior gesture,
          // start muted immediately and unmute on the very first touch/click/key
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }

    // Auto unmute immediately on any user gesture if browser blocked unmuted start
    const enableAudio = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 1.0;
      }
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('touchstart', enableAudio);
      window.removeEventListener('keydown', enableAudio);
    };
    window.addEventListener('click', enableAudio, { passive: true });
    window.addEventListener('touchstart', enableAudio, { passive: true });
    window.addEventListener('keydown', enableAudio, { passive: true });

    // Safety timeout: If video stalls or finishes, reveal web
    const timer = setTimeout(() => {
      handleComplete();
    }, 10500);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ') {
        handleComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('touchstart', enableAudio);
    };
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    document.body.style.overflow = '';
    if (onFinish) {
      onFinish();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-video-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
          className="fixed inset-0 z-[99999] w-screen h-screen bg-white overflow-hidden select-none flex items-center justify-center m-0 p-0"
        >
          {/* Fullscreen Video with volume auto ON */}
          <video
            ref={videoRef}
            src="/videos/trackolab-intro.mp4"
            autoPlay
            playsInline
            preload="auto"
            onEnded={handleComplete}
            className="w-full h-full object-cover scale-[1.03] block m-0 p-0 border-none outline-none"
          />

          {/* Minimalist Skip Button */}
          <button
            type="button"
            onClick={handleComplete}
            className="absolute top-5 right-5 z-50 px-4 py-1.5 rounded-full bg-black/[0.08] hover:bg-black/[0.16] text-slate-800 hover:text-black text-xs font-semibold backdrop-blur-md border border-black/10 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            Skip
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
