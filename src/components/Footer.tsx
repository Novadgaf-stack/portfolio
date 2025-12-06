import { motion } from "framer-motion";
import { Terminal, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 text-lg font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <Terminal className="w-5 h-5 text-primary" />
              <span className="font-mono">
                <span className="text-primary">philip</span>
                <span className="text-muted-foreground">.</span>
                <span className="text-foreground">dev</span>
              </span>
            </motion.a>

            {/* Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-destructive" /> by Philip Inem
            </p>
          </div>

          {/* Bottom text */}
          <div className="mt-8 pt-8 border-t border-border/30 text-center">
            <p className="text-xs text-muted-foreground font-mono">
              <span className="text-primary">const</span> year = {new Date().getFullYear()};{" "}
              <span className="text-muted-foreground">// All rights reserved</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
