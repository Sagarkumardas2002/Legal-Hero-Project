import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#4361EE",
          primaryHover: "#3451D8",
          bg: "#ECEEF8",
          bgDark: "#0F0E1A",
          text: "#3D3A6B",
          textDark: "#E8E6FF",
          muted: "#6B6899",
          mutedDark: "#9996C8",
          surface: "#DDE0F7",
          surfaceDark: "#2A2850",
          border: "#C7CBF5",
          borderDark: "#3D3A6B",
          blob: "#C7CBF5",
          blobDark: "#2A2850",
        },
        card: {
          blue: "#4361EE",
          orange: "#D4612A",
          dark: "#1E1B2E",
          light: "#C7CBF5",
        },
      },
      animation: {
        "float-1": "float-a 4.2s ease-in-out infinite",
        "float-2": "float-b 5.0s ease-in-out infinite",
        "float-3": "float-c 3.8s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        "card-enter": "card-enter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both",
      },
      keyframes: {
        "float-a": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-b": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-c": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "card-enter": {
          from: { opacity: "0", transform: "scale(0.85) translateY(16px)" },
          to: { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
