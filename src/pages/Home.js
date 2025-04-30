import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaChevronRight, FaCalendarAlt, FaDoorOpen, 
  FaMapMarkerAlt, FaConciergeBell, FaGlassCheers,
  FaBed, FaBriefcase, FaUmbrellaBeach, FaBuilding,
  FaWifi, FaUtensils, FaBusinessTime
} from "react-icons/fa";

import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import FeatureCard from "../components/ui/FeatureCard";
import AnimatedSection from "../components/ui/AnimatedSection";
import { images } from "../utils/imageImports";

import homeData from "../data/home.json";
import hotelData from "../data/hotel.json";

const Home = () => {
  // Hero images with proper paths
  const heroImages = homeData.hero.carousel.map(item => ({
    src: images[item.image]?.img1 || images[item.image],
    alt: item.alt
  })).filter(image => image.src);

  // Carousel state and timing
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const slideDuration = 5;
  const totalDuration = slideDuration * heroImages.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, slideDuration * 1000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Helper function to render the correct icon
  const renderIcon = (iconName) => {
    const icons = {
      "calendar-alt": <FaCalendarAlt />,
      "door-open": <FaDoorOpen />,
      "map-marker-alt": <FaMapMarkerAlt />,
      "glass-cheers": <FaGlassCheers />,
      "concierge-bell": <FaConciergeBell />,
      bed: <FaBed />,
      briefcase: <FaBriefcase />,
      "umbrella-beach": <FaUmbrellaBeach />,
      building: <FaBuilding />,
      wifi: <FaWifi />,
      utensils: <FaUtensils />,
      "business-time": <FaBusinessTime />
    };
    return icons[iconName] || null;
  };

  // Check if homeData and its properties exist to prevent errors
  const heroTitle = homeData?.hero?.title || "Welcome to Eastin Hotel";
  const heroSubtitle = homeData?.hero?.subtitle || "Experience luxury and comfort";
  const heroCta = homeData?.hero?.cta || "Book Now";
  const heroCtaUrl = homeData?.hero?.ctaUrl || "https://be.aiosell.com/book/eastin-hotel-madhapur";

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Carousel */}
        <div className="absolute inset-0 w-full h-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-black/40" />
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Hero Content - Fixed position */}
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
              letterSpacing: '-0.02em'
            }}
          >
            {homeData.hero.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-12 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              textShadow: '1px 1px 4px rgba(0,0,0,0.6)',
              fontWeight: '300'
            }}
          >
            {homeData.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              href={homeData.hero.ctaUrl} 
              variant="primary" 
              size="lg"
              className="min-w-[200px] bg-primary-600 hover:bg-primary-700 text-white border-2 border-white/20 shadow-lg transition-all duration-300 hover:scale-105"
            >
              {homeData.hero.cta}
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white z-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="flex flex-col items-center">
            <span className="mb-2 text-sm uppercase tracking-widest">Scroll</span>
            <div className="w-0.5 h-8 bg-white/50"></div>
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection 
              className="lg:w-1/2" 
              animation="fadeInLeft"
            >
              <img 
                src={images.lobby}
                alt={homeData.welcome.imageAlt}
                className="w-full h-full object-cover rounded-lg shadow-lg" 
              />
            </AnimatedSection>
            
            <AnimatedSection 
              className="lg:w-1/2" 
              animation="fadeInRight"
            >
              <SectionHeading
                title={homeData.welcome.title}
                subtitle={homeData.welcome.subtitle}
              />
              
              <div className="space-y-4 text-neutral-700">
                <p>{homeData.welcome.content}</p>
              </div>
              
              <div className="mt-8">
                <Button 
                  to="/about" 
                  variant="outline"
                  className="flex items-center"
                >
                  <span>Learn More About Us</span>
                  <FaChevronRight className="ml-2" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* By The Numbers Section - Added after Welcome Section */}
      {homeData?.byTheNumbers && (
        <section className="py-16 bg-primary-600 text-white">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title={homeData.byTheNumbers.title} 
              subtitle={homeData.byTheNumbers.subtitle}
              light={true}
              center={true}
            />
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
              {(homeData.byTheNumbers.items || []).map((stat, index) => (
                <AnimatedSection 
                  key={index}
                  className="text-center p-6 bg-primary-700/30 rounded-lg"
                  delay={index * 0.1}
                >
                  <div className="text-primary-200 text-3xl mb-4">
                    {renderIcon(stat.icon)}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-primary-100">
                    {stat.label}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={homeData.features.title}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {homeData.features.items.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Facilities Section */}
      {homeData?.facilities && (
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeading 
              title={homeData.facilities.title} 
              subtitle={homeData.facilities.subtitle}
              center={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {(homeData.facilities.items || []).map((facility, index) => (
                <AnimatedSection 
                  key={index}
                  className="bg-neutral-50 p-8 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
                  delay={index * 0.1}
                >
                  <div className="text-primary-600 text-3xl mb-4">
                    {renderIcon(facility.icon)}
                  </div>
                  <h3 className="text-xl font-serif text-neutral-900 mb-3">
                    {facility.title}
                  </h3>
                  <p className="text-neutral-600">
                    {facility.description}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Room Preview Section */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Luxurious Accommodations"
            subtitle="Choose from our selection of elegant rooms and suites"
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <AnimatedSection 
              className="card overflow-hidden h-full flex flex-col"
              delay={0.1}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={images.superiorKing?.img1}
                  alt="Superior King Room"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-xl font-serif text-white">
                  Superior King Room
                </h3>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-neutral-600 mb-6">
                  Experience comfort in our well-appointed Superior King Room, perfect for business travelers and couples.
                </p>
                <Link 
                  to="/rooms/superior-king" 
                  className="mt-auto text-primary font-medium hover:text-primary-700 transition-colors flex items-center"
                >
                  <span>Explore Room</span>
                  <FaChevronRight className="ml-2 text-sm" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection 
              className="card overflow-hidden h-full flex flex-col"
              delay={0.2}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={images.premiumKing?.img1}
                  alt="Premium King Room"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-xl font-serif text-white">
                  Premium King Room
                </h3>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-neutral-600 mb-6">
                  Upgrade your stay with our Premium King Room, featuring additional amenities and space.
                </p>
                <Link 
                  to="/rooms/premium-room" 
                  className="mt-auto text-primary font-medium hover:text-primary-700 transition-colors flex items-center"
                >
                  <span>Explore Room</span>
                  <FaChevronRight className="ml-2 text-sm" />
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection 
              className="card overflow-hidden h-full flex flex-col"
              delay={0.3}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={images.executiveSuite?.img1}
                  alt="Executive Suite"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-xl font-serif text-white">
                  Executive Suite
                </h3>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-neutral-600 mb-6">
                  Indulge in luxury with our spacious Executive Suite, offering separate living and sleeping areas.
                </p>
                <Link 
                  to="/rooms/executive-suite" 
                  className="mt-auto text-primary font-medium hover:text-primary-700 transition-colors flex items-center"
                >
                  <span>Explore Room</span>
                  <FaChevronRight className="ml-2 text-sm" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              to="/rooms" 
              variant="primary"
            >
              View All Rooms
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-secondary-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMDMwNDAiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTJoMnYyek0zMCAzNGgtMnYtMmgydjJ6TTI0IDM0aC0ydi0yaDJ2eiIvPjwvZz48L2c+PC9zdmc+')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading
            title={homeData.testimonials.title}
            subtitle={homeData.testimonials.subtitle}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {homeData.testimonials.items.map((testimonial, index) => (
              <AnimatedSection 
                key={index}
                className="bg-white p-8 rounded-lg shadow-soft hover:shadow-medium transition-shadow"
                delay={index * 0.1}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={
                        index === 0 
                          ? "/src/images/lobby.jpg"
                          : index === 1 
                            ? "/src/images/carousal-1.jpg"
                            : "/src/images/carousal-2.jpg"
                      }
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-neutral-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-neutral-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <blockquote className="text-neutral-700 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="mt-4 flex">
                  {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                    <span className="text-primary">½</span>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Hotel Gallery"
            subtitle="Explore the elegance and luxury of our spaces"
            center={true}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            <AnimatedSection 
              className="relative overflow-hidden rounded-lg aspect-square"
              animation="fadeIn"
              delay={0.1}
            >
              <img 
                src={images.lobby}
                alt="Hotel Lobby"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </AnimatedSection>
            
            <AnimatedSection 
              className="relative overflow-hidden rounded-lg aspect-square"
              animation="fadeIn"
              delay={0.2}
            >
              <img 
                src={images.superiorKing.img1}
                alt="Superior King Room"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </AnimatedSection>
            
            <AnimatedSection 
              className="relative overflow-hidden rounded-lg aspect-square"
              animation="fadeIn"
              delay={0.3}
            >
              <img 
                src={images.premiumKing.img1}
                alt="Premium King Room"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </AnimatedSection>
            
            <AnimatedSection 
              className="relative overflow-hidden rounded-lg aspect-square"
              animation="fadeIn"
              delay={0.4}
            >
              <img 
                src={images.juniorSuite.img1}
                alt="Junior Suite"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </AnimatedSection>
            
            <AnimatedSection 
              className="relative overflow-hidden rounded-lg aspect-square"
              animation="fadeIn"
              delay={0.5}
            >
              <img 
                src={images.executiveSuite.img1}
                alt="Executive Suite"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </AnimatedSection>
            
            <AnimatedSection 
              className="relative overflow-hidden rounded-lg aspect-square"
              animation="fadeIn"
              delay={0.6}
            >
              <img 
                src={images.premiumTwin.img1}
                alt="Premium Twin Room"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </AnimatedSection>
            
            <AnimatedSection 
              className="relative overflow-hidden rounded-lg aspect-square"
              animation="fadeIn"
              delay={0.7}
            >
              <img 
                src={images.carousel1}
                alt="Hotel Entrance"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </AnimatedSection>
            
            <AnimatedSection 
              className="relative overflow-hidden rounded-lg aspect-square"
              animation="fadeIn"
              delay={0.8}
            >
              <img 
                src={images.carousel2}
                alt="Hotel Exterior"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </AnimatedSection>
          </div>
          
          <div className="mt-12 text-center">
            <Button 
              to="/gallery" 
              variant="outline"
              className="flex items-center mx-auto"
            >
              <span>View Full Gallery</span>
              <FaChevronRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              {homeData.cta.title}
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              {homeData.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                href={homeData.cta.buttonUrl} 
                variant="light"
                size="lg"
              >
                {homeData.cta.buttonText}
              </Button>
              
              <Button 
                to={homeData.cta.secondaryButtonUrl} 
                variant="outline"
                className="text-white border-white hover:bg-primary-500"
                size="lg"
              >
                {homeData.cta.secondaryButtonText}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer Credit */}
     
    </>
  );
};

export default Home;
