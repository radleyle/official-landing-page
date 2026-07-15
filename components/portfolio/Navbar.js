"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ onNavigate }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16">
        <button
          onClick={() => onNavigate("home")}
          className="text-sm font-medium text-foreground hover:text-accent transition-colors"
        >
          Nguyen Le
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="/Nguyen's SWE Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
