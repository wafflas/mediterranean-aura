"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

interface CookieConsentProps {
  hasConsent: boolean;
}

export function CookieConsent({ hasConsent }: CookieConsentProps) {
  const [showConsent, setShowConsent] = useState(!hasConsent);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setShowConsent(!hasConsent);
  }, [hasConsent]);

  useEffect(() => {
    if (showConsent && popupRef.current) {
      const delay = pathname === "/" ? 4.5 : 0.5;

      gsap.fromTo(
        popupRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay },
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

  const acceptCookies = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/cookie-consent", {
        method: "POST",
      });
      if (response.ok) await router.refresh();
    } catch (error) {
      console.error("Failed to persist cookie consent", error);
    }

    animateOut(() => {
      setShowConsent(false);
      setIsSubmitting(false);
    });
  };

  if (!showConsent) return null;

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
            aria-label="Read more about our privacy policy"
          >
            Read Privacy Policy
          </Link>
          <button
            onClick={acceptCookies}
            disabled={isSubmitting}
            className="rounded-sm bg-primary text-secondary font-apercu text-[10px] md:text-[11px] tracking-widest uppercase px-6 py-3 hover:bg-primary/90 transition-colors duration-300"
            aria-label="Accept cookies"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
