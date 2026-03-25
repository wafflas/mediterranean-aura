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

export const metadata: Metadata = {
  title: "Mediterranean Aura",
  description: "Mediterranean Aura Project",
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
  const shouldPreconnectAnalytics =
    hasCookieConsent && Boolean(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID);

  return (
    <html lang="en">
      <head>
        {shouldPreconnectAnalytics ? (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
          </>
        ) : null}
      </head>
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
          <CookieConsent hasConsent={hasCookieConsent} />
        </ReservationProvider>
      </body>
    </html>
  );
}
