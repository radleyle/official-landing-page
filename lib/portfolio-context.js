import { experience } from "./experience";
import { education } from "./education";
import { publications } from "./publications";
import { highlights } from "./highlights";
import { projects } from "./projects";

export function buildPortfolioContext() {
  const profile = {
    name: "Nguyen Le",
    title: "Full-Stack Developer · AI/ML Engineer · ICML Author",
    school: "Bucknell University",
    gpa: "3.5",
    email: "radleyle1507@gmail.com",
    github: "https://github.com/radleyle",
    linkedin: "https://linkedin.com/in/radley-le",
    currentRole: "Software Engineering Intern @ Astrio (May 2026 – Present)",
  };

  const projectSummaries = projects.map((p) => ({
    id: p.id,
    title: p.title,
    label: p.label,
    impact: p.impact || null,
    status: p.status,
    timeline: p.timeline,
    shortDescription: p.shortDescription,
    technologies: p.technologies,
    techStack: p.techStack || null,
    githubUrl: p.githubUrl || null,
    demoUrl: p.demoUrl || null,
    paperUrl: p.paperUrl || null,
  }));

  const experienceSummaries = experience.map((e) => ({
    role: e.role,
    company: e.company,
    location: e.location,
    year: e.year,
    impact: e.impact || null,
    description: e.description,
    technologies: e.technologies,
  }));

  return JSON.stringify(
    {
      profile,
      highlights,
      experience: experienceSummaries,
      education,
      publications,
      projects: projectSummaries,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Python",
        "Tailwind CSS",
        "JavaScript",
        "Rust",
        "Firebase",
        "Stripe",
        "LangChain",
        "RAG",
        "Docker",
        "AWS",
        "TensorFlow",
        "PyTorch",
        "FastAPI",
        "OpenAI",
      ],
    },
    null,
    2
  );
}

export const PORTFOLIO_CHAT_SYSTEM_PROMPT = `You are a concise, professional assistant embedded on Nguyen Le's portfolio website. Recruiters and visitors use you to learn about his background.

Rules:
- Answer ONLY using the portfolio context provided below.
- Be direct and recruiter-friendly: lead with the most relevant fact, then brief supporting detail.
- Keep answers to 2–4 sentences unless the user asks for more detail.
- For project or role questions, mention company/context, tech stack, and impact when available.
- If information is not in the context, say you don't have that detail and suggest contacting Nguyen at radleyle1507@gmail.com or via the site's contact section.
- Never invent employers, dates, technologies, or achievements.
- Do not mention that you are an AI unless asked.`;
