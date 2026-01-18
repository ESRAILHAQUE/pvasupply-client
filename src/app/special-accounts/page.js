"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SpecialAccountsPage() {
  const specialProducts = [
    {
      id: 1,
      name: "Buy Verified Apple Pay Accounts",
      title: "Buy Verified Apple Pay Accounts",
      href: "/product/buy-verified-apple-pay-accounts",
      image: "/images/All Product/Buy Verified Apple Pay Account.png",
      price: "$370.00 – $470.00",
      category: "Payment",
      bannerText: "BUY VERIFIED APPLE PAY ACCOUNTS",
      logo: "Apple Pay",
      logoColor: "bg-gray-800",
    },
    {
      id: 2,
      name: "Buy Walmart Seller Account",
      title: "Buy Walmart Seller Account",
      href: "/product/buy-walmart-seller-account",
      image: "/images/All Product/Buy Walmart Seller Account.png",
      price: "$1,900.00 – $4,900.00",
      category: "E-commerce",
      bannerText: "BUY WALMART SELLER ACCOUNTS",
      logo: "Walmart",
      logoColor: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">{">"}</li>
            <li aria-current="page" className="text-gray-900 font-medium">
              Special Accounts
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Special Accounts
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Explore our premium collection of verified Apple Pay accounts and Walmart seller accounts. 
          High-quality, secure, and ready to use with instant delivery.
        </p>
      </header>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <Link
                href={product.href}
                className="block"
                aria-label={`View details for ${product.title}`}>
                <div className="relative">
                  {/* Product Image */}
                  <div className="flex justify-center mb-1 p-4 bg-gray-50 group-hover:bg-gray-100 transition-colors">
                    <div className="relative w-full max-w-[200px] aspect-square">
                      <Image
                        src={product.image}
                        alt={`${product.title} - ${product.category}`}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                        loading="eager"
                      />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="text-center p-4">
                    <h2 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <p className="text-red-600 font-semibold text-lg" aria-label={`Price: ${product.price}`}>
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Special Accounts",
            description:
              "Buy verified Apple Pay accounts and Walmart seller accounts with instant delivery.",
            url: "https://pvasupply.com/special-accounts",
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://pvasupply.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Special Accounts",
                  item: "https://pvasupply.com/special-accounts",
                },
              ],
            },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: specialProducts.length,
              itemListElement: specialProducts.map((product, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "Product",
                  name: product.title,
                  description: product.title,
                  image: `https://pvasupply.com${product.image}`,
                  sku: `PVA-SPECIAL-${product.id}`,
                  brand: {
                    "@type": "Brand",
                    name: "PVA Supply",
                  },
                  offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "USD",
                    lowPrice: product.price.match(/\$(\d+)/)?.[1] || "0",
                    highPrice:
                      product.price.match(/\$\d+\.\d+\s*–\s*\$(\d+)/)?.[1] ||
                      product.price.match(/\$(\d+)/)?.[1] ||
                      "0",
                    availability: "https://schema.org/InStock",
                    url: `https://pvasupply.com${product.href}`,
                    priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
                    seller: {
                      "@type": "Organization",
                      name: "PVA Supply",
                    },
                    shippingDetails: {
                      "@type": "OfferShippingDetails",
                      shippingRate: {
                        "@type": "MonetaryAmount",
                        value: "0",
                        currency: "USD",
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
                  },
                },
              })),
            },
          }),
        }}
      />
    </div>
  );
}
