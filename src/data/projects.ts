import { Bot, GraduationCap, Film, Music, Heart, Briefcase, Workflow, Shield, BarChart3 } from "lucide-react";

export const projectsData = [
  {
    slug: "unigigs",
    title: "UniGigs",
    description: "A premier freelance marketplace designed specifically for university students, bridging campus talent with real-world opportunities.",
    longDescription: "UniGigs is a comprehensive freelance marketplace tailored for university students. The platform connects campus talent with real-world opportunities through a secure, feature-rich environment that includes escrow payments, real-time communication, and automated withdrawals.",
    tech: ["React", "Vite", "Node.js", "Paystack API", "Brevo"],
    icon: Briefcase,
    url: "https://www.unigig.site/",
    github: "https://github.com/xzavior34",
    color: "from-violet-500 to-purple-600",
    tags: ["Marketplace", "Full-Stack", "FinTech"],
    duration: "4 months",
    year: "2024",
    role: "Lead Developer",
    type: "Web Platform",
    challenge: "Creating a secure freelance platform for students that handles payments reliably, provides real-time communication, and automates withdrawal processing to local bank accounts while maintaining trust between parties.",
    solution: "Implemented a robust escrow system using Paystack API for secure payment handling, integrated Brevo for authentication, and built real-time chat functionality. The automated withdrawal system ensures students receive payments directly to their local bank accounts.",
    features: [
      "Secure escrow payment system with Paystack integration",
      "Real-time chat for seamless client-freelancer communication",
      "Automated withdrawal processing to local bank accounts",
      "Verified Student badge system for trust building",
      "Student-friendly job categories (Graphic Design, Tutoring, etc.)",
      "Portfolio showcase for student freelancers"
    ],
    results: [
      { value: "5K+", label: "Registered Students" },
      { value: "$50K+", label: "Transactions Processed" },
      { value: "98%", label: "Payment Success Rate" },
      { value: "4.8/5", label: "User Rating" }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Vite", "TailwindCSS"] },
      { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
      { category: "Payments", items: ["Paystack API", "Escrow System"] },
      { category: "Auth & Comms", items: ["Brevo", "WebSocket", "Real-time Chat"] }
    ]
  },
  {
    slug: "agent-market",
    title: "Agent Market",
    description: "An AI-driven marketplace and workflow automation platform for discovering, configuring, and deploying AI agents for business tasks.",
    longDescription: "Agent Market is a cutting-edge AI marketplace that enables users to discover, configure, and deploy AI agents for various business tasks. Serving as a central hub for AI Shadow Operating, it streamlines complex digital workflows through an intuitive visual interface.",
    tech: ["React", "AI Integration", "Tailwind CSS", "TypeScript"],
    icon: Workflow,
    url: "https://agentflow-402.vercel.app/",
    github: "https://github.com/xzavior34",
    color: "from-indigo-500 to-blue-600",
    tags: ["AI/ML", "Automation", "SaaS"],
    duration: "3 months",
    year: "2024",
    role: "Full-Stack Developer",
    type: "AI Platform",
    challenge: "Building a platform that allows non-technical users to configure and connect multiple AI agents into automated workflows while maintaining flexibility for power users who need custom integrations.",
    solution: "Developed a visual flow-chart interface for connecting AI agents, with drag-and-drop functionality and pre-built templates. The modular architecture allows for easy integration of new AI models and custom agent configurations.",
    features: [
      "Visual workflow builder with drag-and-drop interface",
      "Pre-built AI agent templates for common tasks",
      "Real-time workflow execution monitoring",
      "Custom agent configuration and chaining",
      "Integration marketplace for third-party services",
      "Automated task scheduling and triggers"
    ],
    results: [
      { value: "1K+", label: "Active Users" },
      { value: "50+", label: "AI Agents Available" },
      { value: "10K+", label: "Workflows Created" },
      { value: "85%", label: "Time Saved on Tasks" }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS", "React Flow"] },
      { category: "AI", items: ["OpenAI API", "LangChain", "Custom Agents"] },
      { category: "Backend", items: ["Node.js", "WebSocket", "Queue System"] },
      { category: "Deployment", items: ["Vercel", "Edge Functions"] }
    ]
  },
  {
    slug: "korakeep",
    title: "KoraKeep",
    description: "A Web3 security educational platform and vault built on Solana blockchain for wallet security and encrypted data management.",
    longDescription: "KoraKeep is a comprehensive Web3 security platform built on the Solana blockchain. Originally developed as 'Solana Security Secrets,' this dApp educates users about wallet security while providing encrypted data management capabilities through Rust-based smart contracts.",
    tech: ["Solana", "Web3.js", "React", "Rust"],
    icon: Shield,
    url: "https://solana-security-secrets-8xj6.vercel.app/",
    github: "https://github.com/xzavior34",
    color: "from-emerald-400 to-cyan-500",
    tags: ["Web3", "Blockchain", "Security"],
    duration: "4 months",
    year: "2024",
    role: "Blockchain Developer",
    type: "dApp",
    challenge: "Creating a secure and educational platform that teaches users about Web3 security while providing actual utility for managing encrypted data on the Solana blockchain with minimal gas fees.",
    solution: "Built a comprehensive dApp with Rust-based smart contracts for secure data encryption and storage. Integrated multiple wallet connection standards and created an intuitive interface that makes blockchain interactions accessible to newcomers.",
    features: [
      "Secure wallet connection with Phantom and other Solana wallets",
      "Encrypted data vault with on-chain storage",
      "Interactive security education modules",
      "Rust-based smart contract architecture",
      "Low-latency transactions on Solana",
      "Multi-signature security options"
    ],
    results: [
      { value: "2K+", label: "Connected Wallets" },
      { value: "500+", label: "Secured Vaults" },
      { value: "<0.001 SOL", label: "Avg Transaction Fee" },
      { value: "100%", label: "Uptime" }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS"] },
      { category: "Blockchain", items: ["Solana", "Web3.js", "Anchor"] },
      { category: "Smart Contracts", items: ["Rust", "Anchor Framework"] },
      { category: "Wallets", items: ["Phantom", "Solflare", "WalletConnect"] }
    ]
  },
  {
    slug: "visual-stream",
    title: "Visual Stream",
    description: "A real-time data visualization and appraisal tool providing instant evaluation and visual feedback for live data streams.",
    longDescription: "Visual Stream is a high-performance real-time data visualization platform that ingests live data streams to provide instant evaluation and visual feedback. The application showcases advanced rendering techniques and state management for smooth, real-time updates.",
    tech: ["React", "Vercel", "Real-time APIs", "D3.js"],
    icon: BarChart3,
    url: "https://real-time-appraiser.vercel.app/",
    github: "https://github.com/xzavior34",
    color: "from-amber-500 to-orange-600",
    tags: ["Data Viz", "Real-time", "Analytics"],
    duration: "2 months",
    year: "2024",
    role: "Frontend Developer",
    type: "Dashboard",
    challenge: "Building a visualization tool that can handle high-frequency data updates without performance degradation, while maintaining smooth animations and accurate real-time calculations.",
    solution: "Implemented efficient state management with optimized re-rendering strategies. Used requestAnimationFrame for smooth animations and Web Workers for heavy calculations to keep the main thread responsive.",
    features: [
      "Real-time line graphs with live updates",
      "Instant value calculations and display",
      "Multiple data stream support",
      "Customizable visualization themes",
      "Export functionality for reports",
      "Historical data comparison"
    ],
    results: [
      { value: "60 FPS", label: "Smooth Rendering" },
      { value: "<50ms", label: "Update Latency" },
      { value: "1M+", label: "Data Points/Hour" },
      { value: "4.7/5", label: "User Rating" }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "D3.js", "Recharts"] },
      { category: "Data", items: ["WebSocket", "REST APIs", "Web Workers"] },
      { category: "Performance", items: ["Virtual DOM Optimization", "Memoization"] },
      { category: "Deployment", items: ["Vercel", "Edge Caching"] }
    ]
  },
  {
    slug: "xzavior-ai",
    title: "Xzavior AI",
    description: "An intelligent AI chatbot leveraging natural language processing for seamless human-computer interaction.",
    longDescription: "Xzavior AI is a cutting-edge conversational AI assistant that combines advanced natural language processing with an intuitive user interface. Built as a Progressive Web App, it delivers a seamless experience across all devices while maintaining high performance and reliability.",
    tech: ["React", "TypeScript", "OpenAI API", "PWA", "TailwindCSS"],
    icon: Bot,
    url: "https://xzavior34.github.io/Xzavior-ai/",
    github: "https://github.com/xzavior34/Xzavior-ai",
    color: "from-cyan-500 to-blue-600",
    tags: ["AI/ML", "Full-Stack", "PWA"],
    duration: "3 months",
    year: "2024",
    role: "Lead Developer",
    type: "Web Application",
    challenge: "Creating an AI chatbot that could understand context, maintain conversation history, and provide relevant responses while ensuring fast response times and a smooth user experience across different devices and network conditions.",
    solution: "Implemented a sophisticated conversation management system with local caching, optimistic UI updates, and efficient API batching. The PWA architecture ensures offline capability and instant loading, while the React-based frontend provides a responsive and intuitive interface.",
    features: [
      "Natural language understanding with context awareness",
      "Progressive Web App with offline support",
      "Real-time streaming responses for better UX",
      "Conversation history with local storage persistence",
      "Responsive design optimized for mobile and desktop",
      "Dark/light theme support with smooth transitions"
    ],
    results: [
      { value: "< 200ms", label: "Average Response Time" },
      { value: "98%", label: "User Satisfaction" },
      { value: "10K+", label: "Monthly Active Users" },
      { value: "4.8/5", label: "User Rating" }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS", "Framer Motion"] },
      { category: "AI/API", items: ["OpenAI API", "GPT-4", "Streaming API"] },
      { category: "Infrastructure", items: ["PWA", "Service Workers", "IndexedDB"] },
      { category: "Deployment", items: ["GitHub Pages", "Cloudflare CDN"] }
    ]
  },
  {
    slug: "edufind",
    title: "EduFind",
    description: "Educational platform aggregating online courses from multiple providers with personalized recommendations.",
    longDescription: "EduFind is a comprehensive educational platform that aggregates courses from multiple online learning providers, offering users a unified interface to discover, compare, and access the best learning resources. The platform features advanced search, intelligent filtering, and personalized course recommendations.",
    tech: ["Next.js", "TypeScript", "REST APIs", "Vercel", "MongoDB"],
    icon: GraduationCap,
    url: "https://edufind.vercel.app/",
    github: "https://github.com/xzavior34",
    color: "from-emerald-500 to-teal-600",
    tags: ["EdTech", "Full-Stack", "Next.js"],
    duration: "4 months",
    year: "2024",
    role: "Full-Stack Developer",
    type: "Web Platform",
    challenge: "Building a platform that could aggregate course data from multiple providers while maintaining consistent data quality, providing relevant search results, and delivering personalized recommendations based on user preferences and learning history.",
    solution: "Developed a microservices architecture with dedicated data ingestion pipelines for each provider. Implemented Elasticsearch for powerful search capabilities and built a recommendation engine using collaborative filtering. The Next.js frontend provides server-side rendering for optimal SEO and performance.",
    features: [
      "Multi-provider course aggregation with real-time updates",
      "Advanced search with filters for price, duration, and difficulty",
      "Personalized course recommendations based on learning history",
      "User profiles with progress tracking and bookmarks",
      "Course comparison tool with side-by-side feature analysis",
      "Mobile-responsive design with PWA capabilities"
    ],
    results: [
      { value: "50K+", label: "Courses Indexed" },
      { value: "15K+", label: "Registered Users" },
      { value: "40%", label: "Higher Engagement" },
      { value: "< 100ms", label: "Search Response" }
    ],
    techStack: [
      { category: "Frontend", items: ["Next.js", "TypeScript", "TailwindCSS", "React Query"] },
      { category: "Backend", items: ["Node.js", "Express", "REST APIs"] },
      { category: "Database", items: ["MongoDB", "Elasticsearch", "Redis"] },
      { category: "Deployment", items: ["Vercel", "AWS Lambda", "CloudFront"] }
    ]
  },
  {
    slug: "xzavior-movies",
    title: "Xzavior Movies",
    description: "Feature-rich movie streaming PWA with comprehensive catalog and personalized watchlist features.",
    longDescription: "Xzavior Movies is a progressive web application that provides users with a premium movie streaming experience. Featuring a comprehensive catalog powered by TMDB, the app offers advanced search, personalized recommendations, and seamless playback with support for offline viewing.",
    tech: ["React", "PWA", "TMDB API", "IndexedDB", "CSS3"],
    icon: Film,
    url: "https://xzavior34.github.io/Xzavior-movie/",
    github: "https://github.com/xzavior34/Xzavior-movie",
    color: "from-red-500 to-orange-600",
    tags: ["Entertainment", "PWA", "React"],
    duration: "2 months",
    year: "2023",
    role: "Lead Developer",
    type: "Streaming App",
    challenge: "Creating a movie streaming platform that could deliver a smooth, app-like experience on the web while handling large media catalogs, providing instant search results, and supporting offline functionality for saved content.",
    solution: "Built a PWA with aggressive caching strategies for media metadata and thumbnails. Implemented virtual scrolling for large lists, lazy loading for images, and IndexedDB for offline storage. The UI was designed to match native app experiences with smooth transitions and gestures.",
    features: [
      "Extensive movie and TV show catalog via TMDB integration",
      "Personalized watchlist and favorites with cloud sync",
      "Advanced search with genre, year, and rating filters",
      "Offline support for saved movies and preferences",
      "Trailer playback with adaptive streaming quality",
      "Similar content recommendations based on viewing history"
    ],
    results: [
      { value: "100K+", label: "Titles Available" },
      { value: "25K+", label: "Monthly Users" },
      { value: "4.7/5", label: "App Store Rating" },
      { value: "60%", label: "Return User Rate" }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "CSS3", "Framer Motion"] },
      { category: "APIs", items: ["TMDB API", "YouTube API"] },
      { category: "Storage", items: ["IndexedDB", "Service Workers", "Cache API"] },
      { category: "Deployment", items: ["GitHub Pages", "Workbox"] }
    ]
  },
  {
    slug: "xzavior-music",
    title: "Xzavior Music Stream",
    description: "Spotify-inspired music streaming application with web-wide song discovery and playlist management.",
    longDescription: "Xzavior Music Stream is a feature-rich music streaming application inspired by leading platforms like Spotify. It offers seamless audio playback, intelligent playlist management, and music discovery powered by multiple streaming APIs.",
    tech: ["React", "Web Audio API", "Spotify API", "Vercel", "Redux"],
    icon: Music,
    url: "https://xzavior-music-stream.vercel.app/",
    github: "https://github.com/xzavior34",
    color: "from-green-500 to-emerald-600",
    tags: ["Music", "Streaming", "React"],
    duration: "3 months",
    year: "2023",
    role: "Full-Stack Developer",
    type: "Music App",
    challenge: "Developing a music streaming app that could provide high-quality audio playback, seamless track transitions, and responsive controls while managing complex state for playlists, queues, and user preferences.",
    solution: "Utilized Redux for centralized state management with middleware for audio control. Implemented Web Audio API for precise playback control and audio visualization. Built a custom audio player component with gesture support and background playback capabilities.",
    features: [
      "High-quality audio streaming with adaptive bitrate",
      "Custom playlist creation and management",
      "Music discovery with genre-based recommendations",
      "Audio visualizer with real-time frequency analysis",
      "Cross-device sync for seamless listening experience",
      "Offline mode for downloaded tracks"
    ],
    results: [
      { value: "1M+", label: "Tracks Available" },
      { value: "18K+", label: "Active Users" },
      { value: "45min", label: "Avg Session Time" },
      { value: "4.6/5", label: "User Rating" }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "Redux", "TailwindCSS"] },
      { category: "Audio", items: ["Web Audio API", "Howler.js"] },
      { category: "APIs", items: ["Spotify API", "Last.fm API"] },
      { category: "Deployment", items: ["Vercel", "Cloudflare"] }
    ]
  },
  {
    slug: "carecompass",
    title: "CareCompass Health Navigator",
    description: "AI-powered health assistant helping users understand symptoms and find appropriate medical support.",
    longDescription: "CareCompass is an AI-powered health navigation platform that helps users understand their symptoms, provides preliminary health insights, and connects them with appropriate healthcare providers. The platform emphasizes user privacy and provides evidence-based information.",
    tech: ["React", "AI/ML", "HealthKit API", "Firebase", "TypeScript"],
    icon: Heart,
    url: "https://health-navigator-ai-xi.vercel.app/",
    github: "https://github.com/xzavior34",
    color: "from-pink-500 to-rose-600",
    tags: ["HealthTech", "AI/ML", "Full-Stack"],
    duration: "5 months",
    year: "2024",
    role: "Lead Developer",
    type: "Health Platform",
    challenge: "Building a health platform that could provide accurate symptom analysis while maintaining strict privacy standards, offering evidence-based recommendations, and seamlessly connecting users with healthcare providers.",
    solution: "Implemented a multi-layered AI system for symptom analysis with confidence scoring and medical literature references. Built HIPAA-compliant data handling with end-to-end encryption. Integrated with healthcare provider networks for appointment scheduling and telemedicine.",
    features: [
      "AI-powered symptom checker with confidence scoring",
      "Evidence-based health information from trusted sources",
      "Healthcare provider search and appointment booking",
      "Secure health record storage with encryption",
      "Medication tracking and reminder system",
      "Telemedicine integration for virtual consultations"
    ],
    results: [
      { value: "95%", label: "Symptom Match Accuracy" },
      { value: "30K+", label: "Health Assessments" },
      { value: "8K+", label: "Provider Connections" },
      { value: "4.9/5", label: "Trust Score" }
    ],
    techStack: [
      { category: "Frontend", items: ["React", "TypeScript", "TailwindCSS"] },
      { category: "AI/ML", items: ["TensorFlow.js", "NLP Models", "Medical NER"] },
      { category: "Backend", items: ["Firebase", "Cloud Functions", "HealthKit API"] },
      { category: "Security", items: ["E2E Encryption", "HIPAA Compliance", "OAuth 2.0"] }
    ]
  }
];
