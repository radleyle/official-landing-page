"use client";

import { useEffect } from 'react';

export default function ThemeProvider({ children }) {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.removeItem('theme');
  }, []);

  return <>{children}</>;
}