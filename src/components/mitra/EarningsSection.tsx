import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import Section from "@/components/mitra/Section";
import SectionTitle from "@/components/mitra/SectionTitle";
import CtaButton from "@/components/mitra/CtaButton";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

const EarningsSection = () => {
  const settings = useSiteSettings();
  const waLink = buildWhatsAppLink(settings.mitraWhatsAppNumber, settings.mitraWhatsAppMessage);

  return (
  <Section id="earnings" alternate>
    <SectionTitle title="Berapa Penghasilan Mitra?" subtitle="Sistem bagi hasil yang adil dan transparan" />
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-4">
        {["Dapat hingga 70% dari setiap order", "Bonus untuk mitra aktif", "Semakin banyak order → semakin besar penghasilan"].map((text, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-8 rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0" style={{ background: "var(--gradient-primary)" }}>✓</span>
            <span className="text-foreground font-medium">{text}</span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-card rounded-2xl p-8 shadow-[var(--shadow-elevated)] text-center"
      >
        <p className="text-muted-foreground text-sm mb-2">Contoh Order</p>
        <p className="text-4xl font-extrabold text-foreground mb-1">Rp100.000</p>
        <div className="w-16 h-0.5 mx-auto my-4" style={{ background: "var(--gradient-primary)" }} />
        <p className="text-muted-foreground text-sm mb-2">Kamu Dapat</p>
        <p className="text-5xl font-extrabold text-primary mb-4">Rp70.000</p>
        <CtaButton href={waLink} variant="primary" className="w-full">
          <MessageSquare className="w-4 h-4" />
          Daftar & Mulai Hasilkan
        </CtaButton>
      </motion.div>
    </div>
  </Section>
  );
};

export default EarningsSection;
