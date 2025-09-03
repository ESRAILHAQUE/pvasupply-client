"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Globe,
  Send,
  Check,
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

export default function BuyVerifiedWiseAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  const features = [
    "Guaranteed satisfaction & recovery",
    "Email and phone access",
    "Bitcoin transactions enabled",
    "Personal & business accounts available",
    "Phone verified",
    "Real Gmail accounts used",
    "Bank & card verified",
    "Complete verification documents provided",
  ];

  const productFeatures = [
    "Guaranteed satisfaction & recovery",
    "Email and phone access",
    "Bitcoin transactions enabled",
    "Personal & business accounts available",
    "Phone verified",
    "Real Gmail accounts used",
    "Bank & card verified",
    "Complete verification documents provided",
  ];

  const contactInfo = [
    { icon: "Email", text: "pvasupply0@gmail.com" },
    { icon: "Telegram", text: "@pvasupply" },
    { icon: "WhatsApp", text: "+1 (979) 633-0236" },
  ];

  const sidebarItems = [
    "Introduction",
    "Your relationship with Wise",
    "Using Wise services",
    "Content in Wise services",
    "Software in Wise services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Wise handles government requests for user information",
  ];

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("Please select an option first");
      return;
    }

    const optionPrices = {
      basic: 200,
      premium: 300,
      enterprise: 380,
    };

    const product = {
      id: "wise-accounts",
      name: "Buy Verified Wise Accounts",
      option: selectedOption,
      price: optionPrices[selectedOption],
      quantity: quantity,
      category: "Bank Accounts",
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
                  <span className="text-black">WISE ACCOUNTS</span>
                </h1>
              </div>

              {/* Wise Graphic */}
              <div className="relative mb-6">
                <div className="w-24 h-20 bg-white rounded-lg shadow-md relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-blue-500 text-3xl font-bold">W</div>
                  </div>
                </div>

                {/* 15% OFF Badge */}
                <div className="absolute -top-1 -right-1 w-12 h-12 bg-green-500 border-3 border-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">15% OFF</span>
                </div>
              </div>

              {/* Service Features */}
              <div className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-800 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
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
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>Home</span>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span className="text-gray-900">Wise Accounts</span>
            </div>

            {/* Category Link */}
            <div className="mb-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Bank Accounts
              </a>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Buy Verified Wise Accounts
            </h1>

            {/* Price Range */}
            <PriceDisplay price="$200.00 - $380.00" className="mb-4" />

            {/* Product Description */}
            <p className="text-gray-600 mb-6">
              Looking to streamline your international financial transactions? A
              verified Wise (formerly TransferWise) account is the ultimate
              online banking solution! With Wise, you can effortlessly send and
              receive money globally, benefiting from low fees, lightning-fast
              processing times, and competitive exchange rates.
            </p>
            <p className="text-gray-600 mb-6">
              At pvasupply.com, our verified Wise accounts are designed for
              users who value convenience and peace of mind. Whether for
              personal or business purposes, our accounts are ready for
              immediate use.
            </p>

            {/* Features List */}
            <div className="space-y-2 mb-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Features of Verified Wise Accounts:
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
                    <option value="basic">Basic Package - $200.00</option>
                    <option value="premium">Premium Package - $300.00</option>
                    <option value="enterprise">
                      Enterprise Package - $380.00
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
                  <span className="ml-2 text-gray-900">WISE-001</span>
                </div>
                <div>
                  <span className="text-gray-500">Category:</span>
                  <span className="ml-2 text-gray-900">Bank Accounts</span>
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
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Buy Verified Wise Accounts
                </h2>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-700 mb-4">
                      In today's fast-moving online finance world, having a
                      dependable and easy way to send and receive money can
                      really help. Wise, which used to be called TransferWise,
                      is a smart platform that makes international money
                      transfers simple and clear. But what if you could take
                      your experience even further? What if you had access to
                      verified Wise accounts that offer more features and better
                      security? Whether you're a freelancer getting payments
                      from clients around the world or an entrepreneur looking
                      for smooth transactions, buying verified Wise accounts
                      could be a big help. Let's look at everything you need to
                      know about this useful tool for managing your money
                      smartly!
                    </p>
                  </div>

                  {/* What is TransferWise Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      What is TransferWise?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        TransferWise, now known as Wise, is a service that makes
                        sending and receiving money around the world easier. It
                        was started in 2011 by Taavet Hinrikus and Kristo
                        Käärmann to offer a more affordable way to do
                        international transfers.
                      </p>
                      <p className="text-gray-700">
                        Instead of traditional banks, Wise uses real exchange
                        rates and doesn't hide fees. This lets you see exactly
                        how much you're paying before you send any money.
                      </p>
                      <p className="text-gray-700">
                        With a simple and easy-to-use app, sending money across
                        borders has never been simpler. Wise works for both
                        individuals and businesses alike.
                      </p>
                      <p className="text-gray-700">
                        The platform also supports multiple currencies, making
                        it easy for travelers or people dealing with foreign
                        money. It also prioritizes speed, with many transfers
                        done in just a few hours instead of days.
                      </p>
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Benefits Of Buying Verified TransferWise Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Buying verified TransferWise accounts gives you a lot of
                        convenience. You can send and receive money across the
                        globe without the hassle of traditional banks.
                      </p>
                      <p className="text-gray-700">
                        Another benefit is lower fees. Verified accounts often
                        come with better rates, helping you save money on
                        international transfers.
                      </p>
                      <p className="text-gray-700">
                        Security is better with these accounts too. A verified
                        status means your identity has been checked, which adds
                        trust when doing financial transactions.
                      </p>
                      <p className="text-gray-700">
                        You can also get higher transaction limits with verified
                        accounts. This is great for people or businesses that
                        deal with larger amounts of money regularly.
                      </p>
                      <p className="text-gray-700">
                        The simple and clear interface makes managing your money
                        easy. Everything is organized well, so tracking your
                        expenses doesn't feel so hard.
                      </p>
                      <p className="text-gray-700">
                        Buying a verified account can also speed up the process
                        for new users who want to start using international
                        money services quickly.
                      </p>
                    </div>
                  </div>

                  {/* Safety Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Is Wise 100% safe to use?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When thinking about the safety of Wise, it's important
                        to consider their security measures. They use
                        top-of-the-line encryption to protect your personal and
                        financial information. This ensures your sensitive data
                        stays private.
                      </p>
                      <p className="text-gray-700">
                        Wise is also regulated by financial authorities in many
                        countries, like the Financial Conduct Authority (FCA) in
                        the UK and FinCEN in the US. This regulation adds more
                        trust to the platform.
                      </p>
                      <p className="text-gray-700">
                        Many users also report positive experiences with Wise's
                        security. They like the transparency around fees and how
                        transactions are handled.
                      </p>
                      <p className="text-gray-700">
                        While no service is completely risk-free, Wise has done
                        a lot to make its services as secure as possible. Users
                        should still be careful by using two-factor
                        authentication and checking their account regularly for
                        any unusual activity.
                      </p>
                    </div>
                  </div>

                  {/* What is a Wise Account Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      What is a Wise account?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        A Wise account, formerly known as TransferWise, is a
                        digital platform for international money transfers and
                        currency exchange. It lets you send and receive money
                        across borders with lower fees than traditional banks.
                      </p>
                      <p className="text-gray-700">
                        Creating a Wise account lets you hold different
                        currencies in one place. This is especially helpful for
                        travelers or businesses that work with international
                        clients.
                      </p>
                      <p className="text-gray-700">
                        You can easily convert your money into other currencies
                        at real-time exchange rates, avoiding the hidden charges
                        that banks often use. The easy-to-use app makes managing
                        your finances much simpler.
                      </p>
                      <p className="text-gray-700">
                        Wise also gives local bank details in many countries,
                        making it easier to receive payments without paying high
                        fees for foreign transactions. This flexibility makes a
                        Wise account a great choice for many people and
                        businesses.
                      </p>
                    </div>
                  </div>

                  {/* Verified Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Verified Wise Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified Wise accounts help people manage their money
                        around the world easily. These accounts are checked
                        through strict verification steps, making them more
                        secure and reliable compared to regular accounts.
                      </p>
                      <p className="text-gray-700">
                        With a verified account, you can use all the good
                        features Wise offers. This includes lower fees for
                        sending money overseas and better exchange rates than
                        traditional banks usually provide.
                      </p>
                      <p className="text-gray-700">
                        Having a verified account also makes you more
                        trustworthy in financial deals. Whether you're doing
                        business or sending money to friends in another country,
                        it shows others you're serious and reliable.
                      </p>
                      <p className="text-gray-700">
                        Setting up a verified account is simple once the
                        verification is done. The Wise app is easy to use, so
                        it's great for anyone who wants to take control of their
                        money without hassle.
                      </p>
                    </div>
                  </div>

                  {/* Importance of Verified Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Importance of Verified Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified accounts are important because they help build
                        trust in online transactions. When you buy a verified
                        Wise account, you're not just getting a platform—you're
                        also protecting your identity.
                      </p>
                      <p className="text-gray-700">
                        These accounts come with better security measures to
                        keep your money safe from unauthorized access. They also
                        follow financial rules more closely, which helps prevent
                        fraud.
                      </p>
                      <p className="text-gray-700">
                        A verified account can make sending or receiving money
                        overseas faster and easier. It cuts down on delays from
                        extra checks and gives both sides of a transaction peace
                        of mind.
                      </p>
                      <p className="text-gray-700">
                        For businesses or people handling big money, a verified
                        account can improve how others see them. Clients are
                        more likely to work with you if they know your account
                        is verified.
                      </p>
                    </div>
                  </div>

                  {/* Security Features Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Security Features
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Security is a big part of verified Wise accounts. When
                        you buy one, you're getting strong protection for your
                        money. Wise uses advanced encryption and extra login
                        steps to keep your account safe.
                      </p>
                      <p className="text-gray-700">
                        The company also checks its systems regularly to spot
                        and fix any problems. Features like real-time updates on
                        transactions help you stay informed and respond quickly
                        if something unusual happens.
                      </p>
                      <p className="text-gray-700">
                        Buying a verified account means you get these high-level
                        security features without going through the setup
                        process yourself. It makes managing your money safer and
                        easier.
                      </p>
                    </div>
                  </div>

                  {/* Is Wise a Bank Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Is Wise a Bank?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Wise, previously called TransferWise, is not a
                        traditional bank in the U.S. or the U.K. Instead, it's a
                        financial tech company that helps people send money
                        internationally.
                      </p>
                      <p className="text-gray-700">
                        Wise offers lower fees and better exchange rates than
                        many banks. In the U.K., Wise is regulated by the
                        Financial Conduct Authority (FCA), so it follows strict
                        rules to protect customers. In the U.S., they follow
                        regulations but don't operate like traditional banks.
                      </p>
                      <p className="text-gray-700">
                        While Wise isn't a bank in the usual sense, it's still a
                        trustworthy option for handling international money
                        transfers.
                      </p>
                    </div>
                  </div>

                  {/* Why Choose pvasupply Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Why Choose pvasupply?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When looking to buy verified Wise accounts, pvasupply is
                        a good choice for several reasons.
                      </p>
                      <p className="text-gray-700">
                        Users like the quick and easy process to get fully
                        working accounts.
                      </p>
                      <p className="text-gray-700">
                        The platform focuses on quality and security. Every
                        account is checked carefully, giving you confidence when
                        using your money online.
                      </p>
                      <p className="text-gray-700">
                        Pvasupply also offers great customer support. If you run
                        into any problems, their team is ready to help quickly.
                      </p>
                      <p className="text-gray-700">
                        The prices are competitive, so you get good value
                        without worrying about reliability or service.
                      </p>
                      <p className="text-gray-700">
                        The website is easy to use, making it simple for new and
                        experienced users to handle their transactions.
                      </p>
                      <p className="text-gray-700">
                        Choosing pvasupply means you're working with a trusted
                        partner to manage your financial needs safely and
                        efficiently.
                      </p>
                    </div>
                  </div>

                  {/* Common Issues Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Common Issues and Solutions
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Common issues when using verified Wise accounts include
                        delays in the verification process. This can happen if
                        the documents aren't complete or if there are mistakes
                        in the information provided.
                      </p>
                      <p className="text-gray-700">
                        If your verification is taking longer than expected,
                        check the documents again to make sure they match your
                        application. Contacting support can also help move
                        things along faster.
                      </p>
                      <p className="text-gray-700">
                        Another common issue is transaction limits. New users
                        might find they can't send large amounts at first. To
                        fix this, try sending smaller amounts over time while
                        staying active on the platform.
                      </p>
                      <p className="text-gray-700">
                        Some users may see higher currency conversion fees than
                        expected. Look at Wise's fee structure for details and
                        plan your conversions to save money.
                      </p>
                      <p className="text-gray-700">
                        You might also have trouble accessing your account from
                        different devices or locations because of security
                        settings. Use secure connections and keep your recovery
                        options up to date to avoid being locked out.
                      </p>
                    </div>
                  </div>
                </div>
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
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
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
