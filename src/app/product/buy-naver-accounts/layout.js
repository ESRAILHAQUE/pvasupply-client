import Script from "next/script";
import { buildProductMetadata, productJsonLd } from "@/lib/seo";

const product = {
  title: "Buy Naver Accounts",
  description:
    "Buy verified Naver accounts. Phone-verified, secure, and ready for use. Instant delivery.",
  slug: "buy-naver-accounts",
  image: "/images/All Product/Buy Naver Accounts.png",
  price: undefined,
  category: "Social Accounts",
};

export const metadata = buildProductMetadata(product);

export default function ProductLayout({ children }) {
  return (
    <>
      {children}
      <Script
        id="ld-json-product-naver"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
    </>
  );
}
