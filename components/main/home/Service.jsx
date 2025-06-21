"use client";
import { motion } from "framer-motion";
import { Users, Target, Zap, Globe, Award, Building } from "lucide-react";

function Service() {
  return (
    <section className="py-24 bg-gray-800/30" id="service">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            WHY <span className="text-orange-400">NEXCO OUTSOURCING</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            NexCo Outsourcing — Connecting Global Talent with Your Business
            Needs
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"
          />
        </motion.div>

        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed"
          >
            At NexCo Outsourcing, we utilize our extensive networks, expertise,
            and proven reputation to ensure you have access to the best
            professionals when your business demands top talent — wherever you
            operate globally.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-12">
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-8 rounded-2xl border border-orange-500/20 relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Building className="w-6 h-6 text-orange-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-orange-400">
                    For Our Clients
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  We know that people are the heart of every successful
                  organization. Whether you're a startup finding your footing or
                  an established enterprise expanding your reach, we collaborate
                  closely with you to build high-performing teams that help you
                  achieve your goals.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  If you need to augment your recruitment with skilled CV
                  sourcing, professional CV formatting, or dedicated virtual
                  staffing support, NexCo Outsourcing is your trusted partner to
                  make it happen efficiently and cost-effectively.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
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
                    For Candidates
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  For job seekers looking to take the next step in their career,
                  we simplify the recruitment journey. We match your skills and
                  experience with roles that truly fit your talents, across
                  industries and regions, without the typical recruitment
                  hassles.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Globe className="w-8 h-8" />,
                  title: "Global Network",
                  desc: "Worldwide talent access",
                  color: "from-blue-500/20 to-blue-600/10",
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Precision Matching",
                  desc: "Perfect fit guaranteed",
                  color: "from-green-500/20 to-green-600/10",
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Fast Delivery",
                  desc: "Quick turnaround",
                  color: "from-purple-500/20 to-purple-600/10",
                },
                {
                  icon: <Award className="w-8 h-8" />,
                  title: "Quality Assured",
                  desc: "Top-tier professionals",
                  color: "from-orange-500/20 to-orange-600/10",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                  className={`bg-gradient-to-br ${item.color} p-6 rounded-xl border border-orange-500/20 text-center relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  <motion.div
                    className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-orange-400">{item.icon}</div>
                  </motion.div>
                  <h4 className="font-bold text-lg mb-2 relative z-10">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 relative z-10">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Service;
