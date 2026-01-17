"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SocialPage() {
  const socialProducts = [
    {
      id: 1,
      name: "Buy Gmail Accounts",
      title: "Buy verified Gmail Accounts",
      href: "/product/buy-old-gmail-accounts",
      image: "/images/All Product/Buy Gmail Accounts.png",
      price: "$6.00 – $340.00",
      category: "Email",
    },
    {
      id: 2,
      name: "Buy Google Voice Accounts",
      title: "Buy Verified Google Voice Account",
      href: "/product/buy-google-voice-accounts",
      image: "/images/All Product/Buy Google Voice Accounts.png",
      price: "$15.00 - $450.00",
      category: "Communication",
    },
    {
      id: 3,
      name: "Buy Verified LinkedIn Accounts",
      title: "Buy Verified LinkedIn Accounts",
      href: "/product/buy-linkedin-accounts",
      image: "/images/All Product/Buy LinkedIn Accounts.png",
      price: "$30.00 – $250.00",
      category: "Professional",
    },
    {
      id: 4,
      name: "Buy Naver Accounts",
      title: "Buy verified Naver Accounts",
      href: "/product/buy-naver-accounts",
      image: "/images/All Product/Buy Naver Accounts.png",
      price: "$12.00 - $280.00",
      category: "Korean",
    },
    {
      id: 5,
      name: "Buy Old Yahoo Accounts",
      title: "Buy Old Yahoo Accounts",
      href: "/product/buy-old-yahoo-accounts",
      image: "/images/All Product/Buy Verified Yahoo Accounts.jpg",
      price: "$8.00 - $25.00",
      category: "Email",
    },
    {
      id: 6,
      name: "Buy Verified OnlyFans Accounts",
      title: "Buy Verified OnlyFans Accounts",
      href: "/product/buy-verified-onlyfans-accounts",
      image: "/images/All Product/Buy Verified OnlyFans Accounts.png",
      price: "$25.00 - $200.00",
      category: "Social",
    },
    {
      id: 7,
      name: "Buy Verified Google Ads Accounts",
      title: "Buy Verified Google Ads Account",
      href: "/product/buy-verified-google-ads-accounts",
      image: "/images/All Product/Buy Verified Google Ads Accounts.png",
      price: "$80.00 - $300.00",
      category: "Advertising",
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
              Social Accounts
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Social Media & Email Accounts
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Buy verified social media and email accounts. Gmail, Google Voice, LinkedIn, Naver, Yahoo, OnlyFans, Google Ads - All phone verified with instant delivery.
        </p>
      </header>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialProducts.map((product) => (
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
    </div>
  );
}
