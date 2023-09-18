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
      }
    },
  },
  plugins: [],
}

