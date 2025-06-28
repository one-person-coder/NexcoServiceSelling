"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function SectorsWeServer() {
  const sectors = [
    {
      heading: "SECTOR WE | SERVE",
      para: "At NexCo Outsourcing, we understand that every industry has its own challenges and demands. That’s why we tailor our services to meet the specific needs of each sector, delivering the right talent and solutions to help your business succeed.",
      image: "/images/sectors/1.jpeg",
    },
    {
      heading: "Information Technology | (IT)",
      para: "We provide skilled IT professionals including software developers, system administrators, cybersecurity experts, and more. Our tailored sourcing and CV formatting services ensure you get the right tech talent to drive your projects forward.",
      image: "/images/sectors/2.jpeg",
    },
    {
      heading: "Finance & | Banking",
      para: "Our expertise includes sourcing qualified finance specialists, accountants, auditors, and banking professionals who meet industry regulations and standards, helping you maintain compliance and achieve financial goals.",
      image: "/images/sectors/3.jpeg",
    },
    {
      heading: "Manufacturing",
      para: "We help manufacturing companies find reliable and experienced staff, from production line workers to supervisors and quality control experts, ensuring smooth and efficient operations.",
      image: "/images/sectors/4.jpeg",
    },
    {
      heading: "Construction",
      para: "From skilled tradespeople to project managers, we source talent that helps your construction projects meet deadlines, maintain safety standards, and deliver quality results.",
      image: "/images/sectors/5.jpeg",
    },
    {
      heading: "Fast-Moving | Consumer Goods (FMCG)",
      para: "We support FMCG businesses by providing fast, agile recruitment solutions tailored to the dynamic nature of this sector, sourcing talent across sales, marketing, supply chain, and production.",
      image: "/images/sectors/6.jpeg",
    },
    {
      heading: "Healthcare",
      para: "Our healthcare recruitment focuses on sourcing qualified professionals including nurses, technicians, administrators, and support staff, helping healthcare organizations maintain excellent patient care and operational efficiency.",
      image: "/images/sectors/7.jpeg",
    },
  ];
  return (
    <>
      {sectors?.map((sector, index) => {
        const headingParts = sector?.heading?.split(" | ");
        const firstPart = headingParts?.slice(0);
        const secondPart = headingParts?.slice(1);
        const isEven = index % 2 === 0;
        return (
          <section key={index} className="mt-16 py-24 ">
            <div className="container mx-auto px-4 space-y-8">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
                    {firstPart}{" "}
                    <span className="text-orange-400">{secondPart}</span>
                  </h2>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8"
                  />
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    {sector?.para}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`!h-72 lg:!h-full w-full ${
                    isEven ? "lg:order-1" : "lg:-order-1"
                  }`}
                >
                  <div className="relative h-full w-auto rounded-xl overflow-hidden">
                    <Image src={sector?.image} fill className="object-cover" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default SectorsWeServer;
