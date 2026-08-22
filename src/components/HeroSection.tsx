import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Terminal,
} from "lucide-react";
import { Button } from "./ui/button";
import TypeWriter from "./TypeWriter";

const HeroSection = () => {
  const roles = [
    "Full-Stack Developer",
    "Software Engineer",
    "Web Application Builder",
    "Systems-Focused Developer",
  ];

  const stats = [
    { value: "3+", label: "Years Building" },
    { value: "Full-Stack", label: "Engineering Focus" },
    { value: "TypeScript", label: "Core Language" },
    { value: "Nova", label: "Developer Identity" },
  ];

  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pb-16 pt-28"
      id="home"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <motion.div
        className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
              >
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                Available for selected opportunities
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4 font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground"
              >
                Isaac Akinkunmi / Nova
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mb-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              >
                I build{" "}
                <span className="text-gradient">scalable digital products</span>{" "}
                from interface to backend.
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mb-7 text-xl font-light sm:text-2xl md:text-3xl"
              >
                I'm a{" "}
                <TypeWriter
                  words={roles}
                  className="font-semibold text-foreground"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mx-auto mb-9 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg lg:mx-0"
              >
                I design and engineer modern web applications with a focus on
                clean architecture, reliable backend systems, responsive
                interfaces, and products that are built to be maintained.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75 }}
                className="mb-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              >
                <Button variant="hero" size="xl" asChild>
                  <a href="#contact">
                    <Mail className="h-5 w-5" />
                    Let's Work Together
                  </a>
                </Button>

                <Button variant="glass" size="xl" asChild>
                  <a href="#projects">
                    View Projects
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </Button>

                <Button variant="outline" size="xl" asChild>
                  <a href="/cv.pdf" download="Isaac_Akinkunmi_CV.pdf">
                    <Download className="h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center justify-center gap-2 lg:justify-start"
              >
                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://github.com/Novadgaf-stack"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Isaac Akinkunmi on GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>

                <Button variant="ghost" size="icon" asChild>
                  <a
                    href="https://www.linkedin.com/in/isaac-akinkunmi-20673a375"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Isaac Akinkunmi on LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>

                <span className="ml-2 hidden text-sm text-muted-foreground sm:inline">
                  GitHub & LinkedIn
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-6 shadow-2xl backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between border-b border-border/50 pb-5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <span className="font-mono text-xs text-muted-foreground">
                    nova.dev
                  </span>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-primary" />
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                        Developer Profile
                      </p>
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Engineering products
                      <span className="block text-muted-foreground">
                        that actually ship.
                      </span>
                    </h2>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-border/50 bg-background/50 p-4">
                      <p className="text-xs text-muted-foreground">
                        Primary Stack
                      </p>
                      <p className="mt-2 font-mono text-sm font-semibold">
                        React · Node · TypeScript
                      </p>
                    </div>

                    <div className="rounded-2xl border border-border/50 bg-background/50 p-4">
                      <p className="text-xs text-muted-foreground">
                        Engineering Focus
                      </p>
                      <p className="mt-2 font-mono text-sm font-semibold">
                        Architecture · APIs · UX
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">
                        CURRENT_STATUS
                      </span>

                      <span className="flex items-center gap-2 text-xs text-primary">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                        ONLINE
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      Building reliable full-stack systems, refining product
                      experiences, and turning ideas into maintainable software.
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/50 pt-5">
                    <span className="font-mono text-xs text-muted-foreground">
                      LOCATION
                    </span>

                    <span className="text-sm font-medium">
                      Lagos, Nigeria
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border/60 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:block">
                <p className="font-mono text-xs text-muted-foreground">
                  <span className="text-primary">&gt;</span> npm run build
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  systems over shortcuts
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 md:mt-20 md:gap-5"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-4 text-center sm:p-6"
              >
                <div className="mb-2 text-xl font-bold text-gradient sm:text-2xl md:text-3xl">
                  {stat.value}
                </div>

                <div className="text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            aria-label="Scroll to About section"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="block"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
