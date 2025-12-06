import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Database, Cpu } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import heroAvatar from "@/assets/hero-avatar.png";

const specializations = [
  {
    icon: Zap,
    title: "Architecture & Scalability",
    description: "Designing secure, modular, and fault-tolerant full-stack systems built for high traffic and long-term maintenance.",
  },
  {
    icon: Cpu,
    title: "Performance Optimization",
    description: "Specialized focus on algorithmic efficiency, low-latency processing, and optimizing mission-critical database queries.",
  },
  {
    icon: Shield,
    title: "Data & Systems Integrity",
    description: "Implementing secure data modeling, robust testing (unit/integration), and zero-downtime deployment strategies.",
  },
  {
    icon: Database,
    title: "Front-End Engineering",
    description: "Expertise in React/Tailwind/Framer Motion for high-fidelity UI/UX, accessibility, and fluid responsiveness.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
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
                <span className="text-primary">const</span>{" "}
                <span className="text-accent">expertise</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-terminal-green">"Technical Specialization"</span>
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Building <span className="text-gradient">Performant</span> Systems
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My cumulative experience focuses on building performant, scalable, and 
              resilient software across the entire stack.
            </p>
          </motion.div>

          {/* Experience highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-2xl p-8 md:p-10 mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Professional Experience
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My expertise was sharply developed during my tenure at{" "}
                  <span className="text-primary font-semibold">Springer Capital</span>, 
                  where I was integral to a team managing low-latency FinTech systems. 
                  I actively contributed to optimizing data feeds for algorithmic models, 
                  successfully pioneering solutions that resulted in a calculated{" "}
                  <span className="text-gradient font-bold">20% reduction</span> in trade 
                  execution latency across high-frequency data streams.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This rigorous environment is complemented by extensive experience via{" "}
                  <span className="text-primary font-semibold">Forage</span>, where I 
                  oversaw the end-to-end design and deployment of a secure, API-driven 
                  microservice mesh using containers.
                </p>
              </div>
            <div className="relative flex flex-col items-center">
                {/* Avatar */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-6 relative"
                >
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                    <img src={heroAvatar} alt="Philip Inem" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent" />
                </motion.div>
                <div className="code-block text-sm overflow-hidden w-full">
                  <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/50">
                    <div className="w-3 h-3 rounded-full bg-destructive/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
                    <span className="ml-2 text-muted-foreground text-xs">performance.ts</span>
                  </div>
                  <pre className="text-xs md:text-sm">
{`class LatencyOptimizer {
  private readonly target = 20; // % reduction
  
  async optimize(dataFeed: Stream) {
    const metrics = await this.profile();
    return this.apply(metrics, {
      caching: true,
      parallelism: 8,
      batchSize: 1000
    });
  }
  
  get result(): number {
    return this.target; // ✓ Achieved
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specializations grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card variant="glow" className="h-full p-6 md:p-8 group">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <spec.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {spec.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
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
