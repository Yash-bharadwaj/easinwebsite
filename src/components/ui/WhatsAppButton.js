import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import hotelData from "../../data/hotel.json";

const WhatsAppButton = () => {
  const whatsappNumber = hotelData.contact.whatsapp;
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hello, I have a question about Eastin Hotel Madhapur.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <FaWhatsapp className="text-2xl" />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
