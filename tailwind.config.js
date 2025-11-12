/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx.html}"],
  theme: {
    extend: {
      colors: {
         linen: "#FFF8F2",
        rose: "#E8A0B0",
        gold: "#D9B44A",
        cocoa: "#4B3832",
        graphite: "#2F2E2E",
        champagne: "#F6E2C0",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25px)" },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fall: {
          "0%": { transform: "translateY(-100vh)", opacity: 0 },
          "100%": { transform: "translateY(100vh)", opacity: 1 },
        },
      },
      fontFamily: {
        lucida: ['"Lucida Handwriting"', 'cursive'],
        rage: ['"Rage Italic"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      animation: {
       float: "float 8s ease-in-out infinite",
        fadeInUp: "fadeInUp 1.2s ease-out forwards",
        fall: "fall 5s linear infinite",
      },
    },
  },
  plugins: [],
};
