import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Walmart Seller Account",
  description:
    "Buy Walmart seller account. Verified, ready to sell, and secure.",
  slug: "buy-walmart-seller-account",
  image: "/images/All Product/Buy Walmart Seller Account.png",
  price: undefined,
  category: "Seller Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-walmart"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
