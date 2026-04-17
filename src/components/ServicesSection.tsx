import { Home, User, Sparkles, Truck } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { icon: Home, title: "Kebutuhan Harian", desc: "Belanja, titip barang, kebutuhan mendadak", bg: "bg-primary/5", iconColor: "text-primary" },
  { icon: User, title: "Jasa Personal", desc: "Temani acara, bantu aktivitas pribadi", bg: "bg-secondary/5", iconColor: "text-secondary" },
  { icon: Sparkles, title: "Kebutuhan Khusus", desc: "Ziarah, permintaan spesifik", bg: "bg-accent", iconColor: "text-primary" },
  { icon: Truck, title: "Antar & Ambil Barang", desc: "Pickup & delivery cepat", bg: "bg-secondary/5", iconColor: "text-secondary" },
];

const ServicesSection = () => (
  <section id="layanan" className="py-20 bg-section-alt">
    <div className="container">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center text-foreground">
        Layanan Kami
      </h2>
      <p className="mt-3 text-center text-muted-foreground max-w-md mx-auto">
        Apapun kebutuhan harian Anda, kami siap membantu
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-2xl p-6 shadow-sm border hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-default"
          >
            <div className={`w-14 h-14 rounded-2xl ${c.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
              <c.icon size={26} className={c.iconColor} />
            </div>
            <h3 className="font-bold text-foreground text-lg">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
