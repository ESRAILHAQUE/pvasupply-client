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

export default function BuyLinkedInAccounts() {
  const [selectedOption, setSelectedOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const features = [
    "100% customer satisfaction guaranteed",
    "100% non-drop LinkedIn accounts",
    "New LinkedIn accounts with connections",
    "Aged LinkedIn accounts with connections",
    "Active LinkedIn accounts",
    "Very affordable prices",
    "High-quality service",
    "Female and male accounts available",
    "Accounts with real profile pictures",
    "USA, UK, CA, AUS, KHM, COL, DEU, and other countries — 200–500+ connections",
    "24/7 customer support",
  ];

  const productFeatures = [
    "100% customer satisfaction guaranteed",
    "100% non-drop LinkedIn accounts",
    "New LinkedIn accounts with connections",
    "Aged LinkedIn accounts with connections",
    "Active LinkedIn accounts",
    "Very affordable prices",
    "High-quality service",
    "Female and male accounts available",
    "Accounts with real profile pictures",
    "USA, UK, CA, AUS, KHM, COL, DEU, and other countries — 200–500+ connections",
    "24/7 customer support",
  ];

  const contactInfo = [
    { icon: "Email", text: "pvasupply0@gmail.com" },
    { icon: "Telegram", text: "@pvasupply" },
    { icon: "WhatsApp", text: "+1 (979) 633-0236" },
  ];

  const sidebarItems = [
    "Introduction",
    "Your relationship with LinkedIn",
    "Using LinkedIn services",
    "Content in LinkedIn services",
    "Software in LinkedIn services",
    "In-case of problems or disagreements",
    "About these terms",
    "Updates",
    "Definitions",
    "List of services & service-specific additional terms",
    "How LinkedIn handles government requests for user information",
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 lg:p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Section - Promotional Banner */}
            <div className="relative h-[600px] flex items-center justify-center">
              <Image
                src="/images/All Product/Buy LinkedIn Accounts.png"
                alt="Buy LinkedIn Accounts"
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
                <span className="text-gray-900">Buy LinkedIn Accounts</span>
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
                Buy LinkedIn Accounts
              </h1>

              {/* Price */}
              <PriceDisplay price="$30.00 - $250.00" className="mb-4" />

              {/* Product Description */}
              <div className="mb-4 space-y-3">
                <p className="text-gray-700 text-sm">
                  Are you looking for best quality real, active, fresh and aged
                  LinkedIn accounts? Do you need USA and European countries real
                  phone number verified old LinkedIn accounts? Or do you want to
                  buy old PVA LinkedIn accounts with cheap price?
                </p>
                <p className="text-gray-700 text-sm">
                  Phone verified accounts are provided upon request. Aged
                  LinkedIn accounts are indispensable for your business or
                  personal use. We provide instant delivery at Pvasmmpro.
                </p>
                <p className="text-gray-700 text-sm">
                  Don&apos;t wait — get your LinkedIn accounts now from
                  pvasupply.com and enjoy instant access with dependable
                  service.
                </p>
              </div>

              {/* Features */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-gray-900 mb-3">
                  Features of Our PVA Aged LinkedIn Accounts
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
                  Buy LinkedIn Accounts
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
                        <option value="basic">Basic Package - $20.00</option>
                        <option value="premium">
                          Premium Package - $200.00
                        </option>
                        <option value="enterprise">
                          Enterprise Package - $500.00
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
                  Buy verified LinkedIn accounts : and enjoy easy transfers
                  today
                </h2>

                <div className="space-y-6">
                  {/* Introduction */}
                  <div>
                    <p className="text-gray-700 mb-4">
                      Purchasing verified LinkedIn accounts can make your
                      professional journey much easier. With these accounts, you
                      get instant credibility, which helps you stand out in busy
                      industries.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Getting a verified account is simple and fast. You can
                      have your new profile ready to use right away without
                      going through the hassle of starting from scratch.
                    </p>
                    <p className="text-gray-700 mb-4">
                      These accounts come with existing connections,
                      endorsements, and even recommendations. This makes it
                      easier to start networking right from the beginning.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Whether you want to grow your reach or enter new markets,
                      investing in a verified LinkedIn account gives you a head
                      start. It's about working smarter, not harder. Why wait?
                      Take this easy path to improving your professional
                      presence today!
                    </p>
                  </div>

                  {/* Buy LinkedIn accounts; USA, UK, and Canada accounts for sale Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Buy LinkedIn accounts; USA, UK, and Canada accounts for
                      sale
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        If you're looking to buy LinkedIn accounts, you'll find
                        a wide variety available from the USA, UK, and Canada.
                        Each location offers its own benefits that can help you
                        grow your network.
                      </p>
                      <p className="text-gray-700">
                        US accounts often have strong connections in technology
                        and finance. They can be useful if you're targeting
                        American businesses or clients.
                      </p>
                      <p className="text-gray-700">
                        UK accounts are great for connecting with professionals
                        in Europe. With many users active on the platform, they
                        are a good way to expand your reach.
                      </p>
                      <p className="text-gray-700">
                        Canadian accounts give access to a growing economy with
                        a friendly business environment. These profiles show
                        professionalism and openness, making them good for
                        forming partnerships.
                      </p>
                      <p className="text-gray-700">
                        Choosing the right account based on location can greatly
                        affect your engagement and open doors to new
                        opportunities around the world.
                      </p>
                    </div>
                  </div>

                  {/* Benefits of Verified LinkedIn Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Benefits of Verified LinkedIn Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Verified LinkedIn accounts boost your professional
                        presence. They show authenticity, which is important in
                        today's digital world. When people see your account is
                        verified, they are more likely to trust you and connect
                        with you.
                      </p>
                      <p className="text-gray-700">
                        Having a verified account improves your credibility. It
                        shows you've taken steps to build your presence on the
                        platform. This can make you more visible in searches and
                        recommendations, helping others find you easier.
                      </p>
                      <p className="text-gray-700">
                        Networking becomes much easier with a verified profile.
                        You can connect with leaders and peers who might not
                        have engaged with unverified accounts before.
                      </p>
                      <p className="text-gray-700">
                        This added trust opens up chances for collaboration and
                        partnerships that might otherwise stay closed. A
                        verified profile shows professionalism, helping you
                        stand out from competitors and creating a welcoming
                        space for meaningful conversations in your field.
                      </p>
                    </div>
                  </div>

                  {/* Increased Credibility Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Increased Credibility
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Having a verified LinkedIn account greatly increases
                        your credibility in the professional world. When others
                        see your profile is verified, they view you as reliable
                        and trustworthy.
                      </p>
                      <p className="text-gray-700">
                        This trust is especially important when building
                        relationships or looking for job opportunities.
                        Recruiters and business partners are more likely to
                        engage with profiles that show authenticity.
                      </p>
                      <p className="text-gray-700">
                        A credible presence on LinkedIn helps you build your
                        personal brand. It makes you more noticeable among many
                        profiles, helping people remember you.
                      </p>
                      <p className="text-gray-700">
                        Also, having increased credibility leads to more
                        engagement on your posts and articles. People are more
                        likely to connect with someone they believe is genuine
                        and established in their industry.
                      </p>
                      <p className="text-gray-700">
                        Buying verified accounts helps build long-lasting
                        professional relationships based on trust and respect.
                      </p>
                    </div>
                  </div>

                  {/* Better Networking Opportunities Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Better Networking Opportunities
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Buying verified LinkedIn accounts gives you better
                        networking opportunities. With a credible account, you
                        can connect with industry leaders and professionals who
                        may be hard to reach otherwise.
                      </p>
                      <p className="text-gray-700">
                        The platform is built on connections. When your profile
                        is real and verified, others are more likely to talk to
                        you. This leads to meaningful conversations that can
                        start collaborations or mentorship.
                      </p>
                      <p className="text-gray-700">
                        Also, having an established network means you can get
                        introductions faster. Your circle grows quickly as your
                        new connections introduce you to their contacts.
                      </p>
                      <p className="text-gray-700">
                        Whether you are looking for partnerships or job chances,
                        a strong LinkedIn presence sets you up for successful
                        interactions. By investing in an account now, you're
                        positioning yourself well in your professional world.
                        The relationships you form can lead to big career growth
                        over time.
                      </p>
                    </div>
                  </div>

                  {/* Basic Information About the LinkedIn Platform Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Basic Information About the LinkedIn Platform
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        LinkedIn is a professional networking site that started
                        in 2003. It connects millions of professionals
                        worldwide, making it the best place for career growth
                        and business opportunities.
                      </p>
                      <p className="text-gray-700">
                        Users can create profiles that show their skills,
                        experience, and education. This helps others understand
                        what they're good at at a glance.
                      </p>
                      <p className="text-gray-700">
                        The platform has several uses. Job seekers use it to
                        find jobs, while employers search for talent. LinkedIn
                        also has groups, articles, and networking events that
                        help users work together.
                      </p>
                      <p className="text-gray-700">
                        With over 900 million members across different
                        industries, LinkedIn is a big platform for sharing
                        knowledge and growing professionally. Adding images and
                        videos to your profile helps you stand out more than a
                        regular resume ever could.
                      </p>
                      <p className="text-gray-700">
                        Engagement on LinkedIn isn't just about job searching.
                        Many people use it for marketing or sharing ideas in
                        their fields.
                      </p>
                    </div>
                  </div>

                  {/* Why Would You Buy LinkedIn Accounts From pvasupply Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Why Would You Buy LinkedIn Accounts From pvasupply?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When you're looking to buy LinkedIn accounts, pvasupply
                        is a great choice for several reasons. First, we focus
                        on quality. Every account goes through a careful check
                        to make sure it's up to a high standard.
                      </p>
                      <p className="text-gray-700">
                        Our customers like our dependable customer support. Our
                        team is always available to help with any questions or
                        issues you might have about your purchase.
                      </p>
                      <p className="text-gray-700">
                        We also offer a variety of accounts suited for different
                        markets like the USA, UK, and Canada. This wide
                        selection helps you find the right fit for your
                        networking goals.
                      </p>
                      <p className="text-gray-700">
                        Your safety is important to us. We take steps to keep
                        your investment secure by using strict privacy rules and
                        safe payment methods.
                      </p>
                      <p className="text-gray-700">
                        By buying from pvasupply, you also get helpful tips on
                        how to best use LinkedIn after you get your account.
                      </p>
                    </div>
                  </div>

                  {/* Best Place To Buy LinkedIn Accounts in 2025 Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Best Place To Buy LinkedIn Accounts in 2025
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        As we head into 2025, the need for LinkedIn accounts is
                        growing. Both professionals and businesses see the value
                        in using the platform for networking and building their
                        brand.
                      </p>
                      <p className="text-gray-700">
                        Choosing the right place to buy LinkedIn accounts is
                        important. The best sellers offer verified profiles that
                        are real and authentic. Look for providers with a good
                        name and positive feedback from other users.
                      </p>
                      <p className="text-gray-700">
                        Transparency is important when picking a vendor. Getting
                        detailed info on the account's past, connections, and
                        activity can help you understand its quality.
                      </p>
                      <p className="text-gray-700">
                        Also, having quick and friendly customer support can
                        make your buying experience better. You want a seller
                        who can answer your questions fast.
                      </p>
                      <p className="text-gray-700">
                        Look for platforms that provide extra help like tools
                        for automation or marketing advice after your purchase.
                        This can give you more value than just getting an
                        account, helping you use it better in your career.
                      </p>
                    </div>
                  </div>

                  {/* Best Automation Practices After You Buy LinkedIn Accounts Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Best Automation Practices After You Buy LinkedIn Accounts
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        After buying LinkedIn accounts, using automation can
                        make your work easier. Start by using tools that plan
                        and post your content. This way, your messages reach
                        more people without needing constant effort.
                      </p>
                      <p className="text-gray-700">
                        Use automated tools to send personalized messages to
                        your followers. It's a smart way to connect with others
                        and save time.
                      </p>
                      <p className="text-gray-700">
                        Also, consider setting up tools that update your profile
                        automatically. Keeping your profile fresh and relevant
                        helps you stay credible in your field.
                      </p>
                      <p className="text-gray-700">
                        Having access to analytics tools is also important. They
                        help you see what's working and what needs to be
                        adjusted. This lets you make smarter decisions based on
                        real data.
                      </p>
                      <p className="text-gray-700">
                        But remember to keep an eye on the activity of these
                        accounts. Automation should support your real efforts,
                        not replace them. It's there to help you be more
                        efficient while still keeping your interactions
                        authentic on LinkedIn.
                      </p>
                    </div>
                  </div>

                  {/* How Can I Make Sure The Quality Of My Purchased LinkedIn Accounts Is Good Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      How Can I Make Sure The Quality Of My Purchased LinkedIn
                      Accounts Is Good?
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        When you're buying LinkedIn accounts, making sure
                        they're good is very important. Start by checking the
                        seller's reputation. Read reviews and look for feedback
                        from other customers to see if they're reliable.
                      </p>
                      <p className="text-gray-700">
                        Next, look for verified accounts. These usually have a
                        blue checkmark and are more trustworthy in the LinkedIn
                        community.
                      </p>
                      <p className="text-gray-700">
                        Before buying, ask for detailed info about each account.
                        This can include the account's age, number of
                        connections, and how active it is. Accounts that are
                        regularly used and have real interactions are usually
                        higher quality.
                      </p>
                      <p className="text-gray-700">
                        You might also want to test a few accounts before buying
                        a large number. This lets you see how they work in real
                        life and decide if they're right for you.
                      </p>
                      <p className="text-gray-700">
                        Be careful of prices that seem too low. These can often
                        mean lower quality or even scams. Taking time to do your
                        research now can save you from problems later when using
                        the accounts effectively on LinkedIn.
                      </p>
                    </div>
                  </div>

                  {/* Conclusion Section */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Conclusion
                    </h3>
                    <div className="space-y-3">
                      <p className="text-gray-700">
                        Buying LinkedIn accounts can really help your
                        professional life. With verified accounts, you get
                        instant trust and access to more networking
                        opportunities. Whether you need USA, UK, or Canadian
                        profiles, the advantages are clear.
                      </p>
                      <p className="text-gray-700">
                        Choosing trusted sources like pvasupply ensures you get
                        top-quality accounts that fit your needs. As we move
                        into 2025, finding dependable platforms becomes even
                        more important for managing your accounts well.
                      </p>
                      <p className="text-gray-700">
                        Once you've bought your accounts, using smart automation
                        can help you get the most out of your new LinkedIn
                        presence. This makes your work easier and helps you
                        connect better with your network.
                      </p>
                      <p className="text-gray-700">
                        It's important to focus on quality when buying LinkedIn
                        accounts. Doing your research and choosing dependable
                        providers can make a big difference in your success on
                        this powerful platform.
                      </p>
                      <p className="text-gray-700">
                        With these ideas in mind, buying LinkedIn accounts could
                        be a big step forward for professionals looking to boost
                        their careers and grow their networks more effectively.
                      </p>
                    </div>
                  </div>
                </div>

                <RelatedProducts
                  currentProduct="Buy LinkedIn Accounts"
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
