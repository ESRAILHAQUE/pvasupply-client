"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import * as THREE from "three";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  ExternalLink,
  MessageCircle,
  Youtube,
  Facebook,
  Mail,
  Send,
  MapPin,
} from "lucide-react";

const CustomerReview = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const shapesRef = useRef(null);
  const animationIdRef = useRef(null);

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
      antialias: true 
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
      new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.3 }),
      new THREE.MeshBasicMaterial({ color: 0x10b981, transparent: true, opacity: 0.3 }),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.3 }),
      new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.3 }),
      new THREE.MeshBasicMaterial({ color: 0xef4444, transparent: true, opacity: 0.3 }),
    ];

    // Create multiple instances of each shape
    for (let i = 0; i < 20; i++) {
      const geometryIndex = Math.floor(Math.random() * geometries.length);
      const materialIndex = Math.floor(Math.random() * materials.length);
      
      const mesh = new THREE.Mesh(geometries[geometryIndex], materials[materialIndex]);
      
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
      const scale = Math.random() * 0.5 + 0.5;
      mesh.scale.set(scale, scale, scale);
      
      shapes.add(mesh);
    }

    scene.add(shapes);

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

      if (shapesRef.current) {
        shapesRef.current.rotation.x += 0.002;
        shapesRef.current.rotation.y += 0.003;
        
        // Float shapes in different patterns
        shapesRef.current.children.forEach((shape, index) => {
          shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
          shape.position.x += Math.cos(Date.now() * 0.0008 + index) * 0.008;
          shape.rotation.x += 0.01;
          shape.rotation.z += 0.005;
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

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
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
      color: "bg-blue-500",
      icon: Send,
      href: "https://t.me/pvasupply",
    },
    {
      name: "WhatsApp",
      color: "bg-green-500",
      icon: MessageCircle,
      href: "https://wa.me/message/LMBKKSKH7RLRG1?src=qr",
    },
    {
      name: "Email",
      color: "bg-blue-600",
      icon: Mail,
      href: "mailto:pvasupply0@gmail.com",
    },
  ];

  // Customer reviews data
  const reviews = [
    {
      id: 1,
      name: "Mila Kunis",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      review:
        "Have been using premiumgps for more than a year. It's the most reliable and easy-to-use place to buy social media accounts ever. Always get fast and professional consultation.",
      date: "2 weeks ago",
      verified: true,
    },
    {
      id: 2,
      name: "Mike Sendler",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      review:
        "Great site premiumgps, used several times, simple and user friendly interface, prices are reasonable. I bought accounts, everything works well, they are filled with high quality.",
      date: "1 week ago",
      verified: true,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      review:
        "Excellent service and support! The team is very responsive and professional. I've been using their services for months and never had any issues.",
      date: "3 days ago",
      verified: true,
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
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-gray-50 py-16 px-4 relative overflow-hidden">
      {/* Three.js Floating Shapes Background */}
      <div ref={mountRef} className="absolute inset-0" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Social Media Icons */}
        <div className="flex justify-center items-center gap-4 mb-12">
          {socialIcons.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target={
                  social.href.startsWith("http") ||
                  social.href.startsWith("mailto:")
                    ? "_blank"
                    : undefined
                }
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-200 shadow-lg`}
                title={social.name}>
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Reviews */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Customer Reviews
              </h2>
              <p className="text-gray-600 text-lg">
                See what our satisfied customers have to say about our services
              </p>
            </div>

            {/* Review Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 rounded-bl-full"></div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {renderStars(reviews[currentReview].rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 min-h-[120px]">
                &ldquo;{reviews[currentReview].review}&rdquo;
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={reviews[currentReview].avatar}
                    alt={reviews[currentReview].name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      {reviews[currentReview].name}
                      {reviews[currentReview].verified && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Verified
                        </span>
                      )}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {reviews[currentReview].date}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevReview}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    aria-label="Previous review">
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextReview}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                    aria-label="Next review">
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Review Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === currentReview ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Promotional Banner */}
          <div className="relative">
            <div
              className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl overflow-hidden relative"
              style={{
                backgroundImage:
                  'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop&crop=center")',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-red-500/90 to-pink-500/90"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-2">Deal Of The Day</h3>
                <p className="text-4xl font-extrabold mb-4">
                  15% Off On All Orders!
                </p>

                <p className="text-white/90 mb-2">
                  Use coupon &apos;OFF15&apos; to get 15% instant
                </p>
                <p className="text-white/90 mb-6">off on your all order</p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/message/LMBKKSKH7RLRG1?src=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 group">
                    Shop Now
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>

                  <a
                    href="https://t.me/pvasupply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 group">
                    Contact
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
