"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "In the past I've been burned by recruiting agencies who waste my time with dozens of poor candidates and padded resumes. NexCo are different - they take the time to understand your brief in detail, and only present you with top-quality candidates who genuinely suit the role and the company. After a few weeks and only a couple of interviews, we were able to hire a Developer who was a perfect cultural and technical fit — an amazing achievement given our unique stack and requirements.",
      author: "Richard Harrison",
      role: "CTO - Bueno Systems",
      avatar: "RH",
      rating: 5,
    },
    {
      text: "NexCo Outsourcing transformed our hiring process completely. Their understanding of our industry and requirements was exceptional. They didn't just send us CVs - they sent us solutions. The quality of candidates was outstanding.",
      author: "Sarah Mitchell",
      role: "Head of HR - TechFlow Solutions",
      avatar: "SM",
      rating: 5,
    },
    {
      text: "Working with NexCo has been a game-changer for our startup. They helped us build our entire development team within weeks, not months. Their global network is impressive and the talent quality is unmatched.",
      author: "Michael Chen",
      role: "Founder - InnovateLab",
      avatar: "MC",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-gradient-to-br from-orange-500/10 via-gray-900 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            DON'T TAKE OUR <span className="text-orange-400">WORD FOR IT</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Hear from our satisfied clients who have transformed their hiring
            process
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100, rotateY: 90 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -90 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 sm:p-12 rounded-3xl border border-orange-500/20 backdrop-blur-sm"
            >
              <div className="text-center">
                <div className="flex justify-center mb-8">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-8 h-8 text-orange-400 fill-current mx-1" />
                      </motion.div>
                    )
                  )}
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 leading-relaxed font-light italic relative">
                  <motion.span
                    className="absolute -top-4 -left-4 text-6xl text-orange-400/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    "
                  </motion.span>
                  {testimonials[currentTestimonial].text}
                  <motion.span
                    className="absolute -bottom-8 -right-4 text-6xl text-orange-400/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    "
                  </motion.span>
                </blockquote>
                <motion.div
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.div
                    className="w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-6 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-white font-bold text-lg sm:text-2xl">
                      {testimonials[currentTestimonial].avatar}
                    </span>
                  </motion.div>
                  <div className="text-left">
                    <p className="font-bold text-orange-400 text-[1.2rem] lg:text-xl mb-1">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-gray-400 text-[1rem] sm:text-lg">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center mt-16 space-x-8">
            <motion.button
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setCurrentTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="p-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30 transition-all duration-300 border border-orange-500/30 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6 text-orange-400" />
            </motion.button>

            <div className="flex space-x-4">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-orange-500 scale-125 shadow-lg shadow-orange-500/50"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                setCurrentTestimonial(
                  (prev) => (prev + 1) % testimonials.length
                )
              }
              className="p-4 rounded-full bg-gradient-to-r from-orange-500/20 to-orange-600/20 hover:from-orange-500/30 hover:to-orange-600/30 transition-all duration-300 border border-orange-500/30 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6 text-orange-400" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
