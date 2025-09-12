import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Apple Pay Account",
  description:
    "Buy verified Apple Pay account. KYC-ready, secure, and ready to use.",
  slug: "buy-verified-apple-pay-accounts",
  image: "/images/All Product/Buy Verified Apple Pay Account.png",
  price: "370.00",
  category: "Payment Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-applepay"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
