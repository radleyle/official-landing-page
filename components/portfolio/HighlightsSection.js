"use client";

import { highlights } from "../../lib/highlights";
import FadeIn from "./FadeIn";

export default function HighlightsSection() {
  return (
    <section className="py-16 border-t border-border">
      <div className="section-container">
        <FadeIn>
          <div className="mb-8">
            <p className="section-label">At a glance</p>
            <h2 className="section-title">Highlights</h2>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <div className="card p-5 h-full">
                <h3 className="text-sm font-medium text-foreground mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
