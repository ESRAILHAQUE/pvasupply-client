"use client";

import React from "react";

export default function ContactInfo({ className = "" }) {
  return (
    <div className={`p-4 ${className}`}>
      <h3 className="font-semibold text-gray-800 mb-2">
        If you want to more information just contact now-
      </h3>
      <p className="text-gray-800 mb-4">24 Hours Reply/Contact</p>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-800">➤ Email:</span>
          <a
            href="mailto:pvasupply0@gmail.com"
            className="text-pink-500 hover:text-pink-700 underline transition-colors duration-200">
            pvasupply0@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">➤ Telegram:</span>
          <a
            href="https://t.me/pvasupply"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 underline transition-colors duration-200">
            @pvasupply
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-800">➤ WhatsApp:</span>
          <a
            href="https://wa.me/19796330236"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-700 underline transition-colors duration-200">
            +1 (979) 633-0236
          </a>
        </div>
      </div>
    </div>
  );
}
