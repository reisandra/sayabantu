import { motion } from "framer-motion";
import {
  MessageSquare, ArrowDown,
} from "lucide-react";
import CtaButton from "@/components/mitra/CtaButton";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

const HeroSection = () => {
  const settings = useSiteSettings();
  const waLink = buildWhatsAppLink(settings.mitraWhatsAppNumber, settings.mitraWhatsAppMessage);

  return (
  <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
    </div>
    <div className="container mx-auto max-w-5xl px-4 relative z-10 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <span className="inline-block bg-primary-foreground/20 text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
          🚀 Buka Pendaftaran Mitra Baru
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          {settings.mitraHeroTitle}
        </h1>
        <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          {settings.mitraHeroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CtaButton href={waLink} size="lg" variant="primary" className="bg-accent text-accent-foreground hover:brightness-110 shadow-[var(--shadow-elevated)]" style={{ animation: "none" } as React.CSSProperties}>
            <MessageSquare className="w-5 h-5" />
            {settings.mitraHeroCtaLabel}
          </CtaButton>
          <CtaButton href="#cara-kerja" variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            Pelajari Cara Kerja
          </CtaButton>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="flex justify-center mt-16"
      >
        <ArrowDown className="w-6 h-6 text-primary-foreground/60 animate-bounce" />
      </motion.div>
    </div>
  </section>
  );
};

export default HeroSection;
