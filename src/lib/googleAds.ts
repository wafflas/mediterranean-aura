import type { MouseEvent } from "react";

const GOOGLE_ADS_WHATSAPP_CONVERSION =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION ??
  "AW-18273221862/b_48CMiKmswcEOb5rllE";

const CONVERSION_CALLBACK_TIMEOUT_MS = 2000;

type GtagFunction = (
  command: "event",
  eventName: "conversion",
  params: {
    send_to: string;
    event_callback?: () => void;
    event_timeout?: number;
  },
) => void;

export function trackWhatsAppClick(event: MouseEvent<HTMLAnchorElement>) {
  if (typeof window === "undefined") return;

  const gtag = (window as Window & { gtag?: GtagFunction }).gtag;

  if (!gtag) return;

  const href = event.currentTarget.href;
  event.preventDefault();

  let opened = false;
  const openWhatsApp = () => {
    if (opened) return;
    opened = true;
    window.open(href, "_blank", "noopener,noreferrer");
  };

  gtag("event", "conversion", {
    send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
    event_callback: openWhatsApp,
    event_timeout: CONVERSION_CALLBACK_TIMEOUT_MS,
  });

  window.setTimeout(openWhatsApp, CONVERSION_CALLBACK_TIMEOUT_MS);
}
