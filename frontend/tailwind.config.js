/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Nunito'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        brand: {
          violet: "#7C3AED",
          indigo: "#4F46E5",
          cyan: "#06B6D4",
          amber: "#F59E0B",
          rose: "#F43F5E",
          mint: "#10B981",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
