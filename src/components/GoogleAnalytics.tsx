import Script from "next/script";

const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "AW-18273221862";

interface GoogleAnalyticsProps {
  hasConsent: boolean;
}

export function GoogleAnalytics({ hasConsent }: GoogleAnalyticsProps) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!hasConsent) return null;

  const trackingIds = [measurementId, GOOGLE_ADS_ID].filter(
    (id): id is string => Boolean(id),
  );

  if (trackingIds.length === 0) return null;

  const primaryId = trackingIds[0];
  const configCalls = trackingIds
    .map((id) => `gtag('config', '${id}');`)
    .join("\n          ");

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${configCalls}
        `}
      </Script>
    </>
  );
}
