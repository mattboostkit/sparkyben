/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1C4F5A', // Teal (was orange)
          dark: '#133A43',    // Darker teal for hover states
          light: '#2A7384',   // Lighter teal for accents
        },
        secondary: {
          DEFAULT: '#2C3E50', // Deep blue-grey (original)
          light: '#34495E',   // Lighter blue-grey for sections (original)
        },
        neutral: {
          light: '#F8F9FA',   // Light background
          DEFAULT: '#E9ECEF', // Medium background
          dark: '#343A40',    // Dark text
        },
        accent: {
          DEFAULT: '#3498DB',  // Blue accent
          success: '#2ECC71',  // Success green
          warning: '#F39C12',  // Warning amber
          danger: '#E74C3C',   // Danger red
        },
        teal: {
          DEFAULT: '#51DBB1',  // Bright teal accent color
          light: '#7DE5C3',    // Lighter teal for hover effects
          dark: '#3AC79D'      // Darker teal for active states
        }
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};