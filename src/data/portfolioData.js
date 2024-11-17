export const portfolioData = {
  user: {
    name: "Abhinav Rai",
    title: "Web Developer",
    bio: "Aspiring Software Engineer with expertise in frontend and backend technologies, including Next.js, Node.js, Python, and Django. Experienced in developing dynamic web applications and websites during a six-month internship at a startup. Eager to contribute to innovative projects and enhance my skills in a challenging role.",
    avatar: "/avatar.jpg",
  },
  stats: {
    projects: 4,
    experience: "6+ months",
    degree: "B.Tech in Computer Engineering",
    cgpa: 7.35,
  },
  social: {
    github: "https://github.com/abhinv98",
    linkedin: "https://www.linkedin.com/in/abhinav-rai-4351b1160/",
    instagram: "https://www.instagram.com/_abhiray_/",
  },
  // New additions: Skill-related data structures
  skillCategories: [
    { id: "all", label: "All Skills", icon: "Box" },
    { id: "frontend", label: "Frontend", icon: "Layout" },
    { id: "backend", label: "Backend", icon: "Server" },
    { id: "database", label: "Database", icon: "Database" },
    { id: "languages", label: "Languages", icon: "Code" },
    { id: "tools", label: "Tools & Frameworks", icon: "Book" },
  ],
  skillLevels: {
    EXPERT: {
      label: "Expert",
      description: "Deep knowledge, can architect solutions, mentor others",
      color: "bg-purple-500",
      textColor: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      icon: "Star",
    },
    ADVANCED: {
      label: "Advanced",
      description: "Strong grasp, can handle complex implementations",
      color: "bg-blue-500",
      textColor: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      icon: "GitBranch",
    },
    INTERMEDIATE: {
      label: "Intermediate",
      description: "Good working knowledge, regular usage",
      color: "bg-green-500",
      textColor: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      icon: "CheckCircle",
    },
    LEARNING: {
      label: "Learning",
      description: "Basic understanding, actively developing",
      color: "bg-yellow-500",
      textColor: "text-yellow-600 dark:text-yellow-400",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
      icon: "Zap",
    },
  },
  skills: {
    frontend: [
      {
        name: "Next.js",
        level: "ADVANCED",
        description: "Full-stack React Framework",
        details: {
          experience: "1+ year",
          projectCount: 3,
          recentProjects: ["Price Tracker", "Inkfusion", "Affiliate Dashboard"],
          keyAchievements: [
            "Built e-commerce price tracking system",
            "Implemented PDF chat interface",
            "Developing affiliate marketing dashboard",
          ],
        },
      },
      {
        name: "React",
        level: "ADVANCED",
        description: "Modern React Development",
        details: {
          experience: "1+ year",
          projectCount: 2,
          recentProjects: ["AI Text Summarizer", "E-commerce UI"],
          keyAchievements: [
            "Built SaaS application with Redux Toolkit",
            "Implemented Vite and Tailwind CSS",
            "Received positive feedback from 50+ users",
          ],
        },
      },
      {
        name: "Wix",
        level: "ADVANCED",
        description: "E-commerce Platform Development",
        details: {
          experience: "6+ months",
          projectCount: 2,
          recentProjects: ["Cogzart", "Circzles"],
          keyAchievements: [
            "Launched two successful e-commerce websites",
            "Integrated Razorpay payment system",
            "Achieved 100 sales in 45 days",
          ],
        },
      },
    ],
    backend: [
      {
        name: "Node.js",
        level: "ADVANCED",
        description: "Server-side JavaScript Runtime",
        details: {
          experience: "1+ year",
          projectCount: 2,
          recentProjects: ["Affiliate Dashboard", "API Development"],
          keyAchievements: [
            "Building robust backend systems",
            "Implementing authentication",
            "API development",
          ],
        },
      },
      {
        name: "ASP.NET",
        level: "INTERMEDIATE",
        description: "C# Web Framework",
        details: {
          experience: "6+ months",
          projectCount: 1,
          recentProjects: ["E-commerce Platform"],
          keyAchievements: [
            "Built comprehensive e-commerce platform",
            "Integrated PayPal and Stripe",
            "Implemented admin panel",
          ],
        },
      },
    ],
    database: [
      {
        name: "MongoDB",
        level: "ADVANCED",
        description: "NoSQL Database",
        details: {
          experience: "1+ year",
          projectCount: 2,
          recentProjects: ["Price Tracker", "Affiliate Dashboard"],
          keyAchievements: [
            "Data storage optimization",
            "Schema design",
            "Integration with Next.js",
          ],
        },
      },
      {
        name: "PostgreSQL",
        level: "INTERMEDIATE",
        description: "Relational Database",
        details: {
          experience: "6+ months",
          projectCount: 1,
          recentProjects: ["Inkfusion"],
          keyAchievements: [
            "Database implementation",
            "Data fetching with tRPC",
            "Schema management",
          ],
        },
      },
      {
        name: "SQL",
        level: "INTERMEDIATE",
        description: "Database Querying",
        details: {
          experience: "1+ year",
          projectCount: 2,
          recentProjects: ["E-commerce Platform", "Database Management"],
          keyAchievements: [
            "Query optimization",
            "Database design",
            "Data management",
          ],
        },
      },
    ],
    languages: [
      {
        name: "Python",
        level: "ADVANCED",
        description: "Backend & ML Development",
        details: {
          experience: "2+ years",
          projectCount: 3,
          recentProjects: ["ML Models", "NLP Applications"],
          keyAchievements: [
            "Machine learning implementation",
            "Deep learning projects",
            "Natural language processing",
          ],
        },
      },
      {
        name: "C#",
        level: "INTERMEDIATE",
        description: ".NET Development",
        details: {
          experience: "6+ months",
          projectCount: 1,
          recentProjects: ["E-commerce Platform"],
          keyAchievements: [
            "MVC architecture implementation",
            "Backend development",
            "Integration with ASP.NET",
          ],
        },
      },
    ],
    tools: [
      {
        name: "Version Control (Git)",
        level: "ADVANCED",
        description: "Code Version Control",
        details: {
          experience: "2+ years",
          projectCount: "All Projects",
          recentProjects: ["All Recent Projects"],
          keyAchievements: [
            "Project version management",
            "Collaboration workflows",
            "Code repository maintenance",
          ],
        },
      },
      {
        name: "APIs",
        level: "ADVANCED",
        description: "API Integration & Development",
        details: {
          experience: "1+ year",
          projectCount: 4,
          recentProjects: [
            "BrightData",
            "OpenAI",
            "RapidAPI",
            "Payment Gateways",
          ],
          keyAchievements: [
            "E-commerce price tracking",
            "AI text summarization",
            "Payment system integration",
          ],
        },
      },
      {
        name: "Natural Language Processing",
        level: "INTERMEDIATE",
        description: "NLP & AI Applications",
        details: {
          experience: "1+ year",
          projectCount: 2,
          recentProjects: ["AI Summarizer", "PDF Chat Interface"],
          keyAchievements: [
            "Text processing implementation",
            "LangChain integration",
            "OpenAI API utilization",
          ],
        },
      },
    ],
  },
  certifications: [
    {
      name: "The Complete 2023 Web Development Bootcamp",
      provider: "Udemy",
      topics: ["Web Development", "Full Stack", "JavaScript"],
      link: "https://www.udemy.com/certificate/UC-b4ec5d4d-3acf-4dbb-b31a-99df978ca836/",
    },
    {
      name: "100 Days of Code: The Complete Python Pro Bootcamp for 2023",
      provider: "Udemy",
      topics: ["Python", "Programming", "Algorithms"],
      link: "#",
    },
    {
      name: "Master Machine Learning, Deep Learning with Python",
      provider: "Udemy",
      topics: ["Machine Learning", "AI", "Python"],
      link: "https://www.udemy.com/certificate/UC-53a95cb1-bc2a-41b2-a428-b30cc0dfcabf/",
    },
    {
      name: "Advanced AI: Deep Reinforcement Learning in Python",
      provider: "Udemy",
      topics: ["AI", "Deep Learning", "Python"],
      link: "https://www.udemy.com/certificate/UC-a0474f67-2498-47b6-9391-1c9dc5b7075a/",
    },
    {
      name: "Meta Backend Developer Professional Certificate",
      provider: "Coursera",
      topics: ["Backend Development", "Databases", "APIs"],
      link: "https://coursera.org/share/428ed5c60e0eb51eca8ff765841ee8d8",
    },
  ],
  projects: {
    types: [
      { id: "all", label: "All Projects", icon: "Star" },
      { id: "professional", label: "Professional", icon: "Briefcase" },
      { id: "personal", label: "Personal", icon: "Building" },
    ],
    list: [
      // Professional Projects
      {
        id: 1,
        title: "E-commerce Websites",
        company: "The Qwerty Ink",
        description:
          "Successfully developed and launched two E-Commerce websites using Wix - Cogzart and Circzles. Implemented user-friendly interfaces and robust backend systems with Razor pay integration. Achieved approximately 100 unique sales within 45 days of launch.",
        technologies: ["Wix", "Razorpay", "Analytics"],
        date: "Dec 2023 - Present",
        type: "Professional",
        highlights: [
          "User-friendly interfaces",
          "Payment integration",
          "Performance optimization",
          "100 sales in 45 days",
        ],
        liveUrl: "https://circzles.com",
        githubUrl: null,
        metrics: {
          sales: "100+",
          timeframe: "45 days",
          platforms: 2,
        },
      },
      {
        id: 2,
        title: "Affiliate Marketing Dashboard",
        company: "The Qwerty Ink",
        description:
          "Currently developing an innovative Affiliate Marketing Dashboard using Next.js for frontend, Node.js for backend, and MongoDB for database management. Implementing features for tracking affiliate performance and managing commissions.",
        technologies: ["Next.js", "Node.js", "MongoDB"],
        date: "2024",
        type: "Professional",
        highlights: [
          "User authentication",
          "Commission management",
          "Performance tracking",
          "Analytics dashboard",
        ],
        liveUrl: null,
        githubUrl: "https://github.com/abhinv98",
        status: "In Development",
      },
      // Personal Projects
      {
        id: 3,
        title: "E-commerce Price Tracker",
        description:
          "Created an E-commerce Price Tracker web app with Next.js framework, utilizing BrightData API to scrape Amazon product information. Managed data storage using MongoDB and implemented automated product tracking with Cron jobs.",
        technologies: ["Next.js", "MongoDB", "BrightData API"],
        date: "Aug 2023 - Oct 2023",
        type: "Personal",
        highlights: [
          "Price tracking",
          "Data scraping",
          "Automated updates",
          "MongoDB integration",
        ],
        liveUrl: "https://pricewise-98.vercel.app/",
        githubUrl: "https://github.com/abhinv98/pricewise",
      },
      {
        id: 4,
        title: "AI-enabled Text Summarizer",
        description:
          "Developed a SaaS application using Redux Toolkit, React, Vite, and Tailwind CSS. Integrated with text summarizer API from RapidAPI to summarize lengthy webpages or articles. Received positive feedback from 50+ users.",
        technologies: ["React", "Redux", "Vite", "Tailwind"],
        date: "Aug 2023",
        type: "Personal",
        highlights: [
          "API integration",
          "Text processing",
          "User feedback",
          "Responsive design",
        ],
        liveUrl: "https://sumtext.netlify.app/",
        githubUrl: "https://github.com/abhinv98/ai-text-summarizer",
        metrics: {
          users: "50+",
          feedback: "Positive",
        },
      },
      {
        id: 5,
        title: "Inkfusion - PDF Chat SaaS",
        description:
          "Created a Next.js application enabling users to converse with PDFs using OpenAI's API. Implemented PostgreSQL database, instant loading states, and data fetching using tRPC & Zod. Acquired 15+ unique users during testing.",
        technologies: ["Next.js", "PostgreSQL", "OpenAI", "tRPC"],
        date: "Sep 2023 - Nov 2023",
        type: "Personal",
        highlights: [
          "PDF processing",
          "AI integration",
          "Real-time chat",
          "User management",
        ],
        liveUrl: "https://inkfusion-rho.vercel.app/",
        githubUrl: "https://github.com/abhinv98/inkfusion",
        metrics: {
          users: "15+",
          features: "4+",
        },
      },
    ],
  },
};
