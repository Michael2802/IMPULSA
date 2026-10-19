import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ClientsSection from "@/components/sections/ClientsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SpecialOccasionsSection from "@/components/sections/SpecialOccasionsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/layout/Footer";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        <ProjectsSection />
        <SpecialOccasionsSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
