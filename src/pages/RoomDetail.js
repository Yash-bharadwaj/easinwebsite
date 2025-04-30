import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronLeft, FaStar } from "react-icons/fa";

import RoomFeatures from "../components/rooms/RoomFeatures";
import RoomAmenities from "../components/rooms/RoomAmenities";
import RoomSuitability from "../components/rooms/RoomSuitability";
import BookingCTA from "../components/rooms/BookingCTA";
import Button from "../components/ui/Button";
import AnimatedSection from "../components/ui/AnimatedSection";
import { images } from "../utils/imageImports";

const RoomDetail = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get room images based on room type
  const getRoomImages = (roomId) => {
    switch (roomId) {
      case 'superior-king':
        return [
          { src: images.superiorKing.img1, alt: "Room Overview" },
          { src: images.superiorKing.img2, alt: "Room Interior" },
          { src: images.superiorKing.img3, alt: "Bathroom" },
          { src: images.superiorKing.img4, alt: "Room View" }
        ];
      case 'premium-king':
        return [
          { src: images.premiumKing.img1, alt: "Room Overview" },
          { src: images.premiumKing.img2, alt: "Room Interior" },
          { src: images.premiumKing.img3, alt: "Bathroom" },
          { src: images.premiumKing.img4, alt: "Room View" }
        ];
      case 'premium-twin':
        return [
          { src: images.premiumTwin.img1, alt: "Room Overview" },
          { src: images.premiumTwin.img2, alt: "Room Interior" },
          { src: images.premiumTwin.img3, alt: "Bathroom" },
          { src: images.premiumTwin.img4, alt: "Room View" }
        ];
      case 'junior-suite':
        return [
          { src: images.juniorSuite.img1, alt: "Suite Overview" },
          { src: images.juniorSuite.img2, alt: "Living Area" },
          { src: images.juniorSuite.img3, alt: "Bedroom" }
        ];
      case 'executive-suite':
        return [
          { src: images.executiveSuite.img1, alt: "Suite Overview" },
          { src: images.executiveSuite.img2, alt: "Living Area" },
          { src: images.executiveSuite.img3, alt: "Bedroom" },
          { src: images.executiveSuite.img4, alt: "Bathroom" }
        ];
      default:
        return [
          { src: images.superiorKing.img1, alt: "Room Overview" },
          { src: images.superiorKing.img2, alt: "Room Interior" },
          { src: images.superiorKing.img3, alt: "Bathroom" },
          { src: images.superiorKing.img4, alt: "Room View" }
        ];
    }
  };

  // Fetch room data based on roomId
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        // In a real app, this would be an API call
        const response = await import(`../data/rooms/${roomId}.json`);
        setRoom(response.default);
        setLoading(false);
      } catch (err) {
        console.error("Error loading room data:", err);
        setError("Room not found");
        setLoading(false);
      }
    };

    fetchRoomData();
  }, [roomId]);

  const roomImages = getRoomImages(roomId);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-32">
        <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-3xl font-serif text-neutral-900 mb-4">Room Not Found</h1>
        <p className="text-neutral-600 mb-8">The room you are looking for does not exist.</p>
        <Button to="/rooms" variant="primary">
          View All Rooms
        </Button>
      </div>
    );
  }

  return (
    <>
      {room && (
        <>
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 bg-neutral-900">
            <div className="absolute inset-0 z-0">
              <img
                src={roomImages[0].src}
                alt={room.name}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <Link to="/rooms" className="inline-flex items-center text-white mb-6 hover:text-primary-200 transition-colors">
                <FaChevronLeft className="mr-2" />
                <span>Back to All Rooms</span>
              </Link>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">
                  {room.name}
                </h1>
                <p className="text-lg text-neutral-200 max-w-3xl">
                  {room.description.substring(0, 150)}...
                </p>
                <div className="flex items-center mt-4">
                  <div className="p-2 bg-primary-100/20 rounded-full mr-3">
                    <FaStar className="text-primary-300" />
                  </div>
                  <div>
                    <p className="text-primary-300 text-xl font-medium">
                      Most Popular Choice
                    </p>
                    <p className="text-neutral-300 text-sm">
                      Booked by 1000+ guests
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Room Details */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  {/* Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    <div className="md:col-span-2">
                      <img 
                        src={roomImages[0].src}
                        alt={room.name}
                        className="w-full h-64 md:h-96 object-cover rounded-lg"
                      />
                    </div>
                    {roomImages.slice(1, 3).map((image, index) => (
                      <img 
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    ))}
                  </div>

                  {/* Room Description */}
                  <AnimatedSection className="mb-12">
                    <h2 className="text-2xl font-serif mb-4">About This Room</h2>
                    <div className="space-y-4 text-neutral-700">
                      <p>{room.description}</p>
                    </div>
                  </AnimatedSection>

                  {/* Room Features */}
                  <AnimatedSection className="mb-12">
                    <h2 className="text-2xl font-serif mb-6">Room Features</h2>
                    <RoomFeatures room={room} />
                  </AnimatedSection>

                  {/* Feature List */}
                  <AnimatedSection className="mb-12">
                    <h2 className="text-2xl font-serif mb-6">Included Amenities</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                      {room.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-neutral-700">
                          <span className="w-2 h-2 rounded-full bg-primary-400 mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </AnimatedSection>

                  {/* Detailed Amenities */}
                  <AnimatedSection className="mb-12">
                    <RoomAmenities amenities={room.amenities} />
                  </AnimatedSection>
                </div>

                <div className="lg:col-span-1">
                  <div className="sticky top-32">
                    <BookingCTA price={room.price} bookingUrl={room.bookingUrl} />
                    
                    <AnimatedSection className="mt-8 bg-neutral-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-neutral-900 mb-4">Need Assistance?</h3>
                      <p className="text-neutral-600 mb-4">
                        Our reservations team is available to help you choose the perfect room for your stay.
                      </p>
                      <Button
                        href="tel:+919177426111"
                        variant="outline"
                        className="w-full justify-center"
                      >
                        Call Reservations
                      </Button>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Room Suitability */}
          <section className="py-16 bg-neutral-50">
            <div className="container mx-auto px-4">
              <RoomSuitability suitableFor={room.suitableFor} />
            </div>
          </section>

          {/* Related Rooms */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-serif mb-8 text-center">
                Explore Other Room Types
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatedSection 
                  className="card overflow-hidden flex flex-col"
                  animation="fadeInUp"
                  delay={0.1}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={images.superiorKing.img1}
                      alt="Superior King Room"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 text-xl font-serif text-white">
                      Superior King Room
                    </h3>
                  </div>
                  <div className="p-6">
                    <Link 
                      to="/rooms/superior-king" 
                      className="text-primary font-medium hover:text-primary-700 transition-colors flex items-center"
                    >
                      <span>View Details</span>
                      <FaChevronLeft className="ml-2 rotate-180 text-sm" />
                    </Link>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection 
                  className="card overflow-hidden flex flex-col"
                  animation="fadeInUp"
                  delay={0.2}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={images.executiveSuite.img1}
                      alt="Executive Suite"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 text-xl font-serif text-white">
                      Executive Suite
                    </h3>
                  </div>
                  <div className="p-6">
                    <Link 
                      to="/rooms/executive-suite" 
                      className="text-primary font-medium hover:text-primary-700 transition-colors flex items-center"
                    >
                      <span>View Details</span>
                      <FaChevronLeft className="ml-2 rotate-180 text-sm" />
                    </Link>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection 
                  className="card overflow-hidden flex flex-col"
                  animation="fadeInUp"
                  delay={0.3}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={images.premiumKing.img1}
                      alt="Premium King Room"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 text-xl font-serif text-white">
                      Premium King Room
                    </h3>
                  </div>
                  <div className="p-6">
                    <Link 
                      to="/rooms/premium-room" 
                      className="text-primary font-medium hover:text-primary-700 transition-colors flex items-center"
                    >
                      <span>View Details</span>
                      <FaChevronLeft className="ml-2 rotate-180 text-sm" />
                    </Link>
                  </div>
                </AnimatedSection>
              </div>
              
              <div className="mt-10 text-center">
                <Button 
                  to="/rooms" 
                  variant="outline"
                >
                  View All Rooms
                </Button>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default RoomDetail;
