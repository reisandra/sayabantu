import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Section from "@/components/mitra/Section";
import SectionTitle from "@/components/mitra/SectionTitle";

const requirements = [
  "Usia minimal 18 tahun",
  "Bertanggung jawab & jujur",
  "Memiliki HP aktif",
  "Siap bekerja fleksibel",
  "Lebih bagus punya kendaraan (opsional)",
];

const RequirementsSection = () => (
  <Section id="requirements" alternate>
    <SectionTitle title="Syarat Bergabung" subtitle="Simpel, ga ribet!" />
    <div className="max-w-lg mx-auto space-y-4">
      {requirements.map((req, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-[var(--shadow-card)]"
        >
          <CheckCircle className="w-6 h-6 text-primary shrink-0" />
          <span className="text-foreground font-medium">{req}</span>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default RequirementsSection;
