'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';

export default function IntroVideoPreloader({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Lock body scrolling while intro video is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Attempt video play immediately on mount
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If autoplay with sound is blocked, fallback to muted autoplay
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }

    // Safety timeout: If video stalls or takes longer than 11 seconds, finish automatically
    const safetyTimer = setTimeout(() => {
      handleComplete();
    }, 11000);

    // Keyboard support: Escape or Space to skip
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(safetyTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress(Math.min(100, Math.round((current / total) * 100)));
    }
  };

  const handleComplete = () => {
    setIsVisible(false);
    document.body.style.overflow = '';
    if (onFinish) {
      onFinish();
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: 'blur(8px)',
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white overflow-hidden select-none"
        >
          {/* Top Header Controls: Sound Toggle & Skip Button */}
          <div className="absolute top-5 inset-x-5 sm:top-7 sm:inset-x-8 flex items-center justify-between z-30">
            {/* Brand indicator */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-800">
                Trackolab
              </span>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={toggleSound}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black border border-slate-300/80 transition-all cursor-pointer shadow-sm"
                aria-label={isMuted ? 'Unmute intro video' : 'Mute intro video'}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-600" />}
              </button>

              <button
                type="button"
                onClick={handleComplete}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-bold border border-slate-300 transition-all cursor-pointer shadow-sm group hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Skip</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-amber-600" />
              </button>
            </div>
          </div>

          {/* Center Stage: Intro Video */}
          <div className="relative w-full max-w-4xl flex flex-col items-center justify-center px-4">
            <video
              ref={videoRef}
              src="/videos/trackolab-intro.mp4"
              autoPlay
              muted
              playsInline
              preload="auto"
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleComplete}
              className="w-full h-auto max-h-[75vh] object-contain drop-shadow-sm"
            />
          </div>

          {/* Bottom Bar: Loading Status & Progress Line */}
          <div className="absolute bottom-6 sm:bottom-8 inset-x-6 sm:inset-x-12 flex flex-col items-center gap-3 z-30">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              <span>Loading Trackolab Platform... {progress}%</span>
            </div>

            {/* Sleek Progress Track */}
            <div className="w-full max-w-md h-1 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 transition-all duration-150 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
