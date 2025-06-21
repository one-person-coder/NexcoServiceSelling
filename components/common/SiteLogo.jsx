import { motion } from "framer-motion";

const SiteLogo = () => {
  return (
    <motion.div className="flex items-center space-x-3">
      <motion.div
        className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg"
        whileHover={{ rotate: 5 }}
      >
        <span className="text-white font-bold text-xl">N</span>
      </motion.div>
      <div>
        <span className="text-xl font-bold">NexCo Outsourcing</span>
        <motion.p
          className="text-xs text-orange-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Global Talent Solutions
        </motion.p>
      </div>
    </motion.div>
  );
};
export default SiteLogo;
