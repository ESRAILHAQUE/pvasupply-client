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

export default function BuyVerifiedPayoneerAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  const features = [
    "Satisfaction guaranteed",
    "Fully verified accounts",
    "Complete documentation provided",
    "All essential details included",
    "Multiple account options available",
    "Global availability",
  ];

  const productFeatures = [
    "Satisfaction guaranteed",
    "Fully verified accounts",
    "Complete documentation provided",
    "All essential details included",
    "Multiple account options available",
    "Global availability",
  ];

  const contactInfo = [
    { icon: "Email", text: "pvasupply0@gmail.com" },
    { icon: "Telegram", text: "@pvasupply" },
    { icon: "WhatsApp", text: "+1 (979) 633-0236" },
  ];

  const sidebarItems = [
    "Introduction",
    "Your relationship with Payoneer",
    "Using Payoneer services",
    "Content in Payoneer services",
    "Software in Payoneer services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Payoneer handles government requests for user information",
  ];

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("Please select an option first");
      return;
    }

    const optionPrices = {
      basic: 120,
      premium: 180,
      enterprise: 250,
    };

    const product = {
      id: "payoneer-accounts",
      name: "Buy Verified Payoneer Accounts",
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
                  <span className="text-black">PAYONEER ACCOUNTS</span>
                </h1>
              </div>

              {/* Payoneer Graphic */}
              <div className="relative mb-6">
                <div className="w-24 h-20 bg-white rounded-lg shadow-md relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-blue-500 text-3xl font-bold">P</div>
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
              <span className="text-gray-900">Payoneer Accounts</span>
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
              Buy Verified Payoneer Accounts (USA, UK & More) – Secure & Ready
              to Use
            </h1>

            {/* Price Range */}
            <PriceDisplay price="$120.00 - $250.00" className="mb-4" />

            {/* Product Description */}
            <p className="text-gray-600 mb-6">
              Payoneer is a trusted global payment platform, making
              international transactions seamless. But verifying a Payoneer
              account can be time-consuming and complicated. Skip the hassle —
              get a fully verified Payoneer account instantly from
              pvasupply.com!
            </p>
            <p className="text-gray-600 mb-6">
              We provide 100% secure, fully verified Payoneer accounts for
              personal or business use. Whether you need a fresh, aged, or
              active account with transaction history, we deliver fast,
              reliable, and satisfaction-guaranteed service.
            </p>

            {/* Features List */}
            <div className="space-y-2 mb-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Features of Our Verified Payoneer Accounts:
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
                    <option value="basic">Basic Package - $120.00</option>
                    <option value="premium">Premium Package - $180.00</option>
                    <option value="enterprise">
                      Enterprise Package - $250.00
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
                  <span className="ml-2 text-gray-900">PAYONEER-001</span>
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
                  Buy Verified Payoneer Accounts
                </h3>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-600 mb-4">
                      Are you looking to grow your online business and make
                      things easier when sending and receiving money across
                      borders? If that's the case, you may have come across
                      Payoneer. It's a great platform that lets freelancers and
                      businesses get and send money around the world quickly and
                      easily. But what if there's a better way to use this
                      service? That's where verified Payoneer accounts come in.
                      These accounts can help you make transactions smoother and
                      build trust with your clients and partners.
                    </p>
                    <p className="text-gray-600 mb-4">
                      In the fast-paced world of online business, having a
                      verified account can give you an edge over others. Whether
                      you're a freelancer trying to find new clients or a
                      business looking to grow, using verified accounts can open
                      up new opportunities. This guide will help you learn
                      everything you need to know about buying verified Payoneer
                      accounts, including the benefits and tips for making safe
                      purchases. Get ready to take your financial management to
                      the next level!
                    </p>
                  </div>

                  {/* The Ultimate Guide Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      The Ultimate Guide to Buy Verified Payoneer Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Going through the world of online payments can be
                        tricky, especially when looking for trustworthy
                        services. Buying verified Payoneer accounts is a good
                        idea for many freelancers and businesses.
                      </p>
                      <p className="text-gray-600">
                        Verified accounts add an extra layer of trust and
                        safety. They let you make transactions without worrying
                        about your funds being blocked or frozen suddenly.
                      </p>
                      <p className="text-gray-600">
                        Before you start, it's important to understand what
                        makes these accounts special. Verification means
                        confirming your identity and financial details, which
                        makes your account more trustworthy in the eyes of
                        clients and business partners.
                      </p>
                      <p className="text-gray-600">
                        This guide will give you useful insights on how to
                        safely buy these accounts while avoiding common
                        problems. Whether you're new to Payoneer or want to
                        upgrade your current setup, you'll find helpful tips
                        that are just right for you.
                      </p>
                    </div>
                  </div>

                  {/* What is a Payoneer Account Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      What is a Payoneer Account
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        A Payoneer account is a digital payment platform that
                        allows you to send and receive money around the world.
                        It's a must-have tool for freelancers, businesses, and
                        online sellers who need easy access to international
                        transactions.
                      </p>
                      <p className="text-gray-600">
                        Once you sign up, you can use many financial services.
                        These include receiving payments from clients in other
                        countries and taking money out to your local bank
                        account.
                      </p>
                      <p className="text-gray-600">
                        Payoneer works with several currencies, making it easier
                        to send and receive money without worrying about
                        exchange rates. This makes the whole experience more
                        convenient for users.
                      </p>
                      <p className="text-gray-600">
                        In addition, the platform gives you a prepaid MasterCard
                        debit card connected directly to your account. This card
                        lets you spend your funds instantly for daily purchases
                        or withdraw cash from ATMs anywhere in the world.
                      </p>
                      <p className="text-gray-600">
                        A Payoneer account helps manage global finances more
                        easily while offering many benefits that fit the needs
                        of modern businesses.
                      </p>
                    </div>
                  </div>

                  {/* Introduction to Verified Payoneer Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Introduction to Verified Payoneer Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        A verified Payoneer account is more than just a payment
                        tool. It's a key to smooth international transactions,
                        opening doors for both freelancers and businesses.
                      </p>
                      <p className="text-gray-600">
                        When you have a verified account, it means your identity
                        has been checked, and this builds trust with your
                        clients. This status helps you stand out in the global
                        market.
                      </p>
                      <p className="text-gray-600">
                        Verification also brings extra security features that
                        protect your money and personal information. You can
                        feel safe knowing your funds are secure from fraud or
                        unauthorized use.
                      </p>
                      <p className="text-gray-600">
                        Also, many companies prefer to work with verified
                        accounts because they provide a sense of reliability.
                        This makes it easier to establish long-term
                        relationships with clients from different countries.
                      </p>
                      <p className="text-gray-600">
                        Managing payment systems can be tough. A verified
                        Payoneer account makes this process easier while helping
                        you build credibility in a competitive market.
                      </p>
                    </div>
                  </div>

                  {/* Importance of Verification Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Importance of Verification
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verification is a key step in proving your Payoneer
                        account is legitimate. It shows both you and your
                        clients that the transactions are safe and reliable.
                      </p>
                      <p className="text-gray-600">
                        When an account is verified, it means the user has gone
                        through a detailed check. This includes confirming their
                        identity and reviewing necessary documents, adding a
                        layer of protection against fraud.
                      </p>
                      <p className="text-gray-600">
                        For both freelancers and businesses, verification
                        improves their reputation. Clients are more willing to
                        work with people who have verified accounts because it
                        shows they are serious and committed.
                      </p>
                      <p className="text-gray-600">
                        Furthermore, having a verified Payoneer account can
                        increase your payment limits. This allows you to handle
                        bigger transactions without facing delays or
                        complications.
                      </p>
                      <p className="text-gray-600">
                        In today's digital world, trust is essential in business
                        deals. Verification helps build this trust by giving all
                        parties confidence in the financial exchanges.
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
                        Using verified Payoneer accounts brings many advantages
                        for freelancers and businesses.
                      </p>
                      <p className="text-gray-600">
                        First, these accounts help build trust. When clients see
                        your account is verified, they are more likely to
                        believe in your work.
                      </p>
                      <p className="text-gray-600">
                        Transactions also become easier. Verified accounts
                        usually have fewer limits on taking money out or sending
                        payments, making it quicker to get your money.
                      </p>
                      <p className="text-gray-600">
                        Security is another big benefit. Verified accounts have
                        stronger checks in place, making it less likely for
                        someone to try to trick you or take your money.
                      </p>
                      <p className="text-gray-600">
                        Having a verified account can also help you get new
                        chances. Many websites need verification before they let
                        you start working or accept payments.
                      </p>
                      <p className="text-gray-600">
                        It makes international payments simpler. Since Payoneer
                        is known around the world, using a verified account
                        helps you work with people in different countries
                        without worrying about changing money.
                      </p>
                    </div>
                  </div>

                  {/* Global Reach Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Global Reach
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Payoneer accounts let you work with people in many
                        different countries. This service helps freelancers,
                        businesses, and entrepreneurs send and get money all
                        over the world.
                      </p>
                      <p className="text-gray-600">
                        With a verified Payoneer account, you can work with
                        different kinds of money. Whether you're working with
                        clients in Europe or suppliers in Asia, the cost of
                        changing money is less.
                      </p>
                      <p className="text-gray-600">
                        The platform supports over 150 types of money and works
                        in more than 200 countries. This flexibility helps you
                        find and work with people from around the world.
                      </p>
                      <p className="text-gray-600">
                        Using verified accounts gives you access to these
                        markets and also shows others that you are trustworthy.
                        People around the world remember the Payoneer name as a
                        sign of being professional and reliable.
                      </p>
                      <p className="text-gray-600">
                        This known name makes working across borders easier and
                        also protects your money in every transaction.
                      </p>
                    </div>
                  </div>

                  {/* Trusted By Professionals Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Trusted By Professionals
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verified Payoneer accounts are popular among freelancers
                        and businesses. Professionals trust these accounts
                        because they are reliable and safe.
                      </p>
                      <p className="text-gray-600">
                        With a verified account, you can move money easily
                        across borders. This is important if you're working with
                        people from other countries. Knowing your money will be
                        safe gives you peace of mind.
                      </p>
                      <p className="text-gray-600">
                        Many businesses prefer to work with people who have
                        verified accounts. It shows they are serious about
                        following rules and are professional. This can help you
                        stand out in a busy market.
                      </p>
                      <p className="text-gray-600">
                        It's also easier to connect with others in the global
                        economy. When people see you have a verified account,
                        they think you are credible. Many in the online world
                        see this as a sign that you care about keeping money
                        safe.
                      </p>
                      <p className="text-gray-600">
                        For professionals wanting to be respected, having a
                        verified Payoneer account is important. It's more than
                        just getting paid; it's about showing trust in every
                        deal.
                      </p>
                    </div>
                  </div>

                  {/* Tips For Safely Buy Verified Payoneer Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Tips For Safely Buy Verified Payoneer Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        When you want to buy a verified Payoneer account, the
                        most important thing is to be safe. Start by looking
                        carefully at possible sellers. Check what others say
                        about them online.
                      </p>
                      <p className="text-gray-600">
                        Talk directly with the seller before you buy. Ask them
                        about the account's history and how the verification
                        works. This helps make sure everything is clear.
                      </p>
                      <p className="text-gray-600">
                        Use safe payment methods that protect you if something
                        goes wrong. Don't send money via untraceable ways like
                        cryptocurrency unless you really trust the seller.
                      </p>
                      <p className="text-gray-600">
                        Don't give out personal information unless you have to.
                        Real sellers won't ask for sensitive details beyond
                        what's needed to complete the sale.
                      </p>
                      <p className="text-gray-600">
                        If you're testing a new vendor, start with a small
                        payment. This helps you check if they are trustworthy
                        before you spend more.
                      </p>
                    </div>
                  </div>

                  {/* How Long Does It Take To Get Verified On Payoneer Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      How Long Does It Take To Get Verified On Payoneer?
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verifying a Payoneer account usually takes a few
                        business days. The exact time can depend on different
                        factors.
                      </p>
                      <p className="text-gray-600">
                        If your documents are clear and meet all the
                        requirements, you might get verified in 3 to 5 business
                        days. That's pretty fast in today's fast-moving world.
                      </p>
                      <p className="text-gray-600">
                        Sometimes it takes longer if there are more checks
                        needed or if there are problems with your documents. In
                        these cases, it might take longer than expected.
                      </p>
                      <p className="text-gray-600">
                        To avoid delays, make sure you upload clear pictures of
                        your ID and follow Payoneer's rules when sending your
                        documents.
                      </p>
                      <p className="text-gray-600">
                        Staying in touch by checking your email for updates from
                        Payoneer can also help keep your verification process on
                        track.
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
                        When thinking about buying a verified Payoneer account,
                        it's important to consider everything carefully.
                        Verified accounts offer many benefits, including better
                        security and more access to global markets.
                      </p>
                      <p className="text-gray-600">
                        The verification process is important for anyone who
                        wants to work with international customers confidently.
                        Choosing a verified account puts you on the same level
                        as professionals around the world.
                      </p>
                      <p className="text-gray-600">
                        Also, following safe buying tips can help you avoid
                        problems when purchasing online services. Always pick
                        trusted sources and make sure the account is real before
                        you commit.
                      </p>
                      <p className="text-gray-600">
                        With these ideas, using Payoneer becomes much simpler.
                        The right approach can lead to smooth money transfers
                        and strong business connections all around the world.
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
