"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Briefcase,
  UserPlus,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

function ServiceProcess() {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Find the Right Talent, Fast",
      description:
        "We tailor every search to match your unique goals, ensuring the right people arrive when you need them most.",
      features: [
        "Access to global talent pools",
        "Precision role-to-skill matching",
        "Quick CV turnaround",
        "Quality-first shortlisting",
      ],
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Full-Service Hiring Solutions",
      description:
        "We integrate seamlessly with your company — from employer branding to onboarding — acting as an extension of your in-house team.",
      features: [
        "End-to-end recruitment management",
        "Brand tone & culture alignment",
        "Onboarding guidance",
        "Ongoing support & feedback",
      ],
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: <UserPlus className="w-8 h-8" />,
      title: "Boost Your Team Instantly",
      description:
        "Need talent urgently? Our agile staffing model gives you instant access to experienced professionals ready to make impact.",
      features: [
        "Immediately available talent",
        "Skilled across multiple sectors",
        "Faster project delivery",
        "Scalable as your business grows",
      ],
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-500/20",
    },
  ];
  return (
    <section className="py-24 bg-gray-800/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            Smart Outsourcing Solutions{" "}
            <span className="text-orange-400">That Power Your Growth</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our Outsourcing Model: Fast, Flexible & Fully Integrated At NexCo,
            our outsourcing approach is built around your business needs.
            Whether you're seeking niche talent, end-to-end hiring support, or
            quick team scaling — we deliver with precision, speed, and
            consistency.
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className={`bg-gradient-to-br from-gray-800 to-gray-900 ${service.borderColor} h-full hover:border-orange-500/40 transition-all duration-500 group relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 1 }}
                />
                <CardContent className="p-8 text-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-500`}
                  >
                    <div className="text-orange-400">{service.icon}</div>
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-orange-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-4 h-4 text-orange-400 mr-2" />
                        </motion.div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
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
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg relative overflow-hidden group">
              <Link href="/sectors-we-serve">
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  Find Out More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServiceProcess;
