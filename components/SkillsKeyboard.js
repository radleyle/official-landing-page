"use client";

import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
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
  SiAnaconda,
  SiRust,
  SiFirebase,
  SiStripe,
  SiLangchain,
  SiDocker,
  SiAmazon,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

export default function SkillsKeyboard() {
  return (
    <>
{/* Skills Keyboard Layout */}
<div className="relative max-w-6xl mx-auto mb-16">
  <div className="relative">
    {/* Interactive Skills Keyboard */}
    <div className="relative max-w-7xl mx-auto keyboard-fade-mask">
      {/* Top Row - Function Keys (decorative edge) */}
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
      
      {/* Row 4 - ZXCVBNM Row */}
      <div className="grid grid-cols-9 gap-3 md:gap-4 mb-3 md:mb-4" style={{ marginLeft: '2rem' }}>
        {[
          { letter: 'Z', skill: null },
          { letter: 'X', skill: { icon: SiRust, color: '#DEA584' } },
          { letter: 'C', skill: { icon: SiFirebase, color: '#FFCA28' } },
          { letter: 'V', skill: { icon: SiStripe, color: '#635BFF' } },
          { letter: 'B', skill: { icon: SiLangchain, color: '#FFFFFF' } },
          { letter: 'N', skill: { icon: SiDocker, color: '#2496ED' } },
          { letter: 'M', skill: { icon: SiAmazon, color: '#FF9900' } },
          { letter: '⌫', skill: null, edge: true },
          { letter: '↵', skill: null, edge: true },
        ].map((item, i) => {
          const isSkillKey = item.skill !== null;

          return (
            <motion.div
              key={`bottom-key-${i}`}
              className={`aspect-square bg-white/[0.08] border border-white/30 rounded-lg transition-all duration-300 shadow-lg cursor-pointer group relative overflow-hidden ${
                isSkillKey
                  ? 'hover:scale-110'
                  : 'opacity-60 hover:opacity-80 hover:shadow-xl'
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

      {/* Row 5 - Space Bar (decorative edge) */}
      <div className="flex justify-center mt-1 md:mt-2" style={{ marginLeft: '6rem', marginRight: '2rem' }}>
        <motion.div
          className="w-full h-11 md:h-12 bg-white/[0.08] border border-white/30 rounded-lg opacity-60 hover:opacity-80 transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.99 }}
        />
      </div>
    </div>
  </div>
</div>
    </>
  );
}
