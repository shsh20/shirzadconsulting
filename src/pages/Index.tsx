import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import ProjectsSection from "@/components/ProjectsSection";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhySection />
        <ProjectsSection />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
