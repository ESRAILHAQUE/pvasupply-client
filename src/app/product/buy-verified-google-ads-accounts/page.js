"use client";

import React, { useState } from "react";
import Image from "next/image";
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
import { useCart } from "../../../contexts/CartContext";
import PriceDisplay from "../../../components/shared/PriceDisplay";
import ContactInfo from "../../../components/shared/ContactInfo";
import RelatedProducts from "../../../components/shared/RelatedProducts";

export default function BuyVerifiedGoogleAdsAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const { addToCart } = useCart();

  const features = [
    "Guaranteed Satisfaction & Recovery",
    "Email and Phone Access",
    "Fully KYC Verified",
    "Personal & Business Accounts Available",
    "Phone Verified",
    "Real Gmail Accounts Used",
    "Pre-Activated & Ready for Ads",
    "Billing & Payment Methods Verified",
  ];

  const productFeatures = [
    "Guaranteed Satisfaction & Recovery",
    "Email and Phone Access",
    "Fully KYC Verified",
    "Personal & Business Accounts Available",
    "Phone Verified",
    "Real Gmail Accounts Used",
    "Pre-Activated & Ready for Ads",
    "Billing & Payment Methods Verified",
  ];

  const contactInfo = [
    { icon: "Email", text: "pvasupply0@gmail.com" },
    { icon: "Telegram", text: "@pvasupply" },
    { icon: "WhatsApp", text: "+1 (979) 633-0236" },
  ];

  const sidebarItems = [
    "Introduction",
    "Your relationship with Google Ads",
    "Using Google Ads services",
    "Content in Google Ads services",
    "Software in Google Ads services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Google Ads handles government requests for user information",
  ];

  const handleAddToCart = () => {
    if (!selectedOption) {
      alert("Please select an option first");
      return;
    }

    const optionPrices = {
      basic: 220,
      premium: 270,
      enterprise: 320,
    };

    const product = {
      id: "google-ads-accounts",
      name: "Buy Verified Google Ads Accounts",
      option: selectedOption,
      price: optionPrices[selectedOption],
      quantity: quantity,
      category: "Advertising Accounts",
    };

    addToCart(product);
    alert("Added to cart successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Left Section - Promotional Banner */}
          <div className="relative h-[600px] flex items-center justify-center">
            <Image
              src="/images/All Product/Buy Verified Google Ads Accounts.png"
              alt="Buy Verified Google Ads Accounts"
              width={1200}
              height={1200}
              className="max-w-full max-h-full object-contain"
              priority
            />
          </div>

          {/* Right Section - Product Details */}
          <div className="space-y-6">
            {/* Category Link */}
            <div className="mb-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Advertising Accounts
              </a>
            </div>

            {/* Product Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Buy Verified Google Ads Accounts
            </h1>

            {/* Price Range */}
            <PriceDisplay price="$220.00 - $320.00" className="mb-4" />

            {/* Product Description */}
            <p className="text-gray-600 mb-6">
              Looking to purchase a fully verified Google Ads account?
              You&apos;re in the right place! At https://pvasupply.com/, we
              provide 100% secure and reliable verified Google Ads accounts,
              ready for running high-performance ad campaigns. These accounts
              allow you to create and manage ads effortlessly while staying
              compliant with Google&apos;s policies.
            </p>
            <p className="text-gray-600 mb-6">
              Our verified Google Ads accounts are perfect for businesses,
              marketers, and advertisers looking to scale campaigns without
              restrictions.
            </p>

            {/* Features List */}
            <div className="space-y-2 mb-6">
              <h3 className="text-base font-bold text-gray-900 mb-3">
                Features of Verified Google Ads Accounts:
              </h3>
              {productFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <TickSign className="w-4 h-4" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <ContactInfo className="mb-6" />

            {/* Product Options */}
            <div className="bg-white rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Choose Your Package
              </h3>

              {/* Option Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Package
                </label>
                <div className="relative">
                  <select
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option value="">Choose an option</option>
                    <option value="basic">Basic Package - $220.00</option>
                    <option value="premium">Premium Package - $270.00</option>
                    <option value="enterprise">
                      Enterprise Package - $320.00
                    </option>
                  </select>
                </div>
              </div>

              {/* Quantity Selection */}
              <div className="mb-6">
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
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section - Tabs */}
        <div className="bg-white rounded-lg shadow-sm border">
          {/* Tab Navigation */}
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
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Buy Verified Google Ads Accounts
                </h3>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-600 mb-4">
                      In today's digital world, having a strong online presence
                      is very important for businesses. If you're trying to
                      improve your advertising on Google, you may have heard
                      about something called verified Google Ads accounts. But
                      what does it really mean to have a verified account? And
                      why should you think about buying one?
                    </p>
                    <p className="text-gray-600 mb-4">
                      Picture yourself entering a marketplace where your ads can
                      reach more people and give better results—because you've
                      got an account that fits Google's strict rules. The idea
                      of buying a verified account might seem strange, but it
                      comes with benefits that could really help your business
                      get noticed.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Ready to take your ad strategy to the next level? Let's
                      explore everything you need to know about buying verified
                      Google Ads accounts and how they can make your campaigns
                      more successful.
                    </p>
                  </div>

                  {/* Buy Verified Google Ads Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Buy Verified Google Ads Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        When you buy a verified Google Ads account, you're not
                        just getting a username and password—you're gaining
                        access to a powerful tool that's already been approved
                        by Google. These accounts are checked to make sure they
                        follow all the right rules and standards.
                      </p>
                      <p className="text-gray-600">
                        This means you'll face fewer problems when setting up
                        your ads. You won't have to wait for long periods while
                        your account is being verified.
                      </p>
                      <p className="text-gray-600">
                        A verified account can also make your ads more
                        trustworthy. People tend to believe in accounts that are
                        already established, which might lead to more clicks and
                        better results.
                      </p>
                      <p className="text-gray-600">
                        With this confidence, you can test new strategies and
                        push your ads further without worrying about being shut
                        down by Google's rules.
                      </p>
                    </div>
                  </div>

                  {/* Why Buy Verified Google Ads Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Why Buy Verified Google Ads Accounts?
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Purchasing a verified Google Ads account can help you
                        save time and effort in running your campaigns. These
                        accounts are already active, which means they have a
                        history that makes them more reliable in Google's eyes.
                      </p>
                      <p className="text-gray-600">
                        Using a verified account can help you avoid some of the
                        challenges new advertisers face. You'll get fewer limits
                        and increased trust when running your ads. This gives
                        you an advantage right from the start without having to
                        build trust from scratch.
                      </p>
                      <p className="text-gray-600">
                        Also, verified accounts often lead to better ad
                        positions and lower costs for each click. Many
                        advertisers have seen better results because the account
                        is reliable.
                      </p>
                      <p className="text-gray-600">
                        For businesses that want quick results or those entering
                        tough markets, getting a verified account could be a
                        smart move to consider.
                      </p>
                    </div>
                  </div>

                  {/* Description Image */}
                  <div className="flex justify-center my-8">
                    <Image
                      src="/images/long-description-photo/Buy Verified Google Ads Accounts.png"
                      alt="Google Ads Accounts Description"
                      width={500}
                      height={350}
                      className="rounded-lg shadow-lg"
                    />
                  </div>

                  {/* Benefits Of Verified Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Benefits Of Verified Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verified Google Ads accounts offer several advantages
                        that can help your advertising efforts.
                      </p>
                      <p className="text-gray-600">
                        These accounts usually have a good track record and are
                        seen as trustworthy. This helps your ads appear in
                        better positions and reach the right people more easily.
                      </p>
                      <p className="text-gray-600">
                        Additionally, verified accounts often have fewer
                        restrictions on what you can do with your campaign. You
                        might have more freedom when choosing keywords, setting
                        budgets, and targeting specific groups.
                      </p>
                      <p className="text-gray-600">
                        Another big benefit is better support from Google. With
                        a verified account, you're more likely to get help
                        quickly if something goes wrong with your ads.
                      </p>
                      <p className="text-gray-600">
                        Having a verified status also helps your brand.
                        Customers feel more confident about doing business with
                        companies that have gone through the verification
                        process.
                      </p>
                      <p className="text-gray-600">
                        These accounts give you access to more advanced tools
                        and features in Google Ads, which can help you make your
                        campaigns even better over time.
                      </p>
                    </div>
                  </div>

                  {/* How to Buy Verified Google Ads Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      How to Buy Verified Google Ads Accounts
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Buying a verified Google Ads account doesn't have to be
                        complicated if you follow the right steps. First, search
                        online for trusted vendors. Look for companies with good
                        reviews and a proven history.
                      </p>
                      <p className="text-gray-600">
                        Once you find a seller, take the time to check their
                        offerings carefully. Make sure the accounts they offer
                        follow Google's policies. This way, you can avoid
                        problems like your account being blocked later.
                      </p>
                      <p className="text-gray-600">
                        When you're ready to buy, look at the payment options.
                        Reliable sellers usually have secure ways to handle
                        money, which protects your information.
                      </p>
                      <p className="text-gray-600">
                        After receiving the account, contact customer support if
                        you need help setting it up or improving your ad
                        performance. A good provider will support you even after
                        the purchase, helping you make the most of your new
                        account.
                      </p>
                      <p className="text-gray-600">
                        Remember to keep an eye on how your campaigns are doing
                        after you start using the account. This helps make sure
                        your investment is working well for you over time.
                      </p>
                    </div>
                  </div>

                  {/* What to Watch Out For Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      What to Watch Out For
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        When buying verified Google Ads accounts, it's important
                        to stay alert. There are signs that may show a seller is
                        not trustworthy or trying to scam you.
                      </p>
                      <p className="text-gray-600">
                        First, look at the seller's reputation. Read reviews and
                        comments from other buyers. If there are few reviews or
                        if all the feedback is too positive, that might be a
                        warning sign.
                      </p>
                      <p className="text-gray-600">
                        Be careful if the price seems too low. Although saving
                        money is good, very low prices can mean the account
                        isn't of good quality.
                      </p>
                      <p className="text-gray-600">
                        Also, check if the account comes with proper documents
                        and proof that it's real. Accounts without clear proof
                        of legitimacy may cause problems later on.
                      </p>
                      <p className="text-gray-600">
                        You should also be aware of using an account that has
                        been linked to suspicious activities. This can harm your
                        ads' visibility and how trustworthy they appear to
                        Google.
                      </p>
                    </div>
                  </div>

                  {/* What Are Verified Google Ads Accounts Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      What Are Verified Google Ads Accounts?
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verified Google Ads accounts are accounts that have gone
                        through a strict check by Google. This means the account
                        follows Google's rules and guidelines.
                      </p>
                      <p className="text-gray-600">
                        These accounts usually have a history of real ad
                        spending, which adds to their credibility. A verified
                        status shows that the account is reliable to others.
                      </p>
                      <p className="text-gray-600">
                        Moreover, these accounts might have access to extra
                        features that regular accounts don't. This can include
                        better targeting options and better support from Google.
                      </p>
                      <p className="text-gray-600">
                        In short, having a verified account means you are not
                        just meeting requirements, but also showing a commitment
                        to high-quality advertising within the Google system.
                      </p>
                    </div>
                  </div>

                  {/* How Do Verified Accounts Improve Ad Performance Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      How Do Verified Accounts Improve Ad Performance?
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        Verified accounts help your ads perform better by
                        creating trust. When people see your ads come from a
                        verified account, they are more likely to click. This
                        can increase the number of people who engage with your
                        ads.
                      </p>
                      <p className="text-gray-600">
                        Additionally, verified accounts often have access to
                        special tools and features that are not available to
                        non-verified accounts. These can help you reach the
                        right audience better.
                      </p>
                      <p className="text-gray-600">
                        Google also gives more priority to ads from verified
                        accounts. These ads might show up more often in search
                        results, giving your campaigns more visibility.
                      </p>
                      <p className="text-gray-600">
                        People who use verified accounts usually find that their
                        cost per click is lower. This is because they get better
                        Quality Scores, which means their ads are more relevant
                        and more likely to convert.
                      </p>
                    </div>
                  </div>

                  {/* Frequently Asked Questions Section */}
                  <div>
                    <h4 className="text-md font-semibold text-gray-900 mb-3">
                      Frequently Asked Questions
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        When buying verified Google Ads accounts, lots of
                        questions come up. Understanding these can help you feel
                        more confident.
                      </p>
                      <p className="text-gray-600">
                        One common question is if these accounts are really safe
                        and follow Google's rules. Researching trustworthy
                        sellers can make a big difference.
                      </p>
                      <p className="text-gray-600">
                        Another question is about the cost. Prices can differ a
                        lot based on the account's history and how well it has
                        performed. It's a good idea to compare different options
                        before making a choice.
                      </p>
                      <p className="text-gray-600">
                        Many buyers also ask how soon they can see results after
                        getting an account. While some changes might happen
                        right away, the best results usually take time as you
                        work on your ad strategies.
                      </p>
                      <p className="text-gray-600">
                        People often want to know what kind of support they get
                        after buying the account. Good sellers usually offer
                        help with managing the ads, so you get the most value
                        from your investment.
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
                        In the world of digital marketing, having a verified
                        Google Ads account can really change things for the
                        better. It gives you access to many benefits that can
                        improve your online presence and help your brand stand
                        out.
                      </p>
                      <p className="text-gray-600">
                        Getting these accounts requires careful attention and
                        smart choices. Knowing what makes an account verified is
                        key to making sure you get a quality service without
                        risking your money. By being informed about possible
                        problems and learning how to find reliable sellers, you
                        set yourself up for success in your advertising efforts.
                      </p>
                      <p className="text-gray-600">
                        Whether you're a professional marketer or just starting
                        out, investing in a verified Google Ads account could be
                        one of the best decisions you make this year. With
                        better ad performance and advanced targeting options at
                        your disposal, the opportunities are endless. Now is the
                        time to take control of your advertising plans—consider
                        getting a verified Google Ads account today!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Products */}
                <RelatedProducts
                  currentProduct="Buy Verified Google Ads Accounts"
                  category="Social Accounts"
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
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <TickSign className="w-4 h-4" />
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
