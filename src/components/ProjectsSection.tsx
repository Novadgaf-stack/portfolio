import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Bot, GraduationCap, Film, Music, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const projects = [
  {
    title: "Xzavior AI",
    description: "An intelligent AI chatbot leveraging natural language processing for seamless human-computer interaction. Built with modern ML frameworks and deployed as a progressive web app.",
    tech: ["React", "TypeScript", "OpenAI API", "PWA", "TailwindCSS"],
    icon: Bot,
    url: "https://xzavior34.github.io/Xzavior-ai/",
    github: "https://github.com/xzavior34/Xzavior-ai",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "EduFind",
    description: "Educational platform aggregating online courses from multiple providers. Features advanced search, filtering, and personalized recommendations for learners.",
    tech: ["Next.js", "TypeScript", "REST APIs", "Vercel", "MongoDB"],
    icon: GraduationCap,
    url: "https://edufind.vercel.app/",
    github: "https://github.com/xzavior34",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Xzavior Movies",
    description: "Feature-rich movie streaming PWA similar to MovieBox. Integrates with movie databases for comprehensive catalog with search, favorites, and watchlist features.",
    tech: ["React", "PWA", "TMDB API", "IndexedDB", "CSS3"],
    icon: Film,
    url: "https://xzavior34.github.io/Xzavior-movie/",
    github: "https://github.com/xzavior34/Xzavior-movie",
    color: "from-red-500 to-orange-600",
  },
  {
    title: "Xzavior Music Stream",
    description: "Spotify-inspired music streaming application with web-wide song discovery. Features audio playback, playlists, and seamless streaming experience.",
    tech: ["React", "Web Audio API", "Spotify API", "Vercel", "Redux"],
    icon: Music,
    url: "https://xzavior-music-stream.vercel.app/",
    github: "https://github.com/xzavior34",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "CareCompass Health Navigator",
    description: "AI-powered health assistant helping users understand symptoms and find appropriate medical support. Features symptom analysis and healthcare provider recommendations.",
    tech: ["React", "AI/ML", "HealthKit API", "Firebase", "TypeScript"],
    icon: Heart,
    url: "https://health-navigator-ai-xi.vercel.app/",
    github: "https://github.com/xzavior34",
    color: "from-pink-500 to-rose-600",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card variant="glow" className="h-full group overflow-hidden">
        <CardContent className="p-0">
          {/* Project header with gradient */}
          <div className={`h-32 md:h-40 bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
            <project.icon className="w-12 h-12 text-white relative z-10" />
          </div>
          
          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            
            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-mono bg-secondary rounded-md text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3">
              <Button variant="default" size="sm" asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="code-block text-sm">
                <span className="text-primary">async function</span>{" "}
                <span className="text-accent">buildProject</span>
                <span className="text-muted-foreground">()</span>{" "}
                <span className="text-muted-foreground">{"{"}</span>
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of production-ready applications demonstrating full-stack expertise, 
              clean architecture, and modern development practices.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* More projects link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Button variant="glass" size="lg" asChild>
              <a href="https://github.com/xzavior34" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
