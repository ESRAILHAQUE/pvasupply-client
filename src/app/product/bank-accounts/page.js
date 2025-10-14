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
      id: 3,
      name: "Buy Verified Chime Bank Accounts",
      title: "Buy Verified Chime Bank Accounts",
      href: "/product/buy-verified-chime-bank-accounts",
      image: "/images/All Product/Buy Verified Chime Bank Accounts.png",
      price: "$100.00 – $220.00",
      category: "Banking",
      bannerText: "BUY VERIFIED CHIME BANK ACCOUNTS",
      logo: "Chime",
      logoColor: "bg-teal-500",
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
    {
      id: 9,
      name: "Buy Verified Stripe Accounts",
      title: "Buy Verified Stripe Accounts",
      href: "/product/buy-verified-stripe-accounts",
      image: "/images/All Product/Buy Verified Stripe Accounts.png",
      price: "$120.00 – $400.00",
      category: "Payment",
      bannerText: "BUY VERIFIED STRIPE ACCOUNTS",
      logo: "Stripe",
      logoColor: "bg-purple-600",
    },
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
      <div className="bg-gray-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <span>{">"}</span>
            <span className="text-gray-900">Bank Accounts</span>
          </nav>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bankProducts.map((product) => (
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
