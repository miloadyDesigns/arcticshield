/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['roboto'],
        salvatoro: ['salvatoro']
      },
      boxShadow: {
        'custom-glow': '0 0 5px rgb(219, 14, 14), 0 0 15px rgb(196, 23, 17), 0 0 30px rgb(199, 22, 16), 0 0 60px rgb(216, 19, 19)',
        'custom-glow-light': '0 0 5px rgba(219, 14, 14, 0.6), 0 0 15px rgba(196, 23, 17, 0.6), 0 0 30px rgba(199, 22, 16, 0.6), 0 0 60px rgba(216, 19, 19, 0.6)',

      },
    },
  },
  plugins: [],

};