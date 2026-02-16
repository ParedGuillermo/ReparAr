/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",   // Azul ReparAr
        darkbg: "#0f172a",    // Fondo oscuro profesional
      },

      animation: {
        pulsewhatsapp: "pulsewhatsapp 2s infinite",
      },

      keyframes: {
        pulsewhatsapp: {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)",
          },
          "50%": {
            boxShadow: "0 0 0 15px rgba(37, 211, 102, 0)",
          },
        },
      },

    },
  },
  plugins: [],
}
