import { ShoppingBag, Car, Users, Star, MoreHorizontal, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

const services = [
  "Belanja & titip barang",
  "Jemput & antar",
  "Temani acara",
  "Ziarah & kebutuhan khusus",
  "Dan lainnya",
];

const SolutionSection = () => {
  const settings = useSiteSettings();
  const waLink = buildWhatsAppLink(settings.mainWhatsAppNumber, settings.mainWhatsAppMessage);

  return (
  <section className="py-20">
    <div className="container">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            {settings.brandName} Hadir untuk{" "}
            <span className="text-primary">Membantu Anda</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Kami menyediakan berbagai layanan fleksibel untuk kebutuhan harian Anda:
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-wa text-primary-foreground px-5 py-2.5 rounded-xl font-semibold text-sm hover:bg-wa-hover transition-all hover:shadow-lg"
          >
            <MessageCircle size={16} />
            Tinggal chat, kami bantu
          </a>
        </motion.div>

        {/* Right - checklist */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm space-y-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 size={20} className="text-secondary shrink-0" />
                <span className="font-medium text-foreground">{s}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default SolutionSection;
