export const metadata = {
  title: "Contact Us — Get in Touch | PVA Supply",
  description:
    "Contact PVA Supply for verified accounts and digital services. Available 24/7 via WhatsApp, Telegram, and Email. Fast response guaranteed.",
  keywords: [
    "Contact PVA Supply",
    "Customer Support",
    "Buy Verified Accounts",
    "24/7 Support",
    "WhatsApp Contact",
    "Telegram Support",
  ],
  openGraph: {
    title: "Contact Us — Get in Touch | PVA Supply",
    description:
      "Contact PVA Supply for verified accounts and digital services. Available 24/7 via WhatsApp, Telegram, and Email.",
    type: "website",
    url: "https://pvasupply.com/contact-us",
    images: [
      {
        url: "/images/logo/logo.png",
        width: 512,
        height: 512,
        alt: "PVA Supply Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — Get in Touch | PVA Supply",
    description:
      "Contact PVA Supply for verified accounts. Available 24/7 via WhatsApp, Telegram, and Email.",
    images: ["/images/logo/logo.png"],
  },
  alternates: {
    canonical: "https://pvasupply.com/contact-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
