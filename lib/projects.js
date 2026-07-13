// Project data with detailed information
export const projects = [
  {
    id: "pc-performance-copilot",
    title: "PC Performance Copilot",
    label: "Personal Project",
    shortDescription: "A system-level performance monitoring and diagnosis tool that collects OS telemetry, detects anomalies with rules and statistics, and uses an LLM agent as an explanation layer to answer plain-English questions about why your PC is slowing down.",
    description: "PC Performance Copilot reads hardware and software metrics directly from the operating system, stores them over time, and detects performance anomalies using rules and statistical analysis. An LLM agent serves only as the final explanation layer — not the source of truth — translating evidence-backed findings into actionable diagnoses.",
    overview: "When your machine lags, you can ask a plain-English question like why your PC slows down when opening VS Code. The app correlates your question with collected telemetry, ranks root causes by evidence, and returns an actionable diagnosis. By separating telemetry collection, anomaly detection, and LLM explanation into distinct layers, the system avoids the pitfalls of vibe-based debugging and delivers diagnoses grounded in real system data.",
    image: "/projects/diagnoser.png",
    technologies: ["Rust", "LangGraph", "FastAPI", "React", "Python", "AI Agent"],
    features: [
      "System-level hardware and software metric collection from the operating system",
      "Time-series telemetry storage for trend and anomaly analysis",
      "Rule-based and statistical anomaly detection independent of the LLM",
      "Evidence-ranked root cause analysis correlated to user questions",
      "LangGraph-powered AI agent for plain-English diagnosis explanations",
      "FastAPI backend with React frontend for interactive performance insights",
      "Rust components for efficient low-level system data access"
    ],
    challenges: [
      "Collecting reliable cross-platform system metrics without excessive performance overhead",
      "Separating correlation from causation when ranking performance root causes",
      "Using an LLM for explanation without letting it become the source of truth for diagnoses"
    ],
    solutions: [
      "Built a dedicated telemetry pipeline in Rust for efficient OS-level metric collection and storage",
      "Implemented rules and statistical thresholds to flag anomalies before any LLM reasoning",
      "Designed a LangGraph agent that only interprets pre-ranked, evidence-backed findings for the user"
    ],
    demoUrl: "",
    githubUrl: "https://github.com/radleyle/pc-performance-diagnoser",
    status: "In Progress",
    timeline: "Ongoing"
  },
  {
    id: "flashcard-saas",
    title: "Flashy",
    label: "Full-Stack SaaS",
    shortDescription: "A full-stack SaaS study app for building flashcard decks and drilling them until they stick — with Stripe subscriptions, AI tools, classes, and six study modes.",
    description: "Full-stack study SaaS built with Next.js 14, Clerk, Firebase Firestore, Stripe, and OpenRouter — six study modes, AI card generation, classes, and Free/Basic/Pro subscriptions.",
    overview: "Flashy is a full-stack study platform for building flashcard decks and drilling them until they stick. Create sets from notes or by hand, organize them in folders, share public links, join classes, and track streaks and daily goals. AI generates cards from pasted notes, coaches wrong answers, and builds exam study plans. Study modes include Due Today (spaced review), Flashcards, Learn, Write, Match, and Test — all keyboard-friendly. Free, Basic, and Pro plans unlock more decks and daily AI actions.\n\nOn the engineering side, Flashy is a Next.js 14 App Router app with API routes for AI, Stripe checkout, billing webhooks, and Firebase token minting. Clerk handles auth and protected routes; Firebase Admin issues custom tokens so the client reads and writes Firestore under security rules. Stripe powers Basic/Pro subscriptions and the customer portal. OpenRouter runs server-side AI (generate, explain, expand, coach, difficulty tags, study plans) so users never bring their own API key. Tailwind CSS and next/font (Syne + Figtree) cover light/dark UI; Vercel hosts production.",
    image: "/projects/saas.png",
    technologies: [
      "Next.js",
      "React",
      "Stripe",
      "Clerk",
      "Firebase Firestore",
      "Stripe",
      "Tailwind CSS",
      "OpenRouter",
      "Vercel",
    ],
    techStack: [
      {
        layer: "App framework",
        technology: "Next.js 14 (App Router) + React",
        role: "Pages, study UI, and API routes (/api/...) for AI, checkout, billing, and Firebase tokens.",
      },
      {
        layer: "Styling",
        technology: "Tailwind CSS",
        role: "Design system (colors, layout, light/dark theme) across marketing and app screens. Fonts: Syne (display) + Figtree (body) via next/font.",
      },
      {
        layer: "Auth",
        technology: "Clerk",
        role: "Sign up / log in, session cookies, and protected routes (library, create, study, account, etc.).",
      },
      {
        layer: "Database",
        technology: "Firebase Firestore",
        role: "Stores users, decks, cards, folders, study sessions, classes, and plan usage.",
      },
      {
        layer: "Auth bridge",
        technology: "Firebase Admin + custom tokens",
        role: "After Clerk login, the server mints a Firebase token so the browser can read/write Firestore securely under your rules.",
      },
      {
        layer: "Payments",
        technology: "Stripe",
        role: "Subscription checkout for Basic/Pro, webhooks to update the user's plan, optional customer portal for billing.",
      },
      {
        layer: "AI",
        technology: "OpenRouter",
        role: "Powers generate-from-notes, explain, expand, coach, difficulty tags, and study plans (server-side; users don't need their own key).",
      },
      {
        layer: "Hosting",
        technology: "Vercel",
        role: "Runs the Next.js app in production and serves your domain.",
      },
    ],
    features: [
      "Create decks with terms, definitions, optional image URLs, and difficulty tags per card",
      "Folders, search, drag-and-drop, bulk move/delete, and undo after deleting a deck",
      "Import and export CSV; import notes from text files or pasted PDF text to generate cards",
      "AI: generate cards from notes, add related cards, tag difficulty, explain cards, and wrong-answer coach in Write mode",
      "AI day-by-day study plan before an exam (uses daily plan quota)",
      "Study modes: Due Today (spaced review), Flashcards, Learn, Write, Match, and Test with score",
      "Keyboard shortcuts during study (press ? for help)",
      "Public set sharing, discover and copy public sets, classes with join codes and shared decks",
      "Streaks, recent study sessions, daily card goals, optional reminders, and plan usage tracking",
      "Light and dark theme with Free, Basic, and Pro pricing tiers"
    ],
    challenges: [
      "Bridging Clerk sessions to Firebase Firestore securely so client writes stay within custom security rules",
      "Balancing OpenRouter AI quality with per-plan daily quotas without exposing API keys to the browser",
      "Keeping Stripe webhook plan updates, study state, and six study modes consistent across devices"
    ],
    solutions: [
      "Server-side Firebase Admin custom tokens after Clerk login, with Firestore rules scoped per user",
      "Next.js API routes proxy all OpenRouter calls with plan-aware quotas and server-only credentials",
      "Stripe webhooks update plan tier in Firestore; unified session model powers all study modes from one deck schema"
    ],
    demoUrl: "https://flashcard-saas-two-phi.vercel.app",
    githubUrl: "https://github.com/radleyle/flashcard-saas",
    paperUrl: "",
    status: "Completed",
    timeline: "4 weeks"
  },
  {
    id: "AI-powered-LCA-framework",
    title: "AI-powered LCA Framework",
    label: "Summer Research Project",
    shortDescription: "A Machine Learning model for predicting environmental impact of biomass gasification technologies that outperforms traditional LCA framework by 30%.",
    description: "A machine learning-driven research framework for biomass gasification that accelerates hydrogen production optimization through AI-powered literature analysis and environmental impact prediction. Features advanced RAG system, multi-technology LCA comparison, and automated experimental data extraction from 60+ scientific papers.",
    overview: "This research project addresses the critical need for sustainable hydrogen production by leveraging AI to optimize biomass gasification processes. The framework revolutionizes traditional Life Cycle Assessment methods by automating data extraction from scientific literature and providing predictive environmental impact analysis. This work demonstrates a 30% improvement over conventional LCA approaches while analyzing 18 environmental impact categories across 4 gasification technologies. The project bridges the gap between academic research and practical environmental decision-making, offering researchers and policymakers a powerful tool for evaluating clean energy technologies.",
    image: "/projects/environmental_impact_model_analysis.png",
    technologies: ["Machine Learning", "RAG", "Python", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy"],
    features: [
      "Advanced RAG system for scientific literature analysis and data extraction",
      "Multi-technology gasification comparison (Steam, CO₂, Plasma, Supercritical Water)",
      "Life Cycle Assessment (LCA) analysis with 18 environmental impact categories",
      "Machine learning models for environmental impact prediction",
      "Open access web research agent for automated literature discovery",
      "Interactive visualization dashboard for LCA results and technology comparison",
      "ChromaDB vector database with semantic search capabilities",
      "Automated experimental data extraction with unit standardization (mol/kg, mmol/g)"
    ],
    challenges: [
      "Standardizing heterogeneous experimental data across diverse research papers with inconsistent units and methodologies",
      "Integrating multi-dimensional LCA analysis with real-time gasification parameters for accurate environmental impact prediction",
      "Scaling RAG system performance to handle large scientific literature databases while maintaining query accuracy and response speed"
    ],
    solutions: [
      "Developed unit-aware parsing system with automated conversion between mol/kg and mmol/g for consistent experimental data comparison",
      "Built multi-output machine learning model using Random Forest and Gradient Boosting to predict 18 environmental impact categories from operational parameters",
      "Implemented ChromaDB vector database with semantic search and dual embedding models (local Ollama + OpenAI) for scalable literature analysis"
    ],
    demoUrl: "",
    githubUrl: "https://github.com/radleyle/biomass-gasification-for-hydrogen-production",
    status: "Completed",
    timeline: "6 months"
  },
  {
    id: "dungoen-2d-game",
    title: "Dungeon Crawler 2D Game",
    label: "CSCI205 Final Project",
    shortDescription: "Collaborated in a group of 4 students to build a Java-based 2D dungeon crawler game that combines strategic combat, puzzle-solving, and tile-based exploration mechanics, featuring dynamic enemy interaction, interactive quiz systems, and multi-level progression through DANA 325 to defeat Professor Lily as the final boss.",
    description: "Java-based dungeon crawler that challenges players through strategic combat and puzzle-solving. Features dynamic enemy interactions, interactive quiz systems, and tile-based exploration mechanics that combine education with engaging gameplay to create a unique learning experience.",
    overview: "Capstone project for CSCI 205 demonstrating object-oriented design and collaborative development. Built a complete dungeon crawler from scratch using Java Swing, implementing complex systems like collision detection, and state management. The unique integration of educational quizzes with traditional combat mechanics showcases both technical proficiency and creative problem-solving in game development.",
    image: "/projects/dungeon.png",
    technologies: ["Java", "JavaFX", "OOP", "Object-Oriented Programming", "Game Development", "2D Game Development", "Tile-Based Exploration", "Dynamic Enemy AI", "Interactive Quiz Systems", "Multi-Level Progression"],
    features: [
      "Tile-based 2D dungeon exploration with collision detection",
      "Dynamic enemy AI with hostility detection and pathfinding",
      "Interactive quiz system with laptop chest containers",
      "Real-time combat mechanics with melee weapons",
      "Inventory management system for items and equipment",
      "Multi-level progression from DANA 325 to final boss",
      "Sprite-based character animations and directional movement",
      "Health system with visual HP indicators"
    ],
    challenges: [
      "Managing complex collision detection between multiple entities in real-time",
      "Implementing dynamic enemy interactions that responds intelligently to player actions (chasing after player)",
      "Fit player and weapon animation into a single square box"
    ],
    solutions: [
      "Developed predictive hitbox system with efficient tile-based collision checking",
      "Created state-driven enemy behavior with hostility detection and pathfinding algorithms",
      "Implemented centralized GameController with enum-based state management for seamless transitions"
    ],
    demoUrl: "https://www.loom.com/share/1bb2f74a12474038b498b5b672981e9e",
    githubUrl: "https://github.com/AleenaSultan1/Simulation-Game",
    status: "Completed",
    timeline: "1 month"
  },
  {
    id: "algoverse-research",
    title: "Entropy-Based Dynamic Hybrid Retrieval for Adaptive Query Weighting in RAG Pipelines",
    label: "Published Research",
    shortDescription: "Collaborated in a group of 4 to research on entropy-driven hybrid RAG pipeline with dynamic BM25–FAISS weighting, boosting LLM-as-a-Judge scores by up to 7% on TriviaQA and HotpotQA.",
    description: "Adaptive hybrid retrieval system leveraging entropy-based weighting of BM25 and FAISS, enhancing query-specific relevance. Achieves statistically significant LLM-as-a-Judge gains on TriviaQA, with lightweight integration into standard RAG pipelines for scalable, domain-agnostic deployment.",
    overview: "Our work has been accepted to ICML VecDB 2025. This research introduces a cutting-edge entropy-based dynamic hybrid retrieval framework that transforms how sparse (BM25) and dense (FAISS) retrieval methods are combined in retrieval-augmented generation pipelines. Instead of relying on static weighting, the system adaptively rebalances retrieval contributions using normalized Shannon entropy as a proxy for query-specific confidence, iteratively optimizing until convergence. By holding initial retrieval results fixed and applying multi-round re-ranking, the approach avoids repeated indexing overhead while improving relevance for diverse query types. Evaluated on HotPotQA and TriviaQA, the model demonstrated statistically significant LLM-as-a-Judge gains on TriviaQA (p < 0.01) and marginal but consistent improvements on HotPotQA, with an optimal convergence threshold of ϵ = 0.10. Its retriever-agnostic, lightweight design enables seamless integration into existing RAG pipelines, delivering domain-agnostic adaptability, scalable performance, and improved robustness against semantic ambiguity without sacrificing runtime efficiency.",
    image: "/projects/algoverse3.png",
    technologies: ["Python", "Transformers", "FAISS", "BM25", "spaCy","Hugging Face"],
    features: [
      "Adaptive weighting of sparse (BM25) and dense (FAISS) retrieval methods",
      "Entropy-based query-specific relevance optimization",
      "Multi-round iterative re-ranking without repeated indexing",
      "Retriever-agnostic design for broad dataset compatibility",
      "Statistically validated performance gains using LLM-as-a-Judge",
      "Lightweight integration into existing RAG pipelines",
      "Configurable convergence thresholds for efficiency tuning",
      "Robust handling of semantically ambiguous queries"
    ],
    challenges: [
      "Balancing precision and recall between sparse and dense retrieval methods",
      "Adapting retrieval weights to diverse and unpredictable query types",
      "Maintaining high performance without excessive computational overhead"
    ],
    solutions: [
      "Integrated BM25 and FAISS in a hybrid pipeline with complementary strengths",
      "Applied normalized Shannon entropy to dynamically adjust retrieval weighting per query",
      "Held initial retrieval results fixed and used iterative re-ranking to optimize relevance efficiently"
    ],
    demoUrl: "",
    githubUrl: "",
    paperUrl: "https://openreview.net/forum?id=bwGaZOVo0c",
    status: "Completed",
    timeline: "5 months"
  }
];

export function getProjectById(id) {
  return projects.find(project => project.id === id);
}

export function getAllProjects() {
  return projects;
}