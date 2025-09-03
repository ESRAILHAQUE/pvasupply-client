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

export default function BuyVerifiedBybitAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Bybit Accounts Available",
    "2019-2024 Years Bybit Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Bybit Accounts Available",
    "2019-2023 Years Bybit Accounts are Available",
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
    "Your relationship with Bybit",
    "Using Bybit services",
    "Content in Bybit services",
    "Software in Bybit services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Bybit handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified Bybit Account.png"
                alt="Buy Verified Bybit Account"
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
                  Buy Verified Bybit Account
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
                Buy Verified Bybit Account
              </h1>

              {/* Price */}
              <PriceDisplay price="$20.00 - $400.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Bybit accounts? Do you need USA and European countries real
                  phone number verified old Bybit accounts? Or do you want to
                  buy old PVA Bybit accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged Bybit
                  accounts are indispensable for your business or personal use.
                  We provide instant delivery at Pvasmmpro.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Bybit Accounts
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
                  Buy Verified Bybit Account
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
                        <option value="basic">Basic Package - $20.00</option>
                        <option value="premium">
                          Premium Package - $150.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $400.00
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
                  Buy Verified Bybit Accounts
                </h2>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Introduction to Bybit and Its Importance
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Bybit has quickly become a popular choice for people who
                        trade cryptocurrencies. It's a strong platform for
                        buying and selling different types of digital money.
                        With its easy-to-use design and powerful tools, it's no
                        wonder that many people want to start using it. However,
                        setting up a new account on Bybit can be a bit tough
                        because of the verification process. This is where
                        buying a verified Bybit account might be a good idea.
                      </p>
                      <p className="text-gray-700">
                        Getting a verified account can save you time and let you
                        use all the great tools and features on the platform
                        right away. Whether you are a professional trader or
                        just starting out in the world of crypto, a verified
                        account gives you more chances to grow and succeed in
                        this ever-changing market. Let's look into why buying a
                        verified Bybit account could be the best decision for
                        you.
                      </p>
                    </div>
                  </div>

                  {/* Buy Online Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Buy Verified Bybit Accounts Online
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Purchasing verified Bybit accounts online can make your
                        trading experience much easier. It helps you skip the
                        long verification steps that new users usually go
                        through.
                      </p>
                      <p className="text-gray-700">
                        When you get a verified account, you're not only getting
                        access to the platform, but also trust in the crypto
                        market. This extra trust can help you build better
                        trading plans and connect with the community more
                        effectively.
                      </p>
                      <p className="text-gray-700">
                        The ability to start trading right away is a big
                        advantage. With a verified account, you don't have to
                        wait for approvals or deal with unnecessary steps to
                        begin trading.
                      </p>
                      <p className="text-gray-700">
                        However, it's important to pick reliable sellers. Look
                        for sellers with good reviews and a history of
                        satisfying customers. This will help protect your money
                        and give you confidence as you start using Bybit's
                        features.
                      </p>
                    </div>
                  </div>

                  {/* Top Benefits Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Top Benefits of Buying Verified Bybit Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When you buy a verified Bybit account, security becomes
                        a top concern. Verified accounts usually have better
                        protection against hacks and unwanted access. This helps
                        traders stay focused on their strategies without
                        worrying about their account being compromised.
                      </p>
                      <p className="text-gray-700">
                        Another great benefit is the instant access to advanced
                        trading tools. Verified accounts unlock features that
                        can improve your trading, like high leverage options and
                        exclusive market insights. It's like having a special
                        access pass for crypto trading.
                      </p>
                      <p className="text-gray-700">
                        Buying these accounts can also save you time. Instead of
                        going through the long verification process on your own,
                        you get immediate access to all of Bybit's features. For
                        busy traders, this convenience can be really useful.
                      </p>
                      <p className="text-gray-700">
                        There's also an added sense of trust with verified
                        accounts. These accounts are less likely to face common
                        issues that unverified users might experience, making
                        the trading experience much smoother for everyone
                        involved in buying and selling.
                      </p>
                    </div>
                  </div>

                  {/* Best Crypto Trading Platform Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Best Crypto Trading Platform
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When choosing a crypto trading platform, the one you
                        pick can make a big difference. Bybit is one of the top
                        choices in this fast-growing market. Its easy-to-use
                        interface attracts both new and experienced traders.
                      </p>
                      <p className="text-gray-700">
                        One of the main features is the variety of advanced
                        trading options, including perpetual contracts and
                        margin trading. This gives users more flexibility to
                        adjust their strategies based on market conditions.
                      </p>
                      <p className="text-gray-700">
                        Bybit also has competitive fees that can help active
                        traders make more profit. The platform is committed to
                        security, using strong measures to protect user funds,
                        especially in a market that can be very unpredictable.
                      </p>
                      <p className="text-gray-700">
                        Additionally, customers can get help anytime with the
                        24/7 customer support. Whether you need help with your
                        account or have a technical problem, assistance is
                        available just a click away.
                      </p>
                      <p className="text-gray-700">
                        With a wide range of resources like educational content
                        and analysis tools, Bybit is a great platform for
                        everyone, whether you're new to trading or a seasoned
                        pro.
                      </p>
                    </div>
                  </div>

                  {/* Factors to Consider Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Factors to Consider When Buying a Verified Bybit Account
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When deciding to buy a verified Bybit account, there are
                        several important factors to take into account. First,
                        it's essential to research the seller's reputation.
                        Trust is important when dealing with online services.
                      </p>
                      <p className="text-gray-700">
                        Next, check the verification documents provided. It's
                        important that all the information is real and up to
                        date.
                      </p>
                      <p className="text-gray-700">
                        Pricing is another thing to consider. While cheaper
                        options might look tempting, remember that quality often
                        costs more.
                      </p>
                      <p className="text-gray-700">
                        Also, think about the customer support options the
                        seller offers. Good support can be a big help if you run
                        into any problems after purchasing.
                      </p>
                      <p className="text-gray-700">
                        Look for extra features that might come with the
                        account, like trading history or special bonuses. These
                        can enhance your experience on Bybit and make your
                        trading more enjoyable.
                      </p>
                    </div>
                  </div>

                  {/* Trusted Sellers Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Buy Verified Bybit Accounts from Trusted Sellers Only
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When you want to buy verified Bybit accounts, trust is
                        really important. The crypto world has a lot of options,
                        but not all of them are reliable.
                      </p>
                      <p className="text-gray-700">
                        Choosing a trusted seller means you get an account that
                        has been properly checked. This helps reduce the risk of
                        scams or getting fake information. Trusted platforms
                        usually have good reviews and a strong reputation in the
                        community.
                      </p>
                      <p className="text-gray-700">
                        Before you make a purchase, take some time to research.
                        Look for feedback from people who have bought from them
                        before. A real seller often gives you some kind of
                        guarantee or support after the sale.
                      </p>
                      <p className="text-gray-700">
                        Don't be tempted by deals that seem too good to be true.
                        They usually are. Always look for clear communication
                        and detailed terms when working with a seller.
                      </p>
                      <p className="text-gray-700">
                        By buying verified accounts through trustworthy sources,
                        you can trade with more confidence. You won't have to
                        worry as much about security or whether the account is
                        real.
                      </p>
                    </div>
                  </div>

                  {/* Instant Access Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Buy Verified Bybit Accounts for Instant Access to Bybit
                      Features
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Purchasing a verified Bybit account gives you quick
                        access to a range of great features that can improve
                        your trading. Once you get the account, you'll have
                        access to advanced tools that make trading easier.
                      </p>
                      <p className="text-gray-700">
                        These features include higher withdrawal limits, special
                        trading options, and faster customer support. Each of
                        these helps make your transactions smoother and more
                        efficient.
                      </p>
                      <p className="text-gray-700">
                        Also, having a verified account means you can verify
                        yourself more quickly when doing trades or withdrawing
                        money. You won't have to wait a long time for approval.
                      </p>
                      <p className="text-gray-700">
                        Exploring the platform is also easier. With access to
                        market trends and analysis that suit your needs, you can
                        make smart decisions more quickly. The benefits aren't
                        just about convenience—they help you trade more
                        effectively in this fast-paced environment.
                      </p>
                    </div>
                  </div>

                  {/* Process Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      The Process of Buying Verified Bybit Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Getting a verified Bybit account is a simple process
                        that can make your trading experience better.
                      </p>
                      <p className="text-gray-700">
                        Start by searching for reputable sellers online. Look
                        for sites or groups that have good reviews and positive
                        comments from other users.
                      </p>
                      <p className="text-gray-700">
                        Once you find a trustworthy seller, look through their
                        options to find an account that works for you. Check the
                        account details and make sure it meets your needs.
                      </p>
                      <p className="text-gray-700">
                        After picking an account, start the buying process. This
                        often requires you to give some personal information to
                        verify your identity.
                      </p>
                      <p className="text-gray-700">
                        Next, complete the payment using secure methods that the
                        seller offers. Make sure you understand any return
                        policies in case the account isn't what you expected.
                      </p>
                      <p className="text-gray-700">
                        Once the payment is confirmed, you'll get the login
                        details right away. This lets you start using Bybit's
                        full trading environment without any delays.
                      </p>
                    </div>
                  </div>

                  {/* Key Advantages Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Key Advantages of Verified Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified Bybit accounts offer several benefits that can
                        make trading easier and more rewarding.
                      </p>
                      <p className="text-gray-700">
                        One big advantage is better security. Verified accounts
                        go through strict checks, which lowers the risk of fraud
                        or unauthorized access. This gives you more confidence
                        as you trade.
                      </p>
                      <p className="text-gray-700">
                        Verified users also often get higher transaction limits.
                        This allows you to trade more without facing unnecessary
                        limits, giving you more freedom in your trading
                        strategy.
                      </p>
                      <p className="text-gray-700">
                        Another benefit is access to special features and
                        offers. Many platforms give bonuses or advanced tools
                        only to verified members, which can help increase your
                        profits.
                      </p>
                      <p className="text-gray-700">
                        Having a verified account also helps you build a good
                        reputation in the crypto community. It shows that you're
                        serious about your trading and follow industry
                        standards.
                      </p>
                    </div>
                  </div>

                  {/* Conclusion Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Conclusion: Is it Worth it?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When deciding whether to buy a verified Bybit account,
                        there are several things to consider. Verified accounts
                        offer extra trust and security, which can greatly
                        improve your trading experience. They give you immediate
                        access to Bybit's features like advanced charts and
                        various trading pairs.
                      </p>
                      <p className="text-gray-700">
                        The benefits are big—ranging from better credibility in
                        the crypto community to possible advantages in liquidity
                        and how quickly trades are executed. However, it's
                        important to only purchase from trusted sellers to avoid
                        falling for scams or getting banned.
                      </p>
                      <p className="text-gray-700">
                        Getting a verified Bybit account could be worth it if
                        you're really into crypto trading. It opens up more
                        opportunities that unverified accounts can't access, and
                        it saves time during the setup process.
                      </p>
                      <p className="text-gray-700">
                        As with any decision, you should consider both the pros
                        and cons carefully. Your choice should match your
                        personal goals in the exciting world of crypto trading.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified Bybit Accounts"
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
