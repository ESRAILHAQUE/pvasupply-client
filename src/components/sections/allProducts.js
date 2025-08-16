"use client";
import { Crown } from "lucide-react";
import { motion } from "framer-motion";

function AllProducts() {
  // Animation variants - Right to Left
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      x: -5,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      transition: { type: "spring", stiffness: 400 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white py-16 px-6 text-center overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, delay: 1 }}>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-green-400 rounded-full mix-blend-multiply filter blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-red-400 rounded-full mix-blend-multiply filter blur-xl"></div>
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}>
        {/* Logo/Badge */}
        <motion.div
          className="flex justify-center items-center space-x-3 mb-6"
          variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-xl shadow-md"
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 15px 30px rgba(239, 68, 68, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 400 }}>
            <Crown className="w-5 h-5 text-white" />
          </motion.div>
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Premium Services
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight"
          variants={itemVariants}>
          Your Trusted Source for <br className="hidden md:block" />
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}>
            Premium Digital Accounts
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}>
          High-quality social media accounts, verified bank details, and secure
          crypto wallets - all with premium support and guaranteed delivery.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
          variants={containerVariants}>
          {[
            { number: "10K+", label: "Customers" },
            { number: "24/7", label: "Support" },
            { number: "100%", label: "Verified" },
            { number: "1Hr", label: "Delivery" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100"
              variants={statsVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300 },
              }}>
              <div className="text-2xl font-bold text-green-600">
                {stat.number}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}>
          <motion.button
            className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-10 rounded-full text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer inline-flex items-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap">
            <span>Browse All Products</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}>
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </motion.button>

          <motion.a
            href="https://wa.me/message/LMBKKSKH7RLRG1?src=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer inline-flex items-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap">
            <span>Contact Us</span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}>
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}>
          {[
            "SSL Secure Checkout",
            "Instant Delivery",
            "24/7 Customer Support",
          ].map((badge, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              whileHover={{ scale: 1.05, color: "#8B2C2B" }}
              transition={{ duration: 0.3 }}>
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AllProducts;
