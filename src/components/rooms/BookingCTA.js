import { motion } from "framer-motion";
import { FaChevronRight, FaStar, FaFire, FaThumbsUp, FaClock } from "react-icons/fa";

const BookingCTA = ({ price, bookingUrl }) => {
  // Promotional messages to rotate through
  const promotionalMessages = [
    { text: "Most Popular Choice", icon: FaStar, subtext: "Booked by 1000+ guests" },
    { text: "Filling Fast", icon: FaFire, subtext: "Limited rooms available" },
    { text: "Highly Rated", icon: FaThumbsUp, subtext: "4.8/5 from 500+ reviews" },
    { text: "Special Offer", icon: FaClock, subtext: "Limited time deal" }
  ];

  // Get a random promotional message
  const message = promotionalMessages[Math.floor(Math.random() * promotionalMessages.length)];
  const Icon = message.icon;

  return (
    <motion.div 
      className="bg-primary-50 p-6 rounded-lg border border-primary-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-serif text-neutral-900 mb-1">Book This Room</h3>
      <div className="mb-4 flex items-center">
        <div className="p-2 bg-primary-100 rounded-full mr-3">
          <Icon className="text-primary-600" />
        </div>
        <div>
          <span className="text-primary-700 font-medium text-lg block">
            {message.text}
          </span>
          <span className="text-neutral-600 text-sm">
            {message.subtext}
          </span>
        </div>
      </div>
      
      <p className="text-neutral-600 mb-6 text-sm">
        Book directly with us for the best rates and exclusive benefits.
      </p>
      
      <a
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary w-full flex justify-center items-center mb-4"
      >
        <span>Book Now</span>
        <FaChevronRight className="ml-2" />
      </a>
      
      <div className="text-center text-neutral-500 text-sm">
        <p>Need assistance?</p>
        <a
          href="tel:+919177426111"
          className="text-primary-600 hover:text-primary-800 transition-colors mt-1 inline-block"
        >
          Call Reservations: +91 91774 26111
        </a>
      </div>
    </motion.div>
  );
};

export default BookingCTA;
