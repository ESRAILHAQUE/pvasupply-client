import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Old Yahoo Accounts — Aged, Verified Yahoo",
  description:
    "Purchase aged Yahoo accounts, verified and ready to use. Reliable seller, fast delivery.",
  slug: "buy-old-yahoo-accounts",
  image: "/images/All Product/Buy Verified Yahoo Accounts.jpg",
  price: undefined,
  category: "Social Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-old-yahoo"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
