"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useEmailHandler } from "@/hooks/useEmailHandler";

// Simple Image Slider Component
const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div
      className="relative w-full overflow-hidden rounded-2xl shadow-2xl"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px rgba(0,0,0,0.2)",
      }}
      transition={{ type: "spring", stiffness: 300 }}>
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              width={1200}
              height={600}
              src={image.url}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <motion.button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10 shadow-lg"
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>
      <motion.button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10 shadow-lg"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>

      {/* Slide counter */}
      <motion.div
        className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}>
        {currentSlide + 1} / {images.length}
      </motion.div>
    </motion.div>
  );
};

const BusinessPlan = () => {
  // Animation variants - Rotate and Slide with Particle Background
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const sliderVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: 15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const contactVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      rotate: 2,
      boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
      transition: { type: "spring", stiffness: 400 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const particleVariants = {
    animate: {
      y: [-30, 30, -30],
      x: [-20, 20, -20],
      rotate: [0, 180, 360],
      scale: [1, 1.2, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Generate random particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  const { handleEmailClick } = useEmailHandler();

  // Array of real business plan pricing images - relevant to verified accounts and trading
  const planImages = [
    {
      url: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=1200&h=600&fit=crop&crop=center",
      alt: "Binance Trading Interface and Verified Account Dashboard",
    },
    {
      url: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=1200&h=600&fit=crop&crop=center",
      alt: "Cryptocurrency Exchange Verification Process",
    },
    {
      url: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&h=600&fit=crop&crop=center",
      alt: "Digital Account Verification and KYC Process",
    },
    {
      url: "https://images.unsplash.com/photo-1644088379091-d574269d422f?w=1200&h=600&fit=crop&crop=center",
      alt: "Trading Account Setup and Pricing Plans",
    },
    {
      url: "https://images.unsplash.com/photo-1642790595397-7047dc98fa72?w=1200&h=600&fit=crop&crop=center",
      alt: "Premium Account Features and Business Plans",
    },
    {
      url: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=600&fit=crop&crop=center",
      alt: "Financial Services and Account Verification",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Particle Background Effect */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-200/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
          }}
          variants={particleVariants}
          animate="animate"
        />
      ))}

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        {/* Header */}
        <motion.div className="text-center mb-16" variants={headerVariants}>
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            Find The Right Plan For Your
          </motion.h1>
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800"
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            Business
          </motion.h2>
          <motion.div
            className="flex justify-center mt-6"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Image Slider */}
        <motion.div
          className="max-w-6xl mx-auto mb-16"
          variants={sliderVariants}>
          <ImageSlider images={planImages} />
        </motion.div>

        {/* Contact Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={contactVariants}>
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6"
            whileHover={{
              scale: 1.02,
              color: "#1E40AF",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            Ready to Get Started?
          </motion.h3>
          <motion.p
            className="text-gray-600 text-lg mb-8"
            whileHover={{ color: "#4B5563" }}
            transition={{ duration: 0.3 }}>
            Contact us to discuss your business needs and get a customized plan
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/message/LMBKKSKH7RLRG1?src=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 relative overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap">
              {/* Button shine effect */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <svg
                className="w-5 h-5 mr-2 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              <span className="relative z-10">WhatsApp Chat</span>
            </motion.a>

            <motion.a
              href="https://t.me/pvasupply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 relative overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap">
              {/* Button shine effect */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <svg
                className="w-5 h-5 mr-2 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.25-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              <span className="relative z-10">Telegram</span>
            </motion.a>

            <motion.a
              href="mailto:pvasupply0@gmail.com?subject=Business%20Plan%20Inquiry&body=Hi%20PVA%20Supply%20Team,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20my%20business%20needs%20and%20get%20a%20customized%20plan.%0D%0A%0D%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0D%0A%0D%0ABest%20regards"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105 relative overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={(e) =>
                handleEmailClick(
                  e,
                  "pvasupply0@gmail.com",
                  "Business Plan Inquiry",
                  "Hi PVA Supply Team,\n\nI would like to discuss my business needs and get a customized plan.\n\nPlease contact me at your earliest convenience.\n\nBest regards"
                )
              }>
              {/* Button shine effect */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <svg
                className="w-5 h-5 mr-2 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="relative z-10">Email Us</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BusinessPlan;
