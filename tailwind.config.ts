import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 80px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "glass-gradient": "radial-gradient(circle at top, rgba(56, 189, 248, 0.2), transparent 35%), radial-gradient(circle at 80% 10%, rgba(168, 85, 247, 0.16), transparent 28%)",
      },
      colors: {
        surface: "#0b1220",
        surface2: "#111a2b",
        accent: "#7c3aed",
        accent2: "#38bdf8",
        border: "rgba(148, 163, 184, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
