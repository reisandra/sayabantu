import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

const FloatingWA = () => {
  const settings = useSiteSettings();
  const waLink = buildWhatsAppLink(settings.mainWhatsAppNumber, settings.mainWhatsAppMessage);

  return (
  <a
    href={waLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-wa text-primary-foreground rounded-full flex items-center justify-center shadow-xl hover:bg-wa-hover hover:scale-110 transition-all duration-200"
  >
    {/* Pulse ring */}
    <span className="absolute inset-0 rounded-full bg-wa/40 animate-pulse-ring" />
    <MessageCircle size={28} className="relative z-10" />
  </a>
  );
};

export default FloatingWA;
