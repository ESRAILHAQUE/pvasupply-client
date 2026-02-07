"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function BankAccountsPage() {
  const bankProducts = [
    {
      id: 1,
      name: "Buy Verified PayPal Accounts",
      title: "Buy Verified PayPal Accounts",
      href: "/product/buy-verified-paypal-accounts",
      image: "/images/All Product/Buy Verified PayPal Accounts.png",
      price: "$110.00 – $150.00",
      category: "Payment",
      bannerText: "BUY VERIFIED PAYPAL ACCOUNTS",
      logo: "PayPal",
      logoColor: "bg-blue-500",
    },
    {
      id: 2,
      name: "Buy Verified Cash App Account",
      title: "Buy Verified Cash App Account",
      href: "/product/buy-verified-cash-app-accounts",
      image: "/images/All Product/Buy Verified Cash App Accounts.png",
      price: "$160.00 – $450.00",
      category: "Payment",
      bannerText: "BUY VERIFIED CASH APP ACCOUNTS",
      logo: "Cash App",
      logoColor: "bg-green-500",
    },
    {
      id: 4,
      name: "Buy Verified Wise Accounts",
      title: "Buy Verified Wise Accounts",
      href: "/product/buy-verified-wise-accounts",
      image: "/images/All Product/Buy Verified Wise Accounts.png",
      price: "$200.00 – $380.00",
      category: "Banking",
      bannerText: "BUY VERIFIED WISE ACCOUNTS",
      logo: "Wise",
      logoColor: "bg-green-600",
    },
    {
      id: 5,
      name: "Buy Verified Go2Bank Accounts",
      title: "Buy Verified Go2Bank Accounts",
      href: "/product/buy-verified-go2bank-accounts",
      image: "/images/All Product/Buy Verified Go2Bank Accounts.png",
      price: "$50.00 – $120.00",
      category: "Banking",
      bannerText: "BUY VERIFIED GO2BANK ACCOUNTS",
      logo: "Go2Bank",
      logoColor: "bg-purple-500",
    },
    {
      id: 6,
      name: "Buy Verified Venmo Accounts",
      title: "Buy Verified Venmo Accounts",
      href: "/product/buy-verified-venmo-accounts",
      image: "/images/All Product/Buy Verified Venmo Accounts.png",
      price: "$120.00 – $250.00",
      category: "Payment",
      bannerText: "BUY VERIFIED VENMO ACCOUNTS",
      logo: "Venmo",
      logoColor: "bg-blue-600",
    },
    {
      id: 7,
      name: "Buy Verified Skrill Accounts",
      title: "Buy Verified Skrill Accounts",
      href: "/product/buy-verified-skrill-accounts",
      image: "/images/All Product/Buy Verified Skrill Accounts.png",
      price: "$90.00 – $800.00",
      category: "Payment",
      bannerText: "BUY VERIFIED SKRILL ACCOUNTS",
      logo: "Skrill",
      logoColor: "bg-red-500",
    },
    {
      id: 8,
      name: "Buy Verified Chase Bank Accounts",
      title: "Buy Verified Chase Bank Accounts",
      href: "/product/buy-verified-chase-bank-accounts",
      image: "/images/All Product/Buy Verified Chase Bank Accounts.png",
      price: "$80.00 – $1000.00",
      category: "Banking",
      bannerText: "BUY VERIFIED CHASE BANK ACCOUNTS",
      logo: "Chase",
      logoColor: "bg-blue-700",
    },
    // Stripe temporarily disabled - uncomment to re-enable
    // {
    //   id: 9,
    //   name: "Buy Verified Stripe Accounts",
    //   title: "Buy Verified Stripe Accounts",
    //   href: "/product/buy-verified-stripe-accounts",
    //   image: "/images/All Product/Buy Verified Stripe Accounts.png",
    //   price: "$120.00 – $400.00",
    //   category: "Payment",
    //   bannerText: "BUY VERIFIED STRIPE ACCOUNTS",
    //   logo: "Stripe",
    //   logoColor: "bg-purple-600",
    // },
    {
      id: 10,
      name: "Buy Verified Payoneer Accounts",
      title: "Buy Verified Payoneer Accounts",
      href: "/product/buy-verified-payoneer-accounts",
      image: "/images/All Product/Buy Verified Payoneer Accounts.png",
      price: "$80.00 – $200.00",
      category: "Payment",
      bannerText: "BUY VERIFIED PAYONEER ACCOUNTS",
      logo: "Payoneer",
      logoColor: "bg-blue-800",
    },
    {
      id: 11,
      name: "Buy Verified Apple Pay Account",
      title: "Buy Verified Apple Pay Account",
      href: "/product/buy-verified-apple-pay-accounts",
      image: "/images/All Product/Buy Verified Apple Pay Account.png",
      price: "$60.00 – $150.00",
      category: "Payment",
      bannerText: "BUY VERIFIED APPLE PAY ACCOUNTS",
      logo: "Apple Pay",
      logoColor: "bg-gray-800",
    },
    {
      id: 12,
      name: "Buy Walmart Seller Account",
      title: "Buy Walmart Seller Account",
      href: "/product/buy-walmart-seller-account",
      image: "/images/All Product/Buy Walmart Seller Account.png",
      price: "$200.00 – $500.00",
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
              Bank Accounts
            </li>
          </ol>
        </div>
      </nav>

      {/* Page Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Bank & Payment Accounts
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Buy verified bank and payment accounts. PayPal, Cash App, Wise, Stripe, Venmo, Skrill, Chase, Payoneer - All fully verified with instant delivery.
        </p>
      </header>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bankProducts.map((product) => (
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
