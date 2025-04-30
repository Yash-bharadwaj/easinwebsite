/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#997a3f', // Luxurious gold
          50: '#faf5eb',
          100: '#f2e7ce',
          200: '#e6d2a6',
          300: '#d7b97d', 
          400: '#c9a254',
          500: '#b89143',
          600: '#997a3f', // Base gold
          700: '#7d6434',
          800: '#604e28',
          900: '#443821',
        },
        secondary: {
          DEFAULT: '#14253c', // Deep navy blue
          50: '#e9eef5',
          100: '#c9d3e5',
          200: '#a5b6d0',
          300: '#8199bc',
          400: '#6680a9',
          500: '#4b6590',
          600: '#3a4e75',
          700: '#2c3c5a',
          800: '#1f2a40',
          900: '#14253c', // Base navy
        },
        neutral: {
          DEFAULT: '#262626', // Near black
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#cccccc',
          400: '#b3b3b3',
          500: '#999999',
          600: '#737373',
          700: '#595959',
          800: '#404040', 
          900: '#262626', // Base near black
        },
        accent: {
          DEFAULT: '#8c594e', // Terracotta/burgundy
          hover: '#7a4942',
          active: '#683c37',
        }
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1' }],  // 72px
        'display-2': ['3.75rem', { lineHeight: '1.1' }], // 60px
        'display-3': ['3rem', { lineHeight: '1.15' }],   // 48px
        'h1': ['2.5rem', { lineHeight: '1.2' }],         // 40px
        'h2': ['2rem', { lineHeight: '1.25' }],          // 32px  
        'h3': ['1.75rem', { lineHeight: '1.3' }],        // 28px
        'h4': ['1.5rem', { lineHeight: '1.35' }],        // 24px
        'h5': ['1.25rem', { lineHeight: '1.4' }],        // 20px
        'h6': ['1.125rem', { lineHeight: '1.45' }],      // 18px
        'body': ['1rem', { lineHeight: '1.6' }],         // 16px
        'small': ['0.875rem', { lineHeight: '1.5' }],    // 14px
        'xs': ['0.75rem', { lineHeight: '1.5' }],        // 12px
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'hard': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.03)',
        'glow': '0 0 15px rgba(153, 122, 63, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'pulse-soft': 'pulseSoft 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 },
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
};