import { motion } from "framer-motion";
import { DollarSign, Clock, MapPin, Heart, TrendingUp } from "lucide-react";
import Section from "@/components/mitra/Section";
import SectionTitle from "@/components/mitra/SectionTitle";

const items = [
  { icon: DollarSign, title: "Penghasilan tambahan tanpa batas", desc: "Semakin rajin, semakin banyak yang kamu dapat" },
  { icon: Clock, title: "Waktu fleksibel", desc: "Bisa sambilan, atur jadwalmu sendiri" },
  { icon: MapPin, title: "Kerja di area sekitar kamu", desc: "Ga perlu jauh-jauh, order ada di sekitarmu" },
  { icon: Heart, title: "Bantu orang + dapat uang", desc: "Kerja yang bermakna sekaligus menghasilkan" },
  { icon: TrendingUp, title: "Order terus mengalir", desc: "Kebutuhan pelanggan selalu ada setiap hari" },
];

const ValueSection = () => (
  <Section id="value" alternate>
    <SectionTitle title="Kenapa Jadi Mitra Sayabantu?" subtitle="Banyak alasan kenapa kamu harus gabung sekarang" />
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow"
        >
          <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: "var(--gradient-primary)" }}>
            <item.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="font-bold text-foreground text-lg mb-1">{item.title}</h3>
          <p className="text-muted-foreground text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default ValueSection;
