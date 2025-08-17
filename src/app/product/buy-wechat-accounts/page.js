"use client";

import React, { useState } from "react";
import { Search, Check, ChevronDown, ShoppingCart } from "lucide-react";
import PriceDisplay from "../../../components/shared/PriceDisplay";
import ContactInfo from "../../../components/shared/ContactInfo";

export default function BuyWeChatAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "Chinese Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username WeChat Accounts Available",
    "2019-2024 Years WeChat Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "Chinese Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username WeChat Accounts Available",
    "2019-2023 Years WeChat Accounts are Available",
    "Any Countries PVA New/Old Accounts are Available",
    "Delivery Time Within 10 Minutes After Your Order",
    "100% Safe & Private",
  ];

  const contactInfo = [
    { icon: "Email", text: "pvasupply0@gmail.com" },
    { icon: "Telegram", text: "@pvasupply" },
    { icon: "WhatsApp", text: "WhatsApp Chat" },
  ];

  const sidebarItems = [
    "Introduction",
    "Your relationship with WeChat",
    "Using WeChat services",
    "Content in WeChat services",
    "Software in WeChat services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How WeChat handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left Section - Promotional Banner */}
          <div className="relative h-[600px]">
            <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400 rounded-xl p-6 h-full relative overflow-hidden shadow-lg">
              {/* Sale Badge */}
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Sale!
              </div>

              {/* Order Now Badge */}
              <div className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <Search className="w-3 h-3" />
                ORDER NOW
              </div>

              {/* Main Title */}
              <div className="mt-12 mb-4">
                <h1 className="text-3xl font-bold leading-tight">
                  <span className="text-green-600">BUY WECHAT</span>
                  <br />
                  <span className="text-black">ACCOUNTS</span>
                </h1>
              </div>

              {/* WeChat Graphic */}
              <div className="relative mb-6">
                <div className="w-24 h-20 bg-white rounded-lg shadow-md relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-green-500 text-3xl font-bold">W</div>
                  </div>
                </div>

                {/* 15% OFF Badge */}
                <div className="absolute -top-1 -right-1 w-12 h-12 bg-green-500 border-3 border-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">15% OFF</span>
                </div>
              </div>

              {/* Service Features */}
              <div className="mb-6">
                <h3 className="text-base font-bold text-black mb-3">
                  SERVICE FEATURES:
                </h3>
                <div className="space-y-1.5">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      <span className="text-xs text-black">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-black text-white px-3 py-1.5 rounded-lg text-center mb-2">
                  <span className="text-xs font-bold">CONTACT NOW</span>
                </div>
                <div className="flex justify-center gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mb-0.5">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs text-black">
                      pvasupply0@gmail.com
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mb-0.5">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.25-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                      </svg>
                    </div>
                    <span className="text-xs text-black">@pvasupply</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mb-0.5">
                      <svg
                        className="w-3 h-3 text-black"
                        fill="currentColor"
                        viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.87 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </div>
                    <span className="text-xs text-black">WhatsApp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-600 mb-1">
              Home / Social Accounts / Buy WeChat Accounts
            </div>

            {/* Category Link */}
            <div className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                Social Accounts
              </a>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Buy WeChat Accounts
            </h1>

            {/* Price */}
            <PriceDisplay price="$15.00 - $400.00" className="mb-4" />

            {/* Product Description */}
            <div className="mb-4 space-y-3">
              <p className="text-gray-700 text-sm">
                Are you looking for best quality real, active, fresh and aged
                WeChat accounts? Do you need Chinese local IP verified old
                WeChat accounts? Or do you want to buy old PVA WeChat accounts
                with cheap price?
              </p>
              <p className="text-gray-700 text-sm">
                Phone verified accounts are provided upon request. Aged WeChat
                accounts are indispensable for your business or personal use. We
                provide instant delivery at Pvasmmpro.
              </p>
            </div>

            {/* Features */}
            <div className="mb-4">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Features of Our PVA Aged WeChat Accounts
              </h3>
              <ul className="space-y-1.5">
                {productFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-black text-base mt-0.5">◆</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <ContactInfo className="mb-4" />

            {/* Purchase Section */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Buy WeChat Accounts
              </h3>

              <div className="space-y-3">
                {/* Option Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Choose an option
                  </label>
                  <div className="relative">
                    <select
                      value={selectedOption}
                      onChange={(e) => setSelectedOption(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm">
                      <option value="">Select an option</option>
                      <option value="basic">Basic Package - $15.00</option>
                      <option value="premium">Premium Package - $150.00</option>
                      <option value="enterprise">
                        Enterprise Package - $400.00
                      </option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Quantity
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2 text-sm">
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 pt-4 border-t text-xs text-gray-600">
              <div className="flex justify-between">
                <span>SKU: N/A</span>
                <span>Category: Social Accounts</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description Section */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "description"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}>
                Description
              </button>
              <button
                onClick={() => setActiveTab("additional")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "additional"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}>
                Additional Information
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "reviews"
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}>
                Reviews (0)
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  WeChat Accounts for Sale
                </h2>
                <p className="text-gray-700 mb-4">
                  WeChat is a Chinese multi-purpose messaging, social media, and
                  mobile payment app. Our WeChat accounts are perfect for
                  businesses and individuals who need access to the Chinese
                  market and WeChat&apos;s ecosystem.
                </p>
                <p className="text-gray-700 mb-4">
                  All our accounts come with full verification and are ready for
                  immediate use. Whether you need a single account or bulk
                  orders, we can accommodate your requirements with competitive
                  pricing and excellent customer support.
                </p>
              </div>
            )}

            {activeTab === "additional" && (
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Additional Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Account Features
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Full phone number verification</li>
                      <li>• Email verification completed</li>
                      <li>• Ready for immediate use</li>
                      <li>• 24/7 customer support</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Delivery
                    </h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• Instant delivery available</li>
                      <li>• Secure account transfer</li>
                      <li>• Detailed setup instructions</li>
                      <li>• Post-purchase support</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="prose max-w-none">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Customer Reviews
                </h2>
                <p className="text-gray-500 text-center py-8">
                  No reviews yet. Be the first to review this product!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h3>
          <div className="space-y-2">
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                <span className="text-sm text-gray-700">{item}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
