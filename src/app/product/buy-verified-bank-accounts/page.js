"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
import PriceDisplay from "../../../components/shared/PriceDisplay";
import ContactInfo from "../../../components/shared/ContactInfo";

export default function BuyVerifiedBankAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Bank Accounts Available",
    "2019-2024 Years Bank Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Bank Accounts Available",
    "2019-2023 Years Bank Accounts are Available",
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
    "Your relationship with Bank",
    "Using Bank services",
    "Content in Bank services",
    "Software in Bank services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Bank handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified Bank Accounts.png"
                alt="Buy Verified Bank Accounts"
                width={1200}
                height={1200}
                className="max-w-full max-h-full object-contain"
                priority
              />
            </div>

            {/* Right Section - Product Details */}
            <div className="p-6">
              {/* Breadcrumbs */}
              <div className="text-sm text-gray-600 mb-1">
                <Link href="/" className="text-blue-600 hover:underline">
                  Home
                </Link>
                <span> / </span>
                <Link href="/bank" className="text-blue-600 hover:underline">
                  Bank Accounts
                </Link>
                <span> / </span>
                <span className="text-gray-900">
                  Buy Verified Bank Accounts
                </span>
              </div>

              {/* Category Link */}
              <div className="mb-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm">
                  Bank Accounts
                </a>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Buy Verified Bank Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$50.00 - $800.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Bank accounts? Do you need USA and European countries real
                  phone number verified old Bank accounts? Or do you want to buy
                  old PVA Bank accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged Bank
                  accounts are indispensable for your business or personal use.
                  We provide instant delivery at Pvasmmpro.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Bank Accounts
                </h3>
                <ul className="space-y-1.5">
                  {productFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <TickSign className="w-4 h-4 mt-0.5 flex-shrink-0" />
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
                  Buy Verified Bank Accounts
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
                        <option value="basic">Basic Package - $50.00</option>
                        <option value="premium">
                          Premium Package - $300.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $800.00
                        </option>
                      </select>
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
                      onChange={(e) =>
                        setQuantity(parseInt(e.target.value) || 1)
                      }
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
                  Bank Accounts for Sale
                </h2>
                <p className="text-gray-700 mb-4">
                  Bank accounts are essential for financial transactions, online
                  banking, and various financial services. Our bank accounts are
                  perfect for businesses and individuals who need access to
                  banking services and financial management tools.
                </p>
                <p className="text-gray-700 mb-4">
                  All our accounts come with full verification and are ready for
                  immediate use. Whether you need a single account or bulk
                  orders, we can accommodate your requirements with competitive
                  pricing and excellent customer support.
                </p>

                {/* Description Image */}
                <div className="flex justify-center my-8">
                  <Image
                    src="/images/long-description-photo/Buy Verified Bank Accounts.png"
                    alt="Bank Accounts Description"
                    width={500}
                    height={350}
                    className="rounded-lg shadow-lg"
                  />
                </div>
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
      </div>
    </div>
  );
}
