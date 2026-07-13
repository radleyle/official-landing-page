"use client";

import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "../../lib/projects";
import { FEATURED_PROJECT_ID } from "../../lib/highlights";

export default function ProjectsSection() {
  const projects = getAllProjects().filter((p) => p.id !== FEATURED_PROJECT_ID);

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="section-container">
        <div className="mb-12">
          <p className="section-label">All projects</p>
          <h2 className="section-title">More work</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="card group block p-6 md:p-8"
            >
              <div className="grid md:grid-cols-[1fr_200px] gap-8 items-start">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-medium group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="tag">{project.status}</span>
                    )}
                  </div>
                  <p className="text-muted leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
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
          ))}
        </div>
      </div>
    </section>
  );
}
