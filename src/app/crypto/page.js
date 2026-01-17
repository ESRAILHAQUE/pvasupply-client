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
              Crypto Accounts
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Crypto Exchange Accounts
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Buy verified crypto exchange accounts with KYC verification. Binance, Bybit, Coinbase, Crypto.com - All fully verified and ready to trade.
        </p>
      </header>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cryptoProducts.map((product) => (
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
