import { motion } from "framer-motion";
import { UserPlus, Bell, Briefcase, Banknote } from "lucide-react";
import Section from "@/components/mitra/Section";
import SectionTitle from "@/components/mitra/SectionTitle";

const steps = [
  { icon: UserPlus, title: "Daftar jadi mitra", desc: "Isi data via WhatsApp" },
  { icon: Bell, title: "Terima order dari admin", desc: "Notifikasi langsung masuk" },
  { icon: Briefcase, title: "Kerjakan tugas", desc: "Selesaikan dengan baik" },
  { icon: Banknote, title: "Terima bayaran", desc: "Langsung ke rekening kamu" },
];

const HowItWorksSection = () => (
  <Section id="cara-kerja">
    <SectionTitle title="Cara Kerja Mudah" subtitle="Cuma 4 langkah simpel untuk mulai menghasilkan" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="text-center relative"
        >
          <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center relative" style={{ background: "var(--gradient-hero)" }}>
            <step.icon className="w-8 h-8 text-primary-foreground" />
            <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-accent-foreground rounded-full text-xs font-bold flex items-center justify-center">
              {i + 1}
            </span>
          </div>
          <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
          <p className="text-muted-foreground text-sm">{step.desc}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default HowItWorksSection;
