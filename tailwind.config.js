/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['"Cormorant"']
      },
      backgroundImage: {
        gradient: ['url("./src/assets/gradient.png")'],
        footer: ['url("./src/assets/footerImage.png")']
      }
    },
  },
  plugins: [],
}