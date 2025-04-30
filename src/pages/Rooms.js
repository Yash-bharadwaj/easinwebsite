import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaBed, FaWifi, FaCoffee, FaTv, FaUtensils, FaSnowflake,
  FaTemperatureLow, FaBath, FaLock,
  FaPhone, FaBriefcase
} from "react-icons/fa";

import SectionHeading from "../components/ui/SectionHeading";
import RoomCard from "../components/rooms/RoomCard";
import Button from "../components/ui/Button";
import { images } from "../utils/imageImports";

import roomsData from "../data/rooms.json";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load room data
  useEffect(() => {
    // Simulating data loading
    setTimeout(() => {
      setRooms(roomsData.rooms);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <img
            src={images.superiorKing.img1}
            alt="Luxury Hotel Rooms"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <motion.h1
              className="text-4xl md:text-5xl font-serif text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {roomsData.hero.title}
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {roomsData.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Rooms Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Luxurious Accommodations"
            subtitle="Choose from our selection of elegant rooms and suites"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
            {/* Superior King Room */}
            <motion.div
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={images.superiorKing.img1}
                  alt="Superior King Room"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">Superior King Room</h3>
                <p className="text-white/80 mb-4">Perfect for business travelers and couples</p>
                <Button
                  to="/rooms/superior-king"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-neutral-900"
                >
                  Explore Room
                </Button>
              </div>
            </motion.div>

            {/* Premium King Room */}
            <motion.div
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={images.premiumKing.img1}
                  alt="Premium King Room"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">Premium King Room</h3>
                <p className="text-white/80 mb-4">Elevated comfort with premium amenities</p>
                <Button
                  to="/rooms/premium-room"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-neutral-900"
                >
                  Explore Room
                </Button>
              </div>
            </motion.div>

            {/* Executive Suite */}
            <motion.div
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={images.executiveSuite.img1}
                  alt="Executive Suite"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">Executive Suite</h3>
                <p className="text-white/80 mb-4">Luxurious suite with separate living area</p>
                <Button
                  to="/rooms/executive-suite"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-neutral-900"
                >
                  Explore Room
                </Button>
              </div>
            </motion.div>

            {/* Premium Twin Room */}
            <motion.div
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={images.premiumTwin.img1}
                  alt="Premium Twin Room"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-serif mb-2">Premium Twin Room</h3>
                <p className="text-white/80 mb-4">Perfect for families or sharing</p>
                <Button
                  to="/rooms/premium-twin"
                  variant="outline"
                  className="text-white border-white hover:bg-white hover:text-neutral-900"
                >
                  Explore Room
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Room Amenities */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={roomsData.amenities.title}
            center={true}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12">
            {roomsData.amenities.items.slice(0, 10).map((amenity, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center mb-3">
                  {amenity.icon === "wifi" && <FaWifi />}
                  {amenity.icon === "tv" && <FaTv />}
                  {amenity.icon === "coffee" && <FaCoffee />}
                  {amenity.icon === "bed" && <FaBed />}
                  {amenity.icon === "utensils" && <FaUtensils />}
                  {amenity.icon === "temperature-low" && <FaTemperatureLow />}
                  {amenity.icon === "bath" && <FaBath />}
                  {amenity.icon === "lock" && <FaLock />}
                  {amenity.icon === "phone" && <FaPhone />}
                  {amenity.icon === "snowflake" && <FaSnowflake />}
                  {amenity.icon === "briefcase" && <FaBriefcase />}
                </div>
                <span className="text-neutral-800">{amenity.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={roomsData.policies.title}
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {roomsData.policies.items.map((policy, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-soft"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-primary mb-3">
                  {policy.icon === "clock" && <FaWifi className="text-2xl" />}
                  {policy.icon === "child" && <FaWifi className="text-2xl" />}
                  {policy.icon === "paw" && <FaWifi className="text-2xl" />}
                  {policy.icon === "smoking-ban" && <FaWifi className="text-2xl" />}
                </div>
                <h3 className="text-lg font-medium text-neutral-900 mb-2">{policy.title}</h3>
                <p className="text-neutral-600 whitespace-pre-line">{policy.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif mb-4">{roomsData.cta.title}</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">{roomsData.cta.content}</p>
            <Button 
              href={roomsData.cta.buttonUrl} 
              variant="light" 
              size="lg"
            >
              {roomsData.cta.buttonText}
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Rooms;
