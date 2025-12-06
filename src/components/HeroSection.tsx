import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import TypeWriter from "./TypeWriter";

const HeroSection = () => {
  const roles = [
    "Quantitative Systems Engineer",
    "Low-Latency Architect",
    "Full-Stack Developer",
    "FinTech Specialist",
  ];

  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "20%", label: "Latency Reduction" },
    { value: "99.9%", label: "Uptime Delivered" },
    { value: "∞", label: "Lines of Code" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-block mb-6">
            <div className="code-block inline-flex items-center gap-2 text-sm">
              <span className="text-terminal-green">$</span>
              <span className="text-muted-foreground">whoami</span>
              <span className="text-primary">→</span>
              <span className="text-foreground">philip.inem</span>
            </div>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Engineering <span className="text-gradient">Zero-Downtime</span><br />Systems at Scale
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-xl sm:text-2xl md:text-3xl font-light mb-8">
            I'm a <TypeWriter words={roles} className="font-semibold" />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Specializing in mission-critical, low-latency architectures that deliver exceptional throughput.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button variant="hero" size="xl" asChild><a href="#contact"><Mail className="w-5 h-5" />Get in Touch</a></Button>
            <Button variant="glass" size="xl" asChild><a href="#projects">View Projects</a></Button>
            <Button variant="outline" size="xl" asChild><a href="/cv.pdf" download="Philip_Inem_CV.pdf"><Download className="w-5 h-5" />Download CV</a></Button>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex items-center justify-center gap-4 mb-16">
            <Button variant="ghost" size="icon" asChild><a href="https://github.com/Xzavior34" target="_blank" rel="noopener noreferrer"><Github className="w-5 h-5" /></a></Button>
            <Button variant="ghost" size="icon" asChild><a href="https://www.linkedin.com/in/philip-inem" target="_blank" rel="noopener noreferrer"><Linkedin className="w-5 h-5" /></a></Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 + index * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="glass rounded-xl p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
