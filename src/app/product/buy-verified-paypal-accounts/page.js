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
  Home,
  ChevronRight,
} from "lucide-react";

export default function BuyVerifiedPayPalAccounts() {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState("90");
  const [openFaq, setOpenFaq] = useState(null);

  const accountOptions = [
    { value: "90", label: "Single Account", price: "$90.00" },
    { value: "180", label: "2 Accounts", price: "$180.00" },
    { value: "270", label: "3 Accounts", price: "$270.00" },
    { value: "1920", label: "Bulk Package", price: "$1,920.00" },
  ];

  const features = [
    "Real Phone Number Verified",
    "Email Login Associated With PayPal",
    "Photo ID Verified",
    "100% Genuine Account",
    "High Profile SSN Details Confirmed",
    "Bank Verified",
    "EIN Verified",
    "Address Verified",
    "Visa Card Verified",
    "Instant Delivery",
    "24/7 Customer Support",
  ];

  const whatWeGive = [
    "Email Login Access",
    "PayPal Login Access",
    "Phone Number Access",
    "Personal/Business Details",
    "Photo ID",
    "Address Verification Documents",
    "SSN Photo ID",
    "Bank Account Login Access",
    "Card Details",
    "Replacement Guarantee",
  ];

  const faqs = [
    {
      question: "How Can I Get a Verified PayPal Account?",
      answer:
        "You can get verified PayPal accounts from our platform. We provide fully verified accounts with all necessary documentation and access details.",
    },
    {
      question: "How Do I Get a Business PayPal Account?",
      answer:
        "Our business PayPal accounts come with full business verification, including EIN verification and business documentation.",
    },
    {
      question: "How to Buy Verified PayPal Account Without a Bank Account?",
      answer:
        "Our verified PayPal accounts come pre-linked with bank accounts and cards, so you don&apos;t need your own bank account to use them.",
    },
    {
      question: "Does Buy USA Verified PayPal Account Come With Bank Account?",
      answer:
        "Yes, all our USA verified PayPal accounts come with linked bank accounts for full functionality.",
    },
    {
      question: "Does Buy Old Verified PayPal Budget?",
      answer:
        "Our aged PayPal accounts have established history and higher trust scores, making them more reliable for transactions.",
    },
    {
      question: "How quickly will I receive my account after purchase?",
      answer:
        "Accounts are typically delivered within 24 hours of payment confirmation. In most cases, you&apos;ll receive your account details within 1-2 hours.",
    },
  ];

  const relatedProducts = [
    { name: "Buy Twitter Accounts", price: "Starting $39.00" },
    { name: "Buy Instagram Account", price: "Starting $39.00" },
    { name: "Buy Coinbase Account", price: "Starting $39.00" },
    { name: "Buy Binance Account", price: "Starting $39.00" },
  ];

  const testimonials = [
    {
      name: "Michael R.",
      role: "E-commerce Entrepreneur",
      content:
        "The PayPal account I purchased worked perfectly for my dropshipping business. Full verification and excellent support when I had questions.",
      rating: 5,
    },
    {
      name: "Sarah K.",
      role: "Freelancer",
      content:
        "Needed a verified account for international clients. Delivery was fast and the account had all promised verifications. Highly recommend!",
      rating: 5,
    },
    {
      name: "David L.",
      role: "Digital Marketer",
      content:
        "Bought the bulk package for my agency. All accounts were delivered as described with complete documentation. Will be ordering again.",
      rating: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center text-sm text-gray-600 space-x-2 overflow-x-auto whitespace-nowrap">
            <Home className="w-4 h-4 flex-shrink-0" />
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="hover:text-blue-600 cursor-pointer">
              Bank Accounts
            </span>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="hover:text-blue-600 cursor-pointer">
              Buy Verified PayPal Accounts
            </span>
            <ChevronRight className="w-4 h-4 flex-shrink-0" />
            <span className="text-gray-900 font-medium">Bank Accounts</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Product Image */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-center relative overflow-hidden shadow-lg">
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-sm z-10">
                  LIMITED OFFER
                </div>

                {/* Main Title */}
                <div className="relative z-10">
                  <div className="text-white text-2xl font-bold mb-1">
                    BUY VERIFIED
                  </div>
                  <div className="text-white text-3xl font-bold mb-4">
                    PAYPAL ACCOUNTS
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-bold mb-6 inline-block border border-white/30">
                    PREMIUM SERVICE
                  </div>
                </div>

                {/* Features List */}
                <div className="relative z-10 text-left text-white text-sm space-y-3 mb-6">
                  {features.slice(0, 6).map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0 text-blue-200" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* PayPal Logo Area */}
                <div className="relative z-10 bg-white/20 backdrop-blur-sm text-white p-4 rounded-lg my-6 border border-white/30">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="bg-white text-blue-600 px-4 py-2 rounded font-bold text-lg flex items-center">
                      <span>PayPal</span>
                      <Verified className="w-5 h-5 ml-1 text-blue-400" />
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="relative z-10 mb-6">
                  <div className="text-white text-lg font-bold mb-3">
                    READY TO GET STARTED?
                  </div>
                  <div className="flex justify-center space-x-3">
                    <a
                      href="#contact"
                      className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold text-sm transition-colors">
                      Contact Us
                    </a>
                    <a
                      href="#pricing"
                      className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold text-sm transition-colors">
                      Order Now
                    </a>
                  </div>
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-b-xl border-t border-white/30">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold">15+</div>
                        <div className="text-xs">Years Experience</div>
                      </div>
                      <div className="h-8 w-px bg-white/30"></div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">100%</div>
                        <div className="text-xs">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-white/10"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Header */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Buy Verified PayPal Accounts
                  </h1>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                        />
                      ))}
                      <span className="ml-2 text-blue-600 text-sm">
                        (15 customer reviews)
                      </span>
                    </div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      42 sold this week
                    </div>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                  $90.00 – $1,920.00
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="font-semibold text-lg text-gray-900">
                  Premium Verified PayPal Accounts
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  PayPal is the world&apos;s leading online payment system, and our
                  fully verified accounts provide seamless access to global
                  transactions. We specialize in providing 100% verified
                  personal and business PayPal accounts for USA, UK, CA and
                  other countries. Each account comes complete with all
                  necessary verifications including email, phone number, SSN,
                  bank details, card information, and government-issued ID
                  verification.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Whether you need an account for e-commerce, freelancing, or
                  business transactions, our verified PayPal accounts offer the
                  highest success rates with complete documentation. We maintain
                  strict quality control to ensure every account meets PayPal&apos;s
                  verification standards.
                </p>
              </div>

              {/* Features Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Key Features of Our PayPal Accounts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <CheckCircle className="w-4 h-4 mt-0.5 mr-2 flex-shrink-0 text-blue-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Give Section */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Complete Package Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {whatWeGive.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      <span className="text-blue-500 mr-2">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-600 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-400 fill-yellow-400" />
                  Customer Experiences
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-3 italic">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>
                      <div className="text-sm font-medium text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div
                id="contact"
                className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-100">
                <h3 className="font-semibold text-lg text-blue-800 mb-4 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-blue-600" />
                  Need Assistance? Contact Us 24/7
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-white p-3 rounded-lg border border-blue-100">
                    <div className="font-medium text-blue-600 mb-1">
                      Email Support
                    </div>
                    <div className="text-gray-700">pvasmmepro@gmail.com</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100">
                    <div className="font-medium text-blue-600 mb-1">
                      Telegram
                    </div>
                    <div className="text-gray-700">@pvasmmepro</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100">
                    <div className="font-medium text-blue-600 mb-1">Skype</div>
                    <div className="text-gray-700">pvasmmepro</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-100">
                    <div className="font-medium text-blue-600 mb-1">
                      WhatsApp
                    </div>
                    <div className="text-gray-700">+1 (614) 908-6231</div>
                  </div>
                </div>
              </div>

              {/* Product Options */}
              <div id="pricing" className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Your Package
                </label>
                <select
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white shadow-sm">
                  <option value="">Choose an option</option>
                  {accountOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label} - {option.price}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-lg shadow-sm w-full sm:w-auto">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-100 text-gray-600">
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 text-gray-800">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-100 text-gray-600">
                    +
                  </button>
                </div>
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-lg font-semibold w-full sm:w-auto shadow-md hover:shadow-lg transition-all flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to cart
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm text-gray-500 gap-2">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <span>
                    <strong>SKU:</strong> PP-ACCOUNT-001
                  </span>
                  <span>
                    <strong>Category:</strong>{" "}
                    <span className="text-blue-600">Bank Accounts</span>
                  </span>
                  <span>
                    <strong>Delivery:</strong> Instant to 24 Hours
                  </span>
                </div>
                <div className="flex items-center text-blue-600">
                  <Lock className="w-4 h-4 mr-1" />
                  <span>Secure Checkout</span>
                </div>
              </div>
            </div>

            {/* Additional Content Sections */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Premium Verified PayPal Accounts
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our verified PayPal accounts provide the ultimate solution for
                  individuals and businesses needing reliable payment
                  processing. Unlike unverified accounts that face limitations
                  and restrictions, our accounts come with full verification
                  status, allowing you to send, receive, and withdraw funds
                  without restrictions.
                </p>
                <p>
                  Each account undergoes a meticulous verification process that
                  includes phone verification, email confirmation, bank account
                  linkage, and ID verification. This comprehensive approach
                  ensures your account remains secure and fully functional for
                  all your transaction needs.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                What is PayPal?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  PayPal is the world&apos;s most trusted online payment system,
                  serving over 400 million users worldwide. Founded in 1998,
                  PayPal revolutionized digital payments by providing a secure
                  platform for online money transfers, serving as an electronic
                  alternative to traditional paper methods like checks and money
                  orders.
                </p>
                <p>As a leader in digital payments, PayPal offers:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>
                    Secure online transactions with buyer and seller protection
                  </li>
                  <li>Global payment processing in multiple currencies</li>
                  <li>
                    Integration with e-commerce platforms and marketplaces
                  </li>
                  <li>Mobile payment solutions through the PayPal app</li>
                  <li>Business tools for invoicing and payment tracking</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                PayPal Verification Process Explained
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  PayPal verification is a crucial security measure that
                  enhances account functionality while protecting users from
                  fraud. The verification process confirms your identity and
                  financial information, establishing trust with PayPal&apos;s
                  payment network.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    Our Verification Includes:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                      Phone Number Verification
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                      Email Confirmation
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                      Bank Account Linkage
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                      Government ID Verification
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                      SSN/EIN Confirmation
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                      Address Verification
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Advantages of Verified PayPal Accounts
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Verified PayPal accounts provide significant advantages over
                  unverified accounts, especially for business users and
                  frequent transactors. The verification status serves as trust
                  signal to both PayPal and potential business partners.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-yellow-500" />
                      Transaction Benefits
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Higher sending and receiving limits
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        No withdrawal restrictions
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Faster payment processing
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-blue-500" />
                      Security Features
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Enhanced fraud protection
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Reduced risk of account limitations
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">✓</span>
                        Dispute resolution support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full text-left p-4 font-medium hover:bg-gray-50 flex items-center justify-between bg-gray-50">
                      <span className="text-gray-900">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform text-gray-500 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="p-4 bg-white border-t border-gray-200">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion Section */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Why Choose Our Service
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  When you purchase a verified PayPal account from us, you&apos;re
                  not just buying access - you&apos;re investing in peace of mind.
                  Our accounts come with complete documentation and full support
                  to ensure seamless integration with your business operations.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h4 className="font-semibold text-blue-800 mb-3">
                    Our Guarantee:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 mr-2 text-blue-600" />
                      <span>100% Verified Accounts</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-blue-600" />
                      <span>24-Hour Delivery</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" />
                      <span>Dedicated Support</span>
                    </div>
                  </div>
                </div>
                <p className="font-medium">
                  Ready to enhance your payment processing capabilities? Select
                  your package above and complete your order today. For bulk
                  orders or custom requirements, please contact our support team
                  for personalized assistance.
                </p>
              </div>
            </div>

            {/* Related Products */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                Related Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedProducts.map((product, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-20 rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-white font-bold text-sm text-center px-2">
                        {product.name.split(" ")[1]}
                      </div>
                    </div>
                    <h3 className="text-sm font-medium text-gray-900 hover:text-blue-600 mb-1 flex-grow">
                      {product.name}
                    </h3>
                    <div className="text-sm text-gray-600 mb-3">
                      {product.price}
                    </div>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-medium transition-colors">
                      View Options
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
