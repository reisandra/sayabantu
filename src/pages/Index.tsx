import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialSection from "@/components/TestimonialSection";
import CtaSection from "@/components/CtaSection";
import MitraSection from "@/components/MitraSection";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

const Index = () => (
  <div className="scroll-smooth">
    <Navbar />
    <div id="beranda">
      <HeroSection />
    </div>
    <ProblemSection />
    <SolutionSection />
    <ServicesSection />
    <HowItWorksSection />
    <WhyUsSection />
    <TestimonialSection />
    <CtaSection />
    <MitraSection />
    <Footer />
    <FloatingWA />
  </div>
);

export default Index;
