"use client";

import Image from "next/image";
import { publications } from "../../lib/publications";
import { FiExternalLink } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import FadeIn from "./FadeIn";

export default function PublicationsSection() {
  return (
    <section id="publications" className="py-24 border-t border-border">
      <div className="section-container">
        <FadeIn>
          <div className="mb-12">
            <p className="section-label">Research</p>
            <h2 className="section-title">Publications</h2>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <FadeIn key={pub.url} delay={index * 0.06}>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card group block p-6 md:p-8"
              >
                <div className="grid md:grid-cols-[1fr_220px] gap-8 items-start">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="tag-accent">{pub.venue}</span>
                      <span className="text-xs font-mono text-muted">
                        {pub.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-medium leading-snug group-hover:text-accent transition-colors">
                      {pub.title}
                    </h3>
                    {pub.impact && (
                      <p className="impact-line">{pub.impact}</p>
                    )}
                    <p className="text-muted text-sm leading-relaxed">
                      {pub.description}
                    </p>
                    {pub.highlights && (
                      <ul className="space-y-2">
                        {pub.highlights.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-muted"
                          >
                            <FaCheckCircle
                              className="text-accent mt-0.5 shrink-0"
                              size={13}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="inline-flex items-center gap-2 text-sm text-accent pt-1">
                      Read paper on OpenReview
                      <FiExternalLink size={14} />
                    </span>
                  </div>

                  {pub.image && (
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border bg-white/[0.02]">
                      <Image
                        src={pub.image}
                        alt={pub.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
