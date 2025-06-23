"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);
  const faqs = [
    {
      question: "How quickly can you find suitable candidates?",
      answer:
        "Our standard turnaround time is 12 - 24 hour , with urgent roles filled within 6 to 12 Hour hours via our Rapid Response Service.",
    },
    {
      question: "What industries do you specialize in?",
      answer:
        "We recruit for tech, finance, healthcare, manufacturing, and more — covering nearly every major sector through our global network.",
    },
    {
      question: "How do you ensure candidate quality?",
      answer:
        "Every candidate goes through a 5-step screening process, including skills testing, cultural fit checks, and background verification.",
    },
    {
      question: "What are your pricing models?",
      answer:
        "We offer contingency, retained, and project-based pricing — all tailored to your hiring needs, budget, and timeline.",
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
            FREQUENTLY ASKED <span className="text-orange-400">QUESTIONS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get answers to the most common questions about our services
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"
          />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <motion.button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white group-hover:text-orange-400 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-orange-400"
                  >
                    <Plus className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
