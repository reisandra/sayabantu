import { motion } from "framer-motion";
import { ShoppingCart, Truck, Users, Flower2, Puzzle } from "lucide-react";
import Section from "@/components/mitra/Section";
import SectionTitle from "@/components/mitra/SectionTitle";

const jobs = [
  { icon: ShoppingCart, label: "Belanja / titip barang" },
  { icon: Truck, label: "Antar & ambil barang" },
  { icon: Users, label: "Jemput anak / temani orang" },
  { icon: Flower2, label: "Ziarah / kebutuhan khusus" },
  { icon: Puzzle, label: "Dan berbagai tugas lainnya" },
];

const JobsSection = () => (
  <Section id="jobs">
    <SectionTitle title="Apa Saja yang Akan Kamu Kerjakan?" subtitle="Setiap hari beda, tidak monoton, dan fleksibel sesuai kemampuan kamu" />
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {jobs.map((job, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="bg-card rounded-xl p-5 text-center shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform"
        >
          <div className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center" style={{ background: "var(--gradient-secondary)" }}>
            <job.icon className="w-7 h-7 text-secondary-foreground" />
          </div>
          <p className="font-semibold text-foreground text-sm">{job.label}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default JobsSection;
