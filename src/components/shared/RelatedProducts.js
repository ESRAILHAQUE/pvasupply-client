"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, Send, Star } from "lucide-react";

// Define related products data outside component to avoid hoisting issues
const allProducts = {
  "Social Accounts": [
    {
      name: "Buy Old Gmail Accounts",
      href: "/product/buy-old-gmail-accounts",
      image: "/images/All Product/Buy Gmail Accounts.png",
      price: "$6.00 - $340.00",
      category: "Social Accounts",
    },
    {
      name: "Buy Google Voice Accounts",
      href: "/product/buy-google-voice-accounts",
      image: "/images/All Product/Buy Google Voice Accounts.png",
      price: "$15.00 - $450.00",
      category: "Social Accounts",
    },
    {
      name: "Buy LinkedIn Accounts",
      href: "/product/buy-linkedin-accounts",
      image: "/images/All Product/Buy LinkedIn Accounts.png",
      price: "$10.00 - $320.00",
      category: "Social Accounts",
    },
    {
      name: "Buy Naver Accounts",
      href: "/product/buy-naver-accounts",
      image: "/images/All Product/Buy Naver Accounts.png",
      price: "$12.00 - $280.00",
      category: "Social Accounts",
    },
    {
      name: "Buy Old Yahoo Accounts",
      href: "/product/buy-old-yahoo-accounts",
      image: "/images/All Product/Buy Verified Yahoo Accounts.jpg",
      price: "$8.00 - $25.00",
      category: "Social Accounts",
    },
  ],
  "Crypto Accounts": [
    {
      name: "Buy Verified Binance Accounts",
      href: "/product/buy-verified-binance-accounts",
      image: "/images/All Product/Buy KYC Verified Binance Accounts.png",
      price: "$50.00 - $500.00",
      category: "Crypto Accounts",
    },
    {
      name: "Buy Verified Bybit Accounts",
      href: "/product/buy-verified-bybit-accounts",
      image: "/images/All Product/Buy Verified Bybit Account.png",
      price: "$45.00 - $480.00",
      category: "Crypto Accounts",
    },
    {
      name: "Buy Verified Coinbase Accounts",
      href: "/product/buy-verified-coinbase-accounts",
      image: "/images/All Product/Buy Verified Coinbase Account.png",
      price: "$60.00 - $550.00",
      category: "Crypto Accounts",
    },
    {
      name: "Buy Verified Crypto.com Accounts",
      href: "/product/buy-verified-crypto-com-accounts",
      image: "/images/All Product/Buy Verified Crypto.com Account.png",
      price: "$40.00 - $450.00",
      category: "Crypto Accounts",
    },
  ],
  "Bank Accounts": [
    {
      name: "Buy Verified PayPal Accounts",
      href: "/product/buy-verified-paypal-accounts",
      image: "/images/All Product/Buy Verified PayPal Accounts.png",
      price: "$25.00 - $300.00",
      category: "Bank Accounts",
    },
    {
      name: "Buy Verified Cash App Accounts",
      href: "/product/buy-verified-cash-app-accounts",
      image: "/images/All Product/Buy Verified Cash App Accounts.png",
      price: "$20.00 - $250.00",
      category: "Bank Accounts",
    },
    {
      name: "Buy Verified Chime Bank Accounts",
      href: "/product/buy-verified-chime-bank-accounts",
      image: "/images/All Product/Buy Verified Chime Bank Accounts.png",
      price: "$30.00 - $350.00",
      category: "Bank Accounts",
    },
    {
      name: "Buy Verified Wise Accounts",
      href: "/product/buy-verified-wise-accounts",
      image: "/images/All Product/Buy Wise Accounts.png",
      price: "$35.00 - $400.00",
      category: "Bank Accounts",
    },
    {
      name: "Buy Verified Go2Bank Accounts",
      href: "/product/buy-verified-go2bank-accounts",
      image: "/images/All Product/Buy Verified Go2Bank Accounts.png",
      price: "$25.00 - $280.00",
      category: "Bank Accounts",
    },
    {
      name: "Buy Verified Venmo Accounts",
      href: "/product/buy-verified-venmo-accounts",
      image: "/images/All Product/Buy Verified Venmo Accounts.png",
      price: "$18.00 - $220.00",
      category: "Bank Accounts",
    },
    {
      name: "Buy Verified Skrill Accounts",
      href: "/product/buy-verified-skrill-accounts",
      image: "/images/All Product/Buy Skrill Accounts.png",
      price: "$30.00 - $350.00",
      category: "Bank Accounts",
    },
  ],
  "Special Accounts": [
    {
      name: "Buy Verified Apple Pay Accounts",
      href: "/product/buy-verified-apple-pay-accounts",
      image: "/images/All Product/Buy Verified Apple Pay Account.png",
      price: "$40.00 - $450.00",
      category: "Special Accounts",
    },
    {
      name: "Buy Walmart Seller Account",
      href: "/product/buy-walmart-seller-account",
      image: "/images/All Product/Buy Walmart Seller Account.png",
      price: "$100.00 - $800.00",
      category: "Special Accounts",
    },
    {
      name: "Buy Verified Google Ads Accounts",
      href: "/product/buy-verified-google-ads-accounts",
      image: "/images/All Product/Buy Verified Google Ads Accounts.png",
      price: "$80.00 - $600.00",
      category: "Special Accounts",
    },
    {
      name: "Buy Verified Stripe Accounts",
      href: "/product/buy-verified-stripe-accounts",
      image: "/images/All Product/Buy Stripe Accounts.png",
      price: "$70.00 - $500.00",
      category: "Special Accounts",
    },
    {
      name: "Buy Verified Payoneer Accounts",
      href: "/product/buy-verified-payoneer-accounts",
      image: "/images/All Product/Buy Payoneer Accounts.png",
      price: "$45.00 - $380.00",
      category: "Special Accounts",
    },
  ],
};

export default function RelatedProducts({ currentProduct, category }) {
  // Helper function to render stars
  const renderStars = (rating = 5) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  // Get products from the same category, excluding current product
  const categoryProducts = allProducts[category] || [];
  const filteredProducts = categoryProducts.filter(
    (product) => product.name !== currentProduct
  );

  // Return different number of products based on category
  let relatedProducts;
  if (category === "Special Accounts") {
    relatedProducts = filteredProducts.slice(0, 2);
  } else {
    // Return exactly 4 products for other categories
    relatedProducts = filteredProducts.slice(0, 4);
  }

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Related Products</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <Link
            key={product.name}
            href={product.href}
            className="group block bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-48 bg-gray-50 rounded-t-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-3">
              {/* Category */}
              <div className="text-xs text-gray-500 mb-1">
                {product.category}
              </div>

              {/* Product Name */}
              <h4 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                {product.name}
              </h4>

              {/* Star Rating */}
              <div className="flex gap-1 mb-2">{renderStars(5)}</div>

              {/* Price */}
              <div className="text-green-600 font-bold text-sm mb-3">
                {product.price}
              </div>

              {/* Contact Icons */}
              <div className="flex gap-1">
                <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                  <Globe className="w-2.5 h-2.5 text-gray-600" />
                </div>
                <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                  <Send className="w-2.5 h-2.5 text-gray-600" />
                </div>
                <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 font-bold text-xs">S</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
