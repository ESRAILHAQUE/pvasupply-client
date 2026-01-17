"use client";
import React from "react";
import { Shield, Cloud } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Our Company
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We always provide high-quality service that guarantee, safe and
                100% customer satisfaction. Your results are our goal and your
                satisfaction is our priority. To that end, we look forward to
                providing the best quality service to our customers. Our
                accounts are fully verified and stick reviews service from US,
                UK, CA, AU more countrys.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mt-4">
                We are available 24/7 customer support for any problem or if you
                want more information.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {/* Verified Accounts */}
              <div className="flex items-start space-x-4 transition-transform duration-300 hover:translate-x-2">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:rotate-3">
                    <Shield className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Verified Accounts
                  </h3>
                  <p className="text-gray-600">
                    You will get fully verified accounts with original documents
                    for citizens of USA, UK, and CA countries.
                  </p>
                </div>
              </div>

              {/* Replacement Guarantee */}
              <div className="flex items-start space-x-4 transition-transform duration-300 hover:translate-x-2">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:-rotate-3">
                    <Cloud className="w-6 h-6 text-blue-600" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Replacement Guarantee
                  </h3>
                  <p className="text-gray-600">
                    We provide our 100% authentic and legit services. If there
                    is still a problem with the account or review service
                    provided by us, we will replace it immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/homepage/ourcompany.png"
                alt="About Our Company - PVA Supply Team and Services"
                width={500}
                height={375}
                className="w-full max-w-lg h-auto rounded-2xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                quality={85}
                loading="lazy"
              />

              {/* Floating Social Media Icons */}
              <div
                className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125 hover:rotate-12"
                aria-hidden="true">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </div>

              <div
                className="absolute top-8 -right-4 w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125 hover:-rotate-12"
                aria-hidden="true">
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.09.109.105.2.077.311-.09.362-.293 1.175-.334 1.334-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.943-1.378l-.411 1.571c-.168.646-.616 1.459-1.194 2.041C9.556 23.669 10.75 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.017.001z" />
                </svg>
              </div>

              <div
                className="absolute bottom-4 -left-6 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125 hover:rotate-12"
                aria-hidden="true">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>

              <div
                className="absolute top-1/2 right-8 w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125 hover:-rotate-12"
                aria-hidden="true">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
