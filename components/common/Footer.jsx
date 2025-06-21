"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Link from "next/link";
import SiteLogo from "@/components/common/SiteLogo";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 border-t border-orange-500/20 py-8 sm:py-14 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 4,
                delay: i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div className="flex items-center space-x-3 mb-8">
                <SiteLogo />
              </motion.div>

              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Sourcing the best global talent and connecting them with the
                right opportunities worldwide.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    text: "182-189 High Street North, East Ham, London",
                  },
                  {
                    icon: <Mail className="w-5 h-5" />,
                    text: "Info@nexcooutsourcing.com",
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    text: "+44 (0) 20 7123 4567",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <motion.div
                      className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="text-orange-400">{item.icon}</div>
                    </motion.div>
                    <span className="text-gray-300 group-hover:text-orange-400 transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-6">
                Let's <span className="text-orange-400">Chat</span>
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Be the first to experience our expert CV sourcing and formatting
                services — book your free trial today!
              </p>

              <form className="space-y-6">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-gray-800 border-gray-700 focus:border-orange-500 text-white h-16 text-lg rounded-xl"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-16 text-lg rounded-xl relative overflow-hidden group">
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started
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
              </form>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-orange-600/5 rounded-2xl border border-orange-500/20 backdrop-blur-sm"
              >
                <div className="flex items-center mb-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  >
                    <Sparkles className="w-6 h-6 text-orange-400 mr-2" />
                  </motion.div>
                  <h4 className="font-bold text-orange-400">
                    🎯 Free Trial Available
                  </h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Experience our services risk-free. No commitment required.
                </p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {new Date().getUTCFullYear()} NexCo Outsourcing. All rights
                reserved.
              </p>
              <div className="flex gap-x-6 gap-y-2 flex-wrap">
                {["About Us", "Services", "Sector", "Our Team", "Contact"].map(
                  (item, index) => (
                    <motion.div key={item} whileHover={{ scale: 1.05, y: -2 }}>
                      <Link
                        href="#"
                        className="text-gray-400 hover:text-orange-400 transition-colors relative group"
                      >
                        {item}
                        <motion.div
                          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"
                          layoutId={`footer-policy-${index}`}
                        />
                      </Link>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
