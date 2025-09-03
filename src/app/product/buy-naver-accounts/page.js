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

export default function BuyNaverAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "Korean Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Naver Accounts Available",
    "2019-2024 Years Naver Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "Korean Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Naver Accounts Available",
    "2019-2023 Years Naver Accounts are Available",
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
    "Your relationship with Naver",
    "Using Naver services",
    "Content in Naver services",
    "Software in Naver services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Naver handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Naver Accounts.png"
                alt="Buy Naver Accounts"
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
                <span className="text-gray-900">Buy Naver Accounts</span>
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
                Buy Naver Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$10.00 - $300.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Naver accounts? Do you need Korean local IP verified old Naver
                  accounts? Or do you want to buy old PVA Naver accounts with
                  cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged Naver
                  accounts are indispensable for your business or personal use.
                  We provide instant delivery at Pvasmmpro.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Naver Accounts
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
                  Buy Naver Accounts
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
                        <option value="basic">Basic Package - $10.00</option>
                        <option value="premium">
                          Premium Package - $100.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $300.00
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
                  Buy Naver Accounts
                </h2>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-700 mb-4">
                      Buying Naver accounts can be a smart choice for people who
                      want to start building their presence in South Korea's
                      online world. Naver has over 40 million users and is more
                      than just a search engine. It's a big platform that
                      includes news, shopping, and social media.
                    </p>
                    <p className="text-gray-700 mb-4">
                      When you buy a Naver account, you're gaining more than
                      just access to this platform. You also get the chance to
                      directly connect with your audience. The right account can
                      help build your credibility and make it easier to
                      communicate with your customers.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Having several accounts allows you to create different
                      strategies for marketing. You can share content that's
                      tailored to specific groups of people, which can lead to
                      better engagement and stronger brand loyalty.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Buying old or verified Naver accounts can also help your
                      business look more trustworthy. It lets you use an
                      existing online presence, helping you save time instead of
                      starting from scratch.
                    </p>
                  </div>

                  {/* Benefits of PVA Naver Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Benefits of Having PVA Naver Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        PVA Naver accounts have many benefits for both
                        businesses and individuals. These accounts are verified
                        using a phone number, which makes them more trustworthy.
                        This helps build trust with users and makes your
                        interactions more effective.
                      </p>
                      <p className="text-gray-700">
                        With PVA accounts, you can use many of the services that
                        Naver offers. From searching online to using social
                        media features, there are plenty of options available.
                      </p>
                      <p className="text-gray-700">
                        Having multiple PVA Naver accounts also helps you spread
                        out your online presence. It makes it easier to run
                        targeted marketing campaigns and reach different
                        audience groups.
                      </p>
                      <p className="text-gray-700">
                        One of the best things about using multiple PVA accounts
                        is that you can manage them without the risk of getting
                        banned. This gives you more flexibility and keeps your
                        online activities going smoothly while building a strong
                        network on this popular Korean platform.
                      </p>
                    </div>
                  </div>

                  {/* How to Get Korean Naver Account Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How Do I Get a Korean Naver Account?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Getting a Korean Naver account is not complicated.
                        First, go to the Naver website and look for the sign-up
                        option.
                      </p>
                      <p className="text-gray-700">
                        Next, fill in your details carefully. This includes
                        choosing a username and creating a password. Be careful
                        to use real information because you'll need to verify
                        your account later.
                      </p>
                      <p className="text-gray-700">
                        The next step is phone verification. You'll get a text
                        message with a code, which you need to enter on the
                        site.
                      </p>
                      <p className="text-gray-700">
                        If you're not familiar with the Korean language, you can
                        use translation tools or find guides to help you through
                        the process.
                      </p>
                      <p className="text-gray-700">
                        Once your account is verified, you can start using
                        various features like news feeds, blogs, and other
                        content that's tailored to your interests within the
                        Naver ecosystem.
                      </p>
                    </div>
                  </div>

                  {/* Best Place to Buy Old Naver Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Best Place to Buy Old Naver Accounts from PvaSupply
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When looking for old Naver accounts, PvaSupply is a good
                        option. They provide verified and aged accounts that can
                        help improve your online presence.
                      </p>
                      <p className="text-gray-700">
                        PvaSupply offers a range of choices that fit different
                        needs. They have accounts with different histories,
                        making it easier to find the one you're looking for.
                      </p>
                      <p className="text-gray-700">
                        What makes them stand out is their focus on customer
                        satisfaction. Their support team is helpful and knows a
                        lot, so they can assist you with the buying process.
                      </p>
                      <p className="text-gray-700">
                        All the accounts they sell come with promises that
                        ensure they're high quality and work properly. This
                        means you're getting accounts that are more likely to be
                        successful in reaching your audience on Naver.
                      </p>
                      <p className="text-gray-700">
                        With PvaSupply, you not only get an account, but also
                        access to useful tools that can help you make the most
                        of it over time.
                      </p>
                    </div>
                  </div>

                  {/* Best Place to Buy PVA Naver Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Best Place To Buy PVA Naver Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Finding a reliable place to buy PVA Naver accounts can
                        make a big difference in your online plan. PVASupply is
                        a top choice, known for its dependable service and
                        quality accounts.
                      </p>
                      <p className="text-gray-700">
                        When you buy from PVASupply, you get accounts that are
                        already verified. This means they are ready to use
                        without any issues.
                      </p>
                      <p className="text-gray-700">
                        They offer different types of accounts to suit various
                        needs—whether you need a few or a large number. Their
                        customer support is always available to answer your
                        questions.
                      </p>
                      <p className="text-gray-700">
                        Security and privacy are important to them, so you can
                        feel safe when making your purchase. Positive feedback
                        from many users shows why this platform is a favorite
                        for Naver account needs.
                      </p>
                    </div>
                  </div>

                  {/* How Naver Works for Business Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How Does Naver Work for Your Business?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Naver is the leading search engine in South Korea, often
                        called the "Google of Korea." It offers great
                        opportunities for businesses to connect with a large
                        audience.
                      </p>
                      <p className="text-gray-700">
                        Using Naver's platform can greatly increase your brand's
                        visibility. The search engine includes services like
                        blogs, shopping, and news, allowing you to use different
                        marketing strategies.
                      </p>
                      <p className="text-gray-700">
                        By using targeted ads and well-optimized content on
                        Naver's blog and Cafè features, companies can interact
                        directly with users. This helps create a community
                        around your brand.
                      </p>
                      <p className="text-gray-700">
                        Also, using Naver's SEO techniques can improve your
                        organic reach. Understanding local trends and keywords
                        that South Korean users search for allows you to better
                        tailor your products and services.
                      </p>
                      <p className="text-gray-700">
                        Naver also gives you tools to track user engagement. You
                        can use real-time data to adjust your strategies and
                        target potential customers more effectively.
                      </p>
                    </div>
                  </div>

                  {/* How to Buy Naver Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How Do I Buy Naver Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Buying Naver accounts is simple if you know where to
                        find them. Start by looking for trusted sellers online
                        who sell Korean social media accounts.
                      </p>
                      <p className="text-gray-700">
                        Search for platforms that offer PVA (Phone Verified
                        Accounts). These accounts are usually safer and less
                        likely to be blocked. Read reviews and comments from
                        past customers to see if the seller is reliable.
                      </p>
                      <p className="text-gray-700">
                        Once you find a good platform, look through their
                        available accounts. You'll often see different options
                        based on age, verification status, and price. Pick an
                        account that fits what you need.
                      </p>
                      <p className="text-gray-700">
                        After you decide, follow the steps the seller gives you
                        to complete the purchase. This usually means creating an
                        account on their website and paying through secure
                        methods.
                      </p>
                      <p className="text-gray-700">
                        Make sure you have any recovery details or support from
                        the seller after you buy. This helps keep your account
                        safe.
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
                        When building your online presence, especially in the
                        Korean market, buying Naver accounts can be helpful for
                        both businesses and individuals. With the right
                        accounts, you can use many tools that help you get more
                        attention and connect with people.
                      </p>
                      <p className="text-gray-700">
                        Knowing how to get these accounts is important. PVA
                        accounts are especially useful because they help build
                        trust and make it easier to use Naver's features.
                      </p>
                      <p className="text-gray-700">
                        If you're looking to buy used or verified Naver
                        accounts, websites like pvasupply are good choices. They
                        offer quality services and help protect your investment.
                      </p>
                      <p className="text-gray-700">
                        Naver works a bit differently than other search engines
                        and social media sites. Learning how it works can help
                        you plan better and get better results.
                      </p>
                      <p className="text-gray-700">
                        Buying Naver accounts is not hard if you know where to
                        look and what kind of account you need. This guide can
                        help you get started with using this strong platform.
                      </p>
                      <p className="text-gray-700">
                        Taking action now can help you grow and succeed in one
                        of Asia's fastest-growing digital markets.
                      </p>
                    </div>
                  </div>
                </div>

                <RelatedProducts
                  currentProduct="Buy Naver Accounts"
                  category="Social Accounts"
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
