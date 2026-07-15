"use client";

import { useEffect } from "react";
import Navbar from "../components/portfolio/Navbar";
import Hero from "../components/portfolio/Hero";
import HighlightsSection from "../components/portfolio/HighlightsSection";
import FeaturedProject from "../components/portfolio/FeaturedProject";
import ProjectsSection from "../components/portfolio/ProjectsSection";
import ExperienceSection from "../components/portfolio/ExperienceSection";
import EducationSection from "../components/portfolio/EducationSection";
import PublicationsSection from "../components/portfolio/PublicationsSection";
import GitHubActivity from "../components/portfolio/GitHubActivity";
import SkillsSection from "../components/portfolio/SkillsSection";
import ContactSection from "../components/portfolio/ContactSection";

export default function Home() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      scrollTo(hash);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar onNavigate={scrollTo} />
      <Hero onNavigate={scrollTo} />
      <HighlightsSection />
      <ExperienceSection />
      <FeaturedProject />
      <ProjectsSection />
      <PublicationsSection />
      <EducationSection />
      <GitHubActivity />
      <SkillsSection />
      <ContactSection />

      <footer className="border-t border-border py-8">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
          <span>© {new Date().getFullYear()} Nguyen Le</span>
          <span className="font-mono text-xs">Built with Next.js</span>
        </div>
      </footer>
    </main>
  );
}
