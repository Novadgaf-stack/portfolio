import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import SkillsRadarChart from "./SkillsRadarChart";

const skillCategories = [
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
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "Redis", level: 85 },
      { name: "Elasticsearch", level: 78 },
      { name: "TimescaleDB", level: 75 },
      { name: "Neo4j", level: 65 },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 92 },
      { name: "Kubernetes", level: 80 },
      { name: "AWS", level: 88 },
      { name: "GCP", level: 82 },
      { name: "CI/CD", level: 90 },
      { name: "Terraform", level: 75 },
    ],
  },
  {
    title: "Specializations",
    skills: [
      { name: "Low-Latency Systems", level: 92 },
      { name: "Microservices", level: 90 },
      { name: "API Design", level: 95 },
      { name: "System Design", level: 88 },
      { name: "Data Pipelines", level: 85 },
      { name: "Performance Tuning", level: 90 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm font-mono text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
};



const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [viewMode, setViewMode] = useState<"radar" | "bars">("radar");

  return (
    <section id="skills" className="py-16 md:py-24 lg:py-32 relative bg-secondary/20" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Technical Skills
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              My <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2 mb-8">
              Comprehensive skills across modern technologies with a focus on 
              performance optimization and scalable architecture.
            </p>
            
            {/* View toggle */}
            <div className="inline-flex items-center gap-2 p-1 rounded-lg bg-secondary/50 border border-border">
              <button
                onClick={() => setViewMode("radar")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === "radar" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Radar View
              </button>
              <button
                onClick={() => setViewMode("bars")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  viewMode === "bars" 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Detailed View
              </button>
            </div>
          </motion.div>

          {/* Radar Chart View */}
          {viewMode === "radar" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center mb-12"
            >
              <SkillsRadarChart />
            </motion.div>
          )}

          {/* Skills grid - Bar View */}
          {viewMode === "bars" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6"
                >
                  <h3 className="text-base sm:text-lg font-bold mb-4 md:mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {category.title}
                  </h3>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={categoryIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tech logos/icons section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 md:mt-16 text-center"
          >
            <p className="text-muted-foreground text-sm sm:text-base mb-6 md:mb-8">
              Core Technologies & Frameworks
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
              {["React", "TypeScript", "Python", "Node.js", "PostgreSQL", "Docker", "AWS", "Kubernetes", "Redis", "GraphQL"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-card border border-border hover:border-primary/50 text-xs sm:text-sm font-mono cursor-default transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
