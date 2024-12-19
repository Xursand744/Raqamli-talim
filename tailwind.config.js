/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    container: {
      center: true,
      padding: "15px",
      
      screens: {
        sm: "100%", // Kichik ekranlar
        md: "720px", // O'rta ekranlar
        lg: "960px", // Katta ekranlar
        xl: "1040px", // Juda katta ekranlar
        '2xl':'1200px'
      },

    },
    extend: {
   
    },
  },
  plugins: [],
};
