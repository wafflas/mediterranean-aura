import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { cookies } from "next/headers";
import "./globals.css";
import { CookieConsent } from "@/components/ui/CookieConsent";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { ReservationProvider } from "@/components/ReservationProvider";
import LoadingIntro from "@/components/ui/LoadingIntro";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  "Mediterranean Aura is a luxury in-villa massage service in Rhodes, Greece—offering couples rituals, aromatherapy, deep tissue, and relaxation treatments delivered to your private villa.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mediterraneanaura.gr"),
  title: {
    default: "Mediterranean Aura",
    template: "%s | Mediterranean Aura",
  },
  description: siteDescription,
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon_io/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    url: "https://www.mediterraneanaura.gr",
    siteName: "Mediterranean Aura",
    title: "Mediterranean Aura",
    description: siteDescription,
    images: [
      {
        url: "/opengraph-imageV2.jpg",
        width: 247,
        height: 211,    
        alt: "Mediterranean Aura",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Mediterranean Aura",
    description: siteDescription,
    images: ["/opengraph-imageV2.jpg"],
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#DFD8CF",
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
    <html lang="en" className="bg-secondary">
      <head>
        <link rel="icon" href="/favicon_io/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/favicon_io/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/favicon_io/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link rel="apple-touch-icon" href="/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
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
            <Footer />
          </SmoothScrollProvider>
          <WhatsAppFab />
          <CookieConsent hasConsent={hasCookieConsent} />
        </ReservationProvider>
      </body>
    </html>
  );
}
