/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#111",
        yellow: "#F4D04E",
        grey: "#7F7F7F",
      },
      fontFamily: {
        figtree: ['"Figtree"', '"sans-serif"'],
      },
    },
  },
  plugins: [],
};
