"use client";
import { useState } from "react";
import {
  Mail,
  Shield,
  CheckCircle,
  Globe,
  Clock,
  Phone,
  Users,
  Star,
  ShoppingCart,
  CreditCard,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Zap,
  Award,
  Lock,
  Verified,
} from "lucide-react";
import { motion } from "framer-motion";

export default function BuyOldGmailAccounts() {
  const [quantity, setQuantity] = useState(1);
  const [priceOption, setPriceOption] = useState("6");
  const [openFaq, setOpenFaq] = useState(null);

  const priceOptions = [
    { value: "6", label: "1 Account", price: "$6.00", popular: false },
    { value: "30", label: "5 Accounts", price: "$30.00", popular: true },
    { value: "50", label: "10 Accounts", price: "$50.00", popular: false },
    { value: "200", label: "50 Accounts", price: "$200.00", popular: false },
  ];

  const features = [
    {
      icon: Globe,
      text: "USA & European Local IP Created Accounts",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      text: "Real Phone Number Used for Verification",
      color: "text-green-500",
    },
    {
      icon: Users,
      text: "Unique Username Gmail Accounts Available",
      color: "text-purple-500",
    },
    {
      icon: Clock,
      text: "2019-2023 Years Gmail Accounts Available",
      color: "text-orange-500",
    },
    {
      icon: Globe,
      text: "Any Countries PVA New/Old Accounts Available",
      color: "text-indigo-500",
    },
    {
      icon: Zap,
      text: "Delivery Within 10 Minutes After Order",
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      text: "100% Safe & Private Accounts",
      color: "text-red-500",
    },
  ];

  const faqs = [
    {
      question: "Can I recover a 10 year old Gmail account?",
      answer:
        "Yes, you can recover a 10-year-old Gmail account by visiting the account recovery page and following the prompts. Our aged accounts come with full recovery information.",
    },
    {
      question: "Do old Gmail accounts expire?",
      answer:
        "Old Gmail accounts do not expire. However, inactive accounts may be subject to Google's inactive account policy. Our accounts are regularly maintained to prevent this.",
    },
    {
      question: "Are old Gmail accounts safe to buy for personal use?",
      answer:
        "Yes, it is completely safe to buy old Gmail accounts for personal use from trustworthy vendors like us. All accounts are verified and secure.",
    },
    {
      question: "Can old Gmail accounts be used for email marketing?",
      answer:
        "Yes, old Gmail accounts can be used for email marketing and outreach purposes effectively. They have better deliverability rates than new accounts.",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "pvasmmpro@gmail.com",
      color: "bg-red-500",
    },
    {
      icon: MessageCircle,
      label: "Skype",
      value: "pvasmmpro",
      color: "bg-blue-500",
    },
    {
      icon: MessageCircle,
      label: "Telegram",
      value: "@pvasmmpro",
      color: "bg-cyan-500",
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+1 (614) 708-6231",
      color: "bg-green-500",
    },
  ];

  const relatedProducts = [
    { name: "Buy Twitter Accounts", price: "$3.00 - $390.00", discount: "20%" },
    {
      name: "Buy LinkedIn Accounts",
      price: "$40.00 - $150.00",
      discount: "15%",
    },
    {
      name: "Buy WeChat Accounts",
      price: "$120.00 - $250.00",
      discount: "25%",
    },
    { name: "Buy Naver Accounts", price: "$7.00 - $70.00", discount: "10%" },
  ];

  const benefits = [
    {
      icon: Award,
      title: "Established Credibility",
      desc: "Years of account history for better trust",
    },
    {
      icon: Lock,
      title: "Reduced Suspension Risk",
      desc: "Lower chance of being flagged by Google",
    },
    {
      icon: Verified,
      title: "Pre-built Network",
      desc: "Existing contacts and subscriptions included",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 animate-pulse">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium">
              ⚡ Flash Sale: 30% OFF on all accounts! Limited time offer
            </span>
            <Zap className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white py-4 px-4 shadow-sm border-b">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-600 flex items-center space-x-2">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              Home
            </span>
            <span>/</span>
            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              Social Accounts
            </span>
            <span>/</span>
            <span className="text-blue-600 font-medium">
              Buy Old Gmail Accounts
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 transform hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Premium Old Gmail Accounts
                  </h1>
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold animate-pulse">
                      🔥 HOT SALE!
                    </div>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="ml-2 text-gray-600 font-medium">
                        (124+ reviews)
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">
                      $6.00 – $200.00
                    </div>
                    <div className="text-sm text-gray-500 line-through">
                      $8.00 – $280.00
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Get premium quality,{" "}
                <span className="font-semibold text-blue-600">
                  real and active
                </span>{" "}
                Gmail accounts from USA and European countries. All accounts are
                phone verified with a clean history and immediate delivery.
              </p>

              {/* Benefits Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100 hover:shadow-md hover:scale-105 transition-all duration-300">
                    <benefit.icon className="w-8 h-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                ))}
              </div>

              {/* Price Options */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">
                  Choose Your Package
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {priceOptions.map((option) => (
                    <motion.button
                      key={option.value}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setPriceOption(option.value)}
                      className={`relative border-2 rounded-xl p-4 transition-all duration-300 ${
                        priceOption === option.value
                          ? "border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg"
                          : "border-gray-200 hover:border-blue-300 bg-white hover:shadow-md"
                      } ${option.popular ? "ring-2 ring-orange-200" : ""}`}>
                      {option.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            MOST POPULAR
                          </span>
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div
                            className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                              priceOption === option.value
                                ? "border-blue-500 bg-blue-500"
                                : "border-gray-400"
                            }`}>
                            {priceOption === option.value && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900">
                              {option.label}
                            </div>
                            <div className="text-2xl font-bold text-blue-600">
                              {option.price}
                            </div>
                          </div>
                        </div>
                        {option.popular && (
                          <div className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 px-2 py-1 rounded-full text-xs font-bold">
                            Save 25%
                          </div>
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6">
                <div>
                  <label className="text-lg font-medium text-gray-800 block mb-3">
                    Quantity
                  </label>
                  <div className="flex items-center bg-gray-50 rounded-lg border-2 border-gray-200">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-l-lg transition-colors">
                      -
                    </button>
                    <div className="px-6 py-3 bg-white font-semibold text-lg min-w-[80px] text-center">
                      {quantity}
                    </div>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-r-lg transition-colors">
                      +
                    </button>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-4 px-8 rounded-xl font-semibold text-lg flex items-center justify-center shadow-lg transition-all duration-300">
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  Add to Cart - ${parseInt(priceOption) * quantity}.00
                </motion.button>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <span>SKU: GML-2024-001</span>
                  <span>•</span>
                  <span className="hover:text-blue-600 cursor-pointer transition-colors">
                    Category: Social Accounts
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-green-600 font-medium">
                    Secure Purchase
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                ✨ Premium Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start p-4 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100 hover:shadow-md transition-all duration-300">
                    <feature.icon
                      className={`w-6 h-6 ${feature.color} mt-0.5 mr-4 flex-shrink-0`}
                    />
                    <span className="text-gray-700 font-medium">
                      {feature.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                ❓ Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full text-left p-6 hover:bg-gray-50 flex items-center justify-between transition-colors">
                      <h3 className="font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t border-gray-200 p-6 bg-gradient-to-r from-blue-50 to-indigo-50">
                        <p className="text-gray-700">{faq.answer}</p>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 sticky top-6">
              <h2 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
                <MessageCircle className="w-6 h-6 mr-2 text-blue-600" />
                24/7 Customer Support
              </h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center p-3 rounded-xl bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className={`p-2 rounded-lg ${method.color} mr-3`}>
                      <method.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 text-sm">
                        {method.label}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {method.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center shadow-lg transition-all duration-300">
                Contact Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>

            {/* Payment Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
                <CreditCard className="w-6 h-6 mr-2 text-blue-600" />
                Secure Payment Options
              </h2>
              <p className="text-gray-600 mb-4">
                We accept all major payment methods:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    name: "Credit Card",
                    icon: CreditCard,
                    color: "text-blue-500",
                  },
                  { name: "PayPal", icon: Globe, color: "text-blue-600" },
                  { name: "Crypto", icon: Shield, color: "text-orange-500" },
                  {
                    name: "Bank Transfer",
                    icon: CreditCard,
                    color: "text-green-500",
                  },
                ].map((payment, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-3 flex items-center justify-center hover:border-blue-300 transition-colors">
                    <payment.icon className={`w-5 h-5 ${payment.color} mr-2`} />
                    <span className="text-sm font-medium">{payment.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Related Products */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h2 className="text-xl font-bold mb-6 text-gray-900">
                🔥 Hot Deals
              </h2>
              <div className="space-y-4">
                {relatedProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-300 cursor-pointer group">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold mb-2 inline-block">
                          -{product.discount} OFF
                        </div>
                        <h3 className="text-blue-600 group-hover:text-blue-800 font-semibold text-sm mb-1 transition-colors">
                          {product.name}
                        </h3>
                        <div className="text-gray-700 font-bold">
                          {product.price}
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
