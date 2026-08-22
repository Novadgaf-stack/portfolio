import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Shield,
  Database,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import heroAvatar from "@/assets/hero-avatar.png";

const specializations = [
  {
    icon: Zap,
    title: "Architecture & Scalability",
    description:
      "Designing modular full-stack systems with clean boundaries, reliable APIs, and room to scale.",
  },
  {
    icon: Cpu,
    title: "Performance Engineering",
    description:
      "Improving application speed, data processing, and database efficiency across critical workflows.",
  },
  {
    icon: Shield,
    title: "Security & Reliability",
    description:
      "Building secure authentication, resilient services, robust validation, and dependable deployments.",
  },
  {
    icon: Database,
    title: "Frontend Engineering",
    description:
      "Creating responsive React interfaces with strong UX, accessibility, animation, and maintainable component systems.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-28 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center md:mb-16"
          >
            <span className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              About Me
            </span>

            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Engineering with{" "}
              <span className="text-gradient">purpose.</span>
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
              I build modern software across the stack, combining product
              thinking, frontend engineering, backend architecture, and
              reliable systems to turn ideas into software that can actually
              ship and evolve.
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-12 overflow-hidden rounded-3xl border border-border/60 bg-card/50 p-5 shadow-2xl backdrop-blur-xl md:mb-16 md:p-8 lg:p-10"
          >
            <div className="grid items-center gap-10 lg:grid-cols-[1.35fr_0.65fr]">
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Experience
                  </span>
                </div>

                <h3 className="mb-5 text-2xl font-bold tracking-tight sm:text-3xl">
                  From building interfaces to engineering systems.
                </h3>

                <div className="space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  <p>
                    My development experience has exposed me to both product
                    interfaces and the systems behind them. I focus on writing
                    software that is understandable, maintainable, and built
                    with its next stage of growth in mind.
                  </p>

                  <p>
                    Through practical projects and professional experience, I
                    have worked with modern frontend technologies, backend
                    services, databases, APIs, authentication, and deployment
                    workflows.
                  </p>
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border/60 bg-background/50 px-3 py-1.5 font-mono text-xs text-muted-foreground"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="relative flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.85 }
                  }
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="relative"
                >
                  <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl" />

                  <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-primary/30 bg-card shadow-2xl sm:h-44 sm:w-44">
                    <img
                      src={heroAvatar}
                      alt="Isaac Akinkunmi"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>

                <div className="mt-7 grid w-full max-w-xs grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border/50 bg-background/50 p-4 text-center">
                    <p className="text-2xl font-bold text-gradient">3+</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Years Building
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/50 bg-background/50 p-4 text-center">
                    <p className="text-2xl font-bold text-gradient">Full</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Stack Focus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-7 flex items-end justify-between gap-4"
          >
            <div>
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                What I Do
              </p>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Engineering strengths
              </h3>
            </div>

            <ArrowUpRight className="hidden h-6 w-6 text-muted-foreground sm:block" />
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.6,
                  delay: 0.35 + index * 0.08,
                }}
              >
                <Card
                  variant="glow"
                  className="group h-full rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
                >
                  <CardContent className="p-0">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10">
                        <spec.icon className="h-5 w-5 text-primary" />
                      </div>

                      <span className="font-mono text-xs text-muted-foreground/50">
                        0{index + 1}
                      </span>
                    </div>

                    <h4 className="mb-3 text-lg font-bold transition-colors group-hover:text-primary sm:text-xl">
                      {spec.title}
                    </h4>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {spec.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
