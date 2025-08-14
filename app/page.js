"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "../lib/projects";
import TypewriterText from "../components/TypewriterText";

import SkillBar from "../components/SkillBar";
import ScrollProgress from "../components/ScrollProgress";
import EnhancedProjectCard from "../components/EnhancedProjectCard";
import MagneticButton from "../components/MagneticButton";
import ParallaxSection from "../components/ParallaxSection";
import ContactForm from "../components/ContactForm";


import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiTailwindcss, 
  SiDocker, 
  SiFigma 
} from "react-icons/si";
import { 
  FiMail, 
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiFileText
} from "react-icons/fi";
import { 
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiVite,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiHuggingface,
  SiAnaconda
} from "react-icons/si";
import { 
  FaInstagram, 
  FaFacebookF 
} from "react-icons/fa";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          setShowBackToTop(window.scrollY > 1);
          
          // Update active section based on scroll position
          const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
          const scrollPosition = window.scrollY + 100;
          
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(sections[i]);
              break;
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" }
  ];

  const projects = getAllProjects();

  return (
    <div 
      className="min-h-screen bg-background text-foreground optimize-scroll relative"
      style={{
        willChange: 'scroll-position',
        transform: 'translateZ(0)',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      {/* Back to Top Pop-up Button */}
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 p-4 bg-gradient-to-r from-blue-500 to-purple-500 backdrop-blur-md border border-white/40 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          initial={{ scale: 0, opacity: 0, x: -20 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          exit={{ scale: 0, opacity: 0, x: -20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 20,
            duration: 0.3 
          }}
        >
          <div className="text-white text-xl font-bold">↑</div>
        </motion.button>
      )}
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/5 backdrop-blur-md border-b border-white/20 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NL</span>
              </div>
              <span className="text-gray-900 dark:text-white font-medium text-base">Nguyen Le</span>
            </motion.div>

            {/* Navigation Links - Desktop */}
            <motion.div 
              className="hidden md:flex items-center space-x-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {['about', 'skills', 'projects', 'experience', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`relative text-sm font-medium px-4 py-2 rounded-lg overflow-hidden group transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/30' 
                      : 'text-white/70 hover:text-white'
                  }`}
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {/* Active indicator */}
                  {activeSection === section && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/30"></div>
                  )}
                  
                  {/* Water drop background */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"></div>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100 origin-center"></div>
                  </div>
                  
                  {/* Text */}
                  <span className="relative z-10">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                  
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </motion.button>
              ))}
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/[0.08] backdrop-blur-xl border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <motion.div
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-white rounded-full mb-1"
                />
                <motion.div
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-5 h-0.5 bg-white rounded-full mb-1"
                />
                <motion.div
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-white rounded-full"
                />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            className={`md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/20 ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-4 space-y-2">
              {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === section 
                      ? 'bg-white/10 text-white' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden z-10">
        {/* Floating glass elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-pink-400/20 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm font-medium"
              >
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Available for new opportunities
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-white">Hi, I'm</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  <TypewriterText 
                    texts={["Nguyen", "Radley", "an AI & Software Engineer"]}
                    speed={150}
                    deleteSpeed={100}
                    pauseDuration={1500}
                  />
                </span>
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Computer Science student at Bucknell (GPA 3.60) with research published at ICML VecDB 2025, hands-on AI chatbot and LCA modeling experience, and strong skills in Python, Java, and React.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                    <span>View My Work</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
                
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center">
                    <span>Get In Touch</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/40 to-pink-500/30 rounded-2xl blur-3xl transform scale-110 animate-pulse"></div>
                
                {/* Photo container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Profile Photo */}
                  <motion.div 
                    className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl group border border-white/20"
                    style={{
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      transform: 'perspective(1000px) rotateY(-15deg) rotateX(5deg)',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                    }}
                    animate={{
                      y: [0, -35, 0, 25, 0, -40, 0, 30, 0],
                      x: [0, 25, 0, -20, 0, 18, 0, -15, 0],
                      rotateY: [-15, -5, -15, -8, -15, -2, -15, -10, -15],
                      rotateX: [5, 15, 5, 10, 5, 18, 5, 12, 5]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{
                      scale: 1.08,
                      rotateY: -5,
                      rotateX: 15,
                      y: -5,
                      transition: { duration: 0.4 }
                    }}
                  >
        <Image
                      src="/images/kyyeu.png"
                      alt="Radley - Profile Photo"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                      style={{ 
                        objectPosition: '35% 15%',
                        transform: 'scale(1.1) translateY(16px) translateX(-8px)'
                      }}
          priority
        />
                    {/* Glass overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 rounded-2xl"></div>
                    {/* Liquid glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-60 rounded-2xl"></div>
                  </motion.div>
                  
                  {/* Decorative elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/30 rounded-full blur-xl"
                    animate={{
                      y: [0, -30, 0, 35, 0, -40, 0, 25, 0],
                      x: [0, 20, 0, -25, 0, 15, 0, -20, 0],
                      opacity: [0.3, 0.8, 0.3, 0.9, 0.3, 0.7, 0.3, 0.8, 0.3],
                      scale: [1, 1.2, 1, 1.3, 1, 1.1, 1, 1.25, 1]
                    }}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <motion.div 
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-purple-500/30 rounded-full blur-lg"
                    animate={{
                      y: [0, 35, 0, -30, 0, 45, 0, -25, 0],
                      x: [0, -20, 0, 30, 0, -15, 0, 25, 0],
                      opacity: [0.3, 0.7, 0.3, 0.8, 0.3, 0.9, 0.3, 0.6, 0.3],
                      scale: [1, 1.25, 1, 1.35, 1, 1.15, 1, 1.3, 1]
                    }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 4
                    }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2" style={{ lineHeight: '1.1' }}>
              My Story
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              From code to creation, here's my journey in the world of technology
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Photo & Interactive Elements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main Photo with Floating Elements */}
              <div className="relative group">
                <motion.div 
                  className="relative w-[400px] h-[520px] mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Photo Container */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/30 dark:border-white/20 backdrop-blur-xl"
                       style={{
                         backdropFilter: 'blur(20px) saturate(180%)',
                         WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                       }}>
            <Image
                      src="/images/concert.png"
                      alt="Radley - Professional Photo"
                      fill
                      className="object-cover transition-transform duration-700 scale-150 -translate-y-12 translate-x-6"
                      priority
                    />
                    {/* Glass overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10"></div>
                  </div>
                  
                  {/* Floating Achievement Cards */}
                  <motion.div 
                    className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-xl"
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">2+</div>
                      <div className="text-xs text-foreground/70">Years</div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="absolute -bottom-4 -left-8 bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-4 shadow-xl"
                    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 5 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">10+</div>
                      <div className="text-xs text-foreground/70">Projects</div>
                    </div>
                  </motion.div>

                  {/* <motion.div 
                    className="absolute top-1/2 -right-12 bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-3 shadow-xl"
                    initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-400">100%</div>
                      <div className="text-xs text-foreground/70">Client</div>
                    </div>
                  </motion.div> */}
                </motion.div>
              </div>

              {/* Journey Timeline */}
              <motion.div 
                className="mt-12 space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <motion.div 
                    className="w-3 h-3 bg-blue-400 rounded-full"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex-1 h-px bg-gradient-to-r from-blue-400/50 to-transparent group-hover:from-blue-400 transition-all duration-300"></div>
                  <motion.span 
                    className="text-sm text-foreground/60 group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Started with curiosity
                  </motion.span>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <motion.div 
                    className="w-3 h-3 bg-purple-400 rounded-full"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent group-hover:from-purple-400 transition-all duration-300"></div>
                  <motion.span 
                    className="text-sm text-foreground/60 group-hover:text-purple-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Built first website
                  </motion.span>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <motion.div 
                    className="w-3 h-3 bg-green-400 rounded-full"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent group-hover:from-green-400 transition-all duration-300"></div>
                  <motion.span 
                    className="text-sm text-foreground/60 group-hover:text-green-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Now creating magic
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Story & Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Story Cards */}
              <motion.div 
                className="relative bg-white/[0.08] backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-xl group hover:shadow-2xl transition-all duration-500 overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-blue-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    The Beginning
                  </motion.h3>
                  <motion.p 
                    className="text-foreground/70 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    I came to Bucknell as an Early Childhood Education major with a desire to follow my family's footsteps. However, I quickly discovered my passion for software development and computer science.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div 
                className="relative bg-white/[0.08] backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-xl group hover:shadow-2xl transition-all duration-500 overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10 group-hover:from-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-purple-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  >
                    The Passion
                  </motion.h3>
                  <motion.p 
                    className="text-foreground/70 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    I specialize in full-stack development and AI/Machine Learning, turning complex problems into elegant solutions. Every project is an opportunity to learn something new and push creative boundaries.
                  </motion.p>
                </div>
              </motion.div>

              <motion.div 
                className="relative bg-white/[0.08] backdrop-blur-xl border border-white/30 rounded-3xl p-8 shadow-xl group hover:shadow-2xl transition-all duration-500 overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-green-500/10 group-hover:from-cyan-500/20 group-hover:to-green-500/20 transition-all duration-500"></div>
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-bold mb-4 text-cyan-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    The Future
                  </motion.h3>
                  <motion.p 
                    className="text-foreground/70 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    Always learning, always growing. I'm excited about the intersection of AI and web development, and I love collaborating with teams to bring innovative ideas to life.
                  </motion.p>
                </div>
              </motion.div>

              {/* Interactive CTA */}
              <motion.div 
                className="text-center pt-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
              >
                {/* <MagneticButton>
                  <motion.button 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Build Something Amazing →
                  </motion.button>
                </MagneticButton> */}
              </motion.div>
            </motion.div>
          </div>
          

        </div>
      </section>



      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        {/* Background glass elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-blue-300/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-purple-300/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2" style={{ lineHeight: '1.1' }}>
              Technical Skills
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Technologies I use to bring ideas to life
            </p>
          </motion.div>
          {/* Skills Keyboard Layout */}
          <div className="relative max-w-6xl mx-auto mb-16">
            {/* Keyboard container with fading edges */}
            <div className="relative">
              {/* Left fade gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none"></div>
              
              {/* Right fade gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none"></div>
              
              {/* Top fade gradient */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/90 to-transparent z-10 pointer-events-none"></div>
              
              {/* Bottom fade gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/90 to-transparent z-10 pointer-events-none"></div>
              
              {/* Interactive Skills Keyboard */}
              <div className="relative max-w-7xl mx-auto">
                {/* Top Row - Function Keys */}
                <div className="grid grid-cols-9 gap-3 md:gap-4 mb-3 md:mb-4">
                  {Array.from({ length: 9 }, (_, i) => (
                    <motion.div
                      key={`top-key-${i}`}
                      className="aspect-square bg-white/[0.08] border border-white/30 rounded-lg opacity-60 hover:opacity-80 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                          F{i + 1}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Row 1 - Number Keys */}
                <div className="grid grid-cols-9 gap-3 md:gap-4 mb-3 md:mb-4">
                  {Array.from({ length: 9 }, (_, i) => {
  const skillKeys = {
    1: { skill: skills[0], color: '#61DAFB' }, // React - 2
    2: { skill: skills[1], color: '#FFFFFF' }, // Next.js - 3 (white)
    3: { skill: skills[2], color: '#3178C6' }, // TypeScript - 4
    4: { skill: skills[3], color: '#339933' }, // Node.js - 5
    5: { skill: skills[4], color: '#3776AB' }, // Python - 6
    6: { skill: skills[5], color: '#06B6D4' }, // Tailwind - 7
    7: { icon: 'github', color: '#FFFFFF' }, // GitHub - 8 (white)
  };
  
  const currentSkill = skillKeys[i];
  const isSkillKey = currentSkill !== undefined;
  
  return (
    <motion.div
      key={`row1-key-${i}`}
      className={`aspect-square bg-white/[0.08] border border-white/30 rounded-lg transition-all duration-300 shadow-lg cursor-pointer group relative overflow-hidden ${
        isSkillKey ? 'hover:scale-110' : 'hover:opacity-80'
      }`}
      style={
        isSkillKey
          ? { boxShadow: `0 0 0 0 ${currentSkill.color}00`, transition: 'box-shadow 0.3s' }
          : {}
      }
      whileHover={
        isSkillKey
          ? { y: -5, boxShadow: `0 0 32px 8px ${currentSkill.color}` }
          : { y: -3 }
      }
      whileTap={{ scale: 0.95 }}
    >
      {isSkillKey ? (
        <div className="flex items-center justify-center h-full">
          {(() => {
            if (currentSkill.icon === 'github') {
              return <FiGithub size={45} style={{ color: currentSkill.color }} />;
            } else {
              const IconComponent = currentSkill.skill.icon;
              return <IconComponent size={45} style={{ color: currentSkill.color }} />;
            }
          })()}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
            {i + 1}
          </span>
        </div>
      )}
    </motion.div>
  );
})}
                </div>
                
                {/* Row 2 - QWERTY Row (staggered) */}
                <div className="grid grid-cols-9 gap-3 md:gap-4 mb-3 md:mb-4" style={{ marginLeft: '2rem' }}>
                  {[
                    { letter: 'Q', skill: null },
                    { letter: 'W', skill: { icon: SiJavascript, color: '#F7DF1E' } }, // JavaScript
                    { letter: 'E', skill: { icon: SiHtml5, color: '#E34F26' } }, // HTML
                    { letter: 'R', skill: { icon: SiCss3, color: '#1572B6' } }, // CSS
                    { letter: 'T', skill: { icon: SiVercel, color: '#FFFFFF' } }, // Vercel (white)
                    { letter: 'Y', skill: { icon: SiVite, color: '#646CFF' } }, // Vite
                    { letter: 'U', skill: { icon: SiTensorflow, color: '#FF6F00' } }, // TensorFlow
                    { letter: 'I', skill: { icon: 'java', color: '#FF0000' } }, // Java (red)
                    { letter: 'O', skill: null }
                  ].map((item, i) => {
                    const isSkillKey = item.skill !== null;
                    
                    return (
                      <motion.div
                        key={`row2-key-${i}`}
                        className={`aspect-square bg-white/[0.08] border border-white/30 rounded-lg transition-all duration-300 shadow-lg cursor-pointer group relative overflow-hidden ${
                          isSkillKey ? 'hover:scale-110' : 'hover:opacity-80'
                        }`}
                        style={
                          isSkillKey
                            ? { boxShadow: `0 0 0 0 ${item.skill.color}00`, transition: 'box-shadow 0.3s' }
                            : {}
                        }
                        whileHover={
                          isSkillKey
                            ? { y: -5, boxShadow: `0 0 32px 8px ${item.skill.color}` }
                            : { y: -3 }
                        }
                        whileTap={{ scale: 0.95 }}
                      >
                        {isSkillKey ? (
                          <div className="flex items-center justify-center h-full">
                            {(() => {
                              if (item.skill.icon === 'java') {
                                return (
                                  <img 
                                    src="/images/java_original_logo.png" 
                                    alt="Java" 
                                    style={{ 
                                      width: '60px', 
                                      height: '60px', 
                                      objectFit: 'contain' 
                                    }} 
                                  />
                                );
                              } else {
                                const IconComponent = item.skill.icon;
                                return <IconComponent size={45} style={{ color: item.skill.color }} />;
                              }
                            })()}
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                              {item.letter}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Row 3 - ASDF Row (further staggered) */}
                <div className="grid grid-cols-9 gap-3 md:gap-4 mb-3 md:mb-4" style={{ marginLeft: '4rem' }}>
                  {[
                    { letter: 'A', skill: null },
                    { letter: 'S', skill: { icon: SiPytorch, color: '#EE4C2C' } }, // PyTorch
                    { letter: 'D', skill: { icon: SiScikitlearn, color: '#F7931E' } }, // Scikit-learn
                    { letter: 'F', skill: { icon: SiPandas, color: '#130654' } }, // Pandas
                    { letter: 'G', skill: { icon: SiNumpy, color: '#4DABCF' } }, // NumPy
                    { letter: 'H', skill: { icon: SiHuggingface, color: '#FF6B6B' } }, // HuggingFace
                    { letter: 'J', skill: { icon: SiAnaconda, color: '#44A833' } }, // Anaconda
                    { letter: 'K', skill: null },
                    { letter: 'L', skill: null }
                  ].map((item, i) => {
                    const isSkillKey = item.skill !== null;
                    
                    return (
                      <motion.div
                        key={`row3-key-${i}`}
                        className={`aspect-square bg-white/[0.08] border border-white/30 rounded-lg transition-all duration-300 shadow-lg cursor-pointer group relative overflow-hidden ${
                          isSkillKey ? 'hover:scale-110' : 'hover:opacity-80'
                        }`}
                        style={
                          isSkillKey
                            ? { boxShadow: `0 0 0 0 ${item.skill.color}00`, transition: 'box-shadow 0.3s' }
                            : {}
                        }
                        whileHover={
                          isSkillKey
                            ? { y: -5, boxShadow: `0 0 32px 8px ${item.skill.color}` }
                            : { y: -3 }
                        }
                        whileTap={{ scale: 0.95 }}
                      >
                        {isSkillKey ? (
                          <div className="flex items-center justify-center h-full">
                            {(() => {
                              const IconComponent = item.skill.icon;
                              return <IconComponent size={45} style={{ color: item.skill.color }} />;
                            })()}
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                              {item.letter}
                            </span>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
                
                {/* Row 4 - Bottom Row */}
                <div className="grid grid-cols-9 gap-3 md:gap-4" style={{ marginLeft: '2rem' }}>
                  {['Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫', '↵'].map((letter, i) => (
                    <motion.div
                      key={`bottom-key-${i}`}
                      className={`aspect-square bg-white/[0.08] border border-white/30 rounded-lg opacity-60 hover:opacity-80 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer group ${
                        letter === '⌫' || letter === '↵' ? 'col-span-1.5' : ''
                      }`}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex items-center justify-center h-full">
                        <span className="text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                          {letter}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Currently Working On Section */}
      <section id="current-work" className="py-32 relative">
        {/* Background glass elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 left-16 w-44 h-44 bg-gradient-to-br from-green-300/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-16 w-36 h-36 bg-gradient-to-br from-teal-300/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2" style={{ lineHeight: '1.1' }}>
              Currently Working On
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Here's what I'm building and learning right now
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative bg-white/[0.08] backdrop-blur-3xl border border-white/40 dark:border-white/25 rounded-3xl p-8 shadow-2xl overflow-hidden"
            style={{
              backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
              WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
              boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }}
          >
            {/* Glass reflection overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-70"></div>
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Current Project */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    {/* <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-white/30">
                      <div className="text-2xl">🚀</div>
                    </div> */}
                    <div>
                      <h3 className="text-xl font-bold text-green-400">AI-Powered LCA Framework with LLM</h3>
                      <p className="text-sm text-foreground/60">Accepted Research Project</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    Building RAG-integrated pipeline for data extraction from literature papers to predict the environmental impact of biomass gasification techonlogies using LLM.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {/* <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400">Next.js</span> */}
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400">AI/ML</span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400">Python</span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400">LLM</span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400">RAG</span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400">Data Extraction</span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400">Data Analysis</span>
                    <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-sm text-green-400">Data Visualization</span>
                  </div>
                </div>

                {/* Learning */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    {/* <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-white/30">
                      <div className="text-2xl">📚</div>
                    </div> */}
                    <div>
                      <h3 className="text-xl font-bold text-purple-400">AI Chatbot Applications</h3>
                      <p className="text-sm text-foreground/60">Collaborating Project</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">
                    Collaborating another Bucknell student to build a web application for AiDvocate AI, a company that leverages the power of ethical AI to make positive impact on patient care, employment rights, and human rights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-400">React</span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-400">JavaScript</span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-400">Next JS</span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-400">Tailwind</span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-400">Python</span>
                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-400">AI/ML</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar 1*/}
              <div className="mt-8">
                <div className="flex justify-between text-sm text-foreground/60 mb-2">
                  <span>AI-Powered LCA Framework Progress</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-green-500 to-teal-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>

              {/* Progress Bar 2 - AI Chatbot Applications */}
              <div className="mt-8">
                <div className="flex justify-between text-sm text-foreground/60 mb-2">
                  <span>AI Chatbot Progress</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "25%" }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Interests Section */}
      <section id="interests" className="py-32 relative">
        {/* Background glass elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 left-1/4 w-44 h-44 bg-gradient-to-br from-orange-300/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-1/4 w-36 h-36 bg-gradient-to-br from-yellow-300/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2" style={{ lineHeight: '1.1' }}>
              Beyond Code
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              A glimpse into my life outside of development
            </p>
          </motion.div>

          {/* Centered Interest Boxes Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6"
          >
              {[
                {
                  icon: "🏀",
                  title: "Basketball",
                  description: "I have been playing basketball since I was 9 and I enjoy watching the NBA with my friends. My favorite player is Stephen Curry.",
                  color: "from-orange-500/20 to-red-500/20",
                  borderColor: "border-orange-500/30"
                },
                {
                  icon: "🎵",
                  title: "Music",
                  description: "I listen to music all the time even when I'm sleeping. My favorite genre is K-pop.",
                  color: "from-purple-500/20 to-pink-500/20",
                  borderColor: "border-purple-500/30"
                },
                {
                  icon: "✈️",
                  title: "Travel",
                  description: "I love travelling with my friends and family. It helps me to relax and get away from the stress of school and work.",
                  color: "from-blue-500/20 to-cyan-500/20",
                  borderColor: "border-blue-500/30"
                },
                {
                  icon: "🍿",
                  title: "Movies",
                  description: "I love binging K-dramas and movies over the weekend while having dinner",
                  color: "from-green-500/20 to-teal-500/20",
                  borderColor: "border-green-500/30"
                }
              ].map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="group"
                >
                  <div className={`relative bg-white/[0.08] backdrop-blur-xl border ${interest.borderColor} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-400 hover:scale-105 overflow-hidden`}
                       style={{
                         backdropFilter: 'blur(30px) saturate(180%)',
                         WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                         boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 20px 40px -12px rgba(0, 0, 0, 0.2)'
                       }}>
                    {/* Optimized glass reflection overlay */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${interest.color} opacity-50`}></div>
                    
                    <div className="relative z-10 flex items-center space-x-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          {interest.isImage ? (
                            <img 
                              src={interest.icon} 
                              alt={interest.title}
                              className="w-10 h-10 object-contain"
                            />
                          ) : (
                            <div className="text-2xl">{interest.icon}</div>
                          )}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground">
                          {interest.title}
                        </h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Simplified hover glow effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300`}></div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-32 relative">
        {/* Background glass elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-br from-green-300/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-36 h-36 bg-gradient-to-br from-cyan-300/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2" style={{ lineHeight: '1.1' }}>
              Resume
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              See my resume to learn more about my experience and qualifications
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative bg-white/[0.08] backdrop-blur-3xl border border-white/40 dark:border-white/25 rounded-3xl p-8 shadow-2xl overflow-hidden"
                 style={{
                   backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                   WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                   boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                 }}
            >
              {/* Glass reflection overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-70"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-white/30">
                  <div className="text-3xl">📄</div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">Nguyen Le - Resume</h3>
                <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
                  Full-stack developer and ML researcher with experience in modern web technologies, AI/ML.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-white/[0.05] backdrop-blur-xl border border-white/20 rounded-xl">
                    <div className="text-2xl font-bold text-blue-400 mb-2">2+</div>
                    <div className="text-sm text-foreground/70">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white/[0.05] backdrop-blur-xl border border-white/20 rounded-xl">
                    <div className="text-2xl font-bold text-purple-400 mb-2">10+</div>
                    <div className="text-sm text-foreground/70">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-white/[0.05] backdrop-blur-xl border border-white/20 rounded-xl">
                    <div className="text-2xl font-bold text-green-400 mb-2">15+</div>
                    <div className="text-sm text-foreground/70">Technologies</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/Radley's Resume.docx.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500/80 to-purple-500/80 backdrop-blur-xl border border-white/30 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-xl">📥</div>
                    Download PDF
                  </motion.a>
                  <motion.a
                    href="/Radley's Resume.docx.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.08] backdrop-blur-xl border border-white/30 rounded-xl text-foreground font-medium transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-xl">👁️</div>
                    View Online
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2" style={{ lineHeight: '1.1' }}>
              Featured Work
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Projects that showcase my expertise and creativity
            </p>
          </motion.div>

                    {/* All Projects in Featured Format */}
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${project.id}`} className="group block">
                  <motion.div 
                    className="relative bg-white/[0.06] backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.01] cursor-pointer"
                    style={{ 
                      backdropFilter: 'blur(20px) saturate(150%)', 
                      WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                    }}
                    whileHover={{ y: -8 }}
                  >
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Project Preview */}
                      <div className="relative aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 overflow-hidden">
                        {project.image ? (
                          <>
                            <Image
                              src={project.image}
                              alt={`${project.title} - Project Screenshot`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/40"></div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                              <div className="text-center text-white p-4">
                                <div className="w-16 h-16 mx-auto mb-3 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                                  <div className="text-xl">✨</div>
                                </div>
                                <p className="text-sm opacity-90">Click to explore project</p>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                            <div className="relative text-center text-white/80 p-8 flex items-center justify-center h-full">
                              <div>
                                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                                  <div className="text-2xl">✨</div>
                                </div>
                                <p className="text-sm opacity-90">Click to explore project</p>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                      
                      {/* Project Details */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-sm text-purple-400 font-medium mb-2">
                            {index === 0 ? "Featured Project" : "Project"}
                          </div>
                          <h3 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                            {project.title}
                          </h3>
                          <p className="text-foreground/70 mb-6 leading-relaxed text-lg">
                            {project.shortDescription}
                          </p>
                          
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.slice(0, 4).map((tech) => (
                              <span 
                                key={tech} 
                                className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-sm text-foreground/80"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-4">
                            {project.paperUrl && (
                              <a 
                                href={project.paperUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl text-green-400 hover:bg-green-500/30 transition-all duration-300"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FiFileText size={16} />
                                Research Paper
                              </a>
                            )}
                            {project.demoUrl && (
                              <a 
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl text-blue-400 hover:bg-blue-500/30 transition-all duration-300"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FiExternalLink size={16} />
                                Live Demo
                              </a>
                            )}
                            {project.githubUrl && (
                              <a 
                                href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl text-purple-400 hover:bg-purple-500/30 transition-all duration-300"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <FiGithub size={16} />
                                View Code
                              </a>
                            )}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        {/* Background glass elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-16 right-16 w-44 h-44 bg-gradient-to-br from-cyan-300/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 left-16 w-32 h-32 bg-gradient-to-br from-blue-300/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2" style={{ lineHeight: '1.1' }}>
              Experience
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              My professional journey and achievements
            </p>
          </motion.div>
          {/* Clean Zigzag Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Subtle Timeline Spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/30 to-cyan-500/20 -translate-x-1/2"></div>
            
            <div className="space-y-20">
              {[
                { 
                  role: "Senior Frontend Developer", 
                  company: "Tech Company", 
                  year: "2022-Present",
                  description: "Leading frontend architecture and mentoring junior developers",
                  achievements: ["Built responsive dashboards", "Improved performance by 40%", "Led team of 4 developers"],
                  technologies: ["React", "TypeScript", "Next.js"]
                },
                { 
                  role: "Full Stack Developer", 
                  company: "Startup Inc", 
                  year: "2020-2022",
                  description: "Developed full-stack applications from concept to deployment",
                  achievements: ["Launched 3 major products", "Reduced load times by 60%", "Implemented CI/CD pipeline"],
                  technologies: ["Node.js", "Python", "React"]
                },
                { 
                  role: "Frontend Developer", 
                  company: "Agency Co", 
                  year: "2018-2020",
                  description: "Created modern web experiences for diverse client portfolios",
                  achievements: ["Delivered 15+ client projects", "Maintained 98% client satisfaction", "Built responsive designs"],
                  technologies: ["JavaScript", "CSS", "HTML"]
                },
                { 
                  role: "Junior Developer", 
                  company: "Digital Solutions", 
                  year: "2017-2018",
                  description: "Started my development journey building small websites and learning core technologies",
                  achievements: ["Completed 20+ small projects", "Learned responsive design principles", "Mastered version control"],
                  technologies: ["HTML", "CSS", "JavaScript"]
                }
              ].map((job, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex ${isLeft ? 'justify-start' : 'justify-end'} relative`}
                  >
                    {/* Timeline Dot - positioned directly on the vertical bar */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white/20 shadow-lg z-10"></div>
                    
                    {/* Year Badge - positioned relative to the dot */}
                    <div className={`absolute top-1/2 -translate-y-1/2 z-10 ${
                      isLeft ? 'left-1/2 ml-3' : 'right-1/2 mr-3'
                    }`}>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/30 rounded-full">
                        <span className="text-sm font-medium text-blue-400">{job.year}</span>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="max-w-md w-full"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative bg-white/[0.08] backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-white/50 transition-all duration-500 overflow-hidden">
                        {/* Glass reflection */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-60"></div>
                        <div className="relative z-10">
                          {/* Role and Company */}
                          <div className="mb-3">
                            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-blue-400 transition-colors duration-300">
                              {job.role}
                            </h3>
                            <p className="text-lg text-purple-400 font-medium">{job.company}</p>
                          </div>
                          {/* Description */}
                          <p className="text-foreground/70 mb-4 leading-relaxed">
                            {job.description}
                          </p>
                          {/* Key Achievements */}
                          <div className="mb-4 text-left">
                            <h4 className="text-sm font-semibold text-foreground/80 mb-2">Key Achievements:</h4>
                            <ul className="space-y-1 text-sm text-foreground/60">
                              {job.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, i) => (
                              <span key={i} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-foreground/70 hover:bg-white/20 transition-colors cursor-pointer">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Hover accent */}
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-blue-400/40 to-purple-400/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>





      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        {/* Background glass elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-300/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-gradient-to-br from-pink-300/10 to-transparent rounded-full blur-3xl"></div>
        </div>
                <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight pb-2" style={{ lineHeight: '1.1' }}>
              Let's Work Together
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's connect
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Contact Info & Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-8 rounded-3xl bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 shadow-2xl"
                   style={{
                     backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                     WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                     boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                   }}
              >
                {/* Glass reflection overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-white/5 to-transparent opacity-70"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-8 text-center">Get In Touch</h3>
                  
                  {/* Social Media Circular Bubbles */}
                  <div className="grid grid-cols-5 gap-4 sm:gap-6 justify-items-center max-w-sm sm:max-w-md mx-auto">
                    {/* Email */}
                    <MagneticButton>
                      <a
                        href="mailto:radleyle1507@gmail.com"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 hover:bg-white/[0.15] dark:hover:bg-white/[0.08] transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-110 flex items-center justify-center group interactive relative overflow-hidden"
                        style={{
                          backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                          WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-70"></div>
                        <FiMail 
                          size={22} 
                          className="relative z-10 text-blue-400 group-hover:text-blue-300 transition-all duration-300 group-hover:scale-110" 
                        />
                      </a>
                    </MagneticButton>

                    {/* LinkedIn */}
                    <MagneticButton>
                      <a
                        href="https://linkedin.com/in/radley-le/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 hover:bg-white/[0.15] dark:hover:bg-white/[0.08] transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-110 flex items-center justify-center group interactive relative overflow-hidden"
                        style={{
                          backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                          WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-70"></div>
                        <FiLinkedin 
                          size={22} 
                          className="relative z-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" 
                        />
                      </a>
                    </MagneticButton>

                    {/* GitHub */}
                    <MagneticButton>
                      <a
                        href="https://github.com/radleyle/"
          target="_blank"
          rel="noopener noreferrer"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 hover:bg-white/[0.15] dark:hover:bg-white/[0.08] transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-110 flex items-center justify-center group interactive relative overflow-hidden"
                        style={{
                          backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                          WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-70"></div>
                        <FiGithub 
                          size={22} 
                          className="relative z-10 text-gray-300 group-hover:text-white transition-all duration-300 group-hover:scale-110" 
                        />
                      </a>
                    </MagneticButton>

                    {/* Instagram */}
                    <MagneticButton>
                      <a
                        href="https://instagram.com/radley.le_/"
          target="_blank"
          rel="noopener noreferrer"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 hover:bg-white/[0.15] dark:hover:bg-white/[0.08] transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-110 flex items-center justify-center group interactive relative overflow-hidden"
                        style={{
                          backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                          WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-70"></div>
                        <FaInstagram 
                          size={22} 
                          className="relative z-10 text-pink-400 group-hover:text-pink-300 transition-all duration-300 group-hover:scale-110" 
                        />
                      </a>
                    </MagneticButton>

                    {/* Facebook */}
                    <MagneticButton>
                      <a
                        href="https://facebook.com/radley.le/"
          target="_blank"
          rel="noopener noreferrer"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/[0.08] dark:bg-white/[0.04] backdrop-blur-3xl border border-white/40 dark:border-white/25 hover:bg-white/[0.15] dark:hover:bg-white/[0.08] transition-all duration-500 shadow-2xl hover:shadow-3xl hover:scale-110 flex items-center justify-center group interactive relative overflow-hidden"
                        style={{
                          backdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                          WebkitBackdropFilter: 'blur(40px) saturate(200%) brightness(1.15)',
                          boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.25), 0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                        }}
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-70"></div>
                        <FaFacebookF 
                          size={22} 
                          className="relative z-10 text-blue-600 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110" 
                        />
                      </a>
                    </MagneticButton>
                  </div>
                  
                  <div className="mt-12 pt-6 border-t border-white/20">
                    <div className="text-center">
                      <p className="text-sm text-foreground/60 mb-2">
                        Usually responds within 24 hours
                      </p>
                      <p className="text-xs text-foreground/40">
                        Feel free to reach out on any platform
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-foreground/10">
        <div className="max-w-6xl mx-auto text-center text-foreground/60">
          <p>&copy; 2025 Nguyen Le. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
