"use client";
import { Clock, ShieldCheck, BadgePercent, RotateCw } from "lucide-react";
import { motion } from "framer-motion";

function Services() {
  // Animation variants - Bottom to Top
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
      y: 100,
      scale: 0.8,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      y: -5,
      transition: { type: "spring", stiffness: 400 },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-3, 3, -3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const serviceItems = [
    {
      icon: Clock,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      title: "Instant Delivery",
      description: "Instant delivery within 5 min",
      delay: 0,
    },
    {
      icon: ShieldCheck,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      title: "Quality Service",
      description: "100% Guarantee",
      delay: 0.1,
    },
    {
      icon: BadgePercent,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      title: "Huge Savings",
      description: "At Lowest Price",
      delay: 0.2,
    },
    {
      icon: RotateCw,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      title: "Easy Returns",
      description: "No Questions Asked",
      delay: 0.3,
    },
  ];

  return (
    <div className="w-full bg-[#f0f8f8] overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 py-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        {serviceItems.map((service, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-4 group relative"
            variants={itemVariants}
            whileHover={{
              y: -15,
              transition: { type: "spring", stiffness: 300 },
            }}>
            <motion.div
              className={`${service.bgColor} p-3 rounded-full mb-3 relative overflow-hidden`}
              variants={iconVariants}
              whileHover="hover"
              animate="animate"
              variants={floatingVariants}
              style={{ animationDelay: `${service.delay}s` }}>
              <motion.div
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              <service.icon
                className={`w-6 h-6 ${service.iconColor} relative z-10`}
              />
            </motion.div>

            <motion.h3
              className="font-semibold text-lg mb-1 text-black"
              whileHover={{ color: "#8B2C2B" }}
              transition={{ duration: 0.3 }}>
              {service.title}
            </motion.h3>

            <motion.p
              className="text-gray-600 text-sm"
              whileHover={{ color: "#4B5563" }}
              transition={{ duration: 0.3 }}>
              {service.description}
            </motion.p>

            {/* Hover effect background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-xl -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileHover={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Services;
