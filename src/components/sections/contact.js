"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEmailHandler } from "@/hooks/useEmailHandler";

function Contact() {
  const { handleEmailClick, copyEmailToClipboard } = useEmailHandler();

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
    hidden: { opacity: 0, y: 50, scale: 0.8 },
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
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: { type: "spring", stiffness: 400 },
    },
    tap: { scale: 0.95 },
  };

  const waveVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      x: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full flex items-center justify-center py-12 sm:py-16 md:py-18 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[60vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/images/bg.png')",
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Simple CSS Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-green-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob-contact" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob-contact animation-delay-2s" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-teal-400/10 rounded-full mix-blend-multiply filter blur-xl animate-blob-contact animation-delay-4s" />
      </div>

      {/* Subtle animated overlay elements */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
      </motion.div>

      {/* Main content container */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6, margin: "-100px" }}>
        {/* Services subtitle */}
        <motion.div
          className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          variants={itemVariants}>
          <span className="text-white/90 text-sm font-medium tracking-wide">
            🚀 Premium Digital Services
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8"
          variants={itemVariants}>
          <span className="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
            Connect With Our
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-300 via-emerald-400 to-teal-500 bg-clip-text text-transparent">
            Expert Team
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-white/80 text-lg sm:text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}>
          Get instant support for verified accounts, digital services, and
          business solutions
        </motion.p>

        {/* Contact buttons */}

        {/* Alternative Contact Methods */}
      </motion.div>

      {/* Animated Bottom wave decoration */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        variants={waveVariants}
        animate="animate">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 sm:h-16 md:h-20">
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="rgba(255,255,255,0.1)"></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="rgba(255,255,255,0.1)"></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="rgba(255,255,255,0.2)"></path>
        </svg>
      </motion.div>

      <style jsx>{`
        @keyframes blob-contact {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(50px, -40px) scale(1.2);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.8);
          }
        }

        :global(.animate-blob-contact) {
          animation: blob-contact 8s infinite;
        }

        :global(.animation-delay-2s) {
          animation-delay: 2s;
        }

        :global(.animation-delay-4s) {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Contact;
