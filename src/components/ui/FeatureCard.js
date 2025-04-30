import { motion } from "framer-motion";
import { 
  FaBed, FaWifi, FaUtensils, FaDumbbell, FaSwimmer, FaConciergeBell,
  FaCoffee, FaTv, FaSnowflake, FaBriefcase, FaTshirt, FaBath,
  FaStar, FaHandshake, FaUsers, FaLightbulb, FaHeart, FaLeaf,
  FaClock, FaChild, FaPaw, FaSmokingBan, FaLock, FaPhone
} from "react-icons/fa";

// Icon mapping
const iconMap = {
  bed: FaBed,
  wifi: FaWifi,
  utensils: FaUtensils,
  dumbbell: FaDumbbell,
  "swimming-pool": FaSwimmer,
  "concierge-bell": FaConciergeBell,
  coffee: FaCoffee,
  tv: FaTv,
  snowflake: FaSnowflake,
  briefcase: FaBriefcase,
  tshirt: FaTshirt,
  bath: FaBath,
  star: FaStar,
  handshake: FaHandshake,
  users: FaUsers,
  lightbulb: FaLightbulb,
  heart: FaHeart,
  leaf: FaLeaf,
  clock: FaClock,
  child: FaChild,
  paw: FaPaw,
  "smoking-ban": FaSmokingBan,
  safe: FaLock,
  phone: FaPhone,
};

const FeatureCard = ({ icon, title, description, className = "", light = false }) => {
  // Get the icon component or default to FaStar
  const Icon = iconMap[icon] || FaStar;

  return (
    <motion.div 
      className={`flex flex-col items-center text-center p-6 rounded-lg transition-all ${
        light 
          ? 'bg-white/10 backdrop-blur-sm hover:bg-white/20' 
          : 'bg-white shadow-soft hover:shadow-medium'
      } ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={`p-3 rounded-full mb-4 text-2xl ${
        light ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary'
      }`}>
        <Icon />
      </div>
      
      <h3 className={`text-lg font-serif font-medium mb-2 ${
        light ? 'text-white' : 'text-neutral-900'
      }`}>
        {title}
      </h3>
      
      {description && (
        <p className={`text-sm ${
          light ? 'text-neutral-200' : 'text-neutral-600'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default FeatureCard;
