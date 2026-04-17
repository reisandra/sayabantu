import { MessageCircle, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Mitra", href: "#mitra" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const settings = useSiteSettings();
  const waLink = buildWhatsAppLink(settings.mainWhatsAppNumber, settings.mainWhatsAppMessage);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/85 backdrop-blur-lg shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-18">
        <a href="#beranda" className="text-xl font-extrabold text-primary">
          {settings.brandName}
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#layanan"
            className="px-4 py-2 rounded-lg text-sm font-semibold border border-border text-foreground hover:bg-muted transition-colors"
          >
            Lihat Layanan
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-wa text-primary-foreground px-4 py-2 rounded-lg font-semibold text-sm hover:bg-wa-hover transition-colors"
          >
            <MessageCircle size={16} />
            Chat Sekarang
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-t animate-fade-in">
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t">
              <a
                href="#layanan"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm border border-border text-foreground"
              >
                Lihat Layanan
                <ChevronDown size={16} />
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-wa text-primary-foreground px-4 py-3 rounded-lg font-semibold text-sm"
              >
                <MessageCircle size={16} />
                Chat Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
