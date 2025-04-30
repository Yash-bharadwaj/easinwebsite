import { motion } from "framer-motion";
import { 
  FaBed, FaRulerCombined, FaEye, FaUsers, 
  FaWifi, FaBath, FaCoffee, FaTv, FaSnowflake 
} from "react-icons/fa";

const RoomFeature = ({ icon: Icon, title, value }) => (
  <motion.div 
    className="flex items-center mb-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="mr-3 text-primary">
      <Icon size={18} />
    </div>
    <div>
      <p className="text-sm text-neutral-500">{title}</p>
      <p className="font-medium text-neutral-800">{value}</p>
    </div>
  </motion.div>
);

const RoomFeatures = ({ room }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <RoomFeature 
        icon={FaBed} 
        title="Bed Type" 
        value={room.bedType} 
      />
      
      <RoomFeature 
        icon={FaRulerCombined} 
        title="Room Size" 
        value={room.size} 
      />
      
      <RoomFeature 
        icon={FaUsers} 
        title="Occupancy" 
        value={room.occupancy} 
      />
      
      <RoomFeature 
        icon={FaEye} 
        title="View" 
        value={room.view} 
      />
      
      <RoomFeature 
        icon={FaWifi} 
        title="Internet" 
        value="High-Speed Wi-Fi" 
      />
      
      <RoomFeature 
        icon={FaBath} 
        title="Bathroom" 
        value="En-suite with Premium Amenities" 
      />

      <RoomFeature 
        icon={FaSnowflake} 
        title="Cooling" 
        value="Individual Climate Control" 
      />
      
      <RoomFeature 
        icon={FaCoffee} 
        title="Refreshments" 
        value="Tea & Coffee Facilities" 
      />
      
      <RoomFeature 
        icon={FaTv} 
        title="Entertainment" 
        value="LED Smart TV" 
      />
    </div>
  );
};

export default RoomFeatures;
