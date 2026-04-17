import { buildWhatsAppLink, getSiteSettings } from "@/lib/siteSettings";

const settings = getSiteSettings();
const WA_LINK = buildWhatsAppLink(settings.mitraWhatsAppNumber, settings.mitraWhatsAppMessage);

export default WA_LINK;
