"use client";
import { motion } from "framer-motion";

function Purchase() {
  // Animation variants - Scale and Fade with Bubble Background
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

  const leftContentVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      scale: 0.8,
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

  const rightContentVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      scale: 0.8,
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

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
      transition: { type: "spring", stiffness: 400 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const bubbleVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      scale: [1, 1.1, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Generate random bubbles
  const bubbles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    delay: Math.random() * 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
  }));

  return (
    <div className="relative py-20 flex items-center justify-center overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      {/* Dark Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Content Container */}
      <div className="bg-slate-800/90 text-white px-4 py-14 sm:px-6 lg:px-8 relative overflow-hidden rounded-2xl mx-4 backdrop-blur-md border border-white/10">
        {/* Bubble Background Effect */}
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.x}%`,
              top: `${bubble.y}%`,
              animationDelay: `${bubble.delay}s`,
            }}
            variants={bubbleVariants}
            animate="animate"
          />
        ))}

        <motion.div
          className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center sm:text-left"
            variants={leftContentVariants}
            whileHover={{
              scale: 1.02,
              textShadow: "0 0 20px rgba(255,255,255,0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}>
            Get 25% Off On Your First Purchase!
          </motion.h1>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            variants={rightContentVariants}>
            <motion.a
              href="https://wa.me/message/LMBKKSKH7RLRG1?src=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap relative overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap">
              {/* Button shine effect */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <motion.svg
                className="w-4 h-4 relative z-10"
                fill="currentColor"
                viewBox="0 0 20 20"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}>
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </motion.svg>
              <span className="relative z-10">Buy Now</span>
            </motion.a>

            <motion.a
              href="https://t.me/pvasupply"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap relative overflow-hidden group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap">
              {/* Button shine effect */}
              <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

              <motion.svg
                className="w-4 h-4 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}>
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.25-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </motion.svg>
              <span className="relative z-10">Telegram</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Purchase;
