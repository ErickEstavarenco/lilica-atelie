/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#6B705C",
          secondary: "#CB997E",
          light: "#FFE8D6",
          dark: "#3A5A40",
          neutral: "#F8F5F2",
        }
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
