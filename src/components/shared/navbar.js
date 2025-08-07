"use client";
import { useState } from "react";
import { ChevronDown, ShoppingCart, Menu, X, Crown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    setCartCount((prev) => (prev + 1) % 10);
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
          href: "/pruduct/buy-google-voice-accounts",
        },
        { name: "Buy Naver Accounts", href: "/product/buy-naver-accounts" },
        { name: "Buy Twitter Accounts", href: "/product/buy-twitter-accounts" },
        { name: "Buy WeChat Accounts", href: "/product/buy-wechat-accounts" },
        {
          name: "Buy LinkedIn Accounts",
          href: "/product/buy-linkedin-accounts",
        },
        { name: "Buy Reddit Accounts", href: "/product/buy-reddit-accounts" },
        { name: "Buy SSN Number", href: "/product/buy-ssn-number" },
      ],
    },
    {
      name: "Crypto Accounts",
      href: "/bank",
      isActive: false,
      hasDropdown: true,
      dropdownItems: [
        {
          name: "Buy verified binance accounts",
          href: "/bank/buy-verified-binance-accounts",
        },
        {
          name: "Buy Verified Bybit Accounts",
          href: "/product/buy-verified-bybit-accounts",
        },
        { name: "EU product Accounts", href: "/product/eu" },
        { name: "Buy Verified Coinbase Accounts", href: "/product/buy-verified-coinbase-accounts" },
 
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
        {
          name: "Buy Verified Stripe Accounts",
          href: "/product/buy-verified-stripe-accounts",
        },
        {
          name: "Buy Verified Revolut Accounts",
          href: "/product/buy-verified-revolut-accounts",
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
          href: "/product/Buy Verified Chase Bank Accounts",
        },
        {
          name: "Buy Verified OnlyFans Accounts",
          href: "/product/buy-verified-onlyfans-accounts",
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
    <nav className="bg-gradient-to-r from-white to-gray-50 shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-red-500 to-red-600 p-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl lg:text-2xl font-bold text-gray-800">
              PVA<span className="text-green-500">Supp</span>ly
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`flex items-center space-x-1 py-2 px-1 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 relative ${
                    item.isActive
                      ? "text-green-500"
                      : "text-gray-600 hover:text-green-500"
                  }`}>
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </a>
                {/* Animated underline */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 ${
                    item.isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}></div>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 z-50">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <button
              onClick={handleCartClick}
              className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}>
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-200 ${
                    item.isActive
                      ? "bg-green-50 text-green-600 border-l-4 border-green-500"
                      : "text-gray-600 hover:bg-gray-50 hover:text-green-500"
                  }`}
                  onClick={() => setIsMenuOpen(false)}>
                  <span className="font-medium">{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                {item.hasDropdown && (
                  <div className="pl-6 space-y-1 mt-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}