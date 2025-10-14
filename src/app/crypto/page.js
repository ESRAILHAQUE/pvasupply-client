"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function CryptoPage() {
  const cryptoProducts = [
    {
      id: 1,
      name: "Buy Verified Binance Accounts",
      title: "Buy Verified Binance Accounts",
      href: "/product/buy-verified-binance-accounts",
      image: "/images/All Product/Buy KYC Verified Binance Accounts.png",
      price: "$200.00 – $350.00",
      category: "Crypto Exchange",
      bannerText: "BUY VERIFIED BINANCE ACCOUNTS",
      logo: "Binance",
      logoColor: "bg-yellow-500",
    },
    {
      id: 2,
      name: "Buy Verified Bybit Accounts",
      title: "Buy Verified Bybit Accounts",
      href: "/product/buy-verified-bybit-accounts",
      image: "/images/All Product/Buy Verified Bybit Account.png",
      price: "$170.00 – $270.00",
      category: "Crypto Exchange",
      bannerText: "BUY VERIFIED BYBIT ACCOUNTS",
      logo: "Bybit",
      logoColor: "bg-blue-500",
    },
    {
      id: 3,
      name: "Buy Verified Coinbase Accounts",
      title: "Buy Verified Coinbase Accounts",
      href: "/product/buy-verified-coinbase-accounts",
      image: "/images/All Product/Buy Verified Coinbase Account.png",
      price: "$180.00 – $380.00",
      category: "Crypto Exchange",
      bannerText: "BUY VERIFIED COINBASE ACCOUNTS",
      logo: "Coinbase",
      logoColor: "bg-blue-600",
    },
    {
      id: 4,
      name: "Buy Verified Crypto.com Accounts",
      title: "Buy Verified Crypto.com Accounts",
      href: "/product/buy-verified-crypto-com-accounts",
      image: "/images/All Product/Buy Verified Crypto.com Account.png",
      price: "$220.00 – $350.00",
      category: "Crypto Exchange",
      bannerText: "BUY VERIFIED CRYPTO.COM ACCOUNTS",
      logo: "Crypto.com",
      logoColor: "bg-purple-500",
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
            <span className="text-gray-900">Crypto Accounts</span>
          </nav>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptoProducts.map((product) => (
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
