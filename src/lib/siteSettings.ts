import { useEffect, useState } from "react";

const STORAGE_KEY = "sayabantu_site_settings";
const SETTINGS_UPDATED_EVENT = "sayabantu-site-settings-updated";

export interface SiteSettings {
  brandName: string;
  mainWhatsAppNumber: string;
  mainWhatsAppMessage: string;
  mitraWhatsAppNumber: string;
  mitraWhatsAppMessage: string;
  mainHeroTitle: string;
  mainHeroSubtitle: string;
  mainHeroCtaLabel: string;
  mainCtaTitle: string;
  mainCtaSubtitle: string;
  mainCtaButtonLabel: string;
  mitraHeroTitle: string;
  mitraHeroSubtitle: string;
  mitraHeroCtaLabel: string;
}

export const defaultSiteSettings: SiteSettings = {
  brandName: "Sayabantu",
  mainWhatsAppNumber: "6285643333061",
  mainWhatsAppMessage: "Halo Sayabantu, saya butuh bantuan",
  mitraWhatsAppNumber: "6285643333061",
  mitraWhatsAppMessage:
    "Halo Sayabantu, saya ingin daftar sebagai mitra.\n\nNama:\nLokasi:\nUmur:\nPekerjaan:\nKendaraan:\nKetersediaan waktu:",
  mainHeroTitle: "Butuh Bantuan? Kami Siap Bantu Apa Saja",
  mainHeroSubtitle: "Layanan jasa serabutan untuk semua kebutuhan harian - cepat, praktis, dan tanpa ribet",
  mainHeroCtaLabel: "Chat Sekarang",
  mainCtaTitle: "Butuh Bantuan Sekarang?",
  mainCtaSubtitle: "Jangan ribet, serahkan ke kami. Tinggal chat, langsung dibantu!",
  mainCtaButtonLabel: "Chat WhatsApp Sekarang",
  mitraHeroTitle: "Cari Penghasilan Tambahan? Jadi Mitra Sayabantu Aja",
  mitraHeroSubtitle: "Bantu orang, kerja fleksibel, dan dapat penghasilan setiap hari",
  mitraHeroCtaLabel: "Daftar Sekarang",
};

const normalizePhone = (phone: string) => phone.replace(/[^\d]/g, "");

export const buildWhatsAppLink = (phone: string, message: string) => {
  const sanitizedPhone = normalizePhone(phone);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${sanitizedPhone}?text=${encoded}`;
};

export const getSiteSettings = (): SiteSettings => {
  if (typeof window === "undefined") {
    return defaultSiteSettings;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return defaultSiteSettings;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<SiteSettings>;
    return { ...defaultSiteSettings, ...parsed };
  } catch {
    return defaultSiteSettings;
  }
};

export const saveSiteSettings = (settings: SiteSettings) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  window.dispatchEvent(new Event(SETTINGS_UPDATED_EVENT));
};

export const useSiteSettings = () => {
  const [settings, setSettings] = useState<SiteSettings>(getSiteSettings);

  useEffect(() => {
    const onSettingsChange = () => setSettings(getSiteSettings());
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        onSettingsChange();
      }
    };

    window.addEventListener(SETTINGS_UPDATED_EVENT, onSettingsChange);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(SETTINGS_UPDATED_EVENT, onSettingsChange);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return settings;
};
