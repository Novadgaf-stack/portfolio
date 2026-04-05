import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { projectsData } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/#projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <Button variant="ghost" asChild className="mb-8">
              <Link to="/#projects">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Link>
            </Button>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              {project.longDescription}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5" />
                  View Live Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              </Button>
            </div>

            {/* Project Meta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <Card variant="glass" className="p-4 md:p-6">
                <CardContent className="p-0 flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-semibold text-sm md:text-base truncate">{project.duration}</p>
                  </div>
                </CardContent>
              </Card>
              <Card variant="glass" className="p-4 md:p-6">
                <CardContent className="p-0 flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Year</p>
                    <p className="font-semibold text-sm md:text-base">{project.year}</p>
                  </div>
                </CardContent>
              </Card>
              <Card variant="glass" className="p-4 md:p-6">
                <CardContent className="p-0 flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Role</p>
                    <p className="font-semibold text-sm md:text-base truncate">{project.role}</p>
                  </div>
                </CardContent>
              </Card>
              <Card variant="glass" className="p-4 md:p-6">
                <CardContent className="p-0 flex items-center gap-3">
                  <project.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Type</p>
                    <p className="font-semibold text-sm md:text-base truncate">{project.type}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className={`rounded-2xl overflow-hidden border border-border bg-gradient-to-br ${project.color} p-1`}>
              <div className="bg-card rounded-xl overflow-hidden">
                <div className="bg-secondary/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-xs text-muted-foreground truncate">{project.url}</span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-secondary to-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <project.icon className="w-16 h-16 md:w-24 md:h-24 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm md:text-base">Visit the live demo to see the full application</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* The Challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </motion.div>

                {/* The Solution */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">The Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>

                {/* Key Features */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Key Features</h2>
                  <div className="grid gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">Results & Impact</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <Card key={index} variant="glow" className="p-4 md:p-6">
                        <CardContent className="p-0">
                          <p className="text-2xl md:text-3xl font-bold text-gradient mb-2">{result.value}</p>
                          <p className="text-sm text-muted-foreground">{result.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar - Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:col-span-1"
              >
                <div className="sticky top-24">
                  <Card variant="glass" className="p-6">
                    <CardContent className="p-0">
                      <h3 className="text-lg font-bold mb-6">Tech Stack</h3>
                      <div className="space-y-4">
                        {project.techStack.map((category, index) => (
                          <div key={index}>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                              {category.category}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {category.items.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 text-xs font-mono bg-secondary rounded-lg"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Links */}
                  <Card variant="glass" className="p-6 mt-6">
                    <CardContent className="p-0 space-y-3">
                      <Button variant="default" className="w-full" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
