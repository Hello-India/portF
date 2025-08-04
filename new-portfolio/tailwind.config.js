/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#52b0ff',
        secondary: '#83c0ff',
        background: '#0e1117',
        surface: '#121731',
        text: '#e6e9f0',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        bricolage: ['Bricolage Grotesque', 'sans-serif'],
      },
    },
  },
  plugins: [],
}