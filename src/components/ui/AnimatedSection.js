import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true,
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  // Define animation variants
  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 30 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration,
          delay,
          ease: "easeOut"
        }
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[animation]}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
