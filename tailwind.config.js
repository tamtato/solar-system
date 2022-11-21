/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Oswald", "sans-serif"],
        text: ["Poppins", "sans-serif"]
      }
    }
  },
  plugins: []
};
