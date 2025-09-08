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
import RelatedProducts from "../../../components/shared/RelatedProducts";

export default function BuyVerifiedChaseBankAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Chase Bank Accounts Available",
    "2019-2024 Years Chase Bank Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Chase Bank Accounts Available",
    "2019-2023 Years Chase Bank Accounts are Available",
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
    "Your relationship with Chase Bank",
    "Using Chase Bank services",
    "Content in Chase Bank services",
    "Software in Chase Bank services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Chase Bank handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified Chase Bank Accounts.png"
                alt="Buy Verified Chase Bank Accounts"
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
                  Buy Verified Chase Bank Accounts
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
                Buy Verified Chase Bank Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$80.00 - $1000.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Chase Bank accounts? Do you need USA and European countries
                  real phone number verified old Chase Bank accounts? Or do you
                  want to buy old PVA Chase Bank accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged Chase
                  Bank accounts are indispensable for your business or personal
                  use. We provide instant delivery at PVA Supply.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Chase Bank Accounts
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
                  Buy Verified Chase Bank Accounts
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
                        <option value="basic">Basic Package - $80.00</option>
                        <option value="premium">
                          Premium Package - $400.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $1000.00
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
                  Verified Chase Bank Accounts for Traditional Banking
                </h3>
                <p className="text-gray-600 mb-4">
                  Our verified Chase Bank accounts are perfect for traditional
                  banking, credit cards, and comprehensive financial services.
                  Each account comes with full verification and established
                  history.
                </p>
                <p className="text-gray-600 mb-4">
                  Whether you need Chase Bank accounts for personal banking,
                  business services, or credit card applications, our verified
                  accounts provide the foundation you need for success.
                </p>
                <h4 className="text-md font-semibold text-gray-900 mb-2">
                  What You Get:
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Fully verified Chase Bank accounts</li>
                  <li>Phone number verification</li>
                  <li>Email access and recovery</li>
                  <li>Photo ID verification</li>
                  <li>Bank account linking</li>
                  <li>Credit card access</li>
                  <li>24/7 customer support</li>
                </ul>

                {/* Description Image */}
                <div className="flex justify-center my-8">
                  <Image
                    src="/images/long-description-photo/Buy Verified Chase Bank Accounts.png"
                    alt="Chase Bank Accounts Description"
                    width={500}
                    height={350}
                    className="rounded-lg shadow-lg"
                  />
                </div>

                {/* Additional Content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Why Choose Chase Bank Accounts?
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Chase Bank is one of the largest and most trusted
                        financial institutions in the United States. Our
                        verified Chase Bank accounts provide you with access to
                        comprehensive banking services, including checking
                        accounts, savings accounts, credit cards, and investment
                        options.
                      </p>
                      <p className="text-gray-600">
                        With a verified Chase Bank account, you can enjoy
                        benefits like mobile banking, online bill pay, ATM
                        access, and premium customer service. These accounts are
                        perfect for both personal and business banking needs.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Account Features & Benefits
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Our verified Chase Bank accounts come with full access
                        to Chase's digital banking platform, allowing you to
                        manage your finances online and through mobile apps.
                        You'll have access to features like mobile check
                        deposit, account transfers, and real-time balance
                        monitoring.
                      </p>
                      <p className="text-gray-600">
                        These accounts also provide access to Chase's credit
                        card offerings, including premium cards with travel
                        rewards, cash back options, and business credit
                        solutions. The verification process ensures your account
                        is ready for immediate use without restrictions.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Security & Verification
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        All our Chase Bank accounts undergo thorough
                        verification processes to ensure they meet the bank's
                        security standards. This includes phone number
                        verification, email confirmation, and identity
                        verification to protect your account and transactions.
                      </p>
                      <p className="text-gray-600">
                        We provide detailed account information and setup
                        instructions to help you get started quickly and
                        securely. Our customer support team is available to
                        assist with any questions or issues you may encounter.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified Chase Bank Accounts"
                  category="Bank Accounts"
                />
              </div>
            )}

            {activeTab === "features" && (
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Chase Bank Account Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">
                      Banking Services
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Checking & Savings Accounts</li>
                      <li>• Online Banking Access</li>
                      <li>• Mobile App Access</li>
                      <li>• Bill Pay Services</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800">
                      Credit Services
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Credit Card Applications</li>
                      <li>• Loan Applications</li>
                      <li>• Mortgage Services</li>
                      <li>• Investment Accounts</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "terms" && (
              <div className="prose max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Terms & Conditions
                </h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <p>
                    By purchasing our verified Chase Bank accounts, you agree to
                    use them responsibly and in compliance with all applicable
                    laws and regulations.
                  </p>
                  <p>
                    We provide fully verified accounts with all necessary
                    documentation. However, users are responsible for
                    maintaining account security and following Chase Bank&apos;s
                    terms of service.
                  </p>
                  <p>
                    All accounts come with a satisfaction guarantee. If you
                    experience any issues within 24 hours of purchase, we will
                    provide a replacement account at no additional cost.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
