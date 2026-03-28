import type { Metadata } from "next";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import "./globals.css";
import { CookieConsent } from "@/components/ui/CookieConsent";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { ReservationProvider } from "@/components/ReservationProvider";
import LoadingIntro from "@/components/ui/LoadingIntro";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

const apercuMonoPro = localFont({
  src: [
    {
      path: "../../public/fonts/apercu-mono-pro/ApercuMonoProLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-mono-pro/ApercuMonoProRegular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-mono-pro/ApercuMonoProMedium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-mono-pro/ApercuMonoProBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-apercu",
});

const canela = localFont({
  src: [
    {
      path: "../../public/fonts/canela/Canela-Thin-Trial.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/canela/Canela-Light-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/canela/Canela-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/canela/Canela-RegularItalic-Trial.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/canela/Canela-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/canela/Canela-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-canela",
});

const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

const siteDescription =
  "Luxury in-villa wellness and massage in Rhodes, Greece. Mediterranean Aura brings couples rituals, aromatherapy, deep tissue, and relaxation treatments to your private villa.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mediterraneanaura.gr"),
  title: {
    default: "Mediterranean Aura",
    template: "%s | Mediterranean Aura",
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    url: "https://www.mediterraneanaura.gr",
    siteName: "Mediterranean Aura",
    title: "Mediterranean Aura",
    description: siteDescription,
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const hasCookieConsent = Boolean(
    cookieStore.get("mediterranean-aura-cookie-consent")?.value,
  );

  return (
    <html lang="en">
      <body
        className={`${apercuMonoPro.variable} ${canela.variable} antialiased text-primary bg-secondary`}
      >
        <GoogleAnalytics hasConsent={hasCookieConsent} />
        <ReservationProvider>
          <Navbar />
          <SmoothScrollProvider>
            <LoadingIntro />
            {children}
          </SmoothScrollProvider>
          <WhatsAppFab />
          <CookieConsent hasConsent={hasCookieConsent} />
        </ReservationProvider>
      </body>
    </html>
  );
}
