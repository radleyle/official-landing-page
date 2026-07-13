"use client";

import SkillsKeyboard from "../SkillsKeyboard";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 border-t border-border overflow-hidden">
      <div className="section-container mb-12">
        <p className="section-label">Technical stack</p>
        <h2 className="section-title">Skills</h2>
        <p className="text-muted mt-4 max-w-xl">
          Hover over the keys to explore the technologies I work with.
        </p>
      </div>

      <SkillsKeyboard />
    </section>
  );
}
