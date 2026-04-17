import { MessageCircle, ClipboardList, UserCheck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: MessageCircle, title: "Chat via WhatsApp", desc: "Hubungi kami lewat WA" },
  { icon: ClipboardList, title: "Sampaikan kebutuhan", desc: "Ceritakan apa yang perlu dibantu" },
  { icon: UserCheck, title: "Kami proses & kirim mitra", desc: "Tim kami siapkan mitra terbaik" },
  { icon: CheckCircle, title: "Selesai! 🎉", desc: "Kebutuhan Anda terpenuhi" },
];

const HowItWorksSection = () => (
  <section id="cara-kerja" className="py-20">
    <div className="container text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Cara Kerja Mudah</h2>
      <p className="mt-3 text-muted-foreground">Hanya 4 langkah sederhana</p>

      <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto relative">
        {/* Connector line (desktop) */}
        <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="flex flex-col items-center gap-4 relative"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-primary relative z-10">
              <s.icon size={26} />
              <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                {i + 1}
              </span>
            </div>
            <h3 className="font-bold text-foreground text-sm">{s.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
