"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SkillBar({ skill, level, color, icon: IconComponent, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Skill info */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <IconComponent 
              size={24} 
              style={{ color: color }}
              className="drop-shadow-lg"
            />
            {/* Icon glow */}
            <div 
              className="absolute inset-0 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              style={{ backgroundColor: color }}
            />
          </div>
          <span className="font-medium text-foreground/90">{skill}</span>
        </div>
        <span className="text-sm text-foreground/70 font-mono">{level}%</span>
      </div>

      {/* Progress bar container */}
      <div className="relative h-3 rounded-full overflow-hidden">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full"
          style={{
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          }}
        />
        
        {/* Progress fill */}
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full shadow-lg"
          style={{
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 20px ${color}40`,
          }}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.1 + 0.5,
            ease: "easeOut"
          }}
        />
        
        {/* Animated shimmer effect */}
        <motion.div
          className="absolute inset-y-0 left-0 w-full rounded-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}30, transparent)`,
          }}
          initial={{ x: '-100%', width: '30%' }}
          animate={isInView ? { x: '400%' } : { x: '-100%' }}
          transition={{
            duration: 2,
            delay: index * 0.1 + 1,
            ease: "easeInOut"
          }}
        />
        
        {/* Glass reflection */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-60" />
      </div>

      {/* Floating particles on hover */}
      <motion.div
        className="absolute -top-2 -right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ backgroundColor: color }}
        animate={{
          y: [0, -10, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
}