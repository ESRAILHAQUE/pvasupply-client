"use client";

import React, { useState } from "react";
import Image from "next/image";
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
import { useCart } from "../../../contexts/CartContext";
import PriceDisplay from "../../../components/shared/PriceDisplay";
import ContactInfo from "../../../components/shared/ContactInfo";

export default function BuyVerifiedSkrillAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  const features = [
    "Guaranteed satisfaction & recovery",
    "Email and phone access",
    "Fully KYC verified",
    "Personal & business accounts available",
    "Phone verified",
    "Real Gmail accounts used",
    "Bank & card verified",
    "Complete verification documents provided",
  ];

  const productFeatures = [
    "Guaranteed satisfaction & recovery",
    "Email and phone access",
    "Fully KYC verified",
    "Personal & business accounts available",
    "Phone verified",
    "Real Gmail accounts used",
    "Bank & card verified",
    "Complete verification documents provided",
  ];

  const contactInfo = [
    { icon: "Email", text: "pvasupply0@gmail.com" },
    { icon: "Telegram", text: "@pvasupply" },
    { icon: "WhatsApp", text: "+1 (979) 633-0236" },
  ];

  const sidebarItems = [
    "Introduction",
    "Your relationship with Skrill",
    "Using Skrill services",
    "Content in Skrill services",
    "Software in Skrill services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Skrill handles government requests for user information",
  ];

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("Please select an option first");
      return;
    }

    const optionPrices = {
      basic: 90,
      premium: 300,
      enterprise: 800,
    };

    const product = {
      id: "skrill-accounts",
      name: "Buy Verified Skrill Accounts",
      option: selectedOption,
      price: optionPrices[selectedOption],
      quantity: quantity,
      category: "Bank Accounts",
    };

    addToCart(product);
    alert("Added to cart successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left Section - Promotional Banner */}
          <div className="relative h-[600px]">
            <div className="bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400 rounded-xl p-6 h-full relative overflow-hidden shadow-lg">
              {/* Sale Badge */}
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                Sale!
              </div>

              {/* Order Now Badge */}
              <div className="absolute top-3 right-3 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <Search className="w-3 h-3" />
                ORDER NOW
              </div>

              {/* Main Title */}
              <div className="mt-12 mb-4">
                <h1 className="text-3xl font-bold leading-tight">
                  <span className="text-green-600">BUY VERIFIED</span>
                  <br />
                  <span className="text-black">SKRILL ACCOUNTS</span>
                </h1>
              </div>

              {/* Skrill Graphic */}
              <div className="relative mb-6">
                <div className="w-24 h-20 bg-white rounded-lg shadow-md relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-blue-500 text-3xl font-bold">S</div>
                  </div>
                </div>

                {/* 15% OFF Badge */}
                <div className="absolute -top-1 -right-1 w-12 h-12 bg-green-500 border-3 border-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">15% OFF</span>
                </div>
              </div>

              {/* Service Features */}
              <div className="space-y-3 mb-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-800 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contact Section */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white font-bold mb-3">Contact Us</h3>
                  <div className="space-y-2">
                    {contactInfo.map((info, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-white text-sm">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>{info.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <span>Home</span>
              <span>/</span>
              <span>Products</span>
              <span>/</span>
              <span className="text-gray-900">Skrill Accounts</span>
            </div>

            {/* Category Link */}
            <div className="mb-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Bank Accounts
              </a>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Buy Verified Skrill Accounts
            </h1>

            {/* Price Range */}
            <PriceDisplay price="$90.00 - $800.00" className="mb-4" />

            {/* Product Description */}
            <p className="text-gray-600 mb-6">
              Skrill is one of the leading international payment systems,
              trusted by millions for seamless and secure transactions
              worldwide. At pvasupply.com, we provide 100% fully verified Skrill
              accounts for both personal and business use in various countries,
              including the USA, UK, Canada, and more.
            </p>
            <p className="text-gray-600 mb-6">
              Our verified Skrill accounts are designed for users who value
              convenience and smooth transactions. Whether you need an account
              for personal or business purposes, our accounts are ready for
              immediate use.
            </p>

            {/* Features List */}
            <div className="space-y-2 mb-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Features of Verified Skrill Accounts:
              </h3>
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <ContactInfo className="mb-6" />

            {/* Purchase Section */}
            <div className="space-y-4">
              {/* Option Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Option
                </label>
                <div className="relative">
                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option value="">Choose an option</option>
                    <option value="basic">Basic Package - $90.00</option>
                    <option value="premium">Premium Package - $300.00</option>
                    <option value="enterprise">
                      Enterprise Package - $800.00
                    </option>
                  </select>
                  
                </div>
              </div>

              {/* Quantity Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800">
                    -
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="flex-1 text-center border-0 focus:ring-0 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-gray-600 hover:text-gray-800">
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2 text-sm">
                <ShoppingCart className="w-4 h-4" />
                Add to cart
              </button>
            </div>

            {/* Product Info */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">SKU:</span>
                  <span className="ml-2 text-gray-900">SKRILL-001</span>
                </div>
                <div>
                  <span className="text-gray-500">Category:</span>
                  <span className="ml-2 text-gray-900">Bank Accounts</span>
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
                  Buy verified Skrill accounts
                </h3>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-600 mb-4">
                      Are you looking to buy verified Skrill accounts? You're in
                      the right place. In today's digital world, having a
                      reliable payment platform is important for freelancers and
                      businesses. Skrill is a popular choice because it's easy
                      to use and accepted by many online services. However, not
                      all accounts are the same. Verified accounts offer better
                      security and access to special features that make your
                      money transfers easier and more reliable.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Why settle for less when you can take full advantage of
                      all the benefits with a verified account? Whether you're
                      getting money from clients or buying things online, having
                      a verified Skrill account can help you find more
                      opportunities. Let's explore what makes these accounts
                      valuable and how you can get one easily.
                    </p>
                  </div>

                  {/* Are you looking to buy verified Skrill accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Are you looking to buy verified Skrill accounts?
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        You're in the right place.
                      </p>
                      <p className="text-gray-600">
                        Are you looking for a dependable way to manage your
                        online transactions? Buying verified Skrill accounts may
                        be the solution you need. These accounts give you
                        confidence, especially when dealing with clients or
                        vendors from other countries.
                      </p>
                      <p className="text-gray-600">
                        With a verified account, you're not just getting a
                        payment platform—you're building your financial
                        trustworthiness. This can help you make safer and more
                        efficient transactions. Many businesses prefer working
                        with verified users, so it's important for freelancers
                        and entrepreneurs.
                      </p>
                      <p className="text-gray-600">
                        Managing online payments doesn't have to be hard. When
                        you buy verified Skrill accounts, you're choosing
                        convenience and security. From faster withdrawals to
                        lower fees on transactions, these benefits make a big
                        difference in today's fast-moving marketplace.
                      </p>
                      <p className="text-gray-600">
                        If you're ready to improve your financial situation,
                        keep reading to learn more about how verification works
                        and why it's important for your success!
                      </p>
                    </div>
                  </div>

                  {/* Introduction To Verified Skrill Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Introduction To Verified Skrill Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verified Skrill accounts are important for anyone trying
                        to handle online transactions easily. These accounts
                        provide a level of security and trust that is vital in
                        the digital world.
                      </p>
                      <p className="text-gray-600">
                        When you buy verified Skrill accounts, you gain access
                        to many features that make money transfers easier and
                        more convenient.
                      </p>
                      <p className="text-gray-600">
                        The verification process confirms your identity, helping
                        to reduce the risk of fraud. It also increases your
                        credibility when working with clients or vendors online.
                      </p>
                      <p className="text-gray-600">
                        With a verified account, you can enjoy higher
                        transaction limits and faster withdrawals. This makes it
                        a great option for both individuals and businesses
                        looking to manage payments more efficiently.
                      </p>
                      <p className="text-gray-600">
                        As online payments become more common, having a
                        trustworthy platform like Skrill becomes essential.
                      </p>
                    </div>
                  </div>

                  {/* Importance Of Verification Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Importance Of Verification
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verification is important in the world of digital
                        payments. It helps confirm that users are who they say
                        they are, lowering the chances of fraud.
                      </p>
                      <p className="text-gray-600">
                        In a time when online scams are everywhere, having a
                        verified account adds protection for your money and
                        builds trust with merchants and service providers.
                      </p>
                      <p className="text-gray-600">
                        For businesses, accepting payments from verified
                        accounts means less risk of chargebacks. They can feel
                        more confident knowing their transactions come from real
                        people.
                      </p>
                      <p className="text-gray-600">
                        Verification also opens up more options for better
                        transaction limits and faster processing. Unverified
                        accounts often face restrictions that can cause
                        problems.
                      </p>
                      <p className="text-gray-600">
                        Verification improves the user experience by giving both
                        buyers and sellers more confidence in their financial
                        interactions.
                      </p>
                    </div>
                  </div>

                  {/* Benefits Of Using Verified Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Benefits Of Using Verified Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Using verified Skrill accounts brings many advantages
                        that make your online financial activities more
                        effective.
                      </p>
                      <p className="text-gray-600">
                        First, security is improved. A verified account lowers
                        the risk of fraud and unauthorized access, giving you
                        more confidence during your transactions.
                      </p>
                      <p className="text-gray-600">
                        Speed is another advantage. Verified accounts usually
                        have faster processes for deposits and withdrawals. This
                        means you can get your money quicker when you need it.
                      </p>
                      <p className="text-gray-600">
                        Many platforms prefer or require verification to run
                        smoothly. Using a verified account helps you qualify for
                        various online services without unnecessary problems.
                      </p>
                      <p className="text-gray-600">
                        Access to higher transaction limits is another key
                        benefit. With a verified Skrill account, you're not
                        limited by strict caps that can restrict your ability to
                        manage your money.
                      </p>
                      <p className="text-gray-600">
                        Having a verified status also builds trust with others,
                        especially in professional settings where reliability is
                        important.
                      </p>
                    </div>
                  </div>

                  {/* How To Verify Skrill Account Without Deposit Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      How To Verify Skrill Account Without Deposit
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verifying a Skrill account without making a deposit is
                        possible, and there are several methods to do so. One
                        simple approach is by uploading identification
                        documents.
                      </p>
                      <p className="text-gray-600">
                        Start by submitting a government-issued ID, such as a
                        passport or driver's license. This helps Skrill confirm
                        your identity and ensures they follow rules set by
                        regulators.
                      </p>
                      <p className="text-gray-600">
                        Another important document is proof of your address. You
                        can upload recent utility bills or bank statements that
                        show your name and current address.
                      </p>
                      <p className="text-gray-600">
                        Once you add these documents to your Skrill account,
                        their support team will review them for authenticity. If
                        everything is correct, you'll get a confirmation that
                        your account has been verified.
                      </p>
                      <p className="text-gray-600">
                        This way, you can access all the features of Skrill
                        without needing to make an initial deposit, which makes
                        it a great option for new users who want to start
                        quickly.
                      </p>
                    </div>
                  </div>

                  {/* Bank Statement for Skrill Verification Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Bank Statement for Skrill Verification
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        When verifying your Skrill account, a bank statement can
                        be a key document. It serves as proof of your identity
                        and address, helping to confirm the information you've
                        provided.
                      </p>
                      <p className="text-gray-600">
                        A good bank statement should clearly show your name and
                        address. Make sure the details match what you've entered
                        on your Skrill account. This helps the verification
                        process go smoothly.
                      </p>
                      <p className="text-gray-600">
                        You may be asked to provide a recent statement, usually
                        from the past three months. Take a screenshot or scan
                        the document, and make sure all the text is clear and
                        readable.
                      </p>
                      <p className="text-gray-600">
                        Skrill takes security seriously, so they require
                        thorough verification steps to protect users. Having an
                        accurate bank statement can speed up the process
                        significantly.
                      </p>
                      <p className="text-gray-600">
                        Remember that any mismatch in details can cause delays
                        or even reject your verification. Keeping all the
                        information consistent ensures you can enjoy smooth and
                        secure transactions with Skrill once your account is
                        verified.
                      </p>
                    </div>
                  </div>

                  {/* How Freelancers Can Benefit Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      How Freelancers Can Benefit When They Buy Verified Skrill
                      Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Freelancers often have trouble getting paid, especially
                        when working with people from other countries. Buying a
                        verified Skrill account can help with this problem.
                      </p>
                      <p className="text-gray-600">
                        With a verified account, freelancers can send and
                        receive money faster. They also get to take out more
                        money each time. This means they don't have to wait long
                        for their payments and there are no extra limits
                        stopping them.
                      </p>
                      <p className="text-gray-600">
                        Having a verified account also makes freelancers look
                        more trustworthy to their clients. It shows they are
                        serious about their work and can be relied upon. This
                        could help them get more clients and more jobs.
                      </p>
                      <p className="text-gray-600">
                        Using a verified Skrill account also makes it easy to
                        switch between different currencies. Freelancers can
                        handle money from all over the world without extra
                        hassle. This makes their services more attractive to
                        clients from other countries.
                      </p>
                      <p className="text-gray-600">
                        Verified Skrill accounts also have better security. They
                        help protect freelancers from fake or harmful
                        activities. It's important to feel safe when dealing
                        with money online, especially in the freelancing world.
                      </p>
                    </div>
                  </div>

                  {/* Steps To Verify Your Skrill Account Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Steps To Verify Your Skrill Account
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verifying your Skrill account is an easy process. Start
                        by logging in to your account and going to the
                        verification section.
                      </p>
                      <p className="text-gray-600">
                        You'll need to provide some forms of ID, like a
                        government-issued ID or a passport. Make sure the
                        documents are clear and easy to read.
                      </p>
                      <p className="text-gray-600">
                        Next, you'll have to show proof of your address. This
                        can be a recent utility bill or a bank statement that
                        shows your name and current address.
                      </p>
                      <p className="text-gray-600">
                        After you upload the documents, Skrill will check them.
                        The process usually takes a few hours, but it might take
                        longer during busy times.
                      </p>
                      <p className="text-gray-600">
                        Check your email for updates about your verification
                        status. If they need more information, Skrill will
                        contact you directly.
                      </p>
                      <p className="text-gray-600">
                        Once your account is verified, you can use all the
                        features Skrill has to offer, and you'll have higher
                        limits on how much you can send and receive.
                      </p>
                    </div>
                  </div>

                  {/* Customer Support For Skrill Users Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Customer Support For Skrill Users
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Skrill knows that having good customer support is
                        important for everyone using their service. Whether
                        you're new or experienced, help is always there when you
                        need it.
                      </p>
                      <p className="text-gray-600">
                        You can reach Skrill support by email, phone, or through
                        live chat. This gives you options depending on how you
                        like to get help.
                      </p>
                      <p className="text-gray-600">
                        Skrill also offers a lot of online resources. Their FAQ
                        section has answers to common questions and step-by-step
                        guides on various topics. You can find answers quickly
                        without waiting for someone to reply.
                      </p>
                      <p className="text-gray-600">
                        For more complicated questions, the ticketing system
                        lets you send a detailed message to the support team.
                        They aim to respond quickly, so you don't have to wait
                        too long for help.
                      </p>
                      <p className="text-gray-600">
                        Being active with your account and asking questions
                        helps you get the best experience with Skrill's
                        services.
                      </p>
                    </div>
                  </div>

                  {/* Account Verification Status Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Account Verification Status
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        It's important to check if your Skrill account is fully
                        verified. This step ensures that the account is
                        officially verified by Skrill and is safe to use.
                      </p>
                      <p className="text-gray-600">
                        A fully verified account usually has better security and
                        access to all the features. It allows you to send and
                        receive money without extra restrictions.
                      </p>
                      <p className="text-gray-600">
                        To check this, log into your Skrill dashboard and look
                        at the verification section. Here, you can see which
                        documents were submitted and whether they meet Skrill's
                        standards.
                      </p>
                      <p className="text-gray-600">
                        If you're not sure about anything during the
                        verification process, you can contact customer support.
                        They can explain your account status and make sure
                        everything is in order before you make any payments or
                        purchases.
                      </p>
                      <p className="text-gray-600">
                        Checking these details regularly can help avoid any
                        problems later and keeps your financial activities safe
                        online.
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
                        When thinking about buying a verified Skrill account,
                        it's important to understand the benefits. Verified
                        accounts offer security and make transactions easier.
                        Whether you're a freelancer or a business owner, having
                        a verified account can help you manage money more
                        efficiently and show that you're reliable.
                      </p>
                      <p className="text-gray-600">
                        Verifying your account is important because it gives you
                        access to features that unverified accounts don't.
                        Things like faster transactions, higher limits, and more
                        options are all part of the benefits.
                      </p>
                      <p className="text-gray-600">
                        Freelancers, in particular, benefit from verified Skrill
                        accounts as they can handle payments more smoothly and
                        build a professional image online. Knowing how to verify
                        an account without making deposits can also be helpful
                        for those who want to try different methods.
                      </p>
                      <p className="text-gray-600">
                        Customer support is always there to help with any issues
                        you might have, whether it's about verification or
                        something else. It's important to make sure the account
                        you buy is fully verified by Skrill before you use it.
                      </p>
                      <p className="text-gray-600">
                        By understanding the benefits and process of verified
                        Skrill accounts, you can make smart choices that improve
                        your online financial experiences and keep your
                        transactions safe and efficient.
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
