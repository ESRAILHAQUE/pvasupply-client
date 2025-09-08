import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Chime Bank Accounts",
  description:
    "Buy verified Chime bank accounts. Secure, verified, and ready to use.",
  slug: "buy-verified-chime-bank-accounts",
  image: "/images/All Product/Buy Verified Chime Bank Accounts.png",
  price: undefined,
  category: "Bank Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-chime"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
