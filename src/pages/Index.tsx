import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBand from "@/components/TrustBand";
import SolutionsSection from "@/components/SolutionsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ScenariosSection from "@/components/ScenariosSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TrustBand />
    <SolutionsSection />
    <CapabilitiesSection />
    <WhyUsSection />
    <ScenariosSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
