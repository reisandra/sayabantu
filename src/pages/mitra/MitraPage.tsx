import HeroSection from "@/components/mitra/HeroSection";
import ValueSection from "@/components/mitra/ValueSection";
import JobsSection from "@/components/mitra/JobsSection";
import EarningsSection from "@/components/mitra/EarningsSection";
import HowItWorksSection from "@/components/mitra/HowItWorksSection";
import RequirementsSection from "@/components/mitra/RequirementsSection";
import TestimonialSection from "@/components/mitra/TestimonialSection";
import UrgencySection from "@/components/mitra/UrgencySection";
import FinalCtaSection from "@/components/mitra/FinalCtaSection";
import MitraNavbar from "@/components/mitra/MitraNavbar";
import { useSiteSettings } from "@/lib/siteSettings";
import "@/styles/mitra.css";

const Index = () => {
  const settings = useSiteSettings();

  return (
    <main>
      <MitraNavbar />
      <HeroSection />
      <ValueSection />
      <JobsSection />
      <EarningsSection />
      <HowItWorksSection />
      <RequirementsSection />
      <TestimonialSection />
      <UrgencySection />
      <FinalCtaSection />
      <footer className="bg-foreground text-background/60 text-center py-6 text-sm">
        © 2026 {settings.brandName}. Semua hak dilindungi.
      </footer>
    </main>
  );
};

export default Index;
