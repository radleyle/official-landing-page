"use client";

import Link from "next/link";
import Image from "next/image";
import { getProjectById } from "../../lib/projects";
import { FEATURED_PROJECT_ID } from "../../lib/highlights";
import { FiArrowRight } from "react-icons/fi";
import FadeIn from "./FadeIn";

export default function FeaturedProject() {
  const project = getProjectById(FEATURED_PROJECT_ID);
  if (!project) return null;

  return (
    <section className="py-16 border-t border-border">
      <div className="section-container">
        <FadeIn>
          <div className="mb-8">
            <p className="section-label">Featured</p>
            <h2 className="section-title">Flagship project</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <Link
            href={`/projects/${project.id}`}
            className="card-featured group block overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] border-b lg:border-b-0 lg:border-r border-border">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-white/[0.03]">
                    <span className="text-3xl font-semibold text-accent/50">
                      {project.title}
                    </span>
                    <span className="text-xs font-mono text-muted">
                      Preview coming soon
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center gap-5">
                <div className="flex flex-wrap items-center gap-3">
                  {project.label && (
                    <span className="tag-accent">{project.label}</span>
                  )}
                  <h3 className="text-2xl font-medium text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.status && <span className="tag">{project.status}</span>}
                </div>
                {project.impact && (
                  <p className="impact-line">{project.impact}</p>
                )}
                <p className="text-muted leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm text-accent">
                  View project
                  <FiArrowRight
                    className="transition-transform group-hover:translate-x-1"
                    size={16}
                  />
                </span>
              </div>
            </div>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
