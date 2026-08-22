import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Globe2,
  UserRound,
  Code2,
} from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    quote:
      "Isaac built a professional website for Nexnovate Business Concept and translated our vision into a modern digital presence that represents the business effectively.",
    author: "Mr. & Mrs. Akinkunmi",
    role: "Founders · Nexnovate Business Concept",
    icon: Globe2,
  },
  {
    quote:
      "Isaac developed my portfolio website with a strong focus on presentation, structure, and creating a professional online presence for my work.",
    author: "Ireoluwa Sharon",
    role: "Founder · Airs Studio",
    icon: UserRound,
  },
  {
    quote:
      "Isaac assisted me across several projects, contributing his full-stack development skills and helping move different parts of the work forward.",
    author: "Philip Inem",
    role: "Full-Stack Web Developer",
    icon: Code2,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const current = testimonials[currentIndex];
  const Icon = current.icon;

  const nextTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-secondary/20 py-16 md:py-24 lg:py-32"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{ duration: 0.6 }}
            className="mb-10 text-center md:mb-16"
          >
            <span className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              Client Feedback
            </span>

            <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:mb-6 md:text-5xl">
              What People{" "}
              <span className="text-gradient">Say</span>
            </h2>

            <p className="mx-auto max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
              A few words from people and teams I have worked
              with across websites, portfolios, and software
              projects.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="relative"
          >
            <div className="glass-strong rounded-2xl p-6 text-center sm:p-8 md:p-12">
              <motion.div
                key={currentIndex}
                initial={{
                  opacity: 0,
                  x: 40,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <Quote className="mx-auto mb-6 h-10 w-10 text-primary/25 md:h-12 md:w-12" />

                <p className="mb-8 text-lg leading-relaxed text-foreground/90 md:text-xl">
                  "{current.quote}"
                </p>

                <div>
                  <p className="font-semibold text-foreground">
                    {current.author}
                  </p>

                  <p className="text-sm text-muted-foreground">
                    {current.role}
                  </p>
                </div>
              </motion.div>

              <div className="mt-8 flex items-center justify-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`View testimonial ${index + 1}`}
                      aria-current={
                        index === currentIndex
                      }
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-8 bg-primary"
                          : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
