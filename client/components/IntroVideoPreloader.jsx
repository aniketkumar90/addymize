'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroVideoPreloader({ onFinish }) {
  const [isVisible, setIsVisible] = React.useState(true);
  const videoRef = useRef(null);

  const enableAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch(() => {});
    }
  };

  useEffect(() => {
    // Lock body scrolling while intro video is playing
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Start video playback with volume auto ON (unmuted, 100% volume)
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser restricts unmuted autoplay before first gesture,
          // play momentarily so video doesn't stall, and unmute on first gesture
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }

    // Auto-unmute on any touch, click, scroll or keypress anywhere on screen
    window.addEventListener('click', enableAudio, { passive: true });
    window.addEventListener('touchstart', enableAudio, { passive: true });
    window.addEventListener('pointerdown', enableAudio, { passive: true });
    window.addEventListener('keydown', enableAudio, { passive: true });
    window.addEventListener('scroll', enableAudio, { passive: true });

    // Safety timeout: transition smoothly to main website when video reaches end (~10.2s)
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
      window.removeEventListener('click', enableAudio);
      window.removeEventListener('touchstart', enableAudio);
      window.removeEventListener('pointerdown', enableAudio);
      window.removeEventListener('keydown', enableAudio);
      window.removeEventListener('scroll', enableAudio);
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
          onClick={enableAudio}
          onTouchStart={enableAudio}
          className="fixed inset-0 z-[99999] w-screen h-screen bg-white overflow-hidden select-none flex items-center justify-center m-0 p-0"
        >
          {/* Responsive Video:
              - Mobile / Phone View: 'object-contain' so 100% of the 16:9 video is visible without cropping
              - Desktop / Web View: 'md:object-cover md:scale-[1.03]' so it fills edge-to-edge seamlessly
              - Volume is auto ON, no mute/band options shown
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
        </motion.div>
      )}
    </AnimatePresence>
  );
}


