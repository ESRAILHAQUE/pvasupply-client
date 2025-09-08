import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Chase Bank Accounts",
  description:
    "Buy verified Chase bank accounts for business needs. Secure and ready.",
  slug: "buy-verified-chase-bank-accounts",
  image: "/images/All Product/Buy Verified Chase Bank Accounts.png",
  price: undefined,
  category: "Bank Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-chase"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
