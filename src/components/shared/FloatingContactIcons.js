"use client";

import React, { useState } from "react";
import {
  MessageCircle,
  X,
  Phone,
  Mail,
  Send,
  MessageSquare,
  MessageCircleIcon,
} from "lucide-react";

export default function FloatingContactIcons() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const contactMethods = [
    {
      name: "WhatsApp",
      icon: "whatsapp",
      color: "bg-green-500",
      href: "https://wa.me/19796330236",
      text: "+1 (979) 633-0236",
    },
    {
      name: "Telegram",
      icon: "send",
      color: "bg-blue-500",
      href: "https://t.me/pvasupply",
      text: "@pvasupply",
    },
    {
      name: "Email",
      icon: "mail",
      color: "bg-red-500",
      href: "mailto:pvasupply0@gmail.com",
      text: "pvasupply0@gmail.com",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Collapsed State - Single Icon */}
      {isCollapsed ? (
        <button
          onClick={() => setIsCollapsed(false)}
          className="w-14 h-14 bg-purple-500 hover:bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse">
          <MessageCircle
            className={`w-8 h-8 transition-transform duration-300 ${
              isCollapsed ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      ) : (
        /* Expanded State - All Icons */
        <div className="space-y-3 animate-in slide-in-from-bottom-2 duration-500">
          {/* Contact Icons */}
          <div className="space-y-3">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${method.color} w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl group relative animate-in slide-in-from-bottom-2 `}
                style={{ animationDelay: `${index * 100}ms` }}
                title={method.text}>
                {method.icon === "whatsapp" && (
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                )}
                {method.icon === "send" && <Send className="w-8 h-8" />}
                {method.icon === "mail" && <Mail className="w-8 h-8" />}

                {/* Tooltip */}
                <div className="absolute right-14 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
                  {method.text}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
                </div>
              </a>
            ))}
          </div>

          {/* Close Button - At Bottom */}
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setIsCollapsed(true)}
              className="w-14 h-14 bg-purple-500 hover:bg-purple-600 text-white rounded-full flex items-center justify-center transition-all  hover:scale-110 shadow-lg animate-in slide-in-from-bottom-2 duration-300"
              style={{ animationDelay: `${contactMethods.length * 100}ms` }}>
              <X
                className={`w-8 h-8 transition-transform duration-500 ${
                  isCollapsed ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
