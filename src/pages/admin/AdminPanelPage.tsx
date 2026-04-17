import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "@/lib/adminAuth";
import {
  defaultSiteSettings,
  saveSiteSettings,
  SiteSettings,
  useSiteSettings,
} from "@/lib/siteSettings";

const AdminPanelPage = () => {
  const navigate = useNavigate();
  const liveSettings = useSiteSettings();
  const [draftSettings, setDraftSettings] = useState<SiteSettings>(liveSettings);
  const [saveMessage, setSaveMessage] = useState("");

  useEffect(() => {
    setDraftSettings(liveSettings);
  }, [liveSettings]);

  const handleSettingsChange = (field: keyof SiteSettings, value: string) => {
    setDraftSettings((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveSettings = (event: FormEvent) => {
    event.preventDefault();
    saveSiteSettings(draftSettings);
    setSaveMessage("Pengaturan berhasil disimpan. Landing page otomatis pakai data terbaru.");
    window.setTimeout(() => setSaveMessage(""), 2500);
  };

  const handleResetSettings = () => {
    setDraftSettings(defaultSiteSettings);
    saveSiteSettings(defaultSiteSettings);
    setSaveMessage("Pengaturan dikembalikan ke default.");
    window.setTimeout(() => setSaveMessage(""), 2500);
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-muted/40">
      <section className="border-b border-border bg-background">
        <div className="container mx-auto max-w-6xl px-4 py-6">
          <p className="text-sm text-muted-foreground">{liveSettings.brandName} Admin</p>
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground">Admin Panel</h1>
          <p className="text-muted-foreground mt-1">
            Kelola konten landing page utama dan landing page mitra dari satu tempat.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-6xl px-4 py-6 space-y-6">
        <form onSubmit={handleSaveSettings} className="space-y-5">
          <div className="rounded-2xl border border-border bg-card p-4 md:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-foreground">Pengaturan Landing Page</h2>
                <p className="text-sm text-muted-foreground">
                  Isi berurutan dari atas ke bawah: identitas, WhatsApp, hero, lalu CTA.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-lg bg-muted px-3 py-2 text-xs text-muted-foreground">
                  Preview aktif: WA utama {liveSettings.mainWhatsAppNumber} | WA mitra {liveSettings.mitraWhatsAppNumber}
                </div>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="rounded-lg border border-border px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
                >
                  Logout
                </button>
              </div>
            </div>
            {saveMessage && <p className="mt-3 text-sm font-medium text-emerald-600">{saveMessage}</p>}
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 md:p-6 space-y-4">
            <div>
              <h3 className="text-base font-bold text-foreground">1. Informasi Umum</h3>
              <p className="text-sm text-muted-foreground">Data identitas brand yang tampil di halaman.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1 md:col-span-1">
                <span className="text-sm font-semibold text-foreground">Nama Brand</span>
                <input
                  value={draftSettings.brandName}
                  onChange={(e) => handleSettingsChange("brandName", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 md:p-6 space-y-4">
            <div>
              <h3 className="text-base font-bold text-foreground">2. Pengaturan WhatsApp</h3>
              <p className="text-sm text-muted-foreground">
                Nomor dan teks chat otomatis untuk landing utama dan landing mitra.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1">
                <span className="text-sm font-semibold text-foreground">No WhatsApp Utama</span>
                <input
                  value={draftSettings.mainWhatsAppNumber}
                  onChange={(e) => handleSettingsChange("mainWhatsAppNumber", e.target.value)}
                  placeholder="62812xxxxxxx"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-foreground">No WhatsApp Mitra</span>
                <input
                  value={draftSettings.mitraWhatsAppNumber}
                  onChange={(e) => handleSettingsChange("mitraWhatsAppNumber", e.target.value)}
                  placeholder="62812xxxxxxx"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1">
                <span className="text-sm font-semibold text-foreground">Template Chat WA Utama</span>
                <textarea
                  value={draftSettings.mainWhatsAppMessage}
                  onChange={(e) => handleSettingsChange("mainWhatsAppMessage", e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-foreground">Template Chat WA Mitra</span>
                <textarea
                  value={draftSettings.mitraWhatsAppMessage}
                  onChange={(e) => handleSettingsChange("mitraWhatsAppMessage", e.target.value)}
                  rows={4}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 md:p-6 space-y-4">
            <div>
              <h3 className="text-base font-bold text-foreground">3. Hero Landing Utama</h3>
              <p className="text-sm text-muted-foreground">Konten hero untuk halaman utama (`/`).</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-foreground">Judul Hero Landing Utama</span>
                <input
                  value={draftSettings.mainHeroTitle}
                  onChange={(e) => handleSettingsChange("mainHeroTitle", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-foreground">Subjudul Hero Landing Utama</span>
                <input
                  value={draftSettings.mainHeroSubtitle}
                  onChange={(e) => handleSettingsChange("mainHeroSubtitle", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-foreground">Teks Tombol Hero Utama</span>
                <input
                  value={draftSettings.mainHeroCtaLabel}
                  onChange={(e) => handleSettingsChange("mainHeroCtaLabel", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 md:p-6 space-y-4">
            <div>
              <h3 className="text-base font-bold text-foreground">4. Hero Landing Mitra</h3>
              <p className="text-sm text-muted-foreground">Konten hero untuk halaman mitra (`/mitra`).</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-foreground">Judul Hero Landing Mitra</span>
                <input
                  value={draftSettings.mitraHeroTitle}
                  onChange={(e) => handleSettingsChange("mitraHeroTitle", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-foreground">Subjudul Hero Landing Mitra</span>
                <input
                  value={draftSettings.mitraHeroSubtitle}
                  onChange={(e) => handleSettingsChange("mitraHeroSubtitle", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-foreground">Teks Tombol Hero Mitra</span>
                <input
                  value={draftSettings.mitraHeroCtaLabel}
                  onChange={(e) => handleSettingsChange("mitraHeroCtaLabel", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4 md:p-6 space-y-4">
            <div>
              <h3 className="text-base font-bold text-foreground">5. CTA Landing Utama</h3>
              <p className="text-sm text-muted-foreground">Bagian call-to-action di tengah/bawah landing utama.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-foreground">Judul CTA Landing Utama</span>
                <input
                  value={draftSettings.mainCtaTitle}
                  onChange={(e) => handleSettingsChange("mainCtaTitle", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="space-y-1 md:col-span-2">
                <span className="text-sm font-semibold text-foreground">Subjudul CTA Landing Utama</span>
                <input
                  value={draftSettings.mainCtaSubtitle}
                  onChange={(e) => handleSettingsChange("mainCtaSubtitle", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
              <label className="space-y-1">
                <span className="text-sm font-semibold text-foreground">Teks Tombol CTA Utama</span>
                <input
                  value={draftSettings.mainCtaButtonLabel}
                  onChange={(e) => handleSettingsChange("mainCtaButtonLabel", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm"
                />
              </label>
            </div>
          </div>

          <div className="sticky bottom-4 z-10 rounded-2xl border border-border bg-background/95 backdrop-blur px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              Tips: isi nomor WA dengan format `628xx...`, lalu cek tombol di landing page.
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleResetSettings}
                className="rounded-lg border border-border px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                Reset Default
              </button>
              <button
                type="submit"
                className="rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Simpan Pengaturan
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};

export default AdminPanelPage;
