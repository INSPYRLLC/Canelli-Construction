/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#141414',
        'surface-secondary': '#1E1E1E',
        primary: '#D4AF37',
        'primary-hover': '#B8962B',
        border: '#27272A',
      },
      fontFamily: {
        heading: ['Cabinet Grotesk', 'Manrope', 'sans-serif'],
        body: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
