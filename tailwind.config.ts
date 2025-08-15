import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Rubik Dirt", "sans-serif"],
        title: ["Inter", "sans-serif"],
        description: ["DM Serif Text", "sans-serif"]
      },
    },
  },
  plugins: [],
};

export default config;
