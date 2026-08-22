import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  Layers3,
} from "lucide-react";
import SkillsRadarChart from "./SkillsRadarChart";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    description: "Languages I use to build applications, services, and systems.",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "SQL",
      "Rust",
      "Go",
    ],
  },
  {
    title: "Frontend",
    icon: Code2,
    description: "Interfaces that are responsive, accessible, and built to scale.",
    skills: [
      "React",
      "Next.js",
      "Angular",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Framer Motion",
      "Vue.js",
      "Three.js",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Reliable APIs, services, authentication, and backend architecture.",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "GraphQL",
      "WebSockets",
      "gRPC",
      "REST APIs",
      "Prisma",
      "JWT",
      "OAuth",
      "Auth.js",
      "Firebase Auth",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    description:
      "Data systems for application storage, caching, querying, and realtime products.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "TimescaleDB",
      "Neo4j",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    description:
      "Infrastructure, deployment workflows, cloud platforms, and production tooling.",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Google Cloud",
      "GCP",
      "Vercel",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
    ],
  },
  {
    title: "Engineering",
    icon: Layers3,
    description:
      "Engineering practices used to design maintainable, reliable, and performant systems.",
    skills: [
      "System Design",
      "API Design",
      "Microservices",
      "Low-Latency Systems",
      "Data Pipelines",
      "Performance Tuning",
      "Database Design",
      "Authentication",
      "Responsive UX",
      "Accessibility",
      "Testing",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    description:
      "Tools supporting development, collaboration, design, testing, and deployment.",
    skills: [
      "Git",
      "GitHub",
      "npm",
      "Figma",
      "Adobe XD",
      "GSAP",
      "Postman",
      "VS Code",
      "OpenAI API",
      "Gemini API",
      "Claude API",
    ],
  },
];

const detailedSkills = [
  {
    title: "Languages",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Python", level: 90 },
      { name: "SQL", level: 88 },
      { name: "Rust", level: 70 },
      { name: "Go", level: 65 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "Angular", level: 78 },
      { name: "Vue.js", level: 75 },
      { name: "Three.js", level: 65 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "GraphQL", level: 82 },
      { name: "WebSockets", level: 88 },
      { name: "gRPC", level: 75 },
      { name: "REST APIs", level: 95 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 85 },
      { name: "Elasticsearch", level: 78 },
      { name: "TimescaleDB", level: 75 },
      { name: "Neo4j", level: 65 },
      { name: "Supabase", level: 88 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 92 },
      { name: "Kubernetes", level: 80 },
      { name: "AWS", level: 88 },
      { name: "GCP", level: 82 },
      { name: "Azure", level: 78 },
      { name: "CI/CD", level: 90 },
      { name: "Terraform", level: 75 },
      { name: "Vercel", level: 92 },
    ],
  },
  {
    title: "Engineering",
    skills: [
      { name: "API Design", level: 95 },
      { name: "System Design", level: 88 },
      { name: "Microservices", level: 90 },
      { name: "Low-Latency Systems", level: 92 },
      { name: "Data Pipelines", level: 85 },
      { name: "Performance Tuning", level: 90 },
      { name: "Testing", level: 82 },
    ],
  },
];

const SkillBar = ({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <div ref={ref} className="mb-4">
      <div className="mb-2 flex justify-between gap-4">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-sm text-primary">{level}%</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            duration: 1,
            delay,
            ease: "easeOut",
          }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [viewMode, setViewMode] = useState<"radar" | "bars">("radar");

  const coreStack = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "Supabase",
    "Tailwind CSS",
    "Docker",
    "AWS",
    "Git",
    "GitHub",
    "Vercel",
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative overflow-hidden py-20 md:py-28 lg:py-32"
    >
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center md:mb-14"
          >
            <span className="mb-5 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Technical Stack
            </span>

            <h2 className="mb-5 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Tools for{" "}
              <span className="text-gradient">building.</span>
            </h2>

            <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
              A practical stack covering interfaces, backend systems, data,
              infrastructure, and the engineering practices that connect them.
            </p>

            {/* View Toggle */}
            <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-secondary/50 p-1">
              <button
                type="button"
                onClick={() => setViewMode("radar")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  viewMode === "radar"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Radar View
              </button>

              <button
                type="button"
                onClick={() => setViewMode("bars")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  viewMode === "bars"
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Detailed View
              </button>
            </div>
          </motion.div>

          {/* Radar View */}
          {viewMode === "radar" && (
            <motion.div
              key="radar"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12 flex justify-center"
            >
              <SkillsRadarChart />
            </motion.div>
          )}

          {/* Detailed View */}
          {viewMode === "bars" && (
            <motion.div
              key="bars"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {detailedSkills.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.08,
                  }}
                  className="rounded-2xl border border-border/60 bg-card/50 p-5 shadow-xl backdrop-blur-xl sm:p-6"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <h3 className="text-lg font-bold">
                      {category.title}
                    </h3>

                    <span className="font-mono text-xs text-muted-foreground/40">
                      0{categoryIndex + 1}
                    </span>
                  </div>

                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.08 + skillIndex * 0.04}
                    />
                  ))}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Technology Categories */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16"
          >
            {skillCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.55 + index * 0.06,
                  }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="h-full rounded-2xl border border-border/60 bg-card/50 p-5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:shadow-2xl sm:p-6">
                    <div className="mb-5 flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <span className="font-mono text-xs text-muted-foreground/40">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mb-2 text-lg font-bold tracking-tight sm:text-xl">
                      {category.title}
                    </h3>

                    <p className="mb-5 text-sm leading-6 text-muted-foreground">
                      {category.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-border/60 bg-background/50 px-2.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Core Stack */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 md:mt-16"
          >
            <div className="rounded-2xl border border-border/60 bg-card/40 p-5 backdrop-blur-xl sm:p-6 md:p-8">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
                    Core Stack
                  </p>

                  <h3 className="text-xl font-bold sm:text-2xl">
                    Technologies I reach for most.
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground">
                  Focused over bloated.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {coreStack.map((technology, index) => (
                  <motion.span
                    key={technology}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{
                      delay: 0.85 + index * 0.04,
                    }}
                    whileHover={{ y: -2 }}
                    className="rounded-full border border-border/60 bg-background/60 px-3.5 py-2 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground sm:text-sm"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;