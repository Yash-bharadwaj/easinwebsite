import { motion } from "framer-motion";

const SectionHeading = ({ 
  title, 
  subtitle, 
  center = false,
  light = false,
  className = "" 
}) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''} ${className}`}>
      <motion.h2 
        className={`font-serif text-3xl lg:text-4xl mb-3 ${light ? 'text-white' : 'text-neutral-900'}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`text-lg ${light ? 'text-neutral-200' : 'text-neutral-600'}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
