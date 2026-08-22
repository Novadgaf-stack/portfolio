import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search,
  Layers3,
  Code2,
  Gauge,
  Rocket,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "I start by understanding the problem, users, requirements, constraints, and the outcome the product needs to achieve.",
    icon: Search,
  },
  {
    number: "02",
    title: "Architect",
    description:
      "I translate requirements into a practical technical architecture covering system structure, data models, APIs, authentication, and scalability.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Build",
    description:
      "I build modular, maintainable software with a strong focus on clean interfaces, reliable backend services, reusable components, and clear code.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Test & Optimize",
    description:
      "I validate functionality and refine performance, accessibility, responsiveness, security, and the overall user experience before release.",
    icon: Gauge,
  },
  {
    number: "05",
    title: "Deploy & Iterate",
    description:
      "I deploy production-ready software, monitor the result, identify weaknesses, and continuously improve the system based on real usage.",
    icon: Rocket,
  },
];

const EngineeringProcessSection = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="process"
      ref={ref}
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-secondary/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center md:mb-20"
          >
            <span className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Engineering Process
            </span>

            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              From <span className="text-gradient">idea</span> to production.
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
              A structured approach to turning complex requirements into
              reliable, scalable software.
            </p>
          </motion.div>

          <div className="relative">
            {/* Desktop connection line */}
            <div className="absolute left-[10%] right-[10%] top-8 hidden h-px bg-border lg:block">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="h-full origin-left bg-gradient-to-r from-primary/20 via-primary to-primary/20"
              />
            </div>

            {/* Mobile/tablet connection line */}
            <div className="absolute bottom-8 left-5 top-8 w-px bg-border lg:hidden">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
                className="h-full origin-top bg-gradient-to-b from-primary/20 via-primary to-primary/20"
              />
            </div>

            <div className="space-y-8 lg:grid lg:grid-cols-5 lg:gap-5 lg:space-y-0">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 30 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + index * 0.12,
                    }}
                    className="relative flex gap-5 lg:block lg:text-center"
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-background shadow-lg shadow-primary/10 lg:mx-auto">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>

                    <div className="flex-1 rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card/60 lg:mt-6">
                      <div className="mb-3 flex items-center justify-between lg:block">
                        <span className="font-mono text-xs tracking-widest text-primary/70">
                          {step.number}
                        </span>

                        {index < processSteps.length - 1 && (
                          <ArrowRight className="h-4 w-4 text-muted-foreground/30 lg:hidden" />
                        )}
                      </div>

                      <h3 className="mb-2 text-lg font-bold tracking-tight sm:text-xl">
                        {step.title}
                      </h3>

                      <p className="text-sm leading-6 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mx-auto mt-12 max-w-3xl text-center md:mt-16"
          >
            <p className="text-sm leading-7 text-muted-foreground sm:text-base">
              The goal is simple:{" "}
              <span className="font-medium text-foreground">
                ship software that works, scales, and remains maintainable.
              </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringProcessSection;
