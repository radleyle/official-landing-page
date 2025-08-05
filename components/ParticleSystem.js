"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function ParticleSystem() {
  const containerRef = useRef(null);

  // Generate more particles for enhanced forest firefly effect
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + 4, // larger
    speed: Math.random() * 12 + 7, // a bit faster
    opacity: Math.random() * 0.8 + 0.4, // more visible
    pulseSpeed: Math.random() * 2 + 0.8,
    color: ['blue', 'purple', 'cyan', 'pink', 'green', 'yellow'][Math.floor(Math.random() * 6)],
    movementPattern: Math.floor(Math.random() * 3) // 0: circular, 1: figure8, 2: random
  }));

  useEffect(() => {
    let ticking = false;
    
    const handleMouseMove = (e) => {
      if (!ticking && containerRef.current) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            containerRef.current.style.setProperty('--mouse-x', `${x}%`);
            containerRef.current.style.setProperty('--mouse-y', `${y}%`);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getColorClass = (color) => {
    switch(color) {
      case 'blue': return 'bg-blue-400/30';
      case 'purple': return 'bg-purple-400/30';
      case 'cyan': return 'bg-cyan-400/30';
      case 'pink': return 'bg-pink-400/30';
      case 'green': return 'bg-green-400/30';
      case 'yellow': return 'bg-yellow-400/30';
      default: return 'bg-blue-400/30';
    }
  };

  const getGlowClass = (color) => {
    switch(color) {
      case 'blue': return 'shadow-blue-400/50';
      case 'purple': return 'shadow-purple-400/50';
      case 'cyan': return 'shadow-cyan-400/50';
      case 'pink': return 'shadow-pink-400/50';
      case 'green': return 'shadow-green-400/50';
      case 'yellow': return 'shadow-yellow-400/50';
      default: return 'shadow-blue-400/50';
    }
  };

  const getMovementPattern = (pattern, id) => {
    switch(pattern) {
      case 0: // Circular
        return {
          x: [0, Math.sin(id * 0.5) * 40, 0],
          y: [0, Math.cos(id * 0.5) * 40, 0],
        };
      case 1: // Figure 8
        return {
          x: [0, Math.sin(id * 0.3) * 60, 0],
          y: [0, Math.sin(id * 0.6) * 30, 0],
        };
      case 2: // Random
        return {
          x: [0, Math.sin(id * 0.8) * 50, Math.cos(id * 0.4) * 30, 0],
          y: [0, Math.cos(id * 0.8) * 50, Math.sin(id * 0.4) * 30, 0],
        };
      default:
        return {
          x: [0, Math.sin(id) * 30, 0],
          y: [0, Math.cos(id) * 30, 0],
        };
    }
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ 
        '--mouse-x': '50%', 
        '--mouse-y': '50%',
        willChange: 'transform',
        transform: 'translateZ(0)',
        zIndex: 1
      }}
    >
      {/* Enhanced firefly particles */}
      {particles.map((particle) => {
        const movement = getMovementPattern(particle.movementPattern, particle.id);
        return (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full ${getColorClass(particle.color)} backdrop-blur-md shadow-2xl ${getGlowClass(particle.color)}`}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: particle.opacity,
              filter: 'blur(0.5px)',
            }}
            animate={{
              ...movement,
              scale: [1, 1.7, 0.7, 1.3, 1],
              opacity: [particle.opacity, particle.opacity * 1.7, particle.opacity * 0.4, particle.opacity * 1.5, particle.opacity],
            }}
            transition={{
              duration: particle.speed,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 3.5,
              opacity: particle.opacity * 2.5,
              filter: 'blur(2px)',
            }}
          />
        );
      })}
      
      {/* Ambient floating orbs */}
      <motion.div
        className="absolute w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-sm"
        style={{ 
          left: '10%', 
          top: '20%',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-green-400/10 rounded-full blur-sm"
        style={{ 
          right: '15%', 
          top: '30%',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-24 h-24 bg-gradient-to-br from-pink-400/10 to-yellow-400/10 rounded-full blur-sm"
        style={{ 
          left: '60%', 
          bottom: '25%',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle geometric accents */}
      <motion.div
        className="absolute w-12 h-12 border border-blue-400/5 rounded-lg"
        style={{ 
          left: '25%', 
          top: '60%',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        animate={{
          rotate: 360,
          x: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute w-8 h-8 border border-purple-400/5 rounded-full"
        style={{ 
          right: '30%', 
          bottom: '40%',
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
        animate={{
          rotate: -360,
          y: [0, -15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}