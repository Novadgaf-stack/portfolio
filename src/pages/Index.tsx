import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import PageTransition from "@/components/PageTransition";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      {/* Background effects */}
      <ParticleBackground />
      <div className="fixed inset-0 z-0 bg-noise pointer-events-none" />

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

        <BackToTop />
      </div>
    </div>
  );
};

export default Index;
