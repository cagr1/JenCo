/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
  
      "floral-white": {
        "50": "#fff3e5",
        "100": "#ffe7cc",
        "200": "#ffcf99",
        "300": "#ffb866",
        "400": "#ffa033",
        "500": "#ff8800",
        "600": "#cc6d00",
        "700": "#995200",
        "800": "#663600",
        "900": "#331b00",
        "950": "#241300"
      },
      "antique-white": {
        "50": "#faf3ea",
        "100": "#f6e8d5",
        "200": "#ecd0ac",
        "300": "#e3b982",
        "400": "#d9a259",
        "500": "#d08a2f",
        "600": "#a66f26",
        "700": "#7d531c",
        "800": "#533713",
        "900": "#2a1c09",
        "950": "#1d1307"
      },
      "cinnamon-wood": {
        "50": "#f9f0ec",
        "100": "#f2e1d9",
        "200": "#e6c3b3",
        "300": "#d9a48c",
        "400": "#cc8666",
        "500": "#bf6840",
        "600": "#995333",
        "700": "#733e26",
        "800": "#4d2a19",
        "900": "#26150d",
        "950": "#1b0f09"
      },
      "muted-olive": {
        "50": "#f2f5f0",
        "100": "#e6ebe0",
        "200": "#ccd6c2",
        "300": "#b3c2a3",
        "400": "#9aad85",
        "500": "#809966",
        "600": "#677a52",
        "700": "#4d5c3d",
        "800": "#333d29",
        "900": "#1a1f14",
        "950": "#12150e"
      },
      "olive-wood": {
        "50": "#f6f3ee",
        "100": "#eee7dd",
        "200": "#dccfbc",
        "300": "#cbb79a",
        "400": "#ba9e78",
        "500": "#a88657",
        "600": "#876b45",
        "700": "#655134",
        "800": "#433623",
        "900": "#221b11",
        "950": "#18130c"
      },
      "shadow-grey": {
        "50": "#f4f1f1",
        "100": "#e8e3e3",
        "200": "#d2c6c6",
        "300": "#bbaaaa",
        "400": "#a48e8e",
        "500": "#8e7171",
        "600": "#715b5b",
        "700": "#554444",
        "800": "#392d2d",
        "900": "#1c1717",
        "950": "#141010"
      },
      "powder-blush": {
        "50": "#faeeeb",
        "100": "#f4dcd7",
        "200": "#eab9ae",
        "300": "#df9686",
        "400": "#d4745e",
        "500": "#c95136",
        "600": "#a1412b",
        "700": "#793020",
        "800": "#512015",
        "900": "#28100b",
        "950": "#1c0b07"
      },
      "porcelain": {
        "50": "#fffbe5",
        "100": "#fff6cc",
        "200": "#ffee99",
        "300": "#ffe666",
        "400": "#ffdd33",
        "500": "#ffd500",
        "600": "#ccaa00",
        "700": "#998000",
        "800": "#665500",
        "900": "#332b00",
        "950": "#241e00"
      }

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



