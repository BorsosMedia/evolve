import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        greyBg: "#232323",
        greyText: "#202020",
        lightGrey: "#EBF4FF",
        red: "#DE3A2F",
        white: "#F3F3F3",
      },
      backgroundImage: {
        body: "linear-gradient(90deg, #000 0%, #232323 46.95%, #000 97.98%);",
        about:
          "linear-gradient(180deg, rgba(222, 58, 47, 0.29) 0%, rgba(222, 58, 47, 0.00) 100%);",
        card: "linear-gradient(180deg, #48221A 0%, #110302 100%);",
        cardBorder: "linear-gradient(180deg, #DE3A2F 0%, #F3F3F3 100%);",
        title:
          "linear-gradient(90deg, rgba(222, 58, 47, 0.00) 0%, #DE3A2F 51.56%, rgba(222, 58, 47, 0.00) 100%);",
        separator:
          "linear-gradient(90deg, #DE3A2F 0%, rgba(222, 58, 47, 0.00) 49.48%, #DE3A2F 100%);",
        check: 'url("../public/assets/check.svg")',
      },
    },
  },
  darkMode: "class",
  plugins: [require("tailwind-scrollbar"), nextui()],
};
