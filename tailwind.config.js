/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "helvetica-regular": ["Helvetica-Now-Display-Regular"],
        "helvetica-medium": ["Helvetica-Now-Display-Medium"],
        "helvetica-bold": ["Helvetica-Now-Display-Bold"],
      }
    },
  },
  plugins: [],
}

