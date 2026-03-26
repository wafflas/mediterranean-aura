import { IconWhatsapp } from "@/lib/icons";

const whatsappPhone = "306947459658";
const whatsappHref = `https://wa.me/${whatsappPhone}`;

export function WhatsAppFab() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp: +30 694 745 9658"
      className="group fixed bottom-6 right-5 z-[3900] inline-flex items-center justify-center md:bottom-8 md:right-8"
    >
      <span
        aria-hidden
        className="absolute h-16 w-16 rounded-full border border-[#25D366]/60 animate-ping [animation-duration:5s] [animation-delay:600ms] [animation-timing-function:cubic-bezier(0,0,0.2,1)]"
      />
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/45 bg-[#25D366] text-white shadow-[0_14px_34px_rgba(0,0,0,0.36)] transition-transform duration-700 group-hover:scale-105">
        <IconWhatsapp size={24} className="fill-current stroke-0" />
      </span>
    </a>
  );
}
