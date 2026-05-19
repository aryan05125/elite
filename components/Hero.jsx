"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container-custom pt-32">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300">
            Elite AI Company from India — Building Global Intelligence Systems
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-8">
            Transforming Businesses With Advanced AI Systems
          </h1>

          <p className="text-gray-400 text-lg mt-8 max-w-2xl leading-relaxed">
            Building next-generation AI products, intelligent automation,
            and scalable AI infrastructure for companies worldwide.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="gradient-btn px-8 py-4 rounded-2xl font-semibold">
              Get Started
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all">
              Book a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;