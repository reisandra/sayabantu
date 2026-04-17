import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import CtaButton from "@/components/mitra/CtaButton";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

const FinalCtaSection = () => {
  const settings = useSiteSettings();
  const waLink = buildWhatsAppLink(settings.mitraWhatsAppNumber, settings.mitraWhatsAppMessage);

  return (
  <section className="py-20 md:py-28 px-4 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 right-20 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
    </div>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto max-w-3xl text-center relative z-10"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
        Siap Mulai Hasilkan Uang? 💰
      </h2>
      <p className="text-primary-foreground/90 text-lg mb-8">
        Daftar sekarang dan mulai dapat order hari ini
      </p>
      <CtaButton
        href={waLink}
        size="lg"
        className="bg-accent text-accent-foreground hover:brightness-110 shadow-[var(--shadow-elevated)] text-xl px-10 py-5"
        style={{ animation: "none" } as React.CSSProperties}
      >
        <MessageSquare className="w-6 h-6" />
        Daftar Jadi Mitra Sekarang
      </CtaButton>
    </motion.div>
  </section>
  );
};

export default FinalCtaSection;
