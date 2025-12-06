import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-secondary/20" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
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
                <span className="text-primary">import</span>{" "}
                <span className="text-foreground">{"{ skills }"}</span>{" "}
                <span className="text-primary">from</span>{" "}
                <span className="text-terminal-green">"@philip/expertise"</span>
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Technical <span className="text-gradient">Arsenal</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mastery across the modern stack with advanced cloud integration patterns 
              and specialized focus on high-performance systems.
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
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
          </div>

          {/* Tech logos/icons section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-8">
              Core Technologies & Frameworks
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "TypeScript", "Python", "Node.js", "PostgreSQL", "Docker", "AWS", "Kubernetes", "Redis", "GraphQL"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 text-sm font-mono cursor-default transition-colors"
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
