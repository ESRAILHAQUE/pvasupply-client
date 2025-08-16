"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as THREE from "three";
import { useEmailHandler } from "@/hooks/useEmailHandler";

function Contact() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const animationIdRef = useRef(null);
  const { handleEmailClick, copyEmailToClipboard } = useEmailHandler();

  // Three.js Particle System
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
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;

    // Create particles with green theme
    const particleCount = 150;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15; // z

      // Green theme colors
      colors[i * 3] = Math.random() * 0.3 + 0.1; // r (low red)
      colors[i * 3 + 1] = Math.random() * 0.6 + 0.4; // g (high green)
      colors[i * 3 + 2] = Math.random() * 0.4 + 0.2; // b (medium blue)

      sizes[i] = Math.random() * 3 + 1;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Particle material
    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Add to DOM
    mountRef.current.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.zIndex = '0';
    renderer.domElement.style.pointerEvents = 'none';

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (particlesRef.current) {
        particlesRef.current.rotation.x += 0.0005;
        particlesRef.current.rotation.y += 0.001;
        
        // Float particles in wave pattern
        const positions = particlesRef.current.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + i * 0.1) * 0.002;
          positions[i] += Math.cos(Date.now() * 0.0008 + i * 0.1) * 0.001;
        }
        particlesRef.current.geometry.attributes.position.needsUpdate = true;
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

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

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
    <div className="relative w-full bg-gradient-to-br from-green-300 via-green-400 to-green-600 flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Three.js Particle Background */}
      <div ref={mountRef} className="absolute inset-0" />
      
      {/* Animated Background decorative elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
        />
      </motion.div>

      {/* Main content container */}
      <motion.div 
        className="relative z-10 text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6, margin: "-100px" }}
      >
        {/* Services subtitle */}
        <motion.p 
          className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-5 opacity-90"
          variants={itemVariants}
        >
          Some of Our Bank Card Services
        </motion.p>

        {/* Main heading */}
        <motion.h1 
          className="text-white text-2xl sm:text-4xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 sm:mb-8 md:mb-10"
          variants={itemVariants}
        >
          USA-based expert in local business marketing
        </motion.h1>

        {/* Contact buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          variants={itemVariants}
        >
          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/message/LMBKKSKH7RLRG1?src=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 bg-green-500 hover:bg-green-600 text-white text-base sm:text-lg md:text-xl font-semibold rounded-full border-2 border-white/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="mr-2">WhatsApp Chat</span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </motion.a>

          {/* Telegram Button */}
          <motion.a
            href="https://t.me/pvasupply"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 bg-blue-500 hover:bg-blue-600 text-white text-base sm:text-lg md:text-xl font-semibold rounded-full border-2 border-white/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="mr-2">Telegram</span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.25-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </motion.a>

          {/* Email Button */}
          <motion.a
            href="mailto:pvasupply0@gmail.com?subject=Service%20Inquiry&body=Hi%20PVA%20Supply%20Team,%0D%0A%0D%0AI%20would%20like%20to%20inquire%20about%20your%20services.%0D%0A%0D%0APlease%20contact%20me%20at%20your%20earliest%20convenience.%0D%0A%0D%0ABest%20regards"
            className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-3.5 bg-red-500 hover:bg-red-600 text-white text-base sm:text-lg md:text-xl font-semibold rounded-full border-2 border-white/20 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 active:scale-95"
            onClick={(e) => handleEmailClick(e, 'pvasupply0@gmail.com', 'Service Inquiry', 'Hi PVA Supply Team,\n\nI would like to inquire about your services.\n\nPlease contact me at your earliest convenience.\n\nBest regards')}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className="mr-2">Email Us</span>
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6"
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
          </motion.a>
        </motion.div>

        {/* Alternative Contact Methods */}
        <motion.div 
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20"
          variants={itemVariants}
        >
          <motion.h3 
            className="text-white text-xl sm:text-2xl font-semibold mb-4"
            whileHover={{ scale: 1.02, textShadow: "0 0 20px rgba(255,255,255,0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            📧 Alternative Contact Methods
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
            <motion.div 
              className="text-center p-4 bg-white/10 rounded-xl"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl mb-2">📱</div>
              <div className="font-medium">Direct Email</div>
              <div className="text-sm opacity-80">pvasupply0@gmail.com</div>
                             <motion.button
                 className="mt-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm transition-colors"
                 onClick={() => copyEmailToClipboard('pvasupply0@gmail.com')}
                 whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                 whileTap={{ scale: 0.95 }}
               >
                 Copy Email
               </motion.button>
            </motion.div>
            <motion.div 
              className="text-center p-4 bg-white/10 rounded-xl"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="font-medium">Instant Chat</div>
              <div className="text-sm opacity-80">WhatsApp & Telegram</div>
              <div className="mt-2 text-xs opacity-70">
                Recommended for mobile users
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Bottom wave decoration */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        variants={waveVariants}
        animate="animate"
      >
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
    </div>
  );
}

export default Contact;
