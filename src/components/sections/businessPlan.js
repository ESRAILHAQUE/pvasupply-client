"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEmailHandler } from "@/hooks/useEmailHandler";
import {
  Rocket,
  Shield,
  Zap,
  Star,
  Users,
  TrendingUp,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const BusinessPlan = () => {
  const { handleEmailClick } = useEmailHandler();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-15, 15, -15],
      x: [-10, 10, -10],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Success Stats Data
  const successStats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Happy Customers",
      color: "from-gray-600 to-black",
    },
    {
      icon: Shield,
      number: "99.9%",
      label: "Success Rate",
      color: "from-black to-gray-800",
    },
    {
      icon: Zap,
      number: "24/7",
      label: "Support Available",
      color: "from-gray-700 to-black",
    },
    {
      icon: Award,
      number: "5+",
      label: "Years Experience",
      color: "from-gray-800 to-gray-600",
    },
  ];

  // Service Features
  const serviceFeatures = [
    {
      icon: Rocket,
      title: "Lightning Fast Delivery",
      description: "Get your verified accounts within minutes, not days",
      color: "from-gray-600 to-black",
    },
    {
      icon: Shield,
      title: "100% Verified Accounts",
      description:
        "All accounts come with complete verification and documentation",
      color: "from-black to-gray-800",
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Verified accounts from all major countries and regions",
      color: "from-gray-700 to-black",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      description: "Scale your business with our premium account services",
      color: "from-gray-800 to-gray-600",
    },
  ];

  return (
    <motion.div
      className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{
        opacity: 0,
        x: -300,
        scale: 0.8,
        rotateY: -15,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        rotateY: 0,
      }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 1.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 60,
        damping: 25,
      }}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-200/40 to-gray-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-50"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-300/30 to-black/20 rounded-full mix-blend-multiply filter blur-xl opacity-40"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-100/30 to-gray-200/20 rounded-full mix-blend-multiply filter blur-2xl opacity-40"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        {/* Header Section */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}>
            <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent">
              Why Choose PVA Supply?
            </span>
           
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}>
            Join thousands of satisfied customers who trust us for their
            verified account needs. Experience the difference with our premium
            service and unmatched reliability.
          </motion.p>
        </motion.div>

        {/* Success Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}>
          {successStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}>
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 bg-gradient-to-r ${stat.color} shadow-xl`}
                variants={pulseVariants}
                animate="animate"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
                  transition: { type: "spring", stiffness: 400 },
                }}>
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3
                className="text-3xl font-bold text-black mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}>
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}>
          {serviceFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-gray-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                backgroundColor: "rgba(0,0,0,0.02)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300 },
              }}>
              <motion.div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 bg-gradient-to-r ${feature.color} shadow-lg`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}>
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BusinessPlan;
