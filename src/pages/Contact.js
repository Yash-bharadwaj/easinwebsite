import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import AnimatedSection from "../components/ui/AnimatedSection";

// Import contact data with a fallback
import contactData from "../data/contact.json";

// Default data in case the JSON is missing or incomplete
const defaultContactData = {
  hero: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you"
  },
  address: {
    street: "Plot No. 1, Survey No. 64, Hitech City Main Road",
    city: "Madhapur, Hyderabad",
    state: "Telangana",
    zip: "500081",
    country: "India"
  },
  phone: {
    reservations: "+91 9177426111",
    frontDesk: "+91 9177426111"
  },
  email: {
    reservations: "reservations@eastinhotels.in",
    inquiries: "info@eastinhotels.in"
  },
  hours: {
    checkIn: "2:00 PM",
    checkOut: "12:00 PM",
    frontDesk: "24/7"
  }
};

// Merge the imported data with defaults to ensure all required fields exist
const mergedContactData = {
  ...defaultContactData,
  ...contactData,
  address: {
    ...defaultContactData.address,
    ...(contactData?.address || {})
  },
  phone: {
    ...defaultContactData.phone,
    ...(contactData?.phone || {})
  },
  email: {
    ...defaultContactData.email,
    ...(contactData?.email || {})
  },
  hours: {
    ...defaultContactData.hours,
    ...(contactData?.hours || {})
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("loading");
    
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 bg-neutral-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa" // Hotel Lobby
            alt="Contact Eastin Hotel"
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
              {mergedContactData.hero.title}
            </motion.h1>
            <motion.p
              className="text-xl text-neutral-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {mergedContactData.hero.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3">
              <SectionHeading
                title="Get in Touch"
                subtitle="We're here to help and answer any questions you might have"
              />
              
              <div className="mt-8 space-y-6">
                <AnimatedSection className="flex items-start" delay={0.1}>
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-neutral-900 mb-1">Address</h3>
                    <p className="text-neutral-600">
                      {mergedContactData.address.street}<br />
                      {mergedContactData.address.city}, {mergedContactData.address.state} {mergedContactData.address.zip}<br />
                      {mergedContactData.address.country}
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection className="flex items-start" delay={0.2}>
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-neutral-900 mb-1">Phone</h3>
                    <p className="text-neutral-600">
                      Reservations: <a href={`tel:${mergedContactData.phone.reservations}`} className="text-primary-600 hover:underline">{mergedContactData.phone.reservations}</a><br />
                      Front Desk: <a href={`tel:${mergedContactData.phone.frontDesk}`} className="text-primary-600 hover:underline">{mergedContactData.phone.frontDesk}</a>
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection className="flex items-start" delay={0.3}>
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-neutral-900 mb-1">Email</h3>
                    <p className="text-neutral-600">
                      Reservations: <a href={`mailto:${mergedContactData.email.reservations}`} className="text-primary-600 hover:underline">{mergedContactData.email.reservations}</a><br />
                      Inquiries: <a href={`mailto:${mergedContactData.email.inquiries}`} className="text-primary-600 hover:underline">{mergedContactData.email.inquiries}</a>
                    </p>
                  </div>
                </AnimatedSection>
                
                <AnimatedSection className="flex items-start" delay={0.4}>
                  <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-neutral-900 mb-1">Hours</h3>
                    <p className="text-neutral-600">
                      Check-in: {mergedContactData.hours.checkIn}<br />
                      Check-out: {mergedContactData.hours.checkOut}<br />
                      Front Desk: {mergedContactData.hours.frontDesk}
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
            
            {/* Contact Form */}
            <AnimatedSection className="lg:w-2/3 bg-neutral-50 p-8 rounded-lg shadow-soft" animation="fadeInUp">
              <h2 className="text-2xl font-serif text-neutral-900 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">Phone (optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    required
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full md:w-auto"
                  disabled={formStatus === "loading"}
                >
                  {formStatus === "loading" ? "Sending..." : "Send Message"}
                </Button>
                
                {formStatus === "success" && (
                  <p className="mt-4 text-green-600">Your message has been sent successfully. We'll get back to you soon!</p>
                )}
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Find Us"
            subtitle="Located in the heart of Madhapur, Hyderabad's tech hub"
            center={true}
          />
          
          <AnimatedSection className="mt-10 h-[500px] rounded-lg overflow-hidden shadow-md" animation="fadeIn">
            <div className="h-full w-full relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3001861730394!2d78.38954817469772!3d17.440743704235835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb915c6efb6b9f%3A0xd92f88cd152ecaf1!2sEastin%20Hotels!5e0!3m2!1sen!2sin!4v1714553271118!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Eastin Hotel Location"
                className="absolute inset-0"
              ></iframe>
              
              {/* Custom overlay for consistent styling */}
              <div className="absolute top-4 left-4 bg-white py-2 px-4 rounded-lg shadow-md z-10 flex items-center">
                <FaMapMarkerAlt className="text-primary-600 mr-2" />
                <span className="font-medium">Eastin Hotel Madhapur</span>
              </div>
            </div>
          </AnimatedSection>
          
          <div className="mt-8 text-center">
            <a 
              href="https://www.google.com/maps/place/Eastin+Hotels/@17.4407437,78.3895482,947m/data=!3m2!1e3!4b1!4m9!3m8!1s0x3bcb915c6efb6b9f:0xd92f88cd152ecaf1!5m2!4m1!1i2!8m2!3d17.4407437!4d78.3921231!16s%2Fg%2F11vrl5hly3?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              <span>View on Google Maps</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
