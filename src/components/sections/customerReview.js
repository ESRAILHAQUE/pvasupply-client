"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import * as THREE from "three";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MessageCircle,
  Send,
  Mail,
  Quote,
  Shield,
  Award,
  Users,
  Clock,
} from "lucide-react";

const CustomerReview = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const shapesRef = useRef(null);
  const animationIdRef = useRef(null);
  const autoPlayRef = useRef(null);

  // Customer reviews data
  const reviews = [
    {
      id: 1,
      name: "Jane Doe",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      review:
        "I absolutely love this product! It works so well. I love that it. I'm super impressed with the quality for the price! And the delivery was real quick! Thank you so much",
      date: "2 weeks ago",
      verified: true,
      location: "New York, USA",
      role: "Frequent Member",
    },
    {
      id: 2,
      name: "Mike Sendler",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Great site PVA Supply, used several times, simple and user friendly interface, prices are reasonable. I bought accounts, everything works well, they are filled with high quality.",
      date: "1 week ago",
      verified: true,
      location: "London, UK",
      role: "Verified Buyer",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Excellent service and support! The team is very responsive and professional. I've been using their services for months and never had any issues.",
      date: "3 days ago",
      verified: true,
      location: "Toronto, Canada",
      role: "Premium Member",
    },
    {
      id: 4,
      name: "David Chen",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Outstanding quality accounts! Fast delivery and excellent customer support. PVA Supply has become my go-to platform for all verified accounts.",
      date: "5 days ago",
      verified: true,
      location: "Sydney, Australia",
      role: "Business Customer",
    },
    {
      id: 5,
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review:
        "Amazing experience! The accounts are exactly as described and the customer service is top-notch. Highly recommend PVA Supply to anyone looking for verified accounts.",
      date: "1 week ago",
      verified: true,
      location: "Los Angeles, USA",
      role: "VIP Member",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
      }, 4000); // Change every 4 seconds
    };

    const stopAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };

    startAutoPlay();

    // Cleanup on unmount
    return () => {
      stopAutoPlay();
    };
  }, [reviews.length]);

  // Animation variants
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
      },
    },
  };

  // Three.js Floating Geometric Shapes
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // Create floating geometric shapes
    const shapes = new THREE.Group();
    shapesRef.current = shapes;

    // Create different geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.ConeGeometry(0.5, 1, 16),
      new THREE.TorusGeometry(0.5, 0.2, 16, 32),
      new THREE.OctahedronGeometry(0.5),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({
        color: 0x6b7280,
        transparent: true,
        opacity: 0.1,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x374151,
        transparent: true,
        opacity: 0.1,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x1f2937,
        transparent: true,
        opacity: 0.1,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x111827,
        transparent: true,
        opacity: 0.1,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.1,
      }),
    ];

    // Create multiple instances of each shape
    for (let i = 0; i < 15; i++) {
      const geometryIndex = Math.floor(Math.random() * geometries.length);
      const materialIndex = Math.floor(Math.random() * materials.length);

      const mesh = new THREE.Mesh(
        geometries[geometryIndex],
        materials[materialIndex]
      );

      // Random position
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      );

      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      // Random scale
      const scale = Math.random() * 0.3 + 0.3;
      mesh.scale.set(scale, scale, scale);

      shapes.add(mesh);
    }

    scene.add(shapes);

    // Add to DOM
    mountRef.current.appendChild(renderer.domElement);
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "0";
    renderer.domElement.style.pointerEvents = "none";

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (shapesRef.current) {
        shapesRef.current.rotation.x += 0.001;
        shapesRef.current.rotation.y += 0.002;

        // Float shapes in different patterns
        shapesRef.current.children.forEach((shape, index) => {
          shape.position.y += Math.sin(Date.now() * 0.0008 + index) * 0.005;
          shape.position.x += Math.cos(Date.now() * 0.0006 + index) * 0.004;
          shape.rotation.x += 0.005;
          shape.rotation.z += 0.003;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      const currentMountRef = mountRef.current;
      if (currentMountRef && renderer.domElement) {
        currentMountRef.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  // Social media icons data
  const socialIcons = [
    {
      name: "Telegram",
      color: "bg-gradient-to-r from-gray-600 to-gray-800",
      icon: Send,
      href: "https://t.me/pvasupply",
    },
    {
      name: "WhatsApp",
      color: "bg-gradient-to-r from-gray-700 to-black",
      icon: MessageCircle,
      href: "https://wa.me/message/LMBKKSKH7RLRG1?src=qr",
    },
    {
      name: "Email",
      color: "bg-gradient-to-r from-gray-800 to-gray-600",
      icon: Mail,
      href: "mailto:pvasupply0@gmail.com",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="relative w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden max-w-full"
        initial={{
          opacity: 0,
          x: 50,
          scale: 0.95,
          rotateY: 5,
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
        {/* Three.js Floating Shapes Background */}
        <div ref={mountRef} className="absolute inset-0" />

        <motion.div
          className="max-w-7xl mx-auto relative z-10 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {/* Header Section */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}>
              <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-clip-text text-transparent">
                Customer Reviews
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}>
              Discover why thousands of customers trust PVA Supply for their
              verified account needs
            </motion.p>
          </motion.div>

          {/* Reviews Carousel Section */}
          <motion.div
            className="max-w-4xl mx-auto w-full px-4"
            variants={itemVariants}>
            {/* Review Card */}
            <motion.div
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-200 relative overflow-hidden"
              variants={cardVariants}
              whileHover={{
                y: -2,
                scale: 1.005,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300 },
              }}>
              {/* Quote Icon */}
              <motion.div
                className="absolute top-6 left-6 w-10 h-10 bg-black rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}>
                <Quote className="w-5 h-5 text-white" />
              </motion.div>

              {/* Stars */}
              <div className="flex gap-1 mb-8 justify-center">
                {renderStars(reviews[currentReview].rating)}
              </div>

              {/* Review Text */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentReview}
                  className="text-gray-800 text-lg sm:text-xl leading-relaxed min-h-[100px] sm:min-h-[120px] text-center italic font-medium px-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}>
                  &ldquo;{reviews[currentReview].review}&rdquo;
                </motion.p>
              </AnimatePresence>

              {/* Reviewer Info */}
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}>
                  <Image
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover border-4 border-gray-200 shadow-lg"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iNDAiIGZpbGw9IiNGM0Y0RjYiLz4KPGNpcmNsZSBjeD0iNDAiIGN5PSIzMiIgcj0iMTIiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTIwIDY0QzIwIDU2LjI2ODcgMjYuMjY4NyA1MCAzNCA1MEg0NkM1My43MzEzIDUwIDYwIDU2LjI2ODcgNjAgNjRWNjRIMjBaIiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPgo=";
                    }}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.h4
                    key={`name-${currentReview}`}
                    className="font-bold text-gray-900 text-lg sm:text-xl mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}>
                    {reviews[currentReview].name.toUpperCase()}
                  </motion.h4>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.p
                    key={`role-${currentReview}`}
                    className="text-gray-500 text-sm mb-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}>
                    {reviews[currentReview].role}
                  </motion.p>
                </AnimatePresence>

                {reviews[currentReview].verified && (
                  <motion.span
                    className="bg-gradient-to-r from-green-100 to-green-200 text-green-800 text-xs px-3 py-1 rounded-full font-semibold mt-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400 }}>
                    <Shield className="w-3 h-3 inline mr-1" />
                    Verified
                  </motion.span>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.button
                  onClick={prevReview}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Previous review"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}>
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </motion.button>
                <motion.button
                  onClick={nextReview}
                  className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Next review"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}>
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </motion.button>
              </div>

              {/* Review Indicators */}
              <div className="flex justify-center gap-3 mt-6">
                {reviews.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview
                        ? "bg-black shadow-lg"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CustomerReview;
