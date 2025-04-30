import { motion } from "framer-motion";
import { 
  FaUserTie, FaUserFriends, FaUser, FaCalendarAlt, 
  FaHeart, FaUserGraduate, FaUsers, FaCheck
} from "react-icons/fa";

// Icon mapping for traveler types
const iconMap = {
  "Business Travelers": FaUserTie,
  "Business Executives": FaUserTie,
  "Friends Traveling Together": FaUserFriends,
  "Solo Travelers": FaUser,
  "Extended Stay Guests": FaCalendarAlt,
  "Long-Stay Guests": FaCalendarAlt,
  "Couples": FaHeart,
  "Couples on Special Occasions": FaHeart,
  "VIP Guests": FaUserGraduate,
  "Leisure Travelers": FaUsers,
  "Families": FaUsers,
  "Friends": FaUserFriends,
  "Business": FaUserTie
};

// Default icon if type is not found in mapping
const DefaultIcon = FaUser;

const RoomSuitability = ({ suitableFor }) => {
  if (!suitableFor) return null;

  // Handle the case where suitableFor is an object with items
  if (suitableFor.items) {
    return (
      <div className="py-12">
        <h2 className="text-2xl font-serif mb-6 text-center">{suitableFor.title || "Perfect For"}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suitableFor.items.map((item, index) => {
            const Icon = iconMap[item.title] || DefaultIcon;
            
            return (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="p-3 bg-primary-50 text-primary rounded-full mb-3">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-neutral-600 text-sm text-center">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // Handle the case where suitableFor is an array of objects with type and reasons
  if (Array.isArray(suitableFor)) {
    return (
      <div className="py-12">
        <h2 className="text-2xl font-serif mb-6 text-center">Perfect For</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suitableFor.map((item, index) => {
            const Icon = iconMap[item.type] || DefaultIcon;
            
            return (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="p-3 bg-primary-50 text-primary rounded-full mb-3">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-medium text-neutral-900">
                    {item.type}
                  </h3>
                </div>
                
                <ul className="space-y-2">
                  {item.reasons.map((reason, idx) => (
                    <li key={idx} className="flex items-start text-neutral-600 text-sm">
                      <FaCheck className="text-primary-500 mt-1 mr-2 flex-shrink-0" />
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  return null;
};

export default RoomSuitability;
