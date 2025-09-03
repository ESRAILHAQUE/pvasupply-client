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
import RelatedProducts from "../../../components/shared/RelatedProducts";

export default function BuyVerifiedStripeAccounts() {
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
    "Your relationship with Stripe",
    "Using Stripe services",
    "Content in Stripe services",
    "Software in Stripe services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Stripe handles government requests for user information",
  ];

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("Please select an option first");
      return;
    }

    const optionPrices = {
      basic: 370,
      premium: 470,
      enterprise: 570,
    };

    const product = {
      id: "stripe-accounts",
      name: "Buy Verified Stripe Accounts",
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
                  <span className="text-black">STRIPE ACCOUNTS</span>
                </h1>
              </div>

              {/* Stripe Graphic */}
              <div className="relative mb-6">
                <div className="w-24 h-20 bg-white rounded-lg shadow-md relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-purple-500 text-3xl font-bold">S</div>
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
              <span className="text-gray-900">Stripe Accounts</span>
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
              Buy Verified Stripe Accounts
            </h1>

            {/* Price Range */}
            <PriceDisplay price="$370.00 - $570.00" className="mb-4" />

            {/* Product Description */}
            <p className="text-gray-600 mb-6">
              Looking to purchase a fully verified Stripe account? You&apos;re
              in the right place! At pvasupply.com, we provide fully verified
              Stripe accounts that are 100% secure, reliable, and tailored to
              your needs. These accounts enable you to accept payments, manage
              transactions, and handle your business&apos;s financial needs with
              ease — ensuring a smooth and hassle-free experience.
            </p>
            <p className="text-gray-600 mb-6">
              Our verified Stripe accounts are perfect for users who require a
              secure and convenient payment processing solution for their online
              business. Whether for personal or business use, our accounts are
              ready for immediate activation.
            </p>

            {/* Features List */}
            <div className="space-y-2 mb-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Features of Verified Stripe Accounts:
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
                    <option value="basic">Basic Package - $370.00</option>
                    <option value="premium">Premium Package - $470.00</option>
                    <option value="enterprise">
                      Enterprise Package - $570.00
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
                  <span className="ml-2 text-gray-900">STRIPE-001</span>
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
                  Buy verified Stripe accounts
                </h3>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-600 mb-4">
                      Buying verified Stripe accounts has become an important
                      step for businesses wanting to improve their online
                      payment systems. These accounts are already approved, so
                      you can start accepting payments right away without
                      waiting for the usual verification process.
                    </p>
                    <p className="text-gray-600 mb-4">
                      With verified Stripe accounts, you avoid the risk of your
                      account being suspended because of not meeting rules. This
                      gives you more confidence and less stress when handling
                      money.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Also, getting an existing account means you get features
                      that might take a long time to unlock if you start from
                      scratch. These can include higher limits for transactions
                      and more payment methods.
                    </p>
                    <p className="text-gray-600 mb-4">
                      This fast start is especially helpful for new businesses
                      or those entering tough markets where time is important.
                      By buying a verified Stripe account, you're not just
                      getting a way to start paying — you're building a strong
                      base for your business to grow and stay strong.
                    </p>
                  </div>

                  {/* Benefits of Buying Verified Stripe Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Benefits of Buying Verified Stripe Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Buying verified Stripe accounts gives businesses a big
                        advantage in handling payments quickly. These accounts
                        have built-in trust, which can help customers believe in
                        your brand and make payments easier.
                      </p>
                      <p className="text-gray-600">
                        A verified account usually means fewer holds on payments
                        and smoother running of your business. This is important
                        for keeping money flowing, especially in busy industries
                        where time is important.
                      </p>
                      <p className="text-gray-600">
                        Also, these accounts often have higher payment limits.
                        This means you can grow your business without worrying
                        about limits that come with new accounts.
                      </p>
                      <p className="text-gray-600">
                        Plus, getting a verified account saves time. Starting a
                        new account from scratch can be slow and hard. With a
                        pre-verified account, you skip the hassle of checking
                        rules and filling out lots of forms.
                      </p>
                      <p className="text-gray-600">
                        Buying a verified account also gives you special tools
                        that you might not get otherwise — like better
                        protection against fraud or support that's more helpful
                        for serious businesses.
                      </p>
                    </div>
                  </div>

                  {/* Importance Of Verified Stripe Account Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Importance Of Verified Stripe Account
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        A verified Stripe account is important for any business
                        wanting to succeed in the online world. It builds trust
                        between you and your customers, making sure every
                        payment is safe.
                      </p>
                      <p className="text-gray-600">
                        If you don't have a verified account, customers might
                        not want to share their payment details. This can lead
                        to lost sales and less money for your business.
                      </p>
                      <p className="text-gray-600">
                        Also, a verified account makes the payment process
                        smoother. You can use advanced tools that make it easier
                        for customers to checkout quickly.
                      </p>
                      <p className="text-gray-600">
                        Moreover, having a verified status can help reduce the
                        cost of each payment. This means more money stays in
                        your business over time.
                      </p>
                      <p className="text-gray-600">
                        A reliable payment method also helps you reach customers
                        in other countries. With Stripe's support for many
                        countries, you can reach more people easily.
                      </p>
                      <p className="text-gray-600">
                        In today's world, online safety is very important.
                        Having a verified Stripe account shows that your
                        business is trustworthy and professional.
                      </p>
                    </div>
                  </div>

                  {/* Why Do You Need To Buy Verified Stripe Account Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Why Do You Need To Buy Verified Stripe Account?
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        The online world is changing fast, and having a verified
                        Stripe account is important for any business online. It
                        gives you an advantage in payment processing and makes
                        sure transactions go smoothly.
                      </p>
                      <p className="text-gray-600">
                        Verified accounts help build trust with customers. When
                        they see you use a trusted payment service like Stripe,
                        they're more likely to buy from you.
                      </p>
                      <p className="text-gray-600">
                        Security is another reason. Verified accounts have
                        better protection against fraud and chargebacks, keeping
                        both your business and your customers safe.
                      </p>
                      <p className="text-gray-600">
                        Also, buying a verified account saves you time. The
                        verification process can take a long time and be
                        complicated. By buying one, you can focus on growing
                        your business instead of dealing with lots of paperwork.
                      </p>
                      <p className="text-gray-600">
                        For entrepreneurs who are moving into new markets or
                        expanding, having an existing payment solution makes the
                        transition easier and boosts your business's reputation.
                      </p>
                    </div>
                  </div>

                  {/* How Verified Stripe Accounts Can Boost Your Business Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      How Verified Stripe Accounts Can Boost Your Business
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verified Stripe accounts can greatly help your business
                        run better. With a verified account, you get a trusted
                        payment system that customers can trust.
                      </p>
                      <p className="text-gray-600">
                        When customers know you use a well-known service like
                        Stripe, they feel more secure when making payments. This
                        can lead to more sales and better results.
                      </p>
                      <p className="text-gray-600">
                        Additionally, a verified account allows for faster
                        payment processing. Funds arrive quickly, helping you
                        manage your money efficiently.
                      </p>
                      <p className="text-gray-600">
                        You also get access to special tools like fraud
                        protection and customer analytics. These help you
                        understand your customers and your business better, so
                        you can make smart choices.
                      </p>
                      <p className="text-gray-600">
                        Lastly, having a verified account opens the door to
                        reaching customers around the world. Stripe's wide
                        network makes it easy to accept payments from many
                        countries without dealing with complex rules or currency
                        changes.
                      </p>
                    </div>
                  </div>

                  {/* Steps to Verify a Stripe Account Before Purchase Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Steps to Verify a Stripe Account Before Purchase
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Checking a Stripe account before you make a purchase is
                        important to make sure it's real. First, look at the
                        account's profile. It should have all the basic info
                        like the business name, address, and contact details.
                      </p>
                      <p className="text-gray-600">
                        Next, check the transaction history. A good record of
                        past payments shows that the account is reliable. You
                        want to see that payments are made regularly over time.
                      </p>
                      <p className="text-gray-600">
                        Also, read any customer reviews or feedback about the
                        seller. Real comments can tell you a lot about how
                        trustworthy and good the service is.
                      </p>
                      <p className="text-gray-600">
                        Make sure the account follows Stripe's rules and
                        guidelines. This helps prevent problems later with
                        security or how the account works.
                      </p>
                      <p className="text-gray-600">
                        Each step helps ensure the account is verified and meets
                        your needs without any issues in the future.
                      </p>
                    </div>
                  </div>

                  {/* How to Choose the Right Verified Stripe Account Seller Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      How to Choose the Right Verified Stripe Account Seller
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Picking the right seller for a verified Stripe account
                        is important. Start by looking up their online
                        reputation. Check for reviews and comments from people
                        who have bought from them. A good seller will have
                        positive feedback and a history of working well.
                      </p>
                      <p className="text-gray-600">
                        Make sure they offer customer support. It's helpful to
                        have someone to ask questions if something goes wrong.
                      </p>
                      <p className="text-gray-600">
                        Transparency is important too. The seller should clearly
                        explain what the account offers, like how much you can
                        process and any costs involved.
                      </p>
                      <p className="text-gray-600">
                        Look into their verification process. A trustworthy
                        seller will check that all accounts are properly
                        verified to avoid problems with Stripe.
                      </p>
                    </div>
                  </div>

                  {/* Why Buy a Verified Stripe Account (New or Old) Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Why Buy a Verified Stripe Account (New or Old)
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Getting a verified Stripe account, whether new or old,
                        can really help your payment processing. A verified
                        account gives you instant trust and credibility, which
                        is important for businesses that rely on online
                        payments.
                      </p>
                      <p className="text-gray-600">
                        New accounts often have new features and better
                        security. They're less likely to be checked more closely
                        by Stripe, so you can start accepting payments right
                        away.
                      </p>
                      <p className="text-gray-600">
                        Older accounts might have a good track record with
                        customers and other businesses. This could be good if
                        you want someone with experience. These accounts might
                        also allow for higher payment limits.
                      </p>
                      <p className="text-gray-600">
                        By choosing either type, you get smoother financial
                        operations and avoid problems that could stop your
                        business. Whether you're starting a new business or
                        growing an existing one, getting a verified Stripe
                        account can make transactions easier and build customer
                        trust.
                      </p>
                    </div>
                  </div>

                  {/* Features of Stripe Account Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Features of Stripe Account:
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Stripe accounts offer many useful features that improve
                        the payment experience. One big thing is that they work
                        well with different platforms, so it's easy to connect
                        them to online stores or apps.
                      </p>
                      <p className="text-gray-600">
                        Stripe also gives strong analytics and reporting tools.
                        This lets you track sales trends and understand how
                        customers behave. Having real-time data helps you make
                        smart business choices.
                      </p>
                      <p className="text-gray-600">
                        Security is another key feature. Stripe has tools that
                        detect fraud and follows strict payment standards,
                        keeping your transactions safe from unauthorized access.
                      </p>
                      <p className="text-gray-600">
                        The user-friendly dashboard makes it simple to manage
                        payments, refunds, and subscriptions all in one place.
                        You can also customize the checkout page to match your
                        brand.
                      </p>
                      <p className="text-gray-600">
                        Stripe also allows businesses to accept payments from
                        around the world. They support multiple currencies and
                        offer local payment options, making it easier to reach
                        international customers.
                      </p>
                    </div>
                  </div>

                  {/* Buy Verified Stripe Accounts in the USA, UK, CA, and Other Countries Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Buy Verified Stripe Accounts in the USA, UK, CA, and Other
                      Countries
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        For businesses looking to grow, buying verified Stripe
                        accounts in places like the USA, UK, and CA can be very
                        helpful. These countries have strong online marketplaces
                        and payment systems that can help your business.
                      </p>
                      <p className="text-gray-600">
                        In the USA, a verified account means you're reaching one
                        of the biggest customer bases. It also helps build trust
                        with buyers.
                      </p>
                      <p className="text-gray-600">
                        The UK market has its own benefits. A verified account
                        here helps you follow local regulations and reach a
                        tech-savvy audience looking for reliable services.
                      </p>
                      <p className="text-gray-600">
                        Canada has its own advantages too. Customers there
                        prefer companies with trusted payment solutions. Having
                        a Canadian Stripe account can help build trust with
                        local buyers who care about security and reliability.
                      </p>
                      <p className="text-gray-600">
                        Whether you're operating locally or internationally,
                        getting verified accounts in different countries can
                        help boost sales and build trust with customers.
                      </p>
                    </div>
                  </div>

                  {/* Future of Payment Processing With Stripe Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Future of Payment Processing With Stripe
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        The future of payment processing with Stripe looks very
                        promising. As technology changes, customer expectations
                        for easy and fast payments also change. Stripe is always
                        creating new ways to meet these needs.
                      </p>
                      <p className="text-gray-600">
                        Thanks to new technologies like AI and machine learning,
                        fraud detection will be faster and more accurate. This
                        means both businesses and customers can have secure
                        transactions without the slowdown.
                      </p>
                      <p className="text-gray-600">
                        As e-commerce continues to grow, Stripe is adding more
                        support for different currencies and payment methods.
                        This flexibility means businesses can reach more people
                        without extra effort.
                      </p>
                      <p className="text-gray-600">
                        Working with new tech like blockchain could change how
                        payments are handled. Imagine instant cross-border
                        payments with low fees — this could be a big change for
                        many businesses.
                      </p>
                      <p className="text-gray-600">
                        With the rise of digital wallets and contactless
                        payments, Stripe's ability to adapt positions it well
                        for the future of finance. The coming years are full of
                        exciting changes in online transactions thanks to this
                        powerful platform.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified Stripe Accounts"
                  category="Special Accounts"
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
