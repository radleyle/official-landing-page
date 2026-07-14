"use client";

import { useState } from "react";
import Image from "next/image";
import { education } from "../../lib/education";

function SchoolLogo({ logo, initials, school }) {
  const [failed, setFailed] = useState(false);

  if (!logo || failed) {
    return (
      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0">
        <span className="text-sm font-mono text-muted">{initials}</span>
      </div>
    );
  }

  return (
    <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0">
      <Image
        src={logo}
        alt={`${school} logo`}
        fill
        className="object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function EducationSection() {
  return (
    <section id="education" className="py-24 border-t border-border">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="space-y-0">
          {education.map((item, index) => (
            <div
              key={item.id}
              className={`grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 ${
                index !== education.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="text-sm font-mono text-muted whitespace-nowrap">
                {item.year}
              </div>
              <div className="flex gap-6 md:gap-8 items-start">
                <SchoolLogo
                  logo={item.logo}
                  initials={item.initials}
                  school={item.school}
                />
                <div className="space-y-1.5">
                  <h3 className="text-lg font-medium">{item.school}</h3>
                  <p className="text-muted">{item.degree}</p>
                  <p className="text-sm text-muted">{item.location}</p>
                  {item.details && (
                    <p className="text-sm text-muted pt-1">{item.details}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
