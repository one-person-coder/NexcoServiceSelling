"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleServiceScroll = () => {
    document.querySelector("#service")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Predefined positions for geometric shapes to avoid hydration mismatch
  const shapePositions = [
    { left: "10%", top: "20%" },
    { left: "20%", top: "28%" },
    { left: "30%", top: "36%" },
    { left: "40%", top: "44%" },
    { left: "50%", top: "52%" },
    { left: "60%", top: "60%" },
    { left: "70%", top: "68%" },
    { left: "80%", top: "76%" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-gray-900 to-gray-900" />

      <div className="absolute inset-0">
        {/* Geometric shapes with deterministic positions */}
        {isLoaded &&
          shapePositions.map((pos, i) => (
            <motion.div
              key={`geo-${i}`}
              className="absolute border border-orange-500/20 backdrop-blur-sm"
              style={{
                width: `${30 + i * 10}px`,
                height: `${30 + i * 10}px`,
                left: pos.left,
                top: pos.top,
                borderRadius: i % 2 === 0 ? "50%" : "0%",
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.3, 1],
                borderRadius:
                  i % 2 === 0 ? ["50%", "0%", "50%"] : ["0%", "50%", "0%"],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}

        {/* Glowing Lines with consistent positions */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>
          {isLoaded &&
            [0, 1, 2, 3, 4, 5].map((i) => (
              <motion.line
                key={i}
                x1={`${i * 15 + 5}%`}
                y1="0%"
                x2={`${i * 15 + 20}%`}
                y2="100%"
                stroke="url(#gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            ))}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h1
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-white via-orange-200 to-orange-400 bg-clip-text text-transparent block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                >
                  Unlock the Power of
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                >
                  Global Talent
                </motion.span>
              </motion.h1>

              <motion.div
                className="relative mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <div className="relative">
                  <p className="text-[1rem] sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 leading-relaxed font-light">
                    Our Smart Outsourcing Solutions Help Modern Recruitment
                    Teams
                    <motion.span className="text-orange-400 font-semibold relative inline-block">
                      Hire Faster, Smarter, and Without Borders
                    </motion.span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}

          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mb-12"
            >
              <motion.p className="hidden sm:block text-lg md:text-xl text-gray-400 mb-8">
                Whether you're a business seeking top talent or a candidate
                searching for your next opportunity, you've come to the right
                place.
              </motion.p>
            </motion.div>
          )}

          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 text-lg shadow-2xl relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 flex items-center">
                    View Services
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          onClick={handleServiceScroll}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-orange-400 text-sm flex flex-col items-center cursor-pointer group"
          >
            <span className="font-semibold mb-3 group-hover:text-orange-300 transition-colors">
              SCROLL FOR MORE
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="relative"
            >
              <ArrowDown className="w-6 h-6" />
              <motion.div
                className="absolute inset-0 border-2 border-orange-400 rounded-full"
                animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Hero;
