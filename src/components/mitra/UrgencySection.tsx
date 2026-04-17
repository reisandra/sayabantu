import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import Section from "@/components/mitra/Section";

const UrgencySection = () => (
  <Section alternate className="py-12 md:py-16">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto"
    >
      <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-accent/20">
        <AlertTriangle className="w-7 h-7 text-accent" />
      </div>
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-3">
        Kesempatan Terbatas ⏳
      </h2>
      <p className="text-muted-foreground text-lg">
        Kami membuka slot mitra terbatas untuk menjaga kualitas layanan. Jangan sampai kehabisan!
      </p>
    </motion.div>
  </Section>
);

export default UrgencySection;
