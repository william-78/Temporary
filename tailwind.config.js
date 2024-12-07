/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font: ['Epilogue', 'Jost', 'sans-serif', 'FontAwesome'], // Properly defined font-family stack
      },
    },
  },
  plugins: [],
};
