"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TypewriterText({ 
  texts = ["Your Name"], 
  className = "",
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000
}) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const typeText = () => {
      if (isPaused) {
        setTimeout(() => {
          setIsPaused(false);
          if (texts.length > 1) {
            setIsDeleting(true);
          }
        }, pauseDuration);
        return;
      }

      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typeText, isDeleting ? deleteSpeed : speed);
    return () => clearTimeout(timer);
  }, [displayText, textIndex, isDeleting, isPaused, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-[1em] bg-current ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    </span>
  );
}