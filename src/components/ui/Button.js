import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Button = ({ 
  children, 
  to, 
  href, 
  variant = "primary", 
  size = "md", 
  className = "", 
  onClick,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600",
    secondary: "bg-secondary-900 text-white hover:bg-secondary-800 focus:ring-secondary-700",
    outline: "border-2 border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50 focus:ring-primary-600",
    light: "bg-white text-neutral-900 hover:bg-neutral-100 focus:ring-neutral-300",
    accent: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
    ghost: "bg-transparent text-primary-600 hover:bg-primary-50 focus:ring-primary-600"
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  // Render link or button
  if (to) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  } else if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      </motion.div>
    );
  } else {
    return (
      <motion.button
        className={classes}
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
};

export default Button;
