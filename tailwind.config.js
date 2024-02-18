/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    daisyui: {
      themes: ["light", "dark", "cupcake", "wireframe"],
    },
    fontFamily: {
      Khand: ["Khand", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
