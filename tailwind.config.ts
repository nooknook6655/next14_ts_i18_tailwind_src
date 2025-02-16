import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#AEDFF5",
          100: "#AEDFF5", // ค่าสี primary-100
          200: "#05B4EF", // ค่าสี primary-200
          300: "#06B4EF", // ค่าสี primary-300
          400: "#04A7E7", // ค่าสี primary-400
        },
        warning: {
          default: "#f7b03c",
          100: "#f7b03c", // ค่าสี primary-100
          200: "#f7b04c", // ค่าสี primary-200
          300: "#f7b05c", // ค่าสี primary-300
          400: "#f7b06c", // ค่าสี primary-400
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
