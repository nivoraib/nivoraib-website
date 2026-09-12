import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#060e1a",
          900: "#0b192c",
          850: "#0f223d",
          800: "#162e50",
          750: "#1a345c",
          700: "#1e3c66",
          600: "#2a528a",
          500: "#3b6fae",
          100: "#e5edf8",
          50: "#f0f5fc",
        },
        brand: {
          lavender: "#9fa8f8",
          purple: "#7c3aed",
          indigo: "#6366f1",
          soft: "#c4cbfa",
          light: "#eef2ff",
          dark: "#4f46e5",
        },
        verified: {
          50: "#ecfdf5",
          100: "#d1fae5",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
        },
        slate: {
          850: "#151e2e",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Sora", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "2xs": "0 1px 2px rgba(11, 25, 44, 0.04)",
        subtle: "0 1px 3px rgba(11,25,44,0.06), 0 1px 2px rgba(11,25,44,0.04)",
        card: "0 10px 30px -5px rgba(11, 25, 44, 0.08), 0 4px 6px -2px rgba(11, 25, 44, 0.04)",
        "card-hover": "0 20px 40px -10px rgba(11, 25, 44, 0.12), 0 8px 12px -4px rgba(11, 25, 44, 0.06)",
        glow: "0 0 35px rgba(159, 168, 248, 0.35)",
      },
      scale: {
        98: "0.98",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
        "3xl": "24px",
      }
    },
  },
  plugins: [],
};

export default config;
