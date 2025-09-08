export const siteUrl = "https://pvasupply.com";

export function buildProductMetadata({
  title,
  description,
  slug,
  image = "/images/logo/logo.png",
  priceRange,
  category,
}) {
  const url = `${siteUrl}/product/${slug}`;
  return {
    title: `${title} — Buy Online`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function productJsonLd({
  name,
  description,
  slug,
  image,
  price,
  priceCurrency = "USD",
  availability = "https://schema.org/InStock",
  sku,
  brand = "PVA Supply",
  category,
}) {
  const base = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: [`${siteUrl}${image}`],
    sku,
    brand: { "@type": "Brand", name: brand },
    category,
  };
  if (price) {
    base.offers = {
      "@type": "Offer",
      url: `${siteUrl}/product/${slug}`,
      priceCurrency,
      price,
      availability,
      itemCondition: "https://schema.org/NewCondition",
    };
  }
  return base;
}
