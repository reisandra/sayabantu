import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Section from "@/components/mitra/Section";
import SectionTitle from "@/components/mitra/SectionTitle";

const testimonials = [
  { text: "Lumayan banget buat nambah penghasilan. Tiap hari ada aja orderan.", name: "Andi, Jakarta" },
  { text: "Kerjanya fleksibel, bisa sambil kerja lain. Cocok banget buat yang butuh sampingan.", name: "Rina, Bandung" },
  { text: "Orderan cukup banyak, dan sistemnya jelas. Recommended!", name: "Budi, Surabaya" },
];

const TestimonialSection = () => (
  <Section id="testimonials">
    <SectionTitle title="Cerita Mitra Kami" subtitle="Mereka sudah merasakan manfaatnya" />
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] relative"
        >
          <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <p className="text-foreground mb-4 italic">"{t.text}"</p>
          <p className="text-muted-foreground text-sm font-semibold">— {t.name}</p>
        </motion.div>
      ))}
    </div>
  </Section>
);

export default TestimonialSection;
