"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Globe,
  Send,
  ShoppingCart,
  Scale,
  FileText,
  Shield,
  User,
  Globe as GlobeIcon,
} from "lucide-react";
import TickSign from "@/components/shared/TickSign";
import { useCart } from "../../../contexts/CartContext";
import PriceDisplay from "../../../components/shared/PriceDisplay";
import ContactInfo from "../../../components/shared/ContactInfo";
import RelatedProducts from "../../../components/shared/RelatedProducts";

export default function BuyVerifiedOnlyFansAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username OnlyFans Accounts Available",
    "2019-2024 Years OnlyFans Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username OnlyFans Accounts Available",
    "2019-2023 Years OnlyFans Accounts are Available",
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
    "Your relationship with OnlyFans",
    "Using OnlyFans services",
    "Content in OnlyFans services",
    "Software in OnlyFans services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How OnlyFans handles government requests for user information",
  ];

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("Please select an option first");
      return;
    }

    const optionPrices = {
      basic: 90,
      premium: 180,
      enterprise: 360,
    };

    const product = {
      id: "onlyfans-accounts",
      name: "Buy Verified OnlyFans Accounts",
      option: selectedOption,
      price: optionPrices[selectedOption],
      quantity: quantity,
      category: "Social Accounts",
    };

    addToCart(product);
    alert("Added to cart successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left Section - Product Image */}
          <div className="relative h-[600px] flex items-center justify-center">
            <Image
              src="/images/All Product/Buy Verified OnlyFans Accounts.png"
              alt="Buy Verified OnlyFans Accounts"
              width={1200}
              height={1200}
              className="max-w-full max-h-full object-contain"
              priority
            />
          </div>

          {/* Right Section - Product Details */}
          <div className="space-y-6">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>Home</span>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span className="text-gray-900">OnlyFans Accounts</span>
            </div>

            {/* Category Link */}
            <div className="mb-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Social Accounts
              </a>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Buy Verified OnlyFans Accounts
            </h1>

            {/* Price Range */}
            <PriceDisplay price="$90.00 - $360.00" className="mb-4" />

            {/* Product Description */}
            <p className="text-gray-600 mb-6">
              Get high-quality verified OnlyFans accounts for content creation,
              social media, and digital platforms. Our accounts are fully
              verified, safe, and ready to use immediately.
            </p>

            {/* Features List */}
            <div className="space-y-2 mb-6">
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <TickSign className="w-4 h-4" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <ContactInfo className="mb-6" />

            {/* Purchase Section */}
            <div className="space-y-4">
              {/* Option Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Option
                </label>
                <div className="relative">
                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option value="">Choose an option</option>
                    <option value="basic">Basic Package - $90.00</option>
                    <option value="premium">Premium Package - $180.00</option>
                    <option value="enterprise">
                      Enterprise Package - $360.00
                    </option>
                  </select>
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800">
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="flex-1 text-center border-0 focus:ring-0 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800">
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2 text-sm">
                <ShoppingCart className="w-4 h-4" />
                Add to cart
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">SKU:</span>
                  <span className="ml-2 text-gray-900">ONLYFANS-001</span>
                </div>
                <div>
                  <span className="text-gray-500">Category:</span>
                  <span className="ml-2 text-gray-900">Social Accounts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Description Section */}
        <div className="bg-white rounded-lg shadow-lg mb-8">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: "description", label: "Description" },
                { id: "features", label: "Features" },
                { id: "terms", label: "Terms & Conditions" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}>
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "description" && (
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Verified OnlyFans Accounts for Content Creation
                </h3>
                <p className="text-gray-600 mb-4">
                  Our verified OnlyFans accounts are perfect for content
                  creation, social media, and digital platforms. Each account
                  comes with full verification and established history.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you need OnlyFans accounts for content creation,
                  social media, or digital platforms, our verified accounts
                  provide the foundation you need for success.
                </p>
                <h4 className="text-md font-semibold text-gray-900 mb-2">
                  What You Get:
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Fully verified OnlyFans accounts</li>
                  <li>Phone number verification</li>
                  <li>Email access and recovery</li>
                  <li>Content creation access</li>
                  <li>Social media integration</li>
                  <li>24/7 customer support</li>
                </ul>

                {/* Description Image */}
                <div className="flex justify-center my-8">
                  <Image
                    src="/images/long-description-photo/Buy Verified OnlyFans Accounts.png"
                    alt="OnlyFans Accounts Description"
                    width={500}
                    height={350}
                    className="rounded-lg shadow-lg"
                  />
                </div>

                {/* Additional Content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Why Choose OnlyFans Accounts?
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        OnlyFans has become one of the most popular content
                        creation platforms, allowing creators to monetize their
                        content through subscriptions and tips. Our verified
                        OnlyFans accounts provide you with immediate access to
                        start your content creation journey without the lengthy
                        verification process.
                      </p>
                      <p className="text-gray-600">
                        With a verified OnlyFans account, you can start earning
                        from day one. These accounts come with established
                        profiles, verified status, and are ready for content
                        upload and monetization. Perfect for content creators,
                        influencers, and digital entrepreneurs.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Account Features & Benefits
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Our verified OnlyFans accounts include full access to
                        all platform features, including content upload,
                        subscription management, messaging system, and analytics
                        dashboard. You'll have complete control over your
                        content and earnings.
                      </p>
                      <p className="text-gray-600">
                        These accounts support various content types including
                        photos, videos, live streaming, and pay-per-view
                        content. The verification status ensures your account
                        appears trustworthy to potential subscribers and reduces
                        the risk of account suspension.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Monetization & Growth
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verified OnlyFans accounts provide better visibility and
                        credibility, leading to higher subscription rates and
                        increased earnings. The established account history
                        helps build trust with subscribers and improves your
                        overall platform standing.
                      </p>
                      <p className="text-gray-600">
                        With our accounts, you can focus on creating quality
                        content rather than dealing with verification delays.
                        The accounts are optimized for maximum performance and
                        come with detailed setup instructions to help you get
                        started quickly.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Security & Privacy
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        All our OnlyFans accounts undergo thorough verification
                        processes to ensure they meet platform standards. This
                        includes identity verification, payment method setup,
                        and compliance with platform policies.
                      </p>
                      <p className="text-gray-600">
                        We provide comprehensive account information and
                        security guidelines to help you maintain account safety.
                        Our customer support team is available to assist with
                        any questions or technical issues you may encounter.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified OnlyFans Accounts"
                  category="Social Accounts"
                />
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {productFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <TickSign className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "terms" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Terms & Conditions
                </h3>
                <div className="space-y-3">
                  {sidebarItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
