export const GOOGLE_ADS_WHATSAPP_CONVERSION =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_CONVERSION ??
  "AW-18273221862/b_48CMiKmswcEOb5rIlE";

export const WHATSAPP_HREF =
  "https://wa.me/306942620460?text=Hi!%20I%E2%80%99d%20like%20to%20book%20a%20massage.%20What%20availability%20do%20you%20have%3F";

/** Exact Google Ads event snippet function (exposed on window). */
export const GTAG_REPORT_CONVERSION_SCRIPT = `
  window.gtag_report_conversion = function gtag_report_conversion(url) {
    var navigated = false;
    var callback = function () {
      if (navigated) return;
      navigated = true;
      if (typeof url !== 'undefined') {
        window.location = url;
      }
    };
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        send_to: '${GOOGLE_ADS_WHATSAPP_CONVERSION}',
        value: 1.0,
        currency: 'EUR',
        event_callback: callback,
        event_timeout: 2000
      });
      setTimeout(callback, 2000);
    } else {
      callback();
    }
    return false;
  };
`;
