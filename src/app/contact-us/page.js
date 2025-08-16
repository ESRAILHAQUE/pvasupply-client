"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useEmailHandler } from "@/hooks/useEmailHandler";

// Custom SVG Icons
const MapPinIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z"
    />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

const EnvelopeIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const UserIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
);

const BuildingOfficeIcon = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 21h16.5M4.5 3h15l-.75 18h-13.5L4.5 3zM7.5 6v3m0 3v3m6-9v3m0 3v3"
    />
  </svg>
);

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleEmailClick } = useEmailHandler();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: "Visit Us",
      content: "123 Business Street, Suite 100\nNew York, NY 10001",
    },
    {
      icon: EnvelopeIcon,
      title: "Email Us",
      content: "pvasupply0@gmail.com\n24/7 Support Available",
    },
    {
      icon: ClockIcon,
      title: "Business Hours",
      content: "24/7 Customer Support\nInstant Response",
    },
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to discuss how we can help you achieve your
            marketing goals.
          </p>
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div
              onClick={(e) =>
                handleEmailClick(
                  e,
                  "pvasupply0@gmail.com",
                  "Contact Inquiry",
                  "Hi PVA Supply Team,\n\nI would like to get in touch with you.\n\nPlease contact me at your earliest convenience.\n\nBest regards"
                )
              }
              className="bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
              <div className="text-center">
                <EnvelopeIcon className="w-8 h-8 mx-auto mb-3 text-white" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-sm opacity-90">pvasupply0@gmail.com</p>
              </div>
            </div>

            <a
              href="https://t.me/pvasupply"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-center">
                <svg
                  className="w-8 h-8 mx-auto mb-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.25-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">Telegram</h3>
                <p className="text-sm opacity-90">@pvasupply</p>
              </div>
            </a>

            <a
              href="https://wa.me/message/LMBKKSKH7RLRG1?src=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white bg-opacity-10 border border-white border-opacity-30 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="text-center">
                <svg
                  className="w-8 h-8 mx-auto mb-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.87 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm opacity-90">Chat Now</p>
              </div>
            </a>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="px-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <select className="px-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white text-white">
              <option value="">Select a Service</option>
              <option value="facebook-ads">Facebook Ads</option>
              <option value="video-production">Video Production</option>
              <option value="social-media">Social Media Management</option>
              <option value="website">Website Development</option>
            </select>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="px-4 py-3 rounded bg-white bg-opacity-10 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white md:col-span-2"></textarea>
            <button
              type="submit"
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded hover:bg-gray-100 transition duration-300 md:col-span-2">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
