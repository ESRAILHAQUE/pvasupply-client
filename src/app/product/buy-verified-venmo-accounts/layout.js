import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Venmo Accounts",
  description:
    "Buy verified Venmo accounts. Phone/ID verified, secure, and ready.",
  slug: "buy-verified-venmo-accounts",
  image: "/images/All Product/Buy Verified Venmo Accounts.png",
  price: "120.00",
  category: "Payment Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-venmo"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
