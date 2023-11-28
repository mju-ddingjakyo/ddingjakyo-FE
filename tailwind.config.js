/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      pre: ["Pretendard"],
      snow: ["SF_HambakSnow"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
