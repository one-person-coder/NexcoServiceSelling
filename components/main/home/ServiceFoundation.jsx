"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Eye, Flag } from "lucide-react";
import Link from "next/link";

function ServiceFoundation() {
  return (
    <section className="py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            OUR <span className="text-orange-400">FOUNDATION</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-8 h-8" />,
              title: "Our Mission",
              content:
                "To empower global businesses by delivering expert outsourcing solutions that streamline recruitment, boost productivity, and connect them with top-tier talent — with unwavering integrity and professionalism.",
              color: "from-red-500/20 to-red-600/10",
            },
            {
              icon: <Eye className="w-8 h-8" />,
              title: "Our Vision",
              content:
                "To be the world’s most trusted outsourcing partner, revolutionizing recruitment and enabling companies to build exceptional teams with ease.",
              color: "from-blue-500/20 to-blue-600/10",
            },
            {
              icon: <Flag className="w-8 h-8" />,
              title: "Our Goal",
              content:
                "To exceed expectations consistently through innovative, quality-driven outsourcing services — helping our clients grow, compete, and lead in today’s fast-changing world.",
              color: "from-green-500/20 to-green-600/10",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-gradient-to-br from-gray-800 to-gray-900 border-orange-500/50 h-full hover:border-orange-500/40 transition-all duration-500 relative overflow-hidden group`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent"
                  transition={{ duration: 1 }}
                />
                <CardContent className="p-8 relative z-10">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-orange-400">{item.icon}</div>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-orange-400 mb-6 group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {item.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 w-fit mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg relative overflow-hidden group"
              asChild
            >
              <Link href="/services">
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  View Services
                  <Users className="ml-2 w-5 h-5" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceFoundation;
