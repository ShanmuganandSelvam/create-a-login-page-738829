/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        "primary-dark": "#3730A3",
        "primary-light": "#818CF8"
      },
      boxShadow: {
        'input': '0 0 0 2px rgba(79, 70, 229, 0.2)',
      },
    },
  },
  plugins: [],
}