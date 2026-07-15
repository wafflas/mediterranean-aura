export const GOOGLE_CONSENT_DENIED = {
  ad_storage: "denied",
  analytics_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  wait_for_update: 500,
} as const;

export const GOOGLE_CONSENT_GRANTED = {
  ad_storage: "granted",
  analytics_storage: "granted",
  ad_user_data: "granted",
  ad_personalization: "granted",
} as const;

type GtagConsentFunction = (
  command: "consent",
  action: "default" | "update",
  params: Record<string, string | number>,
) => void;

export function grantGoogleConsent() {
  if (typeof window === "undefined") return;

  const gtag = (window as Window & { gtag?: GtagConsentFunction }).gtag;
  if (!gtag) return;

  gtag("consent", "update", GOOGLE_CONSENT_GRANTED);
}
