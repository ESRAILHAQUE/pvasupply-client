export const metadata = {
  title: "Special Accounts — Apple Pay & Walmart Seller Accounts | PVA Supply",
  description:
    "Buy verified Apple Pay accounts and Walmart seller accounts. Premium quality, instant delivery, 24/7 support. Secure and fully verified accounts.",
  keywords: [
    "Buy Verified Apple Pay Accounts",
    "Buy Walmart Seller Account",
    "Verified Apple Pay",
    "Walmart Marketplace",
    "Special Accounts",
    "Premium Accounts",
  ],
  openGraph: {
    title: "Special Accounts — Apple Pay & Walmart | PVA Supply",
    description:
      "Buy verified Apple Pay accounts and Walmart seller accounts with instant delivery and guaranteed quality.",
    type: "website",
    url: "https://pvasupply.com/special-accounts",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 512,
        height: 512,
        alt: "PVA Supply Special Accounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Special Accounts — Apple Pay & Walmart | PVA Supply",
    description:
      "Buy verified Apple Pay accounts and Walmart seller accounts with instant delivery.",
    images: ["/images/logo/logo.png"],
  },
  alternates: {
    canonical: "https://pvasupply.com/special-accounts",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SpecialAccountsLayout({ children }) {
  return <>{children}</>;
}
