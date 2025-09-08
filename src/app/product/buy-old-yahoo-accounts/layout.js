import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Old Yahoo Accounts",
  description:
    "Buy old Yahoo accounts (aged). Phone-verified, secure, and ready. Instant delivery.",
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
