/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pregular: "",
        pbold: "",
        pthin: "",
        pmedium: "",
        psemibold: "",
        pextrabold: "",
        plight: "",
        gregular: "",
        gbold: "",
        gthin: "",
        gmedium: "",
        gsemibold: "",
        gextrabold: "",
        glight: "",
      }
    },
  },
  plugins: [],
}