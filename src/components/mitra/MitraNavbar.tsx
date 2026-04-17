import { useEffect, useState } from "react";
import { Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsAppLink, useSiteSettings } from "@/lib/siteSettings";

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: "hero", label: "Beranda" },
  { id: "value", label: "Kenapa Gabung" },
  { id: "jobs", label: "Pekerjaan" },
  { id: "earnings", label: "Penghasilan" },
  { id: "cara-kerja", label: "Cara Kerja" },
  { id: "requirements", label: "Syarat" },
  { id: "testimonials", label: "Testimoni" },
];

const SCROLL_OFFSET = 88;

const MitraNavbar = () => {
  const settings = useSiteSettings();
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const waLink = buildWhatsAppLink(settings.mitraWhatsAppNumber, settings.mitraWhatsAppMessage);

  useEffect(() => {
    const loginState =
      localStorage.getItem("isLoggedIn") === "true" ||
      localStorage.getItem("mitra_is_logged_in") === "true" ||
      Boolean(localStorage.getItem("token")) ||
      Boolean(localStorage.getItem("authToken"));

    setIsLoggedIn(loginState);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const current = [...navItems]
        .reverse()
        .find((item) => {
          const section = document.getElementById(item.id);
          if (!section) {
            return false;
          }
          const top = section.getBoundingClientRect().top;
          return top <= SCROLL_OFFSET + 20;
        });

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) {
      return;
    }

    const top = section.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        {isLoggedIn ? (
          <button
            type="button"
            onClick={() => setIsProfileMenuOpen((prev) => !prev)}
            className="relative shrink-0 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            <User size={16} />
            Profil
            {isProfileMenuOpen && (
              <div className="absolute top-[calc(100%+8px)] left-0 min-w-[180px] rounded-lg border border-border bg-card shadow-lg p-1 text-left">
                <button
                  type="button"
                  className="block w-full rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                >
                  Pengaturan Profil
                </button>
                <button
                  type="button"
                  className="block w-full rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                >
                  Ubah Data Mitra
                </button>
              </div>
            )}
          </button>
        ) : (
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
          >
            <User size={16} />
            Daftar
          </a>
        )}

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden ml-auto inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground"
          aria-label="Toggle menu navbar mitra"
        >
          <Menu size={18} />
        </button>

        <nav
          className={cn(
            "md:ml-auto flex gap-1 md:gap-2 overflow-x-auto no-scrollbar",
            isMenuOpen ? "absolute left-4 right-4 top-full mt-2 p-2 rounded-xl border border-border bg-card shadow-lg flex-col md:static md:p-0 md:shadow-none md:border-0 md:bg-transparent md:flex-row" : "hidden md:flex"
          )}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default MitraNavbar;
