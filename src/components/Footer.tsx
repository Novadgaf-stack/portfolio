import { motion } from "framer-motion";
import { Terminal, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Novadgaf-stack",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/isaac-akinkunmi-20673a375",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:akinkunmiisaac10@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-border/50 py-12">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <motion.a
              href="#home"
              className="flex items-center gap-2 text-lg font-bold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                <Terminal className="h-5 w-5 text-primary" />
              </div>

              <span className="font-mono">
                <span className="text-primary">nova</span>
                <span className="text-muted-foreground">.</span>
                <span className="text-foreground">dev</span>
              </span>
            </motion.a>

            <nav className="flex flex-wrap items-center justify-center gap-5 text-sm">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-secondary text-muted-foreground transition-colors hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-border/30 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-mono text-xs">
                <span className="text-primary">const</span> year ={" "}
                {currentYear};
              </span>

              <span className="mx-2">•</span>

              Built by{" "}
              <span className="font-medium text-foreground">
                Isaac Akinkunmi
              </span>

              <span className="mx-2">•</span>

              Nova.dev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
