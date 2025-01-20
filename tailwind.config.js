/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        pregular: "Poppins-Regular",
        pbold: "Poppins-Bold",
        pthin: "Poppins-Thin",
        pmedium: "Poppins-Medium",
        psemibold: "Poppins-SemiBold",
        pextrabold: "Poppins-ExtraBold",
        plight: "Poppins-Light",
        gregular: "Geist-Regular",
        gbold: "Geist-Bold",
        gthin: "Geist-Thin",
        gmedium: "Geist-Medium",
        gsemibold: "Geist-SemiBold",
        gextrabold: "Geist-ExtraBold",
        glight: "Geist-Light",
      }
    },
  },
  plugins: [],
}