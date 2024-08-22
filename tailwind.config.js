/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to bottom,  rgba(4,49,93,1) 0%,rgba(125,185,232,0) 100%)",
     },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      "primary": "#26A0F8",
      "info":"#0066CC",
      "secondary":"#1F1F1F",
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'eerie-black': '#1a1a1a',
      'dreamless-sleep': '#111111',
      'karimun-blue': '#1e8af2',
      'beluga': '#f1f1f1',
      'marine': '#04315d',
    },
  },
  plugins: [],
};
