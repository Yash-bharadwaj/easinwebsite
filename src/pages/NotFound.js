import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";

const NotFound = () => {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-8xl font-serif text-primary mb-4">404</h1>
          <h2 className="text-3xl font-serif text-neutral-900 mb-6">Page Not Found</h2>
          <p className="text-neutral-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              to="/" 
              variant="primary"
            >
              Return to Homepage
            </Button>
            
            <Button 
              to="/contact" 
              variant="outline"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
