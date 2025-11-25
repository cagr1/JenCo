/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        // Coolors palette: https://coolors.co/palette/463f3a-8a817c-bcb8b1-f4f3ee-e0afa0
        cocoa: "#463f3a",      // Dark brown-gray
        graphite: "#8a817c",   // Medium gray-brown
        champagne: "#bcb8b1",  // Light neutral gray
        linen: "#f4f3ee",      // Lightest cream/beige
        rose: "#e0afa0",       // Peachy pink accent
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
        // AGREGADO: Hero gradient animation
        HeroAnimation: {
          "0%": { backgroundPosition: "92% 0%" },
          "50%": { backgroundPosition: "9% 100%" },
          "100%": { backgroundPosition: "92% 0%" },
        },
      },
      fontFamily: {
        lucida: ['"Lucida Handwriting"', 'cursive'],
        rage: ['"Rage Italic"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['"Inter"', 'sans-serif'],
        haviland: ["Mr De Haviland", 'cursive'],
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        fadeInUp: "fadeInUp 1.2s ease-out forwards",
        fall: "fall 5s linear infinite",
        // AGREGADO: Hero gradient animation
        'hero-gradient': "HeroAnimation 14s ease infinite",
      },
    },
  },
  plugins: [],
};