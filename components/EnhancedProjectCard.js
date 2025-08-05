"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function EnhancedProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group h-80"
    >
      <Link href={`/projects/${project.id}`} className="block h-full">
        <motion.div 
          className="relative bg-white/[0.07] dark:bg-white/[0.03] backdrop-blur-3xl border border-white/40 dark:border-white/20 rounded-3xl p-6 h-full hover:bg-white/[0.12] dark:hover:bg-white/[0.08] transition-all duration-700 shadow-2xl hover:shadow-3xl hover:scale-[1.02] group-hover:border-white/60 dark:group-hover:border-white/30 overflow-hidden cursor-pointer"
          style={{ 
            backdropFilter: 'blur(40px) saturate(200%) brightness(1.2)', 
            WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.2)',
            boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {/* Glass reflection effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-60"></div>
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="relative aspect-video bg-gradient-to-br from-slate-700 via-slate-600 to-slate-800 rounded-2xl mb-4 overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center">
              {/* Simple, clean placeholder */}
              <div className="text-center text-white/80">
                <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                  <div className="text-2xl">🖼️</div>
                </div>
                <p className="text-sm opacity-90">Project Screenshot</p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-4">
                <span className="text-white text-sm font-medium">View Project Details</span>
              </div>
            </div>
            
            <div className="flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-foreground/80 mb-4 leading-relaxed text-sm flex-1">
                {project.shortDescription}
              </p>
              
              <div className="flex gap-2 text-xs flex-wrap mt-auto">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span 
                    key={tech} 
                    className="relative px-2 py-1 bg-white/[0.15] dark:bg-white/[0.08] backdrop-blur-xl border border-white/50 dark:border-white/30 rounded-full text-foreground/90 shadow-lg"
                    style={{ 
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent opacity-50"></div>
                    <span className="relative">{tech}</span>
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="relative px-2 py-1 bg-white/[0.15] dark:bg-white/[0.08] backdrop-blur-xl border border-white/50 dark:border-white/30 rounded-full text-foreground/90 shadow-lg text-xs">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
              
              {/* Quick action buttons */}
              <div className="flex gap-2 mt-4 pt-4 border-t border-white/20">
                {project.demoUrl && (
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg text-xs text-green-400 hover:bg-green-500/30 transition-colors opacity-0 group-hover:opacity-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={10} />
                    Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg text-xs text-purple-400 hover:bg-purple-500/30 transition-colors opacity-0 group-hover:opacity-100"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiGithub size={10} />
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
      
      {/* Enhanced floating decorations */}
      <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-purple-500/40 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"
           style={{ backdropFilter: 'blur(10px)' }}></div>
      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-md opacity-0 group-hover:opacity-80 transition-all duration-500 delay-100 pointer-events-none"
           style={{ backdropFilter: 'blur(8px)' }}></div>
    </motion.div>
  );
}