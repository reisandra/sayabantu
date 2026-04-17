import { MessageCircle, ChevronDown, Zap, ShieldCheck, Users } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.jpg";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

const HeroSection = () => {
  const settings = useSiteSettings();
  const waLink = buildWhatsAppLink(settings.mainWhatsAppNumber, settings.mainWhatsAppMessage);

  return (
  <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
    <div className="container flex flex-col-reverse md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex-1 text-center md:text-left"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6"
        >
          <Zap size={14} className="text-primary" />
          Respon Cepat
          <span className="w-1 h-1 rounded-full bg-primary" />
          Mitra Terpercaya
        </motion.div>

        <h1 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.15] text-foreground">
          {settings.mainHeroTitle}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-lg mx-auto md:mx-0 leading-relaxed">
          {settings.mainHeroSubtitle}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-wa text-primary-foreground px-7 py-3.5 rounded-xl font-bold text-base hover:bg-wa-hover transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            {settings.mainHeroCtaLabel}
          </a>
          <a
            href="#layanan"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-7 py-3.5 rounded-xl font-bold text-base hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Lihat Layanan
            <ChevronDown size={18} />
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-8 flex items-center gap-4 justify-center md:justify-start text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users size={16} className="text-primary" />
            <span>100+ pelanggan terbantu</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck size={16} className="text-secondary" />
            <span>Mitra terverifikasi</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="flex-1"
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
          <img
            src={heroImg}
            alt="Tim Sayabantu membantu aktivitas harian"
            width={1024}
            height={768}
            className="relative w-full max-w-lg mx-auto rounded-2xl"
          />
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default HeroSection;
