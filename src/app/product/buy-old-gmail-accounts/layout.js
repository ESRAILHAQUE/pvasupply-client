import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Old Gmail Accounts",
  description:
    "Buy old Gmail accounts (aged). Phone-verified, secure and ready. Instant delivery.",
  slug: "buy-old-gmail-accounts",
  image: "/images/All Product/Buy Gmail Accounts.png",
  price: undefined,
  category: "Social Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-old-gmail"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
