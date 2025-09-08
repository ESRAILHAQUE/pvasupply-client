import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Crypto.com Account",
  description:
    "Buy verified Crypto.com account. KYC verified, secure, and ready for trading.",
  slug: "buy-verified-crypto-com-accounts",
  image: "/images/All Product/Buy Verified Crypto.com Account.png",
  price: undefined,
  category: "Crypto Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-cryptocom"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
