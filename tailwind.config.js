/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      pre: ["Pretendard"],
      snow: ["SF_HambakSnow"],
    },
  },

  plugins: [require("tailwind-scrollbar")],
};
