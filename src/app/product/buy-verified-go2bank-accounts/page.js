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

export default function BuyVerifiedGo2BankAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Go2Bank Accounts Available",
    "2019-2024 Years Go2Bank Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Go2Bank Accounts Available",
    "2019-2023 Years Go2Bank Accounts are Available",
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
    "Your relationship with Go2Bank",
    "Using Go2Bank services",
    "Content in Go2Bank services",
    "Software in Go2Bank services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Go2Bank handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified Go2Bank Accounts.png"
                alt="Buy Verified Go2Bank Accounts"
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
                  Buy Verified Go2Bank Accounts
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
                Buy Verified Go2Bank Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$50.00 - $120.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Go2Bank accounts? Do you need USA and European countries real
                  phone number verified old Go2Bank accounts? Or do you want to
                  buy old PVA Go2Bank accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged
                  Go2Bank accounts are indispensable for your business or
                  personal use. We provide instant delivery at Pvasmmpro.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Go2Bank Accounts
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
                  Buy Verified Go2Bank Accounts
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
                          Premium Package - $85.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $120.00
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
                  Buy verified Go2Bank accounts
                </h3>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-600 mb-4">
                      Buy verified Go2Bank accounts can give you several
                      advantages. These accounts have better security, which
                      helps keep your money safe. When you buy a verified
                      account, you're not just getting a banking service—you're
                      also getting more confidence that your financial
                      information is protected.
                    </p>
                    <p className="text-gray-600 mb-4">
                      The process of getting a verified account is easy and
                      smooth. These accounts avoid common issues with unverified
                      ones, like limits on how much you can spend or unexpected
                      holds on your money. This makes it simpler for both
                      individuals and businesses to manage their money
                      effectively.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Having a verified account also gives you access to various
                      benefits offered by Go2Bank. These can include lower fees
                      and special offers that make your banking experience
                      better. Knowing your money is secure adds more freedom and
                      peace of mind.
                    </p>
                  </div>

                  {/* Description Image */}
                  <div className="flex justify-center my-8">
                    <Image
                      src="/images/long-description-photo/Buy Verified Go2Bank Accounts.png"
                      alt="Go2Bank Accounts Description"
                      width={500}
                      height={350}
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  {/* What is Go2Bank and why is it popular Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      What is Go2Bank and why is it popular?
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Go2Bank is an online banking service that has become
                        quite popular in recent years. It was created to make
                        managing money easy without needing to go to a physical
                        bank.
                      </p>
                      <p className="text-gray-600">
                        What makes Go2Bank stand out is its simple and
                        easy-to-use interface, especially on mobile devices.
                        Users can check their accounts, send money, and pay
                        bills anytime they want. This convenience is especially
                        helpful for those who like to handle their money on the
                        go.
                      </p>
                      <p className="text-gray-600">
                        Another reason people like Go2Bank is because of its
                        features. It offers direct deposit options and low fees,
                        making it more affordable for many. It also has tools
                        like budgeting features that help customers track their
                        spending.
                      </p>
                      <p className="text-gray-600">
                        The rise in digital banking has made services like
                        Go2Bank more popular. As more people look for
                        alternatives to traditional banks, Go2Bank has become a
                        go-to option.
                      </p>
                    </div>
                  </div>

                  {/* Introduction to Go2Bank Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Introduction to Go2Bank
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Go2Bank is a modern banking solution made for the
                        digital age. It was launched by Green Dot Corporation to
                        provide users with an easy and efficient way to handle
                        their money.
                      </p>
                      <p className="text-gray-600">
                        This online bank has a user-friendly mobile app that
                        allows customers to access their accounts at any time
                        and place. Features like direct deposit, bill payment,
                        and cash withdrawal make daily banking tasks simpler.
                      </p>
                      <p className="text-gray-600">
                        Go2Bank also focuses on being accessible. It serves
                        people who might not have access to traditional banking
                        services. With no monthly fees under certain conditions,
                        it's a good option for those who are careful with their
                        money.
                      </p>
                      <p className="text-gray-600">
                        Security is a top priority here. Customers benefit from
                        FDIC insurance on balances up to $250,000 and strong
                        fraud protection to keep their personal information safe
                        while using the service.
                      </p>
                    </div>
                  </div>

                  {/* Benefits of Go2Bank Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Benefits of Go2Bank
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Go2Bank is a modern online banking service designed for
                        people who want convenience and easy access. It provides
                        a variety of features that meet the needs of today's
                        users.
                      </p>
                      <p className="text-gray-600">
                        One big benefit is the simple way to open an account.
                        Users can get started quickly without dealing with the
                        usual bank procedures. Through the Go2Bank app, managing
                        money is smooth and stress-free.
                      </p>
                      <p className="text-gray-600">
                        Another advantage is that there are no monthly
                        maintenance fees if you meet certain conditions, such as
                        having direct deposits. This makes it a good choice for
                        people who like to save money.
                      </p>
                      <p className="text-gray-600">
                        Go2Bank also gives early access to paychecks by offering
                        direct deposits two days earlier than usual. Customers
                        also like the wide network of ATMs where they can make
                        free withdrawals.
                      </p>
                      <p className="text-gray-600">
                        Features like savings tools and cash-back rewards help
                        Go2Bank stand out in the digital banking world. Its
                        focus on customer satisfaction makes it a good option
                        for new users.
                      </p>
                    </div>
                  </div>

                  {/* Importance of Verified Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Importance of Verified Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verified accounts are reliable and trustworthy. In
                        today's digital world, people are often cautious about
                        using platforms that are not verified because of the
                        risk of scams or fraud.
                      </p>
                      <p className="text-gray-600">
                        A verified Go2Bank account adds trust. It tells
                        customers that their money is safe and that transactions
                        will go smoothly. This is important for online banking,
                        where protecting your identity and personal information
                        is key.
                      </p>
                      <p className="text-gray-600">
                        Verified accounts often come with extra benefits too.
                        Users might get higher spending limits and faster
                        customer support. These features help create a better
                        banking experience.
                      </p>
                      <p className="text-gray-600">
                        Using verified accounts also builds trust in the
                        community. When others see that verification processes
                        are strong, they feel more confident to use the service
                        without worrying about problems during transactions.
                      </p>
                    </div>
                  </div>

                  {/* Alternatives to Buying a Verified Go2Bank Account Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Alternatives to Buying a Verified Go2Bank Account
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        If you're looking for other options besides buying a
                        verified Go2Bank account, there are several choices that
                        offer similar benefits.
                      </p>
                      <p className="text-gray-600">
                        One option is to use traditional banks. Many of them
                        have low-fee accounts with good features and strong
                        customer support.
                      </p>
                      <p className="text-gray-600">
                        Digital banks like Chime or Varo are also good choices.
                        They offer user-friendly services and often don't charge
                        monthly fees.
                      </p>
                      <p className="text-gray-600">
                        If you want flexibility without a full bank account,
                        prepaid debit cards can work. These cards let you manage
                        your money easily and help you control your spending.
                      </p>
                      <p className="text-gray-600">
                        Credit unions are another alternative. They are
                        member-focused and often provide better rates and
                        personal service that is tailored to your needs.
                      </p>
                    </div>
                  </div>

                  {/* Frequently Asked Questions about GO2 Bank Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Frequently Asked Questions about GO2 Bank Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        When thinking about opening a Go2Bank account, there are
                        many questions people have. One of the most common is
                        about how safe your money is. Go2Bank uses strong
                        encryption to keep your information and transactions
                        secure.
                      </p>
                      <p className="text-gray-600">
                        Another question people often ask is about fees. They
                        want to know if there are monthly charges or costs for
                        using ATMs. Go2Bank keeps things simple with low fees
                        and clear pricing, making it easier to manage your
                        money.
                      </p>
                      <p className="text-gray-600">
                        Many people also wonder how easy it is to set up an
                        account. The process is simple and can be done online in
                        just a few minutes, which is convenient for everyone.
                      </p>
                      <p className="text-gray-600">
                        Some people ask about the mobile banking features.
                        Go2Bank has a user-friendly app that lets you check your
                        balance, transfer money, and manage your account from
                        your phone anytime.
                      </p>
                      <p className="text-gray-600">
                        Customers often want to know how they can get help if
                        they have issues. Go2Bank offers support through
                        multiple ways, so you can always get the help you need
                        when you need it.
                      </p>
                    </div>
                  </div>

                  {/* Features of Go2Bank Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Features of Go2Bank
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Go2Bank has several features that make banking easier
                        and more efficient. One of the best things is that you
                        can manage your money directly from your smartphone. The
                        app is easy to use and lets you track your spending, set
                        up direct deposits, and move money around without any
                        hassle.
                      </p>
                      <p className="text-gray-600">
                        Another great feature is that there are no monthly fees,
                        as long as you set up direct deposit. This is a big
                        advantage for people who want to avoid the costs of
                        traditional banks. Plus, if you sign up for direct
                        deposit, you can get your paycheck up to two days
                        earlier.
                      </p>
                      <p className="text-gray-600">
                        The account also includes free access to ATMs at over
                        24,000 locations across the country. This means you can
                        get cash whenever you need it without worrying about
                        extra charges.
                      </p>
                      <p className="text-gray-600">
                        Go2Bank also helps with saving money through its
                        built-in tools. You can create separate savings accounts
                        for different goals, like a vacation or an emergency,
                        making it easier to stay on top of your finances.
                      </p>
                    </div>
                  </div>

                  {/* Customer Support Services Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Customer Support Services
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Good customer support is an important part of Go2Bank's
                        service. There are several ways to get help, so you're
                        always just a call or a message away.
                      </p>
                      <p className="text-gray-600">
                        The bank offers 24/7 support through phone and chat,
                        which means you can get help anytime, day or night. This
                        helps reduce stress and keeps things running smoothly.
                      </p>
                      <p className="text-gray-600">
                        The website has a detailed FAQ section where you can
                        find answers to common questions without waiting for
                        someone to reply. This self-service option gives you
                        control over solving small issues on your own.
                      </p>
                      <p className="text-gray-600">
                        For those who prefer a more personal touch, email
                        support is available too. You can expect quick
                        responses, which helps you get back to your banking
                        tasks quickly.
                      </p>
                      <p className="text-gray-600">
                        Go2Bank's strong customer support makes the overall
                        banking experience better. With so many options for
                        help, customers feel supported and valued in their
                        financial journey.
                      </p>
                    </div>
                  </div>

                  {/* Conclusion Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Conclusion
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Getting a verified Go2Bank account can be a smart choice
                        for people who want a secure and easy banking
                        experience. As more people turn to digital banking,
                        having a reliable service like Go2Bank offers many
                        benefits.
                      </p>
                      <p className="text-gray-600">
                        Verified accounts add an extra level of trust and
                        reliability, which is important in today's online world.
                        While there are other options to consider, choosing a
                        verified account gives you more confidence.
                      </p>
                      <p className="text-gray-600">
                        Understanding the features and support services of
                        Go2Bank makes it even more appealing. As you make your
                        decision, remember that being informed is key to
                        managing your money well.
                      </p>
                      <p className="text-gray-600">
                        Explore the benefits of having a verified Go2Bank
                        account and take control of your banking experience
                        today.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified Go2Bank Accounts"
                  category="Bank Accounts"
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
