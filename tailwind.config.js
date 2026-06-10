/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui"]
      },
      colors: {
        ink: "#050712",
        panel: "rgba(13, 18, 37, 0.74)",
        electric: "#38bdf8",
        violet: "#8b5cf6",
        mint: "#2dd4bf"
      },
      boxShadow: {
        glow: "0 0 45px rgba(56, 189, 248, 0.28)",
        violet: "0 0 55px rgba(139, 92, 246, 0.25)"
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        shimmer: "shimmer 2.8s linear infinite",
        wave: "wave 16s linear infinite"
      }
    }
  },
  plugins: []
};
