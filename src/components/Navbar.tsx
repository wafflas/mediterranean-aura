"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import Logo from "./ui/Logo";
import { useReservation } from "./ReservationProvider";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { openReservation } = useReservation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const menuLabelRef = useRef<HTMLSpanElement>(null);
  const closeLabelRef = useRef<HTMLSpanElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const overlayTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const overlay = overlayRef.current;
    const l1 = line1Ref.current;
    const l2 = line2Ref.current;
    const menuLabel = menuLabelRef.current;
    const closeLabel = closeLabelRef.current;
    const links = linksRef.current ? Array.from(linksRef.current.children) : [];

    if (!overlay || !l1 || !l2 || !menuLabel || !closeLabel) return;

    gsap.set(overlay, { yPercent: -100, opacity: 0, pointerEvents: 'none' });
    gsap.set(closeLabel, { opacity: 0, y: 6 });
    gsap.set(links, { opacity: 0, y: 20 });

    const tl = gsap.timeline({ paused: true });

    // 1. Open overlay
    tl.to(overlay, {
      yPercent: 0,
      opacity: 1,
      pointerEvents: 'auto',
      duration: 0.55,
      ease: "power3.out",
    });
    // 2. Hamburger → X (runs with overlay open)
    tl.to(
      l1,
      { rotate: 45, y: 3.75, duration: 0.35, ease: "power2.inOut" },
      "<0.1",
    );
    tl.to(
      l2,
      { rotate: -45, y: -3.75, duration: 0.35, ease: "power2.inOut" },
      "<",
    );
    // 3. MENU → CLOSE label swap
    tl.to(
      menuLabel,
      { opacity: 0, y: -6, duration: 0.2, ease: "power2.in" },
      "<",
    );
    tl.to(
      closeLabel,
      { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" },
      "<0.15",
    );
    // 4. Stagger links in
    tl.to(
      links,
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: "power2.out" },
      "<0.1",
    );
    overlayTl.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const toggleMenu = () => {
    if (!overlayTl.current) return;
    if (isOpen) {
      overlayTl.current.reverse();
    } else {
      overlayTl.current.play();
    }
    setIsOpen((prev) => !prev);
  };

  const isHome = pathname === "/";

  const textColor =
    isOpen || !isHome || isScrolled ? "text-primary" : "text-white";

  const navBg =
    !isOpen && (!isHome || isScrolled)
      ? "bg-secondary/95 backdrop-blur-sm shadow-sm"
      : "bg-transparent";

  const logoColorFill = isOpen || !isHome || isScrolled ? "#21343E" : "white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out px-6 md:px-10 py-5 flex items-center justify-between ${navBg} ${textColor}`}
      >
        <button
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex items-center gap-3 focus:outline-none group"
        >
          <div className="relative w-7 h-[9px]">
            <span
              ref={line1Ref}
              className="absolute top-0 left-0 block h-[1.5px] w-full bg-current origin-center"
            />
            <span
              ref={line2Ref}
              className="absolute bottom-0 left-0 block h-[1.5px] w-full bg-current origin-center"
            />
          </div>
          <div className="relative h-4 overflow-hidden">
            <span
              ref={menuLabelRef}
              className="font-apercu text-[0.6rem] tracking-[0.22em] uppercase absolute top-0 left-0"
            >
              MENU
            </span>
            <span
              ref={closeLabelRef}
              className="font-apercu text-[0.6rem] tracking-[0.22em] uppercase absolute top-0 left-0 opacity-0"
            >
              CLOSE
            </span>
          </div>
        </button>

        <Link
          href="/"
          aria-label="Home"
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group transition-all duration-300"
        >
          <Logo logoColorFill={logoColorFill} />
        </Link>

        <button
          onClick={() => {
            if (isOpen) toggleMenu();
            openReservation();
          }}
          className={`rounded-sm font-apercu text-[0.6rem] tracking-[0.18em] uppercase border px-2 py-1 transition-all duration-300 ${
            isOpen || !isHome || isScrolled
              ? "border-primary/50 hover:bg-primary hover:text-secondary"
              : "border-white/70 hover:bg-white hover:text-primary"
          }`}
        >
          RESERVE
        </button>
      </nav>

      <div
        ref={overlayRef}
        className="fixed inset-0 z-[55] bg-secondary flex flex-col px-8 md:px-14 pt-28 pb-12 overflow-y-auto opacity-0"
        aria-hidden={!isOpen}
      >
        <ul ref={linksRef} className="flex flex-col gap-2 flex-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={toggleMenu}
                className="font-canela font-light text-primary text-[3rem] md:text-[5rem] leading-none hover:opacity-50 transition-opacity duration-300 block py-2 border-b border-primary/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 pt-6 border-t border-primary/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-1">
            <a
              href="tel:+306947459658"
              className="font-apercu text-[0.7rem] tracking-[0.12em] uppercase text-primary/60 hover:text-primary transition-colors"
            >
              +30 694 745 9658
            </a>
            <a
              href="mailto:info@mediterraneanaura.com"
              className="font-apercu text-[0.7rem] tracking-[0.12em] uppercase text-primary/60 hover:text-primary transition-colors"
            >
              info@mediterraneanaura.com
            </a>
          </div>
          <div className="flex items-center gap-6">
            {["Instagram", "WhatsApp", "Facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-apercu text-[0.6rem] tracking-[0.18em] uppercase text-primary/50 hover:text-primary transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
