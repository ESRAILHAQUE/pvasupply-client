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

export default function BuyVerifiedCryptoComAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Crypto.com Accounts Available",
    "2019-2024 Years Crypto.com Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Crypto.com Accounts Available",
    "2019-2023 Years Crypto.com Accounts are Available",
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
    "Your relationship with Crypto.com",
    "Using Crypto.com services",
    "Content in Crypto.com services",
    "Software in Crypto.com services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Crypto.com handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified Crypto.com Account.png"
                alt="Buy Verified Crypto.com Account"
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
                  Buy Verified Crypto.com Account
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
                Buy Verified Crypto.com Account
              </h1>

              {/* Price */}
              <PriceDisplay price="$18.00 - $350.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Crypto.com accounts? Do you need USA and European countries
                  real phone number verified old Crypto.com accounts? Or do you
                  want to buy old PVA Crypto.com accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged
                  Crypto.com accounts are indispensable for your business or
                  personal use. We provide instant delivery at Pvasmmpro.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Crypto.com Accounts
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
                  Buy Verified Crypto.com Account
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
                        <option value="basic">Basic Package - $18.00</option>
                        <option value="premium">
                          Premium Package - $120.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $350.00
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
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Buy Verified Crypto.com Account
                </h3>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-600 mb-4">
                      The world of cryptocurrency is growing fast, and with that
                      growth comes the need for safe places to trade. If you're
                      thinking about getting into this digital world, having a
                      verified Crypto.com account can be really helpful. But why
                      should you consider buying one? The security, ease of use,
                      and sense of safety that come with a verified account are
                      very important in today's fast-moving market. In this
                      post, we'll cover everything you need to know about buying
                      a verified Crypto.com account—how it keeps your money safe
                      and improves your trading experience. Let's start securing
                      your place in the crypto world!
                    </p>
                  </div>

                  {/* Secure Your Digital Assets Today Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Secure Your Digital Assets Today
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        In the quickly changing world of cryptocurrency,
                        security is very important. Digital assets are valuable
                        and often targeted by hackers. Protecting them should be
                        your top priority.
                      </p>
                      <p className="text-gray-600">
                        One good way to increase your security is by using a
                        verified account on platforms like Crypto.com. These
                        accounts offer an extra layer of protection against
                        unauthorized use and fraud.
                      </p>
                      <p className="text-gray-600">
                        By buying a verified Crypto.com account, you make sure
                        your investments are managed with more trust and
                        credibility. This step not only helps protect your
                        transactions but also gives confidence to anyone you
                        might work with, like partners or investors.
                      </p>
                      <p className="text-gray-600">
                        Take action now to make your digital presence stronger.
                        The longer you wait, the more at risk your assets become
                        in this unpredictable market. Prioritizing verification
                        today can help you avoid problems later. Secure what's
                        important right away before it's too late!
                      </p>
                    </div>
                  </div>

                  {/* Importance Of Verified Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Importance Of Verified Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verified accounts are important in the cryptocurrency
                        world. They add a level of trust, showing that you're
                        using a real and reliable platform.
                      </p>
                      <p className="text-gray-600">
                        With more people getting into crypto, there's also more
                        chance of scams and fraud. A verified account helps with
                        this by confirming who you are. This openness makes
                        traders and investors feel more confident.
                      </p>
                      <p className="text-gray-600">
                        Also, many platforms have strict rules for unverified
                        accounts. Users might face limits on how much they can
                        trade or withdraw, making verification essential for a
                        smooth trading experience.
                      </p>
                      <p className="text-gray-600">
                        For those building their digital asset portfolio, having
                        a verified account is not just helpful—it's often
                        necessary to get access to better features and
                        opportunities in the crypto world. Verification can make
                        it easier to use different exchanges and services, while
                        also improving your overall security.
                      </p>
                    </div>
                  </div>

                  {/* Benefits Of Verification Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Benefits Of Verification
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verification adds trust that is very important in the
                        world of cryptocurrency. When you buy a verified
                        Crypto.com account, you get access to more features and
                        services that unverified users can't use.
                      </p>
                      <p className="text-gray-600">
                        One big benefit is higher transaction limits. Verified
                        accounts usually have larger withdrawal limits, which
                        gives you more flexibility when you need to access your
                        money. This is especially useful during market upsweeps
                        when quick access to funds is key.
                      </p>
                      <p className="text-gray-600">
                        Another advantage is better security. Verification often
                        requires extra proof of identity, which helps stop fraud
                        and identity theft. A verified account makes it less
                        likely that someone else will try to take advantage of
                        you.
                      </p>
                      <p className="text-gray-600">
                        Also, having a verified account can improve your
                        reputation in the crypto community. It shows that you're
                        serious about trading and investing, helping you connect
                        more easily with other traders who value honesty and
                        reliability.
                      </p>
                    </div>
                  </div>

                  {/* Risks Of Unverified Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Risks Of Unverified Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Unverified accounts come with several risks. One major
                        risk is the possibility of being scammed. Without
                        verification, it's easier for bad actors to create fake
                        profiles and trick people.
                      </p>
                      <p className="text-gray-600">
                        Another concern is security issues. Unverified accounts
                        often lack strong security measures, making them targets
                        for hackers. This means your personal information could
                        be stolen, leading to financial loss or identity theft.
                      </p>
                      <p className="text-gray-600">
                        Additionally, unverified users might face limits on what
                        they can do on platforms like Crypto.com. This can make
                        trading harder and reduce your overall experience.
                      </p>
                      <p className="text-gray-600">
                        Furthermore, not having a verification can create doubts
                        about your trustworthiness in the crypto community.
                        Working with unverified accounts can hurt your
                        reputation and relationships in a space where trust is
                        really important.
                      </p>
                    </div>
                  </div>

                  {/* Key Features Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        When you get a verified Crypto.com account, you get
                        several useful features that make trading easier and
                        more enjoyable.
                      </p>
                      <p className="text-gray-600">
                        First, you have access to a wide variety of
                        cryptocurrencies. This includes well-known coins like
                        Bitcoin and Ethereum, as well as newer ones.
                      </p>
                      <p className="text-gray-600">
                        Second, you can use advanced trading tools that help you
                        make better investment decisions. These tools can help
                        you understand market trends and make informed choices.
                      </p>
                      <p className="text-gray-600">
                        Verified accounts also get priority support from
                        customer service. This means your issues are handled
                        quickly, which is important when you're trying to trade.
                      </p>
                      <p className="text-gray-600">
                        Additionally, verified accounts can make larger
                        transactions. This means you can trade more without
                        hitting any limits.
                      </p>
                      <p className="text-gray-600">
                        Once you verify your account, you can access special
                        offers and rewards. These can help you save money or
                        earn cashback when you use the platform.
                      </p>
                    </div>
                  </div>

                  {/* Security Measures Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Security Measures
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        When you get a verified Crypto.com account, keeping your
                        information safe is very important. The platform has
                        several security measures to protect your assets.
                      </p>
                      <p className="text-gray-600">
                        They use strong encryption to keep your data private and
                        secure from unwanted access. They also regularly check
                        for security weaknesses to make sure everything is safe.
                      </p>
                      <p className="text-gray-600">
                        The system keeps an eye on your activity to spot any
                        strange behavior. If something looks suspicious, they
                        can act quickly to stop any issues.
                      </p>
                      <p className="text-gray-600">
                        You should also use strong passwords and change them
                        often. Staying aware of phishing attempts can help you
                        protect your account.
                      </p>
                      <p className="text-gray-600">
                        Having these security features in place gives you peace
                        of mind. You can trade and invest without worrying about
                        your safety.
                      </p>
                    </div>
                  </div>

                  {/* Verification Process Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Verification Process
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Getting verified on Crypto.com helps keep your digital
                        assets safe. The process usually asks you to provide
                        some personal information, like your ID and proof of
                        address.
                      </p>
                      <p className="text-gray-600">
                        After you sign up, you need to send documents that prove
                        who you are. This might be a government ID or passport.
                        The platform uses advanced technology to check these
                        documents quickly.
                      </p>
                      <p className="text-gray-600">
                        It can take a few minutes to a few days for the
                        verification to be done. While waiting, watch your email
                        for any messages or requests for more information.
                      </p>
                      <p className="text-gray-600">
                        Once verified, you'll have full access to all
                        Crypto.com's features with stronger security. This helps
                        protect your investments and builds trust in the
                        platform.
                      </p>
                    </div>
                  </div>

                  {/* Two-factor Authentication Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Two-factor Authentication
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Two-factor authentication (2FA) is an extra step to keep
                        your Crypto.com account safe. It's a simple way to
                        protect your account from unauthorized users.
                      </p>
                      <p className="text-gray-600">
                        When you turn on 2FA, you need two things to log in:
                        something you know, like your password, and something
                        you have, usually your phone. This makes it harder for
                        someone to get into your account even if they know your
                        password.
                      </p>
                      <p className="text-gray-600">
                        Apps like Google Authenticator or Authy make it easy to
                        set up 2FA. Every time you log in, you'll get a code on
                        your phone. You need to enter this code and your
                        password to access your account.
                      </p>
                      <p className="text-gray-600">
                        This extra protection is important because there are
                        many online threats. Using 2FA helps keep your assets
                        safe and gives you confidence while trading.
                      </p>
                    </div>
                  </div>

                  {/* Legal Considerations Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Legal Considerations
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        When you think about buying a verified Crypto.com
                        account, it's important to understand the legal side.
                        Different places have different rules about using
                        crypto, and following them is necessary.
                      </p>
                      <p className="text-gray-600">
                        Using an unregulated account can lead to legal problems.
                        If authorities think you're breaking the law, it can
                        affect your investments and personal information.
                      </p>
                      <p className="text-gray-600">
                        You should also read and understand Crypto.com's terms
                        of service. Breaking these rules can result in your
                        account being blocked or removed.
                      </p>
                      <p className="text-gray-600">
                        Talking to a lawyer who knows about crypto laws can help
                        you make the right choices. They can give advice based
                        on your situation.
                      </p>
                      <p className="text-gray-600">
                        Being aware of the legal side helps you enjoy trading
                        without unexpected issues. It's important to know the
                        rules, especially since the laws around crypto are
                        changing.
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
                        The world of cryptocurrency trading is always changing.
                        A verified Crypto.com account can help you trade more
                        safely and efficiently. With features like better
                        security and trust, it's no wonder many traders choose
                        to verify their accounts.
                      </p>
                      <p className="text-gray-600">
                        Choosing a verified account helps you avoid the risks
                        that come with unverified ones. You can trade with peace
                        of mind, knowing your assets are protected and you can
                        use all the platform's features.
                      </p>
                      <p className="text-gray-600">
                        As technology improves, so do security measures like
                        2FA. These tools help protect your account and your
                        investments.
                      </p>
                      <p className="text-gray-600">
                        Understanding the legal aspects is also important when
                        using crypto. Following the rules helps you stay safe
                        and makes the crypto world more trustworthy.
                      </p>
                      <p className="text-gray-600">
                        With all this in mind, buying a verified Crypto.com
                        account could be a smart move for anyone serious about
                        their crypto journey. Get your verified account today
                        and take control of your financial future with
                        confidence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified Crypto.com Accounts"
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
