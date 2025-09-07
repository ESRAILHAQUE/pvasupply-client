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

export default function BuyVerifiedVenmoAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Venmo Accounts Available",
    "2019-2024 Years Venmo Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Venmo Accounts Available",
    "2019-2023 Years Venmo Accounts are Available",
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
    "Your relationship with Venmo",
    "Using Venmo services",
    "Content in Venmo services",
    "Software in Venmo services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Venmo handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified Venmo Accounts.png"
                alt="Buy Verified Venmo Accounts"
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
                  Buy Verified Venmo Accounts
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
                Buy Verified Venmo Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$120.00 - $250.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Venmo accounts? Do you need USA and European countries real
                  phone number verified old Venmo accounts? Or do you want to
                  buy old PVA Venmo accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged Venmo
                  accounts are indispensable for your business or personal use.
                  We provide instant delivery at Pvasmmpro.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Venmo Accounts
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
                  Buy Verified Venmo Accounts
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
                        <option value="basic">Basic Package - $120.00</option>
                        <option value="premium">
                          Premium Package - $185.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $250.00
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
                  Buy Verified Venmo Accounts
                </h3>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-600 mb-4">
                      Purchasing verified Venmo accounts can provide many
                      benefits for users who want a smooth payment experience.
                      These accounts are already confirmed, which makes
                      transactions more trustworthy and easier to manage.
                    </p>
                    <p className="text-gray-600 mb-4">
                      When you choose a verified account, you avoid the usual
                      steps that new users have to go through to confirm their
                      identity. This means faster access to sending and
                      receiving money without delays or problems.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Another advantage is that verified accounts are less
                      likely to be targeted by fraud. They carry more
                      authenticity, which is important in a world where scams
                      are common.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Also, having a verified account can improve your
                      reputation among friends and businesses that use Venmo.
                      People often prefer to deal with verified accounts because
                      they're more reliable.
                    </p>
                    <p className="text-gray-600 mb-4">
                      This option is especially helpful if you're involved in
                      regular trades or services that require quick payments.
                      Buying a verified account can save time and improve your
                      online financial experiences.
                    </p>
                  </div>

                  {/* Benefits Of Buying Verified Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Benefits Of Buying Verified Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Buying verified Venmo accounts brings several advantages
                        that improve your digital transactions. These accounts
                        are often already set up with a good payment history and
                        good standing, which is helpful for users who need to
                        send or receive money quickly.
                      </p>
                      <p className="text-gray-600">
                        Verified accounts usually have higher transaction limits
                        than unverified ones. This means you can make larger
                        payments without having to wait for approval.
                      </p>
                      <p className="text-gray-600">
                        Another key benefit is better security. Verified
                        accounts are less likely to be affected by fraud, giving
                        you confidence when making payments.
                      </p>
                      <p className="text-gray-600">
                        Additionally, having a verified account gives you access
                        to more services and features within the Venmo app that
                        you wouldn't get otherwise. Users enjoy a better
                        experience when using Venmo for peer-to-peer payments.
                      </p>
                    </div>
                  </div>

                  {/* Where To Buy Verified Venmo Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Where To Buy Verified Venmo Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Finding a trustworthy place to buy verified Venmo
                        accounts can be hard. It's important to do your research
                        before making any purchase.
                      </p>
                      <p className="text-gray-600">
                        There are many online marketplaces and forums where
                        people sell these accounts, but not all are reliable.
                        Look for sites with good reviews and a strong reputation
                        in the community.
                      </p>
                      <p className="text-gray-600">
                        Social media platforms often have groups or pages where
                        people buy and sell digital items, like Venmo accounts.
                        Talking to users there can help you find where others
                        have made successful purchases.
                      </p>
                      <p className="text-gray-600">
                        Be careful of offers that seem too good to be true.
                        Often, they are. Always check the seller's credibility
                        by looking at their feedback and ratings from other
                        buyers. This helps you find real options and avoid risky
                        situations.
                      </p>
                    </div>
                  </div>

                  {/* Description Image */}
                  <div className="flex justify-center my-8">
                    <Image
                      src="/images/long-description-photo/Buy Verified Venmo Accounts.png"
                      alt="Venmo Accounts Description"
                      width={500}
                      height={350}
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  {/* What is Venmo and Why Is It Popular Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      What is Venmo and Why Is It Popular?
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Venmo is a way to send and receive money using your
                        phone. It's easy to use and great for splitting bills or
                        sharing expenses with friends or family.
                      </p>
                      <p className="text-gray-600">
                        Venmo started in 2009 and became very popular with
                        younger generations like millennials and Gen Z. Its
                        simple design makes it easy for anyone to use. The
                        social part of the app adds to its appeal, letting you
                        see your friends' transactions with fun messages and
                        emojis.
                      </p>
                      <p className="text-gray-600">
                        The instant transfer feature makes it even more
                        convenient, letting you get your money quickly. This
                        fits well with the fast pace of modern life.
                      </p>
                      <p className="text-gray-600">
                        Venmo also works well with other apps like shopping and
                        food delivery services. This makes it a flexible tool
                        for handling different financial needs without much
                        trouble.
                      </p>
                    </div>
                  </div>

                  {/* Risks and Precautions When Buying a Verified Venmo Account Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Risks and Precautions When Buying a Verified Venmo Account
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Buying a verified Venmo account might seem useful, but
                        it comes with several risks. First, you might fall for a
                        scam. Not all sellers are honest, and some might give
                        fake accounts or take your money without delivering.
                      </p>
                      <p className="text-gray-600">
                        There's also the danger of identity theft. If you buy
                        from an untrustworthy seller, they could get access to
                        your personal information, which could be used to harm
                        you.
                      </p>
                      <p className="text-gray-600">
                        Venmo has strict rules against using unauthorized
                        accounts. If they find out you're using a bought
                        account, they might ban your account or take your money.
                      </p>
                      <p className="text-gray-600">
                        Always do your homework before making a purchase. Check
                        sellers carefully and look for reviews from previous
                        buyers to avoid being scammed.
                      </p>
                    </div>
                  </div>

                  {/* Tips for Using a Verified Venmo Account Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Tips for Using a Verified Venmo Account
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Using a verified Venmo account can make your experience
                        better and more secure. Start by linking it to a bank
                        account so you can send and receive larger amounts
                        easily.
                      </p>
                      <p className="text-gray-600">
                        Keep an eye on your transactions regularly. This helps
                        you notice any strange activity quickly, which is
                        important for keeping your account safe.
                      </p>
                      <p className="text-gray-600">
                        When sending money, always check the recipient's details
                        again. Mistakes can happen, especially with similar
                        usernames.
                      </p>
                      <p className="text-gray-600">
                        Use privacy settings wisely. You can choose who sees
                        your transactions, so you can keep your information safe
                        from others.
                      </p>
                      <p className="text-gray-600">
                        Enable two-factor authentication for extra security.
                        This makes it harder for someone else to access your
                        account without your permission.
                      </p>
                    </div>
                  </div>

                  {/* Frequently Asked Questions Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Frequently Asked Questions
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-2">
                          What Is a Verified Venmo Account?
                        </h5>
                        <p className="text-gray-600">
                          A verified Venmo account is one where the user has
                          completed the necessary steps to prove their identity.
                          This adds more security and trust to your
                          transactions.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-2">
                          Is It Legal to Buy a Verified Venmo Account?
                        </h5>
                        <p className="text-gray-600">
                          Buying accounts isn't illegal, but it goes against
                          Venmo's terms of service. Doing this could result in
                          your account being blocked or you losing your money.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-2">
                          How Do I Know If a Seller Is Trustworthy?
                        </h5>
                        <p className="text-gray-600">
                          Check the seller carefully before buying. Look for
                          reviews and see if they have a good reputation among
                          users.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-2">
                          Can I Transfer Money from My Verified Account to My
                          Bank?
                        </h5>
                        <p className="text-gray-600">
                          Yes, once you've purchased and set up your verified
                          account, transferring money to your bank is just like
                          using a regular Venmo account.
                        </p>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-gray-900 mb-2">
                          What Are Common Uses for Buying These Accounts?
                        </h5>
                        <p className="text-gray-600">
                          Verified accounts are often used by businesses to
                          process payments without the usual restrictions that
                          come with unverified accounts.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Conclusion
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Buying verified Venmo accounts can be a convenient way
                        to make payments easier. These accounts offer benefits
                        like better security, higher transaction limits, and
                        more credibility with others.
                      </p>
                      <p className="text-gray-600">
                        However, you need to be cautious when buying. Always
                        check if the seller is reliable and take steps to
                        protect your personal information. Understanding what
                        Venmo is and why it's popular helps you use it better.
                      </p>
                      <p className="text-gray-600">
                        With the right tips, using a verified account can make
                        your payments easier and give you more confidence in
                        your security. Whether you're looking to buy or use an
                        existing account, knowing the risks and best practices
                        helps make your digital transactions safer.
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
