import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CodeRain from "@/components/CodeRain";
import ParticleBackground from "@/components/ParticleBackground";
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Background effects */}
      <ParticleBackground />
      <CodeRain />
      <div className="fixed inset-0 bg-noise pointer-events-none z-0" />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <PageTransition>
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
          </main>
          <Footer />
        </PageTransition>
      </div>
    </div>
  );
};

export default Index;
