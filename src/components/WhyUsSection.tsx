import { Zap, Shuffle, ShieldCheck, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  { icon: Zap, title: "Respon Cepat", desc: "Kami balas chat Anda dalam hitungan menit", color: "text-primary", bg: "bg-primary/5" },
  { icon: Shuffle, title: "Fleksibel", desc: "Bisa request apa saja sesuai kebutuhan", color: "text-secondary", bg: "bg-secondary/5" },
  { icon: ShieldCheck, title: "Mitra Terpercaya", desc: "Tim terverifikasi dan berpengalaman", color: "text-primary", bg: "bg-accent" },
  { icon: DollarSign, title: "Harga Transparan", desc: "Tidak ada biaya tersembunyi", color: "text-secondary", bg: "bg-secondary/5" },
];

const WhyUsSection = () => (
  <section className="py-20 bg-section-alt">
    <div className="container text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Kenapa Pilih Sayabantu?</h2>
      <p className="mt-3 text-muted-foreground">Alasan pelanggan mempercayai kami</p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col items-center gap-4 p-6 bg-card rounded-2xl border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className={`w-14 h-14 rounded-2xl ${r.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <r.icon size={26} className={r.color} />
            </div>
            <h3 className="font-bold text-foreground">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
