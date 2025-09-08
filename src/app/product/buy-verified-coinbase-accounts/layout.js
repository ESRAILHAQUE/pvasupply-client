import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Coinbase Accounts — KYC‑Verified",
  description:
    "Verified Coinbase accounts with KYC. Trusted access for secure crypto trading.",
  slug: "buy-verified-coinbase-accounts",
  image: "/images/All Product/Buy Verified Coinbase Account.png",
  price: undefined,
  category: "Crypto Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-coinbase"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
