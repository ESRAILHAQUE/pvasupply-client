"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Crown,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Globe,
  Lock
} from 'lucide-react';

export default function BuyOldGmailAccounts() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Crown,
      title: "Premium Social Accounts",
      description: "High-quality, verified social media accounts for all major platforms",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Secure Banking Solutions",
      description: "Reliable and secure bank account services for your business needs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Crypto Account Management",
      description: "Professional cryptocurrency account setup and management services",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "SMM Pro Services",
      description: "Complete social media marketing solutions to grow your business",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Clients", icon: Users },
    { number: "99.9%", label: "Uptime", icon: TrendingUp },
    { number: "50+", label: "Countries", icon: Globe },
    { number: "24/7", label: "Support", icon: Shield }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [-5, 5, -5],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const bgPattern = encodeURIComponent(
    `<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fill-rule="evenodd">
        <g fill="#ffffff" fill-opacity="0.05">
          <circle cx="30" cy="30" r="2"/>
        </g>
      </g>
    </svg>`
  );

  const ActiveIcon = features[activeFeature].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url("data:image/svg+xml,${bgPattern}")` }}
      ></div>

      {/* Floating Shapes */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="relative z-10"
      >
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <motion.div variants={itemVariants} className="flex justify-center mb-8">
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-2xl shadow-2xl">
                  <Crown className="w-16 h-16 text-white" />
                </div>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent"
              >
                PVA<span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">SMM</span>PRO
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Your trusted partner for premium social media accounts, secure banking solutions, and professional crypto services
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-2xl text-lg font-semibold backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                >
                  View Services
                </motion.button>
              </motion.div>
            </div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="grid lg:grid-cols-2 gap-12 items-center mb-20"
            >
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
                  Why Choose <span className="text-green-400">PVASMMPRO</span>?
                </h2>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 10 }}
                      onClick={() => setActiveFeature(index)}
                      className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                        activeFeature === index
                          ? 'bg-white/15 border-green-400/50 shadow-lg'
                          : 'bg-white/5 border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color}`}>
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                          <p className="text-gray-300">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* 👇 Fixed Feature Icon Display */}
              <div className="relative">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className={`w-full h-96 rounded-3xl bg-gradient-to-br ${features[activeFeature].color} p-1 shadow-2xl`}>
                    <div className="w-full h-full rounded-3xl bg-slate-900/90 backdrop-blur-sm flex items-center justify-center">
                      <ActiveIcon className="w-32 h-32 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Trust Section */}
            <motion.div
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Trusted by Thousands Worldwide
                </h3>
                <p className="text-gray-300 text-lg">Join our growing community of satisfied customers</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white font-semibold mb-2">5-Star Rating</p>
                  <p className="text-gray-300">From 1000+ reviews</p>
                </div>

                <div className="text-center">
                  <Lock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-white font-semibold mb-2">100% Secure</p>
                  <p className="text-gray-300">SSL encrypted transactions</p>
                </div>

                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <p className="text-white font-semibold mb-2">Verified Quality</p>
                  <p className="text-gray-300">All accounts pre-verified</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
