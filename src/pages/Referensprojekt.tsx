import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Referensprojekt = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Referensprojekt;
