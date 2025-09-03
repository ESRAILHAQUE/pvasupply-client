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
import RelatedProducts from "../../../components/shared/RelatedProducts";

export default function BuyVerifiedBinanceAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Binance Accounts Available",
    "2019-2024 Years Binance Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Binance Accounts Available",
    "2019-2023 Years Binance Accounts are Available",
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

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy KYC Verified Binance Accounts.png"
                alt="Buy KYC Verified Binance Accounts"
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
                  Buy KYC Verified Binance Accounts
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
                Buy KYC Verified Binance Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$25.00 - $500.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Binance accounts? Do you need USA and European countries real
                  phone number verified old Binance accounts? Or do you want to
                  buy old PVA Binance accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged
                  Binance accounts are indispensable for your business or
                  personal use. We provide instant delivery at Pvasmmpro.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Binance Accounts
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
                  Buy KYC Verified Binance Accounts
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
                        <option value="basic">Basic Package - $25.00</option>
                        <option value="premium">
                          Premium Package - $200.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $500.00
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
                  Buy Verified Binance Accounts
                </h2>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-700 mb-4">
                      In today's fast-moving world of cryptocurrency trading,
                      having the right tools can really help. Picture a platform
                      that makes trading easier, safer, and more reliable.
                      That's what Binance offers — one of the biggest and most
                      trusted platforms for buying and selling digital money. If
                      you're new to this market or want to make your trading
                      process smoother, buying a verified Binance account could
                      be a great idea. But what exactly is a verified account,
                      and why do so many people want them? Let's find out and
                      learn how to get one safely.
                    </p>
                  </div>

                  {/* How Binance Helps Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How Binance Helps You Trade Better
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Binance makes trading easier by having a simple design
                        that's easy to use. It also gives you tools like charts
                        and real-time market data to help you decide when to buy
                        or sell.
                      </p>
                      <p className="text-gray-700">
                        The platform supports different types of orders, such as
                        limit and stop orders. This helps you trade smarter,
                        depending on how the market is moving.
                      </p>
                      <p className="text-gray-700">
                        Binance also has high trading volume for many
                        cryptocurrencies. This means your trades are likely to
                        happen quickly without big price changes.
                      </p>
                      <p className="text-gray-700">
                        You can trade on your phone too, so you can check your
                        account or place trades anytime, anywhere.
                      </p>
                      <p className="text-gray-700">
                        Binance also has tools like automated trading bots.
                        These can help you trade more efficiently and save you
                        time on manual tasks.
                      </p>
                    </div>
                  </div>

                  {/* What Is a Binance Account Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      What Is a Binance Account?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        A Binance account is the key to trading on one of the
                        biggest cryptocurrency platforms. It gives you access to
                        a wide range of digital assets and trading options.
                      </p>
                      <p className="text-gray-700">
                        When you create an account, you can use powerful tools,
                        market info, and real-time data. This helps you make
                        better trading decisions in a fast-moving market.
                      </p>
                      <p className="text-gray-700">
                        With a Binance account, you can deposit, withdraw, and
                        swap different cryptocurrencies easily. You can also
                        trade on spot markets or use more advanced features like
                        futures.
                      </p>
                      <p className="text-gray-700">
                        Each account has security settings that you can
                        customize. This helps protect your money and personal
                        information. With millions of active users worldwide,
                        Binance is trusted by many in the crypto world.
                      </p>
                    </div>
                  </div>

                  {/* How to Buy Safely Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How to Buy Verified Binance Accounts Safely
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Buying a verified Binance account can be tempting, but
                        it's important to stay safe. The crypto world has many
                        scams, so it's crucial to choose reliable sources.
                      </p>
                      <p className="text-gray-700">
                        Start by looking for sellers with good reviews and a
                        strong reputation online. Choose platforms that focus on
                        selling accounts and offer buyer protection.
                      </p>
                      <p className="text-gray-700">
                        Before paying, check that the account is real. Some
                        sellers might show fake documents or claim they have
                        real accounts without proof.
                      </p>
                      <p className="text-gray-700">
                        Use safe payment methods that offer refunds or
                        chargebacks if something goes wrong. Avoid sending money
                        via wire transfer or cash, as these are harder to
                        reverse.
                      </p>
                      <p className="text-gray-700">
                        Read what others have said about their experience. This
                        can help you avoid common problems and make a better
                        decision.
                      </p>
                    </div>
                  </div>

                  {/* Steps to Buy Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Steps to Buy a Verified Binance Account
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        If you want to buy a verified Binance account, there are
                        a few steps to follow. First, search for trusted sellers
                        online. Look for those with positive feedback and good
                        reviews.
                      </p>
                      <p className="text-gray-700">
                        Next, check how the seller verifies accounts. Make sure
                        they are real and follow Binance's rules.
                      </p>
                      <p className="text-gray-700">
                        Look at the price too. While cheaper options may seem
                        better, it's better to choose quality over low cost.
                      </p>
                      <p className="text-gray-700">
                        Once you find a seller, talk to them to learn about the
                        account details and any required verification steps.
                        Confirm that the account is active and ready to use
                        right after you buy it.
                      </p>
                      <p className="text-gray-700">
                        Use secure payment methods like escrow services or
                        crypto payments to protect both you and the seller. This
                        way, neither of you lose money if something goes wrong.
                      </p>
                    </div>
                  </div>

                  {/* Security Features Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Security Features in Verified Binance Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified Binance accounts have strong security features
                        to protect your assets and personal information.
                      </p>
                      <p className="text-gray-700">
                        One of the main tools is two-factor authentication
                        (2FA). This means you have to use a password and another
                        code sent to your phone. This makes it much harder for
                        someone to hack your account.
                      </p>
                      <p className="text-gray-700">
                        Another important feature is withdrawal whitelist. You
                        can set which addresses your funds can go to, which adds
                        an extra layer of control.
                      </p>
                      <p className="text-gray-700">
                        Binance also checks for suspicious IP addresses. If
                        someone tries to log in from a different location or
                        device, you'll get an alert. This helps spot potential
                        threats early.
                      </p>
                      <p className="text-gray-700">
                        Regular security updates keep the platform safe from new
                        threats. These features make users feel confident that
                        their investments and data are secure while trading on
                        Binance.
                      </p>
                    </div>
                  </div>

                  {/* Basic Functions Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      What are the basic functions of a verified Binance
                      account?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        A verified Binance account gives users access to more
                        features and better trading options. It allows people to
                        trade more effectively with a wide range of
                        cryptocurrencies. This helps traders use both short-term
                        and long-term strategies.
                      </p>
                      <p className="text-gray-700">
                        With verification, users can send and receive different
                        cryptocurrencies without much hassle. They can also
                        withdraw more money, which is helpful during times when
                        prices are changing a lot.
                      </p>
                      <p className="text-gray-700">
                        Another important function is the ability to use margin
                        trading. This lets traders borrow money to increase
                        their potential profits.
                      </p>
                      <p className="text-gray-700">
                        Security is also improved with a verified account. Users
                        get two-factor authentication, which makes it harder for
                        others to access their account without permission.
                      </p>
                      <p className="text-gray-700">
                        Verified users can also take part in special events and
                        promotions on Binance. These opportunities are not
                        available to those who haven't completed the
                        verification process.
                      </p>
                    </div>
                  </div>

                  {/* KYC Requirements Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      KYC Requirements for Binance
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        KYC means "Know Your Customer," and it's a necessary
                        step for anyone using Binance. It helps the platform
                        follow rules and keep the service safe.
                      </p>
                      <p className="text-gray-700">
                        When you sign up, you need to give personal details like
                        your name, birth date, address, and a form of ID, such
                        as a passport or driver's license. You have to upload
                        these documents through a secure website.
                      </p>
                      <p className="text-gray-700">
                        Once Binance checks these details, they can give you
                        access to more features. The verification usually takes
                        just a few hours, though it may take longer in some
                        cases.
                      </p>
                      <p className="text-gray-700">
                        Completing KYC not only makes your account safer but
                        also allows you to take out more money and use other
                        special services offered by Binance.
                      </p>
                    </div>
                  </div>

                  {/* Secure Password Practices Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Secure Password Practices
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Using a strong password is important for keeping your
                        Binance account safe. You should make sure your password
                        has a mix of capital and lowercase letters, numbers, and
                        special symbols. This makes it harder for others to
                        guess.
                      </p>
                      <p className="text-gray-700">
                        Avoid using simple words or personal information like
                        your birthday or name. Instead, choose phrases that are
                        meaningful to you but hard for others to figure out.
                      </p>
                      <p className="text-gray-700">
                        You should change your password regularly, maybe every
                        few months, or right away if you think someone might be
                        trying to access it.
                      </p>
                      <p className="text-gray-700">
                        A password manager can help you create and store complex
                        passwords safely. These tools make it easier to remember
                        many different passwords.
                      </p>
                      <p className="text-gray-700">
                        You should also use two-factor authentication (2FA)
                        wherever possible. This adds another layer of
                        protection, so even if someone knows your password, they
                        still need another form of verification to access your
                        account.
                      </p>
                    </div>
                  </div>

                  {/* Why Verification is Important Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Why is Binance Verification Important?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verifying your account on Binance helps keep the
                        platform safe and trustworthy. It helps make sure that
                        the people using it are real, which reduces the chance
                        of fraud and scams in the crypto world.
                      </p>
                      <p className="text-gray-700">
                        When you complete the KYC process, you gain access to
                        better tools and higher limits. This lets you trade more
                        and use more features, which makes your overall
                        experience on Binance better.
                      </p>
                      <p className="text-gray-700">
                        Verified accounts also help create a safer trading
                        environment for everyone. With more trust among users,
                        Binance can tackle issues like money laundering and
                        other illegal activities.
                      </p>
                      <p className="text-gray-700">
                        Following KYC rules also helps Binance follow global
                        laws and improve its reputation as a reliable exchange.
                        This builds confidence among users and helps keep the
                        entire crypto market stable.
                      </p>
                    </div>
                  </div>

                  {/* Why People Buy Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Why are People Buying Binance Accounts?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Many people are buying verified Binance accounts for
                        several reasons. One main reason is the simplicity of
                        having an already verified account. New users often face
                        a long and complicated KYC process. Buying an account
                        skips that part.
                      </p>
                      <p className="text-gray-700">
                        Traders also want to access advanced features and higher
                        withdrawal limits available only to verified users. This
                        allows them to trade bigger amounts without having to
                        wait or go through extra steps.
                      </p>
                      <p className="text-gray-700">
                        Experienced traders use Binance's tools to analyze the
                        market and plan their strategies. A pre-verified account
                        helps them be seen as more trustworthy in trading
                        communities.
                      </p>
                      <p className="text-gray-700">
                        Some people might want to keep their personal and
                        trading money separate. A verified account can offer
                        them privacy and control over their investments.
                      </p>
                    </div>
                  </div>

                  {/* E-Commerce Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How Can Binance Help E-Commerce Businesses with Payments?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Binance provides a strong platform that helps e-commerce
                        businesses in many ways. By letting customers pay with
                        cryptocurrency, businesses can reach more people and
                        take advantage of the growing use of digital money.
                      </p>
                      <p className="text-gray-700">
                        Binance supports many different cryptocurrencies, so
                        businesses can accept several types of payments. This
                        appeals to customers who prefer using digital currency
                        instead of traditional money.
                      </p>
                      <p className="text-gray-700">
                        The fees for using Binance are usually lower than those
                        of regular payment processors, which helps businesses
                        save money and increase their profits.
                      </p>
                      <p className="text-gray-700">
                        Binance also processes payments quickly, which makes the
                        shopping experience smoother for customers. This can
                        lead to happy customers and more repeat business.
                      </p>
                      <p className="text-gray-700">
                        Security is another benefit. Binance uses strong
                        encryption to protect transactions. This makes customers
                        more likely to trust businesses that use Binance for
                        payments, especially in a world where online shopping is
                        so common.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified Binance Accounts"
                  category="Crypto Accounts"
                />
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

        {/* Related Products Section */}
      </div>
    </div>
  );
}
