import { motion } from "framer-motion";
import { Users, MessageCircle, Briefcase, Clock, Wallet } from "lucide-react";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

const perks = [
  { icon: Clock, text: "Waktu fleksibel" },
  { icon: Wallet, text: "Penghasilan tambahan" },
  { icon: Briefcase, text: "Berbagai jenis tugas" },
];

const MitraSection = () => {
  const settings = useSiteSettings();
  const waMitraLink = buildWhatsAppLink(settings.mitraWhatsAppNumber, settings.mitraWhatsAppMessage);

  return (
  <section id="mitra" className="py-20">
    <div className="container">
      <div className="bg-card border rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-sm">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto md:mx-0 mb-5">
            <Users size={28} className="text-secondary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
            Gabung Jadi Mitra {settings.brandName}
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">
            Dapatkan penghasilan tambahan dengan waktu fleksibel. Bergabung bersama mitra kami yang sudah aktif.
          </p>
          <a
            href={waMitraLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all hover:shadow-lg"
          >
            <MessageCircle size={18} />
            Daftar Jadi Mitra
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="space-y-4">
            {perks.map((p, i) => (
              <div key={i} className="flex items-center gap-4 bg-section-alt rounded-xl p-4">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <p.icon size={20} className="text-secondary" />
                </div>
                <span className="font-medium text-foreground">{p.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default MitraSection;
