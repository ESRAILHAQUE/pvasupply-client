import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Bank Accounts",
  description:
    "Buy verified bank accounts for business needs. Secure and ready to use.",
  slug: "buy-verified-bank-accounts",
  image: "/images/All Product/Buy Verified Bank Accounts.png",
  price: undefined,
  category: "Bank Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-bank"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
