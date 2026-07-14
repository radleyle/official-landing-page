"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import ContactForm from "../ContactForm";

const links = [
  {
    label: "Email",
    href: "mailto:radleyle1507@gmail.com",
    icon: FiMail,
    value: "radleyle1507@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/radley-le",
    icon: FiLinkedin,
    value: "radley-le",
  },
  {
    label: "GitHub",
    href: "https://github.com/radleyle",
    icon: FiGithub,
    value: "radleyle",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Contact</h2>
          <p className="text-muted mt-4 max-w-xl">
            Open to internships, research collaborations, and interesting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="card flex items-center gap-4 p-4 group"
              >
                <link.icon className="text-muted group-hover:text-accent transition-colors" size={20} />
                <div>
                  <div className="text-xs text-muted uppercase tracking-wider">{link.label}</div>
                  <div className="text-sm group-hover:text-accent transition-colors">{link.value}</div>
                </div>
              </a>
            ))}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
