'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, ArrowRight } from 'lucide-react';

export default function IntroVideoPreloader({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef(null);

  const unmuteSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      setIsMuted(false);
      videoRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    // Lock body scrolling while intro video is playing
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Attempt autoplay with volume ON
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsMuted(false);
          })
          .catch(() => {
            // Browser autoplay policy blocked unmuted sound without prior user gesture.
            // Play muted first so video plays instantly, and prompt user to unmute.
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().catch(() => {});
            }
          });
      }
    }

    // Auto-unmute on the first touch, click, pointerdown, or key press anywhere
    const handleFirstGesture = () => {
      unmuteSound();
    };

    window.addEventListener('click', handleFirstGesture, { passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { passive: true });
    window.addEventListener('pointerdown', handleFirstGesture, { passive: true });
    window.addEventListener('keydown', handleFirstGesture, { passive: true });

    // Safety timeout: If video stalls or finishes, reveal web after 10.5 seconds
    const timer = setTimeout(() => {
      handleComplete();
    }, 10500);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleComplete();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    document.body.style.overflow = '';
    if (onFinish) {
      onFinish();
    }
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      videoRef.current.volume = 1.0;
      setIsMuted(nextMuted);
      if (!nextMuted) {
        videoRef.current.play().catch(() => {});
      }
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
          onClick={unmuteSound}
          className="fixed inset-0 z-[99999] w-screen h-screen bg-white overflow-hidden select-none flex items-center justify-center m-0 p-0 cursor-pointer"
        >
          {/* Responsive Video:
              - Mobile / Phone View: 'object-contain' so the entire 16:9 video is 100% visible without any cropping
              - Desktop / Web View: 'md:object-cover md:scale-[1.03]' so it fills the screen edge-to-edge as requested
          */}
          <video
            ref={videoRef}
            src="/videos/trackolab-intro.mp4"
            autoPlay
            playsInline
            preload="auto"
            onEnded={handleComplete}
            className="w-full h-full object-contain md:object-cover md:scale-[1.03] block m-0 p-0 border-none outline-none bg-white"
          />

          {/* Top-Left Audio Toggle Pill */}
          <div className="absolute top-5 left-5 z-50">
            <button
              type="button"
              onClick={toggleSound}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold backdrop-blur-md border transition-all cursor-pointer shadow-md active:scale-95 ${
                isMuted
                  ? 'bg-amber-500 text-slate-950 border-amber-600 animate-pulse shadow-amber-500/30'
                  : 'bg-black/10 hover:bg-black/20 text-slate-800 border-black/10'
              }`}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-slate-950 shrink-0" />
                  <span>Tap for Sound 🔊</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sound ON</span>
                </>
              )}
            </button>
          </div>

          {/* Bottom Floating Hint on Mobile / Screen when muted */}
          {isMuted && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-6 z-50 px-5 py-2.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-lg border border-white/20 shadow-xl flex items-center gap-2 pointer-events-none animate-bounce"
            >
              <VolumeX className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Tap anywhere on screen for sound 🔊</span>
            </motion.div>
          )}

          {/* Top-Right Minimalist Skip Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleComplete();
            }}
            className="absolute top-5 right-5 z-50 px-4 py-1.5 rounded-full bg-black/[0.08] hover:bg-black/[0.16] text-slate-800 hover:text-black text-xs font-semibold backdrop-blur-md border border-black/10 transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-1"
          >
            <span>Skip</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

