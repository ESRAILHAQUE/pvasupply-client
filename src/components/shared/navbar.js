"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              PVA Supply
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-blue-600">
              Services
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-800 hover:text-blue-600">
              Portfolio
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-800 hover:text-blue-600">
              Home
            </Link>
            <Link
              href="/services"
              className="block py-2 text-gray-800 hover:text-blue-600">
              Services
            </Link>
            <Link
              href="/portfolio"
              className="block py-2 text-gray-800 hover:text-blue-600">
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-800 hover:text-blue-600">
              About
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
