import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Github, Linkedin, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        });

      if (dbError) {
        console.error("Database error:", dbError);
        throw new Error("Failed to save submission");
      }

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (emailError) {
        console.error("Email error:", emailError);
        // Don't throw - still saved to DB
      }

      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", message: "" });
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "philipinem7@gmail.com",
      href: "mailto:philipinem7@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Globally",
      href: null,
    },
    {
      icon: Clock,
      label: "Response Time",
      value: "Within 24 hours",
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Xzavior34", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/philip-inem", label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
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
                <span className="text-primary">await</span>{" "}
                <span className="text-accent">connect</span>
                <span className="text-muted-foreground">(you, me);</span>
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to build something exceptional? I'm always open to discussing 
              new projects, creative ideas, or opportunities to be part of your visions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card variant="glass" className="p-6 md:p-8">
                <CardContent className="p-0">
                  {isSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-primary" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground">
                        Check your inbox for a confirmation email.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                          placeholder="Your name"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                          placeholder="your@email.com"
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                      >
                        <label className="block text-sm font-medium mb-2" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none text-foreground placeholder:text-muted-foreground"
                          placeholder="Tell me about your project..."
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6 }}
                      >
                        <Button 
                          type="submit" 
                          variant="hero" 
                          size="lg" 
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <motion.span
                              animate={{ opacity: [1, 0.5, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              Sending...
                            </motion.span>
                          ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Info cards */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Card variant="glow" className="p-5 group cursor-pointer">
                    <CardContent className="p-0 flex items-center gap-4">
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        whileHover={{ rotate: 5 }}
                      >
                        <info.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="pt-6"
              >
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="glass" size="lg" asChild>
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <link.icon className="w-5 h-5" />
                          {link.label}
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Availability status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-6 mt-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terminal-green opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-terminal-green" />
                  </span>
                  <span className="font-medium">Currently Available</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Open to full-time opportunities, contract work, and consulting 
                  engagements. Let's discuss how I can contribute to your team.
                </p>
              </motion.div>

              {/* Download CV */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="/cv.pdf" download="Philip_Inem_CV.pdf">
                    Download Full CV (PDF)
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
