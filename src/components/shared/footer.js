"use client";

import { useEmailHandler } from "@/hooks/useEmailHandler";
import ParticlesBackground from "./ParticlesBackground";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const { handleEmailClick } = useEmailHandler();

  return (
    <footer className="relative overflow-hidden bg-black text-white py-14 px-4 sm:px-6 lg:px-8">
      {/* Particles background */}
      <ParticlesBackground
        density={110}
        color="rgba(255,255,255,0.18)"
        lineColor="rgba(255,255,255,0.12)"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              We provide verified accounts and reliable digital solutions to
              help you start and scale faster. Quality service, quick delivery,
              and 24/7 support you can trust.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-2xl font-extrabold mb-4">Useful Links</h4>
            <ul className="space-y-4 text-lg">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/social"
                  className="text-gray-300 hover:text-white transition-colors">
                  Social Accounts
                </Link>
              </li>
              <li>
                <Link
                  href="/crypto"
                  className="text-gray-300 hover:text-white transition-colors">
                  Crypto Accounts
                </Link>
              </li>
              <li>
                <Link
                  href="/product/bank-accounts"
                  className="text-gray-300 hover:text-white transition-colors">
                  Bank Accounts
                </Link>
              </li>
              <li>
                <Link
                  href="/special-accounts"
                  className="text-gray-300 hover:text-white transition-colors">
                  Special Accounts
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Payment Methods (image) */}
          <div>
            <h4 className="text-2xl font-extrabold mb-4">Payment Methods</h4>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
              <Image
                src="/images/payment_method.png"
                alt="Supported payment methods"
                width={640}
                height={240}
                className="w-full h-auto object-contain"
                priority={false}
              />
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-2xl font-extrabold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-lg">
              <li className="text-yellow-300">Online Support • Worldwide</li>
              <li>
                <a
                  href="https://wa.me/19796330236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors">
                  WhatsApp: +1 (979) 633-0236
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/pvasupply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors">
                  Telegram: @pvasupply
                </a>
              </li>
              <li>
                <a
                  href="mailto:pvasupply0@gmail.com"
                  onClick={(e) => handleEmailClick(e, "pvasupply0@gmail.com")}
                  className="hover:text-purple-300 transition-colors">
                  Email: pvasupply0@gmail.com
                </a>
              </li>
              <li className="text-green-400">Office Time: 24/7</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PVA Supply. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
