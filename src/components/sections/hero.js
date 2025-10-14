"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=400&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=500&h=400&fit=crop&crop=center",
  ];

  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const goToSlide = (idx) => setCurrent(idx);

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev + 1) % images.length),
    [images.length]
  );

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Animation variants
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
      y: 100,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.68, -0.55, 0.265, 1.55], // Bounce easing
        type: "spring",
        stiffness: 100,
        damping: 8,
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <motion.section
      className="w-full bg-[#FAFCFC] py-8 md:py-16 lg:py-20 overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      {/* Simple CSS Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-200/20 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-red-200/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      {/* Content with higher z-index */}
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="inline-block text-sm md:text-base font-semibold mb-3 text-gray-700 bg-gray-100 px-4 py-2 rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300">
              Best Quality Products | Service
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8B2C2B] mb-4 leading-tight">
              Welcome to <br className="hidden sm:block" />
              <span
                className="bg-gradient-to-r from-[#8B2C2B] to-[#A0353F] bg-clip-text text-transparent"
                style={{
                  backgroundSize: "200% 200%",
                  animation: "gradientShift 3s ease-in-out infinite",
                }}>
                pvasupply.com
              </span>
            </h1>

            <p className="text-gray-600 text-base md:text-lg lg:text-xl mb-6 md:mb-8 leading-relaxed">
              Pvasupply is one of the world&#39;s most trusted and reliable
              social media marketing, Banking, Crypto&#39;s and others accounts
              services provider. You will get here all kinds of business
              promotion services. Find here
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                All Services
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  ➤
                </span>
              </button>

              <a
                href="https://wa.me/message/LMBKKSKH7RLRG1?src=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-lg flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Contact Us
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  ➤
                </span>
              </a>
            </div>
          </div>

          {/* Right Slider */}
          <div className="flex-1 w-full max-w-lg">
            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl overflow-hidden shadow-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              {/* Navigation Arrows */}
              <button
                aria-label="Previous slide"
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg z-20 transition-all duration-300 hover:scale-110">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-700">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg z-20 transition-all duration-300 hover:scale-110">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-gray-700">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                      idx === current
                        ? "transform translate-x-0"
                        : idx < current
                        ? "transform -translate-x-full"
                        : "transform translate-x-full"
                    }`}>
                    <Image
                      src={img}
                      alt={`Service slide ${idx + 1}`}
                      fill
                      className="object-cover"
                      priority={idx === 0}
                    />

                    {/* Overlay with service info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="text-xs md:text-sm font-semibold bg-black/30 px-2 py-1 rounded">
                          {idx === 0 && "Social Media Marketing"}
                          {idx === 1 && "Banking Services"}
                          {idx === 2 && "Crypto Solutions"}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Now Badge */}
              <div className="absolute top-4 right-4 bg-black text-white text-xs md:text-sm font-bold px-3 py-1 rounded-full">
                ORDER NOW
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-4 md:mt-6 gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    current === idx
                      ? "bg-gray-800 scale-125"
                      : "bg-gray-400 hover:bg-gray-600"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        :global(.animate-blob) {
          animation: blob 7s infinite;
        }

        :global(.animation-delay-2000) {
          animation-delay: 2s;
        }

        :global(.animation-delay-4000) {
          animation-delay: 4s;
        }
      `}</style>
    </motion.section>
  );
}
