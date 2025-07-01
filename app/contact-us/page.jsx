"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Menu,
  X,
  Mail,
  MapPin,
  Phone,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

// Particle Component
const Particle = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, Math.random() * 200 - 100],
      y: [0, Math.random() * 200 - 100],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Number.POSITIVE_INFINITY,
      repeatDelay: Math.random() * 2,
    }}
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
  />
);

export default function ContactPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    services: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const { scrollYProgress } = useScroll();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, company, services, email, phone, requirements } = formData;

    const subject = encodeURIComponent("New Inquiry from Website Form");
    const body = encodeURIComponent(
      `Hi NexCo Team,

You have received a new inquiry from your website.

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Interested Services: ${services}

Requirements:
${requirements}

Thanks!
`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Info@nexcooutsourcing.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, "_blank"); // opens Gmail compose in new tab
    setIsSubmitted(true); // optionally keep the success animation
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              NexCo Outsourcing
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Your Trusted Back-Office Partner for Recruitment Agencies
            </motion.p>
          </motion.div>

          {/* Main Form Section */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12"
            >
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Let's chat
              </motion.h2>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <p className="text-gray-600 mb-2">Fill in the form below:</p>
                <p className="text-sm text-orange-500">
                  * denotes a required field
                </p>
              </motion.div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-8"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {/* Name Field */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="flex flex-wrap items-center gap-2 text-lg text-gray-700">
                        <span>Hi! My name is</span>
                        <div className="flex-1 min-w-[250px] relative">
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="enter your name here*"
                            required
                            className="border-0 border-b-2  focus:border-orange-500 rounded-none bg-transparent px-0 py-2 text-lg placeholder:text-gray-400 focus-visible:ring-0 transition-all duration-300 "
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Company Field */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 }}
                    >
                      <div className="flex flex-wrap items-center gap-2 text-lg text-gray-700">
                        <span>and I represent</span>
                        <div className="flex-1 min-w-[300px] relative">
                          <Input
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="your recruitment agency / company name"
                            className="border-0 border-b-2  focus:border-orange-500 rounded-none bg-transparent px-0 py-2 text-lg placeholder:text-gray-400 focus-visible:ring-0 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Services Field */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 }}
                    >
                      <div className="text-lg text-gray-700 mb-2">
                        I'm interested in your services, especially
                      </div>
                      <Input
                        name="services"
                        value={formData.services}
                        onChange={handleInputChange}
                        placeholder="CV Sourcing, CV Formatting, Lead Generation..."
                        className="border-0 border-b-2  focus:border-orange-500 rounded-none bg-transparent px-0 py-2 text-lg placeholder:text-gray-400 focus-visible:ring-0 transition-all duration-300"
                      />
                    </motion.div>

                    {/* Email Field */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 }}
                    >
                      <div className="flex flex-wrap items-center gap-2 text-lg text-gray-700">
                        <span>You can reach me on email at</span>
                        <div className="flex-1 min-w-[250px] relative">
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="email@example.com*"
                            required
                            className="border-0 border-b-2  focus:border-orange-500 rounded-none bg-transparent px-0 py-2 text-lg placeholder:text-gray-400 focus-visible:ring-0 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Phone Field */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 }}
                    >
                      <div className="flex flex-wrap items-center gap-2 text-lg text-gray-700">
                        <span>or, via phone on</span>
                        <div className="flex-1 min-w-[250px] relative">
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="enter your phone number here*"
                            required
                            className="border-0 border-b-2  focus:border-orange-500 rounded-none bg-transparent px-0 py-2 text-lg placeholder:text-gray-400 focus-visible:ring-0 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Requirements Field */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.7 }}
                    >
                      <div className="text-lg text-gray-700 mb-4">
                        Here's a bit more about what I need:
                      </div>
                      <Textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        placeholder="Tell us briefly about your requirements (e.g. # of roles, type of candidates, etc.)"
                        rows={4}
                        className="border-2  focus:border-orange-500 rounded-lg bg-transparent px-4 py-3 text-lg placeholder:text-gray-400 resize-none transition-all duration-300"
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8 }}
                      className="pt-4"
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
                        >
                          SUBMIT
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-green-600 mb-4">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-50"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0 }}
            className="mt-16 text-center"
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  text: "182-189 High Street North, East Ham, London",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  text: "Info@nexcooutsourcing.com",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  text: "+44 (0) 20 7123 4567",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-200"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <div className="text-orange-500">{item.icon}</div>
                  </div>
                  <p className="text-gray-600 text-center">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
