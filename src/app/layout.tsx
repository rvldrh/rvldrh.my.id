import "./globals.scss";
import { Poppins } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { navMenus } from "@/data/navMenus";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsEvents from "@/components/common/AnalyticsEvents";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "arial",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Fira Sans",
    "Droid Sans",
  ],
});

export const metadata: Metadata = {
  title: "Rivaldo Rizky Habibie",
  description:
    "Rivaldo Rizky Habibie is a Full Stack Developer, SDE, and Open Source enthusiast. Explore my portfolio to see my work and connect with me.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: [
    {
      url: "/favicon-16x16.ico",
      rel: "icon",
      sizes: "16x16",
      type: "image/icon",
    },
    {
      url: "/favicon-32x32.ico",
      rel: "icon",
      sizes: "32x32",
      type: "image/icon",
    },
    {
      url: "/favicon-48x48.ico",
      rel: "icon",
      sizes: "48x48",
      type: "image/icon",
    },
    {
      url: "/favicon-64x64.ico",
      rel: "icon",
      sizes: "64x64",
      type: "image/icon",
    },
  ],
  keywords: [
    "rivaldo rizky habibie",
    "rivaldo rizky",
    "rvldrh",
    "rivaldo-rizky-habibie",
    "rizky rvaldo",
    "pt berlian muda sukses",
    "rivaldo portfolio",
    "full stack developer",
    "web developer",
    "rvldrh github",
  ],
};

const GoogleAnalytics = dynamic(
  () => import("@/components/common/GoogleAnalytics"),
  { ssr: false }
);
const WebVitals = dynamic(() => import("@/components/common/WebVitals"), {
  ssr: false,
});
const FloatingNavbar = dynamic(
  () => import("@/components/navbar/FloatingNavbar")
);
const ScrollToTop = dynamic(() => import("@/components/common/ScrollToTop"));

const isDebug = process.env.NODE_ENV === "development";

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <html lang="en" className={poppins.className}>
      <body className={isDebug ? "debug-screens" : ""}>
        {isDebug ? null : (
          <>
            <GoogleAnalytics />
            <AnalyticsEvents />
          </>
        )}
        <Analytics />
        <SpeedInsights />
        {isDebug ? <WebVitals /> : null}
        <FloatingNavbar className="app_nav" navItems={navMenus} />
        <main>{children}</main>
        <ScrollToTop />
      </body>
    </html>
  );
};

export default RootLayout;
