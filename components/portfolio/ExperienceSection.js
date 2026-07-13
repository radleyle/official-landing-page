"use client";

import { experience } from "../../lib/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Background</p>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="space-y-0">
          {experience.map((item, index) => (
            <div
              key={`${item.company}-${item.year}`}
              className={`grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 ${
                index !== experience.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="text-sm font-mono text-muted whitespace-nowrap">
                {item.year}
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-medium">{item.role}</h3>
                  <p className="text-muted">
                    {item.company}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                </div>
                <p className="text-muted leading-relaxed">{item.description}</p>
                {item.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
