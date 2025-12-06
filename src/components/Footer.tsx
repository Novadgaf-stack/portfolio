import { motion } from "framer-motion";
import { Terminal, Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 text-lg font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Github, href: "https://github.com/Xzavior34" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/philip-inem" },
                { icon: Mail, href: "mailto:philipinem7@gmail.com" },
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-8 pt-8 border-t border-border/30 text-center">
            <motion.p 
              className="text-sm text-muted-foreground flex items-center justify-center gap-1 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-mono text-xs">
                <span className="text-primary">const</span> year = {currentYear};
              </span>
              <span className="mx-2">•</span>
              Built with <Heart className="w-3 h-3 text-destructive inline mx-1" /> by Philip Inem
              <span className="mx-2">•</span>
              All rights reserved
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
