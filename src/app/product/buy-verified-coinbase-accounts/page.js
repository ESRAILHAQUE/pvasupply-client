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

export default function BuyVerifiedCoinbaseAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Coinbase Accounts Available",
    "2019-2024 Years Coinbase Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Coinbase Accounts Available",
    "2019-2023 Years Coinbase Accounts are Available",
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
    "Your relationship with Coinbase",
    "Using Coinbase services",
    "Content in Coinbase services",
    "Software in Coinbase services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Coinbase handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified Coinbase Account.png"
                alt="Buy Verified Coinbase Account"
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
                <Link href="/crypto" className="text-blue-600 hover:underline">
                  Crypto Accounts
                </Link>
                <span> / </span>
                <span className="text-gray-900">
                  Buy Verified Coinbase Account
                </span>
              </div>

              {/* Category Link */}
              <div className="mb-3">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 text-sm">
                  Crypto Accounts
                </a>
              </div>

              {/* Product Title */}
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Buy Verified Coinbase Account
              </h1>

              {/* Price */}
              <PriceDisplay price="$180.00 - $380.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Coinbase accounts? Do you need USA and European countries real
                  phone number verified old Coinbase accounts? Or do you want to
                  buy old PVA Coinbase accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged
                  Coinbase accounts are indispensable for your business or
                  personal use. We provide instant delivery at Pvasmmpro.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Coinbase Accounts
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
                  Buy Verified Coinbase Account
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
                        <option value="basic">Basic Package - $180.00</option>
                        <option value="premium">
                          Premium Package - $280.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $380.00
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
                  Buy Verified Coinbase Accounts
                </h2>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-700 mb-4">
                      In the fast-changing world of cryptocurrency, having a
                      dependable platform to trade is important. Coinbase is one
                      of the most trusted names in digital currency trading. But
                      why choose a regular account when you can buy a verified
                      Coinbase account? These accounts have special benefits
                      that can really improve your trading experience.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Imagine making crypto transactions with better security
                      and more limits. Whether you're a new trader or have been
                      trading for a while, verified accounts give you access to
                      opportunities that standard accounts can't. Let's look at
                      what makes these accounts special and why they are
                      becoming more popular among crypto lovers.
                    </p>
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Benefits Of Verified Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified accounts offer many advantages for crypto
                        traders. One main benefit is the feeling of safety from
                        better security measures. Users can trade knowing their
                        identity and money are protected.
                      </p>
                      <p className="text-gray-700">
                        Another big advantage is higher transaction limits. With
                        a verified account, you can buy and sell more without
                        hitting limits. This helps both casual traders and
                        investors.
                      </p>
                      <p className="text-gray-700">
                        Plus, verified accounts often process transactions
                        faster. In the quick-moving crypto world, every second
                        counts.
                      </p>
                      <p className="text-gray-700">
                        Verified accounts also often give access to special
                        features or services on platforms like Coinbase. These
                        can help users get the most out of their trading.
                      </p>
                    </div>
                  </div>

                  {/* What Are Verified Coinbase Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      What Are Verified Coinbase Accounts?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified Coinbase accounts are user accounts that have
                        gone through a full identity check on Coinbase. This
                        requires users to give personal details like their name,
                        address, and ID.
                      </p>
                      <p className="text-gray-700">
                        Once verified, these accounts get access to more
                        features and services. Verification builds trust between
                        users and the exchange.
                      </p>
                      <p className="text-gray-700">
                        A verified account makes transactions smoother and more
                        convenient. Users can trade more without facing the
                        limits of unverified accounts.
                      </p>
                      <p className="text-gray-700">
                        This process helps stop fraud and makes sure the
                        platform follows the rules. It also adds an extra layer
                        of security in a space where safety is important.
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Security Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Enhanced Security
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Security is a top concern for crypto traders. Verified
                        Coinbase accounts offer better protection against hacks
                        and fraud.
                      </p>
                      <p className="text-gray-700">
                        When you buy a verified account, you're getting strong
                        security features. These include two-factor
                        authentication, which adds an extra step before any
                        transaction. This means even if someone has your
                        password, they still need access to your second factor.
                      </p>
                      <p className="text-gray-700">
                        Verified accounts often come with better tools to watch
                        over activity. Users get alerts for unusual actions,
                        helping them respond fast to possible threats.
                      </p>
                      <p className="text-gray-700">
                        Feeling safe is very important. With these security
                        measures, traders can focus more on their strategies and
                        less on worrying about their safety online.
                      </p>
                    </div>
                  </div>

                  {/* Description Image */}
                  <div className="flex justify-center my-8">
                    <Image
                      src="/images/long-description-photo/Buy Verified Coinbase Account.png"
                      alt="Coinbase Accounts Description"
                      width={500}
                      height={350}
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Increased Transaction Limits Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Increased Transaction Limits
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        One major advantage of buying verified Coinbase accounts
                        is getting higher transaction limits. Standard accounts
                        usually have limits on how much you can buy, sell, or
                        move.
                      </p>
                      <p className="text-gray-700">
                        With a verified account, those limits are much higher.
                        This is especially useful for active traders who want to
                        act fast on market changes.
                      </p>
                      <p className="text-gray-700">
                        Higher limits let you make bigger trades without hitting
                        your cap in the middle. This gives users more confidence
                        in trading and helps them take advantage of good
                        opportunities as they come.
                      </p>
                      <p className="text-gray-700">
                        For businesses and serious investors, these features are
                        important. They allow smooth, efficient transactions
                        that match their financial goals while reducing the
                        hassle of changing accounts or upgrading often.
                      </p>
                    </div>
                  </div>

                  {/* Why People Buy Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Why People Buy Verified Coinbase Accounts?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        People buy verified Coinbase accounts for several
                        reasons. One main reason is the added security. Verified
                        accounts usually have stronger protection against fraud
                        and hacking.
                      </p>
                      <p className="text-gray-700">
                        Many users also want higher transaction limits. Verified
                        accounts often let them buy and withdraw more, making
                        them good for serious investors or traders looking to
                        act fast on market changes.
                      </p>
                      <p className="text-gray-700">
                        Some people are new to crypto trading and want a smooth
                        start. A verified account can make the process easier,
                        helping new traders feel confident without facing the
                        limits of unverified accounts.
                      </p>
                      <p className="text-gray-700">
                        There's also convenience. Buying a verified account
                        saves time by skipping the long verification process. It
                        also helps with staying compliant with rules in the
                        crypto world. This is a big plus for those who want to
                        start trading quickly.
                      </p>
                    </div>
                  </div>

                  {/* Reliable Source Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Reliable Source for Coinbase Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Finding a reliable place to buy verified Coinbase
                        accounts can feel tough. The crypto market has many
                        options, but not all are trustworthy.
                      </p>
                      <p className="text-gray-700">
                        Look for sellers with good reviews and a good
                        reputation. Customer feedback can show how good the
                        service is.
                      </p>
                      <p className="text-gray-700">
                        It's also important to make sure the seller provides
                        fully verified accounts. That means they have done all
                        the necessary steps for identity checks. Higher
                        verification levels make the seller more trustworthy.
                      </p>
                      <p className="text-gray-700">
                        Also consider platforms that offer support after you
                        buy. A helpful support team can assist with any
                        questions or problems you might face with your new
                        account.
                      </p>
                      <p className="text-gray-700">
                        Transparency in pricing is very important. Trustworthy
                        sources will clearly list all the costs and avoid any
                        hidden charges, making your buying process easier and
                        more straightforward.
                      </p>
                    </div>
                  </div>

                  {/* Verification Process Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      The Verification Process
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verification is a key part of secure crypto trading. It
                        works like a gatekeeper, allowing only real users to use
                        platforms like Coinbase. This helps build trust among
                        users.
                      </p>
                      <p className="text-gray-700">
                        When traders go through verification, they share
                        personal details and documents. This makes the platform
                        safer by reducing the chance of fraud or identity theft.
                        Verified accounts are also less likely to be used in
                        illegal activities, making them more dependable for
                        trading.
                      </p>
                      <p className="text-gray-700">
                        Verified accounts usually come with higher transaction
                        limits. This is important for serious investors who want
                        to trade larger amounts without limits.
                      </p>
                      <p className="text-gray-700">
                        Verification also supports transparency in crypto
                        trading. Users feel more confident about their
                        investments while lowering the risks from unverified
                        accounts.
                      </p>
                    </div>
                  </div>

                  {/* Step-by-step Verification Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Step-by-step Verification Process
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        The verification process for Coinbase accounts is
                        designed to improve security and trust. To start, you
                        need to provide valid ID, such as a passport or driver's
                        license.
                      </p>
                      <p className="text-gray-700">
                        Next, you'll have to upload a selfie for facial
                        recognition. This confirms that the person signing up
                        matches the ID.
                      </p>
                      <p className="text-gray-700">
                        Once your documents are submitted, Coinbase checks them
                        carefully. The time to get approved can vary, but it
                        often takes just a few hours.
                      </p>
                      <p className="text-gray-700">
                        After verification is complete, you'll get a
                        confirmation email. At this point, your account will
                        have more features and higher limits.
                      </p>
                      <p className="text-gray-700">
                        It's important to follow instructions carefully during
                        the process to avoid delays. Supplying accurate
                        information helps speed up the verification.
                      </p>
                    </div>
                  </div>

                  {/* Full KYC Verification Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Full KYC Verification
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Buying verified Coinbase accounts with full KYC (Know
                        Your Customer) verification is important. This process
                        ensures that all identities are thoroughly checked and
                        confirmed.
                      </p>
                      <p className="text-gray-700">
                        Full KYC verification increases trust between users and
                        the platform. It brings authenticity and helps prevent
                        fraud, making the crypto community safer. With these
                        accounts, you're not just getting access; you're also
                        gaining peace of mind.
                      </p>
                      <p className="text-gray-700">
                        Fully verified accounts also come with higher
                        transaction limits. You can trade larger amounts without
                        facing restrictions or delays. This is especially useful
                        for serious traders looking to make bigger profits.
                      </p>
                      <p className="text-gray-700">
                        Buying a fully verified account means trading in the
                        crypto market confidently. You can focus on making smart
                        investment decisions without worrying about compliance
                        issues.
                      </p>
                    </div>
                  </div>

                  {/* Verified Accounts for Sale Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Verified Coinbase Accounts for Sale
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified Coinbase accounts for sale can improve your
                        cryptocurrency trading experience. These accounts are
                        already verified, so you can trade without the usual
                        limits placed on unverified users.
                      </p>
                      <p className="text-gray-700">
                        Purchasing a verified account gives you access to higher
                        limits and better security features. This is important
                        in a market that changes quickly.
                      </p>
                      <p className="text-gray-700">
                        Many sellers give detailed information about their
                        accounts, helping buyers know exactly what they're
                        getting. This transparency builds trust between the
                        buyer and seller.
                      </p>
                      <p className="text-gray-700">
                        When choosing a verified account, look for reliable
                        sellers who prioritize customer satisfaction. A good
                        seller usually has positive reviews or testimonials from
                        past buyers, showing they are trustworthy.
                      </p>
                      <p className="text-gray-700">
                        Investing in a verified Coinbase account can make your
                        crypto journey smoother and give you peace of mind while
                        handling digital assets.
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
                        The world of cryptocurrency is always changing, and
                        having a verified Coinbase account can improve your
                        trading experience. With higher limits and better
                        security, these accounts offer peace of mind for both
                        new and experienced investors.
                      </p>
                      <p className="text-gray-700">
                        Buying a verified Coinbase account brings more than just
                        convenience. Enhanced security helps protect your assets
                        while increasing trust in the marketplace. Verification
                        shows you're using a real platform, which is important
                        in an industry with many scams.
                      </p>
                      <p className="text-gray-700">
                        For those who want to skip long verifications, getting a
                        fully KYC-verified account is a good option. It allows
                        you to trade more without creating everything from
                        scratch.
                      </p>
                      <p className="text-gray-700">
                        When looking for reliable places to buy these accounts,
                        do your research. Choose websites with good reviews and
                        strong customer support to ensure a safe and wise
                        investment.
                      </p>
                      <p className="text-gray-700">
                        Understanding how verification helps secure crypto
                        trading is essential. This step protects users and
                        strengthens the market as a whole, encouraging more
                        people to participate confidently.
                      </p>
                      <p className="text-gray-700">
                        As more people become interested in cryptocurrencies,
                        the need for verified accounts on platforms like
                        Coinbase also grows. Choosing wisely and investing in
                        verified options positions you well in this fast-moving
                        market.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified Coinbase Accounts"
                  category="Crypto Accounts"
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
