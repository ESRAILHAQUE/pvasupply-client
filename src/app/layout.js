import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import FloatingContactIcons from "@/components/shared/FloatingContactIcons";
import { CartProvider } from "@/contexts/CartContext";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://pvasupply.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "PVA Supply — Buy Verified Accounts & Digital Services",
    template: "%s | PVA Supply",
  },
  description:
    "PVA Supply provides high-quality, verified accounts and digital services. Secure checkout, instant delivery, and 24/7 support.",
  keywords: [
    "PVA",
    "Buy Verified Accounts",
    "Buy Gmail Accounts",
    "Buy Google Voice Accounts",
    "Buy Binance Accounts",
    "Buy Coinbase Accounts",
    "Buy PayPal Accounts",
    "Buy Stripe Accounts",
    "Buy Wise Accounts",
  ],
  applicationName: "PVA Supply",
  authors: [{ name: "PVA Supply" }],
  creator: "PVA Supply",
  publisher: "PVA Supply",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "PVA Supply — Buy Verified Accounts & Digital Services",
    description:
      "Buy verified accounts and digital services with confidence. Trusted seller, secure checkout, 24/7 support.",
    siteName: "PVA Supply",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 512,
        height: 512,
        alt: "PVA Supply Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PVA Supply — Buy Verified Accounts & Digital Services",
    description:
      "Buy verified accounts and digital services with confidence. Trusted seller, secure checkout, 24/7 support.",
    images: ["/images/logo/logo.png"],
  },
  icons: {
    icon: "/icon.png",
  },
  category: "ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteUrl} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
        <FloatingContactIcons />
        <Script
          id="ld-json-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PVA Supply",
              url: siteUrl,
              logo: `${siteUrl}/images/logo/logo.png`,
            }),
          }}
        />
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PVA Supply",
              url: siteUrl,
              potentialAction: {
                "@type": "SearchAction",
                target: `${siteUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
