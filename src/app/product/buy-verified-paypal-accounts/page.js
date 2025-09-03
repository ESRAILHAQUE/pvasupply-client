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

export default function BuyVerifiedPaypalAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username PayPal Accounts Available",
    "2019-2024 Years PayPal Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username PayPal Accounts Available",
    "2019-2023 Years PayPal Accounts are Available",
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
    "Your relationship with PayPal",
    "Using PayPal services",
    "Content in PayPal services",
    "Software in PayPal services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How PayPal handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Verified PayPal Accounts.png"
                alt="Buy Verified PayPal Accounts"
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
                  Buy Verified PayPal Accounts
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
                Buy Verified PayPal Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$60.00 - $900.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  PayPal accounts? Do you need USA and European countries real
                  phone number verified old PayPal accounts? Or do you want to
                  buy old PVA PayPal accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged PayPal
                  accounts are indispensable for your business or personal use.
                  We provide instant delivery at Pvasmmpro.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged PayPal Accounts
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
                  Buy Verified PayPal Accounts
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
                        <option value="basic">Basic Package - $60.00</option>
                        <option value="premium">
                          Premium Package - $350.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $900.00
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
                  Buy Verified PayPal Accounts
                </h2>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-700 mb-4">
                      In today's fast-paced digital world, online transactions
                      are a big part of our lives. Whether you're running a
                      business or doing freelance work, having a reliable
                      payment platform is important. PayPal is a trusted name
                      that makes online transactions secure and easy. But what
                      if you want to boost your financial setup? You might want
                      to consider buying verified PayPal accounts.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Verified accounts do more than just make things
                      easier—they also build trust with customers and clients.
                      As we look deeper into verified PayPal accounts, you'll
                      see how they can really help your online presence and make
                      transactions smoother. Ready to find out why investing in
                      these accounts could be a smart move? Let's get started!
                    </p>
                  </div>

                  {/* What is PayPal Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      What is PayPal?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        PayPal is a digital payment platform that changed how we
                        pay online. Started in 1998, it makes it easy for people
                        and businesses to send and receive money electronically.
                      </p>
                      <p className="text-gray-700">
                        With PayPal, you can link your bank account, credit
                        card, or debit card to make payments quickly without
                        sharing sensitive financial details. This makes it a
                        popular choice for both shoppers and sellers.
                      </p>
                      <p className="text-gray-700">
                        PayPal supports multiple currencies, making
                        international transactions easy. Whether you're buying
                        something from another country or sending money to a
                        client abroad, PayPal makes the process straightforward.
                      </p>
                      <p className="text-gray-700">
                        Its simple design makes it easy for even those who
                        aren't familiar with online banking to use. From
                        shopping to freelancing and online selling, PayPal
                        covers a lot of needs while keeping things safe and
                        convenient.
                      </p>
                    </div>
                  </div>

                  {/* Why We Recommend Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Why We Recommend Buying Verified PayPal Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Buying verified PayPal accounts can make your online
                        transactions more efficient. These accounts come with
                        more trust, making them great for personal and business
                        use.
                      </p>
                      <p className="text-gray-700">
                        When you choose to buy verified accounts, you skip the
                        long verification process yourself. That saves time and
                        lets you focus on growing your business or managing your
                        money.
                      </p>
                      <p className="text-gray-700">
                        Verified accounts also allow for higher transaction
                        limits. With these higher limits, businesses can handle
                        bigger payments without hitting the usual restrictions
                        that come with unverified accounts.
                      </p>
                      <p className="text-gray-700">
                        Additionally, having a verified account can improve your
                        credibility with customers and clients. It shows you're
                        reliable and professional, which is key in today's
                        competitive market.
                      </p>
                      <p className="text-gray-700">
                        Choosing a verified account isn't just about better
                        features—it's also about peace of mind as you navigate
                        online transactions.
                      </p>
                    </div>
                  </div>

                  {/* Business and Freelancers Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Buy Verified PayPal Accounts for Business and Freelancers
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        For businesses and freelancers, a verified PayPal
                        account is essential. It makes transactions smoother and
                        builds trust with clients. When you buy verified PayPal
                        accounts, you open up many opportunities.
                      </p>
                      <p className="text-gray-700">
                        Freelancers can get paid quickly without worrying about
                        delays or disputes. This helps manage cash flow better
                        for your projects and services.
                      </p>
                      <p className="text-gray-700">
                        Businesses benefit by being able to reach a larger
                        customer base. Verified accounts often come with higher
                        transaction limits, making it easier to handle bigger
                        orders.
                      </p>
                      <p className="text-gray-700">
                        Also, it opens the door to international markets. With
                        PayPal's global reach, sellers can easily accept
                        payments from many different places without trouble.
                      </p>
                      <p className="text-gray-700">
                        Investing in verified accounts means you spend less time
                        worrying about payment problems. That gives you more
                        time to focus on growing your business and being
                        creative. It's a smart choice that helps you look
                        professional and ensures your financial transactions are
                        secure.
                      </p>
                    </div>
                  </div>

                  {/* Introduction to Verification Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Introduction to PayPal Verification
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        PayPal verification is an important step if you want to
                        use all the features of the platform. This process
                        confirms your identity and adds a layer of security to
                        your transactions.
                      </p>
                      <p className="text-gray-700">
                        When you verify your account, PayPal can better stop
                        fraud, protecting both buyers and sellers. It also
                        builds trust in online deals, which is important in
                        today's digital world.
                      </p>
                      <p className="text-gray-700">
                        Verification usually involves adding some personal
                        details and linking a bank account or credit card. Once
                        verified, users get access to higher transaction limits
                        and more features.
                      </p>
                      <p className="text-gray-700">
                        For businesses and freelancers, having a verified
                        account means smoother operations. It's not just about
                        following rules—it's about building trust with customers
                        who prefer secure payment methods.
                      </p>
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Benefits of Verified PayPal Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified PayPal accounts offer a level of security that
                        unverified accounts can't match. Users can feel
                        confident when making transactions, knowing their
                        financial details are protected.
                      </p>
                      <p className="text-gray-700">
                        These accounts often come with higher limits for sending
                        and receiving money, making them perfect for businesses
                        and freelancers who deal with larger amounts.
                      </p>
                      <p className="text-gray-700">
                        Another advantage is that having a verified account can
                        make the buying process faster. Customers are more
                        likely to complete a purchase when they see that the
                        account has been verified by PayPal.
                      </p>
                      <p className="text-gray-700">
                        Verified accounts also give access to buyer protection
                        programs. This means if something goes wrong with a
                        transaction, buyers may be able to get their money back.
                      </p>
                      <p className="text-gray-700">
                        Verified accounts also improve credibility. Whether
                        you're selling products or services online, potential
                        clients will feel more secure when they see your
                        verified status.
                      </p>
                    </div>
                  </div>

                  {/* Trading Advantages Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      What Are the Trading Advantages of Using PayPal?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Using PayPal for trading gives a smooth experience that
                        other payment methods often don't. Its easy-to-use
                        interface lets both buyers and sellers handle
                        transactions without hassle.
                      </p>
                      <p className="text-gray-700">
                        One big advantage is speed. Transactions happen almost
                        instantly, allowing quicker access to funds. This is
                        especially useful in fast-moving trading environments
                        where timing is crucial.
                      </p>
                      <p className="text-gray-700">
                        PayPal also offers strong security, including fraud
                        protection and tools to resolve disputes between buyers
                        and sellers. This gives users confidence that their
                        financial information is safe.
                      </p>
                      <p className="text-gray-700">
                        Another benefit is PayPal's global reach, which makes it
                        easy to trade with people in different countries without
                        complicated currency exchanges. This helps traders reach
                        more customers without extra effort.
                      </p>
                      <p className="text-gray-700">
                        Businesses can also use PayPal's built-in invoicing
                        tools and reporting features, making it easier to manage
                        money while focusing on growth and planning.
                      </p>
                      <p className="text-gray-700">
                        Verified PayPal accounts help make buyers feel more
                        confident when shopping online. Buyers are more likely
                        to trust sellers who have gone through the verification
                        process because it shows they are real and reliable.
                      </p>
                      <p className="text-gray-700">
                        When people use verified accounts to pay, they feel
                        safer because their money and personal info are
                        protected. This is especially important when they are
                        buying from someone they don't know.
                      </p>
                      <p className="text-gray-700">
                        Having a verified account also helps with solving
                        problems quickly and getting better support from PayPal.
                        These things make buyers feel more secure and satisfied
                        with their purchases.
                      </p>
                      <p className="text-gray-700">
                        Many online platforms require sellers to be verified to
                        show up higher in search results. This makes them more
                        trusted not just by customers, but also by other
                        businesses. A verified badge helps sellers stand out
                        from those who aren't verified, which can lead to more
                        sales and stronger connections with potential buyers.
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
                        Verifying a PayPal account is an important step to build
                        trust and protect your money. To start, you need to give
                        personal details like your name, address, and phone
                        number. This helps PayPal confirm who you are.
                      </p>
                      <p className="text-gray-700">
                        Next, you'll need to link a bank account or credit card.
                        This not only improves security but also allows you to
                        make payments smoothly. PayPal will send a small amount
                        of money to your account to check if it's real.
                      </p>
                      <p className="text-gray-700">
                        After linking your financial information, you must
                        upload government-issued ID like a driver's license or
                        passport. This helps confirm your identity.
                      </p>
                      <p className="text-gray-700">
                        Once all the documents are ready, PayPal will review
                        them. This can take a few days.
                      </p>
                      <p className="text-gray-700">
                        If the verification is successful, you get higher
                        spending limits and access to extra features that make
                        using PayPal easier on different platforms.
                      </p>
                    </div>
                  </div>

                  {/* Required Documents Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Required Documents
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When you buy a verified PayPal account, you need to
                        provide certain documents to complete the verification.
                        You must show proof of your identity, which is usually a
                        government-issued ID like a passport or driver's
                        license.
                      </p>
                      <p className="text-gray-700">
                        You also need to prove your address. This can be done
                        with a utility bill or bank statement from the last
                        three months.
                      </p>
                      <p className="text-gray-700">
                        In some cases, you may need extra documents, like tax
                        forms or business registration papers, especially if
                        you're using the account for business purposes.
                      </p>
                      <p className="text-gray-700">
                        Make sure all your documents are clear and easy to read.
                        The information on them should match exactly what you
                        provided when creating your PayPal account. Having
                        everything ready helps speed up the verification process
                        when buying a verified PayPal account.
                      </p>
                    </div>
                  </div>

                  {/* Step-by-step Guide Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Step-by-step Guide
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Getting a verified PayPal account may seem complicated,
                        but it's simple if you follow these steps carefully.
                      </p>
                      <p className="text-gray-700">
                        Start by visiting the official PayPal website and
                        clicking on "Sign Up." Choose between a personal or
                        business account based on your needs. Fill in your name,
                        email address, and password as requested.
                      </p>
                      <p className="text-gray-700">
                        Once your account is created, log in and go to the
                        settings section. There, you'll find an option for
                        account verification. Follow the steps to connect your
                        bank account or credit card.
                      </p>
                      <p className="text-gray-700">
                        After linking your payment methods, provide your address
                        and phone number to finish the identity verification.
                      </p>
                      <p className="text-gray-700">
                        Check if you need to upload any additional documents.
                        Completing these steps will give you a verified PayPal
                        account ready to use for transactions.
                      </p>
                    </div>
                  </div>

                  {/* E-commerce Benefits Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How can e-commerce businesses benefit from PayPal?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        E-commerce businesses rely on easy and secure payment
                        options to run smoothly. PayPal is a popular choice for
                        online transactions because it's trusted and easy to
                        use. It makes it simple for customers to pay, which
                        improves their shopping experience.
                      </p>
                      <p className="text-gray-700">
                        PayPal processes payments quickly, allowing businesses
                        to get their money sooner. This helps improve cash flow
                        and supports faster growth.
                      </p>
                      <p className="text-gray-700">
                        PayPal also has strong fraud protection tools that keep
                        both buyers and sellers safe. This security helps build
                        trust and encourages more people to complete their
                        purchases.
                      </p>
                      <p className="text-gray-700">
                        Integrating PayPal into an e-commerce site is easy. Many
                        popular platforms support it, so store owners can focus
                        on selling products without worrying about payment
                        systems.
                      </p>
                      <p className="text-gray-700">
                        Offering multiple payment options, like PayPal, can
                        increase the number of customers who complete their
                        purchases. This is because some people prefer using
                        PayPal when making online payments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified PayPal Accounts"
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
