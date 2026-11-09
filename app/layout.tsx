import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-barlow",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: "%s · SchilderTERMAAT",
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: content.company.logo ? { icon: content.company.logo } : undefined,
};

export const viewport: Viewport = { themeColor: content.colors.primary };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${barlow.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <head>
        <script defer src="https://app.webstekk.nl/t.js" />
        <script
          async
          src={TRACKER_SRC}
          data-demo={content.slug}
          data-endpoint={TRACKER_ENDPOINT}
        />
      </head>
      <body className="min-h-full bg-muted text-foreground">
        <a
          href="#inhoud"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:bg-background focus:px-4 focus:py-3 focus:text-brand"
        >
          Naar de inhoud
        </a>
        <div className="lg:px-8">
        <div className="mx-auto min-h-full max-w-[1180px] bg-background lg:my-8 lg:border-[3px] lg:border-brand lg:p-[7px]">
          <div className="flex min-h-full flex-col lg:border lg:border-brand">
            <SiteHeader />
            <main id="inhoud" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
          <div className="hidden h-1.5 bg-accent lg:block" aria-hidden />
        </div>
        </div>
        <SleadsBadge />
      </body>
    </html>
  );
}
