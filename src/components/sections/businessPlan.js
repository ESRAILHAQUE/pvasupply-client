"use client";
import Image from "next/image";
import React from "react";

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
    <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
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
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
        }
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10 shadow-lg"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % images.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10 shadow-lg"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide counter */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  );
};

const BusinessPlan = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Find The Right Plan For Your
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Business
          </h2>
          <div className="flex justify-center mt-6">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-8 h-2 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Image Slider */}
        <div className="max-w-6xl mx-auto">
          <ImageSlider images={planImages} />
        </div>
      </div>
    </div>
  );
};

export default BusinessPlan;
