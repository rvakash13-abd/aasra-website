import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        aasra: {
          light: "#5472D3",
          DEFAULT: "#0D47A1",
          dark: "#08306B",
        },
      },
    },
  },
  plugins: [],
};

export default config;
