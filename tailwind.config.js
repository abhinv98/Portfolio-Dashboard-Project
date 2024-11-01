module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--color-primary-50) / <alpha-value>)",
          100: "rgb(var(--color-primary-100) / <alpha-value>)",
          200: "rgb(var(--color-primary-200) / <alpha-value>)",
          300: "rgb(var(--color-primary-300) / <alpha-value>)",
          400: "rgb(var(--color-primary-400) / <alpha-value>)",
          500: "rgb(var(--color-primary-500) / <alpha-value>)",
          600: "rgb(var(--color-primary-600) / <alpha-value>)",
          700: "rgb(var(--color-primary-700) / <alpha-value>)",
          800: "rgb(var(--color-primary-800) / <alpha-value>)",
          900: "rgb(var(--color-primary-900) / <alpha-value>)",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-in": "slideIn 0.5s ease-out",
        "spin-slow": "spin 8s linear infinite",
        "pulse-scale": "pulseScale 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        progress: "progress 2.5s ease-in-out infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        bounce: "bounce 1s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) translateY(0)",
          },
          "50%": {
            transform: "translate(-50%, -50%) translateY(-20px)",
          },
        },
        progress: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "50%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        pulseScale: {
          "0%, 100%": {
            transform: "scale(0.95)",
            opacity: "0.5",
          },
          "50%": {
            transform: "scale(1)",
            opacity: "0.8",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      backgroundImage: {
        "grid-primary-700":
          "linear-gradient(to right, rgb(var(--color-primary-700) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-primary-700) / 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
