// Project data with detailed information
export const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    shortDescription: "Full-stack e-commerce platform achieving 40% faster load times and 25% higher conversion rates with seamless Stripe integration.",
    description: "A high-performance e-commerce solution that increased client sales by 35% through optimized user experience and lightning-fast checkout flows. Features advanced product management, intelligent search, and enterprise-grade security.",
    image: "/api/placeholder/800/600",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management",
      "Responsive design for all devices",
      "SEO optimized with Next.js"
    ],
    challenges: [
      "Implementing secure payment processing while maintaining smooth UX",
      "Optimizing database queries for fast product search and filtering",
      "Building a scalable admin dashboard with real-time updates"
    ],
    solutions: [
      "Used Stripe's secure payment APIs with comprehensive error handling",
      "Implemented database indexing and caching strategies for optimal performance",
      "Built modular components with React and implemented real-time updates using WebSockets"
    ],
    demoUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    status: "Completed",
    timeline: "3 months"
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    shortDescription: "Real-time collaborative platform that boosted team productivity by 60% with intuitive drag-and-drop workflows and live updates.",
    description: "Revolutionary task management solution used by 500+ teams to streamline workflows and increase project completion rates by 45%. Features real-time collaboration, advanced analytics, and seamless integrations with popular tools.",
    image: "/api/placeholder/800/600",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "Material-UI"],
    features: [
      "Real-time collaborative task boards",
      "Drag-and-drop task organization",
      "Team member assignment and notifications",
      "Project progress tracking and analytics",
      "File attachments and comments",
      "Custom project templates",
      "Time tracking and reporting",
      "Mobile-responsive design"
    ],
    challenges: [
      "Ensuring real-time synchronization across multiple users",
      "Building intuitive drag-and-drop interfaces",
      "Scaling the application for large teams"
    ],
    solutions: [
      "Implemented WebSocket connections with Socket.io for real-time updates",
      "Used React DnD library with custom optimization for smooth interactions",
      "Designed efficient database schemas and implemented caching strategies"
    ],
    demoUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/task-management",
    status: "Completed",
    timeline: "4 months"
  },
  {
    id: "weather-dashboard",
    title: "Weather Analytics Dashboard",
    shortDescription: "Advanced weather analytics platform processing 1M+ data points daily with 95% forecast accuracy and stunning visualizations.",
    description: "Enterprise-grade weather intelligence platform trusted by meteorologists and businesses. Delivers precise forecasting with beautiful data visualizations, serving 10K+ users daily across 50+ countries with 99.9% uptime.",
    image: "/api/placeholder/800/600",
    technologies: ["React", "D3.js", "Chart.js", "OpenWeather API", "Mapbox", "PWA"],
    features: [
      "Real-time weather data from multiple sources",
      "Interactive weather maps with multiple layers",
      "7-day weather forecasting",
      "Historical weather data analysis",
      "Customizable dashboard widgets",
      "Location-based weather alerts",
      "Offline functionality with PWA",
      "Data export capabilities"
    ],
    challenges: [
      "Integrating multiple weather APIs for comprehensive data",
      "Creating smooth, interactive data visualizations",
      "Implementing offline functionality for critical features"
    ],
    solutions: [
      "Built a unified API layer to aggregate data from multiple sources",
      "Used D3.js and Chart.js for performant, interactive visualizations",
      "Implemented service workers and local storage for offline capabilities"
    ],
    demoUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    status: "Completed",
    timeline: "2 months"
  }
];

export function getProjectById(id) {
  return projects.find(project => project.id === id);
}

export function getAllProjects() {
  return projects;
}