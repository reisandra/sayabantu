import { MessageCircle, MapPin, Mail } from "lucide-react";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

const Footer = () => {
  const settings = useSiteSettings();
  const waLink = buildWhatsAppLink(settings.mainWhatsAppNumber, settings.mainWhatsAppMessage);

  return (
  <footer className="py-12 border-t bg-card">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <span className="text-xl font-extrabold text-foreground">
            {settings.brandName}.com
          </span>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Layanan jasa serabutan cepat & praktis untuk kebutuhan harian Anda.
          </p>
        </div>

        {/* Menu */}
        <div>
          <span className="font-semibold text-foreground text-sm">Menu</span>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="#beranda" className="hover:text-foreground transition-colors">Beranda</a>
            <a href="#layanan" className="hover:text-foreground transition-colors">Layanan</a>
            <a href="#cara-kerja" className="hover:text-foreground transition-colors">Cara Kerja</a>
            <a href="#mitra" className="hover:text-foreground transition-colors">Mitra</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <span className="font-semibold text-foreground text-sm">Kontak</span>
          <div className="mt-3 flex flex-col gap-3 text-sm text-muted-foreground">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-wa font-medium hover:underline"
            >
              <MessageCircle size={16} />
              {settings.mainWhatsAppNumber}
            </a>
            <a href="mailto:halo@sayabantu.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail size={16} />
              halo@sayabantu.com
            </a>
          </div>
        </div>

        {/* Location & Social */}
        <div>
          <span className="font-semibold text-foreground text-sm">Lokasi</span>
          <div className="flex items-center gap-2 mt-3 text-muted-foreground text-sm">
            <MapPin size={14} />
            <span>Jogja & sekitarnya</span>
          </div>
          <span className="font-semibold text-foreground text-sm mt-5 block">Ikuti Kami</span>
          <div className="flex gap-3 mt-3">
            <a href="#" className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t text-center text-xs text-muted-foreground">
        © 2026 {settings.brandName}.com. All rights reserved.
      </div>
    </div>
  </footer>
  );
};

export default Footer;
