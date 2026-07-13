"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaExternalLinkAlt,
  FaGithub,
  FaClock,
  FaCheckCircle,
  FaSpinner,
  FaPause,
  FaFileAlt,
} from "react-icons/fa";

export default function ProjectDetail({ project }) {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "challenges", label: "Challenges & Solutions" },
    { id: "technologies", label: "Technologies" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="section-container flex items-center justify-between h-16">
          <Link
            href="/#projects"
            className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
          >
            <FaArrowLeft size={14} />
            Back to projects
          </Link>
          <div className="flex items-center gap-3">
            {project.paperUrl && (
              <a
                href={project.paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs px-3 py-1.5"
              >
                <FaFileAlt size={12} />
                Paper
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs px-3 py-1.5"
              >
                <FaExternalLinkAlt size={12} />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs px-3 py-1.5"
              >
                <FaGithub size={12} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </nav>

      <section className="pt-28 pb-12">
        <div className="section-container">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="section-label">{project.label}</p>
            <h1 className="section-title mb-4">{project.title}</h1>
            <p className="text-muted leading-relaxed">{project.description}</p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted mt-6">
              <div className="flex items-center gap-2">
                <FaClock size={14} />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                {project.status === "Completed" && (
                  <FaCheckCircle className="text-accent" />
                )}
                {project.status === "In Progress" && (
                  <FaSpinner className="text-yellow-500" />
                )}
                {project.status === "On Hold" && (
                  <FaPause className="text-orange-500" />
                )}
                {project.status === "Beta" && (
                  <FaCheckCircle className="text-blue-500" />
                )}
                <span>{project.status}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border mb-12">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} screenshot`}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted">
                No preview available
              </div>
            )}
          </div>

          <div className="flex overflow-x-auto border-b border-border mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-accent text-foreground"
                    : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-4">Overview</h3>
                    {(project.overview || project.description)
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p key={index} className="text-muted leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                  </div>
                </div>
                <div className="card p-6 space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">Status</span>
                    <span>{project.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Timeline</span>
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">Technologies</span>
                    <span>{project.technologies.length}</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="card p-4 flex items-start gap-3">
                    <FaCheckCircle className="text-accent mt-1 shrink-0" size={14} />
                    <span className="text-muted text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "challenges" && (
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-medium mb-4">Challenges</h3>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="card p-4 text-muted text-sm">
                        {challenge}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4">Solutions</h3>
                  <div className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <div key={index} className="card p-4 text-muted text-sm">
                        {solution}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "technologies" && (
              <div className="space-y-4">
                {project.techStack ? (
                  project.techStack.map((item) => (
                    <div key={item.layer} className="card p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="tag">{item.layer}</span>
                        <span className="text-sm font-medium">{item.technology}</span>
                      </div>
                      <p className="text-muted text-sm leading-relaxed">{item.role}</p>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
