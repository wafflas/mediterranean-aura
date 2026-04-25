"use client";
import Image from "next/image";
import Link from "next/link";
import { IconInstagram, IconWhatsapp } from "@/lib/icons";
import Logo from "./ui/Logo";
import LogoSymbol from "./ui/LogoSymbol";
import { useReservation } from "./ReservationProvider";

export function Footer() {
  const { openReservation } = useReservation();

  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden scroll-mt-24 md:scroll-mt-28"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footerBackround.webp"
          alt="Mediterranean footer background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-secondary px-8 py-16 gap-10 md:gap-20 md:px-20 md:py-32 w-full max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row w-full items-center md:items-start justify-between gap-12 md:gap-8">
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left md:w-1/3">
            <p className="font-canela text-[1.8rem] md:text-[2.6rem] font-light text-secondary tracking-wide">
              Rhodes Island, Greece
            </p>
            <div className="flex flex-col gap-1 mt-2">
              <a
                href="tel:+306942620460"
                className="font-canela font-light text-[2.2rem] md:text-[2rem] text-secondary hover:opacity-80 transition-opacity leading-none"
              >
                +30 694 262 0460
              </a>
              <a
                href="mailto:mediterraneanaurarhodes@gmail.com"
                className="font-apercu text-[0.82rem] md:text-[0.95rem] text-secondary/80 hover:opacity-100 transition-opacity"
              >
                mediterraneanaurarhodes@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1 md:w-1/3 md:mt-0 mt-4">
          <div className="md:scale-125 md:mt-4 transition-transform duration-500">
            <div className="flex items-center justify-center">
            <LogoSymbol logoColorFill="#DFD8CF" size={140} />
            </div>
              <Logo size={200} logoColorFill={"#DFD8CF"} />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-10 md:gap-12 md:w-1/3">
            <button
              onClick={openReservation}
              className="btn-hover-dark rounded-sm w-full max-w-[320px] md:max-w-none md:w-auto bg-secondary text-primary font-apercu text-[0.7rem] md:text-[0.85rem] tracking-[0.22em] uppercase py-4 px-12 transition-colors duration-300"
            >
              BOOK NOW
            </button>
            <div className="flex items-center gap-6 md:gap-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full border border-secondary/50 flex items-center justify-center text-secondary hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
              >
                <div className="scale-100 md:scale-125">
                  <IconInstagram />
                </div>
              </a>
              <a
                href="https://wa.me/306942620460?text=Hi!%20I%E2%80%99d%20like%20to%20book%20a%20massage.%20What%20availability%20do%20you%20have%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full border border-secondary/50 flex items-center justify-center text-secondary hover:border-secondary hover:bg-secondary/10 transition-all duration-300"
              >
                <div className="scale-100 md:scale-125">
                  <IconWhatsapp size={20} className="origin-center scale-[0.86]" />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-secondary/25 my-4 md:my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <p className="font-apercu text-[0.55rem] md:text-[0.65rem] tracking-[0.14em] text-secondary/90 text-center md:text-left">
            © 2026 Mediterranean Aura. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="font-apercu text-[0.55rem] md:text-[0.7rem] tracking-[0.12em] text-secondary/90 hover:text-secondary transition-colors uppercase"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="font-apercu text-[0.55rem] md:text-[0.7rem] tracking-[0.12em] text-secondary/90 hover:text-secondary transition-colors uppercase"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
