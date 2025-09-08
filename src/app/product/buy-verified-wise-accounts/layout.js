import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Verified Wise Accounts (TransferWise) — Ready to Use",
  description:
    "Verified Wise accounts for global payments. Secure setup and quick delivery.",
  slug: "buy-verified-wise-accounts",
  image: "/images/All Product/Buy Verified Wise Accounts.png",
  price: undefined,
  category: "Payment Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-wise"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
