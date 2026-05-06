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
        primary: "#8b5cf6",
        secondary: "#6b21a8",
        accent: "#22c55e",
        ink: "#0f172a"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 55px rgba(139, 92, 246, 0.35)",
        "green-glow": "0 0 45px rgba(34, 197, 94, 0.22)"
      },
      backgroundImage: {
        "radial-farm":
          "radial-gradient(circle at top left, rgba(139, 92, 246, 0.28), transparent 35%), radial-gradient(circle at 75% 20%, rgba(34, 197, 94, 0.18), transparent 32%)"
      }
    }
  },
  plugins: []
};

export default config;
