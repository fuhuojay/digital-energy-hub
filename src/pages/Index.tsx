import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBand from "@/components/TrustBand";
import BrandsSection from "@/components/BrandsSection";
import SolutionsSection from "@/components/SolutionsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ScenariosSection from "@/components/ScenariosSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <TrustBand />
    <BrandsSection />
    <SolutionsSection />
    <CapabilitiesSection />
    <ScenariosSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
