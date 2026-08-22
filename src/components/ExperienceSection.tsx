import { motion, useInView } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  Server,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const experiences = [
  {
    period: "2025 — Present",
    title: "Full-Stack Developer",
    company: "Independent / Freelance",
    description:
      "Building production-focused web applications across fintech, marketplaces, SaaS, APIs, and Web3 products. Responsible for architecture, frontend systems, backend services, databases, integrations, and deployment.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    icon: Code2,
  },
  {
    period: "2024 — 2025",
    title: "Software Engineering Projects",
    company: "Product & Engineering",
    description:
      "Designed and developed full-stack applications with a strong focus on responsive interfaces, API architecture, authentication, database design, and reliable user experiences.",
    technologies: ["Next.js", "Express", "Prisma", "Supabase"],
    icon: Server,
  },
  {
    period: "2023 — 2024",
    title: "Software Engineering Development",
    company: "Continuous Engineering Practice",
    description:
      "Built a broad engineering foundation through practical projects covering frontend development, backend systems, relational databases, REST APIs, authentication, cloud tooling, and modern development workflows.",
    technologies: ["JavaScript", "HTML", "CSS", "SQL"],
    icon: Database,
  },
];

const engineeringFocus = [
  {
    icon: Code2,
    title: "Product Engineering",
    text: "Turning product requirements into polished, maintainable applications.",
  },
  {
    icon: Server,
    title: "Backend Systems",
    text: "Designing APIs, services, authentication, and data flows that scale cleanly.",
  },
  {
    icon: Database,
    title: "Data Architecture",
    text: "Working with relational and cloud databases to build dependable data systems.",
  },
  {
    icon: Sparkles,
    title: "Modern Web",
    text: "Using current frameworks and developer tooling to ship faster without sacrificing quality.",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-16 md:py-24 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <BriefcaseBusiness className="w-4 h-4" />
              Experience
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Engineering <span className="text-gradient">Experience</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              A practical engineering journey focused on building real
              products, reliable systems, and useful digital experiences.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-14">
              {experiences.map((experience, index) => {
                const Icon = experience.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.article
                    key={experience.title}
                    initial={{
                      opacity: 0,
                      x: isEven ? -40 : 40,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    className="relative md:grid md:grid-cols-2 md:gap-12"
                  >
                    <div
                      className={`pl-14 md:pl-0 ${
                        isEven
                          ? "md:text-right md:pr-12"
                          : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <div className="glass rounded-2xl p-6 md:p-7 border border-border/60 hover:border-primary/30 transition-colors">
                        <div
                          className={`flex items-center gap-3 mb-4 ${
                            isEven ? "md:justify-end" : ""
                          }`}
                        >
                          <CalendarDays className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">
                            {experience.period}
                          </span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-1">
                          {experience.title}
                        </h3>

                        <p className="text-sm text-muted-foreground mb-4">
                          {experience.company}
                        </p>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5">
                          {experience.description}
                        </p>

                        <div
                          className={`flex flex-wrap gap-2 ${
                            isEven ? "md:justify-end" : ""
                          }`}
                        >
                          {experience.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="px-2.5 py-1 rounded-md bg-primary/10 border border-primary/15 text-xs text-primary"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-0 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
                      <div className="w-10 h-10 rounded-full bg-background border border-primary/40 flex items-center justify-center shadow-lg shadow-primary/10">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 md:mt-20"
          >
            {engineeringFocus.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-border/60 bg-card/40 p-5 hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
