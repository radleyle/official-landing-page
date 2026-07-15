"use client";

import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "../../lib/projects";
import {
  FEATURED_PROJECT_ID,
  PROJECT_DISPLAY_ORDER,
  LOW_PRIORITY_PROJECT_IDS,
} from "../../lib/highlights";
import FadeIn from "./FadeIn";

const MAX_TAGS = 4;

function sortProjects(projects) {
  return [...projects].sort((a, b) => {
    const aIndex = PROJECT_DISPLAY_ORDER.indexOf(a.id);
    const bIndex = PROJECT_DISPLAY_ORDER.indexOf(b.id);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });
}

export default function ProjectsSection() {
  const projects = sortProjects(
    getAllProjects().filter((p) => p.id !== FEATURED_PROJECT_ID)
  );

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="section-container">
        <FadeIn>
          <div className="mb-12">
            <p className="section-label">Selected work</p>
            <h2 className="section-title">Projects</h2>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const isLowPriority = LOW_PRIORITY_PROJECT_IDS.includes(project.id);
            const visibleTech = project.technologies.slice(0, MAX_TAGS);
            const extraTech = project.technologies.length - MAX_TAGS;

            return (
              <FadeIn key={project.id} delay={index * 0.06}>
                <Link
                  href={`/projects/${project.id}`}
                  className={`${isLowPriority ? "card-muted" : "card"} group block p-6 md:p-8`}
                >
                  <div className="grid md:grid-cols-[1fr_200px] gap-8 items-start">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-3">
                        {project.label && (
                          <span className="tag-accent">{project.label}</span>
                        )}
                        <h3
                          className={`font-medium group-hover:text-accent transition-colors ${
                            isLowPriority ? "text-lg" : "text-xl"
                          }`}
                        >
                          {project.title}
                        </h3>
                        {project.status && (
                          <span className="tag">{project.status}</span>
                        )}
                      </div>
                      {project.impact && (
                        <p className="impact-line">{project.impact}</p>
                      )}
                      <p className="text-muted leading-relaxed line-clamp-2">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {visibleTech.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                        {extraTech > 0 && (
                          <span className="tag">+{extraTech} more</span>
                        )}
                      </div>
                    </div>

                    {project.image && (
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-white/[0.02]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
