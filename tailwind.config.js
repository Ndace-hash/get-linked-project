/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-one": '#FE34B9',
        "primary-two": "#903AFF",
        "secondary-major": "#150E28",
        "secondary-minor": "#D434FE",
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "clash-display": ["Clash Display", "sans-serif"]
      },
      fontSize: {
        "desktop-heading-1": '80px',
        "desktop-heading-2": '32px',
        "desktop-heading-3": "16px",
        "desktop-paragraph": "14px",
        "desktop-subtext": "20px",
        "mobile-paragraph": "13px"
      },
    },
  },
  plugins: [],
}

