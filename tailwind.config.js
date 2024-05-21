/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        customGreen: "#007F19",
        customGray: "#DDDDDD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
