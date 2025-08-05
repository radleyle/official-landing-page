"use client";

import { motion } from 'framer-motion';

export default function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">

      {/* Organic floating orbs with natural movement */}
      <motion.div
        className="absolute w-3 h-3 bg-gradient-to-br from-blue-400/20 to-purple-400/15 rounded-full"
        style={{
          filter: 'blur(2px)',
          top: '15%',
          left: '8%'
        }}
        animate={{
          x: [0, 30, -20, 40, 0],
          y: [0, 40, 80, -10, 0],
          opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
          scale: [1, 1.2, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-4 h-4 bg-gradient-to-br from-purple-400/15 to-cyan-400/20 rounded-full"
        style={{
          filter: 'blur(3px)',
          top: '65%',
          right: '12%'
        }}
        animate={{
          x: [0, -40, 20, -30, 0],
          y: [0, 50, -30, 60, 0],
          opacity: [0.2, 0.5, 0.3, 0.6, 0.2],
          scale: [1, 0.9, 1.3, 0.7, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-2 h-2 bg-gradient-to-br from-cyan-400/25 to-blue-400/20 rounded-full"
        style={{
          filter: 'blur(1px)',
          bottom: '25%',
          left: '20%'
        }}
        animate={{
          x: [0, 25, -15, 35, 0],
          y: [0, -35, 45, -20, 0],
          opacity: [0.4, 0.7, 0.5, 0.8, 0.4],
          scale: [1, 1.1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle ambient glow */}
      <motion.div
        className="absolute w-32 h-32 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full"
        style={{
          top: '30%',
          right: '25%'
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-40 h-40 bg-gradient-to-br from-purple-500/4 to-transparent rounded-full"
        style={{
          bottom: '20%',
          left: '15%'
        }}
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}