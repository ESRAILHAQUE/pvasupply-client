"use client";

import React, { useState } from "react";
import { Search, Check, ChevronDown, ShoppingCart } from "lucide-react";
import { useCart } from "../../../contexts/CartContext";

export default function BuyVerifiedBinanceAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  const features = [
    "Selfie verified account",
    "KYC-verified Binance account",
    "Email confirmed",
    "Binance email and password included",
    "100% customer satisfaction guaranteed — better service, better results",
    "Fully document-verified",
    "Phone verified (USA & UK numbers)",
    "Photo ID verified (NID, Driver's License, or Passport)",
    "USA and European country Binance accounts available",
    "Verified and Verified Plus accounts offered",
    "24/7 customer support from pvasupply.com",
  ];

  const productFeatures = [
    "Selfie verified account",
    "KYC-verified Binance account",
    "Email confirmed",
    "Binance email and password included",
    "100% customer satisfaction guaranteed — better service, better results",
    "Fully document-verified",
    "Phone verified (USA & UK numbers)",
    "Photo ID verified (NID, Driver's License, or Passport)",
    "USA and European country Binance accounts available",
    "Verified and Verified Plus accounts offered",
    "24/7 customer support from pvasupply.com",
  ];

  const contactInfo = [
    { icon: "Email", text: "pvasupply0@gmail.com" },
    { icon: "Telegram", text: "@pvasupply" },
    { icon: "WhatsApp", text: "+1 (979) 633-0236" },
  ];

  const sidebarItems = [
    "Introduction",
    "Your relationship with Binance",
    "Using Binance services",
    "Content in Binance services",
    "Software in Binance services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Binance handles government requests for user information",
  ];

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("Please select an option first");
      return;
    }

    const optionPrices = {
      basic: 200,
      premium: 275,
      enterprise: 350,
    };

    const optionNames = {
      basic: "Basic Package",
      premium: "Premium Package",
      enterprise: "Enterprise Package",
    };

    const product = {
      id: "binance-accounts",
      name: "Buy Verified Binance Accounts",
      option: selectedOption,
      price: optionPrices[selectedOption],
      quantity: quantity,
      category: "Crypto Accounts",
    };

    addToCart(product);
    alert("Added to cart successfully!");
  };

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
                  <span className="text-green-600">BUY VERIFIED</span>
                  <br />
                  <span className="text-black">BINANCE ACCOUNTS</span>
                </h1>
              </div>

              {/* Binance Graphic */}
              <div className="relative mb-6">
                <div className="w-24 h-20 bg-white rounded-lg shadow-md relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-yellow-500 text-3xl font-bold">B</div>
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
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white font-bold mb-3">Contact Us</h3>
                  <div className="space-y-2">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-white text-sm">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{info.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            {/* Breadcrumbs */}
            <div className="text-sm text-gray-600 mb-1">
              Home / Crypto Accounts / Buy Verified Binance Accounts
            </div>

            {/* Category Link */}
            <div className="mb-3">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                Crypto Accounts
              </a>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Buy KYC Verified Binance Accounts
            </h1>

            {/* Price Range */}
            <div className="mb-4">
              <span className="text-3xl font-bold text-green-600">$200.00</span>
              <span className="text-gray-500 ml-2">- $350.00</span>
            </div>

            {/* Product Description */}
            <p className="text-gray-600 mb-6">
              Don&apos;t wait any longer to start trading on one of the
              world&apos;s leading cryptocurrency exchanges. Purchase your
              verified Binance account from pvasupply.com today and start
              investing in the future — one trade at a time. Order now and take
              your trading game to the next level!
            </p>

            {/* Features List */}
            <div className="space-y-2 mb-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Features of Verified Binance Accounts:
              </h3>
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">
                If you want to more information just contact now. 24 Hours
                Reply/Contact
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Email:</span>
                  <span className="text-blue-600">pvasupply0@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">Telegram:</span>
                  <span className="text-blue-600">@pvasupply</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">WhatsApp:</span>
                  <span className="text-blue-600">+1 (979) 633-0236</span>
                </div>
              </div>
            </div>

            {/* Purchase Section */}
            <div className="border-t pt-4">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Buy Binance Accounts
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
                      <option value="">Choose an option</option>
                      <option value="basic">Basic Package - $200.00</option>
                      <option value="premium">Premium Package - $275.00</option>
                      <option value="enterprise">
                        Enterprise Package - $350.00
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
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2 text-sm">
                  <ShoppingCart className="w-4 h-4" />
                  Add to cart
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4 pt-4 border-t text-xs text-gray-600">
              <div className="flex justify-between">
                <span>SKU: N/A</span>
                <span>Category: Crypto Accounts</span>
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
                  Binance Accounts for Sale
                </h2>
                <p className="text-gray-700 mb-4">
                  Binance is one of the world&apos;s largest cryptocurrency
                  exchanges, offering trading in hundreds of cryptocurrencies.
                  Our Binance accounts are perfect for businesses and
                  individuals who need access to cryptocurrency trading and
                  investment services.
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
