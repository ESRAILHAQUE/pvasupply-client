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
import RelatedProducts from "../../../components/shared/RelatedProducts";
import CustomDropdown from "../../../components/shared/CustomDropdown";

export default function BuyGoogleVoiceAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  // Dropdown options
  const dropdownOptions = [
    { value: "basic", label: "Basic Package - $15.00" },
    { value: "premium", label: "Premium Package - $150.00" },
    { value: "enterprise", label: "Enterprise Package - $400.00" },
  ];

  const features = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Google Voice Accounts Available",
    "2019-2024 Years Google Voice Accounts Available",
    "PVA New/Old Accounts Are Available",
    "100% Safe & Private",
  ];

  const productFeatures = [
    "USA & European Local IP Created Accounts",
    "Real Phone Number Used for Verification",
    "Unique Username Google Voice Accounts Available",
    "2019-2023 Years Google Voice Accounts are Available",
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
    "Your relationship with Google Voice",
    "Using Google Voice services",
    "Content in Google Voice services",
    "Software in Google Voice services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How Google Voice handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy Google Voice Accounts.png"
                alt="Buy Google Voice Accounts"
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
                <span className="text-gray-900">Buy Google Voice Accounts</span>
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
                Buy Google Voice Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$15.00 - $400.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  Google Voice accounts? Do you need USA and European countries
                  real phone number verified old Google Voice accounts? Or do
                  you want to buy old PVA Google Voice accounts with cheap
                  price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged Google
                  Voice accounts are indispensable for your business or personal
                  use. We provide instant delivery at PVA Supply.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged Google Voice Accounts
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
                  Buy Google Voice Accounts
                </h3>

                <div className="space-y-3">
                  {/* Custom Dropdown */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Choose an option
                    </label>
                    <CustomDropdown
                      options={dropdownOptions}
                      selectedOption={selectedOption}
                      onOptionSelect={setSelectedOption}
                      placeholder="Select an option"
                    />
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
                  Buy Verified Google Voice Accounts: Secure
                </h2>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-700 mb-4">
                      When thinking about communication tools, security is very
                      important. Purchasing verified Google Voice accounts gives
                      you a safe way to communicate without putting your
                      personal information at risk.
                    </p>
                    <p className="text-gray-700 mb-4">
                      These accounts are already checked and approved, so you
                      don't need to use your own phone number to set them up.
                      This keeps your main phone number private and safe from
                      being seen by the wrong people.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Using verified accounts also helps protect you from spam
                      and fake messages. You can use the service with
                      confidence, knowing it's a trusted system that keeps your
                      data safe.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Also, these accounts are less likely to be blocked or
                      banned than unverified ones. This makes them more reliable
                      for both personal and business use.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Investing in verified Google Voice accounts improves
                      privacy and makes it easier to handle communication across
                      different platforms.
                    </p>
                  </div>

                  {/* What Are Google Voice Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      What Are Google Voice Accounts?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Google Voice accounts give users a special phone number
                        that can be used for many communication tasks. These
                        accounts are connected to your Google account, making it
                        simple to use with other Google services.
                      </p>
                      <p className="text-gray-700">
                        With Google Voice, you can make calls, send text
                        messages, and receive voicemail—all from one place. This
                        flexibility makes it a good choice for both personal and
                        business use.
                      </p>
                      <p className="text-gray-700">
                        Each account has features like call forwarding, custom
                        voicemail messages, and the option to choose which calls
                        to answer.
                      </p>
                      <p className="text-gray-700">
                        Users also can access their messages from different
                        devices. Whether on a computer or a phone, staying in
                        touch is easy.
                      </p>
                      <p className="text-gray-700">
                        The service is especially popular with people who work
                        from home and need reliable communication tools without
                        the trouble of traditional phone lines.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center my-8">
                    <Image
                      src="/images/long-description-photo/Buy Google Voice Accounts.png"
                      alt="Google Voice Accounts Description"
                      width={500}
                      height={350}
                    />
                  </div>

                  {/* Why Buy from pvasupply Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Why Buy Google Voice Accounts From pvasupply?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When looking to buy Google Voice accounts, pvasupply is
                        a top choice for several reasons. First, they offer
                        verified accounts that are safe and dependable. This
                        means you can use the service without concerns about
                        security or account issues.
                      </p>
                      <p className="text-gray-700">
                        Customer support is also a key feature. They help you
                        with everything from setting up the account to using it,
                        so you never feel lost.
                      </p>
                      <p className="text-gray-700">
                        The pricing is competitive too. You get good value
                        without any hidden costs.
                      </p>
                      <p className="text-gray-700">
                        Their easy-to-use interface makes managing multiple
                        accounts a breeze. Whether you're an individual or
                        running a business, you'll find their services helpful.
                      </p>
                      <p className="text-gray-700">
                        Choose pvasupply for a worry-free and reliable
                        experience when buying Google Voice accounts.
                      </p>
                    </div>
                  </div>

                  {/* Features and Benefits Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Great Features and Benefits of Google Voice Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Google Voice has many features that help with
                        communication. One big advantage is the ability to
                        manage multiple phone numbers from one place. This makes
                        it easy to separate personal and business calls.
                      </p>
                      <p className="text-gray-700">
                        Call forwarding is another great feature. You can get
                        calls on any device, making sure you're always
                        reachable, whether you're at home or on the move.
                      </p>
                      <p className="text-gray-700">
                        Voicemail transcription saves time by turning voice
                        messages into text. This lets you read messages quickly
                        instead of listening to them.
                      </p>
                      <p className="text-gray-700">
                        Also, Google Voice includes free text messaging and
                        low-cost international calls. These options are useful
                        for both individuals and businesses wanting to save
                        money while keeping communication flowing.
                      </p>
                      <p className="text-gray-700">
                        The integration with other Google services makes things
                        even easier for users who already use Google products.
                      </p>
                    </div>
                  </div>

                  {/* 100% Phone Verified Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Buy Google Voice Accounts; 100% Phone Verified Google
                      Voice Accounts For Sell
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        If you're looking to buy Google Voice accounts, consider
                        100% phone verified options. These accounts offer a
                        level of trust that many users want when using virtual
                        communication services.
                      </p>
                      <p className="text-gray-700">
                        Having a verified account means you can use all the
                        features without facing security risks or limits. This
                        is especially helpful for businesses that need
                        dependable communication tools.
                      </p>
                      <p className="text-gray-700">
                        Purchasing these accounts makes the setup process much
                        simpler. You get instant access to features like call
                        forwarding, voicemail transcription, and even text
                        messaging—important tools for smooth operations.
                      </p>
                      <p className="text-gray-700">
                        With many vendors to choose from, it's important to pick
                        one that focuses on real accounts and good customer
                        service. Buying verified Google Voice accounts helps
                        avoid the problems of unverified services and makes your
                        overall experience better.
                      </p>
                    </div>
                  </div>

                  {/* Introduction To Google Voice Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Introduction To Google Voice
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Google Voice is a useful tool that helps people manage
                        their phone calls, texts, and voicemails. It was started
                        by Google in 2009 and has changed the way people and
                        companies communicate.
                      </p>
                      <p className="text-gray-700">
                        With a Google Voice account, you get one phone number
                        that can work on many devices. This means you don't have
                        to use different numbers for different things. It makes
                        life easier.
                      </p>
                      <p className="text-gray-700">
                        The service also gives you features like voicemail that
                        turns voice messages into text and call screening. These
                        tools help you stay organized and work more efficiently.
                      </p>
                      <p className="text-gray-700">
                        One of the best things about Google Voice is that it
                        works on both computers and phones. This means you can
                        stay connected no matter where you are or which device
                        you're using.
                      </p>
                      <p className="text-gray-700">
                        Whether you're using it for your own needs or for a
                        business, Google Voice can help with different
                        communication tasks in a simple way.
                      </p>
                    </div>
                  </div>

                  {/* Google Voice for Business Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Google Voice for business
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Google Voice for business is a tool that helps companies
                        manage calls, texts, and voicemail all in one place.
                      </p>
                      <p className="text-gray-700">
                        It has features like call forwarding and voicemail
                        transcription, which help keep things organized and make
                        businesses more responsive. This helps maintain good
                        customer service.
                      </p>
                      <p className="text-gray-700">
                        The tool also connects with Google Workspace, which
                        makes it easier for team members to work together.
                        Sharing contacts and setting up meetings becomes
                        simpler.
                      </p>
                      <p className="text-gray-700">
                        Businesses can save money by using Google Voice. It
                        offers a cost-effective solution with helpful features.
                      </p>
                      <p className="text-gray-700">
                        Having a separate business number makes communication
                        look more professional. Customers like knowing there's a
                        clear line between personal and business messages.
                      </p>
                      <p className="text-gray-700">
                        With more people working from home, Google Voice helps
                        them stay connected without being limited by location.
                        The easy-to-use interface helps everyone get used to the
                        tool quickly.
                      </p>
                    </div>
                  </div>

                  {/* Setup Process Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How do you set up a Google Voice account?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Setting up a Google Voice account is simple. First, you
                        need a Google account. If you don't have one, creating
                        it is easy and takes just a few minutes.
                      </p>
                      <p className="text-gray-700">
                        Once you're logged in, go to the Google Voice website or
                        download the app. Click on "Get Started" and pick a
                        phone number that works for you. You can choose from
                        numbers in different areas or even custom numbers.
                      </p>
                      <p className="text-gray-700">
                        Next, verify your current phone number by entering it.
                        You will get a code by text or call to confirm.
                      </p>
                      <p className="text-gray-700">
                        After that, set up your preferences like voicemail
                        messages and how you want to receive notifications. You
                        can also set up call forwarding and screening.
                      </p>
                      <p className="text-gray-700">
                        Once everything is set, you can start making calls and
                        sending texts with your new Google Voice account.
                      </p>
                    </div>
                  </div>

                  {/* US Availability Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Is Google Voice only for the US?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Google Voice mainly works in the United States. It gives
                        you a special phone number that can be used for calls,
                        texts, and managing voicemail.
                      </p>
                      <p className="text-gray-700">
                        However, people from other countries can use Google
                        Voice, but they need a US phone number to sign up first.
                      </p>
                      <p className="text-gray-700">
                        Once you have an account, you can use Google Voice
                        anywhere. This is good for people who travel or live
                        abroad and want to stay in touch without expensive
                        roaming fees.
                      </p>
                      <p className="text-gray-700">
                        It's important to remember that some features might not
                        be available outside the US. While basic features work
                        everywhere, some advanced ones are only for US users.
                      </p>
                      <p className="text-gray-700">
                        If you're planning to use Google Voice outside the US,
                        check the available features and make sure it works with
                        your local phone services.
                      </p>
                    </div>
                  </div>

                  {/* Security Features Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Security Features
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Keeping your information safe is very important when
                        using a communication tool. Google Voice has strong
                        security features to protect your data.
                      </p>
                      <p className="text-gray-700">
                        Two-factor authentication adds a layer of protection.
                        Every time you log in from a new location, you get a
                        code on your phone to confirm your identity.
                      </p>
                      <p className="text-gray-700">
                        Call screening lets you see who is calling before you
                        answer. You can hear the caller's name and decide
                        whether to answer. This helps you avoid unwanted calls.
                      </p>
                      <p className="text-gray-700">
                        You can also block numbers that are bothering you. Just
                        a few clicks and they're gone.
                      </p>
                      <p className="text-gray-700">
                        Google Voice also encrypts your voice calls, so your
                        conversations stay private and aren't heard by others.
                        These features help you use the service safely and
                        confidently.
                      </p>
                    </div>
                  </div>

                  {/* Customizing Preferences Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Customizing Your Preferences
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Customizing your Google Voice preferences lets you make
                        the service fit your needs. You can choose how to handle
                        calls, texts, and voicemail.
                      </p>
                      <p className="text-gray-700">
                        Start by adjusting how you get notifications. You can
                        set them to come by email or directly on your phone.
                        This keeps you updated in a way that's right for you.
                      </p>
                      <p className="text-gray-700">
                        Next, set up your voicemail greetings. A personal
                        message can be great for business, while a friendly
                        message works better for personal use.
                      </p>
                      <p className="text-gray-700">
                        You can also set up call forwarding so that your calls
                        go to multiple devices. This way, you never miss an
                        important call.
                      </p>
                      <p className="text-gray-700">
                        Take advantage of the blocking feature to stop unwanted
                        numbers. This helps you focus on the messages and calls
                        that matter.
                      </p>
                      <p className="text-gray-700">
                        Google Voice is flexible and can work well for both
                        personal and professional use, making it a great tool
                        for different lifestyles and needs.
                      </p>
                    </div>
                  </div>
                </div>

                <RelatedProducts
                  currentProduct="Buy Google Voice Accounts"
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
      </div>
    </div>
  );
}
