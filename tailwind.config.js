/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      contain: {
        layout: "layout",
        paint: "paint",
      },
    },
  },
  plugins: [],
}