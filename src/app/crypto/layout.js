export const metadata = {
  title: "Crypto Accounts — Buy Verified Binance, Bybit, Coinbase | PVA Supply",
  description:
    "Buy verified crypto exchange accounts. Binance, Bybit, Coinbase, Crypto.com accounts with KYC verification. Instant delivery, 24/7 support, 100% verified.",
  keywords: [
    "Buy Verified Binance Accounts",
    "Buy Verified Bybit Accounts",
    "Buy Verified Coinbase Accounts",
    "Buy Verified Crypto.com Accounts",
    "KYC Verified Crypto Accounts",
    "Crypto Exchange Accounts",
  ],
  openGraph: {
    title: "Crypto Accounts — Verified Exchange Accounts | PVA Supply",
    description:
      "Buy verified crypto exchange accounts with instant delivery. Binance, Bybit, Coinbase, Crypto.com. 100% KYC verified and secure.",
    type: "website",
    url: "https://pvasupply.com/crypto",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 512,
        height: 512,
        alt: "PVA Supply Crypto Accounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Accounts — Verified Exchange Accounts | PVA Supply",
    description:
      "Buy verified crypto exchange accounts with instant delivery.",
    images: ["/images/logo/logo.png"],
  },
  alternates: {
    canonical: "https://pvasupply.com/crypto",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CryptoLayout({ children }) {
  return <>{children}</>;
}
