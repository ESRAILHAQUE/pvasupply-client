import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Skrill Accounts",
  description:
    "Buy verified Skrill accounts. ID verified, secure, and ready to use.",
  slug: "buy-verified-skrill-accounts",
  image: "/images/All Product/Buy Verified Skrill Accounts.png",
  price: undefined,
  category: "Payment Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-skrill"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
