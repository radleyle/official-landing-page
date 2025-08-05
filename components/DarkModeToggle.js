"use client";

import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative p-3 rounded-2xl bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 w-12 h-6">
        <div className="w-12 h-6 rounded-full bg-gray-300"></div>
      </div>
    );
  }

  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-2xl bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 hover:bg-white/[0.15] dark:hover:bg-white/[0.08] transition-all duration-500 shadow-2xl hover:shadow-3xl interactive overflow-hidden group"
      style={{
        backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
        WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
        boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glass reflection overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-70"></div>
      
      {/* Toggle background */}
      <motion.div
        className="relative w-12 h-6 rounded-full flex items-center"
        style={{
          background: isDark 
            ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
            : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
        }}
        animate={{
          background: isDark 
            ? 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
            : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)'
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Toggle circle */}
        <motion.div
          className="w-5 h-5 rounded-full bg-white shadow-lg flex items-center justify-center"
          animate={{
            x: isDark ? 28 : 2,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30
          }}
        >
          <motion.div
            animate={{ rotate: isDark ? 0 : 180 }}
            transition={{ duration: 0.5 }}
          >
            {isDark ? (
              <FiMoon size={12} className="text-indigo-600" />
            ) : (
              <FiSun size={12} className="text-yellow-600" />
            )}
          </motion.div>
        </motion.div>
        
        {/* Background stars for dark mode */}
        {isDark && (
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 20}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              />
            ))}
          </motion.div>
        )}
      </motion.div>
      
      {/* Floating glass particle */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.button>
  );
}