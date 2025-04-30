import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import hotelData from "../../data/hotel.json";
import { images } from "../../utils/imageImports";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Check if the route is active
  const isActive = (path) => location.pathname === path;

  // Change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Navigation Items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // Menu animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-luxury mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="relative z-10"
          onClick={closeMenu}
        >
          <motion.div 
            className="flex items-center" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={images.logo} 
              alt="Eastin Hotel Logo" 
              className="h-10 w-auto mr-3"
            />
            <span className={`font-display text-2xl md:text-3xl font-semibold ${scrolled ? 'text-primary' : 'text-white'}`}>
              {hotelData.logoText}
            </span>
            <span className={`ml-2 text-xs md:text-sm uppercase tracking-widest ${scrolled ? 'text-secondary' : 'text-white'}`}>
              Hotel
            </span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm uppercase tracking-wider font-medium transition-colors ${
                isActive(item.path)
                  ? scrolled
                    ? "text-primary"
                    : "text-primary-300"
                  : scrolled
                  ? "text-neutral-800 hover:text-primary"
                  : "text-white hover:text-primary-200"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <a
            href={hotelData.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm uppercase tracking-wider py-2"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile: Phone & Menu Toggle */}
        <div className="flex items-center lg:hidden space-x-4">
          <a
            href={`tel:${hotelData.contact.phone}`}
            className={`p-2 rounded-full ${
              scrolled
                ? "text-primary bg-primary-50"
                : "text-white bg-white/20"
            }`}
          >
            <FaPhone />
          </a>
          <button
            onClick={toggleMenu}
            className={`p-2 rounded-full ${
              scrolled
                ? "text-primary bg-primary-50"
                : "text-white bg-white/20"
            }`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <motion.nav
              className="container mx-auto px-4 py-5 flex flex-col"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navItems.map((item) => (
                <motion.div key={item.name} variants={itemVariants}>
                  <Link
                    to={item.path}
                    className={`block py-3 text-center font-medium ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-neutral-800 hover:text-primary"
                    }`}
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div className="mt-4" variants={itemVariants}>
                <a
                  href={hotelData.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary block text-center py-3"
                  onClick={closeMenu}
                >
                  Book Now
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
