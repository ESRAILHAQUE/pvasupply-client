"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Globe,
  Send,
  Check,
  ChevronDown,
  ShoppingCart,
  Scale,
  FileText,
  Shield,
  User,
  Globe as GlobeIcon,
} from "lucide-react";
import { useCart } from "../../../contexts/CartContext";
import PriceDisplay from "../../../components/shared/PriceDisplay";
import ContactInfo from "../../../components/shared/ContactInfo";

export default function BuyVerifiedGoogleAdsAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  const features = [
    "Guaranteed Satisfaction & Recovery",
    "Email and Phone Access",
    "Fully KYC Verified",
    "Personal & Business Accounts Available",
    "Phone Verified",
    "Real Gmail Accounts Used",
    "Pre-Activated & Ready for Ads",
    "Billing & Payment Methods Verified",
  ];

  const productFeatures = [
    "Guaranteed Satisfaction & Recovery",
    "Email and Phone Access",
    "Fully KYC Verified",
    "Personal & Business Accounts Available",
    "Phone Verified",
    "Real Gmail Accounts Used",
    "Pre-Activated & Ready for Ads",
    "Billing & Payment Methods Verified",
  ];

  const contactInfo = [
    { icon: "Email", text: "pvasupply0@gmail.com" },
    { icon: "Telegram", text: "@pvasupply" },
    { icon: "WhatsApp", text: "+1 (979) 633-0236" },
  ];

  const sidebarItems = [
    "Introduction",
    "Your relationship with Google Ads",
    "Using Google Ads services",
    "Content in Google Ads services",
    "Software in Google Ads services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Google Ads handles government requests for user information",
  ];

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("Please select an option first");
      return;
    }

    const optionPrices = {
      basic: 220,
      premium: 270,
      enterprise: 320,
    };

    const product = {
      id: "google-ads-accounts",
      name: "Buy Verified Google Ads Accounts",
      option: selectedOption,
      price: optionPrices[selectedOption],
      quantity: quantity,
      category: "Advertising Accounts",
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
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-red-500 rounded-xl p-6 h-full relative overflow-hidden shadow-lg">
              {/* Sale Badge */}
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Sale!
              </div>

              {/* Main Content */}
              <div className="text-white h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Buy Verified Google Ads Accounts
                  </h2>
                  <p className="text-lg mb-6">
                    Looking to purchase a fully verified Google Ads account?
                    You&apos;re in the right place! At https://pvasupply.com/,
                    we provide 100% secure and reliable verified Google Ads
                    accounts, ready for running high-performance ad campaigns.
                    These accounts allow you to create and manage ads
                    effortlessly while staying compliant with Google&apos;s
                    policies.
                  </p>
                  <p className="text-lg mb-6">
                    Our verified Google Ads accounts are perfect for businesses,
                    marketers, and advertisers looking to scale campaigns
                    without restrictions.
                  </p>
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
          </div>

          {/* Right Section - Product Details */}
          <div className="space-y-6">
            {/* Category Link */}
            <div className="mb-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Advertising Accounts
              </a>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Buy Verified Google Ads Accounts
            </h1>

            {/* Price Range */}
            <PriceDisplay price="$220.00 - $320.00" className="mb-4" />

            {/* Product Description */}
            <p className="text-gray-600 mb-6">
              Looking to purchase a fully verified Google Ads account?
              You&apos;re in the right place! At https://pvasupply.com/, we
              provide 100% secure and reliable verified Google Ads accounts,
              ready for running high-performance ad campaigns. These accounts
              allow you to create and manage ads effortlessly while staying
              compliant with Google&apos;s policies.
            </p>
            <p className="text-gray-600 mb-6">
              Our verified Google Ads accounts are perfect for businesses,
              marketers, and advertisers looking to scale campaigns without
              restrictions.
            </p>

            {/* Features List */}
            <div className="space-y-2 mb-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Features of Verified Google Ads Accounts:
              </h3>
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <ContactInfo className="mb-6" />

            {/* Product Options */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Choose Your Package
              </h3>

              {/* Option Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Package
                </label>
                <div className="relative">
                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option value="">Choose an option</option>
                    <option value="basic">Basic Package - $220.00</option>
                    <option value="premium">Premium Package - $270.00</option>
                    <option value="enterprise">
                      Enterprise Package - $320.00
                    </option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-6">
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
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Tabs */}
        <div className="bg-white rounded-lg shadow-sm border">
          {/* Tab Navigation */}
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
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  About Our Google Ads Accounts
                </h3>
                <p className="text-gray-600 mb-4">
                  Our verified Google Ads accounts are perfect for digital
                  marketing, online advertising, and campaign management. Each
                  account comes with full verification and established history.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you need Google Ads accounts for business marketing,
                  client campaigns, or advertising services, our verified
                  accounts provide the foundation you need for success.
                </p>
                <h4 className="text-md font-semibold text-gray-900 mb-2">
                  What You Get:
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Fully verified Google Ads accounts</li>
                  <li>Complete KYC verification</li>
                  <li>Billing and payment methods</li>
                  <li>Email and phone access</li>
                  <li>Pre-activated for immediate use</li>
                  <li>Recovery guarantee</li>
                  <li>24/7 customer support</li>
                </ul>
              </div>
            )}

            {activeTab === "features" && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {productFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Check className="w-4 h-4 text-green-600" />
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
