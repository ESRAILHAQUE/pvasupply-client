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
import CustomDropdown from "../../../components/shared/CustomDropdown";

export default function BuyOldYahooAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Dropdown options
  const dropdownOptions = [
    { value: "old-yahoo-1", label: "Old Yahoo Account (2019-2020) - $8.00" },
    { value: "old-yahoo-2", label: "Old Yahoo Account (2021-2022) - $12.00" },
    { value: "old-yahoo-3", label: "Old Yahoo Account (2023-2024) - $15.00" },
    { value: "premium-yahoo", label: "Premium Old Yahoo Account - $25.00" },
  ];

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Yahoo Accounts Available",
    "2019-2024 Years Yahoo Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Yahoo Accounts Available",
    "2019-2023 Years Yahoo Accounts are Available",
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
    "Your relationship with Yahoo",
    "Using Yahoo services",
    "Content in Yahoo services",
    "Software in Yahoo services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Yahoo handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified Yahoo Accounts.jpg"
                alt="Buy Old Yahoo Accounts"
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
                <Link href="/social" className="text-blue-600 hover:underline">
                  Social Accounts
                </Link>
                <span> / </span>
                <span className="text-gray-900">Buy Old Yahoo Accounts</span>
              </div>

              {/* Category Link */}
              <div className="mb-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm">
                  Social Accounts
                </a>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Buy Old Yahoo Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$8.00 - $25.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Looking for reliable old Yahoo accounts? Our service provides
                  authentic, aged Yahoo email accounts that are perfect for
                  various online activities. These accounts come with
                  established history and credibility, making them ideal for
                  business communications, marketing campaigns, and personal
                  use.
                </p>
                <p className="text-gray-700 text-sm">
                  Our old Yahoo accounts are created with genuine information
                  and have been maintained properly over the years. Each account
                  includes a verified email address, secure password, and
                  recovery information. These accounts are ready to use
                  immediately upon purchase and come with full access to all
                  Yahoo services.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our Old Yahoo Accounts
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
                  Buy Old Yahoo Accounts
                </h3>

                <div className="space-y-3">
                  {/* Custom Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Choose an option
                    </label>
                    <CustomDropdown
                      options={dropdownOptions}
                      selectedOption={selectedOption}
                      onOptionSelect={setSelectedOption}
                      placeholder="Select an option"
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
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
                          setQuantity(
                            Math.max(1, parseInt(e.target.value) || 1)
                          )
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
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2 text-sm">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab("description")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "description"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}>
                Description
              </button>
              <button
                onClick={() => setActiveTab("features")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "features"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}>
                Features
              </button>
              <button
                onClick={() => setActiveTab("terms")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "terms"
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}>
                Terms & Conditions
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          {activeTab === "description" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Buy Old Yahoo Accounts - Secure and Reliable Email Solutions
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Looking for reliable old Yahoo accounts? Our service
                    provides authentic, aged Yahoo email accounts that are
                    perfect for various online activities. These accounts come
                    with established history and credibility, making them ideal
                    for business communications, marketing campaigns, and
                    personal use.
                  </p>
                  <p className="text-gray-700">
                    Our old Yahoo accounts are created with genuine information
                    and have been maintained properly over the years. Each
                    account includes a verified email address, secure password,
                    and recovery information. These accounts are ready to use
                    immediately upon purchase and come with full access to all
                    Yahoo services.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Why Choose Our Old Yahoo Accounts?
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Our old Yahoo accounts offer several advantages over new
                    accounts. They have established trust with email providers,
                    reducing the likelihood of being flagged as spam. These
                    accounts also come with better deliverability rates and are
                    less likely to be blocked by email filters.
                  </p>
                  <p className="text-gray-700">
                    Each account is carefully selected and verified to ensure
                    quality and reliability. We provide accounts from different
                    years (2019-2024) to meet your specific needs. Whether you
                    need accounts for email marketing, business communications,
                    or personal use, our old Yahoo accounts are the perfect
                    solution.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Features of Our Old Yahoo Accounts
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    Our old Yahoo accounts come with comprehensive features
                    including full email access, calendar integration, contact
                    management, and file storage. Each account is equipped with
                    advanced security features and spam protection to ensure
                    your communications remain safe and private.
                  </p>
                  <p className="text-gray-700">
                    The accounts are compatible with all Yahoo services
                    including Yahoo Mail, Yahoo Calendar, Yahoo Contacts, and
                    Yahoo Drive. You can access these accounts from any device
                    using the Yahoo mobile app or web interface. Our accounts
                    also support POP3 and IMAP protocols for easy integration
                    with email clients.
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center my-8">
                <Image
                  src="/images/long-description-photo/Buy Old Yahoo Accounts.png"
                  alt="Old Yahoo Accounts Description"
                  width={500}
                  height={350}
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Security and Privacy
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    We prioritize the security and privacy of our customers. All
                    our old Yahoo accounts are created using secure methods and
                    come with strong passwords. We never share account
                    information with third parties and ensure that all accounts
                    are properly secured before delivery.
                  </p>
                  <p className="text-gray-700">
                    Our accounts include two-factor authentication setup
                    instructions and recovery information. We also provide
                    guidance on maintaining account security and best practices
                    for using Yahoo services safely. Your privacy and security
                    are our top priorities.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Delivery and Support
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    We offer fast delivery of all old Yahoo accounts, typically
                    within 10 minutes of order confirmation. Each account comes
                    with detailed login information, setup instructions, and
                    troubleshooting guides. Our customer support team is
                    available 24/7 to assist with any questions or issues.
                  </p>
                  <p className="text-gray-700">
                    We provide comprehensive support including account setup
                    assistance, security configuration, and usage guidance. Our
                    team is experienced with Yahoo services and can help you
                    maximize the benefits of your old Yahoo accounts. We also
                    offer replacement guarantees for any accounts that may have
                    issues.
                  </p>
                </div>
              </div>

              {/* Related Products */}
              <RelatedProducts
                currentProduct="Buy Old Yahoo Accounts"
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
  );
}
