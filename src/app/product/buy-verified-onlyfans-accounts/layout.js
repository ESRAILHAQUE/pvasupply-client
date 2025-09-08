import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified OnlyFans Accounts",
  description:
    "Buy verified OnlyFans accounts. Verified and ready for creator growth.",
  slug: "buy-verified-onlyfans-accounts",
  image: "/images/All Product/Buy Verified OnlyFans Accounts.png",
  price: undefined,
  category: "Social Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-onlyfans"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
