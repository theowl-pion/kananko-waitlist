/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        "pulse-soft": "pulse-soft 3s infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        "pulse-soft": {
          "0%, 100%": {
            opacity: 1,
          },
          "50%": {
            opacity: 0.8,
          },
        },
        glow: {
          "0%": {
            textShadow: "0 0 5px rgba(255, 255, 255, 0.5)",
          },
          "100%": {
            textShadow:
              "0 0 15px rgba(255, 255, 255, 0.8), 0 0 30px rgba(79, 209, 197, 0.6)",
          },
        },
        float: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 15px rgba(59, 130, 246, 0.5)",
        "glow-purple": "0 0 15px rgba(168, 85, 247, 0.5)",
        "glow-green": "0 0 15px rgba(16, 185, 129, 0.5)",
        "glow-pink": "0 0 15px rgba(236, 72, 153, 0.5)",
        "glow-amber": "0 0 15px rgba(245, 158, 11, 0.5)",
        "glow-cyan": "0 0 15px rgba(6, 182, 212, 0.5)",
        "glow-lg":
          "0 0 25px rgba(79, 209, 197, 0.3), 0 0 8px rgba(79, 209, 197, 0.2)",
      },
      dropShadow: {
        glow: "0 0 8px rgba(255,255,255,0.5)",
      },
      textShadow: {
        glow: "0 0 8px rgba(255,255,255,0.5)",
      },
    },
  },
  plugins: [],
  // Custom utility classes
  utilities: {
    ".animation-delay-2000": {
      "animation-delay": "2s",
    },
    ".animation-delay-4000": {
      "animation-delay": "4s",
    },
    ".text-glow": {
      "text-shadow": "0 0 8px rgba(255,255,255,0.5)",
    },
  },
};
