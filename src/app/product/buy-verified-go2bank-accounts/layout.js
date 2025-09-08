import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Go2Bank Accounts",
  description:
    "Buy verified Go2Bank accounts. Secure, verified, and ready to use.",
  slug: "buy-verified-go2bank-accounts",
  image: "/images/All Product/Buy Verified Go2Bank Accounts.png",
  price: undefined,
  category: "Bank Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-go2bank"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
