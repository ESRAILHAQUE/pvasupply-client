"use client";
import { useState } from "react";
import { useEmailHandler } from "@/hooks/useEmailHandler";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Shield,
  CheckCircle,
  Star,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { handleEmailClick } = useEmailHandler();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      content: "pvasupply0@gmail.com",
      description: "24/7 Support Available",
      action: "Send Email",
      onClick: (e) =>
        handleEmailClick(
          e,
          "pvasupply0@gmail.com",
          "Contact Inquiry",
          "Hi PVA Supply Team,\n\nI would like to get in touch with you.\n\nPlease contact me at your earliest convenience.\n\nBest regards"
        ),
    },
    {
      icon: MessageCircle,
      title: "Telegram",
      content: "@pvasupply",
      description: "Instant Messaging",
      action: "Chat Now",
      href: "https://t.me/pvasupply",
      external: true,
    },
    {
      icon: Globe,
      title: "WhatsApp",
      content: "Direct Chat",
      description: "Quick Response",
      action: "Start Chat",
      href: "https://wa.me/message/LMBKKSKH7RLRG1?src=qr",
      external: true,
    },
  ];

  const features = [
    { icon: Shield, text: "100% Secure & Private" },
    { icon: Clock, text: "24/7 Customer Support" },
    { icon: CheckCircle, text: "Instant Response" },
    { icon: Star, text: "Premium Quality Service" },
  ];

  const services = [
    "Social Media Accounts",
    "Bank Accounts",
    "Crypto Accounts",
    "Verification Services",
    "Custom Solutions",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-30"></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let&apos;s Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Amazing Together
              </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 leading-relaxed">
              Ready to take your business to the next level? Our team of experts
              is here to help you succeed.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                  <feature.icon className="w-6 h-6 mb-2 text-yellow-300" />
                  <span className="text-xs sm:text-sm text-center text-blue-100">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 lg:py-24 -mt-16 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="group">
                  {method.external ? (
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden">
                      <div className="p-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          <method.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {method.title}
                        </h3>
                        <p className="text-2xl font-semibold text-blue-600 mb-2">
                          {method.content}
                        </p>
                        <p className="text-gray-600 mb-4">
                          {method.description}
                        </p>
                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300">
                          {method.action}
                        </span>
                      </div>
                    </a>
                  ) : (
                    <button
                      onClick={method.onClick}
                      className="w-full h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden text-left">
                      <div className="p-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                          <method.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {method.title}
                        </h3>
                        <p className="text-2xl font-semibold text-blue-600 mb-2">
                          {method.content}
                        </p>
                        <p className="text-gray-600 mb-4">
                          {method.description}
                        </p>
                        <span className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-lg group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300">
                          {method.action}
                        </span>
                      </div>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have a specific question or need a custom solution? Fill out the
                form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. We&apos;ll get back to you
                      soon!
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interest *
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          aria-required="true"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white">
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option
                              key={index}
                              value={service
                                .toLowerCase()
                                .replace(/\s+/g, "-")}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                        placeholder="Tell us about your project or inquiry..."></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      aria-live="polite"
                      aria-busy={isLoading}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      {isLoading ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" aria-hidden="true" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-10 text-white">
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email Address</h4>
                        <p className="text-blue-100">pvasupply0@gmail.com</p>
                        <p className="text-sm text-blue-200">
                          24/7 Support Available
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Telegram</h4>
                        <p className="text-blue-100">@pvasupply</p>
                        <p className="text-sm text-blue-200">
                          Instant Response
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">WhatsApp</h4>
                        <p className="text-blue-100">Direct Chat</p>
                        <p className="text-sm text-blue-200">Quick Support</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Choose Us?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        Professional & Reliable Service
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        24/7 Customer Support
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Fast Response Time</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">Competitive Pricing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">
                        100% Satisfaction Guarantee
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait any longer. Contact us today and let&apos;s
              discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={(e) =>
                  handleEmailClick(
                    e,
                    "pvasupply0@gmail.com",
                    "Get Started Inquiry",
                    "Hi PVA Supply Team,\n\nI'm ready to get started with your services.\n\nPlease provide me with more information.\n\nBest regards"
                  )
                }
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Get Started Now
              </button>
              <a
                href="https://t.me/pvasupply"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Chat on Telegram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
