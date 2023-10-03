/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        formErrorColor: "#FF5757",
        grayColor: "#FFFFFF33",
        darkGrayColor: "#ffffff75",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        buttonBg:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))",
        headerBg:
          "linear-gradient(180deg, #001826 0%, rgba(0, 37, 49, 0) 100%)",
      },
      backgroundColor: {
        bgColor: "#020F08BF",
        menuColor: "#010a05bf",
        inputBg: "#FFFFFF0D",
        inputFocusBg: "#FFFFFF1A",
        buttonBg: "#FFFFFF33",
      },
      screens: {
        xs: "320px",
        sm: "768px",
        sd: "480px",
        md: "1280px",
      },
    },
  },
  plugins: [],
};
