import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Google Ads Accounts — Ready for Campaigns",
  description:
    "Verified Google Ads accounts to start campaigns fast. Reliable, phone‑verified, and safe.",
  slug: "buy-verified-google-ads-accounts",
  image: "/images/All Product/Buy Verified Google Ads Accounts.png",
  price: undefined,
  category: "Advertising Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-googleads"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
