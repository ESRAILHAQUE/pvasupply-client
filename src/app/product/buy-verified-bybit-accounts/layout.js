import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Bybit Account",
  description:
    "Buy verified Bybit account. KYC verified, secure, and ready to trade.",
  slug: "buy-verified-bybit-accounts",
  image: "/images/All Product/Buy Verified Bybit Account.png",
  price: undefined,
  category: "Crypto Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-bybit"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
