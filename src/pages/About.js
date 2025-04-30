import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaStar, FaHandshake, FaUsers, FaLightbulb, 
  FaHeart, FaLeaf, FaTrophy, FaCertificate, FaAward,
  FaBed, FaGlassCheers, FaBriefcase, FaUmbrellaBeach,
  FaBuilding, FaCalendarAlt, FaDoorOpen, FaMapMarkerAlt,
  FaConciergeBell, FaQuoteLeft
} from "react-icons/fa";

import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import FeatureCard from "../components/ui/FeatureCard";
import AnimatedSection from "../components/ui/AnimatedSection";
import { images } from "../utils/imageImports";

import aboutData from "../data/about.json";

const About = () => {
  // Helper function to render the correct icon
  const renderIcon = (iconName) => {
    const icons = {
      star: <FaStar />,
      handshake: <FaHandshake />,
      users: <FaUsers />,
      lightbulb: <FaLightbulb />,
      heart: <FaHeart />,
      leaf: <FaLeaf />,
      trophy: <FaTrophy />,
      certificate: <FaCertificate />,
      award: <FaAward />,
      bed: <FaBed />,
      "glass-cheers": <FaGlassCheers />,
      briefcase: <FaBriefcase />,
      "umbrella-beach": <FaUmbrellaBeach />,
      building: <FaBuilding />,
      "calendar-alt": <FaCalendarAlt />,
      "door-open": <FaDoorOpen />,
      "map-marker-alt": <FaMapMarkerAlt />,
      "concierge-bell": <FaConciergeBell />
    };
    return icons[iconName] || <FaStar />;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-36 bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <img
            src={images.lobby}
            alt={aboutData.hero.title}
            className="w-full h-full object-cover opacity-40"
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
              {aboutData.hero.title}
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {aboutData.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <AnimatedSection className="lg:w-1/2" animation="fadeInLeft">
              <SectionHeading title={aboutData.story.title} />
              
              <div className="space-y-6 text-neutral-700">
                {aboutData.story.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection className="lg:w-1/2" animation="fadeInRight">
              <img 
                src={images.lobby}
                alt={aboutData.story.imageAlt}
                className="w-full h-full object-cover rounded-lg shadow-lg" 
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={aboutData.stats.title} 
            light={true}
            center={true}
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
            {aboutData.stats.items.map((stat, index) => (
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

      {/* Facilities Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={aboutData.facilities.title} 
            subtitle={aboutData.facilities.subtitle}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {aboutData.facilities.items.map((facility, index) => (
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

      {/* Mission Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row gap-12 items-center">
            <AnimatedSection className="lg:w-1/2" animation="fadeInLeft">
              <img 
                src={images.carousel1}
                alt={aboutData.mission.imageAlt}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg" 
              />
            </AnimatedSection>
            
            <AnimatedSection className="lg:w-1/2" animation="fadeInRight">
              <SectionHeading title={aboutData.mission.title} />
              
              <div className="text-neutral-700 mb-8">
                <p className="text-lg italic border-l-4 border-primary-400 pl-4 py-2">
                  "{aboutData.mission.content}"
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection className="text-center">
            <div className="text-primary-500 text-4xl mb-6 flex justify-center">
              <FaQuoteLeft />
            </div>
            <blockquote className="text-xl md:text-2xl text-neutral-700 italic mb-8">
              "{aboutData.testimonial.quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <p className="font-serif text-lg font-medium text-neutral-900">
                {aboutData.testimonial.author}
              </p>
              <p className="text-neutral-500">
                {aboutData.testimonial.position}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={aboutData.values.title} 
            light={true} 
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {aboutData.values.items.map((value, index) => (
              <FeatureCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
                light={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={aboutData.team.title} 
            subtitle={aboutData.team.subtitle}
            center={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {aboutData.team.members.map((member, index) => (
              <AnimatedSection 
                key={index}
                className="bg-white rounded-lg shadow-soft overflow-hidden"
                delay={index * 0.1}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" // Team Image
                    alt={member.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-neutral-600">
                    {member.bio}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title={aboutData.achievements.title}
            center={true}
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            {aboutData.achievements.items.map((achievement, index) => (
              <AnimatedSection 
                key={index}
                className="flex items-center bg-white p-5 rounded-lg shadow-soft mb-6"
                delay={index * 0.1}
              >
                <div className="mr-6 text-primary-500 text-2xl">
                  {renderIcon(achievement.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-neutral-900">
                    {achievement.award}
                  </h3>
                  <p className="text-neutral-500">
                    {achievement.year}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            {aboutData.cta.title}
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            {aboutData.cta.content}
          </p>
          <Button 
            href={aboutData.cta.buttonUrl} 
            variant="light"
            size="lg"
          >
            {aboutData.cta.buttonText}
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
