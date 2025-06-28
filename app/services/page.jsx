"use client";
import ScrollingText from "@/components/main/home/ScrollingText";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  ArrowRight,
  Search,
  Briefcase,
  UserPlus,
  CheckCircle,
  File,
  Linkedin,
  TrendingUp,
  AlignVerticalJustifyEnd,
  Home,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Services() {
  const scrollingTexts = [
    "We know recruitment.",
    "We work with purpose.",
    "We value transparency — always.",
  ];
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "CV Sourcing",
      imgPath: "/images/services/1.png",
      description:
        "We provide complete resume sourcing and screening solutions. This includes CV sourcing from online job boards, mining in-house databases, search engines, and online communities and groups. We are experts in using Boolean Operators for improved resume database search results. Our 24×7 job board and ATS database searches increase efficiency and speed.",
      color: "from-blue-500/20 to-blue-600/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: <File className="w-8 h-8" />,
      title: "CV Formatting",
      imgPath: "/images/services/2.png",
      description:
        "Our CV Formatting Service is designed to give your candidates’ profiles a clean, consistent, and professional look — perfectly aligned with your company’s brand. We help you present each CV in a way that reflects your organization’s standards, making a strong impression on clients and hiring managers alike. A well-formatted CV isn’t just about design — it’s about positioning your brand with quality and professionalism.",
      color: "from-purple-500/20 to-purple-600/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      title: "LinkedIn Searches",
      imgPath: "/images/services/3.png",
      description:
        "We are highly motivated recruitment professionals specializing in full candidate life cycle management, dedicated to delivering exceptional client service and innovative recruitment solutions. With strong connections and expertise in LinkedIn sourcing, we excel at finding top-quality candidates that meet your hiring needs.",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Lead Generation",
      imgPath: "/images/services/4.png",
      description:
        "Having high-quality leads is key to building a strong sales funnel. Our expert team specializes in generating qualified leads that drive real results and boost your revenue. Using a targeted approach, we help convert marketing leads into sales-ready opportunities — backed by experienced researchers and quality analysts on every project.",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: <AlignVerticalJustifyEnd className="w-8 h-8" />,
      title: "Virtual Assistant",
      imgPath: "/images/services/5.png",
      description:
        "At NexCo Outsourcing, our Virtual Assistant Services are designed to support businesses globally with reliable and skilled professionals. From administrative to creative and technical tasks, our VAs help you save time, increase efficiency, and stay focused on your core business goals — all while we manage the rest remotely with precision.",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Back Office Support",
      imgPath: "/images/services/6.png",
      description:
        "Our Back Office Support services streamline your internal operations by handling essential administrative and operational tasks behind the scenes. From document management and data processing to HR support and compliance, we ensure your business runs smoothly and efficiently. By outsourcing these tasks to us, you can reduce overhead costs, improve accuracy, and focus more on your core business activities..",
      color: "from-green-500/20 to-green-600/10",
      borderColor: "border-green-500/20",
    },
  ];

  return (
    <>
      <section className="mt-16 py-24 ">
        <div className="container mx-auto px-4 space-y-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
                Smart Outsourcing Solutions{" "}
                <span className="text-orange-400">for a Smarter Workforce</span>
              </h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8"
              />
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                At NexCo Outsourcing, we provide specialized outsourcing
                services designed to simplify recruitment, accelerate hiring,
                and elevate workforce quality — all while saving your time and
                resources.{" "}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="!h-72 lg:!h-full w-full"
            >
              <div className="relative h-full w-auto rounded-xl overflow-hidden">
                <Image
                  src="/images/mood-event.jpg"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Meet Our <span className="text-orange-400">Founders</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"
            />
          </motion.div>
          <div className="mb-16 grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-8 rounded-2xl border border-orange-500/20 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Users className="w-6 h-6 text-orange-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-400">
                  Muhammad Ishraq & Hamza Tariq
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                Muhammad Ishraq and Hamza Tariq joined forces with a shared
                vision: to build a next-generation outsourcing consultancy that
                redefines global hiring. Their mission is to simplify
                recruitment for clients while creating real value for candidates
                worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-8 rounded-2xl border border-orange-500/20 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <div className="flex items-center mb-6">
                <motion.div
                  className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Globe className="w-6 h-6 text-orange-400" />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-400">
                  Global Talent
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                We combine industry insight with intelligent sourcing to connect
                UK and global businesses with high-quality talent — fast.
                Whether you're scaling your team or filling a one-off role, our
                expert network ensures precise, efficient hiring.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              What We <span className="text-orange-400">OFFER</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto"
            />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 ${service.borderColor} h-full hover:border-orange-500/40 transition-all duration-500 group relative overflow-hidden !p-0`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1 }}
                  />
                  <CardContent className="p-8 relative z-10">
                    <div className="flex flex-col gap-4">
                      <div>
                        <div className="!h-72 w-full">
                          <div className="relative h-full w-full rounded-xl overflow-hidden">
                            <Image
                              src={service?.imgPath}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-orange-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container max-w-5xl text-center mx-auto px-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              Book Your <span className="text-orange-400">Free Trial?</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8 mx-auto"
            />
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Experience the quality of our services firsthand with a
              no-obligation free trial.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="!w-fit mx-auto"
            >
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg relative overflow-hidden group !w-fit">
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ScrollingText scrollingTexts={scrollingTexts} />
    </>
  );
}

export default Services;
