/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 56px rgba(103, 110, 130, 0.12), 0 4px 20px rgba(124, 115, 105, 0.08)',
        'inner-soft': 'inset 0 1px 1px rgba(255,255,255,0.8), inset 0 -10px 24px rgba(162, 169, 187, 0.1)',
        'soft-tile': '0 10px 22px rgba(122, 130, 149, 0.14), inset 0 1px 0 rgba(255,255,255,0.75)',
      },
      borderRadius: {
        mega: '32px',
      },
    },
  },
  plugins: [],
}
