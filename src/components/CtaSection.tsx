import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

const CtaSection = () => {
  const settings = useSiteSettings();
  const waLink = buildWhatsAppLink(settings.mainWhatsAppNumber, settings.mainWhatsAppMessage);

  return (
  <section className="py-24 gradient-cta text-primary-foreground relative overflow-hidden">
    {/* Decorative circles */}
    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

    <div className="container text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold">{settings.mainCtaTitle}</h2>
        <p className="mt-4 text-white/80 text-lg max-w-md mx-auto">
          {settings.mainCtaSubtitle}
        </p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/90 transition-all hover:shadow-xl hover:-translate-y-0.5"
        >
          <MessageCircle size={22} />
          {settings.mainCtaButtonLabel}
        </a>
      </motion.div>
    </div>
  </section>
  );
};

export default CtaSection;
