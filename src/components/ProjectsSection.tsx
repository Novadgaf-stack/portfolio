import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { projectsData } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: typeof projectsData[0]; index: number }) => {
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
          <Link to={`/project/${project.slug}`}>
            <div className={`h-32 md:h-40 bg-gradient-to-br ${project.color} p-4 sm:p-6 relative overflow-hidden cursor-pointer`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              <project.icon className="w-10 h-10 sm:w-12 sm:h-12 text-white relative z-10" />
            </div>
          </Link>
          
          {/* Content */}
          <div className="p-4 sm:p-6">
            <Link to={`/project/${project.slug}`}>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-1">
                {project.title}
              </h3>
            </Link>
            <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
              {project.description}
            </p>
            
            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
              {project.tech.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono bg-secondary rounded-md text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono bg-secondary rounded-md text-muted-foreground">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Button variant="default" size="sm" className="text-xs sm:text-sm h-8 sm:h-9" asChild>
                <Link to={`/project/${project.slug}`}>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden xs:inline">View</span> Case Study
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3" asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Demo</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm h-8 sm:h-9 px-2 sm:px-3" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
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
    <section id="projects" className="py-16 md:py-24 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              A collection of production-ready applications demonstrating my expertise 
              in building scalable, user-focused solutions.
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          {/* More projects link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="text-center mt-8 md:mt-12"
          >
            <Button variant="glass" size="lg" className="text-sm sm:text-base" asChild>
              <a href="https://github.com/xzavior34" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                View All on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
