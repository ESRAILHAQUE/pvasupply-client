"use client";
import { motion } from "framer-motion";

export default function RealDocuments() {
  // Animation variants - Left to Right
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

  const floatingVariants = {
    animate: {
      x: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      x: 10,
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: { type: "spring", stiffness: 400 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center py-16 bg-[#FFFFFF] text-center overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}>
      <motion.div variants={floatingVariants} animate="animate">
        <motion.p
          className="text-sm sm:text-base md:text-lg font-semibold text-gray-900"
          variants={itemVariants}>
          Specialists For All Phone & Real Documents Verified Accounts
        </motion.p>

        <motion.p
          className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mt-2"
          variants={itemVariants}>
          All Types of Regular, Elite & Verified Reviews
        </motion.p>

        <motion.h1
          className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-black leading-tight"
          variants={itemVariants}
          whileInView={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background:
              "linear-gradient(90deg, #000 0%, #8B2C2B 50%, #000 100%)",
            backgroundSize: "200% 200%",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          We are Provider All Types PVA 7 Real{" "}
          <br className="hidden sm:block" />
          Documents Verified Accounts
        </motion.h1>

        <motion.p
          className="mt-4 text-base sm:text-lg font-semibold text-gray-700"
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            color: "#8B2C2B",
          }}
          transition={{ type: "spring", stiffness: 300 }}>
          Get $10% Less on Your Every Order
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}>
          <motion.button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-md transition duration-300 cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap">
            VISIT OUR SHOP
          </motion.button>

          <motion.a
            href="https://wa.me/message/LMBKKSKH7RLRG1?src=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-md transition duration-300 cursor-pointer inline-flex items-center justify-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap">
            <motion.svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </motion.svg>
            WhatsApp
          </motion.a>

          <motion.a
            href="https://t.me/pvasupply"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sm sm:text-base font-semibold shadow-md transition duration-300 cursor-pointer inline-flex items-center justify-center"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap">
            <motion.svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.25-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </motion.svg>
            Telegram
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
