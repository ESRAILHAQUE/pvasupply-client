import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Payoneer Accounts",
  description:
    "Buy verified Payoneer accounts. ID verified, secure, and ready to use.",
  slug: "buy-verified-payoneer-accounts",
  image: "/images/All Product/Buy Verified Payoneer Accounts.png",
  price: "120.00",
  category: "Payment Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-payoneer"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
