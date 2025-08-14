// Project data with detailed information
export const projects = [
  {
    id: "AI-powered-LCA-framework",
    title: "AI-powered LCA Framework",
    shortDescription: "A Machine Learning model for predicting environmental impact of biomass gasification technologies that outperforms traditional LCA framework by 30%.",
    description: "A machine learning-driven research framework for biomass gasification that accelerates hydrogen production optimization through AI-powered literature analysis and environmental impact prediction. Features advanced RAG system, multi-technology LCA comparison, and automated experimental data extraction from 60+ scientific papers.",
    overview: "This research project addresses the critical need for sustainable hydrogen production by leveraging AI to optimize biomass gasification processes. The framework revolutionizes traditional Life Cycle Assessment methods by automating data extraction from scientific literature and providing predictive environmental impact analysis. Successfully published at ICML VecDB 2025, this work demonstrates a 30% improvement over conventional LCA approaches while analyzing 18 environmental impact categories across 4 gasification technologies. The project bridges the gap between academic research and practical environmental decision-making, offering researchers and policymakers a powerful tool for evaluating clean energy technologies.",
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
    status: "In Progress",
    timeline: "3 months"
  },
  {
    id: "dungoen-2d-game",
    title: "Dungeon Crawler 2D Game",
    shortDescription: "A Java-based 2D dungeon crawler game that combines strategic combat, puzzle-solving, and tile-based exploration mechanics, featuring dynamic enemy AI, interactive quiz systems, and multi-level progression through DANA 325 to defeat Professor Lily as the final boss.",
    description: "Java-based dungeon crawler that challenges players through strategic combat and puzzle-solving. Features dynamic enemy AI, interactive quiz systems, and tile-based exploration mechanics that combine education with engaging gameplay to create a unique learning experience.",
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
      "Implementing dynamic enemy AI that responds intelligently to player actions",
      "Coordinating game state transitions across different gameplay modes"
    ],
    solutions: [
      "Developed predictive hitbox system with efficient tile-based collision checking",
      "Created state-driven enemy behavior with hostility detection and pathfinding algorithms",
      "Implemented centralized GameController with enum-based state management for seamless transitions"
    ],
    demoUrl: "https://www.loom.com/share/1bb2f74a12474038b498b5b672981e9e",
    githubUrl: "https://gitlab.bucknell.edu/sms081/csci205_final_project",
    status: "Completed",
    timeline: "1 month"
  },
  {
    id: "algoverse-research",
    title: "Entropy-Based Dynamic Hybrid Retrieval for Adaptive Query Weighting in RAG Pipelines",
    shortDescription: "Entropy-driven hybrid RAG pipeline with dynamic BM25–FAISS weighting, boosting LLM-as-a-Judge scores by up to 7% on TriviaQA and HotpotQA.",
    description: "Adaptive hybrid retrieval system leveraging entropy-based weighting of BM25 and FAISS, enhancing query-specific relevance. Achieves statistically significant LLM-as-a-Judge gains on TriviaQA, with lightweight integration into standard RAG pipelines for scalable, domain-agnostic deployment.",
    overview: "Our work has been accepted to ICML VecDB 2025. This research introduces a cutting-edge entropy-based dynamic hybrid retrieval framework that transforms how sparse (BM25) and dense (FAISS) retrieval methods are combined in retrieval-augmented generation pipelines. Instead of relying on static weighting, the system adaptively rebalances retrieval contributions using normalized Shannon entropy as a proxy for query-specific confidence, iteratively optimizing until convergence. By holding initial retrieval results fixed and applying multi-round re-ranking, the approach avoids repeated indexing overhead while improving relevance for diverse query types. Evaluated on HotPotQA and TriviaQA, the model demonstrated statistically significant LLM-as-a-Judge gains on TriviaQA (p < 0.01) and marginal but consistent improvements on HotPotQA, with an optimal convergence threshold of ϵ = 0.10. Its retriever-agnostic, lightweight design enables seamless integration into existing RAG pipelines, delivering domain-agnostic adaptability, scalable performance, and improved robustness against semantic ambiguity without sacrificing runtime efficiency.",
    image: "/projects/algoverse.png",
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
  },
  {
    id: "flashcard-saas",
    title: "Flashcard generator",
    shortDescription: "An AI-powered flashcard generator that creates personalized study cards from any topic using OpenAI's API, with Stripe payments and user authentication.",
    description: "More detailed description that explains what your project does and its main value proposition. This appears in the project detail page header.",
    overview: "AI Flashcards SaaS is a learning platform that leverages OpenAI's GPT models to automatically generate educational flashcards from any user-provided topic. Built with Next.js and React, the application features Clerk authentication for personalized experiences, Stripe integration for subscription management, and Firebase for real-time data storage. The AI system incorporates educational best practices including spaced repetition and progressive difficulty scaling to optimize learning retention. With a responsive Material-UI interface and cross-device synchronization, this full-stack SaaS application demonstrates modern web development techniques while transforming traditional study methods into an intelligent, adaptive learning experience.",
    image: "/projects/flashcard.png",
    technologies: ["JavaScript", "Next.js", "Stripe", "OpenAI", "React", "Tailwind CSS", "Node.js", "HTML", "CSS", "Firebase", "Clerk", "Pinecone"],
    features: [
      "AI-powered flashcard generation using OpenAI's GPT models for any subject",
      "Smart flashcard organization with logical difficulty progression",
      "User authentication and personalized learning experience via Clerk",
      "Stripe payment integration with subscription-based pricing tiers",
      "Firebase backend for secure data storage and real-time synchronization",
      "Responsive web design with Material-UI components for optimal UX",
      "Spaced repetition algorithms to optimize long-term memory retention",
      "Cross-device accessibility allowing study sessions anywhere with internet"
    ],
    challenges: [
      "Ensuring consistent and educationally sound flashcard generation from OpenAI's API responses",
      "Managing complex state between user authentication, payment processing, and flashcard data persistence",
      "Optimizing API costs while maintaining responsive user experience for flashcard generation"
    ],
    solutions: [
      "Implemented comprehensive prompt engineering with structured JSON response format and educational best practices built into the system prompt, ensuring consistent flashcard quality with proper front/back formatting",
      "Architected a unified data flow using Clerk for authentication, Stripe for payments, and Firebase for real-time data storage with proper middleware integration to handle session management across services",
      "Developed efficient caching strategies and implemented tiered pricing with usage limits, using gpt-3.5-turbo for cost optimization while maintaining quality through carefully crafted system prompts"
    ],
    demoUrl: "https://flashcard-saas-7h36dokpk-radley-les-projects.vercel.app/",
    githubUrl: "https://github.com/radleyle/flashcard-saas",
    paperUrl: "", // Only fill this if it's a research project
    status: "Completed", // Options: "Completed", "In Progress", "On Hold", "Beta"
    timeline: "2 weeks" // e.g., "3 months", "6 weeks", "1 year"
  }
];

export function getProjectById(id) {
  return projects.find(project => project.id === id);
}

export function getAllProjects() {
  return projects;
}