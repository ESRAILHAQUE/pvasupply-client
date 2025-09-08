import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Google Voice Accounts",
  description:
    "Buy Google Voice accounts (PVA). USA/EU IP, phone-verified, aged and fresh options. Instant delivery & 24/7 support.",
  slug: "buy-google-voice-accounts",
  image: "/images/All Product/Buy Google Voice Accounts.png",
  price: "15.00",
  category: "Social Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-google-voice"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
