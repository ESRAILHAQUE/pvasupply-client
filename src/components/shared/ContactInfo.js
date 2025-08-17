"use client";

import React from "react";

export default function ContactInfo({ className = "" }) {
  return (
    <div className={`bg-gray-50 rounded-lg p-4 ${className}`}>
      <h3 className="font-semibold text-gray-900 mb-2">
        If you want to more information just contact now. 24 Hours Reply/Contact
      </h3>
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Email:</span>
          <a
            href="mailto:pvasupply0@gmail.com"
            className="text-red-600 hover:text-red-800 underline transition-colors duration-200">
            pvasupply0@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Telegram:</span>
          <a
            href="https://t.me/pvasupply"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 underline transition-colors duration-200">
            @pvasupply
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">WhatsApp:</span>
          <a
            href="https://wa.me/19796330236"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:text-red-800 underline transition-colors duration-200">
            +1 (979) 633-0236
          </a>
        </div>
      </div>
    </div>
  );
}
