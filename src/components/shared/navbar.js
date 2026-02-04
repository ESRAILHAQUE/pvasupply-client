"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  ShoppingCart,
  Menu,
  X,
  Mail,
  Send,
  MessageCircle,
} from "lucide-react";
import { useCart } from "../../contexts/CartContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    // Cart click handled by Link component
  };

  const navItems = [
    { name: "Home", href: "/", isActive: true, hasDropdown: false },
    {
      name: "Social Accounts",
      href: "/social",
      isActive: false,
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Buy Old Gmail Accounts",
          href: "/product/buy-old-gmail-accounts",
        },
        {
          name: "Buy Google Voice Accounts",
          href: "/product/buy-google-voice-accounts",
        },
        { name: "Buy Naver Accounts", href: "/product/buy-naver-accounts" },
        {
          name: "Buy LinkedIn Accounts",
          href: "/product/buy-linkedin-accounts",
        },
        {
          name: "Buy Old Yahoo Accounts",
          href: "/product/buy-old-yahoo-accounts",
        },
        {
          name: "Buy Verified Google Ads Accounts",
          href: "/product/buy-verified-google-ads-accounts",
        },
      ],
    },
    {
      name: "Crypto Accounts",
      href: "/crypto",
      isActive: false,
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Buy Verified Binance Accounts",
          href: "/product/buy-verified-binance-accounts",
        },
        {
          name: "Buy Verified Bybit Accounts",
          href: "/product/buy-verified-bybit-accounts",
        },
        {
          name: "Buy Verified Coinbase Accounts",
          href: "/product/buy-verified-coinbase-accounts",
        },
        {
          name: "Buy Verified Crypto.com Accounts",
          href: "/product/buy-verified-crypto-com-accounts",
        },
      ],
    },
    {
      name: "Bank Accounts",
      href: "/product/bank-accounts",
      isActive: false,
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Buy Verified PayPal Accounts",
          href: "/product/buy-verified-paypal-accounts",
        },
        {
          name: "Buy Verified Cash App Accounts",
          href: "/product/buy-verified-cash-app-accounts",
        },
        {
          name: "Buy Verified Chime Bank Accounts",
          href: "/product/buy-verified-chime-bank-accounts",
        },
        {
          name: "Buy Verified Wise Accounts",
          href: "/product/buy-verified-wise-accounts",
        },
        // Stripe temporarily disabled - uncomment to re-enable
        // {
        //   name: "Buy Verified Stripe Accounts",
        //   href: "/product/buy-verified-stripe-accounts",
        // },
        {
          name: "Buy Verified Payoneer Accounts",
          href: "/product/buy-verified-payoneer-accounts",
        },
        {
          name: "Buy Verified Skrill Accounts",
          href: "/product/buy-verified-skrill-accounts",
        },
        {
          name: "Buy Verified Go2Bank Accounts",
          href: "/product/buy-verified-go2bank-accounts",
        },
        {
          name: "Buy Verified Venmo Accounts",
          href: "/product/buy-verified-venmo-accounts",
        },
        {
          name: "Buy Verified Chase Bank Accounts",
          href: "/product/buy-verified-chase-bank-accounts",
        },
        {
          name: "Buy Verified OnlyFans Accounts",
          href: "/product/buy-verified-onlyfans-accounts",
        },
      ],
    },
    {
      name: "Special Accounts",
      href: "/special-accounts",
      isActive: false,
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Buy Verified Apple Pay Accounts",
          href: "/product/buy-verified-apple-pay-accounts",
        },
        {
          name: "Buy Walmart Seller Account",
          href: "/product/buy-walmart-seller-account",
        },
      ],
    },
    {
      name: "Contact Us",
      href: "/contact-us",
      isActive: false,
      hasDropdown: false,
    },
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="w-full bg-gray-900 text-gray-100 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="font-medium tracking-wide">
            Welcome To pvasupply.com
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://wa.me/19796330236"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-green-400 transition-colors"
              title="WhatsApp: +1 (979) 633-0236">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">+1 (979) 633-0236</span>
            </a>
            <a
              href="https://t.me/pvasupply"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-400 transition-colors"
              title="Telegram: @pvasupply">
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">@pvasupply</span>
            </a>
            <a
              href="mailto:pvasupply0@gmail.com"
              className="flex items-center gap-1 hover:text-red-400 transition-colors"
              title="Email: pvasupply0@gmail.com">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">pvasupply0@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gradient-to-r from-white to-gray-50 shadow-lg border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3 hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo/logo.png"
                alt="PVA Supply Logo"
                width={180}
                height={56}
                className="object-contain"
                priority
                quality={100}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => {
                const isDropdownActive =
                  item.hasDropdown &&
                  item.dropdownItems?.some((d) => pathname?.startsWith(d.href));
                const isSelfActive =
                  !item.hasDropdown && pathname === item.href;
                const isActive = Boolean(isDropdownActive || isSelfActive);

                return (
                  <div key={item.name} className="relative group">
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center space-x-1 py-2 px-1 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 relative ${
                        isActive
                          ? "text-green-500"
                          : "text-gray-600 hover:text-green-500"
                      }`}>
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                    </Link>
                    {/* Animated underline */}
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}></div>

                    {/* Dropdown Menu */}
                    {item.hasDropdown && (
                      <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 z-50">
                        {item.dropdownItems.map((dropdownItem) => {
                          const isDropdownItemActive = pathname?.startsWith(
                            dropdownItem.href
                          );
                          return (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              aria-current={
                                isDropdownItemActive ? "page" : undefined
                              }
                              className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                                isDropdownItemActive
                                  ? "bg-green-50 text-green-600"
                                  : "text-gray-700 hover:bg-green-50 hover:text-green-600"
                              }`}>
                              {dropdownItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <Link
                href="/cart"
                aria-label={`Shopping cart${getCartCount() > 0 ? ` with ${getCartCount()} items` : ', empty'}`}
                className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                <ShoppingCart className="w-5 h-5" aria-hidden="true" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse" aria-label={`${getCartCount()} items in cart`}>
                    {getCartCount()}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                {isMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className={`lg:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-96 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}>
            <div className="py-4 space-y-2 border-t border-gray-200">
              {navItems.map((item) => {
                const isDropdownActive =
                  item.hasDropdown &&
                  item.dropdownItems?.some((d) => pathname?.startsWith(d.href));
                const isSelfActive =
                  !item.hasDropdown && pathname === item.href;
                const isActive = Boolean(isDropdownActive || isSelfActive);

                return (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-green-50 text-green-600 border-l-4 border-green-500"
                          : "text-gray-600 hover:bg-gray-50 hover:text-green-500"
                      }`}
                      onClick={() => setIsMenuOpen(false)}>
                      <span className="font-medium">{item.name}</span>
                      {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                    </Link>
                    {item.hasDropdown && (
                      <div className="pl-6 space-y-1 mt-1">
                        {item.dropdownItems.map((dropdownItem) => {
                          const isDropdownItemActive = pathname?.startsWith(
                            dropdownItem.href
                          );
                          return (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              aria-current={
                                isDropdownItemActive ? "page" : undefined
                              }
                              className={`block py-2 px-4 text-sm rounded-lg transition-colors duration-200 ${
                                isDropdownItemActive
                                  ? "bg-green-50 text-green-600"
                                  : "text-gray-600 hover:bg-green-50 hover:text-green-600"
                              }`}
                              onClick={() => setIsMenuOpen(false)}>
                              {dropdownItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      </nav>
    </div>
  );
}
