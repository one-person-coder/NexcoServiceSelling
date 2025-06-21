"use client";

import { motion, useScroll, useTransform } from "framer-motion";

function TopScroll() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-orange-600 z-[5000] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default TopScroll;
