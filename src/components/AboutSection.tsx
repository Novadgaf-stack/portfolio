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
    <section id="about" className="py-16 md:py-24 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
              Crafting <span className="text-gradient">Performant</span> Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Three years of experience building scalable, resilient software 
              across the entire technology stack.
            </p>
          </motion.div>

          {/* Experience highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-10 mb-10 md:mb-16"
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                  Professional Experience
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 md:mb-6">
                  My expertise was sharply developed during my tenure at{" "}
                  <span className="text-primary font-semibold">Springer Capital</span>, 
                  where I was integral to a team managing low-latency FinTech systems. 
                  I actively contributed to optimizing data feeds for algorithmic models, 
                  successfully pioneering solutions that resulted in a calculated{" "}
                  <span className="text-gradient font-bold">20% reduction</span> in trade 
                  execution latency across high-frequency data streams.
                </p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed hidden sm:block">
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
                  className="relative"
                >
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 glow-primary">
                    <img src={heroAvatar} alt="Philip Inem" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent" />
                </motion.div>
                
                {/* Key highlights */}
                <div className="mt-6 grid grid-cols-2 gap-3 w-full max-w-xs">
                  <div className="glass rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-gradient">20%</p>
                    <p className="text-xs text-muted-foreground">Latency Reduced</p>
                  </div>
                  <div className="glass rounded-lg p-3 text-center">
                    <p className="text-xl font-bold text-gradient">3+</p>
                    <p className="text-xs text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specializations grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card variant="glow" className="h-full p-4 sm:p-6 md:p-8 group">
                  <CardContent className="p-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                      <spec.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                      {spec.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
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
