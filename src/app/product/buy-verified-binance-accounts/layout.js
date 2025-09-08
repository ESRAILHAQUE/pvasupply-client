import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Binance Accounts — KYC‑Verified Trading",
  description:
    "KYC‑verified Binance accounts for instant trading access. Secure and ready to use.",
  slug: "buy-verified-binance-accounts",
  image: "/images/All Product/Buy KYC Verified Binance Accounts.png",
  price: undefined,
  category: "Crypto Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-binance"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
