import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaCamera } from "react-icons/fa";

import SectionHeading from "../components/ui/SectionHeading";
import AnimatedSection from "../components/ui/AnimatedSection";
import { images } from "../utils/imageImports";

import galleryData from "../data/gallery.json";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(galleryData.categories[0].id);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [categoryImages, setCategoryImages] = useState([]);
  const [columns, setColumns] = useState(3);

  // Responsive columns based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1);
      } else if (window.innerWidth < 1024) {
        setColumns(2);
      } else {
        setColumns(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get current category
  const currentCategory = galleryData.categories.find(cat => cat.id === activeCategory);

  // Get image source based on image name
  const getImageSource = (imageName) => {
    const imageMap = {
      'lobby.jpg': images.lobby,
      'superior-king-1.jpg': images.superiorKing.img1,
      'superior-king-2.jpg': images.superiorKing.img2,
      'superior-king-3.jpg': images.superiorKing.img3,
      'superior-king-4.jpg': images.superiorKing.img4,
      'premium-king-1.jpg': images.premiumKing.img1,
      'premium-king-2.jpg': images.premiumKing.img2,
      'premium-king-3.jpg': images.premiumKing.img3,
      'premium-king-4.jpg': images.premiumKing.img4,
      'premium-twin-1.jpg': images.premiumTwin.img1,
      'premium-twin-2.jpg': images.premiumTwin.img2,
      'premium-twin-3.jpg': images.premiumTwin.img3,
      'premium-twin-4.jpg': images.premiumTwin.img4,
      'premium-twin-5.jpg': images.premiumTwin.img5,
      'executive-suite-1.jpg': images.executiveSuite.img1,
      'executive-suite-2.jpg': images.executiveSuite.img2,
      'executive-suite-3.jpg': images.executiveSuite.img3,
      'executive-suite-4.jpg': images.executiveSuite.img4,
      'junior-suite-1.jpg': images.juniorSuite.img1,
      'junior-suite-2.jpg': images.juniorSuite.img2,
      'junior-suite-3.jpg': images.juniorSuite.img3,
      'carousal-1.jpg': images.carousel1,
      'carousal-2.jpg': images.carousel2
    };
    return imageMap[imageName] || null;
  };

  // Open lightbox
  const openLightbox = (category, index) => {
    const categoryImages = galleryData.categories.find(cat => cat.id === category).images;
    setCategoryImages(categoryImages);
    setCurrentIndex(index);
    setSelectedImage(categoryImages[index]);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Navigate to previous image
  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + categoryImages.length) % categoryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(categoryImages[newIndex]);
  };

  // Navigate to next image
  const goToNext = () => {
    const newIndex = (currentIndex + 1) % categoryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(categoryImages[newIndex]);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-40 md:py-48 bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <img
            src={getImageSource(galleryData.hero.image)}
            alt="Eastin Hotel Gallery"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-neutral-900/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              className="inline-block p-4 rounded-full bg-primary/20 text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FaCamera size={28} />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {galleryData.hero.title}
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {galleryData.hero.subtitle}
            </motion.p>
            
            <motion.div 
              className="mt-8 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-0.5 w-16 bg-primary"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {galleryData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory?.images.map((image, index) => (
              <AnimatedSection
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer h-64 group"
                delay={index * 0.05}
              >
                <img
                  src={getImageSource(image.src)}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onClick={() => openLightbox(activeCategory, index)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white p-2 z-10 hover:text-gray-300"
              aria-label="Close lightbox"
            >
              <FaTimes size={24} />
            </button>

            {/* Navigation: Previous */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 text-white p-2 z-10 hover:text-gray-300"
              aria-label="Previous image"
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Navigation: Next */}
            <button
              onClick={goToNext}
              className="absolute right-4 text-white p-2 z-10 hover:text-gray-300"
              aria-label="Next image"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              className="relative max-w-full max-h-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={getImageSource(selectedImage.src)}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain mx-auto"
              />
              {selectedImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
                  {selectedImage.caption}
                </div>
              )}
            </motion.div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-0 right-0 text-center text-white">
              {currentIndex + 1} / {categoryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
