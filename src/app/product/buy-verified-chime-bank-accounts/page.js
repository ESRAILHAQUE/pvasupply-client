"use client";

export const dynamic = "force-dynamic";

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

export default function BuyVerifiedChimeBankAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Chime Bank Accounts Available",
    "2019-2024 Years Chime Bank Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Chime Bank Accounts Available",
    "2019-2023 Years Chime Bank Accounts are Available",
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
    "Your relationship with Chime Bank",
    "Using Chime Bank services",
    "Content in Chime Bank services",
    "Software in Chime Bank services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Chime Bank handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified Chime Bank Accounts.png"
                alt="Buy Verified Chime Bank Accounts"
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
                  Buy Verified Chime Bank Accounts
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
                Buy Verified Chime Bank Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$100.00 - $220.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Chime Bank accounts? Do you need USA and European countries
                  real phone number verified old Chime Bank accounts? Or do you
                  want to buy old PVA Chime Bank accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged Chime
                  Bank accounts are indispensable for your business or personal
                  use. We provide instant delivery at PVA Supply.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Chime Bank Accounts
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
                  Buy Verified Chime Bank Accounts
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
                        <option value="basic">Basic Package - $100.00</option>
                        <option value="premium">
                          Premium Package - $160.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $220.00
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
                  Buy Verified Chime Bank Account
                </h2>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Introduction to Verified Chime Bank Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        In today's fast-paced world, it's important to manage
                        money without stress. Chime Bank is a modern banking
                        option that helps people handle their finances easily.
                        It has no hidden fees and offers great features, making
                        it a popular choice for many. But there's another
                        option—buying verified Chime bank accounts. These
                        accounts can give you more benefits and help you have
                        better control over your money. Let's see why these
                        accounts are in demand and how they can help you.
                      </p>
                    </div>
                  </div>

                  {/* Description Image */}
                  <div className="flex justify-center my-8">
                    <Image
                      src="/images/long-description-photo/Buy Verified Chime Bank Accounts.png"
                      alt="Chime Bank Accounts Description"
                      width={500}
                      height={350}
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Benefits of Using Verified Chime Bank Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified Chime Bank Accounts offer several advantages
                        that fit the needs of today's users. One major benefit
                        is the added security. With a verified account, your
                        money is more protected from fraud.
                      </p>
                      <p className="text-gray-700">
                        Another benefit is the convenience. Chime has a simple
                        mobile app that makes it easy to check your balance or
                        make payments anytime, anywhere.
                      </p>
                      <p className="text-gray-700">
                        These accounts also often come with no monthly fees and
                        good interest rates on savings. That means you can save
                        money without worrying about extra charges.
                      </p>
                      <p className="text-gray-700">
                        Customers can also use their accounts smoothly with
                        other payment services. The app is easy to use, so even
                        if you're new to online banking, you can manage your
                        money with ease.
                      </p>
                    </div>
                  </div>

                  {/* Steps To Verify Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Steps To Verify A Chime Account
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verifying your Chime account is simple and helps keep
                        your money safe. Start by downloading the Chime app from
                        your device's app store.
                      </p>
                      <p className="text-gray-700">
                        Once you have the app, create an account using your
                        email and phone number. You'll then get a verification
                        code, which you need to enter to finish setting up.
                      </p>
                      <p className="text-gray-700">
                        Next, link a bank account or debit card to your Chime
                        account. This involves providing details like the
                        routing number.
                      </p>
                      <p className="text-gray-700">
                        Chime might also ask for more documents like a driver's
                        license or your Social Security number. This is to make
                        sure everything is in line with banking rules.
                      </p>
                      <p className="text-gray-700">
                        You should also turn on notifications in the app so you
                        can keep track of your account status and any activity.
                        A verified account not only helps keep your money safe
                        but also gives you more options for managing your
                        finances effectively.
                      </p>
                    </div>
                  </div>

                  {/* Two-Factor Authentication Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Two-Factor Authentication
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Two-factor authentication (2FA) is another way to keep
                        your Chime account secure. It means you need more than
                        just a password to log in.
                      </p>
                      <p className="text-gray-700">
                        When you try to sign in, you'll have to enter your
                        password and then a code you receive via text or email.
                        You need to enter that code right away to log in.
                      </p>
                      <p className="text-gray-700">
                        This makes it harder for someone to access your account,
                        even if they know your password.
                      </p>
                      <p className="text-gray-700">
                        Setting up 2FA is easy and can be done in the app
                        settings. Once it's on, you'll use it every time you log
                        in.
                      </p>
                      <p className="text-gray-700">
                        With more cyber threats these days, enabling 2FA is a
                        small step that can make a big difference in keeping
                        your account safe.
                      </p>
                    </div>
                  </div>

                  {/* How to Buy Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How to Buy Verified Chime Bank Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Buying a verified Chime Bank account can be simple if
                        you follow the right steps. Start by checking online for
                        trustworthy vendors. Look for reviews to make sure
                        they're reliable.
                      </p>
                      <p className="text-gray-700">
                        Make sure the vendor offers real verified accounts and
                        not fake or unverified ones.
                      </p>
                      <p className="text-gray-700">
                        Once you've picked a vendor, ask about the papers that
                        come with the account. They should include real ID
                        details that match the account holder.
                      </p>
                      <p className="text-gray-700">
                        Choose a secure payment method when you make the
                        purchase to protect your money. After buying, log into
                        your new account right away and change any default
                        passwords.
                      </p>
                      <p className="text-gray-700">
                        Always take care when buying these accounts. A little
                        caution can help keep your money safe while you go
                        through this process.
                      </p>
                    </div>
                  </div>

                  {/* Safety Tips Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Tips for Using Verified Chime Bank Accounts Safely
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Using a verified Chime Bank account is great, but you
                        should always be careful.
                      </p>
                      <p className="text-gray-700">
                        Start by turning on two-factor authentication. It adds
                        an extra layer of protection.
                      </p>
                      <p className="text-gray-700">
                        Check your account regularly for any strange or
                        unfamiliar transactions. If you see something wrong,
                        report it to Chime right away.
                      </p>
                      <p className="text-gray-700">
                        Don't share your personal details online. Avoid opening
                        links from unknown sources or giving away sensitive
                        information through messages.
                      </p>
                      <p className="text-gray-700">
                        Create strong passwords and change them often. Use a mix
                        of letters, numbers, and special symbols to keep your
                        account safe.
                      </p>
                      <p className="text-gray-700">
                        Be on the lookout for phishing scams that try to get
                        your banking details. Staying informed helps you protect
                        your money.
                      </p>
                      <p className="text-gray-700">
                        Only access your account on secure networks. Avoid using
                        public Wi-Fi when banking, and instead use a private
                        connection whenever possible.
                      </p>
                    </div>
                  </div>

                  {/* Future of Banking Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      The Future of Banking with Chime
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        The future of banking with a Chime bank account looks
                        really good and full of new ideas. As new technology
                        keeps coming out, the way we handle money is changing a
                        lot.
                      </p>
                      <p className="text-gray-700">
                        Chime is leading the way in this change, providing
                        services that work well for people who like using
                        technology. Their app makes it easy to keep track of
                        your spending and saving all in one place.
                      </p>
                      <p className="text-gray-700">
                        Features like automatic saving tools and no extra fees
                        for transactions help customers get a better, more
                        tailored banking experience. Using artificial
                        intelligence might make these features even better in
                        the future.
                      </p>
                      <p className="text-gray-700">
                        As more people use cashless payments, keeping your money
                        safe will be really important for people to trust Chime.
                        We can expect things like fingerprint or face
                        recognition to become more common, along with better
                        systems to catch and stop fraud.
                      </p>
                      <p className="text-gray-700">
                        Also, working with other financial tech companies could
                        lead to new products that are made just for what people
                        need. This flexibility helps Chime stay relevant and
                        important in the ever-changing financial world.
                      </p>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Frequently Asked Questions
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          What is a verified Chime bank account?
                        </h4>
                        <p className="text-gray-700">
                          A verified Chime bank account is one that has gone
                          through the required checks to confirm your identity
                          and make sure your money is safe. This allows you to
                          use all the banking features without any problems.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          How do I know if my Chime account is verified?
                        </h4>
                        <p className="text-gray-700">
                          You can check your verification status through the
                          Chime app or by logging into your online banking. Look
                          for messages or alerts that tell you about your
                          account's status.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Can I buy a verified Chime bank account safely?
                        </h4>
                        <p className="text-gray-700">
                          Yes, but it's important to do your research on where
                          you're buying from. Choose trusted sellers with good
                          reviews to avoid being scammed.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Are there fees for buying a verified Chime bank
                          account?
                        </h4>
                        <p className="text-gray-700">
                          Usually, buying an already-verified account comes with
                          some cost. The amount depends on the seller and how
                          much demand there is.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          What should I do if I have problems with my purchased
                          account?
                        </h4>
                        <p className="text-gray-700">
                          Reach out to Chime's customer support through their
                          official websites or apps. They can help you fix any
                          issues quickly and keep your information secure.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Conclusion
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Getting a verified Chime bank account could be a smart
                        choice for people looking to improve their money
                        management. With easy access, strong security like
                        two-factor authentication, and the convenience of online
                        banking, it's no wonder so many people are switching to
                        Chime.
                      </p>
                      <p className="text-gray-700">
                        Verifying your account helps you have a safe and
                        reliable platform for handling your money. As with any
                        online service, it's important to stay cautious and
                        follow good security habits to protect your personal
                        info and avoid being a victim of fraud.
                      </p>
                      <p className="text-gray-700">
                        Looking forward, Chime is still making big moves in the
                        banking industry. The future seems positive as more
                        people realize the benefits of digital banking options
                        like those offered by Chime.
                      </p>
                      <p className="text-gray-700">
                        As you think about getting a verified Chime bank account
                        or using its services, remember that staying informed
                        and alert can help you get the most out of these
                        benefits while keeping your money safe.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified Chime Bank Accounts"
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
