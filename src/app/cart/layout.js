export const metadata = {
  title: "Shopping Cart — Your Selected Items | PVA Supply",
  description:
    "Review your cart and checkout securely. Buy verified accounts with instant delivery, 24/7 support, and 100% satisfaction guarantee.",
  keywords: [
    "Shopping Cart",
    "Checkout",
    "Buy Verified Accounts",
    "Secure Payment",
    "PVA Supply Cart",
  ],
  openGraph: {
    title: "Shopping Cart — Your Selected Items | PVA Supply",
    description:
      "Review your cart and checkout securely. Buy verified accounts with instant delivery.",
    type: "website",
    url: "https://pvasupply.com/cart",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 512,
        height: 512,
        alt: "PVA Supply Cart",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Shopping Cart | PVA Supply",
    description: "Review your cart and checkout securely.",
    images: ["/images/logo/logo.png"],
  },
  alternates: {
    canonical: "https://pvasupply.com/cart",
  },
  robots: {
    index: false, // Cart pages typically shouldn't be indexed
    follow: true,
  },
};

export default function CartLayout({ children }) {
  return <>{children}</>;
}
