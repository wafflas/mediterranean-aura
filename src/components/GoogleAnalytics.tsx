import Script from "next/script";
import { GTAG_REPORT_CONVERSION_SCRIPT } from "@/lib/googleAds";

const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18273221862";

interface GoogleAnalyticsProps {
  hasConsent: boolean;
}

export function GoogleAnalytics({ hasConsent }: GoogleAnalyticsProps) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  const trackingIds = [measurementId, GOOGLE_ADS_ID].filter(
    (id): id is string => Boolean(id),
  );

  if (trackingIds.length === 0) return null;

  const primaryId = trackingIds[0];
  const configCalls = trackingIds
    .map((id) => `gtag('config', '${id}');`)
    .join("\n          ");

  const consentUpdate = hasConsent
    ? `
          gtag('consent', 'update', {
            ad_storage: 'granted',
            analytics_storage: 'granted',
            ad_user_data: 'granted',
            ad_personalization: 'granted',
          });`
    : "";

  return (
    <>
      <Script id="google-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });${consentUpdate}
        `}
      </Script>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          ${configCalls}
        `}
      </Script>
      <Script id="gtag-report-conversion" strategy="afterInteractive">
        {GTAG_REPORT_CONVERSION_SCRIPT}
      </Script>
    </>
  );
}
