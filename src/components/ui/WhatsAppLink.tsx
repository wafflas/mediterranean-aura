"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { WHATSAPP_HREF } from "@/lib/googleAds";

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

type WhatsAppLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
>;

function handleWhatsAppClick(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.gtag_report_conversion?.(WHATSAPP_HREF);
}

export function WhatsAppLink({ children, ...props }: WhatsAppLinkProps) {
  return (
    <a href={WHATSAPP_HREF} onClick={handleWhatsAppClick} {...props}>
      {children}
    </a>
  );
}
