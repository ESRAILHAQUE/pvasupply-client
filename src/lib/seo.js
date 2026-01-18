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
  title, // Accept title as an alternative to name
  description,
  slug,
  image,
  price,
  priceCurrency = "USD",
  availability = "https://schema.org/InStock",
  sku,
  brand = "PVA Supply",
  category,
  aggregateRating = null,
}) {
  const productUrl = `${siteUrl}/product/${slug}`;
  
  // Use title if name is not provided
  const productName = name || title;
  
  const base = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description,
    image: [`${siteUrl}${image}`],
    sku: sku || `PVA-${slug}`,
    brand: { "@type": "Brand", name: brand },
    category,
  };

  // Add aggregate rating if provided
  if (aggregateRating) {
    base.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue || "4.8",
      reviewCount: aggregateRating.reviewCount || "150",
      bestRating: "5",
      worstRating: "1",
    };
  }

  // Add offers with required merchant listing fields
  if (price) {
    base.offers = {
      "@type": "Offer",
      url: productUrl,
      priceCurrency,
      price,
      availability,
      itemCondition: "https://schema.org/NewCondition",
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      seller: {
        "@type": "Organization",
        name: brand,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: priceCurrency,
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    };
  } else {
    // Even without price, include offers structure with contact seller option
    base.offers = {
      "@type": "Offer",
      url: productUrl,
      priceCurrency,
      availability,
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: brand,
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: priceCurrency,
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "US",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "US",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    };
  }

  return base;
}
