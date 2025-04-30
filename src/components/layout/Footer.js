import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import hotelData from "../../data/hotel.json";

const Footer = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <><footer className="bg-secondary-900 text-white pt-16 pb-6">
      <div className="container-luxury mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Hotel Info */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-xl font-serif mb-4 text-primary-300">
              {hotelData.name}
            </h3>
            <p className="text-neutral-300 mb-4 max-w-xs">
              {hotelData.description.substring(0, 120)}...
            </p>
            <div className="flex space-x-3 mt-6">
              <a
                href={hotelData.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary-800 text-white hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href={hotelData.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary-800 text-white hover:bg-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href={hotelData.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary-800 text-white hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href={hotelData.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary-800 text-white hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-xl font-serif mb-4 text-primary-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-neutral-300 hover:text-primary-200 transition-colors duration-300 inline-block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-neutral-300 hover:text-primary-200 transition-colors duration-300 inline-block py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/rooms"
                  className="text-neutral-300 hover:text-primary-200 transition-colors duration-300 inline-block py-1"
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-neutral-300 hover:text-primary-200 transition-colors duration-300 inline-block py-1"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-300 hover:text-primary-200 transition-colors duration-300 inline-block py-1"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-xl font-serif mb-4 text-primary-300">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary-300 mt-1 mr-3 flex-shrink-0" />
                <span className="text-neutral-300">
                  {hotelData.address.line1}, {hotelData.address.line2}, {hotelData.address.city}, {hotelData.address.state} {hotelData.address.postalCode}
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary-300 mr-3 flex-shrink-0" />
                <a
                  href={`tel:${hotelData.contact.phone}`}
                  className="text-neutral-300 hover:text-primary-200 transition-colors duration-300"
                >
                  {hotelData.contact.phone}
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary-300 mr-3 flex-shrink-0" />
                <a
                  href={`mailto:${hotelData.contact.email}`}
                  className="text-neutral-300 hover:text-primary-200 transition-colors duration-300"
                >
                  {hotelData.contact.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Book Now CTA */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-xl font-serif mb-4 text-primary-300">Book Your Stay</h3>
            <p className="text-neutral-300 mb-4">
              Experience luxury and comfort at Eastin Hotel Madhapur. Book directly for the best rates and exclusive offers.
            </p>
            <a
              href={hotelData.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block text-center mt-2"
            >
              Book Now
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-800 mt-12 pt-6 text-center">
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} {hotelData.name}. All Rights Reserved.
          </p>
        </div>
      </div>

    </footer><footer className="py-4 bg-neutral-900 text-white/80">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            Designed and developed with{' '}
            <span className="text-red-500 animate-pulse" aria-label="love">❤️</span>
            {' '}by{' '}
            <a
              href="https://linktr.ee/yashwanthbharadwaj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary-400 transition-colors font-medium"
            >
              Yashwanth Bharadwaj
            </a>
          </p>
        </div>
      </footer></>
  );
};

export default Footer;
