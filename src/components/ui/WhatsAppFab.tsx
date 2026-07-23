"use client";

import { WHATSAPP_HREF } from "@/lib/googleAds";
import { IconWhatsapp } from "@/lib/icons";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_HREF}
      onClick={(event) => {
        event.preventDefault();
        window.gtag_report_conversion?.(WHATSAPP_HREF);
      }}
      aria-label="Chat with us on WhatsApp: +30 694 262 0460"
      className="group fixed bottom-6 right-5 z-[3900] inline-flex items-center justify-center md:bottom-8 md:right-8"
    >
      <span
        aria-hidden
        className="absolute h-16 w-16 rounded-full border border-[#25D366]/60 animate-ping [animation-duration:5s] [animation-delay:600ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]"
      />
      <span className="relative inline-flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full border border-white/45 bg-[#25D366] text-white shadow-[0_14px_34px_rgba(0,0,0,0.36)] transition-transform duration-700 group-hover:scale-105">
        <IconWhatsapp size={22} className="fill-current stroke-0" />
      </span>
    </a>
  );
}
