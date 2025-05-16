/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    container: {
      center: true,
      padding: "15px",

      screens: {
        sm: "100%", // Kichik ekranlar
        md: "720px", // O'rta ekranlar
        lg: "960px", // Katta ekranlar
        xl: "1040px", // Juda katta ekranlar
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Add any custom colors here
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
