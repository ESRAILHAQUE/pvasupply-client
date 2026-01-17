export const metadata = {
  title: "Bank & Payment Accounts — PayPal, Wise, Stripe & More | PVA Supply",
  description:
    "Buy verified bank and payment accounts. PayPal, Cash App, Chime, Wise, Stripe, Venmo, Skrill, Chase, Payoneer accounts. KYC verified, instant delivery.",
  keywords: [
    "Buy Verified PayPal Accounts",
    "Buy Verified Cash App",
    "Buy Verified Chime Accounts",
    "Buy Verified Wise Accounts",
    "Buy Verified Stripe Accounts",
    "Buy Verified Venmo Accounts",
    "Buy Bank Accounts",
    "Payment Accounts",
  ],
  openGraph: {
    title: "Bank & Payment Accounts | PVA Supply",
    description:
      "Buy verified bank and payment accounts with instant delivery. PayPal, Wise, Stripe, Cash App, Chime and more.",
    type: "website",
    url: "https://pvasupply.com/product/bank-accounts",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 512,
        height: 512,
        alt: "PVA Supply Bank Accounts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bank & Payment Accounts | PVA Supply",
    description:
      "Buy verified bank and payment accounts with instant delivery.",
    images: ["/images/logo/logo.png"],
  },
  alternates: {
    canonical: "https://pvasupply.com/product/bank-accounts",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BankAccountsLayout({ children }) {
  return <>{children}</>;
}
