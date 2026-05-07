import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        secondary: "#15803d",
        accent: "#f59e0b",
        ink: "#101410"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 42px rgba(22, 163, 74, 0.26)",
        "green-glow": "0 0 36px rgba(245, 158, 11, 0.2)"
      },
      backgroundImage: {
        "radial-farm":
          "radial-gradient(circle at top left, rgba(22, 163, 74, 0.22), transparent 34%), radial-gradient(circle at 78% 18%, rgba(245, 158, 11, 0.14), transparent 30%), radial-gradient(circle at 52% 92%, rgba(132, 204, 22, 0.12), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
