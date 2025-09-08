import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Cash App Accounts",
  description:
    "Buy verified Cash App accounts. Phone/ID verified, secure, and ready.",
  slug: "buy-verified-cash-app-accounts",
  image: "/images/All Product/Buy Verified Cash App Accounts.png",
  price: undefined,
  category: "Payment Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-cashapp"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
