import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Github,
  ArrowRight,
  ArrowUpRight,
  Layers3,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { projectsData } from "@/data/projects";

type Project = (typeof projectsData)[number];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      className="h-full"
    >
      <Card
        variant="glow"
        className="group h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1"
      >
        <CardContent className="flex h-full flex-col p-0">
          <Link
            to={`/project/${project.slug}`}
            aria-label={`View ${project.title} case study`}
          >
            <div
              className={`relative h-36 overflow-hidden bg-gradient-to-br ${project.color} p-5 sm:h-40 sm:p-6`}
            >
              <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />

              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-125" />

              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-white/10 blur-xl transition-transform duration-500 group-hover:scale-125" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <project.icon className="h-10 w-10 text-white sm:h-12 sm:w-12" />

                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm">
                    {project.type}
                  </span>

                  <span className="font-mono text-xs text-white/70">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          </Link>

          <div className="flex flex-1 flex-col p-4 sm:p-6">
            <div className="mb-4">
              <Link to={`/project/${project.slug}`}>
                <h3 className="mb-2 text-lg font-bold transition-colors group-hover:text-primary sm:text-xl">
                  {project.title}
                </h3>
              </Link>

              <p className="line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {project.description}
              </p>
            </div>

            <div className="mb-5 flex flex-wrap gap-1.5 sm:gap-2">
              {project.tech.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border/50 bg-secondary px-2 py-1 font-mono text-[10px] text-muted-foreground sm:text-xs"
                >
                  {tech}
                </span>
              ))}

              {project.tech.length > 4 && (
                <span className="rounded-md border border-border/50 bg-secondary px-2 py-1 font-mono text-[10px] text-muted-foreground sm:text-xs">
                  +{project.tech.length - 4}
                </span>
              )}
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border/50 pt-4 sm:gap-3">
              <Button
                variant="default"
                size="sm"
                className="h-8 text-xs sm:h-9 sm:text-sm"
                asChild
              >
                <Link to={`/project/${project.slug}`}>
                  <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Case Study
                </Link>
              </Button>

              {project.url && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 px-2.5 text-xs sm:h-9 sm:px-3 sm:text-sm"
                  asChild
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                  >
                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Demo</span>
                  </a>
                </Button>
              )}

              {project.github && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-2.5 text-xs sm:h-9 sm:px-3 sm:text-sm"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} GitHub repository`}
                  >
                    <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span className="hidden md:inline">Code</span>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 lg:py-32"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center md:mb-16"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Layers3 className="h-4 w-4" />
              Selected Work
            </span>

            <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:mb-6 md:text-5xl">
              Projects that{" "}
              <span className="text-gradient">solve problems</span>
            </h2>

            <p className="mx-auto max-w-2xl px-2 text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
              A selection of applications and systems I've built across
              fintech, Web3, backend infrastructure, marketplaces, and modern
              web platforms.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-10 text-center md:mt-12"
          >
            <Button
              variant="glass"
              size="lg"
              className="text-sm sm:text-base"
              asChild
            >
              <a
                href="https://github.com/Novadgaf-stack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                Explore GitHub
                <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;



