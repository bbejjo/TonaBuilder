import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tona: {
          50: "#fffdf2",
          100: "#fff8d9",
          200: "#ffefae",
          300: "#ffe27a",
          400: "#ffd44a",
          500: "#f4c51d",
          600: "#d7a80f",
          700: "#ab830f",
          800: "#896814",
          900: "#725615",
        },
        ocean: {
          50: "#f5f9ff",
          100: "#eaf2ff",
          200: "#d6e6ff",
          300: "#b3d0ff",
          400: "#7fb0ff",
          500: "#4a8fff",
          600: "#2568d8",
          700: "#1d4ea8",
          800: "#1d3f82",
          900: "#1c325f",
          950: "#10233f",
        },
        slate: {
          950: "#0b1b34",
        },
      },
      boxShadow: {
        panel: "0 18px 45px rgba(30, 65, 124, 0.12)",
        glow: "0 0 0 1px rgba(37, 104, 216, 0.14), 0 20px 45px rgba(244, 197, 29, 0.14)",
      },
      fontFamily: {
        body: ["var(--font-body)"],
        display: ["var(--font-display)"],
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
