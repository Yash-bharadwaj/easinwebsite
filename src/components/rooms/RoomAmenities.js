import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const AmenityCategory = ({ title, items }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-neutral-800 mb-3">{title}</h3>
      <motion.ul 
        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {items.map((item, index) => (
          <motion.li 
            key={index} 
            className="flex items-center text-neutral-600"
            variants={itemVariants}
          >
            <FaCheck className="text-primary-500 mr-2 text-sm flex-shrink-0" />
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

const RoomAmenities = ({ amenities }) => {
  return (
    <div className="bg-neutral-50 p-6 rounded-lg">
      <h2 className="text-2xl font-serif mb-6">Room Amenities</h2>
      
      {amenities.bathroom && (
        <AmenityCategory 
          title="Bathroom" 
          items={amenities.bathroom} 
        />
      )}
      
      {amenities.entertainment && (
        <AmenityCategory 
          title="Entertainment" 
          items={amenities.entertainment} 
        />
      )}
      
      {amenities.comfort && (
        <AmenityCategory 
          title="Comfort" 
          items={amenities.comfort} 
        />
      )}
      
      {amenities.convenience && (
        <AmenityCategory 
          title="Convenience" 
          items={amenities.convenience} 
        />
      )}
    </div>
  );
};

export default RoomAmenities;
