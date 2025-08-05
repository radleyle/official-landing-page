"use client";

import { motion } from "framer-motion";
import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById } from "../../../lib/projects";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiTailwindcss, 
  SiDocker, 
  SiFigma,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiSocketdotio,
  SiStripe,
  SiPrisma,
  SiMui,
  SiD3Dotjs,
  SiChartdotjs,
  SiMapbox
} from "react-icons/si";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaClock, FaCheckCircle } from "react-icons/fa";

// Icon mapping for technologies
const techIcons = {
  "Next.js": { icon: SiNextdotjs, color: "#000000" },
  "React": { icon: SiReact, color: "#61DAFB" },
  "TypeScript": { icon: SiTypescript, color: "#3178C6" },
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Python": { icon: SiPython, color: "#3776AB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Docker": { icon: SiDocker, color: "#2496ED" },
  "Figma": { icon: SiFigma, color: "#F24E1E" },
  "MongoDB": { icon: SiMongodb, color: "#47A248" },
  "PostgreSQL": { icon: SiPostgresql, color: "#4169E1" },
  "Express": { icon: SiExpress, color: "#000000" },
  "Socket.io": { icon: SiSocketdotio, color: "#010101" },
  "Stripe": { icon: SiStripe, color: "#635BFF" },
  "Prisma": { icon: SiPrisma, color: "#2D3748" },
  "Material-UI": { icon: SiMui, color: "#007FFF" },
  "D3.js": { icon: SiD3Dotjs, color: "#F9A03C" },
  "Chart.js": { icon: SiChartdotjs, color: "#FF6384" },
  "Mapbox": { icon: SiMapbox, color: "#000000" },
  "PWA": { icon: SiReact, color: "#61DAFB" }, // Using React icon as fallback
  "OpenWeather API": { icon: SiReact, color: "#61DAFB" } // Using React icon as fallback
};

export default function ProjectDetail({ params }) {
  const [activeTab, setActiveTab] = useState("overview");
  const resolvedParams = use(params);
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "challenges", label: "Challenges & Solutions" },
    { id: "technologies", label: "Technologies" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/[0.08] dark:bg-black/[0.08] backdrop-blur-3xl border-b border-white/30 dark:border-white/20 shadow-2xl"
        style={{
          backdropFilter: 'blur(40px) saturate(200%) brightness(1.1)',
          WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.1)',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/#projects" className="flex items-center gap-2 hover:text-foreground/70 transition-colors">
              <FaArrowLeft size={16} />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2 px-4 py-2 bg-white/[0.12] dark:bg-black/[0.12] backdrop-blur-3xl border border-white/50 dark:border-white/30 text-foreground rounded-full hover:bg-white/[0.20] dark:hover:bg-black/[0.20] transition-all duration-500 text-sm shadow-2xl hover:shadow-3xl overflow-hidden"
                  style={{
                    backdropFilter: 'blur(40px) saturate(200%) brightness(1.2)',
                    WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.2)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  <FaExternalLinkAlt size={14} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center gap-2 px-4 py-2 bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 rounded-full hover:bg-white/[0.15] dark:hover:bg-white/[0.08] transition-all duration-500 text-sm shadow-2xl hover:shadow-3xl overflow-hidden"
                  style={{
                    backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                    WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  <FaGithub size={14} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-foreground/70 max-w-4xl mx-auto mb-8">
              {project.description}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-foreground/60">
              <div className="flex items-center gap-2">
                <FaClock />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                <span>{project.status}</span>
              </div>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl overflow-hidden mb-12"
          >
            {/* Placeholder for project image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white/80 text-center">
                <div className="text-4xl mb-2">🖥️</div>
                <p>Project Screenshot</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex overflow-x-auto border-b border-foreground/10 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium whitespace-nowrap transition-colors border-b-2 ${
                  activeTab === tab.id
                    ? "border-foreground text-foreground"
                    : "border-transparent text-foreground/60 hover:text-foreground/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
                  <p className="text-foreground/70 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Quick Facts</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Status:</span>
                        <span className="font-medium">{project.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Timeline:</span>
                        <span className="font-medium">{project.timeline}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/60">Technologies:</span>
                        <span className="font-medium">{project.technologies.length} used</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "features" && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3 p-4 bg-foreground/5 rounded-lg"
                    >
                      <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "challenges" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Challenges Faced</h3>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-4 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg"
                      >
                        <p>{challenge}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Solutions Implemented</h3>
                  <div className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="p-4 bg-green-500/10 border-l-4 border-green-500 rounded-r-lg"
                      >
                        <p>{solution}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "technologies" && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Technologies Used</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.technologies.map((tech, index) => {
                    const techInfo = techIcons[tech] || { icon: SiReact, color: "#61DAFB" };
                    const IconComponent = techInfo.icon;
                    
                    return (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative text-center p-6 rounded-3xl bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 hover:bg-white/[0.15] dark:hover:bg-white/[0.08] transition-all duration-700 shadow-2xl hover:shadow-3xl hover:scale-105 group overflow-hidden"
                style={{
                  backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                  WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
                      >
                        {/* Glass reflection overlay */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-70"></div>
                        
                        <div className="relative z-10 flex flex-col items-center space-y-3">
                          <div className="relative">
                            <IconComponent 
                              size={48} 
                              style={{ color: techInfo.color }}
                              className="drop-shadow-lg"
                            />
                            {/* Icon glow effect */}
                            <div 
                              className="absolute inset-0 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                              style={{ backgroundColor: techInfo.color }}
                            ></div>
                          </div>
                          <div className="text-sm font-medium text-foreground/90">{tech}</div>
                        </div>
                        
                        {/* Floating glass particle */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-foreground/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Interested in This Project?</h3>
            <p className="text-lg text-foreground/70 mb-8">
              Check out the live demo or view the source code on GitHub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
                >
                  <FaExternalLinkAlt />
                  View Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 border border-foreground/20 rounded-full hover:bg-foreground/5 transition-colors"
                >
                  <FaGithub />
                  View Source Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}