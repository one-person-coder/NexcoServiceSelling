"use client";
import { motion } from "framer-motion";
import { Users, Target, Search, Shield } from "lucide-react";

function OurProcess() {
  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We understand your requirements, culture, and specific needs in detail.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      step: "02",
      title: "Talent Sourcing",
      description:
        "Our global network identifies and screens the best candidates for your role.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      step: "03",
      title: "Quality Assessment",
      description:
        "Rigorous evaluation process ensures only top-tier talent reaches you.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      step: "04",
      title: "Perfect Match",
      description:
        "We present you with candidates who are perfect cultural and technical fits.",
      icon: <Target className="w-6 h-6" />,
    },
  ];

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
            OUR <span className="text-orange-400">PROCESS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven 4-step methodology that delivers exceptional results every
            time
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"
          />
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/20 via-orange-500 to-orange-500/20 transform -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-orange-500/20 text-center relative z-10">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-white">{step.icon}</div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-orange-500">
                      <span className="text-orange-400 text-xs font-bold">
                        {step.step}
                      </span>
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4 text-orange-400">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProcess;
