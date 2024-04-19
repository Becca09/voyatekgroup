import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/assets/images/banner.jpg')",
      },

      borderRadius: {},

      colors: {
        primary: {
          50: "#0D6EFD",
          100: "#000031",
          200: "#E7F0FF",
          300: "#FFFFFF",
          400: "#647995",
        },
        secondary: {
          100: "#0A369D",
          200: "#344054",
          300: "#F0F2F5",
          400: "#FBEAE9",
          500: "#FEF4E6",
          600: "#7A4504",
        },
        warning: {
          100: "#FFCC33",
        },
        error: {
          100: "#FBEAE9",
        },
        green: {
          100: "#00CC99",
        },
      },
      fontFamily: {
        primary: ["var(--font-poppins)", "san-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
