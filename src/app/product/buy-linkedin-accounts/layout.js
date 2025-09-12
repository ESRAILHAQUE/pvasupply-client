import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy LinkedIn Accounts",
  description:
    "Buy LinkedIn accounts (PVA). Phone-verified, ready for marketing and outreach. Instant delivery.",
  slug: "buy-linkedin-accounts",
  image: "/images/All Product/Buy LinkedIn Accounts.png",
  price: "30.00",
  category: "Social Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-linkedin"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
