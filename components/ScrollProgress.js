"use client";

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 transform-gpu"
        style={{
          background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #06B6D4)',
          scaleX,
          transformOrigin: '0%'
        }}
      />
      
      {/* Floating progress indicator */}
      <motion.div
        className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <div className="relative w-12 h-12">
          {/* Background circle */}
          <div className="absolute inset-0 rounded-full bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-xl border border-white/40 dark:border-white/25 shadow-2xl"
               style={{
                 backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                 WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
               }}
          />
          
          {/* Progress circle */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 48 48">
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="rgba(255, 255, 255, 0.1)"
              strokeWidth="2"
            />
            <motion.circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="url(#progressGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                pathLength: scrollYProgress
              }}
              strokeDasharray="0 1"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#06B6D4" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </>
  );
}