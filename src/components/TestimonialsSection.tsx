import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    quote: "Philip's work on low-latency architectures directly contributed to a 20% improvement in our transaction processing speed. His ability to deliver mission-critical microservice solutions is exceptional.",
    author: "Senior PM, Springer Capital",
    role: "Quantitative Development Lead",
    highlight: "20% improvement",
  },
  {
    quote: "He consistently demonstrated the capacity to transition complex business requirements into robust, full-stack applications, showing genuine technical leadership across the entire SDLC.",
    author: "Project Manager, Forage Program",
    role: "Software Engineering Mentor",
    highlight: "technical leadership",
  },
  {
    quote: "Beyond development, Philip optimized our database queries and enhanced our API-driven performance, dramatically improving user stability and reducing operational latency.",
    author: "Founder, Sara Foundation",
    role: "Digital Transformation Officer",
    highlight: "dramatically improving",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-secondary/20" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="code-block text-sm">
                <span className="text-primary">{"// "}</span>
                <span className="text-muted-foreground">What clients say</span>
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Endorsements on <span className="text-gradient">Impact</span>
            </h2>
          </motion.div>

          {/* Testimonial carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-strong rounded-2xl p-8 md:p-12 text-center">
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-6" />
              
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90">
                  "{testimonials[currentIndex].quote.split(testimonials[currentIndex].highlight).map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <span className="text-gradient font-semibold">
                          {testimonials[currentIndex].highlight}
                        </span>
                      )}
                    </span>
                  ))}"
                </p>
                
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <Button variant="ghost" size="icon" onClick={prevTestimonial}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex 
                          ? "bg-primary w-8" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
                
                <Button variant="ghost" size="icon" onClick={nextTestimonial}>
                  <ChevronRight className="w-5 h-5" />
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
