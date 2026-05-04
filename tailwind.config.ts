import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#080808",
          800: "#0f0f0f",
          700: "#161616",
          600: "#1e1e1e",
          500: "#2a2a2a",
          400: "#3d3d3d",
        },
        kred: {
          DEFAULT: "#e11d48",
          light: "#f43f5e",
          dark: "#be123c",
        },
        smoke: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          400: "#a3a3a3",
          600: "#737373",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
