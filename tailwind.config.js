/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#ffffff",
        background: "#f3f4f6",
        primary: "#f97316",
        activeBg: "#fff7ed",
        textPrimary: "#2d2d2d",
        textSecondary: "#6b7280",
        borderLight: "#e5e7eb",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
