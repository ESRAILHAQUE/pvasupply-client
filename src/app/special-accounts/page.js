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
      <div className="bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-gray-900">Special Accounts</span>
          </nav>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialProducts.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 hover:scale-101 transform">
              {/* Product Card */}
              <div className="relative">
                {/* Banner */}

                {/* Main Content */}
                <div className="relative bg-white">
                  {/* Product Image */}
                  <div className="flex justify-center mb-1">
                    <div className="relative">
                      <div className=" bg-white border-gray-200  flex items-center justify-center  overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={120}
                          height={120}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-medium text-gray-900 ">
                      {product.title}
                    </h3>
                    <div className="text-red-600 font-normal text-lg">
                      {product.price}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
