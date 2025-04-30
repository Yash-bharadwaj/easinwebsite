import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaChevronRight, FaStar, FaFire, FaThumbsUp } from "react-icons/fa";

const RoomCard = ({ room, index = 0 }) => {
  // Promotional messages to rotate through
  const promotionalMessages = [
    { text: "Most Popular Choice", icon: FaStar },
    { text: "Filling Fast", icon: FaFire },
    { text: "Highly Rated", icon: FaThumbsUp }
  ];

  // Get a promotional message based on the room index
  const message = promotionalMessages[index % promotionalMessages.length];
  const Icon = message.icon;

  return (
    <motion.div 
      className="card h-full overflow-hidden flex flex-col bg-white"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative overflow-hidden h-56 sm:h-64">
        <img 
          src={room.thumbnail}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <span className="text-sm font-medium bg-primary/80 px-3 py-1 rounded-sm flex items-center">
            <Icon className="mr-2" />
            {message.text}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif text-neutral-900 mb-2">
          {room.name}
        </h3>
        
        <p className="text-neutral-600 mb-4 line-clamp-2">
          {room.shortDescription}
        </p>
        
        <div className="mt-auto">
          <ul className="mb-4 grid grid-cols-2 gap-x-2 gap-y-1">
            {room.features.slice(0, 4).map((feature, idx) => (
              <li key={idx} className="text-sm text-neutral-600 flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
          
          <Link 
            to={room.url} 
            className="flex items-center justify-between text-primary font-medium hover:text-primary-700 transition-colors"
          >
            <span>View Details</span>
            <FaChevronRight className="text-sm" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;
