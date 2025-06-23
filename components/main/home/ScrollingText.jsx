"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ScrollingText({ scrollingTexts }) {
  const [currentScrollText, setCurrentScrollText] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScrollText((prev) => (prev + 1) % scrollingTexts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [scrollingTexts.length]);

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 overflow-hidden relative">
      <div className="absolute inset-0 bg-black/10" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScrollText}
            initial={{ opacity: 0, x: 100, rotateX: 90 }}
            animate={{ opacity: 1, x: 0, rotateX: 0 }}
            exit={{ opacity: 0, x: -100, rotateX: -90 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center"
          >
            <motion.h2
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-white"
              whileHover={{ scale: 1.02 }}
            >
              {scrollingTexts[currentScrollText]}
            </motion.h2>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default ScrollingText;
