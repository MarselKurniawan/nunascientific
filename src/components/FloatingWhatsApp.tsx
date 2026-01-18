import { WhatsAppIcon } from "./WhatsAppIcon";
import { motion } from "framer-motion";

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/6281281181860"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat via WhatsApp"
    >
      <WhatsAppIcon className="w-6 h-6" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
    </motion.a>
  );
};
