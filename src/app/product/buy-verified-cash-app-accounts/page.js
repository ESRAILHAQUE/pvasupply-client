"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
import PriceDisplay from "../../../components/shared/PriceDisplay";
import ContactInfo from "../../../components/shared/ContactInfo";

export default function BuyVerifiedCashAppAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Cash App Accounts Available",
    "2019-2024 Years Cash App Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Cash App Accounts Available",
    "2019-2023 Years Cash App Accounts are Available",
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
    "Your relationship with Cash App",
    "Using Cash App services",
    "Content in Cash App services",
    "Software in Cash App services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Cash App handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified Cash App Accounts.png"
                alt="Buy Verified Cash App Accounts"
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
                <Link href="/special" className="text-blue-600 hover:underline">
                  Special Accounts
                </Link>
                <span> / </span>
                <span className="text-gray-900">
                  Buy Verified Cash App Accounts
                </span>
              </div>

              {/* Category Link */}
              <div className="mb-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm">
                  Special Accounts
                </a>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Buy Verified Cash App Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$30.00 - $450.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Cash App accounts? Do you need USA and European countries real
                  phone number verified old Cash App accounts? Or do you want to
                  buy old PVA Cash App accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged Cash
                  App accounts are indispensable for your business or personal
                  use. We provide instant delivery at Pvasmmpro.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Cash App Accounts
                </h3>
                <ul className="space-y-1.5">
                  {productFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
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
                  Buy Verified Cash App Accounts
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
                        <option value="basic">Basic Package - $30.00</option>
                        <option value="premium">
                          Premium Package - $180.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $450.00
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
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Buy Verified Cash App Account
                </h2>

                <div className="space-y-6">
                  {/* What Is Cash App Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      What Is Cash App Accounts?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Cash App is a mobile payment service that allows users
                        to send and receive money quickly. It's an easy-to-use
                        app with features that make transactions simple and
                        convenient.
                      </p>
                      <p className="text-gray-700">
                        When you create a Cash App account, you get access to
                        many financial services. Users can link their bank
                        accounts, debit cards, or credit cards for quick
                        transfers. The app also lets you buy Bitcoin and invest
                        in stocks.
                      </p>
                      <p className="text-gray-700">
                        Each account has a unique identifier called a $Cashtag.
                        This makes it easy to request payments without sharing
                        personal information like phone numbers or emails.
                      </p>
                      <p className="text-gray-700">
                        Cash App focuses on simplicity with its clear and
                        straightforward interface. Whether you are splitting
                        bills or paying for goods and services, you always have
                        control over your money, making it a useful tool in
                        today's digital world.
                      </p>
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Benefits Of Verified Cash App Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified Cash App accounts offer better security
                        features that protect users from fraud and unauthorized
                        access. Confirming your identity adds an extra layer of
                        trust in digital transactions.
                      </p>
                      <p className="text-gray-700">
                        With a verified account, you can send and receive larger
                        amounts of money without limits. This is especially
                        helpful for people or businesses that do a lot of
                        high-value transactions.
                      </p>
                      <p className="text-gray-700">
                        Moreover, these accounts often have quicker transaction
                        times. Users experience fewer delays, making it easier
                        to handle payments on the go.
                      </p>
                      <p className="text-gray-700">
                        Additionally, having a verified account gives you access
                        to special features like Cash Card benefits and cashback
                        rewards. These perks are designed to improve your
                        overall experience and save you money.
                      </p>
                      <p className="text-gray-700">
                        Verified accounts also help build trust with customers
                        and suppliers. Trust is important in online business, so
                        verification brings confidence during interactions.
                      </p>
                    </div>
                  </div>

                  {/* Why Cash App Is Best Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Why Cash App Is The Best Mobile Banking Solution?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Cash App stands out in the mobile banking world because
                        of its user-friendly interface. Navigating the app is
                        easy, making it accessible to everyone.
                      </p>
                      <p className="text-gray-700">
                        One of its main features is instant money transfers.
                        Users can send and receive money in real-time, avoiding
                        the delays of traditional banks.
                      </p>
                      <p className="text-gray-700">
                        Another unique feature is the Cash Card, which can be
                        used anywhere Visa is accepted. This gives users more
                        flexibility when spending their balance directly.
                      </p>
                      <p className="text-gray-700">
                        The app also focuses on security with advanced
                        encryption and two-factor authentication. These measures
                        give users peace of mind when managing their money
                        online.
                      </p>
                      <p className="text-gray-700">
                        Moreover, Cash App allows users to trade cryptocurrency,
                        making it easy to buy Bitcoin through the platform.
                      </p>
                      <p className="text-gray-700">
                        With so many features in one app, it's no wonder many
                        people consider Cash App the best mobile banking
                        solution today.
                      </p>
                    </div>
                  </div>

                  {/* Risks Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Risks Associated With Buying A Non-Verified Account
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Buying a non-verified Cash App account can bring several
                        risks. Many users don't realize the possible dangers and
                        think they're saving money or time.
                      </p>
                      <p className="text-gray-700">
                        First, non-verified accounts often lack the security
                        features that protect your funds. This makes them easy
                        targets for fraudsters who take advantage of weak
                        security.
                      </p>
                      <p className="text-gray-700">
                        Additionally, using such accounts can result in
                        unexpected limits on transactions or even a permanent
                        ban from the platform. Cash App has strict rules about
                        verification, and not following them can lead to serious
                        consequences.
                      </p>
                      <p className="text-gray-700">
                        You also risk losing your money if the seller disappears
                        after providing a faulty account. Trust is important in
                        financial transactions, and unverified sellers usually
                        don't have a good reputation.
                      </p>
                      <p className="text-gray-700">
                        Moreover, your personal information could be at risk
                        when dealing with unreliable sources. Protecting your
                        identity should always be a top priority when doing
                        financial transactions online.
                      </p>
                    </div>
                  </div>

                  {/* Types of Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Types Of Cash App Accounts Available
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Cash App offers several account types to suit different
                        needs. The most common is the personal account, which is
                        great for sending and receiving money for everyday use.
                        It's perfect for transactions among friends and family.
                      </p>
                      <p className="text-gray-700">
                        For businesses, Cash App provides a merchant account.
                        This type of account makes it easier for customers to
                        pay while offering features like tracking and analyzing
                        transactions.
                      </p>
                      <p className="text-gray-700">
                        Some users choose business accounts that allow them to
                        accept credit card payments directly from their clients.
                        These accounts often come with benefits like better cash
                        flow management.
                      </p>
                      <p className="text-gray-700">
                        There are also verified accounts that have been checked
                        for security. These accounts are more trustworthy and
                        can be important for larger transactions. Each type
                        serves a different purpose but aims to make financial
                        interactions simpler.
                      </p>
                    </div>
                  </div>

                  {/* Avoid Non-BTC Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Avoid Buying Non-BTC Enable Cash App Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When considering the purchase of a Cash App account,
                        it's important to make sure it supports Bitcoin. Non-BTC
                        accounts limit your ability to trade in cryptocurrency,
                        which can reduce your financial flexibility.
                      </p>
                      <p className="text-gray-700">
                        Bitcoin is becoming a big part of the digital currency
                        world. Without access to this feature, you miss out on
                        investment opportunities and possible profits from
                        crypto trading.
                      </p>
                      <p className="text-gray-700">
                        Additionally, non-BTC enabled accounts may signal
                        problems with verification or trustworthiness. This
                        could lead to issues when conducting transactions or
                        resolving disputes.
                      </p>
                      <p className="text-gray-700">
                        Choosing a Bitcoin-enabled account gives you more
                        options today and prepares you for future changes in the
                        financial world. Make choices that match your goals and
                        needs in this fast-moving market.
                      </p>
                    </div>
                  </div>

                  {/* Why Buy from pvasupply Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Why Should You Buy Verified Cash App Accounts from
                      pvasupply?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When looking to buy verified Cash App accounts,
                        pvasupply is a great choice for several reasons. They
                        are committed to providing real, high-quality accounts
                        that meet customer expectations.
                      </p>
                      <p className="text-gray-700">
                        pvasupply understands the importance of security and
                        reliability in online transactions. Every account is
                        carefully checked to reduce the risk of fraud or
                        problems later on. This gives users confidence in their
                        purchase.
                      </p>
                      <p className="text-gray-700">
                        Their customer support team is always available to
                        answer any questions or concerns you might have. They
                        value transparency and are focused on making sure every
                        transaction is satisfying.
                      </p>
                      <p className="text-gray-700">
                        Moreover, pvasupply offers prices that are competitive
                        without sacrificing quality. This makes them an
                        appealing option for those looking to enter the mobile
                        banking world safely and efficiently. Trusting your
                        purchase with them means investing in a reliable
                        financial tool that can improve your online experience.
                      </p>
                    </div>
                  </div>

                  {/* How verified Cash App builds trust Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How verified Cash App builds trust and brings new
                      customers?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        A verified Cash App account helps build trust between
                        users. When people see that an account is verified, they
                        feel safer about using it. This trust makes them more
                        likely to use the app without hesitation.
                      </p>
                      <p className="text-gray-700">
                        Businesses with verified accounts can show they're
                        reliable. A verification badge shows they're
                        professional and trustworthy, which helps attract new
                        customers. People often choose businesses that look
                        trustworthy over those without verification.
                      </p>
                      <p className="text-gray-700">
                        Having a verified account also gives access to better
                        features. Businesses can use these tools to improve
                        their service, which makes customers happy. Happy
                        customers are more likely to come back and tell others
                        about their positive experience.
                      </p>
                      <p className="text-gray-700">
                        This trust helps businesses grow in a competitive
                        market. As more people learn about the benefits of
                        verified accounts, it becomes easier to bring in new
                        customers.
                      </p>
                    </div>
                  </div>

                  {/* How Cash App streamlines transactions Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How Cash App streamlines online transactions for
                      businesses?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Cash App is changing how businesses handle payments. Its
                        simple design makes it easy for both businesses and
                        customers to pay.
                      </p>
                      <p className="text-gray-700">
                        Businesses can accept payments through a unique cash tag
                        or QR code, making the checkout process quick and easy.
                      </p>
                      <p className="text-gray-700">
                        The app also allows for instant transfers. Money is
                        available almost right away, helping businesses manage
                        their money better.
                      </p>
                      <p className="text-gray-700">
                        Cash App connects with other tools used for accounting,
                        making it easier to track sales and costs in real time.
                      </p>
                      <p className="text-gray-700">
                        Features like invoicing provide a professional look
                        while making administrative tasks quicker. As more
                        people use digital payments, Cash App becomes an
                        important part of running a business.
                      </p>
                    </div>
                  </div>

                  {/* Best place to buy Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Best place to buy verified Cash App accounts this year
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Finding the best place to buy verified Cash App accounts
                        can be tricky. You need to make sure you choose a
                        reliable source.
                      </p>
                      <p className="text-gray-700">
                        One top choice this year is pvasupply. They are known
                        for offering high-quality verified accounts that are
                        secure and reliable.
                      </p>
                      <p className="text-gray-700">
                        Their customer support is great, so you can ask
                        questions at any time during the purchase.
                      </p>
                      <p className="text-gray-700">
                        The pricing is also competitive, making it a good value.
                        The process is simple, so you won't waste time dealing
                        with complicated steps.
                      </p>
                      <p className="text-gray-700">
                        User reviews show that many people are happy with the
                        service quality. This helps build trust in your decision
                        to buy from them.
                      </p>
                      <p className="text-gray-700">
                        For anyone looking to use mobile banking solutions,
                        starting with trusted providers like pvasupply is a
                        smart move.
                      </p>
                    </div>
                  </div>

                  {/* Conclusion Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Conclusion
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Using Cash App can be a bit confusing, especially when
                        looking for verified accounts. It's important to find
                        accounts that are authentic and reliable.
                      </p>
                      <p className="text-gray-700">
                        Verified Cash App accounts make transactions more
                        secure. You can feel confident that your money is
                        protected during transactions.
                      </p>
                      <p className="text-gray-700">
                        With the growing interest in BTC features, having a
                        verified account opens up more options. It gives you
                        access to tools that can make your experience better.
                      </p>
                      <p className="text-gray-700">
                        Choosing a trustworthy source like pvasupply means
                        you're making a smart investment. Buy verified Cash App
                        accounts to avoid scams and keep your business running
                        smoothly.
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
