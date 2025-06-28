"use client";

import { motion } from "framer-motion";
import { Crown, Briefcase, Award, Globe, Star } from "lucide-react";
import Image from "next/image";

function page() {
  const teamMembers = [
    {
      name: "Hamza Tariq",
      position: "Founder / CEO",
      description:
        "Hamza brings visionary leadership to the company with a sharp focus on innovation and strategic growth. As Founder & CEO, he leads overall business direction and ensures client success across global markets.",
      avatar: "HT",
      icon: <Crown className="w-6 h-6" />,
      gradient: "from-orange-500 via-orange-600 to-red-500",
      bgGradient: "from-orange-500/10 via-orange-600/5 to-red-500/10",
      borderGradient: "from-orange-500/50 to-red-500/50",
      experience: "8+ Years",
      image: "/images/team/hamza.jpeg",
    },
    {
      name: "Muhammad Ishraq",
      position: "Partner",
      description:
        "With a strong background in business development and recruitment, Ishraq plays a key role in expanding partnerships and driving operational excellence across regions.",
      avatar: "MI",
      icon: <Briefcase className="w-6 h-6" />,
      gradient: "from-blue-500 via-blue-600 to-indigo-500",
      bgGradient: "from-blue-500/10 via-blue-600/5 to-indigo-500/10",
      borderGradient: "from-blue-500/50 to-indigo-500/50",
      experience: "7+ Years",
      image: "/images/team/ishraq.jpeg",
    },
    {
      name: "Mehvish Asghar",
      position: "Managing Director",
      description:
        "Mehvish oversees day-to-day operations and client relations. Her leadership ensures smooth service delivery, quality standards, and a strong client-focused approach.",
      avatar: "MA",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      bgGradient: "from-purple-500/10 via-purple-600/5 to-pink-500/10",
      borderGradient: "from-purple-500/50 to-pink-500/50",
      experience: "6+ Years",
      image: "/images/team/mehvish.jpeg",
    },
    {
      name: "Zeenat Fatima",
      position: "Director",
      description:
        "Zeenat plays a strategic role in shaping company policies and overseeing department performance. Her expertise contributes significantly to team alignment and long-term planning.",
      avatar: "ZF",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-green-500 via-green-600 to-emerald-500",
      bgGradient: "from-green-500/10 via-green-600/5 to-emerald-500/10",
      borderGradient: "from-green-500/50 to-emerald-500/50",
      experience: "5+ Years",
      image: "/images/team/zeenat.jpeg",
    },
  ];

  return (
    <>
      <section className="mt-16 py-24 sm:py-32 relative">
        <motion.div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-gray-900 to-gray-900" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
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
                  Meet the People Behind
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
                  the Vision
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
                    A Nexco Outsourcing team of top-tier specialists, united by
                    one goal — your success. We bring diverse expertise, global
                    perspective, and cutting-edge solutions to every partnership
                    we build.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="py-24 container px-6 mx-auto">
        <div className="max-w-5xl text-center mx-auto px-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              OUR <span className="text-orange-400">LEADERSHIP</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8 mx-auto"
            />
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                {/* Glowing Background Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r  rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />

                {/* Main Card */}
                <div
                  className={`relative bg-gradient-to-br from-gray-800/90 via-gray-900/90 to-black/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 group-hover:border-transparent transition-all`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-12 -translate-x-12" />
                  </div>

                  {/* Animated Gradient Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${member.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-700`}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />

                  <div className="relative p-8 lg:p-10">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-8">
                      <div className="flex items-center space-x-6">
                        {/* Enhanced Avatar */}
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <motion.div
                            className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                            }}
                          >
                            {/* Avatar Background Animation */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                              transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                              }}
                            />
                            <div className="relative w-28 h-full  rounded-xl overflow-hidden">
                              <Image
                                src={member?.image}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </motion.div>

                          {/* Role Icon */}
                          <motion.div
                            className={`absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r ${member.gradient} rounded-xl flex items-center justify-center shadow-lg border-2 border-gray-900`}
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.8 }}
                          >
                            <div className="text-white">{member.icon}</div>
                          </motion.div>
                        </motion.div>

                        {/* Name and Position */}
                        <div className="flex-1">
                          <motion.h3 className="text-2xl lg:text-3xl font-bold mb-2  group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-500">
                            {member.name}
                          </motion.h3>
                          <motion.p className="text-orange-400 font-semibold text-lg mb-4">
                            {member.position}
                          </motion.p>

                          {/* Experience Badge */}
                          <motion.div
                            className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium"
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(251, 146, 60, 0.3)",
                            }}
                          >
                            <Star className="w-3 h-3 mr-1" />
                            {member.experience}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <motion.p className="text-gray-300 leading-relaxed text-lg mb-6 group-hover:text-gray-200 transition-colors duration-300">
                      {member.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

export default page;
