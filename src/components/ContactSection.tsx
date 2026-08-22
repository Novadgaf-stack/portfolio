import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  MapPin,
  Clock,
  CheckCircle,
  Globe2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import WorldMap from "./ui/world-map";
import { useToast } from "@/hooks/use-toast";

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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8e7e0d48-9dd0-4195-9dfb-d94a49f5c1c3",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);

        toast({
          title: "Message sent successfully!",
          description:
            "Thank you for reaching out. I'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });

        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error("Failed to send message");
      }
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
      value: "akinkunmiisaac10@gmail.com",
      href: "mailto:akinkunmiisaac10@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
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
  ];

  const globalConnections = [
    {
      start: { lat: 6.5244, lng: 3.3792, label: "Lagos" },
      end: { lat: 40.7128, lng: -74.006, label: "New York" },
    },
    {
      start: { lat: 6.5244, lng: 3.3792, label: "Lagos" },
      end: { lat: 51.5074, lng: -0.1278, label: "London" },
    },
    {
      start: { lat: 6.5244, lng: 3.3792, label: "Lagos" },
      end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
    },
    {
      start: { lat: 6.5244, lng: 3.3792, label: "Lagos" },
      end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-16 md:py-24 lg:py-32"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-black to-black" />

      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[140px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center md:mb-16"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Globe2 className="h-4 w-4" />
              Get In Touch
            </span>

            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl">
              Let's <span className="text-gradient">Collaborate</span>
            </h2>

            <p className="mx-auto max-w-2xl px-2 text-sm text-muted-foreground sm:text-base md:text-lg">
              Have a project, product idea, or engineering opportunity?
              Let's build something meaningful together.
            </p>
          </motion.div>

          <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card
                variant="glass"
                className="border-white/5 bg-white/[0.02] p-6 md:p-8"
              >
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
                        transition={{
                          type: "spring",
                          duration: 0.5,
                        }}
                        className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20"
                      >
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </motion.div>

                      <h3 className="mb-2 text-2xl font-bold">
                        Message Sent!
                      </h3>

                      <p className="text-muted-foreground">
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.3 }}
                      >
                        <label
                          className="mb-2 block text-sm font-medium"
                          htmlFor="name"
                        >
                          Name
                        </label>

                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                          placeholder="Your name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                      >
                        <label
                          className="mb-2 block text-sm font-medium"
                          htmlFor="email"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                          placeholder="your@email.com"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5 }}
                      >
                        <label
                          className="mb-2 block text-sm font-medium"
                          htmlFor="message"
                        >
                          Message
                        </label>

                        <textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full resize-none rounded-lg border border-border bg-secondary px-4 py-3 text-foreground outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
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
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                              }}
                            >
                              Sending...
                            </motion.span>
                          ) : (
                            <>
                              <Send className="h-5 w-5" />
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

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Card
                    variant="glow"
                    className="group border-white/5 bg-white/[0.02] p-5"
                  >
                    <CardContent className="flex items-center gap-4 p-0">
                      <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20"
                        whileHover={{ rotate: 5 }}
                      >
                        <info.icon className="h-5 w-5 text-primary" />
                      </motion.div>

                      <div>
                        <p className="text-sm text-muted-foreground">
                          {info.label}
                        </p>

                        {info.href ? (
                          <a
                            href={info.href}
                            className="font-medium transition-colors hover:text-primary"
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="pt-2"
              >
                <p className="mb-4 text-sm text-muted-foreground">
                  Connect with me
                </p>

                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link) => (
                    <motion.div
                      key={link.label}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="glass" size="lg" asChild>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <link.icon className="h-5 w-5" />
                          {link.label}
                        </a>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-terminal-green opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-terminal-green" />
                  </span>

                  <span className="font-medium">Currently Available</span>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  Open to full-time opportunities, contract work, paid
                  internships, freelance projects, and remote collaboration.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-12 overflow-hidden rounded-3xl border border-white/5 bg-white/[0.015] p-4 md:mt-16 md:p-6"
          >
            <div className="mb-5 flex flex-col gap-2 md:mb-6 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Globe2 className="h-5 w-5" />
                  <span className="text-sm font-semibold uppercase tracking-[0.18em]">
                    Global Availability
                  </span>
                </div>

                <h3 className="text-xl font-bold sm:text-2xl md:text-3xl">
                  Building from <span className="text-gradient">Lagos</span>,
                  working globally.
                </h3>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-right">
                Open to collaborating with teams, founders, startups, and
                companies across markets and time zones.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/5">
              <WorldMap
                dots={globalConnections}
                lineColor="#B02A55"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(176,42,85,0.8)]" />
                Lagos, Nigeria
              </span>

              <span>Global collaboration</span>
              <span>Remote-friendly</span>
              <span>Multiple time zones</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full"
              asChild
            >
              <a href="/cv.pdf" download="Isaac_Akinkunmi_CV.pdf">
                Download Full CV (PDF)
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

