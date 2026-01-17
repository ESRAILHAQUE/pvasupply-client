export const metadata = {
  title: "Social Accounts — Buy Gmail, Google Voice, LinkedIn | PVA Supply",
  description:
    "Buy verified social media accounts. Gmail, Google Voice, LinkedIn, Naver, Yahoo, OnlyFans, Google Ads accounts. Phone verified, instant delivery, 24/7 support.",
  keywords: [
    "Buy Old Gmail Accounts",
    "Buy Google Voice Accounts",
    "Buy LinkedIn Accounts",
    "Buy Naver Accounts",
    "Buy Yahoo Accounts",
    "Buy Verified OnlyFans Accounts",
    "Buy Google Ads Accounts",
    "PVA Social Accounts",
  ],
  openGraph: {
    title: "Social Accounts — Gmail, Google Voice, LinkedIn | PVA Supply",
    description:
      "Buy verified social media and email accounts with instant delivery. Phone verified, aged accounts available.",
    type: "website",
    url: "https://pvasupply.com/social",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 512,
        height: 512,
        alt: "PVA Supply Social Accounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Accounts — Gmail, Google Voice, LinkedIn | PVA Supply",
    description:
      "Buy verified social media and email accounts with instant delivery.",
    images: ["/images/logo/logo.png"],
  },
  alternates: {
    canonical: "https://pvasupply.com/social",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SocialLayout({ children }) {
  return <>{children}</>;
}
