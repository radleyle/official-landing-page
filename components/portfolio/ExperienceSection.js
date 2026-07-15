"use client";

import { experience } from "../../lib/experience";
import FadeIn from "./FadeIn";

const MAX_TAGS = 5;

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="section-container">
        <FadeIn>
          <div className="mb-12">
            <p className="section-label">Where I&apos;ve worked</p>
            <h2 className="section-title">Experience</h2>
          </div>
        </FadeIn>

        <div className="space-y-0">
          {experience.map((item, index) => (
            <FadeIn key={`${item.company}-${item.year}`} delay={index * 0.05}>
              <div
                className={`grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 ${
                  index !== experience.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="text-sm font-mono text-muted whitespace-nowrap">
                  {item.year}
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-foreground/80">
                      {item.company}
                      {item.location ? ` · ${item.location}` : ""}
                    </p>
                    {item.impact && (
                      <p className="impact-line mt-1.5">{item.impact}</p>
                    )}
                  </div>
                  <p className="text-muted leading-relaxed">{item.description}</p>
                  {item.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.slice(0, MAX_TAGS).map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                      {item.technologies.length > MAX_TAGS && (
                        <span className="tag">
                          +{item.technologies.length - MAX_TAGS}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
