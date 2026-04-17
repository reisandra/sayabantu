import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Rina Sari", initials: "RS", text: "Sangat membantu! Saya tinggal chat, semua beres. Nggak perlu repot lagi.", rating: 5 },
  { name: "Budi Prasetyo", initials: "BP", text: "Cepat dan aman, mitra-nya ramah banget. Barang sampai tepat waktu.", rating: 5 },
  { name: "Dewi Lestari", initials: "DL", text: "Recommended banget! Harga jelas dari awal, pelayanan top.", rating: 5 },
];

const TestimonialSection = () => (
  <section id="testimoni" className="py-20">
    <div className="container text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">Apa Kata Mereka?</h2>
      <p className="mt-3 text-muted-foreground">Pengalaman nyata dari pelanggan kami</p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-all duration-300 relative"
          >
            <Quote size={32} className="text-primary/10 absolute top-4 right-4" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {t.initials}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">"{t.text}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
