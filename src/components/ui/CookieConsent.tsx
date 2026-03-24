"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [mounted, setMounted] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("mediterranean-aura-cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  useEffect(() => {
    if (showConsent && popupRef.current) {
      const delay = pathname === "/" ? 4.5 : 0.5;

      gsap.fromTo(
        popupRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay }
      );
    }
  }, [showConsent, pathname]);

  const animateOut = (onComplete: () => void) => {
    if (!popupRef.current) {
      onComplete();
      return;
    }
    gsap.to(popupRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.in",
      onComplete,
    });
  };

  const acceptCookies = () => {
    animateOut(() => {
      localStorage.setItem("mediterranean-aura-cookie-consent", "true");
      setShowConsent(false);
    });
  };

  if (!mounted || !showConsent) return null;

  return (
    <div className="fixed bottom-4 left-0 w-full flex justify-center px-4 md:bottom-8 md:px-0 z-[5000] pointer-events-none">
      <div
        ref={popupRef}
        className="opacity-0 translate-y-8 bg-secondary text-primary rounded-sm p-5 md:p-8 flex flex-col gap-6 md:gap-8 w-full max-w-[420px] pointer-events-auto shadow-2xl"
      >
        <p className="font-apercu text-[11px] md:text-[13px] tracking-widest uppercase leading-loose text-primary">
          This website uses cookies to ensure you get the best experience on
          website.
        </p>

        <div className="flex items-center justify-end gap-4 md:gap-6 shrink-0 mt-2">
          <Link
            href="/privacy-policy"
            className="text-primary hover:opacity-70 font-apercu text-[10px] md:text-[11px] tracking-widest uppercase transition-opacity duration-300"
          >
            Read More
          </Link>
          <button
            onClick={acceptCookies}
            className="rounded-sm bg-primary text-secondary font-apercu text-[10px] md:text-[11px] tracking-widest uppercase px-6 py-3 hover:bg-primary/90 transition-colors duration-300"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
