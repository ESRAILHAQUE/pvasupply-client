"use client";
import { Crown } from "lucide-react";

function AllProducts() {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-16 px-6 text-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-green-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Logo/Badge */}
        <div className="flex justify-center items-center space-x-3 mb-6">
          <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-xl shadow-md">
            <Crown className="w-5 h-5 text-white" />
          </div>
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Premium Services
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          Your Trusted Source for <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600">
            Premium Digital Accounts
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          High-quality social media accounts, verified bank details, and secure
          crypto wallets - all with premium support and guaranteed delivery.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">10K+</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Customers
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">24/7</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Support
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">100%</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Verified
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="text-2xl font-bold text-green-600">1Hr</div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">
              Delivery
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-full text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer inline-flex items-center">
          <span>Browse All Products</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </button>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            SSL Secure Checkout
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Instant Delivery
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            24/7 Customer Support
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
