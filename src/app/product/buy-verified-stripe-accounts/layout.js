import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Stripe Accounts",
  description:
    "Buy fully verified Stripe accounts with KYC. Secure, bank/card verified, instant delivery.",
  slug: "buy-verified-stripe-accounts",
  image: "/images/All Product/Buy Verified Stripe Accounts.png",
  price: "370.00",
  category: "Bank Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-stripe"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
