import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified PayPal Accounts — ID/Phone Verified",
  description:
    "Verified PayPal accounts for smooth online payments. Secure, compliant, and quickly delivered.",
  slug: "buy-verified-paypal-accounts",
  image: "/images/All Product/Buy Verified PayPal Accounts.png",
  price: "110.00",
  category: "Bank Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-paypal"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
