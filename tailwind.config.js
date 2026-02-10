/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#091d57',
        card: '#0f2c78',
        soft: '#f0f4ff',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        dreamy: '0 20px 50px rgba(7, 17, 51, 0.55)',
      },
      borderRadius: {
        mega: '32px',
      },
    },
  },
  plugins: [],
}
