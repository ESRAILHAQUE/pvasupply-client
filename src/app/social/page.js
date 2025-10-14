"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Star, Zap, Send } from "lucide-react";

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
      bannerText: "BUY VERIFIED GMAIL ACCOUNTS",
      logo: "Gmail",
      logoColor: "bg-red-500",
    },
    {
      id: 2,
      name: "Buy Google Voice Accounts",
      title: "Buy Verified Google Voice Account",
      href: "/product/buy-google-voice-accounts",
      image: "/images/All Product/Buy Google Voice Accounts.png",
      price: "$15.00 - $450.00",
      category: "Communication",
      bannerText: "BUY VERIFIED GOOGLE VOICE ACCOUNTS",
      logo: "Voice",
      logoColor: "bg-blue-500",
    },
    {
      id: 3,
      name: "Buy Verified LinkedIn Accounts",
      title: "Buy Verified LinkedIn Accounts",
      href: "/product/buy-linkedin-accounts",
      image: "/images/All Product/Buy LinkedIn Accounts.png",
      price: "$30.00 – $250.00",
      category: "Professional",
      bannerText: "BUY VERIFIED LINKEDIN ACCOUNTS",
      logo: "LinkedIn",
      logoColor: "bg-blue-600",
    },
    {
      id: 4,
      name: "Buy Naver Accounts",
      title: "Buy verified Naver Accounts",
      href: "/product/buy-naver-accounts",
      image: "/images/All Product/Buy Naver Accounts.png",
      price: "$12.00 - $280.00",
      category: "Korean",
      bannerText: "BUY VERIFIED NAVER ACCOUNTS",
      logo: "Naver",
      logoColor: "bg-green-500",
    },
    {
      id: 5,
      name: "Buy Old Yahoo Accounts",
      title: "Buy Old Yahoo Accounts",
      href: "/product/buy-old-yahoo-accounts",
      image: "/images/All Product/Buy Verified Yahoo Accounts.jpg",
      price: "$8.00 - $25.00",
      category: "Email",
      bannerText: "BUY VERIFIED YAHOO ACCOUNTS",
      logo: "Yahoo",
      logoColor: "bg-purple-500",
    },
    {
      id: 6,
      name: "Buy Verified OnlyFans Accounts",
      title: "Buy Verified OnlyFans Accounts",
      href: "/product/buy-verified-onlyfans-accounts",
      image: "/images/All Product/Buy Verified OnlyFans Accounts.png",
      price: "$25.00 - $200.00",
      category: "Social",
      bannerText: "BUY VERIFIED ONLYFANS ACCOUNTS",
      logo: "OnlyFans",
      logoColor: "bg-pink-500",
    },
    {
      id: 7,
      name: "Buy Verified Google Ads Accounts",
      title: "Buy Verified Google Ads Account",
      href: "/product/buy-verified-google-ads-accounts",
      image: "/images/All Product/Buy Verified Google Ads Accounts.png",
      price: "$80.00 - $300.00",
      category: "Advertising",
      bannerText: "BUY VERIFIED GOOGLE ADS ACCOUNTS",
      logo: "Google Ads",
      logoColor: "bg-green-600",
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
            <span className="text-gray-900">Social Accounts</span>
          </nav>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialProducts.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="bg-white rounded-sm shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 hover:scale-101  transform">
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
