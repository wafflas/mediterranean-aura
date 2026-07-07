const GOOGLE_ADS_WHATSAPP_CONVERSION =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION ??
  "AW-18273221862/b_48CMiKmswcEOb5rllE";

type GtagFunction = (
  command: "event",
  eventName: "conversion",
  params: { send_to: string },
) => void;

export function trackWhatsAppClick() {
  if (typeof window === "undefined") return;

  const gtag = (window as Window & { gtag?: GtagFunction }).gtag;

  if (!gtag) return;

  gtag("event", "conversion", {
    send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
  });
}
