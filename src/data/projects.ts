import {
  Link2,
  Bell,
  MessageCircle,
  CreditCard,
  BarChart3,
  ShoppingBag,
  BriefcaseBusiness,
  GraduationCap,
  Workflow,
  Shield,
} from "lucide-react";

export const projectsData = [
  {
    slug: "url-shortener",
    title: "URL Shortener",
    description:
      "A full-stack URL shortening platform for creating, managing, and tracking shortened links through a clean and responsive interface.",
    longDescription:
      "A production-oriented URL shortening application built with a modern TypeScript backend and relational database architecture. The platform focuses on reliable link generation, persistent storage, and a straightforward user experience.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL"],
    icon: Link2,
    url: "https://url-shortener-frontend-ten-eta.vercel.app/",
    github: "https://github.com/Novadgaf-stack/url-shortener-frontend",
    color: "from-violet-500 to-purple-600",
    tags: ["Full-Stack", "Backend", "Web App"],
    duration: "Development",
    year: "2025",
    role: "Full-Stack Developer",
    type: "Web Application",
    challenge:
      "Building a reliable URL shortening system with persistent storage, clean API architecture, and a responsive frontend.",
    solution:
      "Implemented a React frontend connected to a Node.js and Express backend with Prisma ORM and PostgreSQL for persistent URL data.",
    features: [
      "Short URL generation",
      "Persistent URL storage",
      "REST API architecture",
      "Responsive dashboard interface",
      "Database-backed link management",
      "Production deployment",
    ],
    results: [],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript"] },
      { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
      { category: "Database", items: ["PostgreSQL", "Prisma"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
  },

  {
    slug: "pulse-notify",
    title: "Pulse Notify",
    description:
      "A notification service designed around reliable notification preferences, delivery workflows, and scalable backend architecture.",
    longDescription:
      "Pulse Notify is a backend-focused notification service built to manage users, notification preferences, and notification delivery through a structured service architecture.",
    tech: ["Node.js", "TypeScript", "Express", "Prisma", "PostgreSQL", "Redis"],
    icon: Bell,
    url: null,
    github: null,
    color: "from-cyan-500 to-blue-600",
    tags: ["Backend", "API", "Infrastructure"],
    duration: "Development",
    year: "2026",
    role: "Full-Stack Developer",
    type: "Backend Service",
    challenge:
      "Designing a notification system that can manage preferences and notification state without becoming tightly coupled to the applications consuming it.",
    solution:
      "Built a structured service architecture with TypeScript, Express, Prisma, and PostgreSQL, with Redis available for performance-sensitive workflows.",
    features: [
      "User notification preferences",
      "Notification management",
      "REST API architecture",
      "PostgreSQL persistence",
      "Prisma ORM",
      "Service-oriented backend structure",
    ],
    results: [],
    techStack: [
      { category: "Backend", items: ["Node.js", "TypeScript", "Express"] },
      { category: "Database", items: ["PostgreSQL", "Prisma"] },
      { category: "Infrastructure", items: ["Redis"] },
    ],
  },

  {
    slug: "pulse-chat",
    title: "Pulse Chat",
    description:
      "A real-time communication application focused on responsive messaging and modern full-stack architecture.",
    longDescription:
      "Pulse Chat is a real-time communication project designed around fast message delivery, persistent application state, and a responsive chat experience.",
    tech: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL"],
    icon: MessageCircle,
    url: null,
    github: null,
    color: "from-blue-500 to-indigo-600",
    tags: ["Real-Time", "Full-Stack", "Communication"],
    duration: "Development",
    year: "2026",
    role: "Full-Stack Developer",
    type: "Web Application",
    challenge:
      "Creating a responsive messaging experience where communication state can update in real time without sacrificing application structure.",
    solution:
      "Designed the application around a modern React frontend and backend services capable of supporting real-time WebSocket communication.",
    features: [
      "Real-time messaging architecture",
      "Responsive chat interface",
      "WebSocket communication",
      "Persistent application data",
      "Modern TypeScript architecture",
    ],
    results: [],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript"] },
      { category: "Backend", items: ["Node.js", "WebSockets"] },
      { category: "Database", items: ["PostgreSQL"] },
    ],
  },

  {
    slug: "pulse-pay",
    title: "Pulse Pay",
    description:
      "A premium fintech platform concept focused on modern payments, balances, transactions, and multicurrency financial experiences.",
    longDescription:
      "Pulse Pay is a fintech application built around a premium dark-first interface and a scalable architecture for financial workflows. The project focuses on multicurrency experiences, transaction presentation, currency conversion, and responsive financial dashboards.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST APIs"],
    icon: CreditCard,
    url: null,
    github: null,
    color: "from-emerald-500 to-teal-600",
    tags: ["FinTech", "Web App", "Payments"],
    duration: "Development",
    year: "2026",
    role: "Full-Stack Developer",
    type: "FinTech Platform",
    challenge:
      "Designing a financial interface that feels trustworthy and premium while keeping balances, transactions, currencies, and conversion flows understandable.",
    solution:
      "Built a responsive fintech interface with a dark-first visual system, structured financial data presentation, and multicurrency-ready application architecture.",
    features: [
      "Multicurrency support",
      "Currency conversion",
      "Financial dashboard",
      "Transaction presentation",
      "Currency-aware formatting",
      "Responsive fintech interface",
    ],
    results: [],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Architecture", items: ["REST APIs"] },
    ],
  },

  {
    slug: "financio",
    title: "Financio",
    description:
      "A modern fintech dashboard for presenting financial data, balances, transactions, and account activity through a polished interface.",
    longDescription:
      "Financio is a fintech dashboard project focused on presenting financial information through a structured and responsive user experience. The project combines modern frontend development with Supabase-backed functionality.",
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    icon: BarChart3,
    url: "https://financio-fintech-dashboard.vercel.app/",
    github: "https://github.com/Novadgaf-stack/financio-fintech-dashboard",
    color: "from-emerald-400 to-cyan-500",
    tags: ["FinTech", "Dashboard", "Full-Stack"],
    duration: "Development",
    year: "2026",
    role: "Full-Stack Developer",
    type: "FinTech Dashboard",
    challenge:
      "Creating a financial dashboard that presents complex account information clearly without overwhelming the user.",
    solution:
      "Built a structured dashboard interface with reusable components and Supabase integration for application data.",
    features: [
      "Financial dashboard",
      "Account overview",
      "Transaction presentation",
      "Responsive interface",
      "Supabase integration",
      "Modern fintech UI",
    ],
    results: [],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Supabase"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
  },

  {
    slug: "novafresh-marketplace",
    title: "NovaFresh Marketplace",
    description:
      "A modern marketplace application designed around product discovery, browsing, and a responsive shopping experience.",
    longDescription:
      "NovaFresh Marketplace is a full-stack marketplace project focused on creating a clean product discovery and shopping experience across desktop and mobile devices.",
    tech: ["React", "TypeScript", "Node.js", "Supabase", "Tailwind CSS"],
    icon: ShoppingBag,
    url: "https://novafresh-marketplace.vercel.app/",
    github: "https://github.com/Novadgaf-stack/novafresh-marketplace",
    color: "from-orange-500 to-amber-600",
    tags: ["Marketplace", "Full-Stack", "E-Commerce"],
    duration: "Development",
    year: "2026",
    role: "Full-Stack Developer",
    type: "Marketplace",
    challenge:
      "Building a marketplace experience that makes product discovery and interaction simple across different screen sizes.",
    solution:
      "Developed a responsive marketplace interface with reusable product components and a backend-ready application structure.",
    features: [
      "Product discovery",
      "Marketplace interface",
      "Responsive product layouts",
      "Reusable UI components",
      "Backend integration",
      "Mobile-friendly experience",
    ],
    results: [],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Supabase"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
  },

  {
    slug: "prime-salvage-b2b",
    title: "Prime Salvage B2B",
    description:
      "A B2B platform designed to support business-to-business salvage operations and product discovery.",
    longDescription:
      "Prime Salvage B2B is a business-focused web platform designed around professional product presentation, B2B discovery, and a responsive experience for commercial users.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: BriefcaseBusiness,
    url: "https://prime-salvage-b2b.vercel.app/",
    github: "https://github.com/Novadgaf-stack/prime-salvage-b2b",
    color: "from-slate-500 to-zinc-700",
    tags: ["B2B", "Business", "Web Platform"],
    duration: "Development",
    year: "2026",
    role: "Full-Stack Developer",
    type: "B2B Platform",
    challenge:
      "Creating a professional B2B experience that communicates products and business information clearly.",
    solution:
      "Built a responsive business platform with structured layouts, reusable components, and production deployment.",
    features: [
      "B2B product presentation",
      "Responsive layouts",
      "Professional business UI",
      "Reusable components",
      "Production deployment",
    ],
    results: [],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
  },

  {
    slug: "edufind",
    title: "Edu-find",
    description:
      "An education platform designed to help users discover and explore learning opportunities through a structured interface.",
    longDescription:
      "Edu-find is an education-focused web application built around course and learning discovery. The project demonstrates modern frontend architecture and API-driven application development.",
    tech: ["Next.js", "TypeScript", "REST APIs", "Tailwind CSS"],
    icon: GraduationCap,
    url: null,
    github: "https://github.com/Novadgaf-stack/Edu-find",
    color: "from-teal-500 to-emerald-600",
    tags: ["EdTech", "Next.js", "Web Platform"],
    duration: "Development",
    year: "2026",
    role: "Full-Stack Developer",
    type: "EdTech Platform",
    challenge:
      "Building a useful learning discovery experience while keeping the interface simple and responsive.",
    solution:
      "Developed an API-driven Next.js application with structured educational content and responsive layouts.",
    features: [
      "Learning discovery",
      "Educational content interface",
      "API-driven architecture",
      "Responsive design",
      "Modern Next.js application",
    ],
    results: [],
    techStack: [
      { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { category: "Integration", items: ["REST APIs"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
  },

  {
    slug: "valuestream",
    title: "ValueStream",
    description:
      "A web application focused on presenting structured value and data flows through a modern responsive interface.",
    longDescription:
      "ValueStream is a modern web application designed around presenting structured information and workflows through a clean, responsive interface.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    icon: Workflow,
    url: "https://valuestream-eta.vercel.app/",
    github: "https://github.com/Novadgaf-stack/valuestream",
    color: "from-blue-500 to-violet-600",
    tags: ["Web App", "Data", "Frontend"],
    duration: "Development",
    year: "2026",
    role: "Full-Stack Developer",
    type: "Web Application",
    challenge:
      "Presenting structured workflows and information in a way that remains clear and usable across devices.",
    solution:
      "Built a responsive interface with reusable components and a focused information architecture.",
    features: [
      "Structured data presentation",
      "Responsive interface",
      "Reusable components",
      "Modern UI architecture",
      "Production deployment",
    ],
    results: [],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
  },

  {
    slug: "krestkeep",
    title: "KrestKeep",
    description:
      "A Solana-focused Web3 security platform exploring wallet safety, blockchain interactions, and secure digital asset workflows.",
    longDescription:
      "KrestKeep is a Web3 security project built around the Solana ecosystem. The platform combines blockchain interactions with security-focused product design and educational concepts around safer wallet usage.",
    tech: ["Solana", "Rust", "React", "TypeScript", "Web3"],
    icon: Shield,
    url: "https://krestkeep.vercel.app/",
    github: "https://github.com/Novadgaf-stack/krestkeep",
    color: "from-emerald-400 to-cyan-500",
    tags: ["Web3", "Solana", "Security"],
    duration: "Development",
    year: "2026",
    role: "Blockchain Developer",
    type: "Web3 Application",
    challenge:
      "Building a security-focused Web3 experience while making blockchain interactions understandable to users.",
    solution:
      "Developed a Solana-focused application combining a modern React interface with blockchain-oriented functionality and security education.",
    features: [
      "Solana ecosystem integration",
      "Web3 wallet workflows",
      "Security-focused interface",
      "Blockchain interaction",
      "Responsive Web3 experience",
    ],
    results: [],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
      { category: "Blockchain", items: ["Solana", "Web3"] },
      { category: "Smart Contracts", items: ["Rust"] },
      { category: "Deployment", items: ["Vercel"] },
    ],
  },
];
