"use client";

import Image from "next/image";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  { href: "https://github.com/radleyle", icon: FiGithub, label: "GitHub" },
  { href: "https://linkedin.com/in/radley-le", icon: FiLinkedin, label: "LinkedIn" },
  { href: "mailto:radleyle1507@gmail.com", icon: FiMail, label: "Email" },
];

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="min-h-[88vh] flex items-center pt-16">
      <div className="section-container py-16 md:py-20">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <div className="space-y-3">
              <p className="section-label">Portfolio · 2026</p>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                SWE Intern @ Astrio
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
                Nguyen Le
              </h1>
              <p className="text-sm font-mono text-muted">
                Full-Stack Developer · AI/ML Engineer · ICML Author
              </p>
              <p className="text-lg text-muted max-w-xl leading-relaxed">
                Computer Science student at Bucknell University passionate about AI research
                and full-stack engineering. I&apos;ve shipped production apps across the stack, conducted ML research
                on biomass gassification, and published at ICML VecDB Workshop.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 text-sm">
              <div>
                <div className="font-mono text-foreground">3.5</div>
                <div className="text-muted">GPA</div>
              </div>
              <div>
                <div className="font-mono text-foreground">10+</div>
                <div className="text-muted">Projects</div>
              </div>
              <div>
                <div className="font-mono text-foreground">1</div>
                <div className="text-muted">Publication</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button onClick={() => onNavigate("experience")} className="btn-primary">
                View experience
              </button>
              <button onClick={() => onNavigate("contact")} className="btn-secondary">
                Get in touch
              </button>
              <a
                href="/Nguyen's SWE Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Resume
              </a>
            </div>

            <div className="flex items-center gap-4 pt-1">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted hover:text-accent transition-colors"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border">
              <Image
                src="/images/main.png"
                alt="Nguyen Le"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
